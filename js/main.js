
let wordFadeToggle = (elem) => {
  elem.classList.toggle('fadeIn');
}
setInterval(wordFadeToggle, 3000, document.getElementById('splash1'));
setTimeout(setInterval, 3000, wordFadeToggle, 3000, document.getElementById('splash2'));
setTimeout(setInterval, 5000, wordFadeToggle, 3000, document.getElementById('splash3'));


// carousel
let slideGroup = document.querySelector('.slides');
let slides = slideGroup.querySelectorAll('img');
const slidesNum = slides.length;

//show last slide under previous arrow on first slide
slideGroup.prepend(slides[slidesNum-1]);

document.querySelector('.arrowNext').addEventListener('click', () => {
  let rootCSS = window.getComputedStyle(document.documentElement);
  let moveBy = rootCSS.getPropertyValue('--slideMove') * 1;
  let slidePosition = rootCSS.getPropertyValue('--slideOffset') * 1;

  slideGroup = document.querySelector('.slides');
  slides = slideGroup.querySelectorAll('img');
  slideGroup.classList.add('nextSlide');
  setTimeout(() => {
    slideGroup.append(slides[0]);
    slideGroup.classList.remove('nextSlide');
  }, 2000);
})

document.querySelector('.arrowPrev').addEventListener('click', () => {
  let rootCSS = window.getComputedStyle(document.documentElement);
  let moveBy = rootCSS.getPropertyValue('--slideMove') * 1;
  let slidePosition = rootCSS.getPropertyValue('--slideOffset') * 1;

  slideGroup = document.querySelector('.slides');
  slides = slideGroup.querySelectorAll('img');
  slideGroup.classList.add('prevSlide');
  slideGroup.prepend(slides[slidesNum-1]);
  setTimeout(() => {
    slideGroup.classList.remove('prevSlide');
  }, 2000);
})

document.getElementById('about').addEventListener('mouseenter', () => {
  let aboutHead = document.querySelector('.bigHead');
  let aboutHTML = aboutHead.innerHTML;
  let tempHTML = document.querySelector('.resume-Am-I').innerHTML;

  aboutHead.innerHTML = tempHTML;
  setTimeout(() => {
    aboutHead.innerHTML = aboutHTML;
  }, 5000);
})
