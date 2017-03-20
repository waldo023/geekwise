/*
var car = {
  make: 'jeep',
  model: 'wrangler',
  color: 'black',
  year: 2014,
  doors: 4
};

for(key in car){
  // console.log(key);
  // console.log(car[key]);
  console.log(key  + ' : ' + car[key]);
}
*/

const ROOT_URL = 'https://api.github.com/';

var main = document.querySelector('main'),
    img,h1, gitObj, req;

function getReq(){
  req = new XMLHttpRequest();
  req.open('GET', ROOT_URL+'users/waldo023?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET);

  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      console.log('success', req.statusText);
      gitObj = JSON.parse(req.responseText);
    }else{
      console.log('error', req.statusText);
    }
    // var gitObj = JSON.parse(req.responseText);
    // img = document.createElement('img');
    // h1 = document.createElement('h1');
    // img.src = gitObj.avatar_url;
    // h1.textContent = gitObj.login;
    // main.append(img, h1)
  }
  req.send(null);
}

(function(){
  getReq();
  console.log(gitObj);
}());
