//var externalJavascript = "wha the actual heck";

var camelCase;
var not_camel_case;
var $dollarCase;

/*dont do
var 1stVariable;
var Casecamel; For constructor objects olny
var SUPERUPPERCASE;
*/

/*
JAVASCRIPT OBJECTS
    number
    string
    boolean
    float
    array
    object
*/
var myNumberObject = 3;
var myNewNumberObject = myNumberObject.toString();
var myStringObject = "this is a string object";
var myBooleanTrue = false; //0
var myBooleanFalse = true; //1
var myFloatObject = 3.1;
var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];
var myObjectObject = {
make: 'jeep',
model: 'wrangler',
color: 'black',
year: 2014,
package: function(){
  alert(this.make);
}
};
// var myNonWorkingStringObject = 'this wont work";
console.log(myNumberObject);
console.log(myNewNumberObject);
console.log(myStringObject);
console.log(myArrayObject[3]);
console.log(myObjectObject);

//JAVASCRIPT MATH
var a = 5;
var b = 10;
var c = (a + b);
var d = a - b;
var e = a * b;
var f = a / b;
var g = b % a;
console.log(c);
console.log(d);
console.log(e);
console.log(f, g);
