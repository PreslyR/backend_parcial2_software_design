export class Loan {
  constructor(
    public id: string,
    public userId: string,
    public amount: number,
    public modality: 'fixed_installments' | 'monthly_interest',
    public status: 'pending' | 'approved' | 'rejected',
    public createdAt: Date,
  ) {}
}