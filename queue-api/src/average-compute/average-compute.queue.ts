import Bull from "bull";
import { setQueues, BullAdapter } from "bull-board";

type ID = number;

class AverageComputeQueue {
  private queue: Bull.Queue;
  private interval: NodeJS.Timeout;

  constructor() {
    this.queue = new Bull("averageCompute", {
      redis: process.env.REDIS_URL,
    });

    setQueues([new BullAdapter(this.queue)]);

    this.interval = setInterval(() => this.cleanCompleted(), 5000);
  }

  async queueInfluencer(pk: ID, followerCount: number): Promise<boolean> {
    try {
      await this.queue.add({ pk, followerCount });
      return true;
    } catch (error) {
      return false;
    }
  }

  async cleanCompleted(): Promise<boolean> {
    try {
      const completedCount = await this.queue.getCompletedCount();

      if (completedCount > 0) {
        console.log(`Completed ${completedCount} jobs in the last 5 seconds.`);
        await this.queue.clean(5000, "completed");
      }

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async obliterateQueue(): Promise<boolean> {
    clearInterval(this.interval);
    try {
      await this.queue.obliterate({ force: true });
      return true;
    } catch (error) {
      return false;
    }
  }
}

const averageComputeQueue = new AverageComputeQueue();

export default averageComputeQueue;
