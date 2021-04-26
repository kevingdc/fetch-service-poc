export interface InfluencerAverageModel {
  pk: number;
  average: number;
  numDataPoints: number;
}

export class InfluencerAverage implements InfluencerAverageModel {
  constructor(
    public pk: number,
    public average: number,
    public numDataPoints: number
  ) {}

  modifyAverage(newFollowerCount: number): InfluencerAverage {
    // (n/n+1) * currentAvg + (newFc / n+1)

    this.average =
      (this.numDataPoints / (this.numDataPoints + 1)) * this.average +
      newFollowerCount / (this.numDataPoints + 1);

    this.numDataPoints++;

    return this;
  }
}
