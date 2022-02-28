// A class is simply a blueprint in which we can define properties and behaviors
// the construtor is simply a method that get invoked
// everytime we create an instance or object of this class (animal)
// sidenote: constructors only get invoked once
class Person {
    constructor(name, age){
        console.log(`${name} is a person and was created and he is ${age} years old`)
        this.name = name
        this.age = age
    }
    eat(){
        console.log(`${this.name} is eating`)
    }
    sleep(){
        console.log(`${this.name} is sleeping`)
    }
    myAge(){
        console.log(`${this.name} is ${this.age} year old`)
    }
}

const tochukwu = new Person("Tochukwu", 28)
tochukwu.eat()
tochukwu.sleep()
tochukwu.myAge()

const emeka = new Person("Emeka", 28)
emeka.eat()
emeka.sleep()
emeka.myAge()

// CLASS INHERITANCE
class Dog extends Person {
    constructor(name, age, breed) {
        super(name, age)
        this.breed = breed
    }
    logBreed() {
        console.log(`${this.name} is a ${this.breed}`)
    }
    logAgeFromDog() {
        super.myAge()
    }
    // STATIC METHODS
    /* the static keyword allows us to create methods or properties that
    belongs to the actual class and not to each individual object
    that we instantiate
    sidenote: they are good when you don't want to expose a method 
    and you don't want to necessarily want to create an instance of the actual class */
    static myStaticMethod(){
        console.log("i am a staic method inside of a dog class")
    }
}


const myDog = new Dog("Bully", 8,"bulldog")
myDog.logBreed() 
myDog.logAgeFromDog()
Dog.myStaticMethod()

