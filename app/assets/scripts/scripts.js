import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new PageScroll($('#facilities'), "85%");
new PageScroll($('#services'), "90%");
new PageScroll($('#feedback'), "70%");
