var inputs = document.querySelectorAll('input:not([type="submit"])');
var test = document.getElementsByTagName('form');
console.log(test);
// var firstName = document.querySelector('input[type="text"]:nth-of-type(1)');
// var lastName = document.querySelector('input[type="text"]:nth-of-type(2)');
// var email = document.querySelector('input[type="email"]');
var submit = document.querySelector('input[type="submit"]');
var user = [];

submit.addEventListener('click' , function(a){
  a.preventDefault();
  var formInputs = document.querySelector('form').elements;


  for(i = 0; i < formInputs.length; i++){
    // user.push(formInputs[i].value);
    // formInputs[i].value = '';

    if(
      formInputs[i].type === 'radio' && formInputs[i].checked ||
      formInputs[i].type !== 'radio' && formInputs[i].type !== 'checkbox'
    ){
      user.push(formInputs[i].value);
    }
    if(formInputs[i].type === 'checkbox' && formInputs[i].checked){
      user.push(true);
    }
    if(formInputs[i].value.trim() === ''){
      user.pop(formInputs[i].value);
    }
  }
  console.log(user);
  user = [];
  // for(i = 0; i < inputs.length; i++){
  //   user.pop(inputs[i].value);
  // }
});
