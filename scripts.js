jQuery(document).ready(function($) {

  /** @constructor mobileNavCollapse */
  function mobileNavCollapse($target) {
    var _self = this;

    _self.config = {
      subMenuClass: 'sub-menu'
    };

    _self.init($target);
  }

  mobileNavCollapse.prototype = {
    /**
    *   Here we cache a few DOM elements that we are gonna use later throughout the plugin.
    *   <br> Ofcourse we attach them to the '_self' which in turn points to 'this'
    *   @param {HTMLElement} $target - The '$target' DOM element that comes far far away from the constructor.
    *     <br> We use it here so that we can attach it to the class and utilize it later in the other methods in the class.
    *   @memberof mobileNavCollapse
    *   @instance
    */
    cacheDOM: function ($target) {
      var _self = this;

      _self.$target = $target;
      _self.$firstLevelLi = _self.$target.find('ul li.menu-item-has-children');
      _self.$firstLevelSubMenu = _self.$firstLevelLi.find('.' + _self.config.subMenuClass);
    },
    /**
    *   This is the first method that gets called from the constructor to initialize the plugin.
    *   @param {HTMLElement} $target - The '$target' DOM element that comes from the constructor.
    *   @memberof mobileNavCollapse
    *   @instance
    */
    init: function($target) {
      var _self = this;

      _self.cacheDOM($target);
      _self.collapseOnInit();
      _self.injectCollapseTriggerButton();
    },
    /**
    *   Checks whether the nav items with children are already collapsed and if they are not it collapses them.
    *   @memberof mobileNavCollapse
    *   @instance
    */
    collapseOnInit: function() {
      var _self = this;

      if (_self.$firstLevelSubMenu.is(':visible')) {
        _self.$firstLevelSubMenu.slideUp();
      }
    },
    /**
    *   Appends the nav collapse trigger buttons to the DOM and it attaches a click event to them.
    *   @memberof mobileNavCollapse
    *   @instance
    */
    injectCollapseTriggerButton: function() {
      var _self = this;

      _self.$triggers = $('<span>').prependTo(_self.$firstLevelLi.find('> a'))
        .addClass('mobile-nav-expand-trigger fa fa-angle-down')
        .on('click', _self.onExpandTriggerClick.bind(_self));
    },
    /**
    *   Slides up and down the sub menus
    *   @listens Click
    *   @memberof mobileNavCollapse
    *   @instance
    */
    onExpandTriggerClick: function(ev) {
      var _self = this;

      ev.preventDefault();

      var $target = $(event.currentTarget);
      $target.toggleClass('js-submenu-expanded');
      $target.closest('li').find('> .' + _self.config.subMenuClass).slideToggle();
    }
  }

  // Here we initialize the damn thing and we give it the '.handheld-navigation' as a reference :)
  new mobileNavCollapse($('.handheld-navigation'));

});
