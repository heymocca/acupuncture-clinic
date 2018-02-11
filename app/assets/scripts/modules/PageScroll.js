import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class PageScroll {
    constructor(els, offset) {
        this.itemToDisplay = els;
        this.offset = offset;
        this.hideInitially();
        this.createWaypoints();
    }

    hideInitially() {
        this.itemToDisplay.addClass("display-item");
    }

    createWaypoints() {
        var currentObj = this;
        this.itemToDisplay.each(function() {
            var currentItem = this;
            new Waypoint({
                /*element property is the DOM element that you want to watch for as you
                scroll down the page.  handler is what you want to happen when that
                element is scrolled to.*/
                element: currentItem,
                handler: function() {
                    $(currentItem).addClass("display-item--is-visible");
                },
                offset: currentObj.offset
            });
        });
    }
}

export default PageScroll;
