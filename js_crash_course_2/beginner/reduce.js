/* basically, the reduce function,  helps us to reduce all the values inside of an array into one value
 */

let reduce = [1, 2, 3, 4, 5, 6, 7, 8, 9].reduce((accumulator, current)=> {
    return accumulator + current
})
console.log(reduce)