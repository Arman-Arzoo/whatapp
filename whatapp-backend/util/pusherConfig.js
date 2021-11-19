import Pusher from "pusher";

export const pusher = new Pusher({
  appId: "1300230",
  key: "82c82ecc59a3b12b823f",
  secret: "8a1ecb1a9e51ff1f5c41",
  cluster: "ap2",
  useTLS: true,
});
