import Pusher from "pusher";
import env from "dotenv";
env.config();

export const pusher = new Pusher({
  appId: "1300230",
  key: process.env.PUSHERKEY,
  secret: process.env.PUSHERSECREAT,
  cluster: "ap2",
  useTLS: true,
});
