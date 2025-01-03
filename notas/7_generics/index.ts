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