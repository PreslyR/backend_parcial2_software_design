export class User {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public role: 'admin' | 'client',
    public createdAt: Date,
  ) {}
}