(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/js/components/Header/Header.js":
/*!**************************************************!*\
  !*** ./resources/js/components/Header/Header.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.styles */ "./resources/js/components/Header/Header.styles.js");



function Header(_ref) {
  var src = _ref.src,
      header = _ref.header,
      paragraph = _ref.paragraph,
      marginB = _ref.marginB;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderImg"], {
    src: src,
    alt: "Header"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_styles__WEBPACK_IMPORTED_MODULE_1__["HeaderContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, paragraph))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./resources/js/components/Header/Header.styles.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/Header/Header.styles.js ***!
  \*********************************************************/
/*! exports provided: HeaderSection, HeaderContainer, HeaderWrapper, HeaderImg, HeaderContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderSection", function() { return HeaderSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContainer", function() { return HeaderContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderWrapper", function() { return HeaderWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderImg", function() { return HeaderImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderContent", function() { return HeaderContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");

var HeaderSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Headerstyles__HeaderSection",
  componentId: "b1tl85-0"
})(["height:60vh;max-height:1100px;position:relative;overflow:hidden;margin-bottom:", ";@media screen and (max-width:768px){margin-bottom:0;}"], function (_ref) {
  var marginB = _ref.marginB;
  return marginB ? '0rem' : '4rem';
});
var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Headerstyles__HeaderContainer",
  componentId: "b1tl85-1"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]);
var HeaderWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Headerstyles__HeaderWrapper",
  componentId: "b1tl85-2"
})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:'';position:absolute;top:0;left:0;z-index:2;width:100%;height:100vh;overflow:hidden;background-color:rgb(0 0 0 / .6  );}"]);
var HeaderImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "Headerstyles__HeaderImg",
  componentId: "b1tl85-3"
})(["position:absolute;top:0;left:0;width:100vw;height:80vh;object-fit:cover;background-repeat:no-repeat;background-size:cover;background-position:50% 50%;"]);
var HeaderContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Headerstyles__HeaderContent",
  componentId: "b1tl85-4"
})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1600px;width:calc(100% - 100px);color:#fff;padding-left:4rem;@media screen and (max-width:576px){padding-left:2rem;}h2{font-size:clamp(1rem,8vw,2rem);font-weight:400;text-transform:capitalize;text-shadow:0px 0px 20px rgb(0 0 0 /.4);text-align:left;margin-bottom:.8rem;}p{margin-bottom:1.2rem;text-shadow:0px 0px 20px rgb(0 0 0 /.4);}"]);

/***/ }),

/***/ "./resources/js/components/InfoSection/Info.styles.js":
/*!************************************************************!*\
  !*** ./resources/js/components/InfoSection/Info.styles.js ***!
  \************************************************************/
/*! exports provided: Section, Container, ColumnLeft, ColumnRight, BtnWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Section", function() { return Section; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnLeft", function() { return ColumnLeft; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColumnRight", function() { return ColumnRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnWrap", function() { return BtnWrap; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Section = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100%;\n  @media screen and (max-width: 768px) {\n    margin-bottom: 3rem\n}\n"])));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  /* padding: 2rem calc((100vw - 1300px) / 2 ); */\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 800px;\n  position: relative;\n  &::before {\n    position: absolute;\n    content: \"\";\n    width: 50%;\n    background: linear-gradient(to right,#f6f6f6 0%, #f6f6f6 95%, #f6f6f6 99%);\n    left: 0;\n    top: 0;\n    height: 100%;\n    z-index: -1;\n\n    @media screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    grid-template-rows: 90vh;\n    \n  }\n"])));
var ColumnLeft = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  line-height: 1.4;\n  padding: 1rem 0rem 0 1rem;\n  order: ", ";\n\n  h1 {\n    color: #6c8bc7;\n    margin-bottom: 1rem;\n    font-size: clamp(1.5rem, 6vw, 2rem);\n  }\n\n  p {\n    margin-bottom: 2rem;\n  }\n"])), function (_ref) {
  var reverse = _ref.reverse;
  return reverse ? '2' : '1';
});
var ColumnRight = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /* padding: 1rem 2rem; */\n  order: ", ";\n  \n  @media screen and (max-width: 768px) {\n    order: ", ";\n  }\n\n  img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n\n    @media screen and (max-width: 768px) {\n      width: 90%;\n      height: 90%;\n  }\n  }\n"])), function (_ref2) {
  var reverse = _ref2.reverse;
  return reverse ? '1' : '2';
}, function (_ref3) {
  var reverse = _ref3.reverse;
  return reverse ? '2' : '1';
});
var BtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  display: ", ";\n"])), function (_ref4) {
  var display = _ref4.display;
  return display ? 'block' : 'none';
});

/***/ }),

/***/ "./resources/js/components/InfoSection/InfoSection.js":
/*!************************************************************!*\
  !*** ./resources/js/components/InfoSection/InfoSection.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Info_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Info.styles */ "./resources/js/components/InfoSection/Info.styles.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./resources/js/components/Button/Button.js");




var InfoSection = function InfoSection(_ref) {
  var heading = _ref.heading,
      paragraphOne = _ref.paragraphOne,
      paragraphTwo = _ref.paragraphTwo,
      buttonLable = _ref.buttonLable,
      reverse = _ref.reverse,
      image = _ref.image,
      display = _ref.display;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_styles__WEBPACK_IMPORTED_MODULE_1__["Section"], {
    display: display
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_styles__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_styles__WEBPACK_IMPORTED_MODULE_1__["ColumnLeft"], {
    reverse: reverse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, heading), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, paragraphOne), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, paragraphTwo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_styles__WEBPACK_IMPORTED_MODULE_1__["BtnWrap"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    primary: "true",
    to: "/about"
  }, buttonLable))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Info_styles__WEBPACK_IMPORTED_MODULE_1__["ColumnRight"], {
    reverse: reverse
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: image,
    alt: "home"
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (InfoSection);

/***/ }),

/***/ "./resources/js/components/assets/images/img-11.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/assets/images/img-11.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-11.jpg?707661d0321f8c56ee6aed43d45ac171";

/***/ }),

/***/ "./resources/js/components/assets/images/img-13.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/assets/images/img-13.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-13.jpg?1d8b1174140278c4395d10ddf6914af9";

/***/ }),

/***/ "./resources/js/components/assets/images/img-4.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-4.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-4.jpg?307a4b5973b9ab9da55f703256817e21";

/***/ }),

/***/ "./resources/js/components/assets/images/img-7.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-7.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-7.jpg?86aa7dad7616064c6bed7a9eb5690e67";

/***/ }),

/***/ "./resources/js/components/assets/images/img-about.jpg":
/*!*************************************************************!*\
  !*** ./resources/js/components/assets/images/img-about.jpg ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-about.jpg?81901a296bcff80894e455906838b640";

/***/ }),

/***/ "./resources/js/components/data/infoData.js":
/*!**************************************************!*\
  !*** ./resources/js/components/data/infoData.js ***!
  \**************************************************/
/*! exports provided: InfoDataOne, InfoDataTwo, InfoDataThree */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDataOne", function() { return InfoDataOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDataTwo", function() { return InfoDataTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoDataThree", function() { return InfoDataThree; });
/* harmony import */ var _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img-11.jpg */ "./resources/js/components/assets/images/img-11.jpg");
/* harmony import */ var _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/img-13.jpg */ "./resources/js/components/assets/images/img-13.jpg");
/* harmony import */ var _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img-7.jpg */ "./resources/js/components/assets/images/img-7.jpg");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2__);



var InfoDataOne = {
  heading: 'Our Story',
  paragraphOne: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita ',
  paragraphTwo: 'dolor corporis repellat consequuntur natus iste officiis eveniet adipisci hic beatae, quia necessitatibus dolorem?',
  buttonLable: 'Learn More',
  image: _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  reverse: false,
  delay: 100
};
var InfoDataTwo = {
  heading: 'Modern Designs',
  paragraphOne: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita ',
  paragraphTwo: 'dolor corporis repellat consequuntur natus iste officiis eveniet adipisci hic beatae, quia necessitatibus dolorem?',
  buttonLable: 'View Home',
  image: _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  reverse: true,
  delay: 300
};
var InfoDataThree = {
  heading: 'Our Story',
  paragraphOne: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita ',
  paragraphTwo: 'dolor corporis repellat consequuntur natus iste officiis eveniet adipisci hic beatae, quia necessitatibus dolorem?',
  buttonLable: 'View Home',
  image: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  reverse: false,
  delay: 300
};

/***/ }),

/***/ "./resources/js/components/pages/About.js":
/*!************************************************!*\
  !*** ./resources/js/components/pages/About.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Button/Button */ "./resources/js/components/Button/Button.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ "./resources/js/components/Header/Header.js");
/* harmony import */ var _InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../InfoSection/InfoSection */ "./resources/js/components/InfoSection/InfoSection.js");
/* harmony import */ var _data_infoData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/infoData */ "./resources/js/components/data/infoData.js");
/* harmony import */ var _assets_images_img_about_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/img-about.jpg */ "./resources/js/components/assets/images/img-about.jpg");
/* harmony import */ var _assets_images_img_about_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_about_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/img-4.jpg */ "./resources/js/components/assets/images/img-4.jpg");
/* harmony import */ var _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _ScrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ScrollToTop/ScrollToTop */ "./resources/js/components/ScrollToTop/ScrollToTop.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var AboutCont = styled_components__WEBPACK_IMPORTED_MODULE_7__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  margin: 5rem 0;\n  width: 100%;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  padding: 0 2rem;\n\n  & > div:first-child {\n    border-right: 1px solid #ddd;\n    margin-right: 2rem;\n    padding-right: 1rem;\n  }\n  div h6 {\n    color: #6c8bc7;\n    font-size: 1.5rem;\n    margin-bottom: 2rem;\n  }\n"])));

function About() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ScrollToTop_ScrollToTop__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    marginB: "4rem",
    src: _assets_images_img_about_jpg__WEBPACK_IMPORTED_MODULE_5___default.a,
    header: 'About Us',
    paragraph: ''
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_3__["default"], _data_infoData__WEBPACK_IMPORTED_MODULE_4__["InfoDataThree"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_3__["default"], _data_infoData__WEBPACK_IMPORTED_MODULE_4__["InfoDataTwo"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AboutCont, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Mission"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We deliver quality, value and upgraded lifestyle through business lines with the highest standards of professionalism and customer service.")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Vision"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The trusted premiere real estate developer who brings value and sustainable prosperity to clients and communities"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: '2rem'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", {
    style: {
      color: '#6c8bc7',
      marginBottom: '2rem',
      fontSize: '1.5rem'
    }
  }, "Looking for more information"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: {
      marginBottom: '2rem',
      fontSize: '1.5rem'
    }
  }, "Our Portfolio"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    big: "true",
    primary: "true",
    round: "true",
    target: "_blank",
    to: _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    download: "Yanabee"
  }, "Download")));
}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ })

}]);