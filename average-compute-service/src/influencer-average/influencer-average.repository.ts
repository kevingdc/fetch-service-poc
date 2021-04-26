import { InfluencerAverage } from "./influencer-average.model";

export class InfluencerAverageRepository {
  private store: Map<ID, InfluencerAverage>;

  constructor() {
    this.store = new Map();
  }

  get(pk: ID): InfluencerAverage {
    const influencer = this.store.get(pk);
    // TODO: Replace with optional type.
    if (influencer === undefined) {
      const newInfluencer = new InfluencerAverage(pk, 0, 0);
      this.set(newInfluencer);
      return newInfluencer;
    }
    return influencer;
  }

  set(influencerAverage: InfluencerAverage) {
    return this.store.set(influencerAverage.pk, influencerAverage);
  }
}

// Create the repository with 10000 influencers
export const repository = new InfluencerAverageRepository();
export type ID = number;
