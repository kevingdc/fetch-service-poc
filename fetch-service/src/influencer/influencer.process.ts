import { Job } from "bull";

import queueInfluencer from "./influencer.queue";

async function influencerFetchProcess(job: Job): Promise<void> {
  const { pk } = job.data;
  console.log(`Fetching data for pk ${pk}`);
  queueInfluencer(pk);
}

export default influencerFetchProcess;
