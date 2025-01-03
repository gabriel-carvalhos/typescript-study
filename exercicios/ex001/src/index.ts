const spaceships = []

const createSpaceship = () => {
    const name = prompt('Digite o nome da nave')
    const pilot = prompt('Digite o nome do piloto')
    const crewLimit = Number(prompt('Digite o número máximo de tripulantes'))
    
    const spaceship = {
        name,
        pilot,
        crewLimit,
        crew: [],
        inMission: false
    }

    if (confirm(`Você deseja criar a nave ${name}`)) {
        spaceships.push(spaceship)
        alert('A nave foi criada')
        return
    }

    alert('Ação cancelada')
}

const findSpaceship = () => {
    // Definindo tipos da nave
    let spaceship: { name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean }
    
    do {
        const name = prompt('Digite o nome da nave')
        spaceship = spaceships.find(ship => ship.name == name)
        
        if (spaceship == undefined) {
            alert('Nave não encontrada')
        }

    } while (spaceship == undefined)
    
    return spaceship
}

const addMember = () => {
    const { crew, crewLimit } = findSpaceship()

    if (crew.length >= crewLimit) {
        alert('Limite de tripulação excedido')
        return
    }

    const member = prompt('Digite o nome do novo tripulante')
    crew.push(member)

    alert(`Tripulante ${member} adicionado. Total de tripulantes: ${crew.length}`)
}

const sendMission = () => {
    const spaceship = findSpaceship()
    
    if (spaceship.inMission == true) {
        alert('Nave já está em missão')
        return
    }

    const crewLength = spaceship.crew.length
    if (crewLength < Math.floor(spaceship.crewLimit / 3)) {
        alert('Tripulação não suficiente')
        return
    }

    spaceship.inMission = true
    alert('Nave em missão')
}

const listSpaceships = () => {
    spaceships.forEach((ship: { name: string, pilot: string, crewLimit: number, crew: string[], inMission: boolean }) => {
        alert(
            `Nome: ${ship.name} \n` +
            `Piloto: ${ship.pilot} \n` +
            `Número máximo de tripulantes: ${ship.crewLimit} \n` +
            `Tripulação: ${ship.crew} \n` +
            `Em missão: ${ship.inMission ? 'Sim' : 'Não'} \n`
        )
    })
}

createSpaceship()
do {
    var response: string = prompt(
        'Opções: \n' +
        '1 - Criar Nave \n' +
        '2 - Adicionar Membro \n' +
        '3 - Enviar para missão \n' +
        '4 - Listar Naves \n' +
        '0 - Sair'
    )

    switch (response) {
        case '1':
            createSpaceship()
            break
        case '2':
            addMember()
            break
        case '3':
            sendMission()
            break
        case '4':
            listSpaceships()
            break
        case '0':
            alert('Saindo..')
            break
        default:
            alert('Entrada inválida')
    }
} while (response != '0')