import mongoose from "mongoose";

const connectDB = async () => {
  try {
    // Log when connected
    mongoose.connection.on("connected", () => {
      console.log("MongoDB connected successfully...");
    });

    mongoose.connection.on("error", (err) => {
      console.log("MongoDB connection error:", err);
    });

    await mongoose.connect(`${process.env.MONGODB_URL}/DUKAN`);
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1); // optional: stop the server
  }
};

export default connectDB;
