module.exports = class Car{
    constructor(color, convertible){
        this.color = color
        this.convertible = convertible
        this.speed = 0
    }

    accelerate(number){
        this.speed = this.speed + number
    }

    decelerate(number){
        this.speed = this.speed - number
    }
}