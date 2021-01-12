const fetch = require('node-fetch');

// Exemple 1

let todoIds = [1, 2, 3]

console.log('fetching todos from jsonplaceholder');

Promise.all(
  todoIds.map( id => {
    return fetch('https://jsonplaceholder.typicode.com/todos/'+id).then(
      response => response.json()
    )
  })
).finally(() => {
  console.log('\n\nTodos are ready: ')
}).then((todos) => {
  todos.map( todo => {
    console.log(todo)
  })
})

// Exemple 2 

const todo = new Promise((resolve, reject) => {
  const randomId = Math.floor(Math.random() * 100)
  fetch('https://jsonplaceholder.typicode.com/todos/'+randomId).then(
      response => resolve(response.json())
  ).catch( error => {
    reject(error)
  })
})

todo.finally(() => {
  console.log('\n\nRandom todo is ready...')
}).then((value) => {
  console.log("Random todo: ")
  console.log(value);
}).catch((err) => {
  console.log(err)
})