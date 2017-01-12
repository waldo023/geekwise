var snOpen = document.getElementById('sno1'),
    snClose = document.getElementById('snc'),
    sn = document.getElementById('sn1'),
    sn2 = document.getElementById('sn2')
    snOpen2 = document.getElementById('down'),
    snClose2 = document.getElementById('up');

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);
snOpen2.addEventListener("click", openNav);
snClose2.addEventListener("click", closeNav);

function closeNav(){
  sn2.style.top = "-200px";
  snOpen2.classList.add("sno2");
  snClose2.classList.remove("sno2");
}
function openNav(){
  sn2.style.top = "51px";
  snClose2.classList.add("sno2");
  snOpen2.classList.remove("sno2");
}



function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}
