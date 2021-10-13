function Animal(name){
    this.name = name;
}

Animal.prototype.talk = function(){
    console.log("meow meow");
}

const myCat = new Animal("Cat");
console.log(myCat);
myCat.talk();
console.log(myCat.name);