class SmartDevice {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    eatingCharge() {
        console.log("eating electron ........");
    }
}

class Phone extends SmartDevice {
    constructor(name, price, isWifi, origin) {
        super(name, price)
        this.isWifi = isWifi;
        this.origin = origin;
    }
}

class Tab extends SmartDevice {
    constructor(name, price, model){
        super(name, price);
        this.model = model;

    }
}

const sm1 = new SmartDevice("iPhone", 30000);
console.log(sm1);

const phone1 = new Phone("iPhone", 30000, "yes", "USA");
console.log(phone1);

const tab1 = new Tab("iPad", 20000, "iPad mini 2");

    console.log(tab1.eatingCharge());