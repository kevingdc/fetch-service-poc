import express from "express";
import { router } from "bull-board";

import influencer from "./routes/influencer";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/admin/queues", router);

app.use("/influencer", influencer);

app.listen(port, () => {
  console.log(`Queue API listening at http://localhost:${port}.`);
});
