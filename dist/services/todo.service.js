"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoService = void 0;
const todo_repository_1 = require("../repositories/todo.repository");
class TodoService {
    constructor() {
        this.repository = new todo_repository_1.TodoRepository();
    }
    async createTodo(todoData) {
        if (!todoData.title || !todoData.description) {
            throw new Error("Title and description are required");
        }
        return await this.repository.create({
            title: todoData.title.trim(),
            description: todoData.description.trim(),
            completed: todoData.completed || false,
        });
    }
    async getAllTodos() {
        return await this.repository.findAll();
    }
    async getTodoById(id) {
        const todo = await this.repository.findById(id);
        if (!todo) {
            throw new Error("Todo not found");
        }
        return todo;
    }
    async updateTodo(id, todoData) {
        const todo = await this.repository.update(id, todoData);
        if (!todo) {
            throw new Error("Todo not found");
        }
        return todo;
    }
    async deleteTodo(id) {
        const todo = await this.repository.delete(id);
        if (!todo) {
            throw new Error("Todo not found");
        }
    }
}
exports.TodoService = TodoService;
