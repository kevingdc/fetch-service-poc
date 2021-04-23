import express from "express";
import influencers from "./routes/influencers";

const app = express();
const port = 3000;

app.use("/influencers", influencers);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}.`);
});
