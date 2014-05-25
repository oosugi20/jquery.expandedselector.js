/*! jquery.expandedselector.js (git@github.com:oosugi20/jquery.expandedselector.js.git)
* 
 * lastupdate: 2014-05-26
 * version: 0.1.0
 * author: Makoto OOSUGI <oosugi20@gmail.com>
 * License: MIT
 */
;(function ($, window, undefiend) {
'use script';

var MODULE_NAME = 'ExpandedSelector';
var PLUGIN_NAME = 'expandedselector';
var Module;


/**
 * Module
 */
Module = function (element, options) {
	this.el = element;
	this.$el = $(element);
	this.options = $.extend({
	}, options);
};

(function (fn) {
	/**
	 * init
	 */
	fn.init = function () {
		this.$option = this.$el.find('option');

		var html = '<ul class="js-expandedselector">';
		this.$option.each(function () {
			var $this = $(this);
			var value = $this.attr('value');
			var text = $this.text();
			if (value) {
				html += '<li class="js-expandedselector-item"><a href="' + value + '">' + text + '</a></li>';

			}
		});
		html += '</ul>';

		$(html).insertAfter(this.$el);
		this.$el.remove();
	};

})(Module.prototype);


// set jquery.fn
$.fn[PLUGIN_NAME] = function (options) {
	return this.each(function () {
		var module;
		if (!$.data(this, PLUGIN_NAME)) {
			module = new Module(this, options);
			$.data(this, PLUGIN_NAME, module);
			module.init();
		}
	});
};

// set global
$[MODULE_NAME] = Module;

})(jQuery, this);
