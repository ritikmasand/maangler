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

#### Objects
- A collection of data
- It has key-value pair
- Keys can anything, but it will always be in string data type.
- Key has to unique.


-------------------------------------------------------------------------------------------------------------------------

### Dom
- It stands for document object model.
- Documents refers to the html document loaded on the browser.
- Model refers to the connectivity of these two things.
- Dom is a model to connect html document with js object.
- This is introduced by the browser.

## Getting Reference of an element

1. getElementById()
- Get reference of an element using it's identifier (id)

2. GetElementsByClassName()
- This gets reference of an elements using class.
- This will return a colletion of all elements which matches the given class name.

3. GetElementsbyTagName()

- This also returns an HTML Collection.
- This will return all the elements which matches the tag name.

4. GetElementsByName()
- This will return a collection of all elements which matches the name attribute.
- This is commonly used for input tags.
- This returns a NodeList.



### document.createElememt()
- This is used to create a new element in the memory
- Your new would be created in dyanmmically , using Js in your runtime.
- This is not yet added to the dom tree.

### <element.appendchild()>
- This is used to append/add a child to whichever element you want to.
- Parent_element.appendchild(child_element)


### element.style
- This is used to give style (css) to any element
- This gives inline styling, which means this will be added in the same line.


## Event Handlers
- Event handlers are used to handle and event

### Event
- Anything that we do on a website is an event.
- From a simple scroll on a webpage, to doing something like drag and drop, or a click.
- There are 100s of different events.

### Handler
- This is a function/logic which we use to handle if we want any custom implementation on that event
- When that event happens, it triggers the event handler.


### Click
- Thid is an event which triggers when the user clicks on anything.
- This is a very common event.
- This is a left click.
