let el = document.getElementById("content");

let element2 = document.getElementById('person');

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

let users: object[] = [
    {
        name: "Jerry",
        age: 101
    },
    {
        name: "Woodie",
        age: 202
    },
    {
        name: "Tommy",
        age: 303
    }
    ];

let arrayUsers: Array<string> = [];

let addedUser = (users) => {
    for (let i = 0 ; i < users.length; i++) {
        arrayUsers.push(
            `Name: ${users[i].name} Age: ${users[i].age}`
        )
    }
    return arrayUsers;
};

console.log(addedUser(users));


// element2.innerHTML = '123213';
// console.log(addedUser(users));
