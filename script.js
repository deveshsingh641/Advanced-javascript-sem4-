// function sayHello(){
//     let you = prompt("What is your name ?");
//     console.log("hello",you+"!");
// }
// sayHello()

// let varContainingFunction = function(){
//     let varInFunction = " i am in a function";
//     console.log("hi there", varInFunction);
// };

// function tester(para1,para2){
//     return para1 + " " + para2;
// }
// const arg1="argument1;"
// const arg2="argument2;"
// tester(arg1,arg2);

// function addTwoNumbers(x, y) {
//     console.log(x + y);
// }
// addTwoNumbers(5, 10);

// function addTwoNumbers(x=2, y=3) {
//     console.log(x + y);
// }
// addTwoNumbers();
// addTwoNumbers(6, 6);
// addTwoNumbers(10);

// function addTwoNumbers(x=2,y=3) {
//     console.log(x + y);
// }
// addTwoNumbers(1,2,3,4);

// let doingArrowStuff = x => console.log(x);  // arrow functions are useful when u want to write an implementation on the spot

// doingArrowStuff("Hello, VS Code!");

// const arr =["devesh", "btech","information technology"];
// arr.forEach(e => console.log(e));

// SPREAD OPERATION*******************

// let spread =["so","much","fun"];
// let message=["javascript", "is",...spread,"and","very","powerful"];
// console.log(message)

// function addTwoNumbers(x,y){
//     console.log(x+y);
// }
// let arr=[5,9];
// addTwoNumbers(...arr);

// function addFourNumbers(x, y, z, a) {
//   console.log(x + y + z + a);
// }
// let arr = [5, 9];
// let arr2 = [6, 7];
// addFourNumbers(...arr, ...arr);



//REST OPERATION


// function someFunction(param1,param2){
//     console.log(param1,param2);
// }
// someFunction("hii","there!","how are you");



// function someFunction(param1,...param2){
//     console.log(param1,param2);
// }
// someFunction("hii","there!","how are you");



//RETURNING FUNCTION VALUES***********************************

// let result = addTwoNumbers(4,5);
// console.log(result);


// function addTwoNumbers(x,y){
//     return x+y;
// }

// function addTwoNumbers(x,y){
//     return x+y;
// }
// let resultsArr=[];

// for (let i=0;i<10;i++){
//     let result =addTwoNumbers(i,2*i);
//     resultsArr.push(result);
// }
// console.log(resultsArr);


// let result=addTwoNumbers(12,15);
// console.log(result);


// let addTwoNumbers =(x,y )=> {
//     console.log("Adding...");
//     return x+y;
// }
// let result=addTwoNumbers(12,15);
// console.log(result);


// VARIABLE SCOPES IN FUNCTION *******************************


// function testAvailability(x){
//     console.log("Available here:",x);
// }

// testAvailability("hii");
// console.log("not available here", x);


// function testAvailability(){
//     let y="local variable!"
//     console.log("Available here:",y);
// }

// testAvailability("hii");
// console.log("not available here", y);


// function testAvailability(){
//     let y="i will return"
//     console.log("Available here:",y);
//     return y;
// }


// let z= testAvailability();
// console.log("outside the function", z);
// console.log("not available here", z);


// function doingStuff(){
//     if(true){
//         var x="local";

//     }
//     console.log(x);
// }

// doingStuff();


// function doingStuff(){
//     if(true){
//         console.log(x);
//         var x="local";
//     }
// }
// doingStuff();


//CONSTANT SCOPE*********************************

// function doingStuff(){
//     if(true){
//         const x="local";
//     }
//     console.log(x);
// }
// doingStuff();


//GLOBAL VARIABLES*********************************


// let globalVar ="Accessible evrywhere!";
// console.log("outside function:",globalVar);

// function creatingNewScope(x)
// {
//     console.log("access to global vars in side function", globalVar)
// }

// creatingNewScope("some parameter");
// console.log("still available:",globalVar);  //agar mujhe global variable ko hide krna hai toh hume ek naya variable create krna hoga inside that //


// let x ="global";
// function doingStuff(){
//     let x="local";
//     console.log(x);

// }
// doingStuff();
// console.log(x);


// let x ="global";
// function doingStuff(){
//     console.log(x);
// }
// doingStuff("param");


// function confuseReader(){
//     x="guess my scope...";
//     console.log("inside the function:",x);
// }

// confuseReader();
// console.log("outside of function:",x);




