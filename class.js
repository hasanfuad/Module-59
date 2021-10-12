class Phone {
    constructor(brand, price, model, storages) {
        this.brand = brand;
        this.price = price;
        this.model = model;
        this.storages = storages;
    }
}

const phone1 = new Phone("iPhone", 30000, "iPhone8", 64);
console.log(phone1);