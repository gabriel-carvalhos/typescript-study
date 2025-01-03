class BankAccount {

    /* 
        definimos todas as propriedades exclusivas dessa classe, atribuindo um tipo e um encapsulamento
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
        por conta de '_balance' ser privado, precisamos utilizar getters e setters para podermos acessa-los fora de sua classe
        - getters: retornam a propriedade
        - setters: atribuem um novo valor a propriedade
    */

    get balance() {
        return this._balance
    }

    set balance(money: number) {
        // aqui poderia ser adicionada uma lógica caso fosse necessário (uma alteração no banco de dados por exemplo)
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
// savings._balance

// gera erro, pois é uma propriedade protegida (acessível somente dentro da classe e de uma subclasse)
// savings.id

savings.balance = 20
console.log(savings.balance)