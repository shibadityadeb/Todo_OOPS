import express from "express";
import bookRoutes from "./routes/book.routes";

class App {
  app: express.Application;
  port: number | string = 8080;

  constructor() {
    this.app = express();
    this.initializeMiddlewares();
    this.initializeRoutes();
  }

  private initializeMiddlewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initializeRoutes(): void {
    this.app.get("/", (req, res) => {
      res.send("Book API is running");
    });
    this.app.use("/api/books", bookRoutes);
  }

  startServer(): void {
    this.app.listen(this.port, () => {
      console.log(`Server started on port ${this.port}`);
    });
  }
}

export default App;