var login = document.getElementById('login');
var loginForm =
'<form>'+
'  <h1>Please Login</h1>'+
'  <label>'+
'    <span>Username</span>'+
'    <input type="text" placeholder="Username">'+
'  </label>'+
'  <label>'+
'    <span>Password</span>'+
'    <input type="password" placeholder="Password">'+
'  </label>'+
'  <label>'+
'    <span></span>'+
'    <input onclick="change()" type="submit" value="Login">'+
'  </label>'+
'</form>';

login.innerHTML = loginForm;
var span = document.querySelector('#login form label:last-of-type span');
var form = document.querySelector('#login form');


document.querySelector('input[type="submit"]').addEventListener('click', function(e){
  e.preventDefault();
  getFormVals();
});
console.log(form.elements);
function getFormVals(){
   var formInputs = [];
  for(var i = 0; i < form.length - 1; i++){
    formInputs.push(form.elements[i].value);
  }
  console.log(formInputs[1].length);
  console.log(dropCapInputs(formInputs));
}

function dropCapInputs(arr){
  if(Array.isArray(arr)){
    arr.forEach(function(e, i){
      arr[i] = arr[i].toLowerCase();
    });
    return arr;
  }
}

function change(){
  document.querySelector('input[type="submit"]').value = "Good Job!";
};
