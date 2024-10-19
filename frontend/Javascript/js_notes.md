### Ways to add js in html file:

1. External: In this the js file is seperately written and then linked in html code.
2. Internal: In this the js code is written in the html file itself.
3. Inline: In this method, the code is written in line with the tags itself.

- For example:

```
    <!-- <script>
      alert("Welcome to javascript");
    </script> -->
    <!-- <button onclick="alert('Welcome to javascript')">Click Me</button> -->
    <!-- <script src="index.js"></script> -->
```

### Variables

- Variables are like containers which store data
  for example:

```
var name = "ritik";

console.log(name); // This is used to print something is Js.
```

### block of code

- Instructions/code written inside a curly bracket.

for example:

```
{
  var name = "Prachi";
  console.log(name);
  // block scope
}
```

### Loops


### Functions

- set of instructions that we define once but we can call it multiple times.
- Series of steps
- Block of code

### Types of functions
1. Named Functions
- These are the functions that have a name.
```
function add2numbers(a,b){
console.log(a+b);
} // function delaration

function add3numbers(c,d,f){
  console.log(c+d+f);
  
}
```
2. Arrow Functions
- These are the functions that are defined using arrow operator.
- In this function we are not required to use the `<function>`, instead we use an arrow

3. Callback function
- It is a function that we send as an argument to another function.
```
var add2numbers = () => {
  var a = 10;
  var b = 20;
  console.log(a + b);
};
var demo = (ritik) => { // callback function
  console.log("I am a callback function");
  ritik();
};
demo(add2numbers);
```

4. High Order Function
- A function that takes another function as an argument.
```
var add2numbers = () => {
  var a = 10;
  var b = 20;
  console.log(a + b);
};

var demo = (ritik) => { // callback function
  console.log("I am a callback function");
  ritik();
};

demo(add2numbers);
```

5. First class function
- Any function that is assigned to a variable is called as a first class function.