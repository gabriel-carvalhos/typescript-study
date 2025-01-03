type Coords = [number, number, number, number]
type Status = 'habitado' | 'habitável' | 'inabitável' | 'inexplorado'
type Planet = { name: string, coords: Coords, status: Status, satelites: string[] }
const planets: Planet[] = []

function createPlanet() {
    const name = prompt('Digite o nome do planeta')

    const coord1 = Number(prompt(`Digite a primeira coordenada`))
    const coord2 = Number(prompt(`Digite a segunda coordenada`))
    const coord3 = Number(prompt(`Digite a terceira coordenada`))
    const coord4 = Number(prompt(`Digite a quarta coordenada`))

    const coords: Coords = [coord1, coord2, coord3, coord4]

    const status: Status = saveStatus()
    const planet = { name, coords, status, satelites: [] }

    planets.push(planet)
}

function saveStatus(): Status {
    let response
    let valid: boolean = false
    while (!valid) {
        response = prompt(
            'Digite a situação do planeta \n' +
            '1 - Habitado \n' +
            '2 - Habitável \n' +
            '3 - Inabitável \n' +
            '4 - Inexplorado'
        )

        switch (response) {
            case "1":
                response = 'habitado'
                valid = true
                break
            case "2":
                response = 'habitável'
                valid = true
                break
            case "3":
                response = 'inabitável'
                valid = true
                break
            case "4":
                response = 'inexplorado'
                valid = true
                break
            default:
                alert('Entrada inválida')
                valid = false
        }
    }

    return response

}

function findPlanet() {
    const name = prompt('Digite o nome do planeta')
    const planet: Planet = planets.find(item => item.name == name)
    
    return planet
}

function updateStatus() {
    const status = saveStatus()
    const planet = findPlanet()
    if (!planet) {
        alert('Planeta não encontrado')
        return
    }
    
    planet.status = status
}

function createSatelite() {
    const planet = findPlanet()
    if (!planet) {
        alert('Planeta não encontrado')
        return
    }

    const satelite = prompt('Digite o nome do satélite')
    planet.satelites.push(satelite)
}

function deleteSatelite() {
    const planet = findPlanet()
    if (!planet) {
        alert('Planeta não encontrado')
        return
    }

    const satelite = prompt('Digite o nome do satélite')
    const filteredSatelites = planet.satelites.filter(sateliteName => sateliteName != satelite)
    planet.satelites = filteredSatelites
}

function listPlanets() {
    let msg: string = ""
    planets.forEach((planet: Planet) => {
        const { name, coords, status, satelites } = planet
        msg += 
            `Planeta: ${name} \n` +
            `Coordenadas: (${coords[0]}, ${coords[1]}, ${coords[2]}, ${coords[3]}) \n` +
            `Status: ${status} \n` +
            `Satélites: ${satelites.length} \n`

        satelites.forEach((satelite: string) => msg += `- ${satelite} \n`)
    })
    alert(msg)
}

// Menu
let response = "1"
while (response != "0") {
    response = prompt(
        '1 - Criar planeta \n' +
        '2 - Atualizar situação \n' +
        '3 - Adicionar satélite \n' +
        '4 - Remover satélite \n' +
        '5 - Listar Planetas \n' +
        '0 - Sair'
    )

    switch (response) {
        case "1":
            createPlanet()
            break
        case "2":
            updateStatus()
            break
        case "3":
            createSatelite()
            break
        case "4":
            deleteSatelite()
            break
        case "5":
            listPlanets()
            break
        case "0":
            alert('Saindo...')
            break
        default:
            alert('Entrada inválida')
    }
}