
let wordFadeToggle = (elem) => {
  elem.classList.toggle('fadeIn');
}
setInterval(wordFadeToggle, 3000, document.getElementById('splash1'));
setTimeout(setInterval, 3000, wordFadeToggle, 3000, document.getElementById('splash2'));
setTimeout(setInterval, 5000, wordFadeToggle, 3000, document.getElementById('splash3'));


// carousel
const slides = document.querySelector('.slides');
// const rootCSS = window.getComputedStyle(document.documentElement);
// const moveBy = rootCSS.getPropertyValue('--slideMove');
// let slidePosition = rootCSS.getPropertyValue('--slideOffset');
//
// console.log(`rootCSS: ${rootCSS}
//   moveBy: ${moveBy}
//   slidePosition: ${slidePosition}`);

document.querySelector('.arrowNext').addEventListener('click', () => {
  const rootCSS = window.getComputedStyle(document.documentElement);
  const moveBy = rootCSS.getPropertyValue('--slideMove') * 1;
  let slidePosition = rootCSS.getPropertyValue('--slideOffset') * 1;

  console.log(`rootCSS: ${rootCSS}
    moveBy: ${moveBy}
    slidePosition: ${slidePosition}`);

  slidePosition += moveBy;
  console.log(`calculated new slidePosition: ${slidePosition}`);
  slides.classList.add('moveSlide');
  setTimeout(() => {
    document.documentElement.style.setProperty('--slideOffset', slidePosition);
    slides.classList.remove('moveSlide');
  }, 3000);
})
