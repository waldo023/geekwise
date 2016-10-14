var span = document.querySelectorAll('legend span');
var input = document.querySelectorAll('legend input');
//console.log(span);
console.log(input);
for(var i = 0; i < input.length; i++){
  input[i].addEventListener('click', function(){
    //console.log(this);
    // this.classList.toggle('placeholder');
    console.log(this === document.activeElement);

    if(this === document.activeElement){
      console.log(this.previousElementSibling);
      this.previousElementSibling.classList.toggle('placeholder');
    }
  });
}
