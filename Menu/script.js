window.onload = function() {
  var header = document.getElementById('header');
  var nextElement = document.getElementsByTagName('section')[1];
  var iconMenu = document.getElementById('icon-menu');
  var menuList = document.getElementById('menu-list');

  var width = document.documentElement.clientWidth;
  var menuHeight = menuList.offsetHeight;
  var left = width;

  nextElement.style.marginTop = header.offsetHeight + 20 + 'px';
  menuList.style.left = left + 'px';
  menuList.style.top = header.offsetHeight / 2 + 'px';

  iconMenu.addEventListener('click', function () {
    if ( getComputedStyle(menuList).display == 'block') {
       var hideMenu = setInterval(function () {
           menuList.style.left = left + 'px';
           if (left > width) clearInterval(hideMenu);
           left += 10;
       }, 1);

       setTimeout(function () {
         menuList.style.display = 'none';
       }, 500);
    } else {
      menuList.style.display = 'block';
      var showMenu = setInterval(function () {
          menuList.style.left = left + 'px';
          if (left <= -15) clearInterval(showMenu);
          left -= 10;
      }, 1);
    }
  });
}
