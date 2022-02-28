let savePass = document.getElementById('save-el')
let countEl = document.getElementById('count-el')
const Increment = document.querySelector('#increment-btn')
const saveBtn = document.querySelector('#save-btn')

let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
Increment.addEventListener('click', increment)


function save() {
    //create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countstr = count + " - "
    //render the variable in the savePass using innerText
    savePass.textContent += countstr
    countEl.textContent = 0
    count = 0
}
saveBtn.addEventListener('click', save)

console.log("let's count people on the subway")