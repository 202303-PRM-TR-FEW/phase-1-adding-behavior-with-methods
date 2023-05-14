// Your code here
class CAt {
    constructor(name, sex){
        this.name = name,
        this.sex = sex
    }
    get speak (){
        return `${this.name} says meow!`
    }
}
class Dog {
    constructor(name,sex){
        this.name = name,
        this.sex = sex
    }
    get speak(){
        return  `${this.name} says woof!`
    }
}
class Bird {
    constructor(name,sex){
        this.name = name,
        this.sex = sex
    }
    get speak(){
        if(this.sex === 'male'){
            return `it's me! ${this.name}, the parrot`
        }else{
            return  `${this.name} says squawk!`
        }
    }
}
const rose = new CAt('rose','female')
const rory = new Bird('rory', 'male')
const flappy = new Bird('flappy', 'female')
console.log(rose.speak)
console.log(rory.speak)
console.log(flappy.speak)