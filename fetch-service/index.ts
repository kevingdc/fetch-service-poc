import Bull from "bull";

import influencerFetchProcess from "./src/influencer/influencer.process";

const influencerQueue = new Bull("influencer", {
  redis: process.env.REDIS_URL,
});

influencerQueue.process(influencerFetchProcess);

console.log(`Fetch service started.`);
