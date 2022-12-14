'use strict'

const greet = function (greetengText) {
    return function (name) {
        console.log(`${greetengText} ${name}`)
    }
}

const hi = greet('Hi')
hi('Artiom')
hi('Maria') 


const arrGreet = greetengText => name => console.log(`${greetengText} ${name}`)

arrGreet('Hello')('Artiom')

const airline234 = {
    airlineName: 'SkyUp',
    iataCode: 'SU',
    bookings: [],
    book(flightNumber, passengerName) {
        console.log(`${passengerName} hass booked a ticked on ${this.airlineName} flight ${this.iataCode}${flightNumber}`)
        this.bookings.push({
            flight: `${this.iataCode} ${flightNumber}`,passengerName
        })
    }
}

airline234.book(346, 'Artom')

console.log(airline234)


const airline2 = {
    airlineName: 'EuroFlights',
    iataCode: 'EF',
    bookings: [],
}

const book = airline234.book

book.call(airline2, 456, 'Maria')
console.log(airline2)

airline234.airplanes = 200
airline234.purchaseAirplane = function() {
    console.log(this)
    this.airplanes++
    console.log(this.airplanes)
}

document.querySelector('#purchase').addEventListener('click', airline234.purchaseAirplane.bind(airline234))