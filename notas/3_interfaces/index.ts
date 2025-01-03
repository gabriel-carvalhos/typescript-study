// Criando interface
interface Person {
    name: string,
    age: number
}

// Herança
interface User extends Person {
    email: string,
    password: string
}

// Implementação da interface
const newUser: User = {
    name: 'Gabriel',
    age: 17,
    email: 'email@email.com',
    password: 'senha123'
}

// Herdando interfaces em tipos (tipo funcionários)
type Employees = Person & {
    salary: number,
    role: string
}

const newEmploy: Employees = {
    name: 'Gabriel',
    age: 17,
    salary: 500,
    role: 'Developer'
}

// Implementando interfaces em classes
class Student implements Person {
    name: string
    age: number
    grade: string

    constructor(name: string, age: number, grade: string) {
        this.name = name
        this.age = age
        this.grade = grade
    }
}

const myStudent = new Student('Gabriel', 17, 'Ensino Médio')