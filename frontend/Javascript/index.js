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

for (var i of arr) {
  console.log(i);
}
