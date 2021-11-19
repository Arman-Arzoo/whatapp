//importing
import express from "express";
import mongoose from "mongoose";

// app config
const app = express();
const port = process.env.PORT || 5000;

//middelware

//DB config
const dburl =
  "mongodb+srv://toplinegeeks:toplinegeeks123@cluster0.yzcqn.mongodb.net/whatappdb?retryWrites=true&w=majority";

mongoose
  .connect(dburl)
  .then(() => {
    console.log("connected to database");
  })
  .catch(() => {
    console.log("could not connect to database");
  });
//????

//api route
app.get("/", (req, res) => {
  res.status(2000).send("hello world");
});
//listening
app.listen(port, () => {
  console.log(`Listening on localhost: ${port}`);
});
