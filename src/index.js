import menuTempl from './template/menu-templ.hbs';
import listDishes from './menu.json';
//import './styles.css';
import './js/theme';

const menuList = document.querySelector('.js-menu');
const createMenuTempl = menuTempl(listDishes);

menuList.insertAdjacentHTML('beforeend', createMenuTempl);