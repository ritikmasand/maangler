// - getElementByID

var para_elem = document.getElementById("shubham");

console.log(para_elem);

// GetElememtsbyClassName()

var elements = document.getElementsByClassName("shrey");

console.log(elements);

elements[1].innerText = "New Button";

// getElementsByTagName()

var List_item = document.getElementsByTagName("li");

console.log((List_item[1].innerText = "Vijaya"));

// GetElementsByName

var ip = document.getElementsByName("input1");

console.log(ip[0]);
