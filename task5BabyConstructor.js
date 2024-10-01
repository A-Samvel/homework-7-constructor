function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.constructor = Baby;

Person.prototype.play = function() {
    return `Playing with ${this.favoriteToy}`;
};

const allan = new Baby ("Allan",5,'PS5')

console.log(allan.play())