"use strict";

import "./style.css";

import translateEn from "./lang/translateEng.json";
import translateRu from "./lang/translateRus.json";

console.log(translateEn.welcome);

function getLang(lang, translate, translatep, tag, tagp, storageLang) {
  let langEn = document.querySelector(lang);
  return langEn.addEventListener("click", () => {
    document.querySelector(tag).innerText = translate;
    document.querySelector(tagp).innerText = translatep;
    localStorage.setItem("lang", storageLang);
  });
}

getLang("#langRu", translateRu.welcome, translateRu.subtext, "h1", "p", "ru");
getLang("#langEn", translateEn.welcome, translateEn.subtext, "h1", "p", "en");
//
// let name = prompt('What is your Name?')
// let firstName = prompt('What is your First Name?')
// let year = prompt('How old are you ?')
//
//
// console.log('Your Name is ' + name + ', Your Firs Name is ' + firstName + ', Your age is ' + year)

// const weight = prompt('Enter your weight')
// const height = prompt('Enter your height')
//
// const bodyMassIndex = weight / Math.pow(height, 2)
// const areYouOverHeight = bodyMassIndex >= 25
//
// if (areYouOverHeight) {
//     console.log(`Yes, your BMI is more than normal by ${bodyMassIndex - 25}`)
// } else {
//     console.log(`No, your weight is normal`)
// }

// console.log(indexMassIndex)
// console.log(areYouOverHeight)
//
// alert('Are you over height? ' + areYouOverHeight)

// const age = 15
//
// if (age >= 18) {
//     console.log('Bratuha poti viziona video dat')
// } else {
//     console.log('Bratuha nu poti viziona video dat')
//     const yearsLeft = 18 - age
//     console.log(`Bratuha mai ai de pompat lapte inca ${yearsLeft} ani`)
// }

// const color = 'red'
//
// switch (color) {
//     case 'green':
//         console.log('Go!')
//         break
//     case 'yellow':
//         console.log('Get ready!')
//         break
//     case 'red':
//         console.log('Stop!')
//         break
//     default:
//         console.log('Incorrect color')
// }

// const year = prompt('Enter your age')
// const message = year >= 18 ? 'You can buy alcohol' : 'You can not buy alochol'
// console.log(message)
// alert(message)

// const canByAlcohol = (birthYear, yearNow) => {
//     const age = yearNow - birthYear
//     const isPersonOlderThan = age >= 21 ? true : false
//     return isPersonOlderThan
// }
//
// console.log(canByAlcohol(1991, 2022))

//Dept 1 will get a bonus of

// const getAverage = (x, y, z) => (x + y + z) / 3
//
// const dept1AverSales1 = getAverage(35467, 29842, 38501)
// const dept2AverSales1 = getAverage(70533, 50121, 33899)
// console.log(dept1AverSales1, dept2AverSales1)
//
//
// const dept1AverSales2 = getAverage(50301, 21984, 19207)
// const dept2AverSales2 = getAverage(72381, 41562, 29465)
// console.log(dept1AverSales2, dept2AverSales2)
//
//
// const printBonus = function (dept1AverSales, dept2AverSales) {
//     if (dept1AverSales > dept2AverSales) {
//         const diff = dept1AverSales - dept2AverSales
//         const percent = diff / dept2AverSales * 100
//         if (percent > 30) {
//             console.log(`Dept 1 will get a bonus of ${percent}%`)
//         } else {
//             console.log('No bonus in this quater')
//         }
//     } else if (dept2AverSales > dept1AverSales) {
//         const diff = dept2AverSales - dept1AverSales
//         const percent = diff / dept1AverSales * 100
//         if (percent > 30) {
//             console.log(`Dept 2 will get a bonus of ${percent}%`)
//         } else {
//             console.log('No bonus in this quater')
//         }
//     } else {
//         console.log('No bonus in this quater')
//     }
// }
//
// printBonus(dept1AverSales1, dept2AverSales1)
// printBonus(dept1AverSales2, dept2AverSales2)

//0.2    0.15    //11, 20, 47

// const calculateBills = bills => bills < 20 ? bills * 0.2 : bills * 0.15
// const bills = [11, 20, 47]
// const tips = [calculateBills(bills[0]), calculateBills(bills[1]), calculateBills(bills[2])]
// const totalBils = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]]
// console.log(bills, tips, totalBils )

// const youraObject = {
//     name: 'YouRa',
//     firstName: 'Allakhverdov',
//     birthYear: 1974,
//     job: 'programming instructor',
//     familyMembers: ['Irina', 'Michael', 'YouRa'],
//     hasDriverLincese: true,
//
//     calcAge: function () {
//         this.age = 2021 - this.birthYear
//         return 2021 - this.birthYear
//     },
//
//     getSummary: function () {
//         return `${this.name} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriverLincese ? 'a' : 'no'} driver license`
//     }
// }
// // console.log
// // (`${youraObject.name} has ${youraObject.familyMembers.length} family members and the first one is ${youraObject.familyMembers[0]}`)
//
//
// console.log(youraObject.calcAge())
// console.log(youraObject.getSummary())

// const djek = {
//     name: 'Djek',
//     firstName: 'White',
//     weight: 79,
//     height: 1.70,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi
//     }
// }
//
// const mike = {
//     name: 'Mike',
//     firstName: 'Black',
//     weight: 91,
//     height: 1.93,
//     calcBmi: function () {
//         this.bmi = this.weight / this.height ** 2
//         return this.bmi
//     }
// }
//
// console.log(djek.calcBmi())
// // console.log(djek.bmi)
//
// console.log(mike.calcBmi())
//
// if (djek.bmi > mike.bmi) {
//     console.log(`${djek.name} ${djek.firstName} BMI (${djek.bmi}) is higher than ${mike.name} ${mike.firstName} (${mike.bmi})`)
// } else if (djek.bmi < mike.bmi) {
//     console.log(`${mike.name} ${mike.firstName} BMI (${mike.bmi}) is higher than ${djek.name} ${djek.firstName} (${djek.bmi})`)
// }

// const user123 = ['Artiom', 'Rotari', 1991, `frontender`, ['Maria', 'Dima', 'Cristi']]
// for (let i = 0; i < user123.length; i++) {
//     console.log(user123[i], typeof user123[i])
// }

// const user123 = ['Artiom', 'Rotari', 1991, `frontender`, ['Maria', 'Dima', 'Cristi'], false]
//
// for (let i = user123.length - 1; i >= 0; i--) {
//     console.log(user123[i])
// }

// for (let exercise = 1; exercise <= 3; exercise++) {
//     console.log(`Exercise ${exercise}`)
//     for (let rep = 1; rep <= 5; rep++) {
//         console.log(`Rep ${rep}`)
//     }
// }

// let diceNumber = Math.trunc(Math.random() * 6) + 1
// console.log(`Aici o cazut numaru ${diceNumber}`)
//
// while (diceNumber !== 6) {
//     console.log(diceNumber)
//     diceNumber = Math.trunc(Math.random() * 6) + 1
//     console.log(`Aici o cazut numaru ${diceNumber}`)
// }

// const calculateTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15
// const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57]
// const tips = []
// const totalBills = []
//
// for (let i = 0; i < bills.length; i++) {
//     const tip = calculateTips(bills[i])
//     tips.push(tip)
//     totalBills.push(bills[i] + tip)
// }
//
// console.log(bills, tips, totalBills)


// const humidities = [1, 23, 42, 32, 28, 24, 'error', 55, 99, 79]
//
// const calculateHumiditiesAmplitude = function (humidities) {
//   let max = humidities[0]
//   let min = humidities[0]
//
//   for (let i = 1; i < humidities.length; i++) {
//     const currentHumidity = humidities[i]
//     if (typeof currentHumidity !== 'number') continue
//
//     if (currentHumidity > max) {
//       max = currentHumidity
//     }
//
//     if (currentHumidity < min) {
//       min = currentHumidity
//     }
//   }
//   console.log(max, min)
// }
//
// calculateHumiditiesAmplitude([1, 23, 42, -1, 22])
// calculateHumiditiesAmplitude(humidities)


const data1 = [49, 51, 63]
const data2 = [31, 29, 43, 58, 52]

const printHumiditiesForecast = function (arr) {
  let str = ''

  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}% in ${i + 1} days ... `
  }
  console.log(str)
}

printHumiditiesForecast(data1)