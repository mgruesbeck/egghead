let hello = function() {
  console.log('Hello, welcome to JavaScript land.')
}

let goal = function() {
  console.log('You will have fun learning.')
}

let start = function(hello, goal) {
  hello()
  goal()
}

start(hello, goal)
