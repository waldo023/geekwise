//(function(){
// funcDec();

function funcDec(userMessage, userName){
  // alert('this is from the declaration');
  // console.log(userMessage, userName);
}
funcDec('hello', 'Bob')

// funcExp();

var myNum;

var funcExp = function(){
    myNum = 23;
    // alert('this is from the expression');
  //  funcDec();
}();

// funcExp();

function getFullName(a, b){
  return a + ' ' + b;
}

// console.log( getFullName('Osvaldo', 'Vallejo') );

function userName(){
  var name = prompt('What is your name?');
  var msg = 'hello ' + name;
  return msg;

}
function alertName(){
  alert(userName());
}
alertName();
//})();
