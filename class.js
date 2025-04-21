//***************CLASSES AND OBJECTS************ */

//Classes:- Classes are a template for creating objects. They encapsulate data with code to work on that data.
// Constructor:- The constructor method is a special method for creating and initializing an object created within a class. It is called automatically when a new object is created.

// class ClassName {
//     constructor(prop1, prop2) {
//         this.prop1 = prop1;
//         this.prop2 = prop2;
//     }
// }

// let obj = new ClassName("arg1", "arg2");

// console.log(obj.prop1);  // Output: arg1
// console.log(obj.prop2);  // Output: arg2



// class Dog {
//     constructor(dogName,weight,color,breed){
//         this.dogName=dogName;
//         this.weight=weight;
//         this.color=color;
//         this.breed=breed;
//     }
// }

// let dog = new Dog("javascript",2.4,"brown","chihuahua");

// console.log(dog.dogName + " is a " + dog.breed + " and weighs " + dog.weight + "kg.");



//***********************CONSTRUCTORS***************** */



// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// }
// let p=new Person("John","Doe"); 
// console.log("Hi",p.firstName);




// class Person{
//     constructor(firstName,lastName="doe"){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
// let p=new Person("John","Doe"); 
// console.log("Hi",p.firstName);
// }



//*******************METHODS********************* */
//when defining these methods we dont use the function keyword we start directly with the name 

// class Person{
//     constructor(firstName,lastName){
//         this.firstName=firstName;
//         this.lastName=lastName;
//     }
//     greet(){
//         console.log("hii there i am ", this.firstName);
//     }
// }

// let p = new Person("maaike", "van putten");
// p.greet();



// class Person {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     greet() {
//         console.log("Hi there, I am", this.firstName);
//     }

//     compliment(name, object) {
//         return "That's a wonderful " + object + ", " + name + "!";
//     }
// }

// // Create an instance of Person outside the class
// let p = new Person("Maaike", "van Putten");
// p.greet();

// let complimentMsg = p.compliment("Harry", "hat");
// console.log(complimentMsg);


//***********************PRoperties *******************/

// class Car {

//     #brand;
//     #model;

//     constructor(brand, model) {
//         this.#brand = brand;
//         this.#model = model;
//     }

//     startEngine() {
//         console.log("The engine of", this.#brand, this.#model, "is now running.");
//     }

//     #secretMechanism() {
//         console.log("Secret engine mechanism is engaged!");
//     }

//     activateSecretMechanism() {
//         this.#secretMechanism();
//     }
// }

// const myCar = new Car("Tesla", "Model S");
// myCar.startEngine();  
// myCar.activateSecretMechanism(); 


//***********************************GETTERS AND SETTERS****************8 */

// class Person {
//     #firstName;
//     #lastName;

//     constructor(firstName, lastName) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//     }

//     get firstName() {
//         return this.#firstName;
//     }

//     set firstName(name) {
//         if (name.length > 0) {
//             this.#firstName = name;
//         } else {
//             console.log("First name cannot be empty!");
//         }
//     }

//     get lastName() {
//         return this.#lastName;
//     }

//     set lastName(name) {
//         if (name.length > 0) {
//             this.#lastName = name;
//         } else {
//             console.log("Last name cannot be empty!");
//         }
//     }

//     greet() {
//         console.log(`Hi there, I am ${this.#firstName} ${this.#lastName}`);
//     }

//     compliment(name, object) {
//         return `That's a wonderful ${object}, ${name}!`;
//     }
// }

// let person = new Person("Maaike", "van Putten");
// person.greet();
// console.log(person.firstName);
// console.log(person.lastName);

// person.firstName = "Harry";
// person.lastName = "Potter";
// person.greet();

// person.firstName = "";
// let complimentMsg = person.compliment("Harry", "hat");
// console.log(complimentMsg);


//*******************************INHERITANCE********************** *

//Inheritance is a way to create a new class that is based on an existing class. The new class inherits the properties and methods of the existing class, allowing you to reuse code and create a hierarchy of classes. Inheritance is achieved using the extends keyword.

// class Vehicle {
//     constructor(color, currentSpeed, maxSpeed) {
//         this.color = color;
//         this.currentSpeed = currentSpeed;
//         this.maxSpeed = maxSpeed;
//     }

//     move() {
//         console.log("Moving at", this.currentSpeed, "km/h");
//     }

//     accelerate(amount) {
//         this.currentSpeed += amount;
//         if (this.currentSpeed > this.maxSpeed) {
//             this.currentSpeed = this.maxSpeed;
//         }
//     }
// }

// class Motorcycle extends Vehicle {
//     constructor(color, currentSpeed, maxSpeed, fuelType) {
//         super(color, currentSpeed, maxSpeed);
//         this.fuelType = fuelType;
//     }

//     doWheelie() {
//         console.log("Popping a wheelie!");
//     }
// }

// let bike = new Motorcycle("Red", 0, 250, "Gasoline");
// bike.move();               
// bike.accelerate(50);       
// bike.move();              
// bike.doWheelie();        
// console.log(bike.color);   
// console.log(bike.fuelType);

//with the extends keyword we specify that a certain class is the child of another class
//the super word in the constructor is calling the constructor from the parent


//*******************************PROTOTYPES**************** */





















