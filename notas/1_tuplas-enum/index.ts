// TUPLAS
let tupla: [number, number] = [0, 1]

tupla.push(2)

// erro
// let xy: [number, number] = [3, '6']

// ENUM
enum Status {
	APROVADA, 
	REPROVADA,
	PENDENTE
}

const analise = Status.PENDENTE

enum Genero {
	MASCULINO = 'm',
	FEMININO = 'f',
	NAO_BINARIO = 'nb'
}

const pessoa = {
	nome: 'Ana',
	genero: Genero.NAO_BINARIO
}