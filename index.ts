

class User{
    name : string;
    age : number;
    constructor(_name:string, _age: number){

        this.name = _name;
        this.age = _age;
    }
}
let tom : User = new User("Том", 29);
el.innerHTML="Имя: " + tom.name + " возраст: " + tom.age;


