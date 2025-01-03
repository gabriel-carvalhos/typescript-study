import { MyCar, User } from './export'
import * as lodash from 'lodash'

const user: User = {
    name: 'Gabriel',
    username: 'gabrielcarvalhos.snt',
    email: 'email@email.com',
    password: 'senha123',
}

const car = new MyCar('Ferrari', 'red', 1997)

console.table(user)
console.table(car)
console.log(lodash.camelCase('GaBRiel  CarValho'))