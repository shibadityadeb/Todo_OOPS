"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRepository = void 0;
class TodoRepository {
    constructor() {
        this.todos = [];
        this.currentId = 1;
    }
    async create(todoData) {
        const now = new Date();
        const todo = {
            id: String(this.currentId++),
            ...todoData,
            createdAt: now,
            updatedAt: now,
        };
        this.todos.push(todo);
        return todo;
    }
    async findAll() {
        return this.todos;
    }
    async findById(id) {
        const todo = this.todos.find((t) => t.id === id);
        return todo || null;
    }
    async update(id, todoData) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1)
            return null;
        this.todos[index] = {
            ...this.todos[index],
            ...todoData,
            updatedAt: new Date(),
        };
        return this.todos[index];
    }
    async delete(id) {
        const index = this.todos.findIndex((t) => t.id === id);
        if (index === -1)
            return null;
        const deleted = this.todos[index];
        this.todos.splice(index, 1);
        return deleted;
    }
}
exports.TodoRepository = TodoRepository;
