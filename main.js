import './src/assets/styles/main.scss'
import setupBurger from './src/assets/js/burger'

var benefits = new Flickity('.header__benefits', {
  wrapAround: true,
  autoPlay: 2500,
  watchCSS: true,
  prevNextButtons: false,
  pageDots: false,
})

var hero = new Flickity('.hero', {
  autoPlay: 2500,
  wrapAround: true,
  cellAlign: 'left',
})

setupBurger()
