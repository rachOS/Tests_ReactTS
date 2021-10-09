export class Dollar implements IDollarProperties {
    amount: number = 0

    constructor(amount: number) {
        this.amount = amount;
    }

    public times(multiplier : number): Dollar{
        return new Dollar(this.amount * multiplier)
    }
}

interface IDollarProperties  {
    amount : number
}