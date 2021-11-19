import mongoose from "mongoose";
import { dbStreamHandler, Dburl } from "./dbConfig.js";

export const connectToDb = () => {
  mongoose.connect(Dburl);
  const db = mongoose.connection;
  db.on("error", dbStreamHandler.error);
  db.on("open", dbStreamHandler.open);
};
