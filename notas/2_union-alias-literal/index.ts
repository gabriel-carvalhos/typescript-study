// let pi: 3.14159

// pi = 3.14

// const literal = 'Hi!' // Tipo literal

// let primaryColors: "blue" | "red" | "yellow"
// primaryColors = 'green' // erro

// let email: string | null
// email = 'test@test.com'
// alert(email)

type PrimaryColor = "blue" | "red" | "yellow"

let favPrimaryColor: PrimaryColor

let primaryColors: PrimaryColor[] = []
primaryColors.push('blue')

// erro
// primaryColors.push('green')

type primaryColorCallback = (color: PrimaryColor) => void

function checkPrimaryColor(color: PrimaryColor, callback: primaryColorCallback) {
    callback(color)
}

// erro
// checkPrimaryColor('green', (color) => {
//     console.log(`Sua cor é ${color}`)
// })

checkPrimaryColor('blue', (color) => {
    console.log(`Sua cor é ${color}`)
})