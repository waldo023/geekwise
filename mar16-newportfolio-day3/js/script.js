var firstMain = document.getElementById('first'),
    secMain = document.getElementById('second'),
    body = document.querySelector('body'),
    backBtn = document.getElementById('backBtn'),
    backVal ;

var opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3');

var a = 0,
    b = 1,
    c = 2,
    d = 3;

opt1.addEventListener('click', opt1Func);
opt2.addEventListener('click', opt2Func);
opt3.addEventListener('click', opt3Func);

function opt1Func(){
  firstMain.classList.add('inactive');
  secMain.classList.remove('inactive');
  firstMain.innerHTML = '';
  secMain.innerHTML = aboutMe;
  backVal = initialCont;

  var opt4 = document.getElementById('opt4'),
      opt5 = document.getElementById('opt5');

  opt4.addEventListener('click', opt4Func);
  opt5.addEventListener('click', opt5Func);

  function opt4Func(){
    firstMain.innerHTML = projectSlide;
    secMain.innerHTML = '';
    secMain.classList.add('inactive');
    firstMain.classList.remove('inactive');
    backVal = aboutMe;
    backBtn.addEventListener('click', function(){
      backVal = initialCont;
      opt4 = document.getElementById('opt4'),
      opt5 = document.getElementById('opt5');
      opt4.addEventListener('click', opt4Func);
      opt5.addEventListener('click', opt5Func);

      a = 0,
      b = 1,
      c = 2,
      d = 3;
    });
    var leftChev = document.querySelector('#arrows div:nth-child(1)'),
        rightChev = document.querySelector('#arrows div:nth-child(2)');
    leftChev.addEventListener('click', leftFunc);
    rightChev.addEventListener('click', rightFunc);


  }
  function opt5Func(){
    firstMain.innerHTML = extraSlide;
    secMain.innerHTML = '';
    secMain.classList.add('inactive');
    firstMain.classList.remove('inactive');
    backVal = aboutMe;
    backBtn.addEventListener('click', function(){
      backVal = initialCont;
      opt4 = document.getElementById('opt4'),
      opt5 = document.getElementById('opt5');
      opt4.addEventListener('click', opt4Func);
      opt5.addEventListener('click', opt5Func);

      a = 0,
      b = 1,
      c = 2,
      d = 3;
    });
    var leftChev = document.querySelector('#arrows div:nth-child(1)'),
        rightChev = document.querySelector('#arrows div:nth-child(2)');
    leftChev.addEventListener('click', leftFunc);
    rightChev.addEventListener('click', rightFunc);

  }
}


function opt2Func(){
  firstMain.classList.add('inactive');
  secMain.classList.remove('inactive');
  secMain.innerHTML = projectSlide;
  backVal = initialCont;
  backBtn.addEventListener('click', function(){
    a = 0,
    b = 1,
    c = 2,
    d = 3;

  });

  var leftChev = document.querySelector('#arrows div:nth-child(1)'),
      rightChev = document.querySelector('#arrows div:nth-child(2)');

  leftChev.addEventListener('click', leftFunc);
  rightChev.addEventListener('click', rightFunc);
}


function opt3Func(){
  firstMain.classList.add('inactive');
  secMain.classList.remove('inactive');
  secMain.innerHTML = contact;
  backVal = initialCont;
  var nameInp = document.querySelector('input[type="text"]'),
      nameSpan = document.getElementById('text'),
      emailInp = document.querySelector('input[type="email"]'),
      emailSpan = document.getElementById('email'),
      telInp = document.querySelector('input[type="tel"]'),
      telSpan = document.getElementById('tel'),
      commentInp = document.querySelector('form textarea'),
      commSpan = document.getElementById('comm');

  nameInp.addEventListener('focus', function(){
    nameSpan.style.bottom = '80%';
  });
  nameInp.addEventListener('blur', function(){
    if(nameInp.value === ''){
      nameSpan.style.bottom = '40%';
    }
  });
  emailInp.addEventListener('focus', function(){
    emailSpan.style.bottom = '80%';
  });
  emailInp.addEventListener('blur', function(){
    if(emailInp.value === ''){
      emailSpan.style.bottom = '40%';
    }
  });
  telInp.addEventListener('focus', function(){
    telSpan.style.bottom = '80%';
  });
  telInp.addEventListener('blur', function(){
    if(telInp.value === ''){
      telSpan.style.bottom = '40%';
    }
  });
  commentInp.addEventListener('focus', function(){
    commSpan.style.bottom = '80%';
  });
  commentInp.addEventListener('blur', function(){
    if(commentInp.value === ''){
      commSpan.style.bottom = '40%';
    }
  });


}

function leftFunc(){
  var scontainer = document.querySelector('.scontainer');

  var aa = scontainer.children[0],
      bb = scontainer.children[1],
      cc = scontainer.children[2],
      dd = scontainer.children[3];

    a++; b++; c++; d++;
    if(a > 3 ){  a = 0;  }
    if(b > 3 ){  b = 0;  }
    if(c > 3 ){  c = 0;  }
    if(d > 3 ){  d = 0;  }

    if(a === 0){
      aa.classList.add('active');
      aa.classList.remove('right');
    }else if(a === 1){
      aa.classList.add('left');
      aa.classList.remove('active');
    }else if(a === 2){
      aa.classList.add('bottom');
      aa.classList.remove('left');
    }else if(a === 3){
      aa.classList.add('right');
      aa.classList.remove('bottom');
    }

    if(b === 0){
      bb.classList.add('active');
      bb.classList.remove('right');
    }else if(b === 1){
      bb.classList.add('left');
      bb.classList.remove('active');
    }else if(b === 2){
      bb.classList.add('bottom');
      bb.classList.remove('left');
    }else if(b === 3){
      bb.classList.add('right');
      bb.classList.remove('bottom');
    }

    if(c === 0){
      cc.classList.add('active');
      cc.classList.remove('right');
    }else if(c === 1){
      cc.classList.add('left');
      cc.classList.remove('active');
    }else if(c === 2){
      cc.classList.add('bottom');
      cc.classList.remove('left');
    }else if(c === 3){
      cc.classList.add('right');
      cc.classList.remove('bottom');
    }

    if(d === 0){
      dd.classList.add('active');
      dd.classList.remove('right');
    }else if(d === 1){
      dd.classList.add('left');
      dd.classList.remove('active');
    }else if(d === 2){
      dd.classList.add('bottom');
      dd.classList.remove('left');
    }else if(d === 3){
      dd.classList.add('right');
      dd.classList.remove('bottom');
    }
    }
function rightFunc(){
  var scontainer = document.querySelector('.scontainer');


      var aa = scontainer.children[0],
          bb = scontainer.children[1],
          cc = scontainer.children[2],
          dd = scontainer.children[3];

    a--; b--; c--; d--;
    if(a < 0 ){  a = 3;  }
    if(b < 0 ){  b = 3;  }
    if(c < 0 ){  c = 3;  }
    if(d < 0 ){  d = 3;  }

    if(a === 0){
      aa.classList.add('active');
      aa.classList.remove('left');
    }else if(a === 1){
      aa.classList.add('left');
      aa.classList.remove('bottom');
    }else if(a === 2){
      aa.classList.add('bottom');
      aa.classList.remove('right');
    }else if(a === 3){
      aa.classList.add('right');
      aa.classList.remove('active');
    }

    if(b === 0){
      bb.classList.add('active');
      bb.classList.remove('left');
    }else if(b === 1){
      bb.classList.add('left');
      bb.classList.remove('bottom');
    }else if(b === 2){
      bb.classList.add('bottom');
      bb.classList.remove('right');
    }else if(b === 3){
      bb.classList.add('right');
      bb.classList.remove('active');
    }

    if(c === 0){
      cc.classList.add('active');
      cc.classList.remove('left');
    }else if(c === 1){
      cc.classList.add('left');
      cc.classList.remove('bottom');
    }else if(c === 2){
      cc.classList.add('bottom');
      cc.classList.remove('right');
    }else if(c === 3){
      cc.classList.add('right');
      cc.classList.remove('active');
    }

    if(d === 0){
      dd.classList.add('active');
      dd.classList.remove('left');
    }else if(d === 1){
      dd.classList.add('left');
      dd.classList.remove('bottom');
    }else if(d === 2){
      dd.classList.add('bottom');
      dd.classList.remove('right');
    }else if(d === 3){
      dd.classList.add('right');
      dd.classList.remove('active');
    }

}
backBtn.addEventListener('click', function(){
 for(i =1; i <= 2; i++){
   if(body.children[i].classList.contains('inactive')){
     body.children[i].innerHTML = backVal;
     body.children[i].classList.remove('inactive');
   }else{
   body.children[i].innerHTML = '';
   body.children[i].classList.add('inactive');
   }
 }
 opt1 = document.getElementById('opt1'),
 opt2 = document.getElementById('opt2'),
 opt3 = document.getElementById('opt3');
 opt1.addEventListener('click', opt1Func);
 opt2.addEventListener('click', opt2Func);
 opt3.addEventListener('click', opt3Func);



});
