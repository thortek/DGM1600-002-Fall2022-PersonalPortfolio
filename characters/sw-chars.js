import { people } from '../data/people.js'

const header = document.querySelector('header')
const main = document.querySelector('main')

const allCharsButton = document.createElement('button')
allCharsButton.textContent = 'All Characters'
allCharsButton.addEventListener('click', function () {
    populateDOM(people)
})

const maleCharacters = people.filter(person => person.gender === 'male')
const femaleCharacters = people.filter(person => person.gender === 'female')
const otherCharacters = people.filter(person => person.gender !== 'female' && person.gender !== 'male')

const maleCharsButton = document.createElement('button')
maleCharsButton.textContent = 'Male Characters'
maleCharsButton.addEventListener('click', () => populateDOM(maleCharacters))

const femaleCharsButton = document.createElement('button')
femaleCharsButton.textContent = 'Female Characters'
femaleCharsButton.addEventListener('click', () => populateDOM(femaleCharacters))

const otherCharsButton = document.createElement('button')
otherCharsButton.textContent = 'Other Characters'
otherCharsButton.addEventListener('click', () => populateDOM(otherCharacters))

header.appendChild(allCharsButton)
header.appendChild(maleCharsButton)
header.appendChild(femaleCharsButton)
header.appendChild(otherCharsButton)

function populateDOM(arrayOfCharacters) {
    while (main.firstChild) { // light saber activates... until all children removed
        main.removeChild(main.firstChild);
      }
    arrayOfCharacters.forEach(person => {
        let figure = document.createElement('figure')
        let figImage = document.createElement('img')
        let figCaption = document.createElement('figcaption')

        let charNum = getLastNumber(person.url)
    
        figImage.src = `https://starwars-visualguide.com/assets/img/characters/${charNum}.jpg`
        figCaption.textContent = person.name

        figure.appendChild(figImage)
        figure.appendChild(figCaption)
        main.appendChild(figure)
    })
}

// 'https://swapi.co/api/people/8/'

function getLastNumber(url) {
    // return the second to last character from the url property of the film object
    let end = url.lastIndexOf('/')
    let start = end - 2
    if (url.charAt(start) === '/') {
        start++
    }
    return url.slice(start, end)
}
  
populateDOM(people)