var snOpen = document.getElementById('open'),
    snClose = document.getElementById('close'),
    sn = document.getElementById('sn')
    main = document.getElementById('main');

snOpen.addEventListener("click", openNav);
snClose.addEventListener("click", closeNav);

function openNav(){
  sn.classList.add('open');
  snOpen.style.display = "none";
  snClose.style.display = "block";
  main.classList.add('small');
}

function closeNav(){
  sn.classList.remove('open');
  snOpen.style.display = "block";
  snClose.style.display = "none";
  main.classList.remove('small');
}
