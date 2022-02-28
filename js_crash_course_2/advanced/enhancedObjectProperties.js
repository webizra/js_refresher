/* ENHANCED OBJECT PROPERTIES */
const calculator = (name, myAge)=> {
    return {
        name: name,
        age: myAge,
        surplus: (n1 , n2)=>{
            return n1 + n2
        },
    }
}
const calc = calculator('casio', 28)
console.log(calc.name)
console.log(calc.surplus(20, 10))
console.log(calc.age)