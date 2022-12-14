// // const active = [1, 5, 2, 14, 0, 3]
// //
// // active.sort((a, b) => a - b)
// // alert(active)
//
// // const names = 'Vasea, Petea, Igari'
// // const arr = names.split(', ')
// // for (let name of arr) {
// //     alert(`Сообщение получат: ${name}.`)
// // }
//
// // const name = 'Vasea, Petea, Igari'.split(', ', 3)
// // alert(name)
//
// // const str = "Test"
// // alert(str.split(''))
//
// // const name = ['Vasea', 'Petea', 'Jorjic']
// // alert(name.join(':'))
//
// // const arr = [1, 2, 3, 4, 5,]
// // let result = arr.reduce((sum, current) => sum + current)
// // alert(result)
//
// let render = function (template, selector) {
//     let node = document.querySelector(selector);
//     if (!node) return;
//     node.innerHTML = template;
// };
//
// const menu = [
//     {
//         title: 'Home',
//         link: '/home'
//     },
//     {
//         title: 'About',
//         link: '/about'
//     },
//     {
//         title: 'Contacts',
//         link: '/contacts'
//     }
// ]
//
//
// render( menu.map((item) => {
//     let active = window.location.href.includes(item.link) ? 'active' : ''
//     return `<li><a class="${active}" href="${item.link}">${item.title}</a></li>`
// }), '#menu');
//
// // dala in pula!  window.location.href.includes ---> aici eu ma uit daca este denumirea http://localhost:5174 ---> asta  /about -->> aici item.link , daca este , ii pune active classa
// // adica daca eu apas pe link , si in brauzer se prabiveste /about , znacit la about se adauga classa active
// // functia se uite daca eu am apasat pe ceva , ea ii da active classa , ponial? yes , includes inseamana ---> daca este cuvintu ista in windows.location.href
// // tu mai bine stii css ca mine :D :D
// // care e acuma activ , e zadacia ta sal faci!!!
// // si virgula so scoti!
// // asta e un menu simplu! asta tat ce ai aratat tu eu prima data vad :D
// // astae baevaia practica , tu stii tat ce scriu eu! acolo susu e object cu info in el , jos e o functie , cu map care
// // nica iesit din comun , eu iti arat ca sa stii ce poti face cu ceea ce inveti tu!  e clar
// // intelegi ceva? ceva ceva iac aisi e greu ! :D
// // :D mda o sa ma uit la coodu ista aatent
// // e gavnocod , se poate de facut mai pizdos , cum am facut eu cu active: true
// // dar nu tin minte cum se face corect , am uitat!!!
// // //mo batut soarele in cap azi :D
// //eu nici pe aista nul pot scrie ! :D
// // asa tot se scrie!~
// // tirziu am intyeles!!! iobanii return! :D el despre ternarnii operator putin o zis / ternar vezi linia asta sura ---
// // acuma e mai corect! iaC o sa ma uit la el atent
// // eu am inca dahuia variante cum sa fac acest menu , de atita ca eu am invatat limbaju , si pot sal fac cum vreu eu!
// //fara sa ma uit pe neet!
// // const menu =  asta poate fi baza danih , si in admin panel la sait , adaugi un titlu nou la menu, naprimer , Download , cu linku /download , el automat aPARE pe site
// // fara sa scrii in cod!
// // sper ca seva ai daganit , asta e baevaia practica , nime asa ceva nu-ti arata! 100%
// // la lucru asa ceva o sa faci , eu vreu ca tu sa lucrezi cu temele estea , de exemplu eu amu am facut maop
//
// // cu forEach e corect , dar nu tin minte cum sa le scot in html , eu is diprins cum sa fac in React , acolo este tat diagata facut , si eu ma putaesc aici!
// // pentru ca cu map , el prinde si virgulele
//
// // caroci mine o sa ne uitam de pidarsia asta , e ceva tare simplu , numa ca nu tin minte ok
// // mine caroci :D
// // sau cauta tu cum sa faci!
// // sigur ca mai usor ca mine o sa gasesti blea !
// // ok !
//
//
//
// // const number = [1, 2]
// //
// // alert(number.concat(3, 4))
// //
//
//
// // function compareNumeric(a, b) {
// //     if (a > b) return 1;
// //     if (a < b) return -1;
// //     if (a === b) return 0
// // }
// //
// // const number = [6, 4, 2, 1, 5, 3]
// // number.sort(compareNumeric)
// // alert(number)
//
//
// // const number = [1, 2 ,3 ,4 ,5 ,6 ,7]
// // number.sort((a, b) => a - b)
// // alert(number)
// //
// // const names = 'Vasea, Petea, Galiuta'
// // const arr = names.split(', ')
// //
// // for (let name of arr) {
// //     alert(`Сообшение получит: ${name}`)
// // }
// //
// // const name = ['Vasea', 'Petea', 'Jorjic']
// // const names = name.join(', ')
// // alert(names)
// //
// // const numbers = [1, 2, 3, 4, 5, 6,]
// //
// // const resolve = numbers.reduce((suma, curenta) => suma + curenta)
// // alert(resolve)
//
//
//
// const army = {
//     minAge: 18,
//     maxAge: 27,
//     canJoih(user) {
//         return user.age >= this.minAge && user.age < this.maxAge
//     }
// }
//
// const users = [
//     {age: 16},
//     {age: 20},
//     {age: 23},
//     {age: 30}
// ]
//
// const soldateii = users.filter(army.canJoih, army)
//
// alert(soldateii.length)
// alert(soldateii[0].age)
// alert(soldateii[1].age)

// const str = prompt("", "")
// const products = str.split(", ")
// console.log(products)
//
//
// const number = [1 ,5, 2, 4, 7, 90, 11]
// number.sort(compareNum)
// console.log(number)
//
// function compareNum(a, b) {
//     return a - b
// }


