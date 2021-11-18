//importing
import express from "express";

// app config
const app = express();
const port = process.env.PORT || 5000;

//middelware

//DB config

//????

//api route
app.get("/", (req, res) => {
  res.status(2000).send("hello world");
});
//listening
app.listen(port, () => {
  `Listening on localhost: ${port}`;
});
