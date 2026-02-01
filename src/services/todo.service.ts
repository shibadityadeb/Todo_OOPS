import { TodoRepository } from "../repositories/todo.repository";
import { ITodo } from "../models/todo.model";

export class TodoService {
  private repository: TodoRepository;

  constructor() {
    this.repository = new TodoRepository();
  }

  async createTodo(todoData: { title: string; description: string; completed?: boolean }): Promise<ITodo> {
    if (!todoData.title || !todoData.description) {
      throw new Error("Title and description are required");
    }

    return await this.repository.create({
      title: todoData.title.trim(),
      description: todoData.description.trim(),
      completed: todoData.completed || false,
    });
  }

  async getAllTodos(): Promise<ITodo[]> {
    return await this.repository.findAll();
  }

  async getTodoById(id: string): Promise<ITodo> {
    const todo = await this.repository.findById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async updateTodo(id: string, todoData: Partial<{ title: string; description: string; completed: boolean }>): Promise<ITodo> {
    const todo = await this.repository.update(id, todoData);
    if (!todo) {
      throw new Error("Todo not found");
    }

    return todo;
  }

  async deleteTodo(id: string): Promise<void> {
    const todo = await this.repository.delete(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
  }
}
