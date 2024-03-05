import { Ticket } from "./ticket";

export class Cabin extends Ticket{
    
    constructor(value: number,private _addValue: number ){
        super(value)
    }

    public showValue(): number {
        return this.value + this._addValue
    }
}