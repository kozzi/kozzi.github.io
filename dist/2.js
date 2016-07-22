webpackJsonp([2],{

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

/***/ 214:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "80254170f940ab350a8532e238cec5eb.jpg";

/***/ },

/***/ 224:
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
  
  var _snapping = __webpack_require__(214);
  
  var _snapping2 = _interopRequireDefault(_snapping);
  
  var _snapping3 = __webpack_require__(756);
  
  var _snapping4 = _interopRequireDefault(_snapping3);
  
  var _beforesnap = __webpack_require__(755);
  
  var _beforesnap2 = _interopRequireDefault(_beforesnap);
  
  var _aftersnap = __webpack_require__(754);
  
  var _aftersnap2 = _interopRequireDefault(_aftersnap);
  
  var _whiteboard = __webpack_require__(757);
  
  var _whiteboard2 = _interopRequireDefault(_whiteboard);
  
  var _whiteboard3 = __webpack_require__(758);
  
  var _whiteboard4 = _interopRequireDefault(_whiteboard3);
  
  var _snapping5 = __webpack_require__(608);
  
  var _snapping6 = _interopRequireDefault(_snapping5);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var SnappingPage = function SnappingPage(props) {
    return _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(_Hero2.default, { path: _snapping2.default, alt: 'Multitasking on Tablet OSes' }),
      _react2.default.createElement(
        _Title2.default,
        null,
        'Multitasking in a tablet OS (Part 2)'
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
      _react2.default.createElement('img', { src: _snapping4.default, className: _styles2.default.fullWidthImage, alt: 'Snapped apps side by side' }),
      _react2.default.createElement(
        'h2',
        null,
        'Background'
      ),
      _react2.default.createElement(
        'p',
        null,
        'This is a ',
        _react2.default.createElement(
          _Link2.default,
          { to: '/work/switching' },
          'continuation of the building multitasking capabilities in a tablet OS'
        ),
        '. Snapping, which allows a user to easily position two apps side-by-side, addresses the other part of multitasking, where users are using two or more apps at once.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Design goals'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Compared to serial multitasking, my hunch told me that side-by-side multitasking will be less common, though it provides a lot of valuable to those that use it.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'In other words, while I would like to make this experience easy, fast and intuitive, I do not want it to get in the way of ',
        _react2.default.createElement(
          _Link2.default,
          { to: '/work/switching' },
          'going back to the most recent app'
        ),
        '.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Sketching and prototyping'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Trigger explorations: How do I get from this state...'
      ),
      _react2.default.createElement('img', { src: _beforesnap2.default, className: _styles2.default.fullWidthImage, alt: 'One app on screen' }),
      _react2.default.createElement(
        'p',
        null,
        '...to this state?'
      ),
      _react2.default.createElement('img', { src: _aftersnap2.default, className: _styles2.default.fullWidthImage, alt: 'Two apps side by side' }),
      _react2.default.createElement(
        'p',
        null,
        'Should I build a mode for "app manipulation"?'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Should users be allowed to have more than 2 app side by side?'
      ),
      _react2.default.createElement(
        'p',
        null,
        'During these explorations, I noticed there were other flows where the user is also manipulating an app: when switching to a previous app (dragging the app from the left edge). I wondered if I could use this opportunity to also let the user snap this app side by side with the current one? At the time, I thought it was cool way to build on top an existing feature (',
        _react2.default.createElement(
          'em',
          null,
          '"Oooh! Reducing concepts! How clever!"'
        ),
        '), and we built a prototype of that.'
      ),
      _react2.default.createElement('img', { src: _whiteboard2.default, className: _styles2.default.fullWidthImage, alt: 'Whiteboard brainstorm' }),
      _react2.default.createElement('img', { src: _whiteboard4.default, className: _styles2.default.fullWidthImage, alt: 'Whiteboard brainstorm' }),
      _react2.default.createElement(
        'h2',
        null,
        'Iterating'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Upon user testing however, we realized that the app at the top of the "back stack" isn\'t usually the app user wanted to snap. Put another way, the app the user wants to snap isn\'t the most recently used app. In fact, as we watched users try to use this feature, it became an awkward dance of:'
      ),
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          null,
          'I\'m looking at the app I want to snap'
        ),
        _react2.default.createElement(
          'li',
          null,
          'I figure out that I have to switch away from it so that said app will be at the top of the backstack'
        ),
        _react2.default.createElement(
          'li',
          null,
          'I bring it back in from the side so that I can snap it'
        )
      ),
      _react2.default.createElement(
        'p',
        null,
        'I took feedback from the studies and continued to look for other ways a user can put two apps side by side.'
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Shipping design'
      ),
      _react2.default.createElement(
        'p',
        null,
        'The final shipped design lets user to grab the app on screen, and snap it to the side directly, which is far more intuitive and easy. (',
        _react2.default.createElement(
          'em',
          null,
          'Note: This is still not *perfect* as it competes with another gesture, but that\'s out of scope of this project. You can ask me more about it person; I can go on forever.'
        ),
        ' )'
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
            _react2.default.createElement('source', { src: _snapping6.default, type: 'video/mp4' }),
            'Your browser does not support the video tag.'
          )
        )
      ),
      _react2.default.createElement(
        'h2',
        null,
        'Snap design patterns'
      ),
      _react2.default.createElement(
        'p',
        null,
        'As part of building this feature, I was also responsible for producing design guidelines for how apps should think about their snapped states, and the transition in and out of it.'
      ),
      _react2.default.createElement(
        'p',
        null,
        'For this, I produced content and spoke at the ',
        _react2.default.createElement(
          'a',
          { href: 'https://channel9.msdn.com/events/Windows-Camp/Windows-8-UX-Fundamentals-Training-Workshop-2012/WUX-006' },
          'Windows UX Training workshop'
        ),
        ' in 2012. Below is the recorded presentation.'
      ),
      _react2.default.createElement(
        'div',
        { className: _styles2.default.videoContainer },
        _react2.default.createElement(
          'div',
          { className: _styles2.default.video },
          _react2.default.createElement('iframe', { src: 'https://channel9.msdn.com/Events/Windows-Camp/Windows-8-UX-Fundamentals-Training-Workshop-2012/WUX-006/player', allowFullScreen: true, frameBorder: '0' })
        )
      ),
      _react2.default.createElement(
        _BackButton2.default,
        { className: _styles2.default.backLink },
        '← Return to portfolio'
      )
    );
  };
  
  exports.default = SnappingPage;

/***/ },

/***/ 608:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "1dbe576ec62a17d03c00e02e6a59d92e.mp4";

/***/ },

/***/ 754:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "6fd0240a1587b2aff397b835178f0124.jpg";

/***/ },

/***/ 755:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "589ecb05464a14f9aacff499b6bbd178.jpg";

/***/ },

/***/ 756:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "309344f5f8cf93035cafb95bb1c01878.jpg";

/***/ },

/***/ 757:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "cfcc5cc67eff9298bb1785a3db3757e4.jpg";

/***/ },

/***/ 758:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "ab8cd366103f3e6df6e09d90bd9754fe.jpg";

/***/ }

});
//# sourceMappingURL=2.js.map?7958b3802dd4724b9f8c