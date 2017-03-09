(function(){
  var distance = document.querySelector('#meter li:nth-child(1) span');
  var winW = document.querySelector('#meter li:nth-child(2) span');
  var winH = document.querySelector('#meter li:nth-child(3) span');
  var heroH = document.querySelector('#meter li:nth-child(4) span');
  var hero = document.querySelector('#hero');
  var sec1 = document.querySelector('section:nth-of-type(1)');
  var sec2 = document.querySelector('section:nth-of-type(2)');
  var sec3 = document.querySelector('section:nth-of-type(3)');

  var dist = 0,
      winWidth = window.innerWidth,
      winHeight = window.innerHeight,
      heroHeight = hero.clientHeight,
      sec1Height = 0;

  winW.textContent = winWidth;
  winH.textContent = winHeight;
  heroH.textContent = heroHeight;
  distance.textContent = dist;


  window.addEventListener('resize', function(){
    var winWidth = window.innerWidth,
        winHeight = window.innerHeight,
        heroHeight = hero.clientHeight;

    winW.textContent = winWidth;
    winH.textContent = winHeight;
    heroH.textContent = heroHeight;

  });


  window.addEventListener('scroll', function(){
    dist = window.scrollY;
    distance.textContent = dist;
    console.log( (sec1.offsetTop - dist) - winHeight);
    if( (sec1.offsetTop - dist) - winHeight <= 0){

      sec1.classList.add('colorIn');
    }else{

      sec1.classList.remove('colorIn');
    }
    if( (sec2.offsetTop - dist) - winHeight <= 0){

      sec2.classList.add('colorIn2');
    }else{

      sec2.classList.remove('colorIn2');
    }
    if( (sec3.offsetTop - dist) - winHeight <= 0){

      sec3.classList.add('colorIn3');
    }else{

      sec3.classList.remove('colorIn3');
    }
  });

})();
