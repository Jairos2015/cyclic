'use strict';
import "dotenv/config";
import express from "express";
import {get_cyclic, post_cyclic} from "../controllers/index.controller.js"

const router = express.Router();

router.get("/", get_cyclic);
router.post("/", post_cyclic);

export default router;
