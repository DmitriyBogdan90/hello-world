var el = this.document.getElementById("content");
var element2 = this.document.getElementById("person");
var User = /** @class */ (function () {
    function User(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
    return User;
}());
var tom = new User("Том", 29);
el.innerHTML = "Имя: " + tom.name + " возраст: " + tom.age;
var jerry = new User("Jerry", 101);
element2.innerHTML = "Name: " + jerry.name + " age: " + jerry.age;
