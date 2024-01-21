'use strict'



// const sum = ['zakaz-1', 'zakaz-2', 'zakaz-3']


// const result = sum[sum.length - 1]


// console.log(result)


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
// }

// Person.prototype.printAge = function () {
//     console.log(2023 - this.birthYear)
// }

// const artiom = new Person('Artiom', 1991)

// artiom.printAge()

// console.log(Person.prototype)



// const jigaplus = document.querySelector('.jigaPlus')
// const jigaminus = document.querySelector('.jigaMinus')



// const Car = function (name, speed, birth) {
//   this.name = name
//   this.speed = speed
//   this.birth = birth
// }

// Car.prototype.accelerate = function () {
//   this.speed += 5
//   console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
// }

// Car.prototype.break = function () {
//   this.speed -= 5
//   console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
// }

// // const jiga = new Car('Jiguli', 120, 1987)
// // const moskvich = new Car('Moskvich', 110, 1978)

// const Auto = (name, speed, anu) => {
//   const auto = new Car(name, speed, anu)
//   jigaplus.addEventListener('click', () => {
//     auto.accelerate()
//   });
//   jigaminus.addEventListener('click', () => {
//     auto.break()
//   });
// }

// const autoJiga = Auto('Jiga', 120, 1943)
// const autoFiat = Auto('Fiat', 90, 2000)

// console.log(autoJiga, autoFiat);

// class Person {
//     constructor(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }

//     printAge() {
//         console.log(2023 - this.birthYear)
//     }

//     greting() {
//         console.log(`Hello my name is ${this.firstName}`)
//     }
// }

// const jack = new Person('Jack', 1991)
// jack.printAge()

// jack.greting()

// const vasea = [122, 130, 500, -290, 600, 300]
// const danu = vasea.slice(-1).pop()
// console.log(danu)




// class Car {
//   constructor(name, speed, birth) {
//     this.name = name
//     this.speed = speed
//     this.birth = birth
//     }

//     accelerate() {
//         this.speed += 5
//         console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
//       }

//       break() {
//         this.speed -= 5
//         console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
//       }

//       get speedMph() {
//         return this.speed / 1.6
//       }

//       set speedMph(speed) {
//         this.speed = speed * 1.6
//       }
// }



// const jiga = new Car('Jiguli', 120, 1987)
// const moskvich = new Car('Moskvich', 110, 1978)

// jiga.accelerate()
// moskvich.accelerate()

// console.log(jiga.speedMph)
// jiga.accelerate()


// const Person = function (firstName, birthYear) {
//     this.firstName = firstName
//     this.birthYear = birthYear
// }

// Person.prototype.printAge = function () {
//     console.log(2023 - this.birthYear)
// }


// const Student = function (firstName, birthYear, dept) {
//   Person.call(this, firstName, birthYear)
//   this.dept = dept
// }

// Student.prototype = Object.create(Person.prototype)

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study at the "${this.dept}" department.`)
// }

// const jack = new Student('Jack', 2000, 'Programing')
// console.log(jack)
// jack.introduce()
// jack.printAge()
// console.log(jack instanceof Student)
// console.log(jack instanceof Person)

// Student.prototype.constructor = Student
// console.dir(Student.prototype.constructor)






// const Car = function (name, speed) {
//   this.name = name
//   this.speed = speed
// }

// Car.prototype.accelerate = function () {
//   this.speed += 5
//   console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
// }

// Car.prototype.break = function () {
//   this.speed -= 5
//   console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
// }


// const ElectricCar = function (name, speed, battery) {
//   Car.call(this, name, speed)
//   this.battery = battery
// }

// ElectricCar.prototype = Object.create(Car.prototype)

// ElectricCar.prototype.chargeBattery = function (chargeLevel) {
//   this.battery = chargeLevel
// }

// ElectricCar.prototype.accelerate = function () {
//   this.speed += 10
//   this.battery -= 1
//   console.log(`${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.battery}%`)
// }

// const tesla = new ElectricCar('Tesla', 100, 33)
// console.log(tesla)
// tesla.chargeBattery(80)
// console.log(tesla)
// tesla.accelerate()
// tesla.accelerate()
// tesla.accelerate()






// class Person {
//   constructor(fullname, birthYear) {
//     this.fullname = fullname
//     this.birthYear = birthYear
//   }

//   printAge() {
//     console.log(2023 - this.birthYear)
//   }

//   greet() {
//     console.log(`Hello! My name is ${this.fullname}!`)
//   }

//   get age() {
//     return 2023 - this.birthYear
//   }

//   set fullname(personName) {
//     // console.log(personName)
//     if (personname.includes(' ')) {
//       this._fullname = personName
//     } else {
//       alert('Полное имя должно состоять из имени и фамилии!')
//     }
//   }

//   get fullname() {
//     return this._fullname
//   }

//   static hightFive() {
//     console.log('Hight Five')
//   }
// }

// class Student extends Person {
//   constructor(fullname, birthYear, dept) {
//     super(fullname, birthYear)
//     this.dept = dept
//   }
// }

// const jack = new Student('Jack White', 2000, 'programing')
// console.log(jack)





// const PersonProto = {
//     printAge() {
//         console.log(2023 - this.birthYear)
//     },

//     initPerson(firstName, birthYear) {
//         this.firstName = firstName
//         this.birthYear = birthYear
//     }
// }


// const StudentProto = Object.create(PersonProto)
//     StudentProto.initStudent = function (firstName, birthYear, dept) {
//         PersonProto.initPerson.call(this, firstName, birthYear)
//         this.dept = dept
//     }

// StudentProto.introduce = function () {
//     console.log(`My name is ${this.firstName} and I study at the "${this.dept}" department`)
// }

// const jack = Object.create(StudentProto)
// jack.initStudent('Jack', 2000, 'programing')
// jack.introduce()
// jack.printAge()





// class Account {
//     constructor(owner, currency, pin) {
//         this.owner = owner
//         this.currency = currency
//         this.pin = pin
//         this.transaction = []
//         this.local = navigator.language

//         console.log(`Спасибо что открыли счет в нашем банке, ${owner}`)
//     }

//     depozit(value) {
//         this.transaction.push(value)
//         // this.deposit(value)
//     }

//     withdraw(value) {
//         this.transaction.push(-value)
//         // this.deposit(-value)
//     }
// }

// const account1 = new Account('Jack', 'USD', 1111)
// account1.depozit(500)
// account1.withdraw(100)
// console.log(account1)







class Car {
    constructor(name, speed) {
      this.name = name
      this.speed = speed
    }

    accelerate() {
        this.speed += 5
        console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
      }

      break() {
        this.speed -= 5
        console.log(`${this.name},${this.birth}Года  Двигаеться со скоростью ${this.speed} км/ч`)
      }
}





class ElectricCar extends Car {
    #battery;

    constructor(name, speed, battery) {
        super(name, speed)
        this.#battery = battery
      }

      chargeBattery(chargeLevel) {
            this.#battery = chargeLevel
            return this
      }

      accelerate() {
            this.speed += 10
            this.#battery -= 1
            console.log(`${this.name} едет со скоростью ${this.speed} км / ч, с зарядом ${this.#battery}%`)
            return this
          }
}

const tesla = new ElectricCar('Tesla', 100, 33)

tesla.accelerate().accelerate().accelerate().break().chargeBattery(90)