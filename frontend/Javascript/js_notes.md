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

### Array Methods

1. Adding an element

- Keyword - .push

2. Remove an element

- Keyword - .pop

3. Splice

- First argument is the starting index
- Second argument is the counter to delete.

4. slice

- First argument is the starting index
- Second argument is the ending index.
- It will return a new array, will not make changes in the original array
  (1,4) // 1 is inclusive , 4 is exclsive

5. Join

- This helps to join arrays into string
- We pass the glue as an argument. This is called as a seperator

6. length

- This returns us the length of an array

7. Reverse

- This will reverse the array

8. Map
- This can create a copy with the changes that we write in a callback function. basically creating a 1-1 map with the source and the copy array.
- Used a lot in react

9. Filter
- This also tales a callback
- This will return a new array with the elements that are true in the callback function.
- If we get a false, it will just ignore that element.
- This will be used a lot in react.