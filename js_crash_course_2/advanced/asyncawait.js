// async await
/* async function logName(name){
    console.log(name)
    const transformName = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(name.toUpperCase())
        }, 1000)
    })
    const result = await transformName
    // it returns a promise
    return result
}

logName("Antonio").then((res)=>{
    console.log("this is the name i wanted = " + res)
})
 */

const getRandomUsers = async (users)=>{
    try {
        const fetchRandomUsers = await fetch(`https://randomuser.me/api/?results=${users}`)
        const data = await fetchRandomUsers.json()
        data.results.forEach((user)=>{
            const {gender, email} = user
            console.log(`${gender} - ${email}`)
        })
        return data
    } catch(err){
        console.log(err)
    }
}

getRandomUsers(5)
