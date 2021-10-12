class Animal {
    static animalName = "dog";
            location = "dhaka";
    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    static compare(animal1, animal2) {
        if(animal1.speed > animal2.speed){
            return(`${animal1.name} is faster than ${animal2.name}`);
        }
        return(`${animal2.name} is faster than ${animal1.name}`);
    }
}

const tiger = new Animal("Tiger", 120);
const deer = new Animal("Deer", 130); 

console.log(Animal.compare(tiger, deer));
