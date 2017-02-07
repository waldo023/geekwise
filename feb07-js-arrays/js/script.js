var students = ['Osvaldo', 'Alfredo', 'Rosa', 'Micaela', 'Rigo', 'Leo', 'Matt', 'David', 'Haley', 'Gus', 'Marisa', 'Eric', 'Kevin', 'Monty', 'Cobi', 'Josh'];
// function randomStudent(){
//   var numStudents = students.length,
//       ranNum = Math.ceil( Math.random() * numStudents) - 1;
//       alert(students[ranNum]);
// }
// randomStudent();


var fruits = ['banana', 'pomagranet', 'starfruit', 'blood orange', 'dragonfruit'];
// console.log(fruits);

//push adds to the end of an array
fruits.push('mango');
// console.log(fruits);

//pop removes from the end of the array
var lastFruit = fruits.pop();
// console.log(fruits);
// console.log(lastFruit);

// unshift adds to the front of an array
fruits.unshift('kiwi');
// console.log(fruits);

// shift removes from the front of an array
var firstFruit = fruits.shift();
// console.log(fruits);
// console.log(firstFruit);

//indexOf finds the index of an item in an array
var posFruit = fruits.indexOf('blood orange');
// console.log(posFruit);

//splice remove an item by index number
var remFruit = fruits.splice(3, 1);
// console.log(remFruit);
// console.log(fruits);

//slice copies an array
var fruitCopy = fruits.slice(0, 2);
// console.log(fruits);
// console.log(fruitCopy);

var schoolSubjects = ['AP Chem'];
console.log(schoolSubjects);

schoolSubjects.unshift('College Class','AP Calc');
console.log(schoolSubjects);

schoolSubjects.push('AP English', 'Geekwise');
console.log(schoolSubjects);

var slicedSubject = schoolSubjects.slice(3, 4);
console.log(schoolSubjects);
console.log(slicedSubject);

schoolSubjects.sort();
console.log(schoolSubjects);

schoolSubjects.reverse();
console.log(schoolSubjects);
