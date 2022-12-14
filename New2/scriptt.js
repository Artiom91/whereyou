import alert from "bootstrap/js/src/alert";

const btn = document.querySelector('button')

// btn.onclick = function (){
//     alert('Hello')
// }

// btn.onclick = function (){
//     alert('World')
// }



btn.addEventListener('click', () => {
    alert('Hello')
})

btn.addEventListener('click', () => {
    alert('World')
})

let html = '<h1 class="h1-artiom">Zdarova Artiom</h1>'

let name = 'Artiom'

let lastname = 'Familia'


let name2 = 'Tolea'

let lastname2 = 'Ilescu'
let abonament = 'premium'
let time = 0
if (time === 0) {
    abonament = 'standart'
}

let lastname3 = null

function getFullName(lastname, name, abonament) {
    console.log(`${lastname} ${name} abonament:${abonament}`)
}

getFullName(name2, lastname2, abonament)

setTimeout(() => {
    getFullName(name, lastname3 === null ? 'artiom no complectat campul familia' : lastname3)
},3000)




// string
// integer
// object
// ' asdasd' = string
// 123123 = integer
const object = {
    name: 'asdasd',
    age: 27,
    func: function (asd) {
        console.log('zdarova ' + asd)
    }
}

object.func(name2)

// undifined = return = nica
//
// return = pustata =  null ' ' []. {}, func()

let body = document.querySelector('body')
body.innerHTML += html

let zdarov = document.querySelector('.h1-artiom')

function textColor(text, color, time)  {
    setTimeout(() =>{
        text.style.backgroundColor = color
    }, time)
}

let textDemo = document.querySelector('h3')

textColor(textDemo, 'blue', 5000)
textColor(zdarov, 'teal', 2000)

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


const compare = [1, 2, 15, 7]


al