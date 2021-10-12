
class Tiger {
    #speed = 20;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    running() {
        console.log(`I'm ${this.name} bengal tiger. I'm running at ${this.#speed} mph`);
    }
}


const tiger = new Tiger("Royal", 3);
    tiger.name = "Boyal";
    tiger.#speed = 30;
    console.log(tiger);
    console.log(tiger.running());