
let elemFadeToggle = (elem, setHidden) => {
  let fadeIn = elem.classList.toggle('fadeIn')
  if (!fadeIn && setHidden) {
    setTimeout(() => {elem.classList.add('hidden')}, 1001);
  } else {
    elem.classList.remove('hidden');
  }
}

// add active label to nav based on position
let navLinks = document.querySelectorAll(".linkBox a");

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  navLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (section.offsetTop <= fromTop && (section.offsetTop + section.offsetHeight) > fromTop
    ) {
      link.classList.add("activeNav");
    } else {
      link.classList.remove("activeNav");
    }
  })
})

// splash words
setInterval(elemFadeToggle, 3000, document.getElementById('splash1'));
setTimeout(setInterval, 3000, elemFadeToggle, 3000, document.getElementById('splash2'));
setTimeout(setInterval, 5000, elemFadeToggle, 3000, document.getElementById('splash3'));


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

// about change header
document.getElementById('about').addEventListener('mouseenter', () => {
  let aboutHead = document.querySelector('.bigHead');
  let aboutHTML = aboutHead.innerHTML;
  let tempHTML = document.querySelector('.resume-Am-I').innerHTML;

  aboutHead.innerHTML = tempHTML;
  setTimeout(() => {
    aboutHead.innerHTML = aboutHTML;
  }, 5000);
})

//testimony cycling
const testimonyTimer = () => {
  let quotes = document.querySelectorAll('.quotes blockquote');
  let i = 1;
  console.log(document.getElementById('quote' + i));
  setInterval(() => {
    elemFadeToggle(document.getElementById('quote' + i), true);
    i = (i === quotes.length)? 0: i;
    setTimeout(() => {
      elemFadeToggle(document.getElementById('quote' + ++i), true);
    }, 1000);
  }, 7000);
  document.getElementById('testimony').removeEventListener('mouseenter', testimonyTimer);
}

document.getElementById('testimony').addEventListener('mouseenter', testimonyTimer);

// form validation
document.querySelectorAll('.error-message').forEach(el => {
  el.classList.add('hidden');
})

//TODO: convert jquery to vanilla js
// $('form.contact').on('submit', function(e)  {
//   e.preventDefault();
//   $('.contact input, .contact textarea').each(function() {
//     if ($(this).val() === '') {
//       $(this).addClass('error').siblings('.error-message').fadeIn(700);
//     } else {
//       $(this).removeClass('error').siblings('.error-message').fadeOut(700);
//     }
//   })
// })
