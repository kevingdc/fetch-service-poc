import { Job } from "bull";

import API from "./influencer.api";

async function influencerFetchProcess(job: Job): Promise<void> {
  const { pk } = job.data;

  const influencer = API.fetchInfluencer(pk);
  // Send to other queue to process
  API.addToQueue(pk);
}

export default influencerFetchProcess;
