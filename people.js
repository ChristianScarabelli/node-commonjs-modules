/* people.js
Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. 
La funzione dovrebbe restituire un oggetto con tre proprietà: firstName, lastName, hobbies. 
All’interno della tua funzione, usa le tue due funzioni precedenti per costruire l’oggetto.
*/
const createPerson = require('./names.js')
const createHobbies = require('./hobbies.js')

const createProfile = () => {
    const { firstName, lastName } = createPerson('Christian', 'Scarabelli')
    const { hobbies } = createHobbies('Nutrition', 'Gaming', 'Walking')

    return {
        firstName,
        lastName,
        hobbies
    }
}

const profile = createProfile()
console.log(profile)