var str = "OsValDo";
var modStr = str.substr(1, 4);
//trim removes excess spaces from before and after
// console.log(userName);
// console.log(str.toLowerCase());
// console.log(str.toUpperCase());
// console.log(str.substr(1, 4));
// console.log(str, modStrk);

var b = function(){
  var u = prompt('whats your name?');
  alert(u.charAt(0).toUpperCase() + u.substr(1).toLowerCase());
};


function changeColor(){
  var randNum = Math.floor(Math.random() * 360) + 1;
  document.body.style.backgroundColor = 'hsl(' + randNum + ', 50%, 50%)';
}

var extBtn = document.getElementById('external'),
    divCont = document.getElementById('content');

extBtn.addEventListener('click', function(){
  divCont.textContent = prompt('what is your name');
});

var voidBtn = document.getElementById('void');

voidBtn.addEventListener('click', function(){
  divCont.textContent = '';
})
