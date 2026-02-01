"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const book_repository_1 = require("../repositories/book.repository");
class BookService {
    constructor() {
        this.repository = new book_repository_1.BookRepository();
    }
    async createBook(bookData) {
        if (!bookData.title || !bookData.author || !bookData.isbn || !bookData.publishedYear || !bookData.price) {
            throw new Error("All fields are required");
        }
        if (bookData.publishedYear < 0 || bookData.price < 0) {
            throw new Error("Published year and price must be positive");
        }
        return await this.repository.create(bookData);
    }
    async getAllBooks() {
        return await this.repository.findAll();
    }
    async getBookById(id) {
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid book ID");
        }
        const book = await this.repository.findById(id);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }
    async updateBook(id, bookData) {
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid book ID");
        }
        if (bookData.publishedYear !== undefined && bookData.publishedYear < 0) {
            throw new Error("Published year must be positive");
        }
        if (bookData.price !== undefined && bookData.price < 0) {
            throw new Error("Price must be positive");
        }
        const book = await this.repository.update(id, bookData);
        if (!book) {
            throw new Error("Book not found");
        }
        return book;
    }
    async deleteBook(id) {
        if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
            throw new Error("Invalid book ID");
        }
        const book = await this.repository.delete(id);
        if (!book) {
            throw new Error("Book not found");
        }
    }
}
exports.BookService = BookService;
