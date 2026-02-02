import { BookRepository } from '../repositories/book.repository';
import { IBook, IBookDocument } from '../models/book.model';
import mongoose from 'mongoose';

export class BookService {
  private bookRepository: BookRepository;

  constructor() {
    this.bookRepository = new BookRepository();
  }

  async createBook(bookData: IBook): Promise<IBookDocument> {
    if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.publishedYear || !bookData.genre) {
      throw new Error('All fields are required');
    }

    return await this.bookRepository.create(bookData);
  }

  async getAllBooks(): Promise<IBookDocument[]> {
    return await this.bookRepository.findAll();
  }

  async getBookById(id: string): Promise<IBookDocument> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid book ID');
    }

    const book = await this.bookRepository.findById(id);
    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }

  async updateBook(id: string, bookData: Partial<IBook>): Promise<IBookDocument> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid book ID');
    }

    const book = await this.bookRepository.update(id, bookData);
    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }

  async deleteBook(id: string): Promise<IBookDocument> {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new Error('Invalid book ID');
    }

    const book = await this.bookRepository.delete(id);
    if (!book) {
      throw new Error('Book not found');
    }

    return book;
  }
}
