const food = ["apple", "orange", "milk", "pasta", "tomato", "meat","egg"];

Object.freeze(food);

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.stomach = [];
}

Person.prototype.eat = function (someFood) {
  checkFood = someFood.toLowerCase();
  if (food.indexOf(checkFood) > -1 && this.stomach.length < 10)
    this.stomach.push(checkFood);
};

Person.prototype.poop = function () {
  this.stomach = [];
};

Person.prototype.toString = function () {
  return ` ${this.name},${this.age}`;
};

const user = new Person("Mary", 50);

console.log(user.toString())

user.eat('EGG')
console.log(user.stomach)
user.eat('glass')
console.log(user.stomach)
user.poop()
console.log(user.stomach)