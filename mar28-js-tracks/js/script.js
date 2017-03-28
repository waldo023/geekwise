function getReq(url, cb){
  var req = new XMLHttpRequest;
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      cb(JSON.parse(req.responseText));
    }else{
      console.log(req.statusText);
    }
  }
  req.send(null)
}
getReq('https://www.udacity.com/public-api/v0/courses', getTracks);

function getTracks(data){
  var main = document.querySelector('main'),div, div2, ul, ol, li, li2, p, name, description, courses;
  data.tracks.forEach(function(e, i){
    ul = document.createElement('ul');
    li = document.createElement('li');
    name = document.createElement('h1');
    description = document.createElement('p');
    div = document.createElement('div');
    div2 = document.createElement('div');
    ol = document.createElement('ol');

    name.textContent = e.name;
    description.textContent = e.description;


    main.append(div);
    div.append(ul, div2);
    ul.append(li);
    li.append(name, description);


    courses = e.courses;
    courses.forEach(function(e, i){

      li2 = document.createElement('li');
      p = document.createElement('p');

      p.textContent = e;
      div2.append(ol)
      ol.append(li2);
      li2.append(p);
    });


  });
};
