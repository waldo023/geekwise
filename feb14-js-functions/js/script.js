var btn1 = document.getElementById('btn1'),
    btn2 = document.getElementById('btn2'),
    div = document.getElementById('div');

btn1.addEventListener( 'click',  function(){
 firstName = prompt('what is your first name');
 if(isNaN(firstName)){
   btn2.removeAttribute("disabled");
   btn1.setAttribute("disabled", true);
 }else{
   alert('please type your name');
 }

});

btn2.addEventListener( 'click', function(){
   var lastName = prompt('what is your last name');
  if(isNaN(lastName)){
    btn1.removeAttribute("disabled");
    btn2.setAttribute("disabled", true);
    div.textContent = firstName + ' ' + lastName;
  }else{
    alert('please type your name');
  }

});


// var getName = function(){
//   return prompt('what is your name').trim();
// };
// function properCase(){
//   var username = getName();
//   var properName = username.charAt(0).toUpperCase() + username.substr(1).toLowerCase();
//   return properName;
// }
// function alertName(){
//   alert(properCase());
// }
// alertName();
//
// function a(){
//   var username = prompt('what is your name?').trim();
//   alert(username.charAt(0).toUpperCase() + username.substr(1).toLowerCase());
// }

// a();
