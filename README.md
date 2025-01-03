# typescript-study
 Anotações e códigos do meu aprendizado em TypeScript.

# Executar Exercícios
Para executar os exercícios, é necessário rodar os comandos:

```shell
npm install
npm run tsc-watch
```

Após isso, abra o arquivo index.html.

# Notas
## Instalação

```jsx
// Inicializa um projeto node
npm init -y

// Instala o ts no projeto, setando ele como dependência de desenvolvimento
npm install --save-dev typescript

// Compila arquivo ts para js, e fica observando mudanças
npx tsc arquivo.ts --watch

// Cria arquivo de configuração "tsconfig.json"
npmx tsc --init
```

## Configuração

```jsx
{
    "compilerOptions": {
		    /* Define o nome do arquivo compilado */
        "outFile": "main.js",
        /* Define a pasta de destino dos arquivos compilados.
        dist normalmente é o nome da pasta de arquivos compilados (JS),
        e a src é a pasta do código de desenvolvimento (TS) */
        "outDir": "dist",
        /*Define a versão do JS do arquivo compilado,
        use "ESNEXT" para a versão mais atual */
        "target": "ESNEXT"
    }
}
```

## Tipos

### Tuplas

```tsx
/* Tuplas é um tipo de dado que define um número de elementos de um array,
e um tipo específico para cada elemento. */
let tupla: [number, number] = [0, 1]

// Irá gerar erro, pois foi adicionada mais elementos do que foram definidos na tupla
tupla.push(2)

// Irá gerar erro, pois foi adicionado um tipo diferente do que foi definido
let xy: [number, number] = [3, '6']
```

### Enum

```tsx
/* Enum é um tipo que serve para referenciar valores constantes, ajudando na
compreensão do código. As referências podem ser numbers, strings, ou ambos. */
enum Status {
	APROVADA,  // 0
	REPROVADA, // 1
	PENDENTE   // 2
}

const analise = Status.PENDENTE // analise = 2

enum Genero {
	MASCULINO = 'm',
	FEMININO = 'f',
	NAO_BINARIO = 'nb'
}

const pessoa = {
	nome: 'Ana',
	genero: Genero.NAO_BINARIO // genero = nb
}
```

### Operador ?

```tsx
// "complemento?" indica que esse atributo é opcional
function mudarEndereco(endereco: { rua: string, complemento?: string }) {
	// logica...
}

const endereco = { rua: "Av. XPTO" }
mudarEndereco(endereco)
```

### Unknown

```tsx
// indica que desconhecemos o tipo que será atribuido
let input: unknown

input = 'Hello World'
input = true
input = 3.1415

let age: number

// irá gerar erro, pois o TS não pode garantir que o input será do tipo number
age = input
```

### Any

```tsx
// como se tivessemos desligado o TS
let input: any

input = 'Hello World'
input = true
input = 3.1415

let age: number

// não irá gerar erro, pois o TS não se importa em garantir que o tipo está certo
age = input
```

### Never

```tsx
/*
	tipo de um dado que não deveria existir (não entendi bem esse conceito). geralmente
	utilizado no tratamento de erros
*/

function erro(msg: string): never {
	throw new Error(msg)
}
```

### Literal

```tsx
// um tipo literal é um tipo com apenas um valor específico
let pi: 3.14159

// gera erro, pois estamos atribuindo um valor diferente do que foi especificado
pi = 3.14

// é considerado um tipo literal, pois esse dado só pode receber o valor "Hi!"
const literal = 'Hi!'
```

### Union Types

```tsx
// union types são atribuições de um OU mais tipos ou valores para um dado

// neste caso, primaryColors só pode receber os valores "blue", "red", "yellow"
let primaryColors: "blue" | "red" | "yellow"

// resulta em erro, pois estamos atribuindo um valor diferente do que foi especificado
primaryColors = 'green'

// neste outro caso, email só pode ser do tipo string ou null.
let email: string | null
email = prompt("Qual seu email? (Pressione cancelar caso não queira informar)")
alert(email)
```

### Alias

```tsx
// alias nos permite reutilizar tipos de forma mais simples
type PrimaryColor = "blue" | "red" | "yellow"

// define favPrimaryColor só pode receber 'blue', 'red', 'yellow'
let favPrimaryColor: PrimaryColor

// define que primaryColors é um array, que só pode conter 'blue', 'red', 'yellow'
let primaryColors: PrimaryColor[]
primaryColors.push('blue')

// resulta em erro
primaryColors.push('green')
```

## Interfaces

```tsx
/* 
	Interfaces geralmente são usadas geralmente para definir os tipos das
	propriedades em objetos e classes
*/

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
```

# Omit e Pick

```tsx
/*
	omit serve para omitirmos uma ou mais propriedades de um objeto, muito útil
	quando queremos excluir algumas propriedades
*/

interface Address {
    street: string,
    num: number,
    city: string,
    country: string
}

// definimos que a propriedade 'address' é do tipo Address, porém sem 'city' e 'country'
interface Person {
    name: string,
    age: number,
    address: Omit<Address, 'city' | 'country'>
}

const user: Person = {
    name: 'Gabriel',
    age: 17,
    address: {
        street: 'Rua ABC',
        num: 12
    }
}
```

```tsx
// pick serve para para escolhermos as propriedades que desejamos
interface Book {
    title: string,
		category: string,
    author: string,
    year: number
}

/* definimos que o FavoriteBooks é um array de Book, porém somente com as
propriedades 'title' e 'author' */
type FavoriteBooks = Pick<Book, 'title' | 'author'>[]

const favBooks: FavoriteBooks = []
favBooks.push({ title: 'Advenced HTML', author: 'Tim Berners-Lee' })
```

## Módulos

```tsx
// export.ts

/*
	a exportação de módulos no typescript é feita com o padrão do ES6
	é possível exportar utilizando o 'export' e o 'export default'
*/

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
```

```tsx
// import.ts

/*
	a importação também é feita utilizando o ES6
	é possível também importar dependencias instaladas via npm, porém elas podem
	não possuir os tipos do typescript, nesses casos é interessante instalar como
	dependecia de desenvolvimento o @types/nome_da_dependencia.
*/

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
console.log(lodash.camelCase('Gabriel  Carvalho'))
```

## Orientação a Objetos

```tsx
class BankAccount {

    /* 
        definimos todas as propriedades exclusivas dessa classe, atribuindo um tipo
        e um encapsulamento
        - private: acessível somente dentro da classe
        - protected: acessível somente dentro da classe e de uma subclasse
        - public: totalmente acessível
    */

    owner: string
    private _balance: number
    protected id: number

    constructor(owner: string, balance: number, id: number) {
        this.owner = owner
        this._balance = balance
        this.id = id
    }

    /* 
        por conta de '_balance' ser privado, precisamos utilizar getters e setters
        para podermos acessa-los fora de sua classe
        - getters: retornam a propriedade
        - setters: atribuem um novo valor a propriedade
    */

    get balance() {
        return this._balance
    }

    set balance(money: number) {
        /* aqui poderia ser adicionada uma lógica caso fosse necessário
        (uma alteração no banco de dados por exemplo) */
        this._balance = money
    }
}

class SavingAccount extends BankAccount {
    constructor(owner: string, balance: number, id: number) {
        super(owner, balance, id)
    }

    calculateFees(percent: number) {
        return this.balance * (percent / 100)
    }
}

const savings = new SavingAccount('Gabriel', 300, 2)

// não gera erro, pois a propriedade é pública
console.log(savings.owner)

// gera erro, pois é uma propriedade privada (acessível somente dentro da classe)
savings._balance

// gera erro, pois é uma propriedade protegida (acessível somente dentro da classe e da ssubclasse)
savings.id

savings.balance = 20
console.log(savings.balance)
```

## Generics

```tsx
// tipos genericos é um recurso que permite que passamos tipos como argumento para uma funcao, classe, interfaces, tipos, etc

interface User {
    name: string
    age: number
    password: string
}

const user: User = {
    name: 'Gabriel',
    age: 17,
    password: 'senha123*'
}

/* 
    definimos uma funcao em que '<T>' é como um parametro, que irá variar conforme a entrada da funcão
    o parametro 'data' e o retorno da funcao recebem o tipo 'T', e também irão variar conforme a entrada
*/

function cloneData<T>(data: T): T {
    return data
}

// userCopy é do tipo User 
const userCopy = cloneData(user)

// arrayCopy é do tipo number[] 
const arrayCopy = cloneData([1, 2, 3])

// userCopy2 é do tipo { name: string, age: number, password: string }
const userCopy2 = cloneData({ name: 'test', age: 20, password: 'test' })

// userCopy3 é do tipo User, pois passamos User como o argumento do generic
const userCopy3 = cloneData<User>({ name: 'test', age: 20, password: 'test' })

type Data = {
    id: number
    username: string
}

// nesse exemplo, temos que o 'ReceivedData' deve conter pelo menos as propriedades do tipo 'Data'
type ApiResponse<ReceivedData extends Data> = {
    data: ReceivedData
    status: number
}

const response: ApiResponse<Data> = {
    data: {
        id: 1,
        username: 'user-test',
        // outros dados possíveis
    },
    status: 200
}
```

## Decorators

```tsx
/* 
    decorators é uma funcão que permite modificar o comportamento de um metodo dentro de uma classe.
    essa funcão possui 3 parametros:
    - target: classe do metódo que será alterado
    - key: nome do método executado
    - descriptor: método que será modificado

    vale ressaltar que é necessário adicionar a linha '"experimentalDecorators": true' no 'compilerOptions' do tsconfig
*/

// nesse exemplo, utilizamos os decorators para fazermos um logger
function Log() {
    return (target, key: string, descriptor: PropertyDescriptor) => {
        // copia do metodo original
        const originalMethod = descriptor.value

        // modificacao do metodo original (não pode ser uma arrow function por conta do 'this')
        descriptor.value = function (...args: any[]) {
            console.log(`Chamando o método ${key} com os argumentos ${JSON.stringify(args)}`)

            // execucao da metodo original
            const res = originalMethod.apply(this, args)

            console.log(`Método ${key} retornou ${res}`)
            return res
        }
    }
    
}

class Car {
    model: string
    color: string
    speed: number

    constructor(model: string, color: string) {
        this.model = model
        this.color = color
        this.speed = 0
    }

    @Log()
    accelarate(speed: number) {
        this.speed += speed
        console.log(`Velocidade atual: ${this.speed}`)
        return this.speed
    }

    @Log()
    brake() {
        this.speed = 0
        console.log(`Freiando... Velocidade mudou para 0`)
        return this.speed
    }
}

const car = new Car('Ferrari', 'red')
car.accelarate(15)
car.accelarate(20)
car.brake()
```