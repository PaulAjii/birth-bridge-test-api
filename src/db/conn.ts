import mongoose from "mongoose";

const connectDB = async (url: string) => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(url);
    console.log("Connected to the database");
  } catch (error: any) {
    console.error("Error connecting to the database", error.message);
  }
};

export default connectDB;
