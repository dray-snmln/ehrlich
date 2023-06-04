import './src/assets/styles/main.scss'
import './src/assets/js/burger'

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
