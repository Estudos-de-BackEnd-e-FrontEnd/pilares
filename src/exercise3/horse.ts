import { Animal } from "./animal";


export class Horse extends Animal{
    constructor(color: string, age: number, height: number, type: string){
        super(color, age, height, type)
    }

    eat(food: string): string {
        return `O cavalo comeu: ${food}`
    }

    neigh(){
        return "horse: Ohnnnnnnnnnnnn"
    }
}