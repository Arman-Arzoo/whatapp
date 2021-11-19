import express from "express";
import { createMessage } from "../controller/dbMessageController.js";

const router = express.Router();

router.post("/new", createMessage);

export default router;
