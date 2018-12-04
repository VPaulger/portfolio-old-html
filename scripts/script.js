$( document ).ready(function() {
  
//sclick carousel slider

$('.experienceContainer').slick({
  dots: true,
  infinite: false,
  // autoplay: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$("#aboutSection").hide();
$("#experienceSection").hide();
$("#contactSection").hide();

$(".navLinks").on("click", function() {
  $("header").css("transition", "all 0.5s ease-in-out, background-color 0s");
  $("header").css("background-color", "rgba(0, 0, 0, 0)");
  $("#headerBlock").css("display", "flex");
  // $(".navigation").css("position", "absolute");
  // $(".navigation").css("order", "1");
  $(".landingNavigation").css("display", "none");
  // $(".landingNavigation > li > a").css("display", "none");
  // $(".landingNavigation > li").css("border", "none");
  // $(".landingNavigation > li").css("cursor", "context-menu");
  // $(".landingNavigation > li").css("height", "16px");
  // $("header").css("margin-top", "22px");
  // $("header > img").css("order", "2");
  // $("header > h1").css("order", "3");
  $("header").css("position", "absolute");
  $("header").css("align-self", "flex-start");
  $("#flexboxWrapper").css("display", "flex");
  // $("#logoDropDownContainer").css({"margin-top":"10%"});
  // console.log("changing header css");

  // var x = window.matchMedia("(max-width: 600)");
  // if (window.matchMedia("(max-width: 600px)").matches) { // If media query matches
  //   $(".landingNavigation").css("margin-top", "-130px");
  //   // console.log("media query working!!");
  // } 
  // else {
  //   $(".landingNavigation").css("margin-top", "-168px");
  //   console.log("media query working!!");
  // }

});


// var para = document.querySelector('p');

// var mql = window.matchMedia('(max-width: 600px)');

// function screenTest(e) {
//   if (e.matches) {
//     /* the viewport is 600 pixels wide or less */
//       $(".landingNavigation").css("margin-top", "-130px");

//   } else {
//     /* the viewport is more than than 600 pixels wide */
//     para.textContent = 'This is a wide screen — more than 600px wide.';
//     document.body.style.backgroundColor = 'blue';
//   }
// }

// mql.addListener(screenTest);


$("#about, #about2").on("click", function() {
  $("#aboutSection").show("1000");
  $("#experienceSection").hide();
  $("#contactSection").hide();
});

$("#experience, #experience2").on("click", function() {
  $("#aboutSection").hide();
  $("#experienceSection").show("1000");
  $("#contactSection").hide();
});

$("#contact, #contact2").on("click", function() {
    $("#aboutSection").hide();
    $("#experienceSection").hide();
    $("#contactSection").show("1000");
});

$('#show').on('click', function() {
  img.fadeIn();
});


//email validation
//email validation function
function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function validate() {
  //declare subscribe input as the emal
  var email = $(".emailInput").val();

  //if email is valid or invalid display an alert
  if (validateEmail(email)) {
    alert("Thanks for your message! I will get back to you shortly.");
  } else {
    alert("Please enter a valid email.");
  }
  return false;
}

//on click submit the email for validation
$("#contactSubmitButton").bind("click", validate);



$(function() {
  "use strict";
  var a = 0;
  $('#tv').hide();
  for (; a < 25; a += 1) {
    setTimeout(function b() {
      var a = Math.random() * 1e3 + 5e3,
        c = $("<div />", {
          "class": "smoke",
          css: {
            left: Math.random() * 1200,
            backgroundSize: "contain",
            width: Math.random() * 1200,
            height: Math.random() * 1200
          }
        });
      $(c).addClass("animated");
      $(c).addClass("zoomIn");
      $(c).addClass("rollOut");
      $(c).appendTo("#viewport");
      $.when($(c).animate({}, {
          duration: a / 4,
          easing: "linear",
          queue: false,
          complete: function() {
            $(c).animate({}, {
              duration: a / 13,
              easing: "linear",
              queue: false
            })
          }
        }),
        $(c).animate({
          bottom: $("#viewport").height()
        }, {
          duration: a / 0.5,
          easing: "linear",
          queue: false
        })).then(
        function() {
          $(c).remove();
          b()
        })
    }, Math.random() * 3e3)
  }
  // $("body").keypress(function() {
  //   $('body').addClass("fadeOut");
  //   setTimeout(function() {
  //     $('#tv').show();
  //   }, 1000);

  //   console.log("Handler for .keypress() called.");
  // });
}())
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var tv,
  playerDefaults = {
    autoplay: 0,
    autohide: 1,
    modestbranding: 0,
    rel: 0,
    showinfo: 0,
    controls: 0,
    disablekb: 1,
    enablejsapi: 0,
    iv_load_policy: 3
  };
var vid = [{
    'videoId': '2b5QNj-BVhs',
    'startSeconds': 515,
    'endSeconds': 690,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': '9ge5PzHSS0Y',
    'startSeconds': 465,
    'endSeconds': 657,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': 'OWsCt7B-KWs',
    'startSeconds': 0,
    'endSeconds': 240,
    'suggestedQuality': 'hd720'
  }, {
    'videoId': 'qMR-mPlyduE',
    'startSeconds': 19,
    'endSeconds': 241,
    'suggestedQuality': 'hd720'
  }],
  randomvid = Math.floor(Math.random() * (vid.length - 1 + 1));

function onYouTubePlayerAPIReady() {
  tv = new YT.Player('tv', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    },
    playerVars: playerDefaults
  });
}

function onPlayerReady() {
  tv.loadVideoById(vid[randomvid]);
  tv.mute();
}

function onPlayerStateChange(e) {
  if (e.data === 1) {
    $('#tv').addClass('active');
  } else if (e.data === 0) {
    tv.seekTo(vid[randomvid].startSeconds)
  }
}

function vidRescale() {

  var w = $(window).width() + 200,
    h = $(window).height() + 200;

  if (w / h > 16 / 9) {
    tv.setSize(w, w / 16 * 9);
    $('.tv .screen').css({
      'left': '0px'
    });
  } else {
    tv.setSize(h / 9 * 16, h);
    $('.tv .screen').css({
      'left': -($('.tv .screen').outerWidth() - w) / 2
    });
  }
}

$(window).on('load resize', function() {
  vidRescale();
});

$('.hi span').on('click', function() {
  $('#tv').toggleClass('mute');
  if ($('#tv').hasClass('mute')) {
    tv.mute();
  } else {
    tv.unMute();
  }
});

});
