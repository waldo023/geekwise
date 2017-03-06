var div = document.getElementById('modal');
var span = document.createElement('span');
var a = document.querySelector('a');


function createModal(modalType, modalMessage){
  div.classList.add('active');

  var form = document.createElement('form');
  var message = document.createElement('p');
  var textBox = document.createElement('input');
  var confirmBtn = document.createElement('input');
  var cancelBtn = document.createElement('input');

  message.textContent = modalMessage;

  textBox.type = "text";
  textBox.placeholder = 'Your response.';

  confirmBtn.type = 'submit';
  confirmBtn.value = 'Confirm';

  cancelBtn.type = 'button';
  cancelBtn.value = 'Cancel';

  form.append(message)
  if(modalType === 'prompt'){
    form.append(textBox);
    span.append(cancelBtn);
  }else if(modalType === 'confirm'){
    span.append(cancelBtn);
  }
  div.append(form);
  form.append(span);
  span.append(confirmBtn);

  if(modalType === 'alert'){
    confirmBtn.addEventListener('click' , function(e){
      e.preventDefault();
      div.removeChild(form);
      span.removeChild(confirmBtn);
      div.classList.remove('active');
    });
  }else{
    cancelBtn.addEventListener('click' , function(){
      div.removeChild(form);
      span.removeChild(confirmBtn);
      span.removeChild(cancelBtn);
      div.classList.remove('active');

    });
    confirmBtn.addEventListener('click' , function(e){
      e.preventDefault();
      var userInput = textBox.value;
      div.removeChild(form);
      span.removeChild(confirmBtn);
      span.removeChild(cancelBtn);
      div.classList.remove('active');
    });
  }
}
