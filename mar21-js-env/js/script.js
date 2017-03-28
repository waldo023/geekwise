

(function(){
getReq('/env.json', init);
}());

function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      callback(JSON.parse(req.responseText));
    }else{
      console.log('error', req.statusText);
    }
  };
  req.send(null);
}

function init(data){
  const CLIENT_ID = data.github.CLIENT_ID;
  const CLIENT_SECRET = data.github.CLIENT_SECRET;
  const ROOT_URL = 'https://api.github.com/';
  getReq(ROOT_URL+'users/waldo023?client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET, gitObj);

  var btn = document.querySelector('button');
  btn.addEventListener('click', function(){
    getReq(ROOT_URL+this.dataset.emoji, printEmojis)
  });
}

function printEmojis(data){
  var ul = document.querySelector('ul'),li, img;
 for(emoji in data){
   li = document.createElement('li');
   img = document.createElement('img');

   img.src = data[emoji];
   ul.append(li);
   li.append(img);
 }
}

function gitObj(data){
  var main = document.querySelector('main'),
      img = document.createElement('img'),
      h1 = document.createElement('h1');

  img.src = data.avatar_url;
  h1.textContent = data.name;
  main.append(h1, img);
}
