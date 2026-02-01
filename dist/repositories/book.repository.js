"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepository = void 0;
const book_model_1 = require("../models/book.model");
class BookRepository {
    async create(bookData) {
        const book = new book_model_1.Book(bookData);
        return await book.save();
    }
    async findAll() {
        return await book_model_1.Book.find();
    }
    async findById(id) {
        return await book_model_1.Book.findById(id);
    }
    async update(id, bookData) {
        return await book_model_1.Book.findByIdAndUpdate(id, bookData, { new: true, runValidators: true });
    }
    async delete(id) {
        return await book_model_1.Book.findByIdAndDelete(id);
    }
}
exports.BookRepository = BookRepository;
