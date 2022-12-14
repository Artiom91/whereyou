'use strict'

// function myFn(a, b) {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
//
// myFn(10, 3)
//
// let result = myFn(a,b)
//
// console.log(result)


// const personeOne = {
//     name: 'Bob',
//     age: 21
// }

// function increasePersonAge(person) {
//     const updatedPerson = Object.assign({}, person)
//     updatedPerson.age += 1
//     return updatedPerson
// }
//
// const updatedPersonOne = increasePersonAge(personeOne)
//
// console.log(personeOne.age)
// console.log(updatedPersonOne.age)

// function printMyName() {
//     console.log('Artiom')
// }
//
// setTimeout(printMyName, 10000)
//
// console.log('Start')


// const a = 5
//
// function myFn() {
//     function innerFn() {
//         console.log(a)
//     }
//     innerFn()
// }
//
// myFn()

// const buttonInfo = {
//     text: 'Buy'
// }
//
// const buttonStyle = {
//     color: = 'yellow',
//     width: 200,
//     height: 300
// }
//
// const button = {
//     ...buttonInfo,
//     ...buttonStyle
// }
//
// console.table(button)

// console.log('Hello' +' ' + 'World')
//
// const hello = 'Hello'
// const world = 'World'
//
// const greeting = hello + ' ' + world
// console.log(greeting)

//Меня зовут Артем и я живу в городе Кишиневе


// const myName = 'Артем'
// const myCity = 'Кишинев'
//
// const question = 'меня зовут ' + `${myName}` + ' и я живу в городе ' + `${myCity}`
//
//
// console.log(question)


// setTimeout(function() {
//     console.log('Отложенное сообщения')
// },1000)

// const myFunction = (a, b) => {
//     let c
//     a = a + 1
//     c = a + b
//     return c
// }
//
// myFunction(5, 3)
//
// setTimeout(() => {
//     console.log('Отложенное сообщения')
// }, 1000)
//
// function multByFactor(value, multipler = 1) {
//     return value * multipler
// }
//
// multByFactor(10,2)
// multByFactor(5)

// const multByFactor = (value, multipler = 1) => {
//     return value * multipler
// }
//
// multByFactor(10, 2)
// multByFactor(5)

// const newPost = (post, addedAt = Date()) => ({
//     ...post,
//     addedAt,
// })
//
// const firstPerson = {
//     id: 1,
//     author: 'Artiom'
// }
//
// newPost(firstPerson)

// const newPost = (post, addedAt = Date()) => {
//     const myPost = {
//         ...post,
//         addedAt,
//     }
// return(myPost)
// }
//
// const firstPerson = {
//     id: 1,
//     author: 'Artiom'
// }
//
// console.log(newPost(firstPerson))

// const fnWithError = () => {
//     throw new Error('Some error')
// }
//
// fnWithError()
//
// console.log(Loading)

// const fnWithError = () => {
//     throw new Error('Some error')
// }
//
// try {
//     fnWithError()
// } catch (error) {
//     console.error(error)
//     console.log(error.message)
// }
//
// console.log('Continuie...')

// const myArray = new Array(1, 2, 3)
//
// console.log(myArray)

// const myArray = [1, 2, 3]
// console.log(myArray)
//
// const myArray = [1, 2, 3, 4]
//
// myArray[4] = true
//
// console.log(myArray)
// console.log(myArray.length)


// const myArray = [1, 2, 3]
// console.log(myArray)
// myArray.forEach(el => console.log(el * 2))
//
//
// console.log(myArray)

// const userProfile = {
//     name: 'Artiom',
//     commentsQty: 30,
//     hasSignedAgreement: false
// }
//
// const userInfo = ({ name, commentsQty }) => {
//     if (!commentsQty) {
//         return `User ${name} has no coments`
//     }
//
//     return `User ${name} has ${commentsQty} coments`
// }
//
// userInfo(userProfile)
// console.log(userInfo(userProfile))





// const profile = {
//     name: 'Artiom',
//     comments: 18,
//     lastName: false
// }
//
// const userProfile = ({ name, comments }) => {
//     if (!comments) {
//         return `daca ai ${comments} comentarii pleaca de aici`
//     }
//     return `daca ai ${comments} comentarii atunci Salutare ${name}`
// }
//
// userProfile(profile)
//
// console.log(userProfile(profile))

// let year = 17
//
// if (year < 18) {
//     console.log('Powel nahui')
// } else {(console.log('Buna ziua'))}
//
// console.log(year)

// const sumPositiveNumbers = (a, b) => {
//     if (typeof a !== 'number' || b !== 'number')
//         return 'One of the arguments in not a number'
//
//     if (a <= 0 || b !== 0) {
//         return 'number are not positive'
//     }
// }
//
// console.log(sumPositiveNumbers())

// const myArray = ['first', 'second', 'third']
//
// for (let i = 0; i < myArray.length; i++) {
//     console.log(myArray[i])
// }


// const myArray = ['first', 'second', 'third']
//
// myArray.forEach((element, index) => {
//     console.log(element, index)
// })

// const myString = 'sucaNahuiBlea'
//
// for (const letter of myString) {
//     console.log(letter)
// }


// class Comment {
//     constructor(text) {
//         this.text = text
//         this.voteQty = 0
//     }
//     uppVote() {
//         this.voteQty += 1
//     }
// }
//
// const firstComment = new Comment('First Comment')
// const secondComment = new Comment('Second Comment')
// const thirdComment = new Comment('Third Comment')
//
// firstComment.uppVote()
// firstComment.uppVote()
// firstComment.uppVote()
// console.log(firstComment.voteQty)
//
// secondComment.uppVote()
// secondComment.uppVote()
// secondComment.uppVote()
// secondComment.uppVote()
// console.log(secondComment.voteQty)
//
// thirdComment.uppVote()
// thirdComment.uppVote()
// thirdComment.uppVote()
// thirdComment.uppVote()
// thirdComment.uppVote()
// console.log(thirdComment.voteQty)

// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then((response) => {
//         console.log(response)
//         return response.json()
//     })
//     .then((json) => console.log(json))
//     .catch(error => console.error(error))

// const asyncFn = async () => {
//     return 'Succes'
// }
//
// asyncFn()
//     .then(value => console.log(value))

//
// const asyncFn = async () => {
//     throw new Error('There was an error!')
// }
//
// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message))




// const timerPromise = () =>
//     new Promise((resolve, reject) =>
//     setTimeout(() => resolve(), 2000))
//
// const asyncFn = async () => {
//     console.log('Timer Start')
//     const timerStart = performance.now()
//     await timerPromise()
//     const timerEnd = performance.now()
//     console.log('Timer Ended', timerEnd - timerStart)
// }
// asyncFn()



















// const getData = (url) =>
//     new Promise((resolve, reject) =>
//     fetch(url)
//         .then(response => response.json())                                        //1
//         .then(json => resolve(json))
//         .catch(error => reject(error))
//     )
//
// getData('https://jsonplaceholder.typicode.com/todos/5')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json                                                              //2
// }
//
// getData('https://jsonplaceholder.typicode.com/todos/5')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

// const getData = async (url) => {
//     const res = await fetch(url)
//     const json = await res.json()
//     return json
// }
//
// const url = 'https://jsonplaceholder.typicode.com/todos/5'
//
// try {
//     const data = await getData(url)
//     console.log(data)
// } catch (error) {
//     console.log(error.message)
// }

// const getName = ["я", "изучаю", "JavaScript"]
// getName.splice(2, 0, "сложный", "язык")
// alert(getName)

// let arr = [1, 2, 5]
// arr.splice(-1, 0, 3, 4)
// alert(arr)
//
// let arr = ['t', 'e', 's', 't']
// alert(arr.slice())
//
// let arr = [1, 2]
// alert(arr.concat([3, 4], 5, 6))
//
// let arr = [1, 2]
// let arrLike = {
//     0: "что-то",
//     1: "еще",
//     [Symbol.isConcatSpreadable]: true,
//     length: 2
// }
//
// alert(arr.concat(arrLike))


//
// const user = [
//     {id: 1, name: "Пекя"},
//     {id: 2, name: "Вася"},
//     {id: 3, name: "Аврора"}
// ]
//
// const users = user.filter(item => item.id < 2)
//
// alert(users.length)

// const vasea = ["Igari", "Petrica", "Vasilica"].map(item => item.length)
// alert(vasea)


import alert from "bootstrap/js/src/alert";

const arr = [1, 2, 15, 8]

arr.sort(function (a,b) {return a - b})

console.log(arr)
