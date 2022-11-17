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




function configurator() {
    // TBD
}

configurator()

function simplifiedMembers(memberArray) {
    return memberArray.map(member => {
        let middleName = member.middle_name ? ` ${member.middle_name} ` : ` ` // Ternary FTW
        return {
            id: member.id,
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
    removeChildren(membersDiv)
    membersArray.forEach(member => {
        const figure = document.createElement('figure')
        const figImg = document.createElement('img')
        const figCaption = document.createElement('figcaption')

        figImg.src = member.imgURL
        figImg.addEventListener('error', () => figImg.src = '../images/emperor-palpatine.jpeg')
        
        figCaption.textContent = member.name

        figure.appendChild(figImg)
        figure.appendChild(figCaption)
        membersDiv.appendChild(figure)
    })
}