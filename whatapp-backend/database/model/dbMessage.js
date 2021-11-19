import mongoose from "mongoose";

const whatAppMsgSchema = mongoose.Schema({
  message: String,
  name: String,
  timeStamp: String,
  received: Boolean,
});

export const whatAppMessage = mongoose.model(
  "messagecontent",
  whatAppMsgSchema
);
