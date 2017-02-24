var contactForm = document.querySelector('form#contact');
var loginForm = document.querySelector('form#login');
var logBtn = document.querySelector('form#login input[type="submit"]');
var conBtn = document.querySelector('form#contact input[type="submit"]');
var nameSpan = document.querySelector('.custom');
var conArr = [];
var logArr = [];
var username = '';

if(localStorage.getItem('username')){
  username = localStorage.getItem('username');
  alert('please enter your password to continue.');
  password();
}else{
  alert('please log in');
  login();
}
console.log(username);

conBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < contactForm.elements.length - 1; i++){
    if(contactForm.elements[i].type !== 'checkbox' &&
       contactForm.elements[i].value !== ''){
      conArr.push(contactForm.elements[i].value);
    }
    if(contactForm.elements[i].type === 'checkbox' &&
       contactForm.elements[i].checked){
         conArr.push(true);
       }
  }
  console.log(conArr);
  conArr = [];
});

function login(){
logBtn.addEventListener('click', function(evt){
  evt.preventDefault();
  for(var i = 0; i < loginForm.elements.length - 1; i++){
    if(loginForm.elements[i].type === 'text'){
       localStorage.setItem('username', loginForm.elements[i].value)
    }else{
      sessionStorage.setItem('password', MD5(loginForm.elements[i].value));
    }
    nameSpan.textContent = 'Hello ' + localStorage.getItem('username') + '. ';
    for(var i = 0; i < contactForm.length; i++){
      contactForm.elements[i].disabled = false;
    }
  }
});
}

function password(){
  logBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    if(MD5(loginForm.elements[1].value) === sessionStorage.getItem('password')){
      alert('Passwords match. You may continue');
    }else{
      alert('please try again');
    }
  });
}
