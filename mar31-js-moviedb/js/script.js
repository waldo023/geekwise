(function(){
  getReq('env.json', setVars);
}());

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
var myVars;
function setVars(data){
  myVars = envVars();
  console.log(myVars.get_url());
  myVars.set_api_key(data.apiKey);
  console.log(myVars.get_api_key());
  myVars.set_read_access(data.readAccess);
  console.log(myVars.get_readAccess());

 getMovie();
}

function envVars(){
  var url = 'https://api.themoviedb.org/', apiKey, readAccess;

  return {
    set_api_key: function(data){
      apiKey = data;
    },
    set_read_access: function(data){
      readAccess = data;
    },
    get_api_key: function(){
      return apiKey;
    },
    get_readAccess: function(){
      return readAccess;
    },
    get_url: function(){
      return url;
    }
  }
}

function getMovie(){
  var url = myVars.get_url() + '3/search/movie?api_key=' + myVars.get_api_key() + '&language=en-US&page=1&query=dragon';
  getReq(url, parseMovies);
}

function parseMovies(movies){
  console.log(movies);

  var main = document.querySelector('main'), section, title, tagline, overview, poster, homepage;
  var url = 'https://image.tmdb.org/t/p/w500'

  movies.results.forEach(function(e, i){
    section = document.createElement('section');
    title = document.createElement('h1');
    tagLine = document.createElement('h3');
    overview = document.createElement('p');
    poster = document.createElement('img');
    homepage = document.createElement('a');

    title.textContent = e.title;
    tagLine.textContent = e.tagline;
    overview.textContent = e.overview;
    homepage.href = e.homepage;
    poster.src = url + e.poster_path;
    homepage.textContent = 'read more';
    homepage.target = '_blank';

    main.appendChild(section);
    section.append(poster, title, tagLine, overview, homepage);
  });
}
