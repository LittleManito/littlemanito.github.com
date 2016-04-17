webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ },

/***/ 6:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	__webpack_require__(2);
	
	var Page = (function () {
	  function Page() {
	    _classCallCheck(this, Page);
	
	    //nunjucks.configure('html', { autoescape: true });
	    var res = nunjucks.render('components/test.html', { username: 'James' });
	    console.log('res:', res);
	    this.bindEvents();
	  }
	
	  _createClass(Page, [{
	    key: 'bindEvents',
	    value: function bindEvents() {}
	  }]);
	
	  return Page;
	})();
	
	exports['default'] = new Page();
	module.exports = exports['default'];

/***/ }

});
//# sourceMappingURL=page.js.map