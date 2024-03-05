import { House } from "./house";

export class New extends House{
    

    constructor(address: string , price: number, private _addValue: number){
        super(address, price)

    }

    showValue(): number {
        this.price += this._addValue
        return this.price
    }
}