// document.querySelector('body').addEventListener('click', () => {
//   document.getElementById('splash1').classList.toggle("fadeIn");
// })

let wordFadeToggle = (elem) => {
  elem.classList.toggle("fadeIn");
}
setInterval(wordFadeToggle, 3000, document.getElementById('splash1'));
setTimeout(setInterval, 3000, wordFadeToggle, 3000, document.getElementById('splash2'));
setTimeout(setInterval, 5000, wordFadeToggle, 3000, document.getElementById('splash3'));
