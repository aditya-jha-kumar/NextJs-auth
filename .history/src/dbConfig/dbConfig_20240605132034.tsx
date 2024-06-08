import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
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
