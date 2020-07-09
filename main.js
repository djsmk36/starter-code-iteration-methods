// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)
// Append the katas to this element:
const main = document.querySelector('main')
function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

//Kata0
const greenEyes1 = users.filter(user => user.eyeColor === "green")
printKata(0, greenEyes1)
//Kata1
const isActive1 = users.filter(user => user.isActive === true)
printKata(1, isActive1)

//Kata2
const email1 = users.map(user => user.email)
printKata(2, email1)

//Kata3
const company1 = users.some(user => user.company === 'OVATION')
printKata(3, company1)

//Kata4
const ageOver38 = users.find(user => user.age > 38)
printKata(4, ageOver38)
//Kata5
const activeOver38 = users
    .filter(user => user.isActive === true)
    .find(user => user.age > 38)
printKata(5, activeOver38)
//Kata6
const zencoBalance = users
    .filter(user => user.company === 'ZENCO')
    .map(user => user.balance)
printKata(6, zencoBalance)

//Kata7
const showFugiatAge = users
    .filter(user => user.tags.includes('fugiat'))
    .map(user => user.age)
printKata(7, showFugiatAge)