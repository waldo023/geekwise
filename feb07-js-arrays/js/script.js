var students = ['Osvaldo', 'Alfredo', 'Rosa', 'Micaela', 'Rigo', 'Leo', 'Matt', 'David', 'Haley', 'Gus', 'Marisa', 'Eric', 'Kevin', 'Monty', 'Cobi', 'Josh'];

function randomStudent(){
  var numStudents = students.length,
      ranNum = Math.ceil( Math.random() * numStudents) - 1;
      alert(students[ranNum]);
}
randomStudent();
