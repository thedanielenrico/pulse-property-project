import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  //   if the database is already connected, don't connect again
  if (connected) {
    console.log("MongoDB is already connected");
    return;
  }
  //   connect to database here
  try {
    console.log("Attempting to connect to mongodb now...");
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB is now connected");
  } catch (err) {
    console.log("ERROR", err);
  }
};

export default connectDB;
