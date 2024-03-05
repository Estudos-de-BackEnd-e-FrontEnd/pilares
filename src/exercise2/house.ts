export abstract class House{
    constructor(private _address: string, private _price: number){
    }

    public get address(): string{
        return this._address
    }

    public get price(): number{
        return this._price
    }

    protected set price(newValue: number){
        this._price = newValue
    }

    showValue():void{}
}