export class Catalog {
  constructor(
    readonly id: number,
    public name: string,
    public isDiscount: boolean = false,
    public price: number | undefined = undefined
  ) {}
}
