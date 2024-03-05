export abstract class Animal{
    private _color: string
    private _age: number
    private _height: number
    private _type: string


    constructor(color: string, age: number, height: number, type: string){
        this._color = color
        this._age = age
        this._height = height
        this._type = type

    }

    eat(food: string):void{}

}