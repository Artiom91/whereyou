'use strict'

const events = new Map([
    [19, 'Goal'],
    [21, 'Substitution'],
    [43, 'Goal'],
    [56, 'Substitution'],
    [69, 'Yellow card'],
    [73, 'Substitution'],
    [75, 'Yellow card'],
    [79, 'Substitution'],
    [81, 'Red card'],
    [93, 'Goal'],
])


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
}

const gameEvents = [...new Set(events.values())]
console.log(gameEvents)

events.delete(75)
console.log(events)

console.log(`On average, an event happened every ${90 / events.size} minutes`)

for (const [key, value] of events) {
    const half = key <= 45 ? 'FIRST' : 'SECOND'
    console.log(`[${half} HALF] ${key}: ${value}`)
}







// const [players1, players2] = game.players
// console.log(players1, players2)
//
// const [goalkeeper, ...fieldPlayers] = players1
// console.log(goalkeeper, fieldPlayers)
//
// const allPlayers = [...players1, ...players2]
// console.log(allPlayers)
//
// const players1Total = [...players1, 'Marcelo', 'Isco', 'Asensio', 'Diaz', 'Odriozola']
// console.log(players1Total)
//
// const {odds: {team1, team2, draw}} = game
// console.log(team1, team2, draw)
//
// const printGoals = function (...gameScore) {
//     console.log(`${gameScore.length} goals scored`)
// }
// printGoals(...game.scored)
//
// team1 < team2 && console.log(`${game.team1} is more likely to win`)