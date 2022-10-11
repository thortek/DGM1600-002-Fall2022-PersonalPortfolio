import { films } from '../data/films.js'


let filmTitles = document.querySelector('#filmTitles')

//filmTitles.textContent = 'some random text I am showing here'

for (let i = 0; i < films.length; i++) {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = films[i].title
    filmTitles.appendChild(newParagraph)
 }