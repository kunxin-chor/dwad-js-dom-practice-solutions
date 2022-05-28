// PLACE YOUR CODE HERE

// -- Q1 -----------------------------------------------------
// step 1: select the element
// if there are multiple matches for document.querySelector
// only the first one is returned from the function
let h1Element = document.querySelector('h1');
// step 2: modify the element (i.e manipulate the element)
h1Element.innerHTML = "Hello world!"


// -- Q2 ---------------------------------------------------
let importantElement = document.querySelector('#important');
importantElement.style.backgroundColor = "red";

// -- Q3 ----------------------------------------------------
// select and modify in the same statement
// `li.todo` -> the`<li class='todo'>` element
document.querySelector("li.todo").style.fontSize = '16px';
document.querySelector('li.todo').style.fontFamily = 'Verdana';

// let todoElement = document.querySelector("li.todo");
// todoElement.style.fontSize = '16px';
// todoElement.style.fontFamily = 'Verdana'


// LEAVE THE BELOW ALONE! DON'T TOUCH
try {
   module.exports = exports = {header, important, todo};
} catch (e) {}