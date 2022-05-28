// PLACE YOUR CODE HERE
let emphasisElements = document.querySelectorAll('.emphasis');
for (let e of emphasisElements) {
    e.style.fontFamily = "Verdana"
}

let finishedElements = document.querySelectorAll('li.finished');
for (let f of finishedElements) {
    f.style.textDecoration = "line-through"
}

// let lowTodos = document.querySelectorAll('ul#low-priority .todo');
// for (let l of lowTodos) {
//     l.style.backgroundColor = 'blue'
// }

let lowPriorityUl = document.querySelector('#low-priority');
let lowTodos = lowPriorityUl.querySelectorAll('.todo');
for (let l of lowTodos) {
    l.style.backgroundColor = 'blue';
}

document.querySelectorAll('.alert').forEach(function(element){
    element.style.color = 'red';
})