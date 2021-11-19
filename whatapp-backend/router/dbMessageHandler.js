import express from "express";
import { createMessage, getMsg } from "../controller/dbMessageController.js";

const router = express.Router();

router.post("/new", createMessage);
router.get("/sync", getMsg);

export default router;
