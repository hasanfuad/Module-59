const person = {
    name: 'John',
    age: 34,
    color: 'white',
    walk: function(a,b){
        return a+b;
    }
}

const personName = person.name;
const personActivity = person.walk(2,3);
console.log(personName,personActivity);