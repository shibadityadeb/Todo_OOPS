import mongoose, { Schema, Document } from 'mongoose';

export interface IBook {
  title: string;
  author: string;
  isbn: string;
  publishedYear: number;
  genre: string;
}

export interface IBookDocument extends IBook, Document {
  createdAt: Date;
  updatedAt: Date;
}

const bookSchema = new Schema<IBookDocument>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    isbn: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    publishedYear: {
      type: Number,
      required: true,
    },
    genre: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model<IBookDocument>('Book', bookSchema);
