/* Each binding has a scope, which is the part of the program in which the binding
is visible. For bindings defined outside of any function or block, the scope is
the whole program—you can refer to such bindings wherever you want. These
are called global.
But bindings created for function parameters or declared inside a function
can be referenced only in that function, so they are known as local bindings. */

let x = 10
if(true){
    let y = 20
    var z = 30
    console.log(x + y + z)
    // ans = 60
}
// y is not visible here
console.log(x + z)
ans = 40

