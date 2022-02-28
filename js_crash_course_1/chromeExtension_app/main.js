// to comment js code Shift + Alt A

/* const { render } = require("express/lib/response")

let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", ()=>{
    chrome.tabs.query({active: true, currentWindow: true})
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify)
        render(myLeads)
})

function render(leads) {
    let listItems = ""
    for (let i=0; i<leads.length; i++) {
        listItems += `
            <li>
            <a target = '_blank' href= '${leads[i]}'>
                ${leads[i]}
            </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}

function deleteButton () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
}
deleteBtn.addEventListener('dblclick', deleteButton)

function inputButton () {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myleads", JSON.stringify(myLeads))
    render(myLeads)
}
inputBtn.addEventListener("click", inputButton) */



