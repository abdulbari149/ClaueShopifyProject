const headerDropDown = [...document.querySelectorAll("[data-fadeBottom]")];
console.log(headerDropDown);
headerDropDown.forEach((dropdown) => {
  let topValue = parseInt(window
    .getComputedStyle(dropdown, null)
    .getPropertyValue("top"));

});
