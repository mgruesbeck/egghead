var http = require('http');

var numbers = {
  one: 'one',
  two: 'two',
  three: 'three'
};

function start(callback2, callback3){
  console.log('starting countdown');
  console.log(numbers.one);
  callback2(callback3);
};

function two(callback3){
  console.log(numbers.two);
  console.log(http.get('http://www.google.com'));
  callback3();
};

function three(){
  console.log(numbers.three);
  console.log('countdown complete');
};

module.exports = {
  start: start, 
  two: two, 
  three: three
};
