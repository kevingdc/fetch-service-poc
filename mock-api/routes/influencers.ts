import express from "express";

import { influencerService } from "../src/influencer/influencer.service";

const router = express.Router();

router.get("/:pk", (req, res) => {
  res.json(influencerService.get(+req.params.pk));
});

export default router;
