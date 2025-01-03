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