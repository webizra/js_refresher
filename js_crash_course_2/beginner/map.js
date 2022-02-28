/* The map method transforms an array by applying a function to all of its
elements and building a new array from the returned values. The new array
will have the same length as the input array, but its content will have been
mapped to a new form by the function.
 */

let map = [1, 2, 3, 4, 5, 6].map((n)=>{
    return n * 2
})

console.log(map)