let el = document.getElementById("content");
let element2 = document.getElementById('person');
class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
let tom = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
let users = [
    {
        name: "Jerry",
        age: 101
    },
    {
        name: "Woodie",
        age: 202
    },
    {
        name: "Tom",
        age: 303
    }
];
let arrayUsers = [];
let addedUser = (users) => {
    for (let i = 0; i < users.length; i++) {
        arrayUsers.push(`Name: ${users[i].name} Age: ${users[i].age}`);
    }
    return arrayUsers;
};
console.log(addedUser(users));
//# sourceMappingURL=index.js.map