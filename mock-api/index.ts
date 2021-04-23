import express from "express";
import influencers from "./routes/influencers";

const app = express();
const port = 8000;

app.use("/api/v1/influencers", influencers);

app.listen(port, () => {
  console.log(`Mock API listening at http://localhost:${port}.`);
});
