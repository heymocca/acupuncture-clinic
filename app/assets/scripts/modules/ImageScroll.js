import $ from 'jquery';
import slick from 'slick-carousel';

class ImageScroll {
	constructor() {
		this.itemToScroll = $( ".clinic-intro__image" );
		this.createImageScroll();
	}

	createImageScroll() {
        console.log(this.itemToScroll);
		this.itemToScroll.slick({

            // dots: true,
            infinite: true,
            speed: 500, fade: true,
            cssEase: 'linear'
        });
	}
}

export default ImageScroll;
