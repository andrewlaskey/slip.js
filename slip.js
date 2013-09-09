/*!
 * Slip
 * http://idiom.co
 * 
 *
 * Created by Idiom (@idiom_)
 */

;(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = "slip",
        defaults = {
            easing   : 'easeInOutQuad',
            speed  : 400  
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;
        this.$element = $(this.element);

        this.options = $.extend( {}, defaults, options );

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        init: function() {

            var self = this;

            //identify this slider, since there could be multiple on the page
            this.ref = this.$element.attr('data-slip-id');

            //find the navigation for this slider
            this.$nav = $('[data-slip-nav=' + this.ref + ']');

            //get the number of panes
            this.panes = this.$element.children('ul').children('li').length;

            //prepare it all
            this.setUpCarousel();

            //and bindings for click events
            this.$nav.find('button').bind('click', function() {
                self.navClick(this);
            });
            
        },

        setUpCarousel: function() {
            var self = this;

            //set the width of the ul to the total width of all the panes
            this.$element.children('ul').css({
                'width': self.panes * 100 + '%',
                'position' : 'relative'
            });

            //set the width of each pane to the proper fraction of the total
            self.$element.children('ul').children('li').css({
                'width': 100 / self.panes + '%'
            });

            //activate the first navigation element
            self.$nav.find('li:first-child').children('button').addClass('active');
        },

        slideTo: function(n) {
            var self = this;

            if ( n >= 0 && n <= self.panes ) {
                this.$element.children('ul').animate({'left': '-' + (100 * n) + '%'}, self.options.speed, self.options.easing);
            }
        },

        navClick: function(that) {
            var self = this;

            //slide to selected pane
            self.slideTo($(that).attr('data-slip-to'));

            //update nav buttons
            $(that).parent().siblings().children('button').removeClass('active');
            $(that).addClass('active');
        }

        
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );