(function(){ //IIFE
// var userName = prompt('what yo name?');
// var num1 = parseInt(prompt('pick a number'));
// var num2 = parseInt(prompt('pick another number'));

//function declaration
function funcDec(a, b, c){
  alert(a + (b + c));
}

// funcDec(userName, num1, num2);

// var carObject = {
//   make: 'honda',
//   model: 'cougar',
//   year: 2001,
// };
//
// function myModel(model){
//   alert(model);
// }
//
// myModel(carObject.model);
// //function excecutable
// var funcEx = function(){
//   alert(arguments[0]);
// }('waldo', 23);


var firstNames = ['Alfredo', 'Rosa', 'Vanessa', 'David', 'Gus'].sort(),
    cerealNames = ['Life', 'Honey Bunches of Oats', 'Rasin Brand', 'Puffs', 'Cookies Crisp'].sort();

console.log(firstNames, cerealNames);

var numNames = firstNames.length;
var numCereal = cerealNames.length;
var ranName = Math.ceil(Math.random() * numNames) - 1;
var ranCereal = Math.ceil(Math.random() * numCereal) - 1;

var funcSpy =function(){
  alert(arguments[0] + ' ' + arguments[1]);
}(firstNames[ranName], cerealNames[ranCereal]);

})();
