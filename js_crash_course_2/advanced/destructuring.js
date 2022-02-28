// ARRAY DESTRUCTURING
// const names = ["tochi", "solz", "Nelly", "moses", "nelo"]
/* const tochi = names [0];
const solz = names [1];
const Nelly = names [2];
const moses = names [3];
const nelo = names [4]; */

// better way to do it with destructuring
// we can also use the spread operator to complete the remaining array values
/* const [tochi, solz, nelo, ...remainingNames] = names

console.log(`${tochi} ${solz} ${nelo}`)
console.log(remainingNames.length) */

// OBJECT DESTRUCTURING
const getUser = ()=> {
    return {
        name: "tochi",
        surname: "felix",
        gender: "male",
        age: "28",
        address: {
            state: "FCT",
            city: "Abuja",
            postalCode: 901008
        },
    }
}
const user = getUser()

const {name, surname, gender, address: {state}} = user
console.log(name)
console.log(surname)
console.log(gender)
console.log(state)