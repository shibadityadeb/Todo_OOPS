"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoController = void 0;
const todo_service_1 = require("../services/todo.service");
class TodoController {
    constructor() {
        this.createTodo = async (req, res) => {
            try {
                const todo = await this.service.createTodo(req.body);
                res.status(201).json(todo);
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
        this.getAllTodos = async (req, res) => {
            try {
                const todos = await this.service.getAllTodos();
                res.status(200).json(todos);
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
        this.getTodoById = async (req, res) => {
            try {
                const todo = await this.service.getTodoById(req.params.id);
                res.status(200).json(todo);
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Todo not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.updateTodo = async (req, res) => {
            try {
                const todo = await this.service.updateTodo(req.params.id, req.body);
                res.status(200).json(todo);
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Todo not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.deleteTodo = async (req, res) => {
            try {
                await this.service.deleteTodo(req.params.id);
                res.status(200).json({ message: "Todo deleted successfully" });
            }
            catch (error) {
                if (error instanceof Error) {
                    const status = error.message === "Todo not found" ? 404 : 400;
                    res.status(status).json({ error: error.message });
                }
                else {
                    res.status(500).json({ error: "Internal server error" });
                }
            }
        };
        this.service = new todo_service_1.TodoService();
    }
}
exports.TodoController = TodoController;
