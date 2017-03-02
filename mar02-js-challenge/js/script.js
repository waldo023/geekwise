var content = document.getElementById('content');

var h1 = document.createElement('h1');
content.appendChild(h1).textContent = 'Hello World';

var p = document.createElement('p');
content.appendChild(p).textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

var a = document.createElement('a');
content.appendChild(a).textContent = 'click here';
a.id = 'test';
a.href = 'http://google.com';
a.className = 'test2'
a.target = '_blank'

var ul = document.createElement('ul');
// content.appendChild(ul);
content.insertBefore(ul, a);




var form = document.createElement('form');
content.insertBefore(form, a);


var inputFirstName = document.createElement('input');
form.appendChild(inputFirstName);
inputFirstName.type = 'text';
inputFirstName.placeholder = 'First name';

var inputLastName = document.createElement('input');
form.appendChild(inputLastName);
inputLastName.type = 'text';
inputLastName.placeholder = 'Last name';

var inputEmail = document.createElement('input');
form.appendChild(inputEmail);
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';

var inputPass = document.createElement('input');
form.appendChild(inputPass);
inputPass.type = 'password';
inputPass.placeholder = 'Password';

var inputNum = document.createElement('input');
form.appendChild(inputNum);
inputNum.type = 'number';
inputNum.placeholder = '0'

var inputSub = document.createElement('input');
form.appendChild(inputSub);
inputSub.type = 'submit';
inputSub.value = 'submit';
inputSub.style.marginLeft = '85px';

var br = document.createElement('br');
form.insertBefore(br, inputSub);

var br = document.createElement('br');
form.insertBefore(br, inputLastName);

var br = document.createElement('br');
form.insertBefore(br, inputEmail);

var br = document.createElement('br');
form.insertBefore(br, inputPass);

inputSub.addEventListener('click', function(evt){
  evt.preventDefault();
  userInfo();
});

var userInput = [];

function userInfo(){
  // for(i = 0; i < form.elements.length - 1; i++){
  //   userInput.push(form.elements[i].value);
  //   form.elements[i].value = '';
  // }
  // console.log(userInput);
  // userInput = [];
  ul.innerHTML = '';
  var loopNum = parseInt(inputNum.value);
  for(var i = 0; i < loopNum; i++){
    var li = document.createElement('li');
    ul.appendChild(li).textContent = i + 1;
  }
}

inputNum.addEventListener('change', function(evt){
  if(evt.target.value >= 0){
    // console.log(evt.target.value);
  }
  if(evt.target.value < 0){
    evt.target.value = 0;
  }
});
