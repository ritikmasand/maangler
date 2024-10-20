// // alert("Welcome to javascript");

// var name = "ritik";
// var age = 25;
// var martial_status = false;

// console.log(name);

// var a = 10;
// var c = 30;

// var d = a + c;
// console.log(d); // ans= 40
// // console.log(age);
// // console.log(martial_status);
// // global scope
// {
//   var b = 20;
//   var c = 30;
//   var d = b + c;
//   console.log(d); // ans =50

//   var name = "Prachi";
//   console.log(name);
//   // block scope
// }

// console.log(d); // ans? H.w

// var a = prompt("enter a number");

// console.log(a);

// var num = 27;
// if (num % 3 == 0 && num % 2 == 0) {
//   console.log("fizzbuzz");
// } else if (num % 3 == 0) {
//   console.log("buzz");
// } else if (num % 2 == 0) {
//   console.log("fizz");
// }

// For loop
// for (var i = 1; i <= 10; i = i + 1) {
//   console.log(i);
// }

// for (var i = 10; i >= 0; i = i - 1) {
//   console.log(i);
// }

// // while loop
// var i=1;
// while(i<=10){
//   console.log(i);
//   i++; i=i+1
// }

// var i=10;
// while(i>=0){
//   console.log(i);
//   i--; // i=i-1;
// }

var arr = [1, 2, 3, 4, 53, 6, 7, 8, 9, 10];

// for (var i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// console.log(arr);

// for (var i of arr) {
//   console.log(i);
// }

// Add 2 nums:

// var a=10;
// var b=20;
// var sum = a+b;

// console.log(sum);

// var d=100;
// var e=400;
// var sum1= d+e;

// console.log(sum1);

// function add2numbers(a,b){
// console.log(a+b);
// } // function delaration

// function add3numbers(c,d,f){
//   console.log(c+d+f);

// }

// add2numbers(40,50)
// add2numbers(100,199); // function invoking // function calling

// add3numbers(100,200,300);

// var helloworld = () => {
//   // arrow signies that it is an arrow function
//   console.log("Hello world");
// };

// helloworld();

// var add2numbers = () => {
//   var a = 10;
//   var b = 20;
//   console.log(a + b);
// };

// var demo = (ritik) => {
//   // callback function
//   console.log("I am a callback function");
//   ritik();
// };

// demo(add2numbers);

// function named demo is a high order function.
// function named addtwonumbers is a callback function.

var addition = (a, b) => {
  var sum = a + b;
  console.log(sum);
  // return sum;
};

// var result = addition(10, 20); // addition is a first class function.

// console.log(result);

// H.w: what is undefined?

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// add an element.

arr.push(11);

// delete an element

arr.pop();

// splice

// arr.splice(0, 3);

// slice (return an subarray)
// var arr1 = arr.slice(0, 5);
// console.log(arr.join(" "));

// console.log(arr.reverse());

var arr1 = [1, 2, 3, 4, 5];

// var cop_arr = arr1.map((elem, ind) => {
//   var sqr = elem * elem;
//   return sqr;
// }); // 1-1 mapping

// console.log(cop_arr);

// 1,2,3,4,5,6,7,8,9,10

// var cop_arr1 = arr.filter((elem, idx) => {
//   if (elem % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// });

console.log(cop_arr1);
