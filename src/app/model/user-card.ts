export class UserCard {
  constructor(
    public readonly id: number,
    public readonly image: string,
    public readonly title: string,
    public readonly age: number,
    public quote: string = ''
  ) {}
}
