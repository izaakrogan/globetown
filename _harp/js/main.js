(function (){

  function toggleHandler(toggle) {
    var iconplease = document.getElementById("cmn-toggle-switch");
    var globetown = document.getElementById("globetown-logo");
    if(iconplease.classList.contains("active") === true) {
      iconplease.classList.remove("active")
      globetown.classList.remove("active")
    } else {
      iconplease.classList.add("active")
      globetown.classList.add("active")
    }
  }

  var dropdown      = document.querySelectorAll('.nav');
  var dropdownArray = Array.prototype.slice.call(dropdown,0);

  dropdownArray.forEach(function (dropdown){
    var button = dropdown.querySelector('a[data-toggle="dropdown"]');
    var menu   = dropdown.querySelector('.nav-settings-dropdown') || dropdown.querySelector('.dropdown-menu');
    var nav     = document.getElementById("navbar");
    var wait = false;
    button.onclick = function(event) {
      wait = true;
      if(!menu.hasClass('show')) {
        menu.classList.add('show');
        menu.classList.remove('hide');
        nav.classList.add('opacity-1');
        nav.classList.remove('opacity-0');
        toggleHandler();
      }else{
        menu.classList.remove('show');
        menu.classList.add('hide');
        nav.classList.remove('opacity-1');
        nav.classList.add('opacity-0');
        toggleHandler();
      };
    };
  });

  Element.prototype.hasClass = function(className) {
    var a = this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
    return a;
  };

}());


var fac = (function (){

  var reveal = {
    nav_scroll: nav_scroll,
  };

  function img_resize()	{
    var imgWidth = document.getElementById("img").offsetWidth;
    var elements = document.getElementsByClassName('im');
    for (var i=elements.length; i--;) {
      elements[i].style.height = imgWidth*0.66 + "px";
    }
  }

  function home_resize() {
    if (window.location.pathname == '/' || window.location.pathname == /portfolio/ ) {
      img_resize();
      window.onresize = function() {
        img_resize();
      };
    }
  }

  window.onload = function() {
    home_resize();
  }

  function currentYPosition() {
    if (self.pageYOffset) return self.pageYOffset;
    if (document.documentElement && document.documentElement.scrollTop)
    return document.documentElement.scrollTop;
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
  }

  function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
    } return y;
  }

  function smoothScroll (eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
      scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  }

  function nav_scroll(page, anchor) {
    if(anchor) {
      console.log('window.location.pathname', window.location.pathname);
      if (window.location.pathname != page) {
        location = page+'#'+anchor
      }
      // stop page scrolling before load
      setTimeout(function() {
        console.log(anchor);
        smoothScroll(anchor);
      }, 1);
    }
    if(!anchor) {
      if (window.location.pathname != page) {
        location = page+'#'
      }
    }
  }

  return reveal;

}());

$(document).ready(function(){
  var img = new Image()
  img.src = "/assets/images/home.png";
  img.onload = function() {
      $("#section-landing-image").css("background-image", 'url('+img.src+')');
      setTimeout(function() {
        $("#section-landing-image").css("filter", 'none');
      }, 1);
  };
});
