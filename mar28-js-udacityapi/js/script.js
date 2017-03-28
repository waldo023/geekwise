
function getReq(url, callback){
  var req = new XMLHttpRequest();
  req.open('GET', url);
  req.onload = function(){
    if(req.readyState === 4 && req.status === 200){
      callback(JSON.parse(req.responseText));
    }else{
      console.log(req.statusText);
    }
  }
  req.send(null);
}

getReq('https://www.udacity.com/public-api/v0/courses', getCourses);

function getCourses(data){
  var li, img, title, ul = document.createElement('ul'), main = document.querySelector('main');
  data.courses.forEach(function(e, i){
    li = document.createElement('li');
    img = document.createElement('img');
    title = document.createElement('h1');

    title.textContent = e.title;
    if(e.image !== ''){
      img.src = e.image;
    }else{
      img.src = 'https://placehold.it/1000x600'
    }
    main.appendChild(ul);
    ul.appendChild(li);
    li.append(img, title);
  })
}

function getdegrees(data){
  var li, img, expected_learning, homepage, required_knowledge, title, ul = document.createElement('ul'), main = document.querySelector('main');
  data.degrees.forEach(function(e, i){
    li = document.createElement('li');
    img = document.createElement('img');
    title = document.createElement('h1');
    expected_learning = document.createElement('p');
    homepage = document.createElement('a');
    required_knowledge = document.createElement('p');


    title.textContent = e.title;
    expected_learning.innerHTML = e.expected_learning;
    homepage.href = e.homepage;
    homepage.textContent = 'Learn More';
    homepage.target = '_blank';
    required_knowledge.innerHTML = e.required_knowledge;
    if(e.image !== ''){
      img.src = e.image;
    }else{
      img.src = 'https://placehold.it/1000x600'
    }

    main.appendChild(ul);
    ul.appendChild(li);
    li.append(img, title, required_knowledge, expected_learning, homepage);
  })
}
