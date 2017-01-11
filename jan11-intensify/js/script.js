// function CloseNav(){
//   document.getElementById('sn').style.left = "-290px";
// }
// function OpenNav(){
//   document.getElementById('sn').style.left = "0";
// }

var snOpen = document.getElementById('sno'),
    snClose = document.getElementById('snc'),
    sn = document.getElementById('sn');

snOpen.addEventListener("click", snAnimOpen);
snClose.addEventListener("click", snAnimClose);

function snAnimOpen(){
  sn.classList.add("open");
}

function snAnimClose(){
  sn.classList.remove("open");
}
