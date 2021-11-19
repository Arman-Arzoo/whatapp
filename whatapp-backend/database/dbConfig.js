import env from "dotenv";
env.config();

export const Dburl = process.env.MONGODB_URL;

export const dbStreamHandler = {
  error: () => {
    console.log("Error connected database");
  },
  open: () => {
    console.log("Successful connected to database");
  },
};
