var firstMain = document.getElementById('first'),
    secMain = document.getElementById('second'),
    body = document.querySelector('body'),
    backBtn = document.querySelector('body > a');

var opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3');

opt1.addEventListener('click', function(){
  firstMain.classList.add('inactive');
  secMain.classList.remove('inactive');
  secMain.innerHTML = aboutMe;

var opt4 = document.getElementById('opt4'),
    opt5 = document.getElementById('opt5');

opt4.addEventListener('click', function(){
  firstMain.innerHTML = '';
  firstMain.innerHTML = projectSlide;
  secMain.classList.add('inactive');
  firstMain.classList.remove('inactive');

  var leftChev = document.querySelector('i.fa-chevron-left'),
      rightChev = document.querySelector('i.fa-chevron-right');

  var scontainer = document.querySelector('.scontainer');

      var a = 0,
          b = 1,
          c = 2,
          d = 3;
      var aa = scontainer.children[0],
          bb = scontainer.children[1],
          cc = scontainer.children[2],
          dd = scontainer.children[3];

          console.log(aa, bb, cc, dd);

      leftChev.addEventListener('click', function(){
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
        // console.log(a,b,c,d);
      });

      rightChev.addEventListener('click', function(){
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
        console.log(a, b, c, d);
        console.log(aa, bb, cc, dd);

      });
});

});

opt2.addEventListener('click', function(){
  firstMain.classList.add('inactive');
  secMain.classList.remove('inactive');
  secMain.innerHTML = projectSlide;

  var leftChev = document.querySelector('#arrows div:nth-child(1)'),
      rightChev = document.querySelector('#arrows div:nth-child(2)');

  console.log(leftChev, rightChev);

  var scontainer = document.querySelector('.scontainer');


  var a = 0,
      b = 1,
      c = 2,
      d = 3;
  var aa = scontainer.children[0],
      bb = scontainer.children[1],
      cc = scontainer.children[2],
      dd = scontainer.children[3];

      console.log(aa, bb, cc, dd);

  leftChev.addEventListener('click', function(){
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
    // console.log(a,b,c,d);
  });

  rightChev.addEventListener('click', function(){
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
    console.log(a, b, c, d);
    console.log(aa, bb, cc, dd);

  });
});


backBtn.addEventListener('click', function(e){
  e.preventDefault();
});
