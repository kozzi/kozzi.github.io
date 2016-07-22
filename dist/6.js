webpackJsonp([6],{

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
  exports.push([module.id, ".Hero_hero_3zx {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block\n}\n\n  @media (max-width: 500px) {\n\n  .Hero_hero_3zx {\n    margin: 20px 0\n  }\n  }\n\n  .Hero_hero_3zx img {\n  width: 100%;\n  box-shadow: 0 5px 20px -5px #8fa2ae\n}\n\n  @media (max-width: 500px) {\n\n  .Hero_hero_3zx img {\n    width: 100vw;\n    position: relative;\n    top: -40px;\n    left: -20px\n  }\n}\n", "", {"version":3,"sources":["/./pages/work/Hero.css"],"names":[],"mappings":"AAGA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,oBAAoB;EACpB,mBAAmB;EACnB,cAAe;CAiBhB;;EAfC;;EAAA;IACE,cAAyC;GAC1C;GAAA;;EAED;EACE,YAAY;EACZ,mCAA6C;CAQ9C;;EANC;;EAAA;IACE,aAAa;IACb,mBAAmB;IACnB,WAAW;IACX,WAAsC;GACvC;CAAA","file":"Hero.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.hero {\n  max-width: 100%;\n  margin-top: 80px;\n  margin-bottom: 80px;\n  position: relative;\n  display: block;\n\n  @media (width <= 500px) {\n    margin: var(--page-side-padding-small) 0;\n  }\n\n  & img {\n    width: 100%;\n    box-shadow: 0 5px 20px -5px var(--dark-grey);\n\n    @media (width <= 500px) {\n      width: 100vw;\n      position: relative;\n      top: -40px;\n      left: -var(--page-side-padding-small);\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
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
  exports.push([module.id, ".Title_title_3W4 {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%\n}\n\n  @media (max-width: 768px) {\n\n  .Title_title_3W4 {\n    width: 100%;\n    float: none;\n    display: block;\n    margin-left: 0;\n    margin-right: 0\n  }\n  }\n\n  .Title_title_3W4 h1 {\n  margin: 1em 0;\n  padding: 0;\n  background: none;\n  font-size: 46px;\n  color: #527ea7;\n  text-transform: none;\n  text-align: right\n}\n\n  @media (max-width: 768px) {\n\n  .Title_title_3W4 h1 {\n    text-align: center\n  }\n}\n\n  @media (max-width: 768px) {\n\n  .Title_title_3W4 h1 {\n    margin-top: 0;\n    font-size: 34px\n  }\n}\n", "", {"version":3,"sources":["/./pages/work/Title.css"],"names":[],"mappings":"AAGA;EACE,WAAW;EACX,YAAY;EACZ,gBAAgB;EAChB,gBAAiB;CA4BlB;;EA1BC;;EAAA;IACE,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,eAAe;IACf,eAAgB;GACjB;GAAA;;EAED;EACE,cAAc;EACd,WAAW;EACX,iBAAiB;EACjB,gBAAqB;EACrB,eAAmB;EACnB,qBAAqB;EACrB,iBAAkB;CAUnB;;EARC;;EAAA;IACE,kBAAmB;GACpB;CAAA;;EAED;;EAAA;IACE,cAAc;IACd,eAAqB;GACtB;CAAA","file":"Title.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.title {\n  width: 40%;\n  float: left;\n  margin-left: 5%;\n  margin-right: 5%;\n\n  @media (width <= 768px) {\n    width: 100%;\n    float: none;\n    display: block;\n    margin-left: 0;\n    margin-right: 0;\n  }\n\n  & h1 {\n    margin: 1em 0;\n    padding: 0;\n    background: none;\n    font-size: var(--h1);\n    color: var(--blue);\n    text-transform: none;\n    text-align: right;\n\n    @media (width <= 768px) {\n      text-align: center;\n    }\n\n    @media (width <= 768px) {\n      margin-top: 0;\n      font-size: var(--h2);\n    }\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
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

/***/ 215:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "90eccab271c2ce2f8715102d5735a3a8.jpg";

/***/ },

/***/ 225:
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
  
  var _switching = __webpack_require__(215);
  
  var _switching2 = _interopRequireDefault(_switching);
  
  var _tablet = __webpack_require__(760);
  
  var _tablet2 = _interopRequireDefault(_tablet);
  
  var _lazyswipe = __webpack_require__(759);
  
  var _lazyswipe2 = _interopRequireDefault(_lazyswipe);
  
  var _switchvideo = __webpack_require__(609);
  
  var _switchvideo2 = _interopRequireDefault(_switchvideo);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var SwitchingPage = function SwitchingPage(props) {
    return _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(_Hero2.default, { path: _switching2.default, alt: 'Multitasking on Tablet OSes' }),
      _react2.default.createElement(
        _Title2.default,
        null,
        'Multitasking in a tablet OS (Part 1)'
      ),
      _react2.default.createElement(
        _Snippet2.default,
        null,
        _react2.default.createElement(
          'p',
          null,
          'In 2010, Microsoft started building an OS designed for touch and mobile devices.'
        ),
        _react2.default.createElement(
          'p',
          null,
          'As a user experience PM on the core shell team, I owned the user experience and interaction design of the multitasking features on the new OS. I designed shipped both the switching ("serial" multitasking) and snapping ("side by side" multitasking) features in the shell.'
        )
      ),
      _react2.default.createElement('img', { src: _tablet2.default, className: _styles2.default.fullWidthImage, alt: 'Switching gesture' }),
      _react2.default.createElement(
        'h2',
        null,
        'Background'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Design exploration began for this feature in 2010, when tablet hardware was just hitting the market, and there weren\'t a lot of established patterns yet.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Windows, at the time, was doubling down on building an operating system where touch input will be a first-class citizen. This is in contrast to where touch is simply bolted on a primarily desktop system (a la Windows XP Tablet PC edition in 2001).'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The whole organization was betting on touch devices.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Problem exploration'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Windows has always been great at multi-tasking, and prides itself on that. How do I translate this power in multitasking from a mouse + desktop environment, to one where touch is the primary input and apps are typically "immersive"?'
      ),
      _react2.default.createElement(
        'p',
        null,
        'As I explored this problem further, I realize that multi-tasking flows can be broken down into two types:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            '"Serial" multitasking:'
          ),
          ' Where the user has one app on the screen at a time, but they flip between tasks in order (hence, "serial")'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'strong',
            null,
            '"Side by side" multitasking:'
          ),
          ' Where the user can see and use multiple things side by side, simultaneously.'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Serial multitasking is explored below. Side-by-side multitasking explorations are documented ',
        _react2.default.createElement(
          _Link2.default,
          { to: '/work/snapping' },
          'here'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Design goals'
      ),
      _react2.default.createElement(
        'p',
        null,
        'On the desktop, user can switch to any app using the taskbar at the bottom of the screen, or — if you\'re savvy — to their ',
        _react2.default.createElement(
          'em',
          null,
          'most recently used'
        ),
        ' apps through the keyboard shortcut alt-tab.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'We fairly quickly converged on focusing on helping users do the latter, and started developing prioritized design goals:'
      ),
      _react2.default.createElement(
        'ol',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Going back to your most recent app is ',
          _react2.default.createElement(
            'em',
            null,
            'fast'
          ),
          ' (it should not be slower than going back using the "home screen")'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Going back is easy and intuitive (fast is not good enough if it demands a secret incantation to trigger)'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'I also worked with some assumptions to make progress (based on some existing data on alt-tab usage):'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Going back to the most recent app is the most common action by the user. That is, there is ',
          _react2.default.createElement(
            'em',
            null,
            'diminishing frequency'
          ),
          ' to going back to your 2nd/3rd/',
          _react2.default.createElement(
            'em',
            null,
            'n'
          ),
          'th-most recently used app because — I hypothesized — users don\'t actually remember what\'s further along in their back stack. And they really shouldn\'t need to.'
        ),
        _react2.default.createElement(
          'li',
          null,
          'I believe the natural behaviour for the user is this: if the user is not certain that their app is back there and near the top (i.e. they haven\'t been switching back and forth between these apps and therefore have them top of mind), users will use the "home screen" to do the switching because that flow is predictable (note: they\'re not really consciously thinking about this; it\'s just something they ',
          _react2.default.createElement(
            'em',
            null,
            'do'
          ),
          '). There is nothing wrong with using the "home screen" to switch.'
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Sketching and prototyping'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Trigger explorations:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Swipes from the right'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Double tap home button'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Press and hold home button'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Ergnonomics considerations:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'How are users holding this device?'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Do phone interactions translate?'
        ),
        _react2.default.createElement(
          'li',
          null,
          _react2.default.createElement(
            'em',
            null,
            '(It turns out holding a tablet is very different from holding a phone!)'
          )
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'Visualization explorations:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'Is there an explicit visual "mode" used for switching?'
        ),
        _react2.default.createElement(
          'li',
          null,
          'How does app visually appear to user?'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'And finally, how much do I optimize for switching to most recently used app?'
      ),
      _react2.default.createElement('img', { src: _lazyswipe2.default, className: _styles2.default.fullWidthImage, alt: 'Whiteboard brainstorm' }),
      _react2.default.createElement(
        'h2',
        null,
        'Shipping design'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Below is a snippet of the marketing video describing the interaction around switching between apps, and is what was finally shipped:'
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.videoContainer },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.video },
          _react2.default.createElement(
            'video',
            { controls: true },
            _react2.default.createElement('source', { src: _switchvideo2.default, type: 'video/mp4' }),
            'Your browser does not support the video tag.'
          )
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Key design decisions'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Trigger: Swiping from the edge'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Usability studies showed that users hands tend to be placed close to the edge when holding a tablet-sized device. While home buttons on the phone are usually "thumbable", this was not the case on much larger tablet devices. In fact, forcing the user to reach for the home button ends up being a lot of work on these larger devices. For ergonimic reasons, using an edge swipe as a trigger made sense.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Swiping from the ',
        _react2.default.createElement(
          'em',
          null,
          'left'
        ),
        ' edge'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Secondly, it is fairly established that things "in the past" tend to be spatially placed on the left in our minds, largely due to reading order. So the left edge was shipped, as it felt most intuitive to our users during testing.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'No explicit "switch mode"'
      ),
      _react2.default.createElement(
        'p',
        null,
        'While I allow users to keep switching to older apps, I really focused on making sure switching to the most recent app is extremely fast (and perhaps even a bit fun and playful!). This meant removing the concept of having a visual and explicit "switching mode" that user must enter and exit in the process of switching.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Instead of forcing the user to first enter some sort of "switch mode" to select a recent app they want to go to, I rolled "switching to the last app" into one user action: a swipe from the right edge. If the first app swiped in, is the one the user wanted to switch to (according to testing & data, it was), we are done. The user can start using the app immediately. There\'s no need for the user to select anything and exit a mode.'
      ),
      _react2.default.createElement(
        'h3',
        null,
        'Direct manipulation of the app thumbnail'
      ),
      _react2.default.createElement(
        'p',
        null,
        'I spent a lot of time perfecting the "feel" of that swipe experience. I wanted it to feel authentic, and even a little playful. I wanted to make it feel like the user is manipulating the app directly, and not just some representation of it, like an icon (we called those "remote controls" within the feature crew). So I spent time on little details to make it feel like the app is being pulled and flicked across the screen, including figuring out:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'How the app appears when sliding out of the screen edge under the finger'
        ),
        _react2.default.createElement(
          'li',
          null,
          'Where on the app is positioned relative to the touch point'
        ),
        _react2.default.createElement(
          'li',
          null,
          'When we should and shouldn\'t show "drop" feedback, and what that feedback looks like (there\'s actually a subtly different animation between a "quick swipe" and a more "deliberate swipe" to make the "quick swipe" less jarring and the "deliberate swipe" more useful)'
        )
      ),
      _react2.default.createElement(
        _BackButton2.default,
        { className: _styles2.default.backLink },
        '← Return to portfolio'
      )
    );
  };
  
  exports.default = SwitchingPage;

/***/ },

/***/ 609:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "b2d1b9d3edd6ab973e3deb1073cf7af2.mp4";

/***/ },

/***/ 759:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "578a84e879da5b63e9fec5e93b268f5f.jpg";

/***/ },

/***/ 760:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e46782742dce2e0d75ea5cd33fac8bcf.jpg";

/***/ }

});
//# sourceMappingURL=6.js.map?d0e7c5b6e253839e0de9