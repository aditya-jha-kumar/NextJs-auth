import mongoose from "mongoose";

export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URL!);
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("mongodb connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "mongodb connnection error. please make sure mongodb is running." + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something is wrong!");
    console.log(error);
  }
}
