"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookController = void 0;
const book_service_1 = require("../services/book.service");
class BookController {
    constructor() {
        this.createBook = async (req, res) => {
            try {
                const book = await this.service.createBook(req.body);
                res.status(201).json(book);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.getAllBooks = async (req, res) => {
            try {
                const books = await this.service.getAllBooks();
                res.status(200).json(books);
            }
            catch (error) {
                if (error instanceof Error) {
                    res.status(400).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.getBookById = async (req, res) => {
            try {
                const book = await this.service.getBookById(req.params.id);
                res.status(200).json(book);
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Book not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.updateBook = async (req, res) => {
            try {
                const book = await this.service.updateBook(req.params.id, req.body);
                res.status(200).json(book);
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Book not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.deleteBook = async (req, res) => {
            try {
                await this.service.deleteBook(req.params.id);
                res.status(200).json({ message: "Book deleted successfully" });
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Book not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.service = new book_service_1.BookService();
    }
}
exports.BookController = BookController;
