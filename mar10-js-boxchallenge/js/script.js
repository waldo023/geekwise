var div = document.getElementById('measure'),
    body = document.querySelector('body'),
    subBtn = document.querySelector('#measure input[type="submit"]'),
    textColor = document.querySelector('#measure input[placeholder="text color"]'),
    textSize = document.querySelector('#measure input[placeholder="text size(pixle value)"]'),
    backColor= document.querySelector('#measure input[placeholder="background color"]'),
    main = document.querySelector('main'),
    sec1 = document.querySelector('section:nth-of-type(1)'),
    sec2 = document.querySelector('section:nth-of-type(2)'),
    sec3 = document.querySelector('section:nth-of-type(3)'),
    sec4 = document.querySelector('section:nth-of-type(4)'),
    sec5 = document.querySelector('section:nth-of-type(5)');


console.log(main);
var winW = document.querySelector('#measure li:nth-of-type(1) span'),
    winH = document.querySelector('#measure li:nth-of-type(2) span'),
    scrollP = document.querySelector('#measure li:nth-of-type(3) span'),
    offSet1 = document.querySelector('#measure li:nth-of-type(4) span');

var winWVal = window.innerWidth,
    winHVal = window.innerHeight,
    scrollPVal = window.scrollY,
    offSet1Val = sec1.offsetTop;

winW.textContent = winWVal;
winH.textContent = winHVal;
scrollP.textContent = scrollPVal;
offSet1.textContent = offSet1Val;


window.addEventListener('scroll', function(){
  var scrollPVal = window.scrollY,
      offSet1Val = sec1.offsetTop,
      offSet2Val = sec2.offsetTop,
      offSet3Val = sec3.offsetTop,
      offSet4Val = sec4.offsetTop,
      offSet5Val = sec5.offsetTop;

  scrollP.textContent = scrollPVal;
  offSet1.textContent = offSet1Val;

for(i = 0; i < main.children.length; i++){
  if( main.children[i].offsetTop - scrollPVal - winHVal <= 0){
    main.children[i].classList.add('active');
  }
}
});

window.addEventListener('resize', function(){
  var winWVal = window.innerWidth,
      winHVal = window.innerHeight;

  winW.textContent = winWVal;
  winH.textContent = winHVal;
});

subBtn.addEventListener('click', function(e){
  e.preventDefault();

  var txtColor = textColor.value,
      txtSize = textSize.value,
      background = backColor.value;

body.style.backgroundColor = background;
body.style.color = txtColor;
body.style.fontSize = txtSize + 'px';

textColor.value = '';
textSize.value = '';
backColor.value = '';
});
