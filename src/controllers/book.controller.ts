import { Request, Response } from 'express';
import { BookService } from '../services/book.service';

export class BookController {
  private bookService: BookService;

  constructor() {
    this.bookService = new BookService();
  }

  createBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.createBook(req.body);
      res.status(201).json(book);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(400).json({ error: 'Failed to create book' });
      }
    }
  };

  getAllBooks = async (req: Request, res: Response): Promise<void> => {
    try {
      const books = await this.bookService.getAllBooks();
      res.status(200).json(books);
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json({ error: error.message });
      } else {
        res.status(500).json({ error: 'Failed to fetch books' });
      }
    }
  };

  getBookById = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.getBookById(req.params.id as string);
      res.status(200).json(book);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Book not found') {
          res.status(404).json({ error: error.message });
        } else {
          res.status(400).json({ error: error.message });
        }
      } else {
        res.status(400).json({ error: 'Failed to fetch book' });
      }
    }
  };

  updateBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.updateBook(req.params.id as string, req.body);
      res.status(200).json(book);
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Book not found') {
          res.status(404).json({ error: error.message });
        } else {
          res.status(400).json({ error: error.message });
        }
      } else {
        res.status(400).json({ error: 'Failed to update book' });
      }
    }
  };

  deleteBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await this.bookService.deleteBook(req.params.id as string);
      res.status(200).json({ message: 'Book deleted successfully', book });
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === 'Book not found') {
          res.status(404).json({ error: error.message });
        } else {
          res.status(400).json({ error: error.message });
        }
      } else {
        res.status(400).json({ error: 'Failed to delete book' });
      }
    }
  };
}
