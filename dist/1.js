webpackJsonp([1],{

/***/ 25:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(21);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(20);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactEasyTransition = __webpack_require__(64);
  
  var _reactEasyTransition2 = _interopRequireDefault(_reactEasyTransition);
  
  var _Header = __webpack_require__(52);
  
  var _Header2 = _interopRequireDefault(_Header);
  
  var _MainContent = __webpack_require__(53);
  
  var _MainContent2 = _interopRequireDefault(_MainContent);
  
  var _Footer = __webpack_require__(51);
  
  var _Footer2 = _interopRequireDefault(_Footer);
  
  __webpack_require__(72);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);
  
    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(Layout).apply(this, arguments));
    }
  
    (0, _createClass3.default)(Layout, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        window.scrollTo(0, 0);
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactEasyTransition2.default,
            {
              path: this.props.route.path,
              initialStyle: { opacity: 0 },
              transition: 'opacity 0.3s ease-in',
              finalStyle: { opacity: 1 }
            },
            _react2.default.createElement(_Header2.default, { useLightFill: false }),
            _react2.default.createElement(
              _MainContent2.default,
              null,
              this.props.children
            ),
            _react2.default.createElement(_Footer2.default, null)
          )
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);
  
  Layout.propTypes = {
    children: _react.PropTypes.node,
    route: _react.PropTypes.object
  };
  exports.default = Layout;

/***/ },

/***/ 50:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(17);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(18);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(19);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(21);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(20);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _history = __webpack_require__(73);
  
  var _history2 = _interopRequireDefault(_history);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var BackButton = function (_React$Component) {
    (0, _inherits3.default)(BackButton, _React$Component);
  
    function BackButton() {
      var _Object$getPrototypeO;
  
      var _temp, _this, _ret;
  
      (0, _classCallCheck3.default)(this, BackButton);
  
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
  
      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_Object$getPrototypeO = (0, _getPrototypeOf2.default)(BackButton)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.goBack = function (event) {
        event.preventDefault();
        _history2.default.goBack();
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }
  
    (0, _createClass3.default)(BackButton, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          this.props,
          _react2.default.createElement(
            'a',
            { href: '/', onClick: this.goBack },
            this.props.children
          )
        );
      }
    }]);
    return BackButton;
  }(_react2.default.Component);
  
  BackButton.propTypes = {
    children: _react.PropTypes.node
  };
  BackButton.defaultProps = {
    children: '&#8592; Go back'
  };
  exports.default = BackButton;

/***/ },

/***/ 54:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Hero = __webpack_require__(68);
  
  var _Hero2 = _interopRequireDefault(_Hero);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Hero = function Hero(props) {
    return _react2.default.createElement(
      'div',
      { className: _Hero2.default.hero },
      _react2.default.createElement('img', { src: props.path, alt: '{props.alt}' })
    );
  };
  
  Hero.propTypes = {
    path: _react.PropTypes.string.isRequired,
    alt: _react.PropTypes.string
  };
  
  exports.default = Hero;

/***/ },

/***/ 55:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Snippet = __webpack_require__(69);
  
  var _Snippet2 = _interopRequireDefault(_Snippet);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Snippet = function Snippet(props) {
    return _react2.default.createElement(
      'div',
      { className: _Snippet2.default.snippet },
      props.children
    );
  };
  
  Snippet.propTypes = {
    children: _react.PropTypes.node
  };
  
  exports.default = Snippet;

/***/ },

/***/ 56:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Title = __webpack_require__(70);
  
  var _Title2 = _interopRequireDefault(_Title);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Title = function Title(props) {
    return _react2.default.createElement(
      'div',
      { className: _Title2.default.title },
      _react2.default.createElement(
        'h1',
        null,
        props.children
      )
    );
  };
  
  Title.propTypes = {
    children: _react.PropTypes.string
  };
  
  exports.default = Title;

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".Hero_hero_3zx {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block\n}\n.Hero_hero_3zx img {\n  width: 100%;\n  box-shadow: 0 5px 20px -5px #8fa2ae\n}\n@media (max-width: 500px) {\n  .Hero_hero_3zx img {\n    width: 100vw;\n    position: relative;\n    left: -20px\n  }\n}\n", "", {"version":3,"sources":["/./pages/work/Hero.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,cAAe;CAYhB;AAVC;EACE,YAAY;EACZ,mCAA6C;CAO9C;AALC;EAAA;IACE,aAAa;IACb,mBAAmB;IACnB,WAAY;GACb;CAAA","file":"Hero.css","sourcesContent":["@import '../../static/styles/colours.css';\n\n.hero {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block;\n\n  & img {\n    width: 100%;\n    box-shadow: 0 5px 20px -5px var(--dark-grey);\n\n    @media (width <= 500px) {\n      width: 100vw;\n      position: relative;\n      left: -20px;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"hero": "Hero_hero_3zx"
  };

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".Snippet_snippet_2ML {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 80px\n}\n\n  @media (max-width: 768px) {\n\n  .Snippet_snippet_2ML {\n    width: 100%;\n    float: none;\n    margin-left: 0;\n    margin-right: 0\n  }\n  }\n", "", {"version":3,"sources":["/./pages/work/Snippet.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,iBAAiB;EACjB,mBAAoB;CAQrB;;EANC;;EAAA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAgB;GACjB;GAAA","file":"Snippet.css","sourcesContent":[".snippet {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 80px;\n\n  @media (width <= 768px) {\n    width: 100%;\n    float: none;\n    margin-left: 0;\n    margin-right: 0;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"snippet": "Snippet_snippet_2ML"
  };

/***/ },

/***/ 62:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".Title_title_3W4 {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%\n}\n\n  @media (max-width: 768px) {\n\n  .Title_title_3W4 {\n    width: 100%;\n    float: none;\n    display: block;\n    margin-left: 0;\n    margin-right: 0\n  }\n  }\n\n  .Title_title_3W4 h1 {\n  margin: 1em 0;\n  padding: 0;\n  background: none;\n  font-size: 46px;\n  color: #527ea7;\n  text-transform: none;\n  text-align: right\n}\n\n  @media (max-width: 768px) {\n\n  .Title_title_3W4 h1 {\n    text-align: center\n  }\n}\n", "", {"version":3,"sources":["/./pages/work/Title.css"],"names":[],"mappings":"AAGA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,gBAAiB;CAuBlB;;EArBC;;EAAA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,eAAgB;GACjB;GAAA;;EAED;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,gBAAqB;EACrB,eAAmB;EACnB,qBAAqB;EACrB,iBAAkB;CAKnB;;EAHC;;EAAA;IACE,kBAAmB;GACpB;CAAA","file":"Title.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.title {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%;\n\n  @media (width <= 768px) {\n    width: 100%;\n    float: none;\n    display: block;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & h1 {\n    margin: 1em 0;\n    padding: 0;\n    background: none;\n    font-size: var(--h1);\n    color: var(--blue);\n    text-transform: none;\n    text-align: right;\n\n    @media (width <= 768px) {\n      text-align: center;\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"title": "Title_title_3W4"
  };

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".styles_content_26t {\n  clear: both;\n}\n.styles_fullWidthImage_3kJ {\n  display: block;\n  max-width: 100%;\n  box-shadow: 0 5px 20px -5px #8fa2ae;\n  margin: 40px auto;\n}\n.styles_halfWidthImage_2BH {\n  max-width: 40%;\n  box-shadow: 0 5px 20px -5px #8fa2ae;\n  margin: 20px 5%;\n}\n.styles_videoContainer_2H7 {\n  width: 80%;\n  margin: 40px auto\n}\n@media (max-width: 768px) {\n  .styles_videoContainer_2H7 {\n    width: 100%;\n  }\n  }\n.styles_video_3Y- {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden\n}\n.styles_video_3Y- iframe,\n  .styles_video_3Y- video {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.styles_backLink_zD9 {\n  text-align: center;\n  margin-top: 50px\n}\n.styles_backLink_zD9 a {\n  background: #527ea7;\n  color: #e5ebf0;\n  padding: 5px 10px;\n  text-decoration: none;\n  -webkit-transition-property: background;\n  transition-property: background;\n  -webkit-transition-duration: 0.3s;\n          transition-duration: 0.3s;\n  -webkit-transition-timing-function: ease-out;\n          transition-timing-function: ease-out;\n}\n.styles_backLink_zD9 a:hover,\n    .styles_backLink_zD9 a:active,\n    .styles_backLink_zD9 a:focus {\n  background: #f4e96b;\n  color: #30537d;\n}\n", "", {"version":3,"sources":["/./pages/work/styles.css"],"names":[],"mappings":"AAGA;EACE,YAAY;CACb;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,oCAA6C;EAC7C,kBAAkB;CACnB;AAED;EACE,eAAe;EACf,oCAA6C;EAC7C,gBAAgB;CACjB;AAED;EACE,WAAW;EACX,iBAAkB;CAKnB;AAHC;EAAA;IACE,YAAY;GACb;GAAA;AAGH;EACE,mBAAmB;EACnB,uBAAuB;EACvB,UAAU;EACV,gBAAiB;CAUlB;AARC;;EAEE,mBAAmB;EACnB,OAAO;EACP,YAAY;EACZ,aAAa;EACb,UAAU;CACX;AAGH;EACE,mBAAmB;EACnB,gBAAiB;CAkBlB;AAhBC;EACE,oBAAkC;EAClC,eAA2B;EAC3B,kBAA+B;EAC/B,sBAAsB;EACtB,wCAAgC;EAAhC,gCAAgC;EAChC,kCAA0B;UAA1B,0BAA0B;EAC1B,6CAAqC;UAArC,qCAAqC;CAQtC;AANC;;;EAGE,oBAAwC;EACxC,eAAiC;CAClC","file":"styles.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.content {\n  clear: both;\n}\n\n.fullWidthImage {\n  display: block;\n  max-width: 100%;\n  box-shadow: 0 5px 20px -5px var(--dark-grey);\n  margin: 40px auto;\n}\n\n.halfWidthImage {\n  max-width: 40%;\n  box-shadow: 0 5px 20px -5px var(--dark-grey);\n  margin: 20px 5%;\n}\n\n.videoContainer {\n  width: 80%;\n  margin: 40px auto;\n\n  @media (width <= 768px) {\n    width: 100%;\n  }\n}\n\n.video {\n  position: relative;\n  padding-bottom: 56.25%;\n  height: 0;\n  overflow: hidden;\n\n  & iframe,\n  & video {\n    position: absolute;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    border: 0;\n  }\n}\n\n.backLink {\n  text-align: center;\n  margin-top: 50px;\n\n  & a {\n    background: var(--button-bgcolor);\n    color: var(--button-color);\n    padding: var(--button-padding);\n    text-decoration: none;\n    transition-property: background;\n    transition-duration: 0.3s;\n    transition-timing-function: ease-out;\n\n    &:hover,\n    &:active,\n    &:focus {\n      background: var(--button-hover-bgcolor);\n      color: var(--button-hover-color);\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"content": "styles_content_26t",
  	"fullWidthImage": "styles_fullWidthImage_3kJ",
  	"halfWidthImage": "styles_halfWidthImage_2BH",
  	"videoContainer": "styles_videoContainer_2H7",
  	"video": "styles_video_3Y-",
  	"backLink": "styles_backLink_zD9"
  };

/***/ },

/***/ 68:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(60);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(4)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Hero.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Hero.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 69:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(61);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(4)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Snippet.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Snippet.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 70:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(62);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(4)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Title.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./Title.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 71:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(63);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(4)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./styles.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 220:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(25);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _BackButton = __webpack_require__(50);
  
  var _BackButton2 = _interopRequireDefault(_BackButton);
  
  var _Hero = __webpack_require__(54);
  
  var _Hero2 = _interopRequireDefault(_Hero);
  
  var _Title = __webpack_require__(56);
  
  var _Title2 = _interopRequireDefault(_Title);
  
  var _Snippet = __webpack_require__(55);
  
  var _Snippet2 = _interopRequireDefault(_Snippet);
  
  var _styles = __webpack_require__(71);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _hero = __webpack_require__(211);
  
  var _hero2 = _interopRequireDefault(_hero);
  
  var _stock = __webpack_require__(741);
  
  var _stock2 = _interopRequireDefault(_stock);
  
  var _sketch = __webpack_require__(739);
  
  var _sketch2 = _interopRequireDefault(_sketch);
  
  var _sketch3 = __webpack_require__(740);
  
  var _sketch4 = _interopRequireDefault(_sketch3);
  
  var _logo_sketch = __webpack_require__(735);
  
  var _logo_sketch2 = _interopRequireDefault(_logo_sketch);
  
  var _deweywire = __webpack_require__(734);
  
  var _deweywire2 = _interopRequireDefault(_deweywire);
  
  var _dewey = __webpack_require__(733);
  
  var _dewey2 = _interopRequireDefault(_dewey);
  
  var _deweySplash = __webpack_require__(732);
  
  var _deweySplash2 = _interopRequireDefault(_deweySplash);
  
  var _screenshot = __webpack_require__(736);
  
  var _screenshot2 = _interopRequireDefault(_screenshot);
  
  var _screenshot3 = __webpack_require__(737);
  
  var _screenshot4 = _interopRequireDefault(_screenshot3);
  
  var _screenshot5 = __webpack_require__(738);
  
  var _screenshot6 = _interopRequireDefault(_screenshot5);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var DeweyPage = function DeweyPage(props) {
    return _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(_Hero2.default, { path: _hero2.default, alt: 'Dewey on iOS' }),
      _react2.default.createElement(
        _Title2.default,
        null,
        'Dewey on iOS'
      ),
      _react2.default.createElement(
        _Snippet2.default,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Dewey is an iOS app built using Swift to help me easily search for kindle ebooks in the local public library.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'I designed the user interaction, produced all the visual assets, and finally coded it myself.'
        )
      ),
      _react2.default.createElement('img', { src: _stock2.default, className: _styles2.default.fullWidthImage, alt: 'Dewey on iOS' }),
      _react2.default.createElement(
        'h2',
        null,
        'Problem'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Dewey was created out of frustration for a user flow I find myself repeating over and over again. After all, design is about solving problems :)'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I love borrowing Kindle ebooks from ',
        _react2.default.createElement(
          'a',
          { href: 'http://spl.org' },
          'Seattle Public Library (SPL)'
        ),
        '. But I also love browsing physical bookstores when deciding what I want to read.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'It was pretty frustrating that, whenever I find a physical book in a bookstore that I was interested in, I had to ',
        _react2.default.createElement(
          'em',
          null,
          'manually'
        ),
        ' pull up the mobile-UNfriendly SPL website on my phone, type in the book title, filter the results by ebook, log in, and put a hold on the title on my account.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Dewey aims to simplify that flow by having the app scan the ISBN, talk to ',
        _react2.default.createElement(
          'a',
          { href: 'https://affiliate-program.amazon.com/gp/advertising/api/detail/main.html' },
          'Amazon Product Advertising API'
        ),
        ' to retrieve the book title, send a catalogue search request to SPL\'s website, scrape the results from the page, and then let me put a hold on the title.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Design process'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Here are some early sketches of what this flow could look like.'
      ),
      _react2.default.createElement('img', { src: _sketch2.default, className: _styles2.default.fullWidthImage, alt: 'Early sketches for Dewey\'s UX flow' }),
      _react2.default.createElement('img', { src: _sketch4.default, className: _styles2.default.fullWidthImage, alt: 'Early sketches for Dewey\'s UX flow' }),
      _react2.default.createElement(
        'p',
        null,
        'A primary user design goal for this app is that this scanning/retrieving/holding process has to be quick. It has to be quicker than me doing it manually through my mobile browser, or it defeats the purpose of the app. This led me to design the app to launch directly to the camera scanning screen.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I first walked through the "happy path", where the user successfully finds a book in the library and places a hold on it.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I then considered the various failure/side branches. ',
        _react2.default.createElement(
          'em',
          null,
          '"What if Amazon doesn\'t have the book in its catalogue - what should the user see?"'
        ),
        ', ',
        _react2.default.createElement(
          'em',
          null,
          '"What if the library doesn\'t have it?"'
        ),
        ', ',
        _react2.default.createElement(
          'em',
          null,
          '"What if the user wants to scan multiple books in a row? How do they continue?"'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Development process'
      ),
      _react2.default.createElement(
        'p',
        null,
        'At the time this was initially built (late 2014), Swift was still a very young language, with relatively few tutorials/best practices out there. I primarily worked off of the official Apple documentation to learn Swift on my own.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Although this was a fairly small project to begin with, I divided the project further into little pieces that I can test indivdually before putting the pieces together for the end-to-end flow.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I did this for a few reasons:'
      ),
      _react2.default.createElement(
        'ol',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Progress:'
          ),
          ' It\'s always super encouraging to see progress! Any progress at all! :) When you break something down into smaller pieces, naturally, you will be able to get something working faster, even if it\'s just some text printed in the console to show a returned request from Amazon.'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Separation of concerns:'
          ),
          ' This is just ',
          _react2.default.createElement(
            'a',
            { href: 'https://en.wikipedia.org/wiki/Separation_of_concerns' },
            'good engineering practice'
          ),
          '! Given that a piece of my app requires scaping of the SPL (where I expect the page markup to change often), I wanted to decouple the scraping functionality from the rest of the components so that I can easily maintain and update this independently in the future. Furthermore, should SPL decide to give me access to an API for searching its books, I can easily swap out the scrapper component.'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Easier debugging:'
          ),
          ' When you build a giant monolithic piece of software and wait til the very end to test it, if something doesn\'t work, there are a million reasons for what went wrong. This makes debugging it that much harder. By building it up and testing it in small pieces along the way, it will make narrowing down bugs a lot easier.'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Logo design'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The final logo design, splash screen assets, and colour palette was the last thing I did once I had a mostly working app. Since this was an app for myself, I wanted to personalize it with things I like, such as penguins 🐧!'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Here\'re brainstorming sketches where I explored different ideas for the logo:'
      ),
      _react2.default.createElement('img', { src: _logo_sketch2.default, className: _styles2.default.fullWidthImage, alt: 'Brainstorming logo design' }),
      _react2.default.createElement(
        'p',
        null,
        'You can see I played around with different concepts, including penguins, books, and other scholarly things :) The final logo was drawn in Illustrator and added to the app.'
      ),
      _react2.default.createElement('img', { src: _deweywire2.default, className: _styles2.default.fullWidthImage, alt: 'Logo outline' }),
      _react2.default.createElement('img', { src: _dewey2.default, className: _styles2.default.fullWidthImage, alt: 'Logo' }),
      _react2.default.createElement(
        'h2',
        null,
        'Screenshots'
      ),
      _react2.default.createElement('img', { src: _deweySplash2.default, className: _styles2.default.halfWidthImage, alt: 'iOS splash screen design' }),
      _react2.default.createElement('img', { src: _screenshot2.default, className: _styles2.default.halfWidthImage, alt: 'Screenshot' }),
      _react2.default.createElement('img', { src: _screenshot4.default, className: _styles2.default.halfWidthImage, alt: 'Screenshot' }),
      _react2.default.createElement('img', { src: _screenshot6.default, className: _styles2.default.halfWidthImage, alt: 'Screenshot' }),
      _react2.default.createElement(
        'h2',
        null,
        'Languages, frameworks, and tools'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Illustrator, Photoshop, Swift, Git, Cocoapods, XCode, Interface Builder, Amazon Product Advertising API, and a little web scraping ;)'
      ),
      _react2.default.createElement(
        _BackButton2.default,
        { className: _styles2.default.backLink },
        '← Return to portfolio'
      )
    );
  };
  
  exports.default = DeweyPage;

/***/ },

/***/ 732:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "d8481d9e5d517fe7f8a41305cedff213.jpg";

/***/ },

/***/ 733:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "13c4c8c48cc2197d58cad4a022bf2c91.png";

/***/ },

/***/ 734:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ccfb46ac6cfd7aa321ca669e4513cb6b.gif";

/***/ },

/***/ 735:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "92bb55173d6da37e82bc68af9b9dd974.jpg";

/***/ },

/***/ 736:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "3e54f11610234b62dcbfce19c91382c0.jpg";

/***/ },

/***/ 737:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e7aa6c816c3a5857fb7f0f71257a2380.jpg";

/***/ },

/***/ 738:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "f1564e8e06fbd9a03b0b655991f47fb9.jpg";

/***/ },

/***/ 739:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6b2f14bbc23585b3839a969dda0b6750.jpg";

/***/ },

/***/ 740:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "44171dc143f1c7acafedf6bc7d28df02.jpg";

/***/ },

/***/ 741:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "131912c1bf86b6c9c12f15db7b957d2c.jpg";

/***/ }

});
//# sourceMappingURL=1.js.map?1a54d46ceca36f607b7c