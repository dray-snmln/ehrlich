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

export default setupBurger
