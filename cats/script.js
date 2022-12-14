'use strict'

// 1.Данные Жени [4, 5, 3, 11, 6, 2, 4, 1, 5, 9] 
// Данные Юли [2, 4, 5, 1, 13, 2, 15, 8, 3, 7]
// 2.Данные Жени [3, 5, 9, 14, 1, 2, 6, 8, 3, 10] 
// Данные Юли [8, 2, 10, 1, 2, 5, 6, 3, 1, 4]


const catsJaneData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
const catsJuliaData1 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
const catsJaneData2 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]
const catsJuliaData2 = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9]

const verifyCats = function (catsJane, catsJulia) {
    const catsJaneCorrect = catsJane.slice()
    catsJaneCorrect.splice(0, 1)
    catsJaneCorrect.splice(-1)

    const cats = catsJaneCorrect.concat(catsJulia)

    cats.forEach(function(catsAge, index) {
        if(catsAge >= 2) {
            console.log(`Кошка № ${index + 1} взрослая, ей ${catsAge} лет`)
        } else {
            console.log(`Кошка № ${index + 1} ещё котёнок`)
        }
    })
}

verifyCats(catsJaneData1, catsJuliaData1)



const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120]

const usdToEuro = 0.86

const transactionsEuro = transactions.map(trans => trans * usdToEuro)

console.log(transactionsEuro)



const transactionDescription = transactions.map((transaction, index, array) => 

    `Transaction № ${index + 1}: ${transaction} was ${Math.abs(transaction) > 0 ? 'deposited' : 'withdrew'} `


    // let description = ''

    // if(transaction > 0) {
    //     description = `Transaction № ${index + 1}: ${transaction} was deposited`
    // } else {
    //     description = `Transaction №${index + 1}: ${Math.abs(transaction)} was withdrew`
    // }
    // return description
)

console.log(transactionDescription)

const withdrawals = transactions.filter(function (trans) {
    return trans < 0
})

console.log(withdrawals)

const deposites = transactions.filter(trans => trans > 0)

console.log(deposites)

const balance = transactions.reduce(function(acc, item, index, arr) {
    return acc + item
}, 0)

console.log(balance)

const min = transactions.reduce((acc, trans) => (acc < trans ? acc : trans), transactions[0])

console.log(min)

const getAverageHumanAge = function(catsAge) {
    const humanAge = catsAge.map(catsAge => catsAge <= 2 ? catsAge * 10 : catsAge * 7)
    const adultCats = humanAge.filter(humanAge => humanAge >= 18)
    const averageHumanAge = adultCats.reduce((acc, catsAge, index, arr) => acc + catsAge / arr.lenght, 0)
    return averageHumanAge
}

const averageHumanAge1 = getAverageHumanAge([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2])
const averageHumanAge2 = getAverageHumanAge([1, 16, 12, 4, 5, 1, 3, 11, 7, 2])

console.log(averageHumanAge1)
console.log(averageHumanAge2)


const totalWithdrawalsEuro = transactions.filter(trans => trans < 0).map(trans => trans * 0.86).reduce((acc, trans) => acc + trans, 0)
console.log(totalWithdrawalsEuro)


const getAverageHumanAge1 = catsAge => catsAge
.map(catsAge => (catsAge <= 2 ? catsAge * 10 : catsAge * 7))
.filter(humanAge => humanAge <= 18)
.reduce((acc, catsAge, index, arr) => acc + catsAge / arr.lenght, 0)

const averageHumanAge3 = getAverageHumanAge1([7 , 3, 2, 4, 1, 15, 8, 1, 9, 2])
const averageHumanAge4 = getAverageHumanAge1([1, 16, 12, 4, 5, 1, 3, 11, 7, 2])

console.log(averageHumanAge3)
console.log(averageHumanAge4)

const transactions1 = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120]

const vasea = transactions1.find(trans => trans > 0)
const petea = transactions1.find(trans => trans < 0)
console.log(vasea)
console.log(petea)



const account1 = {
    userName: 'Cecil Ireland',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
  };
  
  const account2 = {
    userName: 'Amani Salt',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
  };
  
  const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
  };
  
  const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
  };
  
  const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
  };
  
  const accounts = [account1, account2, account3, account4, account5];

  const depositAndWidrowals = accounts.flatMap(account => account.transactions)
  .reduce((acc, trans) => {
    acc[trans > 0 ? 'depositTotal' : 'withdrawalsTotal'] += trans
    return acc
  }, { depositTotal: 0, withdrawalsTotal: 0 }
  )

  console.log(depositAndWidrowals)

  const text1 = 'работа с масивами в javascript'
  const text2 = 'работа с масивами в javascript ПРОСТЫМ языком для новичков'
  const text3 = 'работа с масивами и строками в javascript'
  const text4 = 'для чего нужны масивы в javascript'

  const textToTitleCase = function(text) {
    const exceptions = ['с', 'в', 'для', 'и', 'по', 'на', 'о']

    const capitalizeString = word => word[0].toUpperCase() + word.slice(1)
    

    const titleCase = text
    .toLowerCase().split(' ')
    .map(word => exceptions.includes(word) ? word : capitalizeString(word))
    .join(' ')
    return capitalizeString(titleCase)
  }

  console.log(textToTitleCase(text1))
  console.log(textToTitleCase(text2))
  console.log(textToTitleCase(text3))
  console.log(textToTitleCase(text4))


  console.log('-------------------------------------------------------------------')

  const cats = [
    { catWeight: 3, foodWeight: 25, owners: ['Наташа'] },
    { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
    { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
    { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
   ]

   cats.forEach(cat => (cat.recomendedPortion = cat.catWeight * 0.75 * 12))

  console.log(cats)



  const alexCat = cats.find(cat => cat.owners.includes('Алекс'))
  console.log(alexCat)

  console.log(`Эта кошка ести слишком ${alexCat.catWeight > alexCat.foodWeight ? 'много' : 'мало'}`)



  const catsEatTooMuchOwners = cats.filter(cat => cat.foodWeight > cat.recomendedPortion).flatMap(cat => cat.owners)
  console.log(catsEatTooMuchOwners)
  const catsEatTooLittleOwners = cats.filter(cat => cat.foodWeight < cat.recomendedPortion).flatMap(cat => cat.owners)
  console.log(catsEatTooLittleOwners)


  console.log(`${catsEatTooMuchOwners.join(', ')} - хозяева кошек, которые едят слишком много!`)
  console.log(`${catsEatTooLittleOwners.join(', ')} - хозяева кошек, которые едят слишком мало!`)

  console.log(cats.some(cat => cat.foodWeight === cat.recomendedPortion))

const isFoodWeightNormal = cat => cat.foodWeight > cat.recomendedPortion * 0.9 && cat.foodWeight < cat.recomendedPortion * 1.1

  console.log(cats.some(isFoodWeightNormal))

  console.log(cats.filter(isFoodWeightNormal))

  const cats1 = cats.slice().sort((x, y) => x.recomendedPortion - y.recomendedPortion)
  console.log(cats1)

  console.log(+(1.3456645).toFixed(2))