function CloseNav(){
  document.getElementById('nav').style.width = "0px";
  document.getElementById('ul').style.display = "none";
  document.getElementById('bars').style.display = "block";
}
function OpenNav(){
  document.getElementById('nav').style.width = "20vw";
  document.getElementById('ul').style.display = "block";
  document.getElementById('bars').style.display = "none";
}
