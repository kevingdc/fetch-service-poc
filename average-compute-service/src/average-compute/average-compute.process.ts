import { Job } from "bull";

import { repository } from "../influencer-average/influencer-average.repository";

async function averageComputeProcess(job: Job): Promise<void> {
  const { pk, followerCount } = job.data;

  console.log(
    `Average Compute Process - pk: ${pk} followerCount: ${followerCount}`
  );

  const influencerAverage = repository.get(pk);
  influencerAverage.modifyAverage(followerCount);
  repository.set(influencerAverage);

  console.log(repository);
}

export default averageComputeProcess;
