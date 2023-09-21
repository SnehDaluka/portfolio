import mongoose from "mongoose";

let isConnected = false;
const DB: string = process.env.MONGODB_URI ? process.env.MONGODB_URI : "";

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(DB, {
      dbName: "portfolio",
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
