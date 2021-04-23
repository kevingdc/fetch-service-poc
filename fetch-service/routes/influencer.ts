import express from "express";

import {
  queueInfluencer,
  obliterateQueue,
} from "../src/influencer/influencer.queue";

const router = express.Router();

router.post("/init", (req, res) => {
  const { start, end } = req.body;

  for (let i = start; i <= end; i++) {
    queueInfluencer(i);
  }
  res.send("Initialized.");
});

router.put("/halt", (req, res) => {
  obliterateQueue().then(() => {
    res.send("Queue obliterated.");
  });
});

export default router;
