import './src/assets/styles/main.scss'

const burger = document.querySelector('.header__burger')
const burgerClose = document.querySelector('.header__burger-close')
const leftNav = document.querySelector('.header__lnav')

function setupBurger() {
  burger.addEventListener('click', () => {
    if (leftNav.classList.contains('active')) {
      leftNav.classList.remove('active')
    } else {
      leftNav.style = 'transition: right 0.2s ease-in-out'
      leftNav.classList.add('active')
    }
  })

  burgerClose.addEventListener('click', () => {
    if (leftNav.classList.contains('active')) {
      leftNav.classList.remove('active')
    }
  })
}

var benefits = new Flickity('.header__benefits', {
  wrapAround: true,
  autoPlay: 2500,
  watchCSS: true,
  prevNextButtons: false,
  pageDots: false,
})

var hero = new Flickity('.hero', {
  //autoPlay: 2500,
  wrapAround: true,
  percentPosition: false,
  cellAlign: 'left',
})

setupBurger()
