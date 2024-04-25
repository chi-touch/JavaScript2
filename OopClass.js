let animal ={
    type: "Unknown",
    sound: function(){
        console.log("The " + this.type + " makes a sound")
    }
}

let dog = Object.create(animal);
dog.type ="Dog";
dog.color = "brown";


let cat = animal;
cat.type = "cat"
console.log(cat)
console.log(animal);

dog.sound();
console.log(dog)


let goat = {};
Object.setPrototypeOf(goat,animal);
goat.type = "Goat";

console.log(goat);


let vehicle = {wheels: 4};//object assigned to variable nemed vehicle
let car = {
    seats :5,
    _proto_:vehicle,// _proto_property assigned to vehicle
    wheels :6,
}; // object assigned to variable nmed car

//print all objects and _proto_property for each variable

//console.log('vehicle:', vehicle,vehicle._proto_);
console.log('car:', car,car._proto_);
//console.log('car wheels:',car.wheels);
