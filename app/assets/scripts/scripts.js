import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new PageScroll($('#facilities'), "85%");
new PageScroll($('.services-item'), "90%");
new PageScroll($('.testimonials'), "70%");
var stickyHeader = new StickyHeader();
