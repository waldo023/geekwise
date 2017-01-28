var snOpen = document.getElementById('open'),
    sn = document.getElementById('sn'),
    smOpen = document.getElementById('smopen'),
    smOpen2 = document.getElementById('smopen1'),
    sm = document.getElementById('side-menu'),
    sm2 = document.getElementById('side-menu2'),
    main = document.getElementById('main');

snOpen.addEventListener("click", openNav);
smOpen.addEventListener("click", openSm);
smOpen2.addEventListener("click", openSM);

function openNav(){
  if( sn.classList.contains('open')){
    sn.classList.remove('open');
    snOpen.classList.remove('open-bars');
    main.classList.remove('small');
  }
  else{
    sn.classList.add('open');
    snOpen.classList.add('open-bars');
    main.classList.add('small');
  }
}

function openSm(){
  if( sm.classList.contains('sm-show')){
    sm.classList.remove('sm-show');
    smOpen.classList.remove('smopen-rotate');
  }
  else{
    sm.classList.add('sm-show');
    smOpen.classList.add('smopen-rotate');
}

}

function openSM(){
  if( sm2.classList.contains('sm-show')){
    sm2.classList.remove('sm-show')
    smOpen2.classList.remove('smopen-rotate');
  }
  else{
     sm2.classList.add('sm-show')
     smOpen2.classList.add('smopen-rotate')
   }

}
