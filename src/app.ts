import express, { Application, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

import connectDB from "./db/conn";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (_, res: Response) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the BirthBridge Test API",
  });
});

const PORT = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error: any) {
    console.error("Error starting server: ", error);
  }
};

startServer();
