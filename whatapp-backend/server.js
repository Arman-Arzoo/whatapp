//importing
import express from "express";
import cors from "cors";
import { connectToDb } from "./database/index.js";
import whatappMessage from "./router/dbMessageHandler.js";

// app config
const app = express();
const port = process.env.PORT || 5000;

//middelware
app.use(express.json());
app.use(cors());
//DB config
connectToDb();

//????

//api route
app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.use("/message", whatappMessage);
//listening
app.listen(port, () => {
  console.log(`Listening on localhost: ${port}`);
});
