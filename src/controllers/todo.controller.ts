import {Request, Response} from "express";
import {TodoService} from "../services/todo.service";
export class TodoController {
  private service: TodoService;
  constructor() {
    this.service = new TodoService();
  }
  createTodo=async(req: Request, res: Response): Promise<void> => {
    try {
      const todo =await this.service.createTodo(req.body);
      res.status(201).json(todo);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  getAllTodos = async (req: Request, res: Response): Promise<void> => {
    try {
      const todos = await this.service.getAllTodos();
      res.status(200).json(todos);
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
  getTodoById = async(req: Request, res: Response):Promise<void> => {
    try{
      const todo = await this.service.getTodoById(req.params.id as string);
      res.status(200).json(todo);
    } catch (error) {
      if (error instanceof Error){
        const status = error.message ==="Todo not found" ? 404 : 400;
        res.status(status).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };

  updateTodo=async(req: Request, res: Response): Promise<void> =>{
    try {
      const todo = await this.service.updateTodo(req.params.id as string, req.body);
      res.status(200).json(todo);
    } catch (error) {
      if (error instanceof Error) {
        const status = error.message === "Todo not found" ? 404 : 400;
        res.status(status).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };

  deleteTodo = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.service.deleteTodo(req.params.id as string);
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (error) {
      if (error instanceof Error) {
        const status = error.message === "Todo not found" ? 404 : 400;
        res.status(status).json({ error: error.message });
      } else {
        res.status(500).json({ error: "Internal server error" });
      }
    }
  };
}
