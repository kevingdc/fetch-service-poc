import Bull from "bull";
import { setQueues, BullAdapter } from "bull-board";

import influencerFetchProcess from "./influencer.process";
import { ID } from "../../typings/influencer";

const influencerQueue = new Bull("influencer", {
  redis: process.env.REDIS_URL,
});

setQueues([new BullAdapter(influencerQueue)]);

influencerQueue.process(influencerFetchProcess);

function queueInfluencer(pk: ID): boolean {
  influencerQueue.add({ pk: pk });

  return true;
}

export default queueInfluencer;
