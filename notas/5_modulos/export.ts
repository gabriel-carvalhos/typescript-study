export interface User {
    name: string,
    username: string,
    email: string,
    password: string,
}

type Car = {
    model: string,
    color: string,
    year: number,
}

export class MyCar implements Car {
    model: string
    color: string
    year: number

    constructor (model: string, color: string, year: number) {
        this.model = model
        this.color = color
        this.year = year
    }
}