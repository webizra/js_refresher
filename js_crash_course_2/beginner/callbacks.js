/* basically, a callback is a function that get executed
inside of another function */

function callbackExample(name, callback){
    console.log(callback(name))
}
callbackExample("tochi Felix", (realName)=> {
    return "hello " + realName
})