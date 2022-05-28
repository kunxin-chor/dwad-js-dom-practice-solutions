// PLACE YOUR CODE HERE
// use .querySelectorAll() if we want ALL the possible matches
let todos = document.querySelectorAll("li.todo");
for (let t of todos) {
    t.style.backgroundColor = 'orange';
}

