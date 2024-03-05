import { Cabin } from "./exercise1/cabin";
import { Normal } from "./exercise1/normal";
import { Vip } from "./exercise1/vip";
import { New } from "./exercise2/new";
import { Old } from "./exercise2/old";
import { Cat } from "./exercise3/cat";
import { Dog } from "./exercise3/dog";
import { Horse } from "./exercise3/horse";



const normal = new Normal(45)
console.log(normal.showValue())

const vip = new Vip(50,100)

console.log(vip.showValue())

const cabin = new Cabin(20,200)

console.log(cabin.showValue())

const newItem = new New("rua: ninguem, n: 0000", 150000, 10000)

console.log(newItem.showValue())

const oldItem = new Old("rua: ninguem, n: 0000", 150000, 15000)

console.log(oldItem.showValue())


const cat = new Cat("preto", 12, 120, "domestico")

console.log(cat.eat("lazanha"))
console.log(cat.meow())

const horse = new Horse("preto", 10, 150, "selvagem")

console.log(horse.eat("milho"))
console.log(horse.neigh())

const dog = new Dog("amarelo", 2, 90, "domestico")
console.log(dog.eat("ração"))
console.log(dog.bark())


