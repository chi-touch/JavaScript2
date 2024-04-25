class Person{
    constructor(name,age,size){
        // to make the instance variable private you add (__) b4 the this.name i.e(this.__name) and it cannot be access outside the class
        // to declare a method  static you use the key word static by adding static before a function. to use it outside the class u use the (.)  i.e the class name (.) the function name e.g Person.setName
        this.name = name;
        this.age = age;
        this.size = size
    }

    static setName(newName){
        this.name = newName
    }

    getName(){
        return this.name
    }

    setAge(newAge){
        this.age = newAge
    }
    getAge(){
        return this.age 
    }

    setSize(newSize){
        this.size = newSize
    }

    getSize(){
        return this.size
    }
}