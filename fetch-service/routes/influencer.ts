import express from "express";

import queueInfluencer from "../src/influencer/influencer.queue";

const router = express.Router();

router.post("/init", (req, res) => {
  const { start, end } = req.body;
  for (let i = start; i <= end; i++) {
    queueInfluencer(i);
  }
  res.send("Initialized.");
});

export default router;
