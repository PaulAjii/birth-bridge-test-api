import { Request, Response, NextFunction } from "express";

export interface CustomError extends Error {
  statusCode?: number;
  code?: number;
  errors?: Record<string, { message: string }>;
}

const errorMiddleware = (
  err: CustomError,
  _req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    const error = { ...err };
    error.message = err.message;

    // Error Types
    // 1. Mongoose bad ObjectId
    if (err.name === "CastError") {
      error.message = "Resource not found";
      error.statusCode = 404;
    }

    // 2. Mongoose duplicate key
    if (err.code === 11000) {
      error.message = `Duplicate field value entered`;
      error.statusCode = 400;
    }

    // 3. Mongoose validation error
    if (err.name === "ValidationError" && err.errors) {
      const messages = Object.values(err.errors).map((val) => val.message);
      error.message = messages.join(", ");
      error.statusCode = 400;
    }

    res.status(error.statusCode || 500).json({
      status: "error",
      message: error.message || "Server Error",
    });
  } catch (error) {
    next(error);
  }
};

export default errorMiddleware;
