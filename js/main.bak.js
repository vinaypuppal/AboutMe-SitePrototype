$(document).ready(function(){
    var data = [
  {
    id:0,
    title:"Tribute Page",
    description:"A Tribute Page For Nandamuri Taraka Rama Rao.",
    demoUrl:"https://codepen.io/vinaypuppal/full/JXJJaL/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247988/fcc/tribute-page-ui.png",
    category:"frontend"
  },
  {
    id:1,
    title:"Random Quote Generator",
    description:"A simple quote generator that you can tweet and share.",
    demoUrl:"http://codepen.io/vinaypuppal/full/dMdxKR/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247983/fcc/random-quote-ui.png",
    category:"frontend"
  },
  {
    id:2,
    title:"Wiki Search",
    description:"A useful app to search Wikipedia articles.",
    demoUrl:"https://codepen.io/vinaypuppal/full/WwzxxR/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/wiki-search-ui.png",
    category:"frontend"
  },
  {
    id:3,
    title:"Show Local Weather",
    description:"A simple app to locate your current position and tell you the current weather.",
    demoUrl:"https://codepen.io/vinaypuppal/full/NNLepx/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/local-weather-ui.png",
    category:"frontend"
  },
  {
    id:4,
    title:"Basic JavaScript Calculator",
    description:"A simple calculator with the ability to chain operations.",
    demoUrl:"https://codepen.io/vinaypuppal/full/mPYbOX/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/js-calculator-ui.png",
    category:"frontend"
  },
  {
    id:5,
    title:"Pomodoro Clock",
    description:"Pomodoro timer featuring notification and audible alarm.",
    demoUrl:"http://codepen.io/vinaypuppal/full/ZWNWxb/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247982/fcc/pomodoro-clock-ui.png",
    category:"frontend"
  },
  {
    id:6,
    title:"Twitch Streamers",
    description:"A simple widget to show online status of Twitch streamers.",
    demoUrl:"https://codepen.io/vinaypuppal/full/aNrMPK/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247986/fcc/twitch-streams-ui.png",
    category:"frontend"
  },
  {
    id:7,
    title:"Timestamp microservice",
    description:"I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date",
    demoUrl:"https://vp-timestamp.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465061495/fcc/timestamp-ui.png",
    category:"backend"
  },
  {
    id:8,
    title:"Request Header Parser Microservice",
    description:"I can get the IP address, language and operating system for my browser.",
    demoUrl:"https://vp-header-parser.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465067738/fcc/header-parser-ui.png",
    category:"backend"
  },
  {
    id:9,
    title:"URL Shortener Microservice",
    description:"I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.",
    demoUrl:"http://vp-shorturl.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465124936/fcc/ui-url-shortener.png",
    category:"backend"
  },
  {
    id:10,
    title:"Image Search Abstraction Layer",
    description:"I can get the image URLs, alt text and page urls for a set of images relating to a given search string.",
    demoUrl:"https://vp-images.herokuapp.com",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465221550/fcc/img-search-ui.png",
    category:"backend"
  },
  {
    id:11,
    title:"Youtube Search",
    description:"A React App to search youtube videos",
    demoUrl:"https://youtube-api.vinaypuppal.com/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465248106/fcc/youtube-api.png",
    category:"react"
  },
  {
    id:12,
    title:"Mediclco Website",
    description:"A Landing page and Blog for Medicloc Startup Company",
    demoUrl:"https://www.medicloc.com/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247992/fcc/medicloc-ui.png",
    category:"meteor"
  },
  {
    id:12,
    title:"Amplidudes",
    description:"A Landing page and Alumni dashboard for ECE Branch, IT GGV",
    demoUrl:"https://www.amplidudes.in/",
    previewUrl:"https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_300/v1465247989/fcc/amplidudes-ui.png",
    category:"meteor"
  }
];

  var frontend = data.filter(function(item){
    return item.category === 'frontend';
  });
  
  var backend =  data.filter(function(item){
    return item.category === 'backend';
  });
  
  var react =  data.filter(function(item){
    return item.category === 'react';
  });
  
   var meteor = data.filter(function(item){
    return item.category === 'meteor';
  });
  
  function removeActiveClass(){
    $('.center').find('a').each(function(i,el){    if($(el).hasClass('active')){
      $(el).removeClass('active');
    }
      
    });
  }
  function removeOpenClass(){
    $('.container').each(function(i,el){
      if($(el).hasClass('open')){
        $(el).removeClass('open');
      }
    })
  }
  $('.js-close').on('click',function(e){
    e.preventDefault();
    removeActiveClass();
    $('.center').animate({
      opacity:'0'
    },100);
    removeOpenClass();
    $('.close-arrow').hide();
  });
  $('.js-open-about').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.about').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-about').addClass('active');
  });
  
  $('.js-open-works').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.works').addClass('open');
    renderToDom(frontend);
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity:'1'
    },500);
        removeActiveClass();
    $('.center').find('.js-open-works').addClass('active');
  });
  
  $('.js-open-contact').on('click',function(e){
    e.preventDefault();
    removeOpenClass();
    $('.contact').addClass('open');
    $('.close-arrow').show(600);
    $('.center').animate({
      opacity:'1'
    },500);
    removeActiveClass();
    $('.center').find('.js-open-contact').addClass('active');
  });
  
  $(".title h1").typed({
        strings: ["Hello", "Welcome", "I am 22 year old", "Self Taught","Web Developer"],
        typeSpeed: 100,
        loop: true
      });
 
function generateCard(data){
    var title = data.title;
    var desc = data.description;
    var imgUrl = data.previewUrl;
    var demoUrl = data.demoUrl;
    return ('<li class="card animated zoomIn"><div class="card-media"><img src='+imgUrl+' alt="#" /></div><div class="card-content"><h4>'+title+'</h4><p>'+desc+'</p></div><div class="card-actions"><a target="_blank" href='+demoUrl+' class="view-demo">View Demo</a></div></li>');
  }
  function renderToDom(data){
    data.forEach(function(item){
      var card = generateCard(item);
      //render card to dom
      //console.log(card);
      $('.js-list').append(card);
    });
  }
  function clearDom(){
    $('.js-list').empty();
  }
 $('input[type=radio]').on('change',function(e){
     switch(e.target.value){
       case 'frontend':
         clearDom();
         renderToDom(frontend);
         break;
       case 'backend':
         clearDom();
         renderToDom(backend);
         break;
       case 'react':
         clearDom();
         renderToDom(react);
         break;
       case 'meteor':
         clearDom();
         renderToDom(meteor);
         break;
     }
    });
});

if(document.createElement("p").style.flex===undefined){
    alert("no flexbox support");
 }

$.backstretch([
        "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896760/photo-1428223501723-d821c5d00ca3_knl5ki.jpg",
        "https://res.cloudinary.com/vinaypuppal/image/upload/c_scale,w_1024/v1464896839/photo-1432888498266-38ffec3eaf0a_ukva1r.jpg"
    ],{
        duration:3500,
        fade: 'slow'
    });
// particlesJS('particles',{
//   "particles": {
//     "number": {
//       "value": 80,
//       "density": {
//         "enable": true,
//         "value_area": 600
//       }
//     },
//     "color": {
//       "value": "#ffffff"
//     },
//     "shape": {
//       "type": "polygon",
//       "stroke": {
//         "width": 0,
//         "color": "#000000"
//       },
//       "polygon": {
//         "nb_sides": 5
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.5,
//       "random": false,
//       "anim": {
//         "enable": false,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 1,
//       "random": true,
//       "anim": {
//         "enable": true,
//         "speed": 10,
//         "size_min": 0.1,
//         "sync": true
//       }
//     },
//     "line_linked": {
//       "enable": true,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": false,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "grab"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 400,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 400,
//         "size": 40,
//         "duration": 2,
//         "opacity": 8,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });