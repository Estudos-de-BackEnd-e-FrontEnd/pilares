import { Ticket } from "./ticket";

export class Vip extends Ticket{
    
    constructor(value: number, private _addValue: number ){
        super(value)
    
    }

    public showValue(): number {
        return this._addValue + this.value
    }
}