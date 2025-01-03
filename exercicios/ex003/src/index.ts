interface User {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: 'Not Found'
}

interface Repos {
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const users: User[] = []

async function saveUser(username: string) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const user: User = await response.json()

    if (user.message == "Not Found") {
        console.log('Usuário não encontrado')
        return
    }

    users.push(user)

    console.log(
        `O usuário ${user.login} foi salvo.\n` +
        `id: ${user.id} \n` +
        `login: ${user.login} \n` +
        `Nome: ${user.name} \n` +
        `Bio: ${user.bio} \n` +
        `Repositórios públicos: ${user.public_repos}`
    )
}

async function showUser(username: string) {
    const userData = users.find(user => user.login == username)

    const response = await fetch(userData.repos_url)
    const repos: Repos[] = await response.json()
    
    let msg = `id: ${userData.id}\n` +
      `login: ${userData.login} \n` +
      `Nome: ${userData.name} \n` +
      `Bio: ${userData.bio} \n` +
      `Repositórios públicos: ${userData.public_repos}\n`

    repos.forEach(repo => {
      msg += `\nNome: ${repo.name} \n` +
        `Descrição: ${repo.description} \n` +
        `Estrelas: ${repo.stargazers_count} \n` +
        `É um fork: ${repo.fork ? 'Sim' : 'Não'}\n`
    })

    console.log(msg)
    
}

function listUsers() {
    let msg = 'Usuários Cadastrados: \n\n'
    users.forEach(user => {
        msg += `- usuário: ${user.login}\n`
    })

    console.log(msg)
}

function calculateRepos() {
    const sum = users.reduce((acc, user) => {
        return acc + user.public_repos
    }, 0)

    console.log(`Soma dos repositorios: ${sum}`)   
}

function ranking() {
    const ranking = users.sort((a, b) => b.public_repos - a.public_repos).slice(0, 5)

    let msg = 'Usuários com mais repositórios:\n\n'

    ranking.forEach((user, i) => {
        msg += 
            `${i + 1} - ${user.login} com ${user.public_repos} repositórios\n`
    })

    console.log(msg)
}


async function main() {
    await saveUser('gabriel-carvalhos')
    await saveUser('julianaconde')
    await saveUser('pcaldass')
    await saveUser('lucasqueirogaa')
    await saveUser('frans203')
    await saveUser('LeDragoX')

    await showUser('gabriel-carvalhos')
    await showUser('julianaconde')

    listUsers()
    calculateRepos()
    ranking()
}

main()