function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.odometer = 0;
}

Car.prototype.fill = function (gallons) {
  this.tank += gallons;
};

Car.prototype.drive = function (miles) {
  let maxMiles = this.tank * this.milesPerGallon;
  if (miles > maxMiles) {
    this.odometer += maxMiles;
    this.tank -= maxMiles / this.milesPerGallon;
    return `I ran out of fuel at ${this.odometer} miles!`;
  } else {
    this.odometer += miles;
    this.tank -= miles / this.milesPerGallon;
  }
};

const honda = new Car("Honda Odyssey", 2.5);

honda.fill(120);
honda.drive(150);
honda.fill(120);
honda.drive(200);
console.log(honda);
