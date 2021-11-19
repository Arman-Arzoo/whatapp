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
