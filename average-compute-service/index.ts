import Bull from "bull";

import averageComputeProcess from "./src/average-compute/average-compute.process";

import { InfluencerAverage } from "./src/influencer-average/influencer-average.model";

const averageComputeQueue = new Bull("averageCompute", {
  redis: process.env.REDIS_URL,
});

averageComputeQueue.process(averageComputeProcess);

console.log(`Average compute service started.`);

const influencerAverage = new InfluencerAverage(1001, 1000, 2);
influencerAverage.modifyAverage(1000);
console.log(influencerAverage);
