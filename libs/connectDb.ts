import mongoose from "mongoose";

const uri = "mongodb+srv://todo:Zxcv1001@cluster0.fq5chxs.mongodb.net/";
const connectDb = async () => {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};

export default connectDb;
