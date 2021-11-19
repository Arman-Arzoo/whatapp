import { whatAppMessage } from "../database/model/dbMessage.js";

export const createMessage = (req, res) => {
  const dbMessage = req.body;

  whatAppMessage.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(`new message created :  ${data}`);
    }
  });
};

export const getMsg = async (req, res) => {
  try {
    const msg = await whatAppMessage.find();
    res.send(msg);
  } catch (error) {
    res.status("404").send("can't find post Server error");
  }
};
