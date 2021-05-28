(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./resources/js/components/Achievements/Acheivements.style.js":
/*!********************************************************************!*\
  !*** ./resources/js/components/Achievements/Acheivements.style.js ***!
  \********************************************************************/
/*! exports provided: AcSection, Container, AcWrapper, Icon, AcContent, IconCrown, IconHappy, IconBuild, IconAward */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcSection", function() { return AcSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcWrapper", function() { return AcWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AcContent", function() { return AcContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconCrown", function() { return IconCrown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconHappy", function() { return IconHappy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconBuild", function() { return IconBuild; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconAward", function() { return IconAward; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/ri */ "./node_modules/react-icons/ri/index.esm.js");
/* harmony import */ var _assets_images_img_9_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img-9.jpg */ "./resources/js/components/assets/images/img-9.jpg");
/* harmony import */ var _assets_images_img_9_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_9_jpg__WEBPACK_IMPORTED_MODULE_2__);



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var AcSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Acheivementsstyle__AcSection",
  componentId: "pcognv-0"
})(["background-image:url('", "');background-size:cover;background-repeat:no-repeat;background-position:top;background-attachment:fixed;width:100%;height:calc(90vh - 60px);padding-top:200px;position:relative;color:#EFFFFA;&:before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgb(108 139 199 /.4);}"], _assets_images_img_9_jpg__WEBPACK_IMPORTED_MODULE_2___default.a);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Acheivementsstyle__Container",
  componentId: "pcognv-1"
})(["position:relative;width:100%;padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto;@media screen and (min-width:576px){max-width:540px;}@media screen and (min-width:768px){max-width:720px;}@media screen and (min-width:992px){max-width:960px;}@media (min-width:1200px){width:1170px;}"]);
var AcWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Acheivementsstyle__AcWrapper",
  componentId: "pcognv-2"
})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;h2{font-size:clamp(1.5rem,6vw,1.7rem);margin-bottom:125px;letter-spacing:5px;word-spacing:20px;@media screen and (max-width:768px){margin-bottom:30px;}}"]);
var Icon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n  transform: translateY(0);\n  font-size: 40px;\n\n\n"])));
var AcContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Acheivementsstyle__AcContent",
  componentId: "pcognv-3"
})(["margin-top:2rem;width:100%;display:grid;grid-template-columns:repeat(4,auto);justify-content:space-around;align-items:center;text-align:center;cursor:pointer;& > div:hover  > div{transform:translateY(-5px);}div{width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;transition:.3s ease-in-out;h6{margin-top:10px;font-size:1.3rem;word-spacing:3px;letter-spacing:2px;}p{font-size:1.3rem;font-weight:bold;}@media screen and (max-width:576px){h6,p{font-size:1.15rem;word-spacing:normal;letter-spacing:normal;}}}@media screen and (max-width:768px){grid-template-columns:repeat(2,auto);grid-template-rows:repeat(2,1fr);h6{font-size:1rem;}p{font-size:1rem;}& > div:first-child,& > div:nth-child(2){margin-bottom:30px;}}"]);
var IconCrown = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiVipCrown2Line"]).withConfig({
  displayName: "Acheivementsstyle__IconCrown",
  componentId: "pcognv-4"
})(["", ""], Icon);
var IconHappy = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiEmotionHappyLine"]).withConfig({
  displayName: "Acheivementsstyle__IconHappy",
  componentId: "pcognv-5"
})(["", ""], Icon);
var IconBuild = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiBuilding2Line"]).withConfig({
  displayName: "Acheivementsstyle__IconBuild",
  componentId: "pcognv-6"
})(["", ""], Icon);
var IconAward = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_1__["RiAwardLine"]).withConfig({
  displayName: "Acheivementsstyle__IconAward",
  componentId: "pcognv-7"
})(["", ""], Icon);

/***/ }),

/***/ "./resources/js/components/Achievements/Achievements.js":
/*!**************************************************************!*\
  !*** ./resources/js/components/Achievements/Achievements.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Acheivements_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Acheivements.style */ "./resources/js/components/Achievements/Acheivements.style.js");



var Achievements = function Achievements() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["AcSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["AcWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Our Achievements"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["AcContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["IconCrown"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "20"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Years Of Experience")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["IconAward"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "22"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Projects")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["IconBuild"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "332"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Developed")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Acheivements_style__WEBPACK_IMPORTED_MODULE_1__["IconHappy"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "234,344"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h6", null, "Happy Family"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Achievements);

/***/ }),

/***/ "./resources/js/components/Hero/Hero.js":
/*!**********************************************!*\
  !*** ./resources/js/components/Hero/Hero.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Hero_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Hero.styles */ "./resources/js/components/Hero/Hero.styles.js");
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Button/Button */ "./resources/js/components/Button/Button.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var Hero = function Hero(_ref) {
  var slides = _ref.slides;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      current = _useState2[0],
      setCurrent = _useState2[1];

  var length = slides.length;
  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var nextSlide = function nextSlide() {
      setCurrent(function (current) {
        return current === length - 1 ? 0 : current + 1;
      });
    };

    timeout.current = setTimeout(nextSlide, 10000);
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  var nextSlide = function nextSlide() {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  }; // const prevSlide = () => {
  //   if (timeout.current) {
  //     clearTimeout(timeout.current)
  //   }
  //   setCurrent(current === 0 ? length - 1 : current - 1);
  // }


  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroSection"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["FixedSM"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://www.facebook.com/Ynabe3et",
    target: "_blank",
    rel: "noreferrer",
    smColor: "face"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["FaceFa"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://twitter.com/ynabe3co",
    target: "_blank",
    rel: "noreferrer",
    smColor: "twitter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["TwitterFa"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://www.instagram.com/ynabe3co/",
    rel: "noreferrer",
    smColor: "insta"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["InstaFa"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://www.linkedin.com/company/ynabe3-for-engineering-&-trade/",
    target: "_blank",
    rel: "noreferrer",
    smColor: "linked"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["LinkedFa"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://www.youtube.com/channel/UC1osWPw8HMxaVFEcBGe88aA",
    target: "_blank",
    rel: "noreferrer",
    smColor: "youtube"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["YoutubeFa"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SMTag"], {
    href: "https://www.pinterest.com/Ynabe3co/_saved/",
    target: "_blank",
    rel: "noreferrer",
    smColor: "pinterest"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["PinterestFa"], null))), slides.map(function (slide, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroSlide"], {
      key: index
    }, index === current && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroSlider"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroImg"], {
      src: slide.image,
      alt: slide.alt
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["HeroContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, slide.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, slide.price), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      to: slide.path,
      primary: "true",
      css: "max-width: 160px;"
    }, slide.label, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["Arrow"], null)))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["SliderButtons"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_styles__WEBPACK_IMPORTED_MODULE_1__["NextArrow"], {
    onClick: function onClick() {
      return nextSlide();
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./resources/js/components/Hero/Hero.styles.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/Hero/Hero.styles.js ***!
  \*****************************************************/
/*! exports provided: HeroSection, HeroWrapper, HeroSlide, HeroSlider, HeroImg, HeroContent, Arrow, SliderButtons, NextArrow, FixedSM, SMIcon, SMTag, FaceFa, TwitterFa, InstaFa, LinkedFa, YoutubeFa, PinterestFa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSection", function() { return HeroSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroWrapper", function() { return HeroWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSlide", function() { return HeroSlide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroSlider", function() { return HeroSlider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroImg", function() { return HeroImg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroContent", function() { return HeroContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return Arrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderButtons", function() { return SliderButtons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NextArrow", function() { return NextArrow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FixedSM", function() { return FixedSM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMIcon", function() { return SMIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMTag", function() { return SMTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaceFa", function() { return FaceFa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterFa", function() { return TwitterFa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstaFa", function() { return InstaFa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinkedFa", function() { return LinkedFa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubeFa", function() { return YoutubeFa; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinterestFa", function() { return PinterestFa; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/io5 */ "./node_modules/react-icons/io5/index.esm.js");



var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var HeroSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Herostyles__HeroSection",
  componentId: "ti90cs-0"
})(["height:100vh;max-height:1100px;position:relative;overflow:hidden;"]);
var HeroWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__HeroWrapper",
  componentId: "ti90cs-1"
})(["width:100%;height:100%;display:flex;justify-content:center;align-items:center;overflow:hidden;position:relative;"]);
var HeroSlide = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__HeroSlide",
  componentId: "ti90cs-2"
})(["z-index:1;width:100%;height:100%;"]);
var HeroSlider = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__HeroSlider",
  componentId: "ti90cs-3"
})(["position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:center;&::before{content:'';position:absolute;top:0;left:0;z-index:2;width:100%;height:100vh;overflow:hidden;background-color:rgb(0 0 0 / .6  );}"]);
var HeroImg = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].img.withConfig({
  displayName: "Herostyles__HeroImg",
  componentId: "ti90cs-4"
})(["position:absolute;top:0;left:0;width:100vw;height:100vh;object-fit:cover;"]);
var HeroContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__HeroContent",
  componentId: "ti90cs-5"
})(["position:relative;z-index:10;display:flex;flex-direction:column;max-width:1600px;width:calc(100% - 100px);color:#fff;padding-left:4rem;@media screen and (max-width:576px){padding-left:2rem;}h1{font-size:clamp(1rem,8vw,2rem);font-weight:400;text-transform:uppercase;text-shadow:0px 0px 20px rgb(0 0 0 /.4);text-align:left;margin-bottom:.8rem;}p{margin-bottom:1.2rem;text-shadow:0px 0px 20px rgb(0 0 0 /.4);}"]);
var Arrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdArrowRoundForward"]).withConfig({
  displayName: "Herostyles__Arrow",
  componentId: "ti90cs-6"
})(["margin-left:.5rem;"]);
var SliderButtons = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__SliderButtons",
  componentId: "ti90cs-7"
})(["position:absolute;right:1%;display:flex;z-index:10;"]);

var ArrowButtons = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 18px;\n  width: 50px;\n  height: 33px;\n  color: #6c8bc7;\n  cursor: pointer;\n  border: 1px solid #6c8bc7;\n  background: transparent;\n  border-radius: 50px;\n  padding: 6px;\n  margin-right: 1rem;\n  user-select: none;\n  transform: rotateZ(90deg);\n  transition: .3s;\n  &:hover {\n    background: #EFFFFA;\n    transform: rotateZ(90deg) scale(1.15);\n  }\n  @media screen and (max-width: 480px) {\n    font-size: 14px;\n    padding: 10px;\n    &:hover {\n    background: #EFFFFA;\n    transform: rotateZ(90deg) scale(1.05);\n    }\n  }\n"]))); // export const PrevArrow = styled(IoArrowBack)`
//   ${ArrowButtons}
// `;


var NextArrow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_io5__WEBPACK_IMPORTED_MODULE_3__["IoArrowForward"]).withConfig({
  displayName: "Herostyles__NextArrow",
  componentId: "ti90cs-8"
})(["", ""], ArrowButtons);
var FixedSM = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Herostyles__FixedSM",
  componentId: "ti90cs-9"
})(["position:absolute;z-index:33;left:20px;top:40%;@media screen and (max-width:768px){top:35%;}"]);
var SMIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  font-size: 14px;\n  color: #EFFFFA;\n"])));
var SMTag = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].a.withConfig({
  displayName: "Herostyles__SMTag",
  componentId: "ti90cs-10"
})(["height:36px;width:37px;display:block;text-align:center;line-height:38px;transition:.3s ease-in-out;margin:0;border:1px solid transparent;border-radius:50%;&:hover{background:", "}"], function (_ref) {
  var smColor = _ref.smColor;
  return smColor === 'face' && '#4267B2' || smColor === 'twitter' && '#1DA1F2' || smColor === 'insta' && '#bc2a8d' || smColor === 'linked' && '#0077B5' || smColor === 'youtube' && '#FF0000' || smColor === 'pinterest' && '#e60023';
});
var FaceFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaFacebookF"]).withConfig({
  displayName: "Herostyles__FaceFa",
  componentId: "ti90cs-11"
})(["", ""], SMIcon);
var TwitterFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTwitter"]).withConfig({
  displayName: "Herostyles__TwitterFa",
  componentId: "ti90cs-12"
})(["", ""], SMIcon);
var InstaFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaInstagram"]).withConfig({
  displayName: "Herostyles__InstaFa",
  componentId: "ti90cs-13"
})(["", ""], SMIcon);
var LinkedFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaLinkedinIn"]).withConfig({
  displayName: "Herostyles__LinkedFa",
  componentId: "ti90cs-14"
})(["", ""], SMIcon);
var YoutubeFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaYoutube"]).withConfig({
  displayName: "Herostyles__YoutubeFa",
  componentId: "ti90cs-15"
})(["", ""], SMIcon);
var PinterestFa = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPinterest"]).withConfig({
  displayName: "Herostyles__PinterestFa",
  componentId: "ti90cs-16"
})(["", ""], SMIcon);

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

/***/ "./resources/js/components/Intouch/Intouch.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Intouch/Intouch.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Intouch_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Intouch.styles */ "./resources/js/components/Intouch/Intouch.styles.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.esm.js");



var Intouch = function Intouch(_ref) {
  var direction = _ref.direction,
      directionChild = _ref.directionChild;
  return /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["IntouchContainer"], null, /*#__PURE__*/React.createElement("h2", null, "Get In Touch"), /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["Touch"], null, /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["TouchBox"], null, /*#__PURE__*/React.createElement("h3", null, "Head Office"), /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["TouchContent"], null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMapMarkerAlt"], null)), /*#__PURE__*/React.createElement("span", null, " \u0666\u0668\u062C \u0628\u0631\u062C \u0642\u0635\u0631 \u0637\u064A\u0628\u0629 \u0627\u0644\u0645\u0631\u064A\u0648\u0637\u064A\u0629 \u0641\u064A\u0635\u0644")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMobileAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+201092090391"
  }, "+2-01092090391")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPhoneAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+237710022"
  }, "+2-37710022")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPhoneAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+237457385"
  }, "+2-37457385")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaEnvelope"], null)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@yanabe3.com"
  }, "info@yanabe3.com")))), /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["TouchBox"], null, /*#__PURE__*/React.createElement("h3", null, "Maintenance center :amp& Store"), /*#__PURE__*/React.createElement(_Intouch_styles__WEBPACK_IMPORTED_MODULE_0__["TouchContent"], null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMapMarkerAlt"], null)), /*#__PURE__*/React.createElement("span", null, "\u0627\u0644\u0645\u0646\u0637\u0642\u0629 \u0627\u0644\u0635\u0646\u0627\u0639\u064A\u0629 \u0628\u0627\u0628\u0648\u0631\u0648\u0627\u0634 \u0643 \u0662\u0666 \u0637\u0631\u064A\u0642 \u0627\u0644\u0642\u0627\u0647\u0631\u0629 \u0627\u0644\u0627\u0633\u0643\u0646\u062F\u0631\u064A\u0629 \u0627\u0644\u0635\u062D\u0631\u0648\u0627\u064A")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaMobileAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+201092090391"
  }, "+2-01092090391")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPhoneAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+237710022"
  }, "+2-37710022")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaPhoneAlt"], null)), /*#__PURE__*/React.createElement("a", {
    href: "tel:+237457385"
  }, "+2-37457385")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("i", {
    className: "icon"
  }, /*#__PURE__*/React.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaEnvelope"], null)), /*#__PURE__*/React.createElement("a", {
    href: "mailto:info@yanabe3.com"
  }, "info@yanabe3.com"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Intouch);

/***/ }),

/***/ "./resources/js/components/Intouch/Intouch.styles.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Intouch/Intouch.styles.js ***!
  \***********************************************************/
/*! exports provided: IntouchContainer, Touch, TouchBox, TouchContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntouchContainer", function() { return IntouchContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchBox", function() { return TouchBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TouchContent", function() { return TouchContent; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var IntouchContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 80%;\n  margin-left: auto;\n  margin-right: auto;\n  display: flex;\n  flex-direction: ", ";\n  \n  h2,h3 {\n    align-self: flex-start;\n    color: #6c8bc7;\n  }\n"])), function (_ref) {
  var direction = _ref.direction;
  return direction ? 'row' : 'column';
});
var Touch = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 100%;\n  display: flex;\n  flex-direction: ", ";\n  margin: 100px auto;\n  @media screen and (max-width: 768px) {\n    margin: 0 auto;\n  }\n"])), function (_ref2) {
  var direction = _ref2.direction;
  return direction ? 'row' : 'column';
});
var TouchBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  padding: 2rem 0;\n  width: 100%;\n"])));
var TouchContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  padding: 2rem 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  div {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin: .5rem 0;\n    color: rgb(0 0 0 / .8);\n    font-size: 18px;\n    font-weight: bold;\n    .icon{\n      margin-right: .5rem;\n    }\n    a {\n      text-decoration: none;\n      color: rgb(0 0 0 / .8);\n    }\n  }\n"])));

/***/ }),

/***/ "./resources/js/components/LastNews/LastNews.js":
/*!******************************************************!*\
  !*** ./resources/js/components/LastNews/LastNews.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lastnews.styles */ "./resources/js/components/LastNews/Lastnews.styles.js");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img-7.jpg */ "./resources/js/components/assets/images/img-7.jpg");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2__);




var LastNews = function LastNews() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["LNSection"], {
    id: "news"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Last News"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["LNContainer"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["LNWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["NewsBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Galala"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "projectName"
  }, "Galala")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["NewsBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Galala"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "projectName"
  }, "Galala")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Lastnews_styles__WEBPACK_IMPORTED_MODULE_1__["NewsBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Galala"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "projectName"
  }, "Galala")))));
};

/* harmony default export */ __webpack_exports__["default"] = (LastNews);

/***/ }),

/***/ "./resources/js/components/LastNews/Lastnews.styles.js":
/*!*************************************************************!*\
  !*** ./resources/js/components/LastNews/Lastnews.styles.js ***!
  \*************************************************************/
/*! exports provided: LNSection, LNContainer, LNWrapper, NewsBox */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LNSection", function() { return LNSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LNContainer", function() { return LNContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LNWrapper", function() { return LNWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsBox", function() { return NewsBox; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var LNSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  height: 100vh;\n  @media screen and (max-width: 576px) {\n    height: auto;\n    margin-bottom: 1rem;\n}\n  h2 {\n    text-align: center;\n    color: #6c8bc7;\n    padding: 0 2rem;\n    font-size: clamp(1.5rem,6vw,1.7rem);\n    margin: 2rem 0;\n    letter-spacing: 5px;\n    word-spacing: 20px;\n  }\n"])));
var LNContainer = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n position: relative;\n  width: 100%;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n  @media screen and (min-width: 576px) {\n    max-width: 540px;\n  }\n  @media screen and (min-width: 768px) {\n    max-width: 720px;\n  }\n  @media screen and (min-width: 992px) {\n    max-width: 960px;\n  }\n  @media (min-width: 1200px) {\n    width: 1170px;\n  }\n"])));
var LNWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  @media screen and (max-width: 576px) {\n    flex-direction: column;\n}\n"])));
var NewsBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral(["\n  margin:  0 .5rem;\n  max-width: 300px;\n  position: relative;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 99%;\n    background-color: rgb(108 139 199 /.4);\n  }\n  div img {\n    width: 100%;\n    object-fit: cover;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n  }\n  .projectName {\n    width: 100%;\n    text-align: left;\n    position: absolute;\n    bottom: 10%;\n    padding-left: 2rem;\n    color: #EFFFFA;\n    text-transform: uppercase;\n    font-size: 1.6rem;\n  }\n"])));

/***/ }),

/***/ "./resources/js/components/OurServices/Services.js":
/*!*********************************************************!*\
  !*** ./resources/js/components/OurServices/Services.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_gi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/gi */ "./node_modules/react-icons/gi/index.esm.js");
/* harmony import */ var _Services_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Services.styles */ "./resources/js/components/OurServices/Services.styles.js");
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/react */ "./node_modules/swiper/swiper-react.esm.js");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! swiper/swiper.min.css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_min_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var swiper_components_scrollbar_scrollbar_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/components/scrollbar/scrollbar.min.css */ "./node_modules/swiper/components/scrollbar/scrollbar.min.css");
/* harmony import */ var swiper_components_scrollbar_scrollbar_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_components_scrollbar_scrollbar_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/core */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _assets_images_img_3_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/images/img-3.jpg */ "./resources/js/components/assets/images/img-3.jpg");
/* harmony import */ var _assets_images_img_3_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_3_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/images/img-4.jpg */ "./resources/js/components/assets/images/img-4.jpg");
/* harmony import */ var _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_images_img_6_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/images/img-6.jpg */ "./resources/js/components/assets/images/img-6.jpg");
/* harmony import */ var _assets_images_img_6_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_6_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/images/img-7.jpg */ "./resources/js/components/assets/images/img-7.jpg");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_images_img_8_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/images/img-8.jpg */ "./resources/js/components/assets/images/img-8.jpg");
/* harmony import */ var _assets_images_img_8_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_8_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/images/img-11.jpg */ "./resources/js/components/assets/images/img-11.jpg");
/* harmony import */ var _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_12__);



 // Import Swiper styles


 // import Swiper core and required modules

 // import images






 // install Swiper modules

swiper_core__WEBPACK_IMPORTED_MODULE_6__["default"].use([swiper_core__WEBPACK_IMPORTED_MODULE_6__["Scrollbar"], swiper_core__WEBPACK_IMPORTED_MODULE_6__["Autoplay"]]);
/*

        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}

*/

function Services(_ref) {
  var img = _ref.img;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesSection"], {
    id: "services"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServiceHeader"], null, "Our Services"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["Swiper"], {
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false
    },
    scrollbar: {
      hide: true
    },
    breakpoints: {
      "640": {
        "slidesPerView": 1,
        "spaceBetween": 0
      },
      "768": {
        "slidesPerView": 2,
        "spaceBetween": 0
      },
      "1024": {
        "slidesPerView": 4,
        "spaceBetween": 0
      },
      "1440": {
        "slidesPerView": 5,
        "spaceBetween": 0
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_3_jpg__WEBPACK_IMPORTED_MODULE_7___default.a,
    alt: "Drilling Wells"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiOilPump"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "/drilling"
  }, "Drilling Wells")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "/drilling"
  }, "See More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_4_jpg__WEBPACK_IMPORTED_MODULE_8___default.a,
    alt: "Pumps"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiTeePipe"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "/pumps"
  }, "Pumps")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "/pumps"
  }, "See More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_6_jpg__WEBPACK_IMPORTED_MODULE_9___default.a,
    alt: "Irrigation Networks"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiPlantWatering"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "/irrigation"
  }, "Irrigation Networks")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "/irrigation"
  }, "See More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_10___default.a,
    alt: "landscape"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiFountain"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "/landscape"
  }, "Landscape")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "/landscape"
  }, "See More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_8_jpg__WEBPACK_IMPORTED_MODULE_11___default.a,
    alt: "Water Treatment"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiTestTubes"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "waterTreatment"
  }, "Desalination & Water Treatment Plants")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "waterTreatment"
  }, "See More"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(swiper_react__WEBPACK_IMPORTED_MODULE_3__["SwiperSlide"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["ServicesBox"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_images_img_11_jpg__WEBPACK_IMPORTED_MODULE_12___default.a,
    alt: "Infrastructure"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["BoxContent"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_gi__WEBPACK_IMPORTED_MODULE_1__["GiPlatform"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "trans"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SHeader"], {
    to: "/infrastructure"
  }, "Infrastructure")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Lorem ipsum dolor sit amet consectetur adipisicing elit.Mollitia quos explicabo repellendus voluptate neque cum.Expedita "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Services_styles__WEBPACK_IMPORTED_MODULE_2__["SeeMore"], {
    to: "/infrastructure"
  }, "See More")))))));
}

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ }),

/***/ "./resources/js/components/OurServices/Services.styles.js":
/*!****************************************************************!*\
  !*** ./resources/js/components/OurServices/Services.styles.js ***!
  \****************************************************************/
/*! exports provided: Services, ServicesSection, ServiceHeader, ServicesBox, BoxContent, SIcon, IconWrap, SHeader, SeeMore, SPara, SMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Services", function() { return Services; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesSection", function() { return ServicesSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceHeader", function() { return ServiceHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesBox", function() { return ServicesBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxContent", function() { return BoxContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIcon", function() { return SIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IconWrap", function() { return IconWrap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHeader", function() { return SHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeeMore", function() { return SeeMore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPara", function() { return SPara; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SMore", function() { return SMore; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");



var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Services = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Servicesstyles__Services",
  componentId: "sc-1co9vqw-0"
})([""]);
var ServicesSection = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].section.withConfig({
  displayName: "Servicesstyles__ServicesSection",
  componentId: "sc-1co9vqw-1"
})(["width:100%;height:90vh;"]);
var ServiceHeader = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].h2.withConfig({
  displayName: "Servicesstyles__ServiceHeader",
  componentId: "sc-1co9vqw-2"
})(["text-align:center;color:#6c8bc7;padding:0 2rem;font-size:clamp(1.5rem,6vw,1.7rem);margin:2rem 0;letter-spacing:5px;word-spacing:20px;"]);
var ServicesBox = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Servicesstyles__ServicesBox",
  componentId: "sc-1co9vqw-3"
})(["height:100%;width:100%;position:relative;img{width:100%;object-fit:cover;background-size:cover;background-repeat:no-repeat;}&::before{content:'';position:absolute;top:0;left:0;width:100%;height:100%;background-color:rgb(108 139 199 /.4);}"]);
var BoxContent = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div.withConfig({
  displayName: "Servicesstyles__BoxContent",
  componentId: "sc-1co9vqw-4"
})(["padding-top:2rem;position:absolute;top:0;left:0;width:100%;height:100%;z-index:10;color:#fff;overflow:hidden;transition:.6s ease-in-out;&:hover div:first-child{opacity:0;}&:hover div:first-child{opacity:0;}.icon{font-size:7rem;position:absolute;left:50%;top:20%;transform:translate(-50%,-20%);z-index:-30;transition:.5s ease-in-out;}.trans{padding-bottom:2rem;height:100%;transform:translateY(65%);display:flex;flex-direction:column;justify-content:space-between;align-items:center;transition:.6s ease-in-out;}&:hover .trans{transform:translateY(0);}"]);
var SIcon = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));
var IconWrap = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].i.withConfig({
  displayName: "Servicesstyles__IconWrap",
  componentId: "sc-1co9vqw-5"
})(["", ""], SIcon);
var SHeader = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({
  displayName: "Servicesstyles__SHeader",
  componentId: "sc-1co9vqw-6"
})(["color:#EFFFFA;text-decoration:none;text-transform:uppercase;font-weight:bold;font-size:1.5rem;&:hover{color:#6c8bc7;}"]);
var SeeMore = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(SHeader).withConfig({
  displayName: "Servicesstyles__SeeMore",
  componentId: "sc-1co9vqw-7"
})(["font-size:1rem;"]);
var SPara = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].p.withConfig({
  displayName: "Servicesstyles__SPara",
  componentId: "sc-1co9vqw-8"
})([""]);
var SMore = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"]).withConfig({
  displayName: "Servicesstyles__SMore",
  componentId: "sc-1co9vqw-9"
})([""]);

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

/***/ "./resources/js/components/Projects/Projects.js":
/*!******************************************************!*\
  !*** ./resources/js/components/Projects/Projects.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Button/Button */ "./resources/js/components/Button/Button.js");
/* harmony import */ var _Projects_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.styles */ "./resources/js/components/Projects/Projects.styles.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./resources/js/components/Projects/Project.js");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/img-7.jpg */ "./resources/js/components/assets/images/img-7.jpg");
/* harmony import */ var _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3__);





var Projects = function Projects() {
  return /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_1__["ProjectsSection"], null, /*#__PURE__*/React.createElement("h2", null, "Projects"), /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_1__["ProjectsContainer"], null, /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_1__["ProjectsWrapper"], null, /*#__PURE__*/React.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projectName: "Galala",
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    cataSpan: "Landscape"
  }), /*#__PURE__*/React.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projectName: "New Cairo",
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    cataSpan: "Pumps"
  }), /*#__PURE__*/React.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projectName: "Ismailia",
    img: _assets_images_img_7_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    cataSpan: "Irrigation Network"
  })), /*#__PURE__*/React.createElement(_Projects_styles__WEBPACK_IMPORTED_MODULE_1__["BtnWrap"], null, /*#__PURE__*/React.createElement(_Button_Button__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    primary: "true",
    to: "/projects"
  }, "View All"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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

/***/ "./resources/js/components/assets/images/img-15.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/assets/images/img-15.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-15.jpg?46892eb60fe12a89ab4d997c0e403e15";

/***/ }),

/***/ "./resources/js/components/assets/images/img-17.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/assets/images/img-17.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-17.jpg?d5423da3a00054fa85affdd4b59409f5";

/***/ }),

/***/ "./resources/js/components/assets/images/img-3.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-3.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-3.jpg?65b53910f670be0b3337cb65bad3d7f6";

/***/ }),

/***/ "./resources/js/components/assets/images/img-4.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-4.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-4.jpg?307a4b5973b9ab9da55f703256817e21";

/***/ }),

/***/ "./resources/js/components/assets/images/img-6.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-6.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-6.jpg?aa9820f541e750cc5ada014fadcf310b";

/***/ }),

/***/ "./resources/js/components/assets/images/img-7.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-7.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-7.jpg?86aa7dad7616064c6bed7a9eb5690e67";

/***/ }),

/***/ "./resources/js/components/assets/images/img-8.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-8.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-8.jpg?d211c298f5dddd6d141ac9ebee92d8a1";

/***/ }),

/***/ "./resources/js/components/assets/images/img-9.jpg":
/*!*********************************************************!*\
  !*** ./resources/js/components/assets/images/img-9.jpg ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-9.jpg?523a89f64e53deb7aa02e9ff0fa6d18f";

/***/ }),

/***/ "./resources/js/components/data/SliderData.js":
/*!****************************************************!*\
  !*** ./resources/js/components/data/SliderData.js ***!
  \****************************************************/
/*! exports provided: SliderData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderData", function() { return SliderData; });
/* harmony import */ var _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/img-13.jpg */ "./resources/js/components/assets/images/img-13.jpg");
/* harmony import */ var _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_images_img_17_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/img-17.jpg */ "./resources/js/components/assets/images/img-17.jpg");
/* harmony import */ var _assets_images_img_17_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_17_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_img_15_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/img-15.jpg */ "./resources/js/components/assets/images/img-15.jpg");
/* harmony import */ var _assets_images_img_15_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_15_jpg__WEBPACK_IMPORTED_MODULE_2__);



var SliderData = [{
  title: 'ينابيع',
  price: 'Wellcome',
  path: '/contact',
  label: 'Contact Us',
  image: _assets_images_img_13_jpg__WEBPACK_IMPORTED_MODULE_0___default.a,
  alt: 'house'
}, {
  title: 'Luxury Villa in Bali, Egypt',
  price: '$7,000,000',
  path: '/contact',
  label: 'Contact Us',
  image: _assets_images_img_17_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: 'house'
}, {
  title: 'Luxury Villa in Bali, Egypt',
  price: '$480,000',
  path: '/contact',
  label: 'Contact Us',
  image: _assets_images_img_15_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: 'house'
}];

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

/***/ "./resources/js/components/pages/Home.js":
/*!***********************************************!*\
  !*** ./resources/js/components/pages/Home.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.css */ "./resources/js/components/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ..//Hero/Hero */ "./resources/js/components/Hero/Hero.js");
/* harmony import */ var _data_SliderData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/SliderData */ "./resources/js/components/data/SliderData.js");
/* harmony import */ var _InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../InfoSection/InfoSection */ "./resources/js/components/InfoSection/InfoSection.js");
/* harmony import */ var _data_infoData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/infoData */ "./resources/js/components/data/infoData.js");
/* harmony import */ var _Achievements_Achievements__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Achievements/Achievements */ "./resources/js/components/Achievements/Achievements.js");
/* harmony import */ var _LastNews_LastNews__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LastNews/LastNews */ "./resources/js/components/LastNews/LastNews.js");
/* harmony import */ var _OurServices_Services__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../OurServices/Services */ "./resources/js/components/OurServices/Services.js");
/* harmony import */ var _Intouch_Intouch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Intouch/Intouch */ "./resources/js/components/Intouch/Intouch.js");
/* harmony import */ var _Projects_Projects__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Projects/Projects */ "./resources/js/components/Projects/Projects.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }













function Home() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slides: _data_SliderData__WEBPACK_IMPORTED_MODULE_3__["SliderData"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_InfoSection_InfoSection__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({}, _data_infoData__WEBPACK_IMPORTED_MODULE_5__["InfoDataTwo"], {
    display: "true"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Achievements_Achievements__WEBPACK_IMPORTED_MODULE_6__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_OurServices_Services__WEBPACK_IMPORTED_MODULE_8__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Projects_Projects__WEBPACK_IMPORTED_MODULE_10__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_LastNews_LastNews__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intouch_Intouch__WEBPACK_IMPORTED_MODULE_9__["default"], {
    direction: "row"
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

}]);