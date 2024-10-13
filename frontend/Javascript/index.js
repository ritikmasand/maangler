// alert("Welcome to javascript");

var name = "ritik";
var age = 25;
var martial_status = false;

console.log(name);

var a = 10;
var c = 30;

var d = a + c;
console.log(d); // ans= 40
// console.log(age);
// console.log(martial_status);
// global scope
{
  var b = 20;
  var c = 30;
  var d = b + c;
  console.log(d); // ans =50

  var name = "Prachi";
  console.log(name);
  // block scope
}

console.log(d); // ans? H.w
