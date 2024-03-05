//import { Ticket } from "./ticket";
export abstract class Ticket{
    public value: number
 
     constructor(value: number){
         this.value = value
     }
 
     public showValue():void{}
   
 }
export class Normal extends Ticket{
    
    showValue(): number {
        return this.value
    }
}