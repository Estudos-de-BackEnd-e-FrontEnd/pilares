import { Animal } from "./animal";

export class Cat extends Animal{
    constructor(color: string, age: number, height: number, type: string){
        super(color, age, height, type)
    }

    eat(food: string): string {
        return `O gato comeu: ${food}`
    }

    meow(){
        return `cat: Miauuuuuuuu`
    }
}