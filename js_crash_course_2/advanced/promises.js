/* promises are basically used for asynchronous programming 
as the name implies, they represent values which may be available now,
or later in the future, or never
*/
/* three states of promises
pending: initial state, not fulfilled or rejected
fulfilled: meaning that the operation completed successfully
rejected: meaning that the operation failed
*/

// CREATING PROMISES
/* const promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        resolve("data has been received from server");
    }, 3000)

    setTimeout(() =>{
        reject("an error occured");
    }, 5000)
})

promise.then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
}) */

// PROMISES WITH THE FETCH API
const getRandomUsers = (users) => {
    const fetchRandomUsers = fetch(`https://randomuser.me/api/?results=${users}`)
    fetchRandomUsers.then((data)=>{
        data.json().then((randomUsers)=>{
            console.log(JSON.stringify(randomUsers.results.length))
            randomUsers.results.forEach((user) =>{
                const {gender, email} = user;
                log(`${gender} - ${email}`)
            })
        })
    })
}
getRandomUsers(10)