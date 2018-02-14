import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyloadImgages = $(".lazyload");
        this.siteHeader = $(".site-header");
        this.headerTriggerElement = $(".hero-image__title");
        this.createHeaderWaypoints();
        this.pageSection = $(".page-section");
        this.headerLink = $(".generic-nav a");
        this.createLinkWayPoints();
        this.smoothSrolling();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
    this.lazyloadImgages.on("load",function() {
      Waypoint.refreshAll();
    });
  }

    smoothSrolling() {
        this.headerLink.smoothScroll();
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



    createLinkWayPoints() {
        var currentObj = this;
        this.pageSection.each(function(){
            var currentPageSection = this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == "down") {
                        var anchorLink = currentPageSection.getAttribute("data-link");
                        currentObj.headerLink.removeClass("is-active").addClass("is-shrinked");
                        $(anchorLink).addClass("is-active");
                    }
                },
                offset: "20%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if(direction == "up") {
                        var anchorLink = currentPageSection.getAttribute("data-link");
                        currentObj.headerLink.removeClass("is-active");
                        $(anchorLink).addClass("is-active");
                    }
                },
                offset: "-40%"
            });
        });

    }

}

export default StickyHeader;
