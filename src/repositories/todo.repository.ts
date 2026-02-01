import { ITodo } from "../models/todo.model";
export class TodoRepository {
  private todos: ITodo[] = [];
  private currentId: number = 1;
  async create(todoData: Omit<ITodo, "id"| "createdAt" |"updatedAt">): Promise<ITodo> {
    const now = new Date();
    const todo: ITodo ={
      id: String(this.currentId++),
      ...todoData,
      createdAt: now,
      updatedAt: now,
    };
    this.todos.push(todo);
    return todo;
  }
  async findAll():Promise<ITodo[]> {
    return this.todos;
  }

  async findById(id: string): Promise<ITodo | null> {
    const todo = this.todos.find((t) => t.id === id);
    return todo ||null;
  }
  async update(id: string, todoData:Partial<Omit<ITodo, "id" | "createdAt" | "updatedAt">>): Promise<ITodo | null> {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return null;
    this.todos[index] = {
      ...this.todos[index],
      ...todoData,
      updatedAt: new Date(),
    };
    return this.todos[index];
  }

  async delete(id: string): Promise<ITodo | null> {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1) return null;
    const deleted = this.todos[index];
    this.todos.splice(index, 1);
    return deleted;
  }
}
