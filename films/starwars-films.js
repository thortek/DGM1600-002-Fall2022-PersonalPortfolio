import { films } from '../data/films.js'

let filmTitles = document.querySelector('#filmTitles')

for (let i = 0; i < films.length; i++) {
  let figure = document.createElement('figure')
  let figImage = document.createElement('img')
  let figCaption = document.createElement('figcaption')

  let filmNum = getLastNumber(films[i].url)
  figImage.src = `https://starwars-visualguide.com/assets/img/films/${filmNum}.jpg`

  figCaption.textContent = films[i].title
  figure.appendChild(figImage)
  figure.appendChild(figCaption)
  filmTitles.appendChild(figure)

  console.log(films[i].url)
}

function getLastNumber(url) {
  // return the second to last character from the url property of the film object
  return url.slice(url.length - 2, url.length - 1)
}
