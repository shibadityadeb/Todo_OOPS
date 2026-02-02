import { Book, IBook, IBookDocument } from '../models/book.model';

export class BookRepository {
  async create(bookData: IBook): Promise<IBookDocument> {
    const book = new Book(bookData);
    return await book.save();
  }

  async findAll(): Promise<IBookDocument[]> {
    return await Book.find();
  }

  async findById(id: string): Promise<IBookDocument | null> {
    return await Book.findById(id);
  }

  async update(id: string, bookData: Partial<IBook>): Promise<IBookDocument | null> {
    return await Book.findByIdAndUpdate(id, bookData, { new: true, runValidators: true });
  }

  async delete(id: string): Promise<IBookDocument | null> {
    return await Book.findByIdAndDelete(id);
  }
}
