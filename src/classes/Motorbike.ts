// Importing Vehicle and Wheel classes
import Vehicle from './Vehicle.js';
import Wheel from './Wheel.js';

// TODO: The Motorbike class should extend the Vehicle class
class Motorbike extends Vehicle {
  // TODO: Declare properties of the Motorbike class
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];

  // TODO: Create a constructor that accepts the properties of the Motorbike class
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[] = []
  ) {
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    super();
    // TODO: The constructor should initialize the properties of the Motorbike class
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;

    // TODO: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
    this.wheels = wheels.length === 2 ? wheels : [new Wheel(), new Wheel()];
  }

  // TODO: Implement the wheelie method
  wheelie() {
    console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
  }
  // TODO: Override the printDetails method from the Vehicle class
  override printDetails(): void {
    // TODO: The method should call the printDetails method of the parent class
    super.printDetails();
    // TODO: The method should log the details of the Motorbike
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
    console.log(`VIN: ${this.vin}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight} kg`);
    console.log(`Top Speed: ${this.topSpeed} km/h`);
    console.log(`Color: ${this.color}`);
    console.log(`Wheels: ${this.wheels.map((wheel, index) => `Wheel ${index + 1}: ${wheel.toString()}`).join(', ')}`);
  }
}

//   // TODO: Add methods from the Vehicle class context
//   // Method to start the motorbike
//   start(): void {
//     super.start();
//   }

//   // Method to accelerate the motorbike
//   accelerate(change: number): void {
//     super.accelerate(change);
//   }

//   // Method to decelerate the motorbike
//   decelerate(change: number): void {
//     super.decelerate(change);
//   }

//   // Method to stop the motorbike
//   stop(): void {
//     super.stop();
//   }

//   // Method to turn the motorbike
//   turn(direction: string): void {
//     super.turn(direction);
//   }

//   // Method to reverse the motorbike
//   reverse(): void {
//     super.reverse();
//   }
// }

// TODO: Export the Motorbike class as the default export
export default Motorbike;