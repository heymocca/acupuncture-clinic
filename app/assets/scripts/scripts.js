import MobileMenu from './modules/MobileMenu';
import PageScroll from './modules/PageScroll';
import $ from 'jquery';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
new PageScroll($('#facilities'), "85%");
new PageScroll($('.services-item'), "90%");
new PageScroll($('.testimonials'), "70%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
