(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./resources/js/components/Projects/Project.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Projects/Project.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.styles */ "./resources/js/components/Projects/Projects.styles.js");


var Project = function Project(_ref) {
  var projectName = _ref.projectName,
      cataSpan = _ref.cataSpan,
      img = _ref.img;
  return /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_0__["ProjectBox"], null, cataSpan && /*#__PURE__*/React.createElement("span", {
    className: "cataSpan"
  }, cataSpan), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: img,
    alt: projectName
  })), /*#__PURE__*/React.createElement("h3", {
    className: "projectName"
  }, /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_0__["ProjectName"], {
    to: "/projects"
  }, projectName)));
};

/* harmony default export */ __webpack_exports__["default"] = (Project);

/***/ }),

/***/ "./resources/js/components/Projects/Projects.styles.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/Projects/Projects.styles.js ***!
  \*************************************************************/
/*! exports provided: ProjectsSection, ProjectsContainer, ProjectsWrapper, ProjectBox, ProjectName, BtnWrap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsSection", function() { return ProjectsSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsContainer", function() { return ProjectsContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsWrapper", function() { return ProjectsWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectBox", function() { return ProjectBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectName", function() { return ProjectName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtnWrap", function() { return BtnWrap; });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4, _templateObject5, _templateObject6;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ProjectsSection = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n  height: 100vh;\n  @media screen and (max-width: 576px) {\n    height: auto;\n    margin-bottom: 1rem;\n}\n  h2,h3 {\n    text-align: center;\n    color: #6c8bc7;\n    padding: 0 2rem;\n    font-size: clamp(1.5rem,6vw,1.7rem);\n    margin: 2rem 0;\n    letter-spacing: 5px;\n    word-spacing: 20px;\n  }\n"])));
var ProjectsContainer = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and (min-width: 576px) {\n    max-width: 540px;\n  }\n  @media screen and (min-width: 768px) {\n    max-width: 720px;\n  }\n  @media screen and (min-width: 992px) {\n    max-width: 960px;\n  }\n  @media (min-width: 1200px) {\n    width: 1170px;\n  }\n"])));
var ProjectsWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 576px) {\n    flex-direction: column;\n}\n"])));
var ProjectBox = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin:  0 .5rem;\n  max-width: 300px;\n  position: relative;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 99%;\n    background-color: rgb(108 139 199 /.4);\n  }\n  \n  div img {\n    width: 100%;\n    object-fit: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  .cataSpan{\n    position: absolute;\n    top: 2%;\n    right: 0;\n    background-color: #698bcee3;\n    color: #EFFFFA;\n    padding: 2px 5px;\n  }\n  .projectName {\n    width: 100%;\n    text-align: left;\n    position: absolute;\n    bottom: 10%;\n    padding-left: 2rem;\n  }\n"])));
var ProjectName = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_0__["Link"])(_templateObject5 || (_templateObject5 = _taggedTemplateLiteral(["\n  \n  color: #EFFFFA;\n  text-decoration: none;\n  text-transform: uppercase;\n  font-size: 1.6rem;\n"])));
var BtnWrap = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject6 || (_templateObject6 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 2rem;\n"])));

/***/ }),

/***/ "./resources/js/components/assets/images/img-7.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-7.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-7.jpg?86aa7dad7616064c6bed7a9eb5690e67";

/***/ }),

/***/ "./resources/js/components/assets/images/img-landscape.jpg":
/*!*****************************************************************!*\
  !*** ./resources/js/components/assets/images/img-landscape.jpg ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-landscape.jpg?1d8b1174140278c4395d10ddf6914af9";

/***/ }),

/***/ "./resources/js/components/pages/Projects.js":
/*!***************************************************!*\
  !*** ./resources/js/components/pages/Projects.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/Header */ "./resources/js/components/Header/Header.js");
/* harmony import */ var _assets_images_img_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/img-landscape.jpg */ "./resources/js/components/assets/images/img-landscape.jpg");
/* harmony import */ var _assets_images_img_landscape_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_landscape_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Projects/Projects.styles.js */ "./resources/js/components/Projects/Projects.styles.js");
/* harmony import */ var _Projects_Project__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Projects/Project */ "./resources/js/components/Projects/Project.js");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/img-7.jpg */ "./resources/js/components/assets/images/img-7.jpg");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


 // import { Link } from 'react-scroll';






var ProjectsPage = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  position: relative;\n\n"])));
var ProjectsPageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  position: relative;\n\n"])));

function Projects() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectsPageWrapper, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    src: _assets_images_img_landscape_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    header: 'Projects',
    paragraph: 'bowl'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectsPage, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Landscape"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Pumps"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects_styles_js__WEBPACK_IMPORTED_MODULE_4__["ProjectsWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Project__WEBPACK_IMPORTED_MODULE_5__["default"], {
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_6___default.a,
    projectName: "Galala"
  })))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ })

}]);