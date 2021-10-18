class Traveler{
    constructor(name){
        this._name = name,
        this._foodQtd = 1
        this._isHealthy = true
    }
    get name(){
        return this._name
    }
    set name(name){
        this._name = name
    }
    get foodQtd(){
        return this._foodQtd
    }
    set foodQtd(foodQtd){
        this._foodQtd = foodQtd
    }
    get isHealthy(){
        return this._isHealthy
    }
    set isHealthy(isHealthy){
        this._isHealthy = isHealthy
    }


    hunt(){
        this.foodQtd += 2
    }
    eat(){
        if(this.foodQtd > 0){
            this.foodQtd -= 1
            this.isHealthy = true
        }else{
            this.isHealthy = false
        }
    }
}


class Wagon{
    constructor(capacity){
        this._capacity = capacity
        this._passengers = []
    }
    get capacity(){
        return this._capacity
    }
    set capacity(capacity){
        this._capacity = capacity
    }
    get passengers(){
        return this._passengers
    }
    set capacity(passengers){
        this._passengers = passengers
    }
    getAvailableSeatCount(){
        if(this.passengers.length >= this.capacity){
            return this.passengers.length - this.capacity
        }else{
            return this.capacity - this.passengers.length 
        }      
    }
    join(newPassenger){
        if(this.passengers.length < this.capacity){
            this.passengers.push(newPassenger)
        }
    }
    shouldQuarantine(){
        for(let i = 0; i < this.passengers.length; i ++){
            if(this.passengers[i].isHealthy === false){
                return true
            }
        }
        return false
    }
    totalFood(){
        let totalFood = 0
        for(let i = 0; i < this.passengers.length; i ++){
            totalFood += this.passengers[i].foodQtd
        }
        return totalFood
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);