import express from "express";

import influencerQueue from "../src/influencer/influencer.queue";

const router = express.Router();

router.post("/", (req, res) => {
  const { pk } = req.body;

  influencerQueue
    .queueInfluencer(pk)
    .then(() => res.send("Added pk to queue."));
});

router.post("/init", (req, res) => {
  const { start, end } = req.body;

  for (let i = start; i <= end; i++) {
    influencerQueue.queueInfluencer(i);
  }
  res.send("Initialized.");
});

router.put("/halt", (req, res) => {
  influencerQueue.obliterateQueue().then(() => res.send("Queue obliterated."));
});

export default router;
