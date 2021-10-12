class Animal {
    talk(){
        throw new Error("You must call talk method")
    }
}

class Cat extends Animal {
    talk(){
        console.log("Meow Meow");
    }
}

class Dog extends Animal {
    talking(){
        console.log("Bark Bark");
    }
}

const cat = new Cat();
    cat.talk();

const dog = new Dog();
    dog.talking();