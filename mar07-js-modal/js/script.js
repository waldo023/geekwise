/*var content = document.getElementById('content'),
    a = document.getElementById('a');

var modalForm = document.createElement('form'),
    modalCon = document.createElement('input'),
    modalCan = document.createElement('input'),
    modalInput = document.createElement('input'),
    modalSpan = document.createElement('span'),
    modalPara = document.createElement('p');

    modalPara.textContent = 'text';

    modalCon.type = 'submit';
    modalCon.value = 'confirm';

    modalCan.type = 'button';
    modalCan.value = 'cancel';

    modalInput.type = 'text';
    modalInput.placeholder = 'Your Response';

a.addEventListener('click', function(){
  content.classList.add('active');

  modalForm.append(modalPara);

 if(a.textContent === 'confirm'){
    modalSpan.append(modalCan);
  }else if(a.textContent === 'prompt'){
    modalForm.append(modalInput);
    modalSpan.append(modalCan);
  }
  content.appendChild(modalForm);
  modalForm.append(modalSpan)
  modalSpan.append(modalCon);

});

modalCon.addEventListener('click', function(){
  if(a.textContent === 'prompt'){
    console.log(modalInput.value);
  }
  if(a.textContent === 'confirm'){
    console.log(true);
  }
  modalForm.innerHTML = '';
  modalInput.value = '';
  content.classList.remove('active');
});

modalCan.addEventListener('click', function(){
  if(a.textContent === 'confirm'){
    console.log(false);
  }
  modalForm.innerHTML = '';
  modalInput.value = '';
  content.classList.remove('active');
});
*/


// console.log('Notification' in window);
//
// if(!('Notification' in window)){
//   alert('sorry')
// }

// form.childNodes.forEach( function(e, i){
//   console.log(e);
// });
// if("childElementCount" in form){
//   for(i = 0; i < form.childElementCount; i++){
//     console.log(form.children[i]);
//   }
// }else{
//   for(i = 0; i < form.childElementCount; i++){
//     console.log(form.children[0]);
// }};

var form = document.querySelector('form');
console.log(form);

var formArr = [];
console.log(formArr);

formArr.push(form.childElementCount, form.action, form.clientLeft, form.clientTop, form.clientWidth );

console.log(formArr);
