(function (){
  function toggleHandler(toggle) {
    var iconplease = document.getElementById("cmn-toggle-switch");
    (iconplease.classList.contains("active") === true) ? iconplease.classList.remove("active") : iconplease.classList.add("active");
  }

  var dropdown      = document.querySelectorAll('.dropdownToggle');
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
  
}());
