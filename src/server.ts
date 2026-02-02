import mongoose from 'mongoose';
import App from "./app";

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/bookstore';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    const app = new App();
    app.startServer();
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }); 