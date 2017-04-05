(function(){
    getReq('env.json', setEnv);
}());

function getReq(url, cb){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            cb(JSON.parse(req.responseText));
        }else{
            console.log('error', req.statusText);
        }
    }
    req.send(null);
}

var myVars;

function setEnv(envs){
    myVars = envVars();
    myVars.set_root_url(envs.root_url);
    myVars.set_img_url(envs.img_url);
    myVars.set_api_key(envs.api_key);
    myVars.set_access_token(envs.access_token);

    // getMovies();

    var url = myVars.get_root_url()+'search/movie?api_key='+myVars.get_api_key()+'&language=en-US&page=1&query=Jurassic';

    getReq(url, getMovies);
}

function getMovies(movies){
    var main = document.querySelector('main'),
        section = document.createElement('section'),
        h1 = document.createElement('h1'),
        ul = document.createElement('ul'), li, year, poster_path, div, title, overview, stars;
    section.append(h1, ul);
    main.appendChild(section);
    h1.textContent = 'Dino Movies'

    movies.results.forEach(function(e){
        stars = starRate(e.vote_average);
        li = document.createElement('li');
        poster_path = document.createElement('img');
        title = document.createElement('h2');
        div = document.createElement('div');
        overview = document.createElement('p');
        year = document.createElement('p');

        year.textContent = e.release_date.split("-").splice(0, 1);
        title.textContent = e.title;
        overview.textContent = e.overview.split(".").splice(0, 1) + "...";
        poster_path.src = myVars.get_img_url()+'w500'+e.poster_path;

        li.append(poster_path, div);
        div.append(title, year, overview)
        ul.appendChild(li);
    });
}
function envVars(){
    var root_url, img_url, api_key, access_token;
    return {
        set_root_url: function(data){
            root_url = data;
        },
        set_img_url: function(data){
            img_url = data;
        },
        set_api_key: function(data){
            api_key = data;
        },
        set_access_token: function(data){
            access_token = data;
        },
        get_root_url: function(){
            return root_url;
        },
        get_img_url: function(){
            return img_url;
        },
        get_api_key: function(){
            return api_key;
        },
        get_access_token: function(){
            return access_token;
        }
    }
}


function starRate(vote){
  console.log(vote);
  
}
