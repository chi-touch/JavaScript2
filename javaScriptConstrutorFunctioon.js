//Constructor function or Object function contains a blueprint to a type of object that has propertities and methods to generate objects.
function Person(name,age){

    this.name = name;
    this.age = age;

    this.sayName = function(){
        console.log(this.name);
    }
}

const PersonOne = new Person("Jumoke",13);
console.log(PersonOne.name);
console.log(PersonOne.age)

function PersonTwo(name){
    this.name = name;

    this.talkName = function(){
        console.log(this.name + "is" + this.age +"years old");
    }
}

let Pep = new PersonTwo("Chichi",1);

console.log(Pep.name)

 