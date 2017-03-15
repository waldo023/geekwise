var firstMain = document.getElementById('first'),
    aboutMe = document.getElementById('aboutMe'),
    projects = document.getElementById('projects'),
    body = document.querySelector('body');

var opt1 = document.getElementById('opt1'),
    opt2 = document.getElementById('opt2'),
    opt3 = document.getElementById('opt3');

opt1.addEventListener('click', function(){
  firstMain.classList.add('inactive');
  aboutMe.classList.remove('inactive');
});

opt2.addEventListener('click', function(){
  firstMain.classList.add('inactive');
  projects.classList.remove('inactive')
});



var leftChev = document.querySelector('i.fa-chevron-left'),
    rightChev = document.querySelector('i.fa-chevron-right');

// var initalContent =
//   '<div id="opt1">' +
//     '<div class="content">' +
//       '<h1>About Me</h1>' +
//       '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatum!</p>' +
//     '</div>' +
//     '<div class="overlay"></div>' +
//   '</div>' +
//
//   '<div id="opt2">' +
//     '<div class="content">' +
//       '<h1>Projects</h1>' +
//       '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatum!</p>' +
//     '</div>' +
//     '<div class="overlay"></div>' +
//   '</div>' +
//
//   '<div id="opt3">' +
//     '<div class="content">' +
//       '<h1>Contact</h1>' +
//       '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatum!</p>' +
//     '</div>' +
//     '<div class="overlay"></div>' +
//   '</div>';


// var aboutMe =
//   '<div id="opt1">' +
//     '<div class="content">' +
//       '<h1>Community Service</h1>' +
//       '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatum!</p>' +
//     '</div>' +
//     '<div class="overlay"></div>' +
//   '</div>' +
//   '<div id="opt2">' +
//     '<div class="content">' +
//       '<h1> Extracurricular Activities</h1>' +
//       '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptatum!</p>' +
//     '</div>' +
//     '<div class="overlay"></div>' +
//   '</div>';
