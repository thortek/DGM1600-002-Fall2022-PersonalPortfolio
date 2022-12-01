import { senators } from '../data/senators.js'
import { representatives } from '../data/representatives.js'
import { removeChildren } from '../utils/index.js'

const allCongressMembers = [...senators, ...representatives]

const allSimpleMembers = simplifiedMembers(allCongressMembers)

const membersDiv = document.querySelector('.membersDiv')
const seniorMemberSpan = document.querySelector('#seniorMember')
const vacationerSpan = document.querySelector('#vacationer')
const loyaltyList = document.querySelector('#loyaltyList')

const mostSeniorMember = allSimpleMembers.reduce((acc, member) => {
    return acc.seniority > member.seniority ? acc : member
})

const biggestVacationer = allSimpleMembers.reduce((acc, member) => acc.missedVotesPct > member.missedVotesPct ? acc : member)

const mostLoyalMembers = allSimpleMembers.filter(member => member.loyaltyPct === 100)
mostLoyalMembers.forEach(member => {
    let listItem = document.createElement('li')
    listItem.textContent = member.name
    loyaltyList.appendChild(listItem)
})

seniorMemberSpan.textContent = mostSeniorMember.name
vacationerSpan.textContent = biggestVacationer.name

/* Sorting and filtering configuration section */

const allInputs = document.querySelectorAll('input')
allInputs.forEach(input => input.addEventListener('change', () => configurator()))

function configurator() {
    let configuredArray = []
    const checkedInputs = document.querySelectorAll('input:checked')
    const checkedIds = []
    checkedInputs.forEach(checkedItem => checkedIds.push(checkedItem.id))
    //console.log(checkedIds)

    if (checkedIds.includes('senate')) configuredArray = [...configuredArray, ...simplifiedMembers(senators)]
    if (checkedIds.includes('reps')) configuredArray = [...configuredArray, ...simplifiedMembers(representatives)]

    if (checkedIds.includes('women')) configuredArray = [...configuredArray.filter(member => member.gender === 'F')]
    if (checkedIds.includes('men')) configuredArray = [...configuredArray.filter(member => member.gender === 'M')]

    if (checkedIds.includes('dems')) configuredArray = [...configuredArray.filter(member => member.party === 'D')]
    if (checkedIds.includes('repubs')) configuredArray = [...configuredArray.filter(member => member.party === 'R')]
    if (checkedIds.includes('independents')) configuredArray = [...configuredArray.filter(member => member.party === 'ID')]

    console.log(configuredArray)
    populateMembersDiv(configuredArray)
}

/* End configuration section */

function simplifiedMembers(memberArray) {
    return memberArray.map(member => {
        let middleName = member.middle_name ? ` ${member.middle_name} ` : ` ` // Ternary FTW
        return {
            id: member.id,
            birthDate: member.date_of_birth,
            name: `${member.first_name}${middleName}${member.last_name}`,
            gender: member.gender,
            party: member.party,
            imgURL: `https://www.govtrack.us/static/legislator-photos/${member.govtrack_id}-200px.jpeg`,
            seniority: +member.seniority,
            missedVotesPct: member.missed_votes_pct,
            loyaltyPct: member.votes_with_party_pct
        }
    })
}

function populateMembersDiv(membersArray) {
    if (membersArray.length === 0) {
        // TODO: use that Bulma modal to indicate no results found
    }
    removeChildren(membersDiv)
    membersArray.forEach(member => {
        const scene = document.createElement('div')
        scene.className = 'scene'
        const card = document.createElement('div')
        card.className = 'card'
        card.addEventListener('click', () => {
            card.classList.toggle('is-flipped')
        })

        const cardFront = document.createElement('div')
        if (member.party === 'D') cardFront.className = 'card__face card__face--front democrat'
        if (member.party === 'R') cardFront.className = 'card__face card__face--front republican'
        if (member.party === 'ID') cardFront.className = 'card__face card__face--front independent'

        const figure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = member.imgURL
        figImg.addEventListener('error', () => figImg.src = '../images/emperor-palpatine.jpeg')
        
        figCaption.textContent = member.name

        figure.appendChild(figImg)
        figure.appendChild(figCaption)
        cardFront.appendChild(figure)
        card.appendChild(cardFront)
        card.appendChild(populateCardBack(member))
        scene.appendChild(card)
        membersDiv.appendChild(scene)
    })
}

function populateCardBack(member) {
    const cardBack = document.createElement('div')
    cardBack.className = 'card__face card__face--back'
    const birthDate = document.createElement('h4')
    birthDate.textContent = member.birthDate

    cardBack.appendChild(birthDate)
    return cardBack
}

//populateMembersDiv(simplifiedMembers(allCongressMembers))