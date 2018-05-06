// jshint esversion: 6

import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.$lazyImages = $('lazyload');
    this.$siteHeader = $('.site-header');
    this.$headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
    this.$pageSections = $('.page-section');
    this.$headerLinks = $('.primary-nav a');
    this.createPageSectionWaypoints();
    this.addSmoothScrolling();
    this.refreshWaypoints();
  }

  refreshWaypoints() {
    this.$lazyImages.on('load', function () {
      Waypoint.refreshAll();
    });
  }

  addSmoothScrolling() {
    this.$headerLinks.smoothScroll();
  }

  createHeaderWaypoint() {
    var _this = this;
    new Waypoint({
      element: this.$headerTriggerElement[0],
      handler: function (direction) {
        if (direction == 'down') {
          _this.$siteHeader.addClass('site-header--dark');
        } else {
          _this.$siteHeader.removeClass('site-header--dark');
        }
      },
    });
  }

  createPageSectionWaypoints() {
    var _this = this;
    var that = _this;
    this.$pageSections.each(function () {
      var _this = this;
      new Waypoint({
        element: _this,
        handler: function (direction) {
          if (direction == 'down') {
            var matchingHeaderLink = _this.getAttribute('data-matching-link');
            that.$headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },

        offset: '18%',
      });

      new Waypoint({
        element: _this,
        handler: function (direction) {
          if (direction == 'up') {
            var matchingHeaderLink = _this.getAttribute('data-matching-link');
            that.$headerLinks.removeClass('is-current-link');
            $(matchingHeaderLink).addClass('is-current-link');
          }
        },

        offset: '-40%',
      });
    });
  }
}

export default StickyHeader;
