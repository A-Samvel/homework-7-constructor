function myApply(foo, context, args) {
  return foo.call(context, ...args);
}

function myBind(foo, context, ...boundArgs) {
  return function (...args) {
    return foo.call(context, [...boundArgs, ...args]);
  };
}

function sayHi(str) {
  return str + " " + this.name;
}

const obj = {
  name: "Samvel",
  age: 26,
};

console.log(myApply(sayHi, obj, ["hello"]));

const res = myBind(sayHi, obj, "hello");

console.log(res());
