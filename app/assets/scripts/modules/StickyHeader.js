// jshint esversion: 6

import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class StickyHeader {
  constructor() {
    this.$siteHeader = $('.site-header');
    this.$headerTriggerElement = $('.large-hero__title');
    this.createHeaderWaypoint();
  }

  createHeaderWaypoint() {
    var _this = this;
    new Waypoint({
      element: this.$headerTriggerElement[0],
      handler: function () {
        _this.$siteHeader.addClass('site-header--dark');
      },
    });
  }
}

export default StickyHeader;
