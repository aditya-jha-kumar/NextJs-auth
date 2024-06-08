import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export async function connect() {
  try {
    const mongoUri = process.env.MONGO_URI!;

    if (!mongoUri) {
      throw new Error("MONGO_URI is not defined in the environment variables");
    }

    await mongoose.connect(mongoUri);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "mongodb connection error. Please make sure MongoDB is running. " + err
      );
      process.exit(1); // Exit the process with a non-zero status code to indicate an error
    });
  } catch (error) {
    console.log("Something is wrong!");
    console.log(error);
  }
}
