function User(name, age) {
    this.name = name;
    this.age = age;
    this.human = true;
    this.hello = function() {
        console.log(`Hello, my name is ${this.name}. My age is ${this.age}`);
    }
}

const Artem = new User('Artem', 17);
Artem.hello();

function count(num) {
    return this * num;
}

const double = count.bind(2);
console.log(double(3))

