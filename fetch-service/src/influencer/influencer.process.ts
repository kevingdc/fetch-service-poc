import { Job } from "bull";

import API from "./influencer.api";

async function influencerFetchProcess(job: Job): Promise<void> {
  const { pk } = job.data;

  const influencer = await API.fetchInfluencer(pk);
  if (influencer) {
    const { followerCount, followingCount } = influencer;
    console.log(
      `Influencer pk: ${pk} followerCount: ${followerCount} followingCount: ${followingCount}`
    );
    // Send to other queue to process
    await API.addToAverageQueue(pk, followerCount);
    API.addToQueue(pk);
  }
}

export default influencerFetchProcess;
