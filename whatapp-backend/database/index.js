import mongoose from "mongoose";
import { dbStreamHandler, Dburl } from "./dbConfig.js";
import { pusher } from "../util/pusherConfig.js";

export const connectToDb = () => {
  mongoose.connect(Dburl);
  const db = mongoose.connection;
  db.on("error", dbStreamHandler.error);
  db.on("open", dbStreamHandler.open);

  db.once("open", () => {
    const msgCollection = db.collection("messagecontents");
    const chainStream = msgCollection.watch();
    chainStream.on("change", (change) => {
      console.log(change);
      if (change.operationType === "insert") {
        const messageDetails = change.fullDocument;
        pusher.trigger("messages", "inserted", {
          name: messageDetails.name,
          message: messageDetails.message,
          timeStamp: messageDetails.timeStamp,
          received: false,
        });
      } else {
        console.log("error in pusher");
      }
    });
  });
};
