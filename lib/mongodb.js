import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://jhonguzmanhernandez659:ANVTsNz59NXVLevl@cluster0.l62d7t6.mongodb.net/user?retryWrites=true&w=majority");
  } catch (error) {
    console.log("error connecting to MOngoDB", error);
  }
};
