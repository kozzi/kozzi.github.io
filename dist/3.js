webpackJsonp([3],{

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
  exports.push([module.id, ".Hero_hero_3zx {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block\n}\n.Hero_hero_3zx img {\n  width: 100%;\n  box-shadow: 0 5px 20px -5px #8fa2ae\n}\n", "", {"version":3,"sources":["/./pages/work/Hero.css"],"names":[],"mappings":"AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,cAAe;CAMhB;AAJC;EACE,YAAY;EACZ,mCAA6C;CAC9C","file":"Hero.css","sourcesContent":["@import '../../static/styles/colours.css';\n\n.hero {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block;\n\n  & img {\n    width: 100%;\n    box-shadow: 0 5px 20px -5px var(--dark-grey);\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
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

/***/ 211:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "732558e57df37a5b78732c3652c6cb90.png";

/***/ },

/***/ 222:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(25);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _Link = __webpack_require__(43);
  
  var _Link2 = _interopRequireDefault(_Link);
  
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
  
  var _card = __webpack_require__(742);
  
  var _card2 = _interopRequireDefault(_card);
  
  var _sketch = __webpack_require__(743);
  
  var _sketch2 = _interopRequireDefault(_sketch);
  
  var _sketch3 = __webpack_require__(744);
  
  var _sketch4 = _interopRequireDefault(_sketch3);
  
  var _sketch5 = __webpack_require__(745);
  
  var _sketch6 = _interopRequireDefault(_sketch5);
  
  var _youtube = __webpack_require__(746);
  
  var _youtube2 = _interopRequireDefault(_youtube);
  
  var _youtube3 = __webpack_require__(747);
  
  var _youtube4 = _interopRequireDefault(_youtube3);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var PawndaPage = function PawndaPage(props) {
    return _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(_Hero2.default, { path: _hero2.default, alt: 'Kalashnikov Pawn-da' }),
      _react2.default.createElement(
        _Title2.default,
        null,
        'Pawn-da YouTube Banner Art'
      ),
      _react2.default.createElement(
        _Snippet2.default,
        null,
        _react2.default.createElement(
          'p',
          null,
          'Tony Rotella is a chess expert and author of the chess book, ',
          _react2.default.createElement(
            'a',
            { href: 'https://smile.amazon.com/Killer-Sicilian-Fighting-1e4-Kalashnikov/dp/1857446658/' },
            'The Killer Sicilian'
          ),
          '. He is well known in the online chess community and also runs his own YouTube chess channel.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'I designed and illustrated the banner that he currently uses for his channel.'
        )
      ),
      _react2.default.createElement('img', { src: _sketch2.default, className: _styles2.default.fullWidthImage, alt: 'Panda sketches' }),
      _react2.default.createElement(
        'h2',
        null,
        'Token of thanks'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This design was initially for a physical hand drawn card that I snailmailed to Tony, as a token of thanks for his generosity in something he did for me. He loved the design so much that he wanted to make it his YouTube channel banner, so it was later digitized into the final product you see above.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Design process'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Much like the ',
        _react2.default.createElement(
          _Link2.default,
          { to: '/work/scandi' },
          'Team Scandi art'
        ),
        ', I wanted to draw something on the card that Tony would appreciate, and perhaps even chuckle at.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I started with the following themes:'
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
            'Panda:'
          ),
          ' Because that\'s Tony\'s favourite animal :P There\'s plenty of banter between us about this on Twitter.'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            'Sicilian/Kalashnikov chess opening:'
          ),
          ' One of Tony\'s favourite chess openings. In fact, he published a very comprehensive video series on it on YouTube, and had written an entire book about it.'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Brainstorming'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The Kalashnikov is a chess opening around gaining central space on the board, and forcing white\'s knight to the edge of the board (the a3 square specifically), which is not a place you generally want your knight to be. So I played around with these ideas in my sketches.'
      ),
      _react2.default.createElement('img', { src: _sketch4.default, className: _styles2.default.fullWidthImage, alt: 'Kalashnikov opening sketches' }),
      _react2.default.createElement('img', { src: _sketch6.default, className: _styles2.default.fullWidthImage, alt: 'Kalashnikov opening sketches' }),
      _react2.default.createElement(
        'h2',
        null,
        'Final Card'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This was close to final version of the hand-drawn that was snail mailed to him. I had limited pencil crayons on hand, so I coloured everything with what I had (mostly primary colours).'
      ),
      _react2.default.createElement('img', { src: _card2.default, className: _styles2.default.fullWidthImage, alt: 'Hand drawn card' }),
      _react2.default.createElement(
        'p',
        null,
        'He loved it so much, I eventually digitized it for him.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'YouTube has very ',
        _react2.default.createElement(
          'a',
          { href: 'https://support.google.com/youtube/answer/2972003' },
          'specific requirements'
        ),
        ' around where the primary content should be, and what parts of the illustration would be cut off on various device form factors (from mobile phones, to 60" TVs). I took these requirements into account and relaid out the elements of the illustration so that it is fit for YouTube.'
      ),
      _react2.default.createElement('img', { src: _youtube2.default, className: _styles2.default.fullWidthImage, alt: 'Artwork made to fit YouTube layout' }),
      _react2.default.createElement('img', { src: _youtube4.default, className: _styles2.default.fullWidthImage, alt: 'Artwork made to fit YouTube layout' }),
      _react2.default.createElement(
        'p',
        null,
        'You can see the illustration in action on his ',
        _react2.default.createElement(
          'a',
          { href: 'https://www.youtube.com/user/TonyRotella' },
          'YouTube channel'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Software and tools'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Illustrator, Photoshop, and good old-fashioned pen and paper'
      ),
      _react2.default.createElement(
        _BackButton2.default,
        { className: _styles2.default.backLink },
        '← Return to portfolio'
      )
    );
  };
  
  exports.default = PawndaPage;

/***/ },

/***/ 742:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "c455e859240d693b6162fd18ee68a790.jpg";

/***/ },

/***/ 743:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "a3cfe22d70601410a9f9dfc66febfe8c.jpg";

/***/ },

/***/ 744:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "dc6a089c080fc5ec7c64a9afe08f4d8d.jpg";

/***/ },

/***/ 745:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "9665d9676d76d3fda879f5ba59b7cee9.jpg";

/***/ },

/***/ 746:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "fd99627876a9341cc43a33d547bf581b.jpg";

/***/ },

/***/ 747:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "d190c69f604c83a6c339dc96fd00f807.png";

/***/ }

});
//# sourceMappingURL=3.js.map?ea8518c6c67c37559fdf