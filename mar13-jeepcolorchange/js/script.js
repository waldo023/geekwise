var jeep = document.querySelector('header'),
    inputColor = document.querySelector('input[type="color"]'),
    btn = document.querySelector('input[type="submit"]');

var navUpper = document.querySelectorAll('nav > ul > li');
console.log(navUpper);

btn.addEventListener('click', function(e){
  e.preventDefault();
  jeep.style.backgroundColor = inputColor.value;
  jeep.style.transform = 'rotate(360deg)';
});

navUpper.forEach(function(e, i){
  e.addEventListener('mouseover' ,function(){
    this.classList.add('active');
  });
  e.addEventListener('mouseout' ,function(){
    this.classList.remove('active');
  });
});
