import Bull from "bull";
import { setQueues, BullAdapter } from "bull-board";

type ID = number;

class InfluencerQueue {
  private queue: Bull.Queue;

  constructor() {
    this.queue = new Bull("influencer", {
      redis: process.env.REDIS_URL,
    });

    setQueues([new BullAdapter(this.queue)]);

    this.queue.on("cleaned", (jobs, type) => {
      console.log(`Cleaned ${jobs.length} ${type} jobs.`);
    });
  }

  async queueInfluencer(pk: ID): Promise<boolean> {
    this.queue.add({ pk });
    return true;
  }

  async obliterateQueue(): Promise<boolean> {
    await this.queue.obliterate({ force: true });
    return true;
  }
}

const influencerQueue = new InfluencerQueue();

export default influencerQueue;
