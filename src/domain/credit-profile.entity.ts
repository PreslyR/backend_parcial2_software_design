export class CreditProfile {
  constructor(
    public id: string,
    public userId: string,
    public score: number,
    public behaviorData: string[], // array of payment behaviors
    public updatedAt: Date,
  ) {}
}