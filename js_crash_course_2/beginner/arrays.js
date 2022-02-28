let names = ["tochi", "solz", "moses", "nelo"]
for (let n of names) {
    console.log(n)
}

names.forEach((n, index)=>{
    console.log(index + " - " + n)
})