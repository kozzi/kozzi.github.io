webpackJsonp([7],{

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

/***/ 217:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Layout = __webpack_require__(25);
  
  var _Layout2 = _interopRequireDefault(_Layout);
  
  var _QuickFacts = __webpack_require__(326);
  
  var _QuickFacts2 = _interopRequireDefault(_QuickFacts);
  
  var _Heart = __webpack_require__(216);
  
  var _Heart2 = _interopRequireDefault(_Heart);
  
  var _styles = __webpack_require__(717);
  
  var _styles2 = _interopRequireDefault(_styles);
  
  var _index = __webpack_require__(776);
  
  var _rainierLadder = __webpack_require__(730);
  
  var _rainierLadder2 = _interopRequireDefault(_rainierLadder);
  
  var _stp = __webpack_require__(731);
  
  var _stp2 = _interopRequireDefault(_stp);
  
  var _calligraphy = __webpack_require__(729);
  
  var _calligraphy2 = _interopRequireDefault(_calligraphy);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AboutPage = function AboutPage(props) {
    return _react2.default.createElement(
      _Layout2.default,
      props,
      _react2.default.createElement(_QuickFacts2.default, null),
      _react2.default.createElement(
        'p',
        { className: _styles2.default.intro },
        'I\'m a designer, developer, and product manager, who recently moved to the beautiful city of Toronto.',
        _react2.default.createElement(_Heart2.default, null)
      ),
      _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: _index.html } }),
      _react2.default.createElement('img', { src: _rainierLadder2.default, alt: 'Climbing Mt Rainier', className: _styles2.default.profileImage }),
      _react2.default.createElement('img', { src: _calligraphy2.default, alt: 'Calligraphy', className: _styles2.default.profileImage }),
      _react2.default.createElement('img', { src: _stp2.default, alt: 'Riding the Seattle-to-Portland route', className: _styles2.default.profileImage })
    );
  }; /**
      * React Static Boilerplate
      * https://github.com/kriasoft/react-static-boilerplate
      *
      * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
      *
      * This source code is licensed under the MIT license found in the
      * LICENSE.txt file in the root directory of this source tree.
      */
  
  exports.default = AboutPage;

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(2);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _QuickFacts = __webpack_require__(716);
  
  var _QuickFacts2 = _interopRequireDefault(_QuickFacts);
  
  var _profile = __webpack_require__(317);
  
  var _profile2 = _interopRequireDefault(_profile);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var QuickFacts = function QuickFacts() {
    return _react2.default.createElement(
      'section',
      { className: _QuickFacts2.default.quickFacts },
      _react2.default.createElement('img', { src: _profile2.default, alt: 'Charing' }),
      _react2.default.createElement(
        'h1',
        null,
        'tl;dr'
      ),
      _react2.default.createElement(
        'p',
        { className: _QuickFacts2.default.heading },
        'School'
      ),
      _react2.default.createElement(
        'p',
        null,
        'University of Waterloo'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Software engineering'
      ),
      _react2.default.createElement(
        'p',
        { className: _QuickFacts2.default.heading },
        'Work'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Microsoft'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Code.org'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Morgan Stanley'
      ),
      _react2.default.createElement(
        'p',
        { className: _QuickFacts2.default.heading },
        'Lived in'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Hong Kong'
      ),
      _react2.default.createElement(
        'p',
        null,
        'London (UK)'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Seattle'
      ),
      _react2.default.createElement(
        'p',
        null,
        'Toronto'
      )
    );
  };
  
  exports.default = QuickFacts;

/***/ },

/***/ 581:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".QuickFacts_quickFacts_Oxv {\n  float: right;\n  width: 200px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  background: #171f2c;\n  color: #8fa2ae;\n  font-size: 16px\n}\n\n  @media (max-width: 500px) {\n\n  .QuickFacts_quickFacts_Oxv {\n    display: none\n  }\n  }\n\n  .QuickFacts_quickFacts_Oxv img {\n  width: 100%;\n  border-radius: 50%\n}\n\n  .QuickFacts_quickFacts_Oxv h1 {\n  padding: 0;\n  background: none;\n  color: #f4e96b;\n  font-size: 34px;\n  text-transform: lowercase\n}\n\n  .QuickFacts_quickFacts_Oxv p {\n  margin: 0;\n  padding: 0\n}\n\n  .QuickFacts_quickFacts_Oxv p.QuickFacts_heading_2DB {\n  margin-top: 20px;\n  color: #e5ebf0;\n  text-transform: uppercase;\n  font-size: 16px;\n  font-weight: bold;\n  letter-spacing: 1px\n}\n", "", {"version":3,"sources":["/./pages/about/QuickFacts.css"],"names":[],"mappings":"AAGA;EACE,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,cAAc;EACd,oBAA8B;EAC9B,eAAwB;EACxB,eAAqB;CAiCtB;;EA/BC;;EAAA;IACE,aAAc;GACf;GAAA;;EAED;EACE,YAAY;EACZ,kBAAmB;CACpB;;EAED;EACE,WAAW;EACX,iBAAiB;EACjB,eAAqB;EACrB,gBAAqB;EACrB,yBAA0B;CAC3B;;EAED;EACE,UAAU;EACV,UAAW;CAWZ;;EATC;EACE,iBAAiB;EACjB,eAAyB;EACzB,0BAA0B;EAC1B,gBAAqB;EACrB,kBAAkB;EAClB,mBAAoB;CACrB","file":"QuickFacts.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.quickFacts {\n  float: right;\n  width: 200px;\n  margin-left: 20px;\n  margin-bottom: 20px;\n  padding: 20px;\n  background: var(--black-blue);\n  color: var(--dark-grey);\n  font-size: var(--h5);\n\n  @media (width <= 500px) {\n    display: none;\n  }\n\n  & img {\n    width: 100%;\n    border-radius: 50%;\n  }\n\n  & h1 {\n    padding: 0;\n    background: none;\n    color: var(--yellow);\n    font-size: var(--h2);\n    text-transform: lowercase;\n  }\n\n  & p {\n    margin: 0;\n    padding: 0;\n\n    &.heading {\n      margin-top: 20px;\n      color: var(--light-grey);\n      text-transform: uppercase;\n      font-size: var(--h5);\n      font-weight: bold;\n      letter-spacing: 1px;\n    }\n\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"quickFacts": "QuickFacts_quickFacts_Oxv",
  	"heading": "QuickFacts_heading_2DB"
  };

/***/ },

/***/ 582:
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(3)();
  // imports
  
  
  // module
  exports.push([module.id, ".styles_intro_3at {\n  color: #527ea7;\n  font-size: 46px\n}\n\n  @media (max-width: 768px) {\n\n  .styles_intro_3at {\n    font-size: 34px\n  }\n  }\n.styles_profileImage_2Rp {\n  width: 33%\n}\n@media (max-width: 500px) {\n\n  .styles_profileImage_2Rp {\n    display: block;\n    width: 100%\n  }\n  }\n", "", {"version":3,"sources":["/./pages/about/styles.css"],"names":[],"mappings":"AAGA;EACE,eAAmB;EACnB,eAAqB;CAKtB;;EAHC;;EAAA;IACE,eAAqB;GACtB;GAAA;AAGH;EACE,UAAW;CAMZ;AAJC;;EAAA;IACE,eAAe;IACf,WAAY;GACb;GAAA","file":"styles.css","sourcesContent":["@import '../../static/styles/colours.css';\n@import '../../static/styles/vars.css';\n\n.intro {\n  color: var(--blue);\n  font-size: var(--h1);\n\n  @media (width <= 768px) {\n    font-size: var(--h2);\n  }\n}\n\n.profileImage {\n  width: 33%;\n\n  @media (width <= 500px) {\n    display: block;\n    width: 100%;\n  }\n}\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"intro": "styles_intro_3at",
  	"profileImage": "styles_profileImage_2Rp"
  };

/***/ },

/***/ 716:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(581);
  if(typeof content === 'string') content = [[module.id, content, '']];
  // add the styles to the DOM
  var update = __webpack_require__(4)(content, {});
  if(content.locals) module.exports = content.locals;
  // Hot Module Replacement
  if(false) {
  	// When the styles change, update the <style> tags
  	if(!content.locals) {
  		module.hot.accept("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./QuickFacts.css", function() {
  			var newContent = require("!!./../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../node_modules/postcss-loader/index.js!./QuickFacts.css");
  			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
  			update(newContent);
  		});
  	}
  	// When the module is disposed, remove the <style> tags
  	module.hot.dispose(function() { update(); });
  }

/***/ },

/***/ 717:
/***/ function(module, exports, __webpack_require__) {

  // style-loader: Adds some css to the DOM by adding a <style> tag
  
  // load the styles
  var content = __webpack_require__(582);
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

/***/ 729:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "13bd74c976103fe06d03d0450099e374.jpg";

/***/ },

/***/ 730:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "18350d09b495b153c1b2992aeddb44c9.jpg";

/***/ },

/***/ 731:
/***/ function(module, exports, __webpack_require__) {

  module.exports = __webpack_require__.p + "e4e4b1c59450da3bb6da75996c684642.jpg";

/***/ },

/***/ 776:
/***/ function(module, exports) {

  module.exports = {"html":"<h2>Designer</h2>\n<p>I am a self-taught UX designer and illustrator.</p>\n<p>I first started building websites at the age of 13, when I was part of an online community of young female web designers — and it was what all the cool girls did :) I wanted my website to look <em>spectacular</em>, which set me off learning everything I could about HTML, CSS, and Photoshop.</p>\n<p>To this day, I still love the entire process of designing and building products. It's incredibly rewarding to see the delight in your users because of something you've made.</p>\n<h2>Developer</h2>\n<p>I hold a bachelor's degree from the <a href=\"https://uwaterloo.ca/software-engineering/\">Software Engineering</a> Co-op program at the <a href=\"http://uwaterloo.ca\">University of Waterloo</a>, where I graduated at the top 10% of my class with <a href=\"https://ugradcalendar.uwaterloo.ca/page/ENG-Deans-Honours-List\">Dean's Honours List</a>. My degree, and its wonderful co-op program, taught me solid CS fundamentals. I understand what well-designed, maintainable, and scalable software looks like.</p>\n<p>My engineering background not only helps me communicate effectively with developers, it also lets me build the product myself, which I love! I am not afraid to dig into a codebase to ship features and fix bugs, and I take pride knowing I can do those things properly.</p>\n<h2>Product Manager</h2>\n<p>For several years, I worked in Seattle as user experience PM at <a href=\"http://microsoft.com\">Microsoft</a>, where I was responsible for designing and shipping features in large user-facing products.</p>\n<p>I understand what it takes to collaborate with a team of developers, testers, designers, user researchers, and marketing to ship something. I understand what it means to advocate for our users. I understand prioritization. I understand that, sometimes, you have to make difficult tradeoffs. I understand storytelling is a big part of shipping.</p>\n<h2>What excites me!</h2>\n<p>In one word: Learning!</p>\n<p>I love learning new things, and improving my skills in all three areas above. It sounds incredibly cliche, but I like dipping my toes in a little bit of everything. You can see evidence of this in my work :)</p>\n<p>If you are looking for someone who is <em>relentless</em> about learning new things, or need somebody who prides herself in being a Jill of all trades, let's <a href=\"/contact\">chat</a> over <strike>coffee</strike> bubble tea!</p>\n<h2>In my spare time...</h2>\n<p>... I love climbing, cycling, practicing calligraphy, and (watching) chess.</p>\n<p>I also love teaching. I was a climbing instructor and trip organizer for <a href=\"http://washingtonalpineclub.org\">Washington Alpine Club</a>'s basic and intermediate climbing classes for 3 years. [<em>Sidenote: If you live in the GTA and are into easy/moderate multi-pitch trad climbs, I'm always looking for new partners :)</em> ]</p>\n<p>I enjoy giving time back to promoting computer science education. In the past, I've volunteered as mentor and instructor at organizations like <a href=\"http://ladieslearningcode.com\">Ladies Learning Code</a>, <a href=\"http://kidslearningcode.com\">Kids Learning Code</a> and <a href=\"https://www.microsoft.com/en-us/diversity/programs/digigirlz/default.aspx\">DigiGirlz</a>. I also regularly build features and fix bugs for <a href=\"http://code.org\">Code.org</a>.</p>\n"};

/***/ }

});
//# sourceMappingURL=7.js.map?82d8261b9d7b736c8585