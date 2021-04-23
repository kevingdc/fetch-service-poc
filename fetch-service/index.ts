import express from "express";

import influencer from "./routes/influencer";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/influencer", influencer);

app.listen(port, () => {
  console.log(`Fetch service listening at http://localhost:${port}.`);
});
