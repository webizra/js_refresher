// example 1
const calculatePay = (annualSalary, bonus = 0)=>{
// sidenote: you have to set a default value for your second argument
//so it doesnt return a NAN output
   return annualSalary + bonus
}
// console.log(calculatePay(720000))

// example 2
const calculatePayment = (annualSalary, bonus = {
    teamBonus: 0,
    employeeBonus: 0,
})=>{
    // sidenote: you have to set a default value for your second argument
    //so it doesnt return a NAN output
       return annualSalary + bonus.teamBonus + bonus.employeeBonus
    }
    console.log(calculatePayment(720000, {teamBonus: 20000, employeeBonus: 3000}))

    