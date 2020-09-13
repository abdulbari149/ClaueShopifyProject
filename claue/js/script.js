const headerDropDown = [...document.querySelectorAll("[data-fadeBottom]")];
console.log(headerDropDown);
headerDropDown.forEach((dropdown) => {
  let topValue = parseInt(
    window.getComputedStyle(dropdown, null).getPropertyValue("top")
  );
});
const navTogglerOpen = document.querySelector('.navbar-toggler');
const navTogglerClose = document.querySelector('.nav__close')
const navbar_brand = document.querySelector(".nav__item .navbar__brand");
const navList = document.querySelector("ul.nav");
const navMain = document.getElementById('navbar-main')
const navHead = document.querySelector('.nav__head');
let navItems = [
  ...document.querySelectorAll(".nav__item"),
];
let [item_1, item_2, item_3, item_4, item_5, item_6, item_7, item_8] = navItems
if (this.innerWidth <= 1199) {
  item_5.removeChild(navbar_brand);
  item_5.remove();
  console.log(navItems);

  navTogglerOpen.addEventListener('click', () => {
    if (navMain.classList.contains('collapse')) {
      navMain.classList.remove('collapse');
      navList.classList.remove('fadeLeft');
      navHead.classList.remove('fadeLeft');
    }
    else {
      navMain.classList.add('collapse');
      navList.classList.add('fadeLeft');
      navHead.classList.add('fadeLeft')

      console.log(navMain)
    }
  })
  navTogglerClose.addEventListener('click', () => {
    if (navMain.classList.contains('collapse')) {
      navMain.classList.remove('collapse');
      navList.classList.remove('fadeLeft');
      navHead.classList.remove('fadeLeft');
    }
    else {
      navMain.classList.add('collapse');
      navList.classList.add('fadeLeft');
      navHead.classList.add('fadeLeft')
      console.log(navMain)
    }
  })
}
console.log(this.innerWidth);

