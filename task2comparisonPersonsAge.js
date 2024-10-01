function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.compareAge = function (obj = {}) {
  /*if(this.age < obj.age) return ${obj.name} is older than me.
      else if(this.age > obj.age) return ${obj.name} is younger than me.
      else if(this.age === obj.age) return ${obj.name} is the same age as me*/
  return this.age === obj.age
    ? `${obj.name} is the same age as me.`
    : this.age > obj.age
    ? `${obj.name} is younger than me.`
    : `${obj.name} is older than me.`;
};

const p1 = new Person("Samuel", 24);
const p2 = new Person("Joel", 36);
const p3 = new Person("Lily", 24);

console.log(p1.compareAge(p2));
console.log(p2.compareAge(p1));
console.log(p1.compareAge(p3));