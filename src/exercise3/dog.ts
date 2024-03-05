import { Animal } from "./animal";

export class Dog extends Animal{
    constructor(color: string, age: number, height: number, type: string){
        super(color, age, height, type)
    }

    eat(food: string): string {
        return `O cachorro comeu: ${food}`
    }

    bark(){
        return "dog: auauau"
    }

}