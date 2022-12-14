const game = {
    team1: 'REAL MADRID',
    team2: 'BARCELONA',
    players: [
        [
            'Courtois',
            'Vazquez',
            'Militao',
            'Nacho',
            'Mendy',
            'Casemiro',
            'Valverde',
            'Modrich',
            'Kroos',
            'Vinicius',
            'Benzema',
        ],
        [
            'Stegen',
            'Mingueza',
            'Araujo',
            'Lenglet',
            'Dest',
            'Busquets',
            'Jong',
            'Alba',
            'Messi',
            'Pedri',
            'Dembele',
        ],
    ],
    score: '2:1',
    scored: ['Kroos', 'Benzema', 'Mingueza'],
    date: 'Apr 10th, 2021',
    odds: {
        team1: 1.48,
        draw: 2.53,
        team2: 4.25,
    },
};

//1

// for (const score of game.scored.entries()) {
//     console.log(`Goal ${score[0] + 1} - ${score[1]}`)
// }

for (const [index, name] of game.scored.entries()) {
    console.log(`Goal ${index + 1} - ${name}`)
}

//2

let cof = 0
let cofitient = Object.values(game.odds)
for (const coff of cofitient) {
    cof += coff
}

const coffTotal = cof / cofitient.length
console.log(coffTotal)


//3

for (const [name, odd] of Object.entries(game.odds)) {
    let mutableText = name === 'draw' ? 'draw' : `${game[name]} victory:`
        console.log(`Rate for ${mutableText} ${odd} 
`)
}

//4

const goalScorers = {}

for (const player of game.scored) {
    goalScorers[player] ? goalScorers[player] ++ : goalScorers[player] = 1
}
console.log(goalScorers)



const orders = new Set(['Sushi', 'Ramen', 'Sushi', 'Tempura', 'Ramen', 'Sushi'])
console.log(orders)
console.log(orders.has('Sushi'))

for (const order of orders) {
    console.log(order)
}


const question = new Map([
    ['question', 'What is the most popular programming language for front-end?'],
    [1, 'JavaScript'],
    [2, 'Java'],
    [3, 'Python'],
    ['correctAnswer', 1],
    [true, 'Correct answer :D'],
    [false, 'This is incorrect :( Try again!']
])

console.log(question)
console.log(question.get('question'))

for (const [key, value] of question) {
    if (typeof key === 'number') {
        console.log(`${key}: ${value}`)
    }
}

const userAnswer = Number(prompt('Chose the option number'))
console.log(userAnswer)

console.log(question.get(question.get ('correctAnswer') === userAnswer))