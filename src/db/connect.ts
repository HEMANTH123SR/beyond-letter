import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`mongoDB connnected:${res.connection.db.databaseName}`);
  } catch (err: any) {
    console.log(`connection error in mongoose ${err.message}`);
  }
};
