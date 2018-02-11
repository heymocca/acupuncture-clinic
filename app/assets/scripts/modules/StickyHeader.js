import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class StickyHeader {
    constructor() {
        this.siteHeader = $('.site-header');
        this.headerTriggerElement = $('.hero-image__title');
        this.createHeaderWaypoints();

    }

    createHeaderWaypoints() {
        var currentObj = this;
        new Waypoint({
            element: this.headerTriggerElement[0],
            handler: function(direction) {
                if(direction == "down") {
                    currentObj.siteHeader.addClass("site-header--dark");
            } else {
                currentObj.siteHeader.removeClass("site-header--dark");
            }
        }
        });
    }
}

export default StickyHeader;
