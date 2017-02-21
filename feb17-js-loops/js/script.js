var btn = document.getElementById('btn');
var para = document.getElementById('para');
var favMovie = [];

btn.addEventListener('click', userMovie);

function userMovie(){
 favMovie.push(prompt('what is your favorite movie?'));
 if(favMovie.length >= 3){
   console.log(favMovie);
 }
 if(favMovie.length >= 5){
  //  for (var i=0; i < favMovie.length; i++){
  //    console.log(favMovie[i]);
  //   //  para.textContent += favMovie[i] + " ";
  //  }
  favMovie.forEach(function(){
    console.log(favMovie[i]);
  })
 }
}
