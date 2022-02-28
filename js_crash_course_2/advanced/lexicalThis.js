const person = {
    name: "tochi",
    cars: ["ferrari", "lambo"],
    everything: function() {
        //console.log(`${this.name} has ${this.cars}`)
        this.cars.forEach((car)=>{
            console.log(`${this.name} has ${this.car}`)
        })
    }
}
person.everything()