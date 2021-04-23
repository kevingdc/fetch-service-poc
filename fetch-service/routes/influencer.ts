import express from "express";

const router = express.Router();

router.post("/init", (req, res) => {
  console.log(req);
  res.send("Hello!");
});

export default router;
