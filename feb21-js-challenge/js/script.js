var btn = document.getElementById('btn');
var div = document.getElementsByTagName('div');
var classes = document.getElementsByClassName('list-four');
var lis = document.querySelectorAll('li');
var ul = document.querySelector('ul');
var input = document.getElementById('input');
var submit = document.getElementById('submit');

submit.addEventListener('click', function(e){
  e.preventDefault();
  var userName = input.value;
  console.log(userName);
});
//  for(var j = 0; j < lis.length; j += 2 ){
//    lis[j].style.backgroundColor = 'blue';
//  }
//
// for(var i = 0; i < div.length; i++){
//   classes[i].addEventListener('click', function(){
//     alert('clicked on list item');
//   });
// }
//
// for(var x = 0; x < div.length; x++){
//   div[x].addEventListener('mouseover', function(){
//     alert('hovering over div')
//   })
// }
//
// btn.addEventListener('click', userName);
//
// function userName(){
//   var name = prompt('what is your name?').trim();
//   name = name.replace(/\s\s/g, ' ');
//   // if(name.length < 5){
//   //   alert('five or more characters required')
//   // }else{
//   //   alert('hello ' + name);
//   // }
//
//   if (/^ *$/.test(name)){
//     alert('need more than spaces');
//   }else if(name.length < 5){
//        alert('five or more characters required')
//      }else{
//        alert('hello ' + name);
//      }
// }
