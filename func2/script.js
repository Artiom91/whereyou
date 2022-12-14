'use strict'

const survey = {
    question: 'What programming language would you like to learn?',
    options: ['0: JavaScript', '1: Python', '2: Ruby', '3: Java', '4: C#'],
    answers: new Array(5).fill(0),
    
    logNewAnswer () {
        const answer = Number(
            prompt(`${this.question}\n${this.options.join('\n')}\n{Enter option number}`)
            )


        console.log(answer)

        if (
            typeof answer === 'number' && answer >= 0 && answer < this.answers.length
        ) {
            this.answers[answer]++
        }
        console.log(this.answers)
    }
   }   

   document.querySelector('#take').addEventListener('click', survey.logNewAnswer.bind(survey));


   (function () {
    const h2 = document.querySelector('h2')
    h2.style.color = 'orange'
    

    document.querySelector('body').addEventListener('click', function () {
        h2.style.color = 'green'
    })
   })()
   

   const transactions = [300, 250, -500, 5000, -750, -180, 50, 1400, -350, -120]

   for (const transaction of transactions) {
    if (transaction > 0) {
        console.log(`${transaction} was deposited`)
    } else {
        console.log(`${Math.abs(transaction)} was withdrew`)
    }
   }