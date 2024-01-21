'use strict'

const btn = document.querySelector('.btn-country')
const countriesContainer = document.querySelector('.countries')

//////////////////////////////////////////////////////

// const getCountryData = function(country) {
// const request = new XMLHttpRequest()

// request.open('GET', `https://restcountries.com/v3.1/name/${country}`)
// request.send()

// request.addEventListener('load', function() {
//     const [data] = JSON.parse(this.responseText)

//     console.log(data)

//     const currencies = data.currencies
//     const curencyName = Object.values(currencies)[0].name
//     const curencySymbol = Object.values(currencies)[0].symbol
  
//     const languages = data.languages
//     const languagesName = Object.values(languages)[0]
  
//     const html = `
    
//     <article class="country">
//           <img class="country__img" src="${data.flags.svg}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.name.common}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(+data.population / 1000000).toFixed(1)} Милионов</p>
//             <p class="country__row"><span>🗣️</span>${languagesName}</p>
//             <p class="country__row"><span>💰</span>${curencySymbol} ${curencyName}</p>
//           </div>
//     </article>
    
//     `
//     countriesContainer.insertAdjacentHTML('beforeend', html)
//     countriesContainer.style.opacity = 1
// })
// }

//////////////////////////////////////////////////////////////////////////////

const displayCountry = function(data, className = '') {
  const currencies = data.currencies
  const curencyName = Object.values(currencies)[0].name
  const curencySymbol = Object.values(currencies)[0].symbol

  const languages = data.languages
  const languagesName = Object.values(languages)[0]

  const html = `
  
  <article class="country ${className}">
        <img class="country__img" src="${data.flags.svg}" />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(+data.population / 1000000).toFixed(1)} Милионов</p>
          <p class="country__row"><span>🗣️</span>${languagesName}</p>
          <p class="country__row"><span>💰</span>${curencySymbol} ${curencyName}</p>
        </div>
  </article>
  
  `
  countriesContainer.insertAdjacentHTML('beforeend', html)
  countriesContainer.style.opacity = 1
}

const displayError = function(message) {
  countriesContainer.insertAdjacentText('beforeend', message)
  // countriesContainer.style.opacity = 1
}


const getCountryAndBorder = function(country) {
  const request1 = new XMLHttpRequest()
  
  request1.open('GET', `https://restcountries.com/v3.1/name/${country}`)
  request1.send()
  
  request1.addEventListener('load', function() {
      const [data] = JSON.parse(this.responseText)
  
      // console.log(data)
      
    displayCountry(data)

    const [firstNeighbour] = data.borders
    if(!firstNeighbour) return

    ///////////////////////////////////////////////

    const request2 = new XMLHttpRequest()
  
      request2.open('GET', `https://restcountries.com/v3.1/alpha/${firstNeighbour}`)
      request2.send()
    
      request2.addEventListener('load', function() {
        const [data2] = JSON.parse(this.responseText)
        console.log(data2)
        displayCountry(data2, 'neighbour')
      })
    
  })
  }

  const getDataAndConvertoJSON = function(url, errorMessage = 'Что-то пошло не так. ') {

    return fetch(url).then(response => {
      if(!response.ok)
        throw new Error (`${errorMessage} Ошибка ${response.status}`)
  
        return response.json()
    })
  
  }

  const getCountryData = function(countryName) {
    getDataAndConvertoJSON(`https://restcountries.com/v3.1/name/${countryName}`, 'Страна не найдена')

    .then(data => {displayCountry(data[0])
  
    const firstNeighbour = data[0].borders[0]
    if(!firstNeighbour) return
  
    return getDataAndConvertoJSON(`https://restcountries.com/v3.1/alpha/${firstNeighbour}`, 'Страна не найдена')
    })
    .then(data => displayCountry(data[0], 'neighbour'))
  
    .catch(e => {
      console.error(`${e} :D `)
      displayError(`Что-то пошло не так :D ${e.message}`)
    })
    .finally( () => {
      countriesContainer.style.opacity = 1
    })
  }



  btn.addEventListener('click', function() {
    getCountryData('Moldova')
    // getCountryAndBorder('Italy')
    
  })

  // getCountryData('asdjasndas')