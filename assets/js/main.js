export function layoutJs() {
  var overlay = document.getElementsByClassName('overlay')[0]
  var menu = document.querySelector('.toggle')
  var aside = document.getElementsByTagName('aside')[0];
  overlay.addEventListener('click', function(event) {
    menu.click()
    aside.classList.remove('active');
    overlay.classList.replace('block', 'hidden')
  });
}

export function asideJs() {
  var navLink = document.querySelectorAll(".nav-link");
  var subMenu = document.querySelectorAll(".sub-menu");
  navLink.forEach((el, index) => {
    var containsArrow = Array.from(el.children).some(child => {
      return child.classList.contains("arrow");
    });
    if (containsArrow) {
      el.addEventListener('click', () => {
        var arrowElement = el.querySelector(".arrow")
        arrowElement.classList.toggle("arrow-down")
        subMenu[index].classList.toggle("sub-menu-show")
        for (let i = 0; i < subMenu.length; i++) {
          if (i !== index) {
            subMenu[i].classList.remove("sub-menu-show");
            if(navLink[i].querySelector('.arrow') !== null){
              var arrow = navLink[i].querySelector('.arrow')
              arrow.classList.remove("arrow-down")
            }
          }
        }
      })
    }
  })
}

export function navJs() {
  var menu = document.querySelector('.toggle')
  var defaultGrid = document.querySelector('.default')
  var text = document.querySelectorAll('.link-text')
  var aside = document.getElementsByTagName('aside')[0];
  var overlay = document.getElementsByClassName('overlay')[0];
  var profile = document.getElementsByClassName('name-info')[0];
  var logoutI = document.querySelector('.logoutI');
  var svg = document.querySelectorAll('.nav-link .arrow');
  menu.addEventListener('click', () => {
    defaultGrid.classList.toggle('menu-open')
    text.forEach(el => {
      el.classList.toggle('show-text')
    })
    profile.classList.toggle('show-text')
    logoutI.classList.toggle('show-text')
    svg.forEach(el => {
      el.classList.toggle('show-text')
    })
    aside.classList.add('active');
    overlay.classList.replace('hidden', 'block')
  });
}