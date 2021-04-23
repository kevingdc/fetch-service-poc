import Bull from "bull";
import { setQueues, BullAdapter } from "bull-board";

import influencerFetchProcess from "./influencer.process";
import { ID } from "../../typings/influencer";

const influencerQueue = new Bull("influencer", {
  redis: process.env.REDIS_URL,
});

setQueues([new BullAdapter(influencerQueue)]);

influencerQueue.process(influencerFetchProcess);

influencerQueue.on("cleaned", (jobs, type) => {
  console.log(`Cleaned ${jobs.length} ${type} jobs.`);
});

export function queueInfluencer(pk: ID): void {
  influencerQueue.add({ pk: pk });
}

export async function obliterateQueue(): Promise<void> {
  await influencerQueue.obliterate({ force: true });
}
