(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "./resources/js/components/Intouch/Contact.js":
/*!****************************************************!*\
  !*** ./resources/js/components/Intouch/Contact.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! formik */ "./node_modules/formik/dist/formik.esm.js");
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! yup */ "./node_modules/yup/es/index.js");
/* harmony import */ var _Contact_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Contact.styles */ "./resources/js/components/Intouch/Contact.styles.js");
/* harmony import */ var _Intouch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Intouch */ "./resources/js/components/Intouch/Intouch.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







var CustomTextInput = function CustomTextInput(_ref) {
  var label = _ref.label,
      props = _objectWithoutProperties(_ref, ["label"]);

  var _useField = Object(formik__WEBPACK_IMPORTED_MODULE_1__["useField"])(props),
      _useField2 = _slicedToArray(_useField, 2),
      field = _useField2[0],
      meta = _useField2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    htmlFor: props.id || props.name
  }, label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "text-input"
  }, field, props)), meta.touched && meta.error ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "error"
  }, meta.error) : null);
};

var ContactForm = function ContactForm() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_styles__WEBPACK_IMPORTED_MODULE_3__["Container"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intouch__WEBPACK_IMPORTED_MODULE_4__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_styles__WEBPACK_IMPORTED_MODULE_3__["Styles"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Formik"], {
    initialValues: {
      name: '',
      email: '',
      mobile: '',
      message: ''
    },
    validationSchema: yup__WEBPACK_IMPORTED_MODULE_2__["object"]({
      name: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(3, 'Must be at least 3 characters').max(15, 'Must be 15 characters or less').required('Required'),
      email: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().email('Invalid email').required('Required'),
      mobile: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().matches(/^((\\+91-?)|0)?[0-9]{11}$/, {
        message: 'Please enter valid number',
        excludeEmptyString: false
      }).required('Required'),
      message: yup__WEBPACK_IMPORTED_MODULE_2__["string"]().min(20, 'Must be at least 20 characters').max(100, 'Must be 100 characters or less')
    }),
    onSubmit: function onSubmit(values, _ref2) {
      var setSubmitting = _ref2.setSubmitting,
          resetForm = _ref2.resetForm;
      setTimeout(function () {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
      }, 3000);
    }
  }, function (props) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(formik__WEBPACK_IMPORTED_MODULE_1__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Contact Us"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTextInput, {
      label: "Name",
      name: "name",
      type: "text",
      placeholder: "Ahmed"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTextInput, {
      label: "Email",
      name: "email",
      type: "text",
      placeholder: "email@mail.com"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTextInput, {
      label: "Mobile Number",
      name: "mobile",
      type: "text",
      placeholder: "00201012345678"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CustomTextInput, {
      label: "Message",
      name: "message",
      type: "text",
      placeholder: "Message"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Contact_styles__WEBPACK_IMPORTED_MODULE_3__["Submit"], {
      type: "submit"
    }, props.isSubmitting ? '...loading' : 'Send'));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("iframe", {
    title: "location",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.5160822872676!2d31.13805870743716!3d30.000678500478983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145845576e7d76ad%3A0x4320b63c86910d1d!2z2YrZhtin2KjZiti5INmE2YTZh9mG2K_Ys9ipINmI2KfZhNiq2KzYp9ix2Kk!5e0!3m2!1sen!2seg!4v1621419038913!5m2!1sen!2seg",
    style: {
      width: "100%",
      height: "50vh",
      "border": "0"
    },
    loading: "lazy"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ContactForm);

/***/ }),

/***/ "./resources/js/components/Intouch/Contact.styles.js":
/*!***********************************************************!*\
  !*** ./resources/js/components/Intouch/Contact.styles.js ***!
  \***********************************************************/
/*! exports provided: Submit, Container, Styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Submit", function() { return Submit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Styles", function() { return Styles; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Submit = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-size: 18px;\n  color: #EFFFFA;\n  background: #6c8bc7;\n  cursor: pointer;\n  white-space: nowrap;\n  border-radius: 10px;\n  outline: none;\n  border: none;\n  width: 100%;\n  transform: none;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 10px;\n  padding: 10px 0;\n  transition: .3s ease-in-out;\n  &:hover {\n    transform: none;\n    background: #EFFFFA;\n    color: #6c8bc7;\n  }\n"])));
var Container = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n /* padding: 2rem calc((100vw - 1300px) / 2 ); */\n margin-left:auto;\n margin-right: auto;\n display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  position: relative;\n  &::before {\n    position: absolute;\n    content: \"\";\n    width: 100%;\n    background: linear-gradient(to right,#f6f6f6 0%, #f6f6f6 95%, #f6f6f6 99%);\n    left: 0;\n    top: 0;\n    height: 100%;\n    z-index: -1;\n\n    @media screen and (max-width: 768px) {\n      display: none;\n    }\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    \n  }\n"])));
var Styles = styled_components__WEBPACK_IMPORTED_MODULE_0__["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 80%;\n  margin-left:auto;\n margin-right: auto;\n @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    margin: 0 auto;\n  }\n  h3 {\n    align-self: flex-start;\n    color: #6c8bc7;\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    margin: 100px auto;\n    @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    margin: 20px auto;\n  }\n    \n    label {\n      margin-top: 20px;\n      color: #6c8bc7;\n      font-weight: bold;\n    }\n\n    input[name=message]{\n      height: 50px;\n    }\n\n    .error {\n      color: red;\n      font-size: .6em;\n    }\n  }\n"])));

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

/***/ "./resources/js/components/assets/images/img-19.jpg":
/*!**********************************************************!*\
  !*** ./resources/js/components/assets/images/img-19.jpg ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/images/img-19.jpg?9cb3ae4dfef74930d90246dfcab7767c";

/***/ }),

/***/ "./resources/js/components/pages/Contact.js":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Contact.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Header/Header */ "./resources/js/components/Header/Header.js");
/* harmony import */ var _Intouch_Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Intouch/Contact */ "./resources/js/components/Intouch/Contact.js");
/* harmony import */ var _assets_images_img_19_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/images/img-19.jpg */ "./resources/js/components/assets/images/img-19.jpg");
/* harmony import */ var _assets_images_img_19_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_images_img_19_jpg__WEBPACK_IMPORTED_MODULE_3__);





function Contact() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    src: _assets_images_img_19_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    header: 'Contact Us',
    paragraph: 'Get In Touch'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Intouch_Contact__WEBPACK_IMPORTED_MODULE_2__["default"], null));
}

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

}]);