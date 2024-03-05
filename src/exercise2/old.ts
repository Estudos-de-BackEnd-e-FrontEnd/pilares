import { House } from "./house";

export class Old extends House{
    constructor(address: string, price: number, private _discount: number ){
        super(address, price)
    }

    showValue(): string | number {
        this.price -= this._discount

        if(this._discount > this.price){
            return "O desconto precisa ser menor ou igual o preço atual"
        }
        return this.price
    }
}