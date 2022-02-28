/* the spread operator allows us to expand an expression where arguments, elements, variables are expected,
we could use it to cocatenate multiple arrays, hold arguments
to functions in arrays or simply transform a string a dtring to an array
sidenote: the syntax for array is ...
*/

const arrayOne = ["tochi", "Felix", "emmanuel", "ugwu", "florence", "benedict"]
const arrayTwo = ["tochukwu", "Emeka", "emma", "ugwu", "florence", "benedict"]
const spreadArray = [...arrayOne, ...arrayTwo]
spreadArray.forEach((name)=>{
    console.log(name)
})

/* we could also spread through a string */
const name = "Oluchi"
const nameToArray = [...name]
nameToArray.forEach((letter)=>{
    console.log(letter)
})

/* we could also spread arguments in a function */
const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3
}
const numbers = [1, 5, 20]
const addition = addNumbers(...numbers)
console.log(addition)

/* OBJECTS AND SPREAD OPERATORS */
// sidenote: this is often use in react applications
const address = {
    city: "Abuja",
    country: "Nigeria",
    postcode: "901008"
}

const myName = {
    firstName: "Tochi",
    lastName: "Felix"
}

const person = {...address, ...myName}
console.log(JSON.stringify(person, null, 2))
