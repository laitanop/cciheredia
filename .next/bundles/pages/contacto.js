module.exports =

        __NEXT_REGISTER_PAGE('/contacto', function() {
          var comp = 
      webpackJsonp([7],{

/***/ "./Components/Contacto/ContacForm.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField__ = __webpack_require__("./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField__);

var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/ContacForm.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }





 // import axios from 'axios';

var styles = function styles(theme) {
  return {
    container: {},
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit
    },
    button: {
      margin: theme.spacing.unit,
      backgroundColor: "#6A772A"
    }
  };
};

var ContactForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContactForm, _React$Component);

  function ContactForm(props) {
    var _this;

    _classCallCheck(this, ContactForm);

    _this = _possibleConstructorReturn(this, (ContactForm.__proto__ || Object.getPrototypeOf(ContactForm)).call(this, props));
    Object.defineProperty(_assertThisInitialized(_this), "handleChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(e) {
        _this.setState(_defineProperty({}, e.target.name, e.target.value));
      }
    });
    _this.state = {
      name: '',
      email: '',
      message: ''
    };
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleSubmit = _this.handleSubmit.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ContactForm, [{
    key: "handleSubmit",
    value: function () {
      var _handleSubmit = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(e) {
        var _state, name, email, message, form;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                _state = this.state, name = _state.name, email = _state.email, message = _state.message;
                _context.next = 4;
                return axios.post('/api/form', {
                  name: name,
                  email: email,
                  message: message
                });

              case 4:
                form = _context.sent;
                console.log(name, email, message);

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function handleSubmit(_x) {
        return _handleSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("form", {
        className: classes.container,
        noValidate: true,
        autoComplete: "off",
        onSubmit: this.handleSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField___default.a, {
        id: "filled-name",
        label: "Nombre",
        className: classes.textField,
        name: "name",
        onChange: this.handleChange,
        margin: "normal",
        variant: "filled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_TextField___default.a, {
        id: "filled-email",
        label: "Correo",
        className: classes.textField,
        name: "email",
        onChange: this.handleChange,
        margin: "normal",
        variant: "filled",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("textarea", {
        name: "message",
        onChange: this.handleChange,
        rows: "10",
        cols: "55",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        }
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Button___default.a, {
        onClick: this.handleSubmit,
        variant: "contained",
        color: "primary",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        }
      }, "Enviar"))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ContactForm;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

ContactForm.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_styles__["withStyles"])(styles)(ContactForm);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/ContacForm.js");
  reactHotLoader.register(ContactForm, "ContactForm", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/ContacForm.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/ContacForm.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/Contacto/Contacto.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("./node_modules/@material-ui/core/Paper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ContacForm__ = __webpack_require__("./Components/Contacto/ContacForm.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/Contacto.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      display: "flex",
      justifyContent: "center",
      backgroundImage: "url(../../../../static/Fotos/contactImg.svg)",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "500px"
    },
    root2: {
      marginTop: "50px"
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      marginTop: "10px",
      marginRight: "20px",
      paddingBottom: "40px",
      color: theme.palette.text.secondary
    }
  };
};

var Contacto =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contacto, _React$Component);

  function Contacto(props) {
    var _this;

    _classCallCheck(this, Contacto);

    _this = _possibleConstructorReturn(this, (Contacto.__proto__ || Object.getPrototypeOf(Contacto)).call(this, props));
    _this.state = {};
    return _this;
  }

  _createClass(Contacto, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root2,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
        item: true,
        xs: 6,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
        className: classes.paper,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, "Contacto"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "ccigalaad@gmail.com    "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, "Tel. 71-75-10-30   "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__ContacForm__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      })))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contacto;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Contacto.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Contacto);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/Contacto.js");
  reactHotLoader.register(Contacto, "Contacto", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/Contacto.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Contacto/Contacto.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("./node_modules/@material-ui/core/Grid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__ = __webpack_require__("./node_modules/@material-ui/core/Tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Footer/Footer.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    root: {
      flexGrow: 1,
      marginTop: "220px"
    },
    paper: {
      height: 140,
      width: 100
    },
    control: {
      padding: theme.spacing.unit * 2
    },
    text: {
      textAlign: "center",
      marginTop: "20px",
      marginBottom: "20px"
    },
    button: {
      backgroundColor: "#96ad32",
      color: "#fff",
      "&:hover": {
        backgroundColor: "#fff",
        color: "#96ad32"
      }
    }
  };
};

var Footer =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        container: true,
        className: classes.root,
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        container: true,
        className: classes.demo,
        justify: "center",
        spacing: 24,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default.a, {
        title: "Siguenos en Facebook",
        placement: "top-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        target: "_blank",
        variant: "fab",
        "aria-label": "Add",
        className: classes.button,
        href: "https://www.facebook.com/CCIGalaad/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fab fa-facebook-f fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default.a, {
        title: "+506 7003-8087 oficinas",
        placement: "top-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        variant: "fab",
        "aria-label": "Add",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-phone fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default.a, {
        title: "Concepci\xF3n de San Rafael de Heredia",
        placement: "top-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        variant: "fab",
        "aria-label": "Add",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-map-marker-alt fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default.a, {
        title: "info@cciheredia.cr E-mail",
        placement: "top-start",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        variant: "fab",
        "aria-label": "Add",
        className: classes.button,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "fas fa-envelope fa-2x",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }))))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        container: true,
        spacing: 0,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default.a, {
        item: true,
        xs: 12,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.text,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        }
      }, "Copyright \xA9 2018 CCI Gaalad. Todos los derechos reservados."))));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Footer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Footer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Footer/Footer.js");
  reactHotLoader.register(Footer, "Footer", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Footer/Footer.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Footer/Footer.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NavigationBar_Navigation__ = __webpack_require__("./Components/NavigationBar/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Footer_Footer__ = __webpack_require__("./Components/Footer/Footer.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Layout.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var styles = function styles(theme) {
  return {
    root: {
      width: "100%",
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper
    }
  };
};

var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, (Layout.__proto__ || Object.getPrototypeOf(Layout)).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__NavigationBar_Navigation__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }), this.props.children, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Footer_Footer__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Layout);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Layout.js");
  reactHotLoader.register(Layout, "Layout", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Layout.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Layout.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/NavigationBar/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("./node_modules/@material-ui/core/AppBar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("./node_modules/@material-ui/core/Toolbar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("./node_modules/@material-ui/core/Typography/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__ = __webpack_require__("./node_modules/@material-ui/core/IconButton/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon__ = __webpack_require__("./node_modules/@material-ui/core/Icon/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ResponsiveNavigation__ = __webpack_require__("./Components/NavigationBar/ResponsiveNavigation.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/Navigation.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  var _responsive;

  return {
    root: {
      flexGrow: 1
    },
    flex: {
      flex: 1
    },
    menuButton: _defineProperty({}, theme.breakpoints.up("md"), {
      marginLeft: 100,
      marginRight: 20
    }),
    colorBar: {
      background: "transparent"
    },
    logotext: _defineProperty({
      fontSize: "20px",
      fontWeight: "600",
      lineHeigth: "30px",
      color: "rgb(84, 84, 84)",
      paddingTop: "200px"
    }, theme.breakpoints.down("md"), {
      fontSize: "14px"
    }),
    buttons: _defineProperty({
      fontSize: "18px",
      fontWeight: "300",
      color: "rgba(0, 0, 0, 0.75)",
      textTransform: "capitalize",
      "&:hover": {
        color: "#96ad32",
        fontWeight: "600"
      }
    }, theme.breakpoints.down("md"), {
      display: "none"
    }),
    img: {
      backgroundImage: "url(\"/static/Artboard1.png\")",
      backgroundSize: "150%",
      width: "182px",
      height: "62px",
      backgroundRepeat: " no-repeat"
    },
    responsive: (_responsive = {}, _defineProperty(_responsive, theme.breakpoints.down("md"), {
      visibility: "visible"
    }), _defineProperty(_responsive, theme.breakpoints.up("md"), {
      visibility: "hidden"
    }), _responsive)
  };
};

function Navigation(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    position: "static",
    className: classes.colorBar,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton___default.a, {
    href: "/index",
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "Menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "static/Artboard1.png",
    alt: "Smiley face",
    height: "60",
    width: "70",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    className: classes.buttons,
    href: "/index",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, "Inicio"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    className: classes.buttons,
    href: "/nosotros",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, "Nosotros"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
    color: "inherit",
    className: classes.buttons,
    href: "/contacto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    }
  }, "Contacto"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.responsive,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ResponsiveNavigation__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    }
  })))));
}

Navigation.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Navigation);

/* harmony default export */ __webpack_exports__["a"] = (_default); // https://churchthemes.com/church-website-content/

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/Navigation.js");
  reactHotLoader.register(Navigation, "Navigation", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/Navigation.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/Navigation.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./Components/NavigationBar/ResponsiveNavigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer__ = __webpack_require__("./node_modules/@material-ui/core/Drawer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("./node_modules/@material-ui/core/Button/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__ = __webpack_require__("./node_modules/@material-ui/core/List/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider__ = __webpack_require__("./node_modules/@material-ui/core/Divider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__ = __webpack_require__("./node_modules/@material-ui/core/ListItem/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__ = __webpack_require__("./node_modules/@material-ui/core/ListItemText/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/ResponsiveNavigation.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var styles = function styles(theme) {
  return {
    list: {
      width: 250,
      maxWidth: '360px',
      backgroundColor: theme.palette.background.paper
    },
    fullList: {
      width: 'auto'
    },
    icon: {
      color: '#96ad32'
    }
  };
};

var ResponsiveNavigation =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ResponsiveNavigation, _React$Component);

  function ResponsiveNavigation() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, ResponsiveNavigation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ResponsiveNavigation.__proto__ || Object.getPrototypeOf(ResponsiveNavigation)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        top: false,
        left: false,
        bottom: false,
        right: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "toggleDrawer", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(side, open) {
        return function () {
          _this.setState(_defineProperty({}, side, open));
        };
      }
    }), _temp));
  }

  _createClass(ResponsiveNavigation, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var sideList = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.list,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_List___default.a, {
        component: "nav",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        href: "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, "home")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "Inicio",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        href: "nosotros",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, "language")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "Nosotros",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        href: "contacto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: classes.icon,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, "place")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default.a, {
        primary: "contacto",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      })))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }));
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default.a, {
        onClick: this.toggleDrawer('left', true),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
        className: "material-icons",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, ' ', "menu")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer___default.a, {
        open: this.state.left,
        onClose: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        tabIndex: 0,
        role: "button",
        onClick: this.toggleDrawer('left', false),
        onKeyDown: this.toggleDrawer('left', false),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, sideList)));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return ResponsiveNavigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ResponsiveNavigation.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(ResponsiveNavigation);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/ResponsiveNavigation.js");
  reactHotLoader.register(ResponsiveNavigation, "ResponsiveNavigation", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/ResponsiveNavigation.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/ResponsiveNavigation.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/AppBar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Paper
var styles = function styles(theme) {
  var backgroundColorDefault = theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900];
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      boxSizing: 'border-box',
      // Prevent padding issue with the Modal and fixed positioned AppBar.
      zIndex: theme.zIndex.appBar,
      flexShrink: 0
    },
    positionFixed: {
      position: 'fixed',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionAbsolute: {
      position: 'absolute',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionSticky: {
      position: 'sticky',
      top: 0,
      left: 'auto',
      right: 0
    },
    positionStatic: {
      position: 'static'
    },
    colorDefault: {
      backgroundColor: backgroundColorDefault,
      color: theme.palette.getContrastText(backgroundColorDefault)
    },
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    }
  };
};

exports.styles = styles;

function AppBar(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      position = props.position,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "position"]);
  var className = (0, _classnames.default)(classes.root, classes["position".concat((0, _helpers.capitalize)(position))], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), (0, _defineProperty2.default)(_classNames, 'mui-fixed', position === 'fixed'), _classNames), classNameProp);
  return _react.default.createElement(_Paper.default, (0, _extends2.default)({
    square: true,
    component: "header",
    elevation: 4,
    className: className
  }, other), children);
}

AppBar.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'default']),

  /**
   * The positioning type. The behavior of the different options is described
   * [here](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position: _propTypes.default.oneOf(['fixed', 'absolute', 'sticky', 'static'])
} : {};
AppBar.defaultProps = {
  color: 'primary',
  position: 'fixed'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiAppBar'
})(AppBar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/AppBar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _AppBar.default;
  }
});

var _AppBar = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/AppBar/AppBar.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Backdrop/Backdrop.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Fade = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Fade/index.js"));

var styles = {
  root: {
    zIndex: -1,
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  invisible: {
    backgroundColor: 'transparent'
  }
};
exports.styles = styles;

function Backdrop(props) {
  var classes = props.classes,
      className = props.className,
      invisible = props.invisible,
      open = props.open,
      transitionDuration = props.transitionDuration,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "invisible", "open", "transitionDuration"]);
  return _react.default.createElement(_Fade.default, (0, _extends2.default)({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, other), _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.invisible, invisible), className),
    "aria-hidden": "true"
  }));
}

Backdrop.propTypes =  true ? {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   */
  invisible: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is open.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Backdrop.defaultProps = {
  invisible: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiBackdrop'
})(Backdrop);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Backdrop/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Backdrop.default;
  }
});

var _Backdrop = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Backdrop/Backdrop.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/Button.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: (0, _objectSpread2.default)({}, theme.typography.button, {
      lineHeight: '1.4em',
      // Improve readability for multiline button.
      boxSizing: 'border-box',
      minWidth: 88,
      minHeight: 36,
      padding: '8px 16px',
      borderRadius: theme.shape.borderRadius,
      color: theme.palette.text.primary,
      transition: theme.transitions.create(['background-color', 'box-shadow'], {
        duration: theme.transitions.duration.short
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    }),
    label: {
      display: 'inherit',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    },
    text: {},
    textPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    textSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    flat: {},
    // legacy
    flatPrimary: {},
    // legacy
    flatSecondary: {},
    // legacy
    outlined: {
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)')
    },
    contained: {
      color: theme.palette.getContrastText(theme.palette.grey[300]),
      backgroundColor: theme.palette.grey[300],
      boxShadow: theme.shadows[2],
      '&$focusVisible': {
        boxShadow: theme.shadows[6]
      },
      '&:active': {
        boxShadow: theme.shadows[8]
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground
      },
      '&:hover': {
        backgroundColor: theme.palette.grey.A100,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.grey[300]
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground
        }
      }
    },
    containedPrimary: {
      color: theme.palette.primary.contrastText,
      backgroundColor: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.primary.main
        }
      }
    },
    containedSecondary: {
      color: theme.palette.secondary.contrastText,
      backgroundColor: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: theme.palette.secondary.dark,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: theme.palette.secondary.main
        }
      }
    },
    raised: {},
    // legacy
    raisedPrimary: {},
    // legacy
    raisedSecondary: {},
    // legacy
    fab: {
      borderRadius: '50%',
      padding: 0,
      minWidth: 0,
      width: 56,
      height: 56,
      boxShadow: theme.shadows[6],
      '&:active': {
        boxShadow: theme.shadows[12]
      }
    },
    extendedFab: {
      borderRadius: 48 / 2,
      padding: '0 16px',
      width: 'initial',
      minWidth: 48,
      height: 48
    },
    focusVisible: {},
    disabled: {},
    colorInherit: {
      color: 'inherit'
    },
    mini: {
      width: 40,
      height: 40
    },
    sizeSmall: {
      padding: '7px 8px',
      minWidth: 64,
      minHeight: 32,
      fontSize: theme.typography.pxToRem(13)
    },
    sizeLarge: {
      padding: '8px 24px',
      minWidth: 112,
      minHeight: 40,
      fontSize: theme.typography.pxToRem(15)
    },
    fullWidth: {
      width: '100%'
    }
  };
};

exports.styles = styles;

function Button(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      disabled = props.disabled,
      disableFocusRipple = props.disableFocusRipple,
      fullWidth = props.fullWidth,
      focusVisibleClassName = props.focusVisibleClassName,
      mini = props.mini,
      size = props.size,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled", "disableFocusRipple", "fullWidth", "focusVisibleClassName", "mini", "size", "variant"]);
  var fab = variant === 'fab' || variant === 'extendedFab';
  var contained = variant === 'contained' || variant === 'raised';
  var text = variant === 'text' || variant === 'flat' || variant === 'outlined';
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.fab, fab), (0, _defineProperty2.default)(_classNames, classes.mini, fab && mini), (0, _defineProperty2.default)(_classNames, classes.extendedFab, variant === 'extendedFab'), (0, _defineProperty2.default)(_classNames, classes.text, text), (0, _defineProperty2.default)(_classNames, classes.textPrimary, text && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.textSecondary, text && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.flat, variant === 'text' || variant === 'flat'), (0, _defineProperty2.default)(_classNames, classes.flatPrimary, (variant === 'text' || variant === 'flat') && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.flatSecondary, (variant === 'text' || variant === 'flat') && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.contained, contained || fab), (0, _defineProperty2.default)(_classNames, classes.containedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.containedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.raised, contained || fab), (0, _defineProperty2.default)(_classNames, classes.raisedPrimary, (contained || fab) && color === 'primary'), (0, _defineProperty2.default)(_classNames, classes.raisedSecondary, (contained || fab) && color === 'secondary'), (0, _defineProperty2.default)(_classNames, classes.outlined, variant === 'outlined'), (0, _defineProperty2.default)(_classNames, classes["size".concat((0, _helpers.capitalize)(size))], size !== 'medium'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.colorInherit, color === 'inherit'), _classNames), classNameProp);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: className,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0, _classnames.default)(classes.focusVisible, focusVisibleClassName)
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

Button.propTypes =  true ? {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the  keyboard focus ripple will be disabled.
   * `disableRipple` must also be true.
   */
  disableFocusRipple: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * If `true`, the button will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: _propTypes.default.string,

  /**
   * If `true`, and `variant` is `'fab'`, will use mini floating action button styling.
   */
  mini: _propTypes.default.bool,

  /**
   * The size of the button.
   * `small` is equivalent to the dense button styling.
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The type of button.
   */
  variant: _propTypes.default.oneOf(['text', 'flat', 'outlined', 'contained', 'raised', 'fab', 'extendedFab'])
} : {};
Button.defaultProps = {
  color: 'default',
  component: 'button',
  disabled: false,
  disableFocusRipple: false,
  fullWidth: false,
  mini: false,
  size: 'medium',
  type: 'button',
  variant: 'text'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButton'
})(Button);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Button/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Button.default;
  }
});

var _Button = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Button/Button.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/ButtonBase.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _focusVisible = __webpack_require__("./node_modules/@material-ui/core/ButtonBase/focusVisible.js");

var _TouchRipple = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/TouchRipple.js"));

var _createRippleHandler = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js"));

var styles = {
  root: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    // Remove grey highlight
    WebkitTapHighlightColor: 'transparent',
    backgroundColor: 'transparent',
    // Reset default value
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none',
    border: 0,
    margin: 0,
    // Remove the margin in Safari
    borderRadius: 0,
    padding: 0,
    // Remove the padding in Firefox
    cursor: 'pointer',
    userSelect: 'none',
    verticalAlign: 'middle',
    '-moz-appearance': 'none',
    // Reset
    '-webkit-appearance': 'none',
    // Reset
    textDecoration: 'none',
    // So we take precedent over the style of a native <a /> element.
    color: 'inherit',
    '&::-moz-focus-inner': {
      borderStyle: 'none' // Remove Firefox dotted outline.

    },
    '&$disabled': {
      pointerEvents: 'none',
      // Disable link interactions
      cursor: 'default'
    }
  },
  disabled: {},
  focusVisible: {}
};
/* istanbul ignore if */

exports.styles = styles;

if ("development" !== 'production' && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}
/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */


var ButtonBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ButtonBase, _React$Component);

  function ButtonBase() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, ButtonBase);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = ButtonBase.__proto__ || Object.getPrototypeOf(ButtonBase)).call.apply(_ref, [this].concat(args))), _this.ripple = null, _this.keyDown = false, _this.button = null, _this.focusVisibleTimeout = null, _this.focusVisibleCheckTime = 50, _this.focusVisibleMaxCheckTimes = 5, _this.handleMouseDown = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseDown', 'start', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    }), _this.handleMouseUp = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseUp', 'stop'), _this.handleMouseLeave = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'MouseLeave', 'stop', function (event) {
      if (_this.state.focusVisible) {
        event.preventDefault();
      }
    }), _this.handleTouchStart = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchStart', 'start'), _this.handleTouchEnd = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchEnd', 'stop'), _this.handleTouchMove = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'TouchMove', 'stop'), _this.handleBlur = (0, _createRippleHandler.default)((0, _assertThisInitialized2.default)(_this), 'Blur', 'stop', function () {
      clearTimeout(_this.focusVisibleTimeout);

      if (_this.state.focusVisible) {
        _this.setState({
          focusVisible: false
        });
      }
    }), _this.state = {}, _this.onRippleRef = function (node) {
      _this.ripple = node;
    }, _this.onFocusVisibleHandler = function (event) {
      _this.keyDown = false;

      _this.setState({
        focusVisible: true
      });

      if (_this.props.onFocusVisible) {
        _this.props.onFocusVisible(event);
      }
    }, _this.handleKeyDown = function (event) {
      var _this$props = _this.props,
          component = _this$props.component,
          focusRipple = _this$props.focusRipple,
          onKeyDown = _this$props.onKeyDown,
          onClick = _this$props.onClick;
      var key = (0, _keycode.default)(event); // Check if key is already down to avoid repeats being counted as multiple activations

      if (focusRipple && !_this.keyDown && _this.state.focusVisible && _this.ripple && key === 'space') {
        _this.keyDown = true;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.start(event);
        });
      }

      if (onKeyDown) {
        onKeyDown(event);
      } // Keyboard accessibility for non interactive elements


      if (event.target === event.currentTarget && component && component !== 'button' && (key === 'space' || key === 'enter') && !(_this.button.tagName === 'A' && _this.button.href)) {
        event.preventDefault();

        if (onClick) {
          onClick(event);
        }
      }
    }, _this.handleKeyUp = function (event) {
      if (_this.props.focusRipple && (0, _keycode.default)(event) === 'space' && _this.ripple && _this.state.focusVisible) {
        _this.keyDown = false;
        event.persist();

        _this.ripple.stop(event, function () {
          _this.ripple.pulsate(event);
        });
      }

      if (_this.props.onKeyUp) {
        _this.props.onKeyUp(event);
      }
    }, _this.handleFocus = function (event) {
      if (_this.props.disabled) {
        return;
      } // Fix for https://github.com/facebook/react/issues/7769


      if (!_this.button) {
        _this.button = event.currentTarget;
      }

      event.persist();
      (0, _focusVisible.detectFocusVisible)((0, _assertThisInitialized2.default)(_this), _this.button, function () {
        _this.onFocusVisibleHandler(event);
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }
    }, _temp));
  }

  (0, _createClass2.default)(ButtonBase, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.button = _reactDom.default.findDOMNode(this);
      (0, _focusVisible.listenForFocusKeys)((0, _ownerWindow.default)(this.button));

      if (this.props.action) {
        this.props.action({
          focusVisible: function focusVisible() {
            _this2.setState({
              focusVisible: true
            });

            _this2.button.focus();
          }
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.focusRipple && !this.props.disableRipple && !prevState.focusVisible && this.state.focusVisible) {
        this.ripple.pulsate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.button = null;
      clearTimeout(this.focusVisibleTimeout);
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          action = _props.action,
          buttonRef = _props.buttonRef,
          centerRipple = _props.centerRipple,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          component = _props.component,
          disabled = _props.disabled,
          disableRipple = _props.disableRipple,
          disableTouchRipple = _props.disableTouchRipple,
          focusRipple = _props.focusRipple,
          focusVisibleClassName = _props.focusVisibleClassName,
          onBlur = _props.onBlur,
          onFocus = _props.onFocus,
          onFocusVisible = _props.onFocusVisible,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          onMouseDown = _props.onMouseDown,
          onMouseLeave = _props.onMouseLeave,
          onMouseUp = _props.onMouseUp,
          onTouchEnd = _props.onTouchEnd,
          onTouchMove = _props.onTouchMove,
          onTouchStart = _props.onTouchStart,
          tabIndex = _props.tabIndex,
          TouchRippleProps = _props.TouchRippleProps,
          type = _props.type,
          other = (0, _objectWithoutProperties2.default)(_props, ["action", "buttonRef", "centerRipple", "children", "classes", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "onBlur", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "type"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.focusVisible, this.state.focusVisible), (0, _defineProperty2.default)(_classNames, focusVisibleClassName, this.state.focusVisible), _classNames), classNameProp);
      var buttonProps = {};
      var ComponentProp = component;

      if (ComponentProp === 'button' && other.href) {
        ComponentProp = 'a';
      }

      if (ComponentProp === 'button') {
        buttonProps.type = type || 'button';
        buttonProps.disabled = disabled;
      } else {
        buttonProps.role = 'button';
      }

      return _react.default.createElement(ComponentProp, (0, _extends2.default)({
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        onKeyDown: this.handleKeyDown,
        onKeyUp: this.handleKeyUp,
        onMouseDown: this.handleMouseDown,
        onMouseLeave: this.handleMouseLeave,
        onMouseUp: this.handleMouseUp,
        onTouchEnd: this.handleTouchEnd,
        onTouchMove: this.handleTouchMove,
        onTouchStart: this.handleTouchStart,
        tabIndex: disabled ? '-1' : tabIndex,
        className: className,
        ref: buttonRef
      }, buttonProps, other), children, !disableRipple && !disabled ? _react.default.createElement(_TouchRipple.default, (0, _extends2.default)({
        innerRef: this.onRippleRef,
        center: centerRipple
      }, TouchRippleProps)) : null);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (typeof prevState.focusVisible === 'undefined') {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      } // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.


      if (!prevState.prevState && nextProps.disabled && prevState.focusVisible) {
        return {
          focusVisible: false,
          lastDisabled: nextProps.disabled
        };
      }

      return {
        lastDisabled: nextProps.disabled
      };
    }
  }]);
  return ButtonBase;
}(_react.default.Component);

ButtonBase.propTypes =  true ? {
  /**
   * Callback fired when the component mounts.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports `focusVisible()` action.
   *
   * @param {object} actions This object contains all possible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * Use that property to pass a ref callback to the native button component.
   */
  buttonRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the ripples will be centered.
   * They won't start at the cursor interaction position.
   */
  centerRipple: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the base button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple effect will be disabled.
   */
  disableRipple: _propTypes.default.bool,

  /**
   * If `true`, the touch ripple effect will be disabled.
   */
  disableTouchRipple: _propTypes.default.bool,

  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * `disableRipple` must also be `false`.
   */
  focusRipple: _propTypes.default.bool,

  /**
   * This property can help a person know which element has the keyboard focus.
   * The class name will be applied when the element gain the focus throught a keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible feature](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rational for using this feature [is explain here](https://github.com/WICG/focus-visible/blob/master/explainer.md).
   */
  focusVisibleClassName: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onClick: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseLeave: _propTypes.default.func,

  /**
   * @ignore
   */
  onMouseUp: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchEnd: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchMove: _propTypes.default.func,

  /**
   * @ignore
   */
  onTouchStart: _propTypes.default.func,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * Properties applied to the `TouchRipple` element.
   */
  TouchRippleProps: _propTypes.default.object,

  /**
   * Used to control the button's purpose.
   * This property passes the value to the `type` attribute of the native button component.
   * Valid property values include `button`, `submit`, and `reset`.
   */
  type: _propTypes.default.string
} : {};
ButtonBase.defaultProps = {
  centerRipple: false,
  component: 'button',
  disableRipple: false,
  disableTouchRipple: false,
  focusRipple: false,
  tabIndex: '0',
  type: 'button'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiButtonBase'
})(ButtonBase);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/Ripple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

/**
 * @ignore - internal component.
 */
var Ripple =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Ripple, _React$Component);

  function Ripple() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Ripple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Ripple.__proto__ || Object.getPrototypeOf(Ripple)).call.apply(_ref, [this].concat(args))), _this.state = {
      visible: false,
      leaving: false
    }, _this.handleEnter = function () {
      _this.setState({
        visible: true
      });
    }, _this.handleExit = function () {
      _this.setState({
        leaving: true
      });
    }, _temp));
  }

  (0, _createClass2.default)(Ripple, [{
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          classes = _props.classes,
          classNameProp = _props.className,
          pulsate = _props.pulsate,
          rippleX = _props.rippleX,
          rippleY = _props.rippleY,
          rippleSize = _props.rippleSize,
          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "pulsate", "rippleX", "rippleY", "rippleSize"]);
      var _state = this.state,
          visible = _state.visible,
          leaving = _state.leaving;
      var rippleClassName = (0, _classnames.default)(classes.ripple, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.rippleVisible, visible), (0, _defineProperty2.default)(_classNames, classes.ripplePulsate, pulsate), _classNames), classNameProp);
      var rippleStyles = {
        width: rippleSize,
        height: rippleSize,
        top: -(rippleSize / 2) + rippleY,
        left: -(rippleSize / 2) + rippleX
      };
      var childClassName = (0, _classnames.default)(classes.child, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.childLeaving, leaving), (0, _defineProperty2.default)(_classNames2, classes.childPulsate, pulsate), _classNames2));
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), _react.default.createElement("span", {
        className: rippleClassName,
        style: rippleStyles
      }, _react.default.createElement("span", {
        className: childClassName
      })));
    }
  }]);
  return Ripple;
}(_react.default.Component);

Ripple.propTypes =  true ? {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: _propTypes.default.bool,

  /**
   * Diameter of the ripple.
   */
  rippleSize: _propTypes.default.number,

  /**
   * Horizontal position of the ripple center.
   */
  rippleX: _propTypes.default.number,

  /**
   * Vertical position of the ripple center.
   */
  rippleY: _propTypes.default.number
} : {};
Ripple.defaultProps = {
  pulsate: false
};
var _default = Ripple;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/TouchRipple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = exports.DELAY_RIPPLE = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/TransitionGroup.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Ripple = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/Ripple.js"));

var DURATION = 550;
var DELAY_RIPPLE = 80;
exports.DELAY_RIPPLE = DELAY_RIPPLE;

var styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      position: 'absolute',
      overflow: 'hidden',
      borderRadius: 'inherit',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      pointerEvents: 'none',
      zIndex: 0
    },
    ripple: {
      width: 50,
      height: 50,
      left: 0,
      top: 0,
      opacity: 0,
      position: 'absolute'
    },
    rippleVisible: {
      opacity: 0.3,
      transform: 'scale(1)',
      animation: "mui-ripple-enter ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    ripplePulsate: {
      animationDuration: "".concat(theme.transitions.duration.shorter, "ms")
    },
    child: {
      opacity: 1,
      display: 'block',
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      backgroundColor: 'currentColor'
    },
    childLeaving: {
      opacity: 0,
      animation: "mui-ripple-exit ".concat(DURATION, "ms ").concat(theme.transitions.easing.easeInOut)
    },
    childPulsate: {
      position: 'absolute',
      left: 0,
      top: 0,
      animation: "mui-ripple-pulsate 2500ms ".concat(theme.transitions.easing.easeInOut, " 200ms infinite")
    },
    '@keyframes mui-ripple-enter': {
      '0%': {
        transform: 'scale(0)',
        opacity: 0.1
      },
      '100%': {
        transform: 'scale(1)',
        opacity: 0.3
      }
    },
    '@keyframes mui-ripple-exit': {
      '0%': {
        opacity: 1
      },
      '100%': {
        opacity: 0
      }
    },
    '@keyframes mui-ripple-pulsate': {
      '0%': {
        transform: 'scale(1)'
      },
      '50%': {
        transform: 'scale(0.92)'
      },
      '100%': {
        transform: 'scale(1)'
      }
    }
  };
};

exports.styles = styles;

var TouchRipple =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2.default)(TouchRipple, _React$PureComponent);

  function TouchRipple() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, TouchRipple);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = TouchRipple.__proto__ || Object.getPrototypeOf(TouchRipple)).call.apply(_ref, [this].concat(args))), _this.ignoringMouseDown = false, _this.startTimer = null, _this.startTimerCommit = null, _this.state = {
      // eslint-disable-next-line react/no-unused-state
      nextKey: 0,
      ripples: []
    }, _this.pulsate = function () {
      _this.start({}, {
        pulsate: true
      });
    }, _this.start = function () {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var cb = arguments.length > 2 ? arguments[2] : undefined;
      var _options$pulsate = options.pulsate,
          pulsate = _options$pulsate === void 0 ? false : _options$pulsate,
          _options$center = options.center,
          center = _options$center === void 0 ? _this.props.center || options.pulsate : _options$center,
          _options$fakeElement = options.fakeElement,
          fakeElement = _options$fakeElement === void 0 ? false : _options$fakeElement;

      if (event.type === 'mousedown' && _this.ignoringMouseDown) {
        _this.ignoringMouseDown = false;
        return;
      }

      if (event.type === 'touchstart') {
        _this.ignoringMouseDown = true;
      }

      var element = fakeElement ? null : _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this));
      var rect = element ? element.getBoundingClientRect() : {
        width: 0,
        height: 0,
        left: 0,
        top: 0
      }; // Get the size of the ripple

      var rippleX;
      var rippleY;
      var rippleSize;

      if (center || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
        rippleX = Math.round(rect.width / 2);
        rippleY = Math.round(rect.height / 2);
      } else {
        var clientX = event.clientX ? event.clientX : event.touches[0].clientX;
        var clientY = event.clientY ? event.clientY : event.touches[0].clientY;
        rippleX = Math.round(clientX - rect.left);
        rippleY = Math.round(clientY - rect.top);
      }

      if (center) {
        rippleSize = Math.sqrt((2 * Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 3); // For some reason the animation is broken on Mobile Chrome if the size if even.

        if (rippleSize % 2 === 0) {
          rippleSize += 1;
        }
      } else {
        var sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
        var sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
        rippleSize = Math.sqrt(Math.pow(sizeX, 2) + Math.pow(sizeY, 2));
      } // Touche devices


      if (event.touches) {
        // Prepare the ripple effect.
        _this.startTimerCommit = function () {
          _this.startCommit({
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize,
            cb: cb
          });
        }; // Deplay the execution of the ripple effect.


        _this.startTimer = setTimeout(function () {
          if (_this.startTimerCommit) {
            _this.startTimerCommit();

            _this.startTimerCommit = null;
          }
        }, DELAY_RIPPLE); // We have to make a tradeoff with this value.
      } else {
        _this.startCommit({
          pulsate: pulsate,
          rippleX: rippleX,
          rippleY: rippleY,
          rippleSize: rippleSize,
          cb: cb
        });
      }
    }, _this.startCommit = function (params) {
      var pulsate = params.pulsate,
          rippleX = params.rippleX,
          rippleY = params.rippleY,
          rippleSize = params.rippleSize,
          cb = params.cb;

      _this.setState(function (state) {
        return {
          nextKey: state.nextKey + 1,
          ripples: (0, _toConsumableArray2.default)(state.ripples).concat([_react.default.createElement(_Ripple.default, {
            key: state.nextKey,
            classes: _this.props.classes,
            timeout: {
              exit: DURATION,
              enter: DURATION
            },
            pulsate: pulsate,
            rippleX: rippleX,
            rippleY: rippleY,
            rippleSize: rippleSize
          })])
        };
      }, cb);
    }, _this.stop = function (event, cb) {
      clearTimeout(_this.startTimer);
      var ripples = _this.state.ripples; // The touch interaction occures to quickly.
      // We still want to show ripple effect.

      if (event.type === 'touchend' && _this.startTimerCommit) {
        event.persist();

        _this.startTimerCommit();

        _this.startTimerCommit = null;
        _this.startTimer = setTimeout(function () {
          _this.stop(event, cb);
        }, 0);
        return;
      }

      _this.startTimerCommit = null;

      if (ripples && ripples.length) {
        _this.setState({
          ripples: ripples.slice(1)
        }, cb);
      }
    }, _temp));
  }

  (0, _createClass2.default)(TouchRipple, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.startTimer);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          center = _props.center,
          classes = _props.classes,
          className = _props.className,
          other = (0, _objectWithoutProperties2.default)(_props, ["center", "classes", "className"]);
      return _react.default.createElement(_TransitionGroup.default, (0, _extends2.default)({
        component: "span",
        enter: true,
        exit: true,
        className: (0, _classnames.default)(classes.root, className)
      }, other), this.state.ripples);
    }
  }]);
  return TouchRipple;
}(_react.default.PureComponent);

TouchRipple.propTypes =  true ? {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string
} : {};
TouchRipple.defaultProps = {
  center: false
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiTouchRipple'
})(TouchRipple);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/createRippleHandler.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function createRippleHandler(instance, eventName, action, cb) {
  return function handleEvent(event) {
    if (cb) {
      cb.call(instance, event);
    }

    var ignore = false;

    if (event.defaultPrevented) {
      ignore = true;
    }

    if (instance.props.disableTouchRipple && eventName !== 'Blur') {
      ignore = true;
    }

    if (!ignore && instance.ripple) {
      instance.ripple[action](event);
    }

    if (typeof instance.props["on".concat(eventName)] === 'function') {
      instance.props["on".concat(eventName)](event);
    }

    return true;
  };
}

var _default = createRippleHandler;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/focusVisible.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detectFocusVisible = detectFocusVisible;
exports.listenForFocusKeys = listenForFocusKeys;

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

//  weak
var internal = {
  focusKeyPressed: false,
  keyUpEventTimeout: -1
};

function detectFocusVisible(instance, element, callback) {
  var attempt = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
   true ? (0, _warning.default)(instance.focusVisibleCheckTime, 'Material-UI: missing instance.focusVisibleCheckTime.') : void 0;
   true ? (0, _warning.default)(instance.focusVisibleMaxCheckTimes, 'Material-UI: missing instance.focusVisibleMaxCheckTimes.') : void 0;
  instance.focusVisibleTimeout = setTimeout(function () {
    var doc = (0, _ownerDocument.default)(element);

    if (internal.focusKeyPressed && (doc.activeElement === element || element.contains(doc.activeElement))) {
      callback();
    } else if (attempt < instance.focusVisibleMaxCheckTimes) {
      detectFocusVisible(instance, element, callback, attempt + 1);
    }
  }, instance.focusVisibleCheckTime);
}

var FOCUS_KEYS = ['tab', 'enter', 'space', 'esc', 'up', 'down', 'left', 'right'];

function isFocusKey(event) {
  return FOCUS_KEYS.indexOf((0, _keycode.default)(event)) > -1;
}

var handleKeyUpEvent = function handleKeyUpEvent(event) {
  if (isFocusKey(event)) {
    internal.focusKeyPressed = true; // Let's consider that the user is using a keyboard during a window frame of 1s.

    clearTimeout(internal.keyUpEventTimeout);
    internal.keyUpEventTimeout = setTimeout(function () {
      internal.focusKeyPressed = false;
    }, 1e3);
  }
};

function listenForFocusKeys(win) {
  // The event listener will only be added once per window.
  // Duplicate event listeners will be ignored by addEventListener.
  // Also, this logic is client side only, we don't need a teardown.
  win.addEventListener('keyup', handleKeyUpEvent);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/ButtonBase/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ButtonBase.default;
  }
});

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/ButtonBase.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/CssBaseline/CssBaseline.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _styles = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

/* eslint-disable react/no-unused-prop-types */
var styles = function styles(theme) {
  return {
    '@global': {
      html: {
        WebkitFontSmoothing: 'antialiased',
        // Antialiasing.
        MozOsxFontSmoothing: 'grayscale',
        // Antialiasing.
        // Change from `box-sizing: content-box` so that `width`
        // is not affected by `padding` or `border`.
        boxSizing: 'border-box'
      },
      '*, *::before, *::after': {
        boxSizing: 'inherit'
      },
      body: {
        margin: 0,
        // Remove the margin in all browsers.
        backgroundColor: theme.palette.background.default,
        '@media print': {
          // Save printer ink.
          backgroundColor: theme.palette.common.white
        }
      }
    }
  };
};
/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */


var CssBaseline =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(CssBaseline, _React$Component);

  function CssBaseline() {
    (0, _classCallCheck2.default)(this, CssBaseline);
    return (0, _possibleConstructorReturn2.default)(this, (CssBaseline.__proto__ || Object.getPrototypeOf(CssBaseline)).apply(this, arguments));
  }

  (0, _createClass2.default)(CssBaseline, [{
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return CssBaseline;
}(_react.default.Component);

CssBaseline.propTypes =  true ? {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  classes: _propTypes.default.object.isRequired
} : {};
CssBaseline.propTypes =  true ? (0, _exactProp.default)(CssBaseline.propTypes) : {};
CssBaseline.defaultProps = {
  children: null
};

var _default = (0, _styles.withStyles)(styles, {
  name: 'MuiCssBaseline'
})(CssBaseline);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/CssBaseline/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _CssBaseline.default;
  }
});

var _CssBaseline = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/CssBaseline/CssBaseline.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/Divider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var styles = function styles(theme) {
  return {
    root: {
      height: 1,
      margin: 0,
      // Reset browser default style.
      border: 'none',
      flexShrink: 0,
      backgroundColor: theme.palette.divider
    },
    absolute: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      width: '100%'
    },
    inset: {
      marginLeft: theme.spacing.unit * 9
    },
    light: {
      backgroundColor: (0, _colorManipulator.fade)(theme.palette.divider, 0.08)
    }
  };
};

exports.styles = styles;

function Divider(props) {
  var _classNames;

  var absolute = props.absolute,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      inset = props.inset,
      light = props.light,
      other = (0, _objectWithoutProperties2.default)(props, ["absolute", "classes", "className", "component", "inset", "light"]);
  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.absolute, absolute), (0, _defineProperty2.default)(_classNames, classes.inset, inset), (0, _defineProperty2.default)(_classNames, classes.light, light), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Divider.propTypes =  true ? {
  absolute: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the divider will be indented.
   */
  inset: _propTypes.default.bool,

  /**
   * If `true`, the divider will have a lighter color.
   */
  light: _propTypes.default.bool
} : {};
Divider.defaultProps = {
  absolute: false,
  component: 'hr',
  inset: false,
  light: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDivider'
})(Divider);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Divider/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Divider.default;
  }
});

var _Divider = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Divider/Divider.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Drawer/Drawer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isHorizontal = isHorizontal;
exports.getAnchor = getAnchor;
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Slide = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Slide/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var oppositeDirection = {
  left: 'right',
  right: 'left',
  top: 'down',
  bottom: 'up'
};

function isHorizontal(props) {
  return ['left', 'right'].indexOf(props.anchor) !== -1;
}

function getAnchor(props) {
  return props.theme.direction === 'rtl' && isHorizontal(props) ? oppositeDirection[props.anchor] : props.anchor;
}

var styles = function styles(theme) {
  return {
    docked: {
      flex: '0 0 auto'
    },
    paper: {
      overflowY: 'auto',
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      flex: '1 0 auto',
      zIndex: theme.zIndex.drawer,
      WebkitOverflowScrolling: 'touch',
      // Add iOS momentum scrolling.
      // temporary style
      position: 'fixed',
      top: 0,
      // We disable the focus ring for mouse, touch and keyboard users.
      // At some point, it would be better to keep it for keyboard users.
      // :focus-ring CSS pseudo-class will help.
      outline: 'none'
    },
    paperAnchorLeft: {
      left: 0,
      right: 'auto'
    },
    paperAnchorRight: {
      left: 'auto',
      right: 0
    },
    paperAnchorTop: {
      top: 0,
      left: 0,
      bottom: 'auto',
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorBottom: {
      top: 'auto',
      left: 0,
      bottom: 0,
      right: 0,
      height: 'auto',
      maxHeight: '100vh'
    },
    paperAnchorDockedLeft: {
      borderRight: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedTop: {
      borderBottom: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedRight: {
      borderLeft: "1px solid ".concat(theme.palette.divider)
    },
    paperAnchorDockedBottom: {
      borderTop: "1px solid ".concat(theme.palette.divider)
    },
    modal: {} // Just here so people can override the style.

  };
};
/**
 * The properties of the [Modal](/api/modal) component are available
 * when `variant="temporary"` is set.
 */


exports.styles = styles;

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Drawer, _React$Component);

  function Drawer() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Drawer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Drawer.__proto__ || Object.getPrototypeOf(Drawer)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _temp));
  }

  (0, _createClass2.default)(Drawer, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          anchorProp = _props.anchor,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          elevation = _props.elevation,
          _props$ModalProps = _props.ModalProps;
      _props$ModalProps = _props$ModalProps === void 0 ? {} : _props$ModalProps;
      var BackdropPropsProp = _props$ModalProps.BackdropProps,
          ModalProps = (0, _objectWithoutProperties2.default)(_props$ModalProps, ["BackdropProps"]),
          onClose = _props.onClose,
          open = _props.open,
          PaperProps = _props.PaperProps,
          SlideProps = _props.SlideProps,
          theme = _props.theme,
          transitionDuration = _props.transitionDuration,
          variant = _props.variant,
          other = (0, _objectWithoutProperties2.default)(_props, ["anchor", "children", "classes", "className", "elevation", "ModalProps", "onClose", "open", "PaperProps", "SlideProps", "theme", "transitionDuration", "variant"]);
      var anchor = getAnchor(this.props);

      var drawer = _react.default.createElement(_Paper.default, (0, _extends2.default)({
        elevation: variant === 'temporary' ? elevation : 0,
        square: true,
        className: (0, _classnames.default)(classes.paper, classes["paperAnchor".concat((0, _helpers.capitalize)(anchor))], (0, _defineProperty2.default)({}, classes["paperAnchorDocked".concat((0, _helpers.capitalize)(anchor))], variant !== 'temporary'))
      }, PaperProps), children);

      if (variant === 'permanent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), drawer);
      }

      var slidingDrawer = _react.default.createElement(_Slide.default, (0, _extends2.default)({
        "in": open,
        direction: oppositeDirection[anchor],
        timeout: transitionDuration,
        appear: this.mounted
      }, SlideProps), drawer);

      if (variant === 'persistent') {
        return _react.default.createElement("div", (0, _extends2.default)({
          className: (0, _classnames.default)(classes.docked, className)
        }, other), slidingDrawer);
      } // variant === temporary


      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        BackdropProps: (0, _objectSpread2.default)({}, BackdropPropsProp, {
          transitionDuration: transitionDuration
        }),
        className: (0, _classnames.default)(classes.modal, className),
        open: open,
        onClose: onClose
      }, other, ModalProps), slidingDrawer);
    }
  }]);
  return Drawer;
}(_react.default.Component);

Drawer.propTypes =  true ? {
  /**
   * Side from which the drawer will appear.
   */
  anchor: _propTypes.default.oneOf(['left', 'top', 'right', 'bottom']),

  /**
   * The contents of the drawer.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The elevation of the drawer.
   */
  elevation: _propTypes.default.number,

  /**
   * Properties applied to the `Modal` element.
   */
  ModalProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * If `true`, the drawer is open.
   */
  open: _propTypes.default.bool,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * Properties applied to the `Slide` element.
   */
  SlideProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The variant of drawer.
   */
  variant: _propTypes.default.oneOf(['permanent', 'persistent', 'temporary'])
} : {};
Drawer.defaultProps = {
  anchor: 'left',
  elevation: 16,
  open: false,
  transitionDuration: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  },
  variant: 'temporary' // Mobile first.

};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiDrawer',
  flip: false,
  withTheme: true
})(Drawer);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Drawer/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Drawer.default;
  }
});

var _Drawer = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Drawer/Drawer.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Fade/Fade.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
var styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * The Fade transition is used by the [Modal](/utils/modals) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Fade =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Fade, _React$Component);

  function Fade() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Fade);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Fade.__proto__ || Object.getPrototypeOf(Fade)).call.apply(_ref, [this].concat(args))), _this.handleEnter = function (node) {
      var theme = _this.props.theme;
      (0, _utils.reflow)(node); // So the animation always start from the start.

      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;
      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
      node.style.transition = theme.transitions.create('opacity', transitionProps);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _temp));
  }

  (0, _createClass2.default)(Fade, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onExit", "style", "theme"]);
      var style = (0, _objectSpread2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({
          style: (0, _objectSpread2.default)({
            opacity: 0,
            willChange: 'opacity'
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Fade;
}(_react.default.Component);

Fade.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, the component will transition in.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Fade.defaultProps = {
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withTheme.default)()(Fade);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Fade/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Fade.default;
  }
});

var _Fade = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Fade/Fade.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/FormControl.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Input = __webpack_require__("./node_modules/@material-ui/core/Input/Input.js");

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _reactHelpers = __webpack_require__("./node_modules/@material-ui/core/utils/reactHelpers.js");

var styles = function styles(theme) {
  return {
    root: {
      display: 'inline-flex',
      flexDirection: 'column',
      position: 'relative',
      // Reset fieldset default style
      minWidth: 0,
      padding: 0,
      margin: 0,
      border: 0
    },
    marginNormal: {
      marginTop: theme.spacing.unit * 2,
      marginBottom: theme.spacing.unit
    },
    marginDense: {
      marginTop: theme.spacing.unit,
      marginBottom: theme.spacing.unit / 2
    },
    fullWidth: {
      width: '100%'
    }
  };
};
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibilty and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 */


exports.styles = styles;

var FormControl =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(FormControl, _React$Component);

  function FormControl(props) {
    var _this;

    (0, _classCallCheck2.default)(this, FormControl);
    _this = (0, _possibleConstructorReturn2.default)(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props)); // We need to iterate through the children and find the Input in order
    // to fully support server side rendering.

    _this.state = {
      adornedStart: false,
      filled: false,
      focused: false
    };

    _this.handleFocus = function () {
      _this.setState(function (state) {
        return !state.focused ? {
          focused: true
        } : null;
      });
    };

    _this.handleBlur = function () {
      _this.setState(function (state) {
        return state.focused ? {
          focused: false
        } : null;
      });
    };

    _this.handleDirty = function () {
      if (!_this.state.filled) {
        _this.setState({
          filled: true
        });
      }
    };

    _this.handleClean = function () {
      if (_this.state.filled) {
        _this.setState({
          filled: false
        });
      }
    };

    var children = _this.props.children;

    if (children) {
      _react.default.Children.forEach(children, function (child) {
        if (!(0, _reactHelpers.isMuiElement)(child, ['Input', 'Select', 'NativeSelect'])) {
          return;
        }

        if ((0, _Input.isFilled)(child.props, true)) {
          _this.state.filled = true;
        }

        var input = (0, _reactHelpers.isMuiElement)(child, ['Select', 'NativeSelect']) ? child.props.input : child;

        if (input && (0, _Input.isAdornedStart)(input.props)) {
          _this.state.adornedStart = true;
        }
      });
    }

    return _this;
  }

  (0, _createClass2.default)(FormControl, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _props = this.props,
          disabled = _props.disabled,
          error = _props.error,
          required = _props.required,
          margin = _props.margin;
      var _state = this.state,
          adornedStart = _state.adornedStart,
          filled = _state.filled,
          focused = _state.focused;
      return {
        muiFormControl: {
          adornedStart: adornedStart,
          disabled: disabled,
          error: error,
          filled: filled,
          focused: focused,
          margin: margin,
          onBlur: this.handleBlur,
          onEmpty: this.handleClean,
          onFilled: this.handleDirty,
          onFocus: this.handleFocus,
          required: required
        }
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props2 = this.props,
          classes = _props2.classes,
          className = _props2.className,
          Component = _props2.component,
          disabled = _props2.disabled,
          error = _props2.error,
          fullWidth = _props2.fullWidth,
          margin = _props2.margin,
          required = _props2.required,
          other = (0, _objectWithoutProperties2.default)(_props2, ["classes", "className", "component", "disabled", "error", "fullWidth", "margin", "required"]);
      return _react.default.createElement(Component, (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["margin".concat((0, _helpers.capitalize)(margin))], margin !== 'none'), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), _classNames), className)
      }, other));
    }
  }]);
  return FormControl;
}(_react.default.Component);

FormControl.propTypes =  true ? {
  /**
   * The contents of the form control.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the component will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool
} : {};
FormControl.defaultProps = {
  component: 'div',
  disabled: false,
  error: false,
  fullWidth: false,
  margin: 'none',
  required: false
};
FormControl.childContextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormControl'
})(FormControl);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormControl/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormControl.default;
  }
});

var _FormControl = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormControl/FormControl.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormHelperText/FormHelperText.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: {
      color: theme.palette.text.secondary,
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(12),
      textAlign: 'left',
      marginTop: theme.spacing.unit,
      lineHeight: '1em',
      minHeight: '1em',
      margin: 0,
      '&$error': {
        color: theme.palette.error.main
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },
    error: {},
    disabled: {},
    marginDense: {
      marginTop: theme.spacing.unit / 2
    }
  };
};

exports.styles = styles;

function FormHelperText(props, context) {
  var _classNames;

  var classes = props.classes,
      classNameProp = props.className,
      disabledProp = props.disabled,
      errorProp = props.error,
      marginProp = props.margin,
      Component = props.component,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "disabled", "error", "margin", "component"]);
  var muiFormControl = context.muiFormControl;
  var disabled = disabledProp;
  var error = errorProp;
  var margin = marginProp;

  if (muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }

    if (typeof margin === 'undefined') {
      margin = muiFormControl.margin;
    }
  }

  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.error, error), (0, _defineProperty2.default)(_classNames, classes.marginDense, margin === 'dense'), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

FormHelperText.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense'])
} : {};
FormHelperText.defaultProps = {
  component: 'p'
};
FormHelperText.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormHelperText'
})(FormHelperText);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormHelperText/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormHelperText.default;
  }
});

var _FormHelperText = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormHelperText/FormHelperText.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/FormLabel/FormLabel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: {
      fontFamily: theme.typography.fontFamily,
      color: theme.palette.text.secondary,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: 1,
      padding: 0,
      '&$focused': {
        color: theme.palette.primary[theme.palette.type === 'light' ? 'dark' : 'light']
      },
      '&$disabled': {
        color: theme.palette.text.disabled
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },
    focused: {},
    disabled: {},
    error: {},
    asterisk: {
      '&$error': {
        color: theme.palette.error.main
      }
    }
  };
};

exports.styles = styles;

function FormLabel(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      disabledProp = props.disabled,
      errorProp = props.error,
      focusedProp = props.focused,
      requiredProp = props.required,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "component", "disabled", "error", "focused", "required"]);
  var muiFormControl = context.muiFormControl;
  var required = requiredProp;
  var focused = focusedProp;
  var disabled = disabledProp;
  var error = errorProp;

  if (muiFormControl) {
    if (typeof required === 'undefined') {
      required = muiFormControl.required;
    }

    if (typeof focused === 'undefined') {
      focused = muiFormControl.focused;
    }

    if (typeof disabled === 'undefined') {
      disabled = muiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = muiFormControl.error;
    }
  }

  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.focused, focused), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.error, error), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other), children, required && _react.default.createElement("span", {
    className: (0, _classnames.default)(classes.asterisk, (0, _defineProperty2.default)({}, classes.error, error))
  }, "\u2009*"));
}

FormLabel.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label should be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: _propTypes.default.bool,

  /**
   * If `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool
} : {};
FormLabel.defaultProps = {
  component: 'label'
};
FormLabel.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiFormLabel'
})(FormLabel);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/FormLabel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _FormLabel.default;
  }
});

var _FormLabel = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormLabel/FormLabel.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/Grid.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _createBreakpoints = __webpack_require__("./node_modules/@material-ui/core/styles/createBreakpoints.js");

var _requirePropFactory = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/requirePropFactory.js"));

// A grid component using the following libs as inspiration.
//
// For the implementation:
// - http://v4-alpha.getbootstrap.com/layout/flexbox-grid/
// - https://github.com/kristoferjoseph/flexboxgrid/blob/master/src/css/flexboxgrid.css
// - https://github.com/roylee0704/react-flexbox-grid
// - https://material.angularjs.org/latest/layout/introduction
//
// Follow this flexbox Guide to better understand the underlying model:
// - https://css-tricks.com/snippets/css/a-guide-to-flexbox/
var GUTTERS = [0, 8, 16, 24, 32, 40];
var GRID_SIZES = ['auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function generateGrid(globalStyles, theme, breakpoint) {
  var styles = {};
  GRID_SIZES.forEach(function (size) {
    var key = "grid-".concat(breakpoint, "-").concat(size);

    if (size === true) {
      // For the auto layouting
      styles[key] = {
        flexBasis: 0,
        flexGrow: 1,
        maxWidth: '100%'
      };
      return;
    }

    if (size === 'auto') {
      styles[key] = {
        flexBasis: 'auto',
        flexGrow: 0,
        maxWidth: 'none'
      };
      return;
    } // Only keep 6 significant numbers.


    var width = "".concat(Math.round(size / 12 * 10e6) / 10e4, "%"); // Close to the bootstrap implementation:
    // https://github.com/twbs/bootstrap/blob/8fccaa2439e97ec72a4b7dc42ccc1f649790adb0/scss/mixins/_grid.scss#L41

    styles[key] = {
      flexBasis: width,
      flexGrow: 0,
      maxWidth: width
    };
  }); // No need for a media query for the first size.

  if (breakpoint === 'xs') {
    (0, _extends2.default)(globalStyles, styles);
  } else {
    globalStyles[theme.breakpoints.up(breakpoint)] = styles;
  }
}

function generateGutter(theme, breakpoint) {
  var styles = {};
  GUTTERS.forEach(function (spacing, index) {
    if (index === 0) {
      // Skip the default style.
      return;
    }

    styles["spacing-".concat(breakpoint, "-").concat(spacing)] = {
      margin: -spacing / 2,
      width: "calc(100% + ".concat(spacing, "px)"),
      '& > $item': {
        padding: spacing / 2
      }
    };
  });
  return styles;
} // Default CSS values
// flex: '0 1 auto',
// flexDirection: 'row',
// alignItems: 'flex-start',
// flexWrap: 'nowrap',
// justifyContent: 'flex-start',


var styles = function styles(theme) {
  return (0, _objectSpread2.default)({
    container: {
      boxSizing: 'border-box',
      display: 'flex',
      flexWrap: 'wrap',
      width: '100%'
    },
    item: {
      boxSizing: 'border-box',
      margin: '0' // For instance, it's useful when used with a `figure` element.

    },
    zeroMinWidth: {
      minWidth: 0
    },
    'direction-xs-column': {
      flexDirection: 'column'
    },
    'direction-xs-column-reverse': {
      flexDirection: 'column-reverse'
    },
    'direction-xs-row-reverse': {
      flexDirection: 'row-reverse'
    },
    'wrap-xs-nowrap': {
      flexWrap: 'nowrap'
    },
    'wrap-xs-wrap-reverse': {
      flexWrap: 'wrap-reverse'
    },
    'align-items-xs-center': {
      alignItems: 'center'
    },
    'align-items-xs-flex-start': {
      alignItems: 'flex-start'
    },
    'align-items-xs-flex-end': {
      alignItems: 'flex-end'
    },
    'align-items-xs-baseline': {
      alignItems: 'baseline'
    },
    'align-content-xs-center': {
      alignContent: 'center'
    },
    'align-content-xs-flex-start': {
      alignContent: 'flex-start'
    },
    'align-content-xs-flex-end': {
      alignContent: 'flex-end'
    },
    'align-content-xs-space-between': {
      alignContent: 'space-between'
    },
    'align-content-xs-space-around': {
      alignContent: 'space-around'
    },
    'justify-xs-center': {
      justifyContent: 'center'
    },
    'justify-xs-flex-end': {
      justifyContent: 'flex-end'
    },
    'justify-xs-space-between': {
      justifyContent: 'space-between'
    },
    'justify-xs-space-around': {
      justifyContent: 'space-around'
    }
  }, generateGutter(theme, 'xs'), _createBreakpoints.keys.reduce(function (accumulator, key) {
    // Use side effect over immutability for better performance.
    generateGrid(accumulator, theme, key);
    return accumulator;
  }, {}));
};

exports.styles = styles;

function Grid(props) {
  var _classNames;

  var alignContent = props.alignContent,
      alignItems = props.alignItems,
      classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      container = props.container,
      direction = props.direction,
      item = props.item,
      justify = props.justify,
      lg = props.lg,
      md = props.md,
      sm = props.sm,
      spacing = props.spacing,
      wrap = props.wrap,
      xl = props.xl,
      xs = props.xs,
      zeroMinWidth = props.zeroMinWidth,
      other = (0, _objectWithoutProperties2.default)(props, ["alignContent", "alignItems", "classes", "className", "component", "container", "direction", "item", "justify", "lg", "md", "sm", "spacing", "wrap", "xl", "xs", "zeroMinWidth"]);
  var className = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.container, container), (0, _defineProperty2.default)(_classNames, classes.item, item), (0, _defineProperty2.default)(_classNames, classes.zeroMinWidth, zeroMinWidth), (0, _defineProperty2.default)(_classNames, classes["spacing-xs-".concat(String(spacing))], container && spacing !== 0), (0, _defineProperty2.default)(_classNames, classes["direction-xs-".concat(String(direction))], direction !== Grid.defaultProps.direction), (0, _defineProperty2.default)(_classNames, classes["wrap-xs-".concat(String(wrap))], wrap !== Grid.defaultProps.wrap), (0, _defineProperty2.default)(_classNames, classes["align-items-xs-".concat(String(alignItems))], alignItems !== Grid.defaultProps.alignItems), (0, _defineProperty2.default)(_classNames, classes["align-content-xs-".concat(String(alignContent))], alignContent !== Grid.defaultProps.alignContent), (0, _defineProperty2.default)(_classNames, classes["justify-xs-".concat(String(justify))], justify !== Grid.defaultProps.justify), (0, _defineProperty2.default)(_classNames, classes["grid-xs-".concat(String(xs))], xs !== false), (0, _defineProperty2.default)(_classNames, classes["grid-sm-".concat(String(sm))], sm !== false), (0, _defineProperty2.default)(_classNames, classes["grid-md-".concat(String(md))], md !== false), (0, _defineProperty2.default)(_classNames, classes["grid-lg-".concat(String(lg))], lg !== false), (0, _defineProperty2.default)(_classNames, classes["grid-xl-".concat(String(xl))], xl !== false), _classNames), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Grid.propTypes =  true ? {
  /**
   * Defines the `align-content` style property.
   * It's applied for all screen sizes.
   */
  alignContent: _propTypes.default.oneOf(['stretch', 'center', 'flex-start', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the `align-items` style property.
   * It's applied for all screen sizes.
   */
  alignItems: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'stretch', 'baseline']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the component will have the flex *container* behavior.
   * You should be wrapping *items* with a *container*.
   */
  container: _propTypes.default.bool,

  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   */
  direction: _propTypes.default.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),

  /**
   * If `true`, the component will have the flex *item* behavior.
   * You should be wrapping *items* with a *container*.
   */
  item: _propTypes.default.bool,

  /**
   * Defines the `justify-content` style property.
   * It is applied for all screen sizes.
   */
  justify: _propTypes.default.oneOf(['flex-start', 'center', 'flex-end', 'space-between', 'space-around']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `lg` breakpoint and wider screens if not overridden.
   */
  lg: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `md` breakpoint and wider screens if not overridden.
   */
  md: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `sm` breakpoint and wider screens if not overridden.
   */
  sm: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the space between the type `item` component.
   * It can only be used on a type `container` component.
   */
  spacing: _propTypes.default.oneOf(GUTTERS),

  /**
   * Defines the `flex-wrap` style property.
   * It's applied for all screen sizes.
   */
  wrap: _propTypes.default.oneOf(['nowrap', 'wrap', 'wrap-reverse']),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for the `xl` breakpoint and wider screens.
   */
  xl: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * Defines the number of grids the component is going to use.
   * It's applied for all the screen sizes with the lowest priority.
   */
  xs: _propTypes.default.oneOf([false, 'auto', true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),

  /**
   * If `true`, it sets `min-width: 0` on the item.
   * Refer to the limitations section of the documentation to better understand the use case.
   */
  zeroMinWidth: _propTypes.default.bool
} : {};
Grid.defaultProps = {
  alignContent: 'stretch',
  alignItems: 'stretch',
  component: 'div',
  container: false,
  direction: 'row',
  item: false,
  justify: 'flex-start',
  lg: false,
  md: false,
  sm: false,
  spacing: 0,
  wrap: 'wrap',
  xl: false,
  xs: false,
  zeroMinWidth: false
};
var StyledGrid = (0, _withStyles.default)(styles, {
  name: 'MuiGrid'
})(Grid);

if (true) {
  var requireProp = (0, _requirePropFactory.default)('Grid');
  StyledGrid.propTypes = (0, _objectSpread2.default)({}, StyledGrid.propTypes, {
    alignContent: requireProp('container'),
    alignItems: requireProp('container'),
    direction: requireProp('container'),
    justify: requireProp('container'),
    lg: requireProp('item'),
    md: requireProp('item'),
    sm: requireProp('item'),
    spacing: requireProp('container'),
    wrap: requireProp('container'),
    xs: requireProp('item'),
    zeroMinWidth: requireProp('zeroMinWidth')
  });
}

var _default = StyledGrid;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grid/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grid.default;
  }
});

var _Grid = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grid/Grid.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Grow/Grow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
function getScale(value) {
  return "scale(".concat(value, ", ").concat(Math.pow(value, 2), ")");
}

var styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: getScale(1)
  }
};
/**
 * The Grow transition is used by the [Popover](/utils/popovers) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Grow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Grow, _React$Component);

  function Grow() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Grow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Grow.__proto__ || Object.getPrototypeOf(Grow)).call.apply(_ref, [this].concat(args))), _this.autoTimeout = null, _this.timer = null, _this.handleEnter = function (node) {
      var _this$props = _this.props,
          theme = _this$props.theme,
          timeout = _this$props.timeout;
      (0, _utils.reflow)(node); // So the animation always start from the start.

      var _getTransitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      var duration = 0;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })].join(',');

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleExit = function (node) {
      var _this$props2 = _this.props,
          theme = _this$props2.theme,
          timeout = _this$props2.timeout;
      var duration = 0;

      var _getTransitionProps2 = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [theme.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), theme.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })].join(',');
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.addEndListener = function (_, next) {
      if (_this.props.timeout === 'auto') {
        _this.timer = setTimeout(next, _this.autoTimeout || 0);
      }
    }, _temp));
  }

  (0, _createClass2.default)(Grow, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.timer);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onExit = _props.onExit,
          styleProp = _props.style,
          theme = _props.theme,
          timeout = _props.timeout,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onExit", "style", "theme", "timeout"]);
      var style = (0, _objectSpread2.default)({}, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_Transition.default, (0, _extends2.default)({
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        addEndListener: this.addEndListener,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({
          style: (0, _objectSpread2.default)({
            opacity: 0,
            transform: getScale(0.75)
          }, styles[state], style)
        }, childProps));
      });
    }
  }]);
  return Grow;
}(_react.default.Component);

Grow.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Grow.defaultProps = {
  timeout: 'auto'
};
Grow.muiSupportAuto = true;

var _default = (0, _withTheme.default)()(Grow);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Grow/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Grow.default;
  }
});

var _Grow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grow/Grow.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Icon/Icon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      // Chrome fix for https://bugs.chromium.org/p/chromium/issues/detail?id=820541
      // To remove at some point.
      overflow: 'hidden',
      flexShrink: 0
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    }
  };
};

exports.styles = styles;

function Icon(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color"]);
  return _react.default.createElement("span", (0, _extends2.default)({
    className: (0, _classnames.default)('material-icons', classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), className),
    "aria-hidden": "true"
  }, other), children);
}

Icon.propTypes =  true ? {
  /**
   * The name of the icon font ligature.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled'])
} : {};
Icon.defaultProps = {
  color: 'inherit'
};
Icon.muiName = 'Icon';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiIcon'
})(Icon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Icon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Icon.default;
  }
});

var _Icon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Icon/Icon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/IconButton.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

// @inheritedComponent ButtonBase
var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      flex: '0 0 auto',
      fontSize: theme.typography.pxToRem(24),
      width: 48,
      height: 48,
      padding: 0,
      borderRadius: '50%',
      color: theme.palette.action.active,
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.action.active, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        },
        '&$disabled': {
          backgroundColor: 'transparent'
        }
      },
      '&$disabled': {
        color: theme.palette.action.disabled
      }
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.primary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    colorSecondary: {
      color: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: (0, _colorManipulator.fade)(theme.palette.secondary.main, theme.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    disabled: {},
    label: {
      width: '100%',
      display: 'flex',
      alignItems: 'inherit',
      justifyContent: 'inherit'
    }
  };
};
/**
 * Refer to the [Icons](/style/icons) section of the documentation
 * regarding the available icon options.
 */


exports.styles = styles;

function IconButton(props) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "disabled"]);
  return _react.default.createElement(_ButtonBase.default, (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), _classNames), className),
    centerRipple: true,
    focusRipple: true,
    disabled: disabled
  }, other), _react.default.createElement("span", {
    className: classes.label
  }, children));
}

IconButton.propTypes =  true ? {
  /**
   * The icon element.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['default', 'inherit', 'primary', 'secondary']),

  /**
   * If `true`, the button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the ripple will be disabled.
   */
  disableRipple: _propTypes.default.bool
} : {};
IconButton.defaultProps = {
  color: 'default',
  disabled: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiIconButton'
})(IconButton);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/IconButton/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _IconButton.default;
  }
});

var _IconButton = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/IconButton/IconButton.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Input/Input.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hasValue = hasValue;
exports.isFilled = isFilled;
exports.isAdornedStart = isAdornedStart;
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Textarea = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Input/Textarea.js"));

// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
} // Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.


function isFilled(obj) {
  var SSR = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
} // Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.


function isAdornedStart(obj) {
  return obj.startAdornment;
}

var styles = function styles(theme) {
  var light = theme.palette.type === 'light';
  var placeholder = {
    color: 'currentColor',
    opacity: light ? 0.42 : 0.5,
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  };
  var placeholderHidden = {
    opacity: 0
  };
  var placeholderVisible = {
    opacity: light ? 0.42 : 0.5
  };
  var bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  return {
    root: {
      // Mimics the default input display property used by browsers for an input.
      display: 'inline-flex',
      position: 'relative',
      fontFamily: theme.typography.fontFamily,
      color: light ? 'rgba(0, 0, 0, 0.87)' : theme.palette.common.white,
      fontSize: theme.typography.pxToRem(16),
      lineHeight: '1.1875em',
      // Reset (19px), match the native input line-height
      '&$disabled': {
        color: theme.palette.text.disabled
      }
    },
    formControl: {
      'label + &': {
        marginTop: theme.spacing.unit * 2
      }
    },
    focused: {},
    disabled: {},
    underline: {
      '&:after': {
        borderBottom: "2px solid ".concat(theme.palette.primary[light ? 'dark' : 'light']),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '""',
        position: 'absolute',
        right: 0,
        transform: 'scaleX(0)',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shorter,
          easing: theme.transitions.easing.easeOut
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&$focused:after': {
        transform: 'scaleX(1)'
      },
      '&$error:after': {
        borderBottomColor: theme.palette.error.main,
        transform: 'scaleX(1)' // error is always underlined in red

      },
      '&:before': {
        borderBottom: "1px solid ".concat(bottomLineColor),
        left: 0,
        bottom: 0,
        // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
        content: '"\\00a0"',
        position: 'absolute',
        right: 0,
        transition: theme.transitions.create('border-bottom-color', {
          duration: theme.transitions.duration.shorter
        }),
        pointerEvents: 'none' // Transparent to the hover style.

      },
      '&:hover:not($disabled):not($focused):not($error):before': {
        borderBottom: "2px solid ".concat(theme.palette.text.primary)
      },
      '&$disabled:before': {
        borderBottom: "1px dotted ".concat(bottomLineColor)
      }
    },
    error: {},
    multiline: {
      padding: "".concat(theme.spacing.unit - 2, "px 0 ").concat(theme.spacing.unit - 1, "px")
    },
    fullWidth: {
      width: '100%'
    },
    input: {
      font: 'inherit',
      color: 'currentColor',
      padding: "".concat(theme.spacing.unit - 2, "px 0 ").concat(theme.spacing.unit - 1, "px"),
      border: 0,
      boxSizing: 'content-box',
      verticalAlign: 'middle',
      background: 'none',
      margin: 0,
      // Reset for Safari
      // Remove grey highlight
      WebkitTapHighlightColor: 'transparent',
      display: 'block',
      // Make the flex item shrink with Firefox
      minWidth: 0,
      flexGrow: 1,
      '&::-webkit-input-placeholder': placeholder,
      '&::-moz-placeholder': placeholder,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholder,
      // IE 11
      '&::-ms-input-placeholder': placeholder,
      // Edge
      '&:focus': {
        outline: 0
      },
      // Reset Firefox invalid required input style
      '&:invalid': {
        boxShadow: 'none'
      },
      '&::-webkit-search-decoration': {
        // Remove the padding when type=search.
        '-webkit-appearance': 'none'
      },
      // Show and hide the placeholder logic
      'label[data-shrink=false] + $formControl &': {
        '&::-webkit-input-placeholder': placeholderHidden,
        '&::-moz-placeholder': placeholderHidden,
        // Firefox 19+
        '&:-ms-input-placeholder': placeholderHidden,
        // IE 11
        '&::-ms-input-placeholder': placeholderHidden,
        // Edge
        '&:focus::-webkit-input-placeholder': placeholderVisible,
        '&:focus::-moz-placeholder': placeholderVisible,
        // Firefox 19+
        '&:focus:-ms-input-placeholder': placeholderVisible,
        // IE 11
        '&:focus::-ms-input-placeholder': placeholderVisible // Edge

      },
      '&$disabled': {
        opacity: 1 // Reset iOS opacity

      }
    },
    inputMarginDense: {
      paddingTop: theme.spacing.unit / 2 - 1
    },
    inputMultiline: {
      resize: 'none',
      padding: 0
    },
    inputType: {
      // type="date" or type="time", etc. have specific styles we need to reset.
      height: '1.1875em' // Reset (19px), match the native input line-height

    },
    inputTypeSearch: {
      // Improve type search style.
      '-moz-appearance': 'textfield',
      '-webkit-appearance': 'textfield'
    }
  };
};

exports.styles = styles;

function formControlState(props, context) {
  var disabled = props.disabled;
  var error = props.error;
  var margin = props.margin;

  if (context && context.muiFormControl) {
    if (typeof disabled === 'undefined') {
      disabled = context.muiFormControl.disabled;
    }

    if (typeof error === 'undefined') {
      error = context.muiFormControl.error;
    }

    if (typeof margin === 'undefined') {
      margin = context.muiFormControl.margin;
    }
  }

  return {
    disabled: disabled,
    error: error,
    margin: margin
  };
}

var Input =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Input, _React$Component);

  // Holds the input reference
  function Input(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, Input);
    _this = (0, _possibleConstructorReturn2.default)(this, (Input.__proto__ || Object.getPrototypeOf(Input)).call(this, props, context));
    _this.isControlled = _this.props.value != null;
    _this.input = null;
    _this.state = {
      focused: false
    };

    _this.handleFocus = function (event) {
      // Fix a bug with IE11 where the focus/blur events are triggered
      // while the input is disabled.
      if (formControlState(_this.props, _this.context).disabled) {
        event.stopPropagation();
        return;
      }

      _this.setState({
        focused: true
      });

      if (_this.props.onFocus) {
        _this.props.onFocus(event);
      }

      var muiFormControl = _this.context.muiFormControl;

      if (muiFormControl && muiFormControl.onFocus) {
        muiFormControl.onFocus(event);
      }
    };

    _this.handleBlur = function (event) {
      _this.setState({
        focused: false
      });

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }

      var muiFormControl = _this.context.muiFormControl;

      if (muiFormControl && muiFormControl.onBlur) {
        muiFormControl.onBlur(event);
      }
    };

    _this.handleChange = function (event) {
      if (!_this.isControlled) {
        _this.checkDirty(_this.input);
      } // Perform in the willUpdate


      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.handleRefInput = function (node) {
      _this.input = node;
      var ref;

      if (_this.props.inputRef) {
        ref = _this.props.inputRef;
      } else if (_this.props.inputProps && _this.props.inputProps.ref) {
        ref = _this.props.inputProps.ref;
      }

      if (ref) {
        if (typeof ref === 'function') {
          ref(node);
        } else {
          ref.current = node;
        }
      }
    };

    if (_this.isControlled) {
      _this.checkDirty(props);
    }

    var componentWillReceiveProps = function componentWillReceiveProps(nextProps, nextContext) {
      // The blur won't fire when the disabled state is set on a focused input.
      // We need to book keep the focused state manually.
      if (!formControlState(_this.props, _this.context).disabled && formControlState(nextProps, nextContext).disabled) {
        _this.setState({
          focused: false
        });
      }
    };

    var componentWillUpdate = function componentWillUpdate(nextProps, nextState, nextContext) {
      // Book keep the focused state.
      if (!formControlState(_this.props, _this.context).disabled && formControlState(nextProps, nextContext).disabled) {
        var muiFormControl = _this.context.muiFormControl;

        if (muiFormControl && muiFormControl.onBlur) {
          muiFormControl.onBlur();
        }
      }
    }; // Support for react >= 16.3.0 && < 17.0.0

    /* istanbul ignore else */


    if (_react.default.createContext) {
      _this.UNSAFE_componentWillReceiveProps = componentWillReceiveProps;
      _this.UNSAFE_componentWillUpdate = componentWillUpdate;
    } else {
      _this.componentWillReceiveProps = componentWillReceiveProps;
      _this.componentWillUpdate = componentWillUpdate;
    }

    return _this;
  }

  (0, _createClass2.default)(Input, [{
    key: "getChildContext",
    value: function getChildContext() {
      // We are consuming the parent muiFormControl context.
      // We don't want a child to consume it a second time.
      return {
        muiFormControl: null
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.isControlled) {
        this.checkDirty(this.input);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.isControlled) {
        this.checkDirty(this.props);
      } // else performed in the onChange

    }
  }, {
    key: "checkDirty",
    value: function checkDirty(obj) {
      var muiFormControl = this.context.muiFormControl;

      if (isFilled(obj)) {
        if (muiFormControl && muiFormControl.onFilled) {
          muiFormControl.onFilled();
        }

        if (this.props.onFilled) {
          this.props.onFilled();
        }

        return;
      }

      if (muiFormControl && muiFormControl.onEmpty) {
        muiFormControl.onEmpty();
      }

      if (this.props.onEmpty) {
        this.props.onEmpty();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames, _classNames2;

      var _props = this.props,
          autoComplete = _props.autoComplete,
          autoFocus = _props.autoFocus,
          classes = _props.classes,
          classNameProp = _props.className,
          defaultValue = _props.defaultValue,
          disabledProp = _props.disabled,
          disableUnderline = _props.disableUnderline,
          endAdornment = _props.endAdornment,
          errorProp = _props.error,
          fullWidth = _props.fullWidth,
          id = _props.id,
          inputComponent = _props.inputComponent,
          _props$inputProps = _props.inputProps;
      _props$inputProps = _props$inputProps === void 0 ? {} : _props$inputProps;
      var inputPropsClassName = _props$inputProps.className,
          inputPropsProp = (0, _objectWithoutProperties2.default)(_props$inputProps, ["className"]),
          inputRef = _props.inputRef,
          marginProp = _props.margin,
          multiline = _props.multiline,
          name = _props.name,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onEmpty = _props.onEmpty,
          onFilled = _props.onFilled,
          onFocus = _props.onFocus,
          onKeyDown = _props.onKeyDown,
          onKeyUp = _props.onKeyUp,
          placeholder = _props.placeholder,
          readOnly = _props.readOnly,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          startAdornment = _props.startAdornment,
          type = _props.type,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["autoComplete", "autoFocus", "classes", "className", "defaultValue", "disabled", "disableUnderline", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "multiline", "name", "onBlur", "onChange", "onEmpty", "onFilled", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "rows", "rowsMax", "startAdornment", "type", "value"]);
      var muiFormControl = this.context.muiFormControl;

      var _formControlState = formControlState(this.props, this.context),
          disabled = _formControlState.disabled,
          error = _formControlState.error,
          margin = _formControlState.margin;

      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.error, error), (0, _defineProperty2.default)(_classNames, classes.fullWidth, fullWidth), (0, _defineProperty2.default)(_classNames, classes.focused, this.state.focused), (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.multiline, multiline), (0, _defineProperty2.default)(_classNames, classes.underline, !disableUnderline), _classNames), classNameProp);
      var inputClassName = (0, _classnames.default)(classes.input, (_classNames2 = {}, (0, _defineProperty2.default)(_classNames2, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames2, classes.inputType, type !== 'text'), (0, _defineProperty2.default)(_classNames2, classes.inputTypeSearch, type === 'search'), (0, _defineProperty2.default)(_classNames2, classes.inputMultiline, multiline), (0, _defineProperty2.default)(_classNames2, classes.inputMarginDense, margin === 'dense'), _classNames2), inputPropsClassName);
      var required = muiFormControl && muiFormControl.required === true;
      var InputComponent = 'input';
      var inputProps = (0, _objectSpread2.default)({}, inputPropsProp, {
        ref: this.handleRefInput
      });

      if (inputComponent) {
        InputComponent = inputComponent;
        inputProps = (0, _objectSpread2.default)({
          // Rename ref to inputRef as we don't know the
          // provided `inputComponent` structure.
          inputRef: this.handleRefInput
        }, inputProps, {
          ref: null
        });
      } else if (multiline) {
        if (rows && !rowsMax) {
          InputComponent = 'textarea';
        } else {
          inputProps = (0, _objectSpread2.default)({
            rowsMax: rowsMax,
            textareaRef: this.handleRefInput
          }, inputProps, {
            ref: null
          });
          InputComponent = _Textarea.default;
        }
      }

      return _react.default.createElement("div", (0, _extends2.default)({
        className: className
      }, other), startAdornment, _react.default.createElement(InputComponent, (0, _extends2.default)({
        "aria-invalid": error,
        "aria-required": required,
        autoComplete: autoComplete,
        autoFocus: autoFocus,
        className: inputClassName,
        defaultValue: defaultValue,
        disabled: disabled,
        id: id,
        name: name,
        onBlur: this.handleBlur,
        onChange: this.handleChange,
        onFocus: this.handleFocus,
        onKeyDown: onKeyDown,
        onKeyUp: onKeyUp,
        placeholder: placeholder,
        readOnly: readOnly,
        required: required ? true : undefined,
        rows: rows,
        type: type,
        value: value
      }, inputProps)), endAdornment);
    }
  }]);
  return Input;
}(_react.default.Component);

Input.propTypes =  true ? {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the wrapper element.
   */
  className: _propTypes.default.string,

  /**
   * The default input value, useful when not controlling the component.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: _propTypes.default.bool,

  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: _propTypes.default.node,

  /**
   * If `true`, the input will indicate an error. This is normally obtained via context from
   * FormControl.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The id of the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The component used for the native input.
   * Either a string to use a DOM element or a component.
   */
  inputComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Attributes applied to the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense', 'none']),

  /**
   * If `true`, a textarea element will be rendered.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onEmpty: _propTypes.default.func,

  /**
   * @ignore
   */
  onFilled: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyUp: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * @ignore
   */
  readOnly: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: _propTypes.default.node,

  /**
   * Type of the input element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The input value, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))])
} : {};
Input.muiName = 'Input';
Input.defaultProps = {
  disableUnderline: false,
  fullWidth: false,
  multiline: false,
  type: 'text'
};
Input.contextTypes = {
  muiFormControl: _propTypes.default.object
};
Input.childContextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInput'
})(Input);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Input/Textarea.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/debounce/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

// < 1kb payload overhead when lodash/debounce is > 3kb.
var ROWS_HEIGHT = 19;
var styles = {
  root: {
    position: 'relative',
    // because the shadow has position: 'absolute',
    width: '100%'
  },
  textarea: {
    width: '100%',
    height: '100%',
    resize: 'none',
    font: 'inherit',
    padding: 0,
    cursor: 'inherit',
    boxSizing: 'border-box',
    lineHeight: 'inherit',
    border: 'none',
    outline: 'none',
    background: 'transparent'
  },
  shadow: {
    resize: 'none',
    // Overflow also needed to here to remove the extra row
    // added to textareas in Firefox.
    overflow: 'hidden',
    // Visibility needed to hide the extra text area on ipads
    visibility: 'hidden',
    position: 'absolute',
    height: 'auto',
    whiteSpace: 'pre-wrap'
  }
};
/**
 * @ignore - internal component.
 */

exports.styles = styles;

var Textarea =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Textarea, _React$Component);

  // Corresponds to 10 frames at 60 Hz.
  function Textarea(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Textarea);
    _this = (0, _possibleConstructorReturn2.default)(this, (Textarea.__proto__ || Object.getPrototypeOf(Textarea)).call(this, props)); // <Input> expects the components it renders to respond to 'value'
    // so that it can check whether they are filled.

    _this.shadow = null;
    _this.singlelineShadow = null;
    _this.input = null;
    _this.value = null;
    _this.handleResize = (0, _debounce.default)(function () {
      _this.syncHeightWithShadow();
    }, 166);
    _this.state = {
      height: null
    };

    _this.handleRefInput = function (node) {
      _this.input = node;
      var textareaRef = _this.props.textareaRef;

      if (textareaRef) {
        if (typeof textareaRef === 'function') {
          textareaRef(node);
        } else {
          textareaRef.current = node;
        }
      }
    };

    _this.handleRefSinglelineShadow = function (node) {
      _this.singlelineShadow = node;
    };

    _this.handleRefShadow = function (node) {
      _this.shadow = node;
    };

    _this.handleChange = function (event) {
      _this.value = event.target.value;

      if (typeof _this.props.value === 'undefined' && _this.shadow) {
        // The component is not controlled, we need to update the shallow value.
        _this.shadow.value = _this.value;

        _this.syncHeightWithShadow();
      }

      if (_this.props.onChange) {
        _this.props.onChange(event);
      }
    };

    _this.value = props.value || props.defaultValue || '';
    _this.state = {
      height: Number(props.rows) * ROWS_HEIGHT
    };
    return _this;
  }

  (0, _createClass2.default)(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.syncHeightWithShadow();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "syncHeightWithShadow",
    value: function syncHeightWithShadow() {
      var props = this.props;

      if (!this.shadow || !this.singlelineShadow) {
        return;
      } // The component is controlled, we need to update the shallow value.


      if (typeof props.value !== 'undefined') {
        this.shadow.value = props.value == null ? '' : String(props.value);
      }

      var lineHeight = this.singlelineShadow.scrollHeight;
      var newHeight = this.shadow.scrollHeight; // Guarding for jsdom, where scrollHeight isn't present.
      // See https://github.com/tmpvar/jsdom/issues/1013

      if (newHeight === undefined) {
        return;
      }

      if (Number(props.rowsMax) >= Number(props.rows)) {
        newHeight = Math.min(Number(props.rowsMax) * lineHeight, newHeight);
      }

      newHeight = Math.max(newHeight, lineHeight); // Need a large enough different to update the height.
      // This prevents infinite rendering loop.

      if (Math.abs(this.state.height - newHeight) > 1) {
        this.setState({
          height: newHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          className = _props.className,
          defaultValue = _props.defaultValue,
          onChange = _props.onChange,
          rows = _props.rows,
          rowsMax = _props.rowsMax,
          textareaRef = _props.textareaRef,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["classes", "className", "defaultValue", "onChange", "rows", "rowsMax", "textareaRef", "value"]);
      return _react.default.createElement("div", {
        className: classes.root,
        style: {
          height: this.state.height
        }
      }, _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), _react.default.createElement("textarea", {
        ref: this.handleRefSinglelineShadow,
        className: (0, _classnames.default)(classes.shadow, classes.textarea),
        tabIndex: -1,
        rows: "1",
        readOnly: true,
        "aria-hidden": "true",
        value: ""
      }), _react.default.createElement("textarea", {
        ref: this.handleRefShadow,
        className: (0, _classnames.default)(classes.shadow, classes.textarea),
        tabIndex: -1,
        rows: rows,
        "aria-hidden": "true",
        readOnly: true,
        defaultValue: defaultValue,
        value: value
      }), _react.default.createElement("textarea", (0, _extends2.default)({
        rows: rows,
        className: (0, _classnames.default)(classes.textarea, className),
        defaultValue: defaultValue,
        value: value,
        onChange: this.handleChange,
        ref: this.handleRefInput
      }, other)));
    }
  }]);
  return Textarea;
}(_react.default.Component);

Textarea.propTypes =  true ? {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * @ignore
   */
  onChange: _propTypes.default.func,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Use that property to pass a ref callback to the native textarea element.
   */
  textareaRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * @ignore
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
Textarea.defaultProps = {
  rows: 1
};

var _default = (0, _withStyles.default)(styles)(Textarea);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Input/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Input.default;
  }
});

var _Input = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Input/Input.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/InputLabel/InputLabel.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _FormLabel = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormLabel/index.js"));

// @inheritedComponent FormLabel
var styles = function styles(theme) {
  return {
    root: {
      transformOrigin: 'top left'
    },
    formControl: {
      position: 'absolute',
      left: 0,
      top: 0,
      // slight alteration to spec spacing to match visual spec result
      transform: "translate(0, ".concat(theme.spacing.unit * 3, "px) scale(1)")
    },
    marginDense: {
      // Compensation for the `Input.inputDense` style.
      transform: "translate(0, ".concat(theme.spacing.unit * 2.5 + 1, "px) scale(1)")
    },
    shrink: {
      transform: 'translate(0, 1.5px) scale(0.75)',
      transformOrigin: 'top left'
    },
    animated: {
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      })
    }
  };
};

exports.styles = styles;

function InputLabel(props, context) {
  var _classNames;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableAnimation = props.disableAnimation,
      FormLabelClasses = props.FormLabelClasses,
      marginProp = props.margin,
      shrinkProp = props.shrink,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableAnimation", "FormLabelClasses", "margin", "shrink"]);
  var muiFormControl = context.muiFormControl;
  var shrink = shrinkProp;

  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }

  var margin = marginProp;

  if (typeof margin === 'undefined' && muiFormControl) {
    margin = muiFormControl.margin;
  }

  var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.formControl, muiFormControl), (0, _defineProperty2.default)(_classNames, classes.animated, !disableAnimation), (0, _defineProperty2.default)(_classNames, classes.shrink, shrink), (0, _defineProperty2.default)(_classNames, classes.marginDense, margin === 'dense'), _classNames), classNameProp);
  return _react.default.createElement(_FormLabel.default, (0, _extends2.default)({
    "data-shrink": shrink,
    className: className,
    classes: FormLabelClasses
  }, other), children);
}

InputLabel.propTypes =  true ? {
  /**
   * The contents of the `InputLabel`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the transition animation is disabled.
   */
  disableAnimation: _propTypes.default.bool,

  /**
   * If `true`, apply disabled class.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * If `true`, the input of this label is focused.
   */
  focused: _propTypes.default.bool,

  /**
   * `classes` property applied to the `FormLabel` element.
   */
  FormLabelClasses: _propTypes.default.object,

  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: _propTypes.default.oneOf(['dense']),

  /**
   * if `true`, the label will indicate that the input is required.
   */
  required: _propTypes.default.bool,

  /**
   * If `true`, the label is shrunk.
   */
  shrink: _propTypes.default.bool
} : {};
InputLabel.defaultProps = {
  disableAnimation: false
};
InputLabel.contextTypes = {
  muiFormControl: _propTypes.default.object
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiInputLabel'
})(InputLabel);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/InputLabel/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _InputLabel.default;
  }
});

var _InputLabel = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/InputLabel/InputLabel.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/List/List.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      position: 'relative'
    },
    padding: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    dense: {
      paddingTop: theme.spacing.unit / 2,
      paddingBottom: theme.spacing.unit / 2
    },
    subheader: {
      paddingTop: 0
    }
  };
};

exports.styles = styles;

var List =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(List, _React$Component);

  function List() {
    (0, _classCallCheck2.default)(this, List);
    return (0, _possibleConstructorReturn2.default)(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
  }

  (0, _createClass2.default)(List, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dense: this.props.dense
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          Component = _props.component,
          dense = _props.dense,
          disablePadding = _props.disablePadding,
          subheader = _props.subheader,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "component", "dense", "disablePadding", "subheader"]);
      var className = (0, _classnames.default)(classes.root, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.dense, dense && !disablePadding), (0, _defineProperty2.default)(_classNames, classes.padding, !disablePadding), (0, _defineProperty2.default)(_classNames, classes.subheader, subheader), _classNames), classNameProp);
      return _react.default.createElement(Component, (0, _extends2.default)({
        className: className
      }, other), subheader, children);
    }
  }]);
  return List;
}(_react.default.Component);

List.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used for
   * the list and list items. The property is available to descendant components as the
   * `dense` context.
   */
  dense: _propTypes.default.bool,

  /**
   * If `true`, vertical padding will be removed from the list.
   */
  disablePadding: _propTypes.default.bool,

  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: _propTypes.default.node
} : {};
List.defaultProps = {
  component: 'ul',
  dense: false,
  disablePadding: false
};
List.childContextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiList'
})(List);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/List/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _List.default;
  }
});

var _List = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/List/List.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItem/ListItem.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ButtonBase = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ButtonBase/index.js"));

var _reactHelpers = __webpack_require__("./node_modules/@material-ui/core/utils/reactHelpers.js");

var styles = function styles(theme) {
  return {
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
      position: 'relative',
      textDecoration: 'none',
      width: '100%',
      boxSizing: 'border-box',
      textAlign: 'left'
    },
    container: {
      position: 'relative'
    },
    focusVisible: {
      backgroundColor: theme.palette.action.hover
    },
    default: {
      paddingTop: 12,
      paddingBottom: 12
    },
    dense: {
      paddingTop: theme.spacing.unit,
      paddingBottom: theme.spacing.unit
    },
    disabled: {
      opacity: 0.5
    },
    divider: {
      borderBottom: "1px solid ".concat(theme.palette.divider),
      backgroundClip: 'padding-box'
    },
    gutters: theme.mixins.gutters(),
    button: {
      transition: theme.transitions.create('background-color', {
        duration: theme.transitions.duration.shortest
      }),
      '&:hover': {
        textDecoration: 'none',
        backgroundColor: theme.palette.action.hover,
        // Reset on touch devices, it doesn't add specificity
        '@media (hover: none)': {
          backgroundColor: 'transparent'
        }
      }
    },
    secondaryAction: {
      // Add some space to avoid collision as `ListItemSecondaryAction`
      // is absolutely positionned.
      paddingRight: theme.spacing.unit * 4
    }
  };
};

exports.styles = styles;

var ListItem =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(ListItem, _React$Component);

  function ListItem() {
    (0, _classCallCheck2.default)(this, ListItem);
    return (0, _possibleConstructorReturn2.default)(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).apply(this, arguments));
  }

  (0, _createClass2.default)(ListItem, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        dense: this.props.dense || this.context.dense || false
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _props = this.props,
          button = _props.button,
          childrenProp = _props.children,
          classes = _props.classes,
          classNameProp = _props.className,
          componentProp = _props.component,
          ContainerComponent = _props.ContainerComponent,
          _props$ContainerProps = _props.ContainerProps;
      _props$ContainerProps = _props$ContainerProps === void 0 ? {} : _props$ContainerProps;
      var ContainerClassName = _props$ContainerProps.className,
          ContainerProps = (0, _objectWithoutProperties2.default)(_props$ContainerProps, ["className"]),
          dense = _props.dense,
          disabled = _props.disabled,
          disableGutters = _props.disableGutters,
          divider = _props.divider,
          focusVisibleClassName = _props.focusVisibleClassName,
          other = (0, _objectWithoutProperties2.default)(_props, ["button", "children", "classes", "className", "component", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "divider", "focusVisibleClassName"]);
      var isDense = dense || this.context.dense || false;

      var children = _react.default.Children.toArray(childrenProp);

      var hasAvatar = children.some(function (value) {
        return (0, _reactHelpers.isMuiElement)(value, ['ListItemAvatar']);
      });
      var hasSecondaryAction = children.length && (0, _reactHelpers.isMuiElement)(children[children.length - 1], ['ListItemSecondaryAction']);
      var className = (0, _classnames.default)(classes.root, isDense || hasAvatar ? classes.dense : classes.default, (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes.gutters, !disableGutters), (0, _defineProperty2.default)(_classNames, classes.divider, divider), (0, _defineProperty2.default)(_classNames, classes.disabled, disabled), (0, _defineProperty2.default)(_classNames, classes.button, button), (0, _defineProperty2.default)(_classNames, classes.secondaryAction, hasSecondaryAction), _classNames), classNameProp);
      var componentProps = (0, _objectSpread2.default)({
        className: className,
        disabled: disabled
      }, other);
      var Component = componentProp || 'li';

      if (button) {
        componentProps.component = componentProp || 'div';
        componentProps.focusVisibleClassName = (0, _classnames.default)(classes.focusVisible, focusVisibleClassName);
        Component = _ButtonBase.default;
      }

      if (hasSecondaryAction) {
        // Use div by default.
        Component = !componentProps.component && !componentProp ? 'div' : Component; // Avoid nesting of li > li.

        if (ContainerComponent === 'li') {
          if (Component === 'li') {
            Component = 'div';
          } else if (componentProps.component === 'li') {
            componentProps.component = 'div';
          }
        }

        return _react.default.createElement(ContainerComponent, (0, _extends2.default)({
          className: (0, _classnames.default)(classes.container, ContainerClassName)
        }, ContainerProps), _react.default.createElement(Component, componentProps, children), children.pop());
      }

      return _react.default.createElement(Component, componentProps, children);
    }
  }]);
  return ListItem;
}(_react.default.Component);

ListItem.propTypes =  true ? {
  /**
   * If `true`, the list item will be a button (using `ButtonBase`).
   */
  button: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it's a `li` when `button` is `false` and a `div` when `button` is `true`.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The container component used when a `ListItemSecondaryAction` is rendered.
   */
  ContainerComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the container element when the component
   * is used to display a `ListItemSecondaryAction`.
   */
  ContainerProps: _propTypes.default.object,

  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input will be used.
   */
  dense: _propTypes.default.bool,

  /**
   * @ignore
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the left and right padding is removed.
   */
  disableGutters: _propTypes.default.bool,

  /**
   * If `true`, a 1px light border is added to the bottom of the list item.
   */
  divider: _propTypes.default.bool,

  /**
   * @ignore
   */
  focusVisibleClassName: _propTypes.default.string
} : {};
ListItem.defaultProps = {
  button: false,
  ContainerComponent: 'li',
  dense: false,
  disabled: false,
  disableGutters: false,
  divider: false
};
ListItem.contextTypes = {
  dense: _propTypes.default.bool
};
ListItem.childContextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItem'
})(ListItem);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItem/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ListItem.default;
  }
});

var _ListItem = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItem/ListItem.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemText/ListItemText.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/index.js"));

var styles = function styles(theme) {
  return {
    root: {
      flex: '1 1 auto',
      minWidth: 0,
      padding: "0 ".concat(theme.spacing.unit * 2, "px"),
      '&:first-child': {
        paddingLeft: 0
      }
    },
    inset: {
      '&:first-child': {
        paddingLeft: theme.spacing.unit * 7
      }
    },
    dense: {
      fontSize: theme.typography.pxToRem(13)
    },
    primary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    secondary: {
      '&$textDense': {
        fontSize: 'inherit'
      }
    },
    textDense: {}
  };
};

exports.styles = styles;

function ListItemText(props, context) {
  var _classNames3;

  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableTypography = props.disableTypography,
      inset = props.inset,
      primaryProp = props.primary,
      primaryTypographyProps = props.primaryTypographyProps,
      secondaryProp = props.secondary,
      secondaryTypographyProps = props.secondaryTypographyProps,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableTypography", "inset", "primary", "primaryTypographyProps", "secondary", "secondaryTypographyProps"]);
  var dense = context.dense;
  var primary = primaryProp != null ? primaryProp : children;

  if (primary != null && primary.type !== _Typography.default && !disableTypography) {
    primary = _react.default.createElement(_Typography.default, (0, _extends2.default)({
      variant: "subheading",
      className: (0, _classnames.default)(classes.primary, (0, _defineProperty2.default)({}, classes.textDense, dense)),
      component: "span"
    }, primaryTypographyProps), primary);
  }

  var secondary = secondaryProp;

  if (secondary != null && secondary.type !== _Typography.default && !disableTypography) {
    secondary = _react.default.createElement(_Typography.default, (0, _extends2.default)({
      variant: "body1",
      className: (0, _classnames.default)(classes.secondary, (0, _defineProperty2.default)({}, classes.textDense, dense)),
      color: "textSecondary"
    }, secondaryTypographyProps), secondary);
  }

  return _react.default.createElement("div", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.root, (_classNames3 = {}, (0, _defineProperty2.default)(_classNames3, classes.dense, dense), (0, _defineProperty2.default)(_classNames3, classes.inset, inset), _classNames3), classNameProp)
  }, other), primary, secondary);
}

ListItemText.propTypes =  true ? {
  /**
   * Alias for the `primary` property.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the children won't be wrapped by a Typography component.
   * This can be useful to render an alternative Typography variant by wrapping
   * the `children` (or `primary`) text, and optional `secondary` text
   * with the Typography component.
   */
  disableTypography: _propTypes.default.bool,

  /**
   * If `true`, the children will be indented.
   * This should be used if there is no left avatar or left icon.
   */
  inset: _propTypes.default.bool,

  /**
   * The main content element.
   */
  primary: _propTypes.default.node,

  /**
   * These props will be forwarded to the primary typography component
   * (as long as disableTypography is not `true`).
   */
  primaryTypographyProps: _propTypes.default.object,

  /**
   * The secondary content element.
   */
  secondary: _propTypes.default.node,

  /**
   * These props will be forwarded to the secondary typography component
   * (as long as disableTypography is not `true`).
   */
  secondaryTypographyProps: _propTypes.default.object
} : {};
ListItemText.defaultProps = {
  disableTypography: false,
  inset: false
};
ListItemText.contextTypes = {
  dense: _propTypes.default.bool
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiListItemText'
})(ListItemText);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/ListItemText/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _ListItemText.default;
  }
});

var _ListItemText = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/ListItemText/ListItemText.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Menu/Menu.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Popover = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Popover/index.js"));

var _MenuList = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/MenuList/index.js"));

// @inheritedComponent Popover
var RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
var LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
var styles = {
  paper: {
    // specZ: The maximum height of a simple menu should be one or more rows less than the view
    // height. This ensures a tappable area outside of the simple menu with which to dismiss
    // the menu.
    maxHeight: 'calc(100% - 96px)',
    // Add iOS momentum scrolling.
    WebkitOverflowScrolling: 'touch'
  }
};
exports.styles = styles;

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Menu.__proto__ || Object.getPrototypeOf(Menu)).call.apply(_ref, [this].concat(args))), _this.menuList = null, _this.getContentAnchorEl = function () {
      if (!_this.menuList || !_this.menuList.selectedItem) {
        return _reactDom.default.findDOMNode(_this.menuList).firstChild;
      }

      return _reactDom.default.findDOMNode(_this.menuList.selectedItem);
    }, _this.focus = function () {
      if (_this.menuList && _this.menuList.selectedItem) {
        _reactDom.default.findDOMNode(_this.menuList.selectedItem).focus();

        return;
      }

      var menuList = _reactDom.default.findDOMNode(_this.menuList);

      if (menuList && menuList.firstChild) {
        menuList.firstChild.focus();
      }
    }, _this.handleEnter = function (element) {
      var theme = _this.props.theme;

      var menuList = _reactDom.default.findDOMNode(_this.menuList); // Focus so the scroll computation of the Popover works as expected.


      _this.focus(); // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.


      if (menuList && element.clientHeight < menuList.clientHeight && !menuList.style.width) {
        var size = "".concat((0, _scrollbarSize.default)(), "px");
        menuList.style[theme.direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = size;
        menuList.style.width = "calc(100% + ".concat(size, ")");
      }

      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }
    }, _this.handleListKeyDown = function (event, key) {
      if (key === 'tab') {
        event.preventDefault();

        if (_this.props.onClose) {
          _this.props.onClose(event);
        }
      }
    }, _temp));
  }

  (0, _createClass2.default)(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.open) {
        this.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          MenuListProps = _props.MenuListProps,
          onEnter = _props.onEnter,
          _props$PaperProps = _props.PaperProps,
          PaperProps = _props$PaperProps === void 0 ? {} : _props$PaperProps,
          PopoverClasses = _props.PopoverClasses,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "MenuListProps", "onEnter", "PaperProps", "PopoverClasses", "theme"]);
      return _react.default.createElement(_Popover.default, (0, _extends2.default)({
        getContentAnchorEl: this.getContentAnchorEl,
        classes: PopoverClasses,
        onEnter: this.handleEnter,
        anchorOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        transformOrigin: theme.direction === 'rtl' ? RTL_ORIGIN : LTR_ORIGIN,
        PaperProps: (0, _objectSpread2.default)({}, PaperProps, {
          classes: (0, _objectSpread2.default)({}, PaperProps.classes, {
            root: classes.paper
          })
        })
      }, other), _react.default.createElement(_MenuList.default, (0, _extends2.default)({
        role: "menu",
        onKeyDown: this.handleListKeyDown
      }, MenuListProps, {
        ref: function ref(node) {
          _this2.menuList = node;
        }
      }), children));
    }
  }]);
  return Menu;
}(_react.default.Component);

Menu.propTypes =  true ? {
  /**
   * The DOM element used to set the position of the menu.
   */
  anchorEl: _propTypes.default.object,

  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * Properties applied to the `MenuList` element.
   */
  MenuListProps: _propTypes.default.object,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the Menu enters.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the Menu has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the Menu is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the Menu exits.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the Menu has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the Menu is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the menu is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * @ignore
   */
  PaperProps: _propTypes.default.object,

  /**
   * `classes` property applied to the `Popover` element.
   */
  PopoverClasses: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The length of the transition in `ms`, or 'auto'
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])])
} : {};
Menu.defaultProps = {
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiMenu',
  withTheme: true
})(Menu);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuList/MenuList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _List = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/List/index.js"));

// @inheritedComponent List
var MenuList =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MenuList, _React$Component);

  function MenuList() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, MenuList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = MenuList.__proto__ || Object.getPrototypeOf(MenuList)).call.apply(_ref, [this].concat(args))), _this.list = null, _this.selectedItem = null, _this.blurTimer = null, _this.state = {
      currentTabIndex: null
    }, _this.handleBlur = function (event) {
      _this.blurTimer = setTimeout(function () {
        if (_this.list) {
          var list = _reactDom.default.findDOMNode(_this.list);

          var currentFocus = (0, _ownerDocument.default)(list).activeElement;

          if (!list.contains(currentFocus)) {
            _this.resetTabIndex();
          }
        }
      }, 30);

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleKeyDown = function (event) {
      var list = _reactDom.default.findDOMNode(_this.list);

      var key = (0, _keycode.default)(event);
      var currentFocus = (0, _ownerDocument.default)(list).activeElement;

      if ((key === 'up' || key === 'down') && (!currentFocus || currentFocus && !list.contains(currentFocus))) {
        if (_this.selectedItem) {
          _reactDom.default.findDOMNode(_this.selectedItem).focus();
        } else {
          list.firstChild.focus();
        }
      } else if (key === 'down') {
        event.preventDefault();

        if (currentFocus.nextElementSibling) {
          currentFocus.nextElementSibling.focus();
        }
      } else if (key === 'up') {
        event.preventDefault();

        if (currentFocus.previousElementSibling) {
          currentFocus.previousElementSibling.focus();
        }
      }

      if (_this.props.onKeyDown) {
        _this.props.onKeyDown(event, key);
      }
    }, _this.handleItemFocus = function (event) {
      var list = _reactDom.default.findDOMNode(_this.list);

      if (list) {
        for (var i = 0; i < list.children.length; i += 1) {
          if (list.children[i] === event.currentTarget) {
            _this.setTabIndex(i);

            break;
          }
        }
      }
    }, _temp));
  }

  (0, _createClass2.default)(MenuList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.resetTabIndex();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.blurTimer);
    }
  }, {
    key: "setTabIndex",
    value: function setTabIndex(index) {
      this.setState({
        currentTabIndex: index
      });
    }
  }, {
    key: "focus",
    value: function focus() {
      var currentTabIndex = this.state.currentTabIndex;

      var list = _reactDom.default.findDOMNode(this.list);

      if (!list || !list.children || !list.firstChild) {
        return;
      }

      if (currentTabIndex && currentTabIndex >= 0) {
        list.children[currentTabIndex].focus();
      } else {
        list.firstChild.focus();
      }
    }
  }, {
    key: "resetTabIndex",
    value: function resetTabIndex() {
      var list = _reactDom.default.findDOMNode(this.list);

      var currentFocus = (0, _ownerDocument.default)(list).activeElement;
      var items = [];

      for (var i = 0; i < list.children.length; i += 1) {
        items.push(list.children[i]);
      }

      var currentFocusIndex = items.indexOf(currentFocus);

      if (currentFocusIndex !== -1) {
        return this.setTabIndex(currentFocusIndex);
      }

      if (this.selectedItem) {
        return this.setTabIndex(items.indexOf(_reactDom.default.findDOMNode(this.selectedItem)));
      }

      return this.setTabIndex(0);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          className = _props.className,
          onBlur = _props.onBlur,
          onKeyDown = _props.onKeyDown,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "className", "onBlur", "onKeyDown"]);
      return _react.default.createElement(_List.default, (0, _extends2.default)({
        role: "menu",
        ref: function ref(node) {
          _this2.list = node;
        },
        className: className,
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur
      }, other), _react.default.Children.map(children, function (child, index) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        return _react.default.cloneElement(child, {
          tabIndex: index === _this2.state.currentTabIndex ? 0 : -1,
          ref: child.props.selected ? function (node) {
            _this2.selectedItem = node;
          } : undefined,
          onFocus: _this2.handleItemFocus
        });
      }));
    }
  }]);
  return MenuList;
}(_react.default.Component);

MenuList.propTypes =  true ? {
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * @ignore
   */
  onKeyDown: _propTypes.default.func
} : {};
var _default = MenuList;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/MenuList/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _MenuList.default;
  }
});

var _MenuList = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/MenuList/MenuList.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/Modal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/assertThisInitialized.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _RootRef = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/RootRef/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Portal/index.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/ModalManager.js"));

var _Backdrop = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Backdrop/index.js"));

// @inheritedComponent Portal
function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
}

var styles = function styles(theme) {
  return {
    root: {
      position: 'fixed',
      zIndex: theme.zIndex.modal,
      right: 0,
      bottom: 0,
      top: 0,
      left: 0
    },
    hidden: {
      visibility: 'hidden'
    }
  };
};
/* istanbul ignore if */


exports.styles = styles;

if ("development" !== 'production' && !_react.default.createContext) {
  throw new Error('Material-UI: react@16.3.0 or greater is required.');
}

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));
    _this.dialogElement = null;
    _this.mounted = false;
    _this.mountNode = null;

    _this.handleRendered = function () {
      _this.autoFocus();

      if (_this.props.onRendered) {
        _this.props.onRendered();
      }
    };

    _this.handleOpen = function () {
      var doc = (0, _ownerDocument.default)(_this.mountNode);
      var container = getContainer(_this.props.container, doc.body);

      _this.props.manager.add((0, _assertThisInitialized2.default)(_this), container);

      doc.addEventListener('keydown', _this.handleDocumentKeyDown);
      doc.addEventListener('focus', _this.enforceFocus, true);
    };

    _this.handleClose = function () {
      _this.props.manager.remove((0, _assertThisInitialized2.default)(_this));

      var doc = (0, _ownerDocument.default)(_this.mountNode);
      doc.removeEventListener('keydown', _this.handleDocumentKeyDown);
      doc.removeEventListener('focus', _this.enforceFocus, true);

      _this.restoreLastFocus();
    };

    _this.handleExited = function () {
      _this.setState({
        exited: true
      });

      _this.handleClose();
    };

    _this.handleBackdropClick = function (event) {
      if (event.target !== event.currentTarget) {
        return;
      }

      if (_this.props.onBackdropClick) {
        _this.props.onBackdropClick(event);
      }

      if (!_this.props.disableBackdropClick && _this.props.onClose) {
        _this.props.onClose(event, 'backdropClick');
      }
    };

    _this.handleDocumentKeyDown = function (event) {
      if (!_this.isTopModal() || (0, _keycode.default)(event) !== 'esc') {
        return;
      }

      if (_this.props.onEscapeKeyDown) {
        _this.props.onEscapeKeyDown(event);
      }

      if (!_this.props.disableEscapeKeyDown && _this.props.onClose) {
        _this.props.onClose(event, 'escapeKeyDown');
      }
    };

    _this.checkForFocus = function () {
      _this.lastFocus = (0, _ownerDocument.default)(_this.mountNode).activeElement;
    };

    _this.enforceFocus = function () {
      if (_this.props.disableEnforceFocus || !_this.mounted || !_this.isTopModal()) {
        return;
      }

      var currentActiveElement = (0, _ownerDocument.default)(_this.mountNode).activeElement;

      if (_this.dialogElement && !_this.dialogElement.contains(currentActiveElement)) {
        _this.dialogElement.focus();
      }
    };

    _this.state = {
      exited: !_this.props.open
    };
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.mounted = true;

      if (this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.open && this.props.open) {
        this.checkForFocus();
      }

      if (prevProps.open && !this.props.open && !getHasTransition(this.props)) {
        // Otherwise handleExited will call this.
        this.handleClose();
      } else if (!prevProps.open && this.props.open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mounted = false;

      if (this.props.open || getHasTransition(this.props) && !this.state.exited) {
        this.handleClose();
      }
    }
  }, {
    key: "autoFocus",
    value: function autoFocus() {
      if (this.props.disableAutoFocus) {
        return;
      }

      var currentActiveElement = (0, _ownerDocument.default)(this.mountNode).activeElement;

      if (this.dialogElement && !this.dialogElement.contains(currentActiveElement)) {
        this.lastFocus = currentActiveElement;

        if (!this.dialogElement.hasAttribute('tabIndex')) {
           true ? (0, _warning.default)(false, ['Material-UI: the modal content node does not accept focus.', 'For the benefit of assistive technologies, ' + 'the tabIndex of the node is being set to "-1".'].join('\n')) : void 0;
          this.dialogElement.setAttribute('tabIndex', -1);
        }

        this.dialogElement.focus();
      }
    }
  }, {
    key: "restoreLastFocus",
    value: function restoreLastFocus() {
      if (this.props.disableRestoreFocus) {
        return;
      }

      if (this.lastFocus) {
        // Not all elements in IE11 have a focus method.
        // Because IE11 market share is low, we accept the restore focus being broken
        // and we silent the issue.
        if (this.lastFocus.focus) {
          this.lastFocus.focus();
        }

        this.lastFocus = null;
      }
    }
  }, {
    key: "isTopModal",
    value: function isTopModal() {
      return this.props.manager.isTopModal(this);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          BackdropComponent = _props.BackdropComponent,
          BackdropProps = _props.BackdropProps,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          container = _props.container,
          disableAutoFocus = _props.disableAutoFocus,
          disableBackdropClick = _props.disableBackdropClick,
          disableEnforceFocus = _props.disableEnforceFocus,
          disableEscapeKeyDown = _props.disableEscapeKeyDown,
          disableRestoreFocus = _props.disableRestoreFocus,
          hideBackdrop = _props.hideBackdrop,
          keepMounted = _props.keepMounted,
          onBackdropClick = _props.onBackdropClick,
          onClose = _props.onClose,
          onEscapeKeyDown = _props.onEscapeKeyDown,
          onRendered = _props.onRendered,
          open = _props.open,
          manager = _props.manager,
          other = (0, _objectWithoutProperties2.default)(_props, ["BackdropComponent", "BackdropProps", "children", "classes", "className", "container", "disableAutoFocus", "disableBackdropClick", "disableEnforceFocus", "disableEscapeKeyDown", "disableRestoreFocus", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onEscapeKeyDown", "onRendered", "open", "manager"]);
      var exited = this.state.exited;
      var hasTransition = getHasTransition(this.props);
      var childProps = {};

      if (!keepMounted && !open && (!hasTransition || exited)) {
        return null;
      } // It's a Transition like component


      if (hasTransition) {
        childProps.onExited = (0, _helpers.createChainedFunction)(this.handleExited, children.props.onExited);
      }

      if (children.props.role === undefined) {
        childProps.role = children.props.role || 'document';
      }

      if (children.props.tabIndex === undefined) {
        childProps.tabIndex = children.props.tabIndex || '-1';
      }

      return _react.default.createElement(_Portal.default, {
        ref: function ref(node) {
          _this2.mountNode = node ? node.getMountNode() : node;
        },
        container: container,
        onRendered: this.handleRendered
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.root, className, (0, _defineProperty2.default)({}, classes.hidden, exited))
      }, other), hideBackdrop ? null : _react.default.createElement(BackdropComponent, (0, _extends2.default)({
        open: open,
        onClick: this.handleBackdropClick
      }, BackdropProps)), _react.default.createElement(_RootRef.default, {
        rootRef: function rootRef(node) {
          _this2.dialogElement = node;
        }
      }, _react.default.cloneElement(children, childProps))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.open) {
        return {
          exited: false
        };
      }

      if (!getHasTransition(nextProps)) {
        // Otherwise let handleExited take care of marking exited.
        return {
          exited: true
        };
      }

      return null;
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.propTypes =  true ? {
  /**
   * A backdrop component. This property enables custom backdrop rendering.
   */
  BackdropComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the `Backdrop` element.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * A single child content element.
   */
  children: _propTypes.default.element,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableAutoFocus: _propTypes.default.bool,

  /**
   * If `true`, clicking the backdrop will not fire any callback.
   */
  disableBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   */
  disableEnforceFocus: _propTypes.default.bool,

  /**
   * If `true`, hitting escape will not fire any callback.
   */
  disableEscapeKeyDown: _propTypes.default.bool,

  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden.
   */
  disableRestoreFocus: _propTypes.default.bool,

  /**
   * If `true`, the backdrop is not rendered.
   */
  hideBackdrop: _propTypes.default.bool,

  /**
   * Always keep the children in the DOM.
   * This property can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   */
  keepMounted: _propTypes.default.bool,

  /**
   * A modal manager used to track and manage the state of open
   * Modals. This enables customizing how modals interact within a container.
   */
  manager: _propTypes.default.object,

  /**
   * Callback fired when the backdrop is clicked.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback
   * @param {string} reason Can be:`"escapeKeyDown"`, `"backdropClick"`
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the escape key is pressed,
   * `disableEscapeKeyDown` is false and the modal is in focus.
   */
  onEscapeKeyDown: _propTypes.default.func,

  /**
   * Callback fired once the children has been mounted into the `container`.
   * It signals that the `open={true}` property took effect.
   */
  onRendered: _propTypes.default.func,

  /**
   * If `true`, the modal is open.
   */
  open: _propTypes.default.bool.isRequired
} : {};
Modal.defaultProps = {
  disableAutoFocus: false,
  disableBackdropClick: false,
  disableEnforceFocus: false,
  disableEscapeKeyDown: false,
  disableRestoreFocus: false,
  hideBackdrop: false,
  keepMounted: false,
  // Modals don't open on the server so this won't conflict with concurrent requests.
  manager: new _ModalManager.default(),
  BackdropComponent: _Backdrop.default
};

var _default = (0, _withStyles.default)(styles, {
  flip: false,
  name: 'MuiModal'
})(Modal);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/ModalManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _style = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/style/index.js"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/util/scrollbarSize.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _isOverflowing = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/isOverflowing.js"));

var _manageAriaHidden = __webpack_require__("./node_modules/@material-ui/core/Modal/manageAriaHidden.js");

function findIndexOf(data, callback) {
  var idx = -1;
  data.some(function (item, index) {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function getPaddingRight(node) {
  return parseInt((0, _style.default)(node, 'paddingRight') || 0, 10);
}

function setContainerStyle(data, container) {
  var style = {
    overflow: 'hidden'
  }; // We are only interested in the actual `style` here because we will override it.

  data.style = {
    overflow: container.style.overflow,
    paddingRight: container.style.paddingRight
  };

  if (data.overflowing) {
    var scrollbarSize = (0, _scrollbarSize.default)(); // Use computed style, here to get the real padding to add our scrollbar width.

    style.paddingRight = "".concat(getPaddingRight(container) + scrollbarSize, "px"); // .mui-fixed is a global helper.

    var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

    for (var i = 0; i < fixedNodes.length; i += 1) {
      var paddingRight = getPaddingRight(fixedNodes[i]);
      data.prevPaddings.push(paddingRight);
      fixedNodes[i].style.paddingRight = "".concat(paddingRight + scrollbarSize, "px");
    }
  }

  Object.keys(style).forEach(function (key) {
    container.style[key] = style[key];
  });
}

function removeContainerStyle(data, container) {
  Object.keys(data.style).forEach(function (key) {
    container.style[key] = data.style[key];
  });
  var fixedNodes = (0, _ownerDocument.default)(container).querySelectorAll('.mui-fixed');

  for (var i = 0; i < fixedNodes.length; i += 1) {
    fixedNodes[i].style.paddingRight = "".concat(data.prevPaddings[i], "px");
  }
}
/**
 * @ignore - do not document.
 *
 * Proper state managment for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class
 * Used by the Modal to ensure proper styling of containers.
 */


var ModalManager =
/*#__PURE__*/
function () {
  function ModalManager() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, ModalManager);
    var _options$hideSiblingN = options.hideSiblingNodes,
        hideSiblingNodes = _options$hideSiblingN === void 0 ? true : _options$hideSiblingN,
        _options$handleContai = options.handleContainerOverflow,
        handleContainerOverflow = _options$handleContai === void 0 ? true : _options$handleContai;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow; // this.modals[modalIdx] = modal

    this.modals = []; // this.containers[containerIdx] = container

    this.containers = []; // this.data[containerIdx] = {
    //   modals: [],
    // }

    this.data = [];
  }

  (0, _createClass2.default)(ModalManager, [{
    key: "add",
    value: function add(modal, container) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx !== -1) {
        return modalIdx;
      }

      modalIdx = this.modals.length;
      this.modals.push(modal);

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.hideSiblings)(container, modal.mountNode);
      }

      var containerIdx = this.containers.indexOf(container);

      if (containerIdx !== -1) {
        this.data[containerIdx].modals.push(modal);
        return modalIdx;
      }

      var data = {
        modals: [modal],
        overflowing: (0, _isOverflowing.default)(container),
        prevPaddings: []
      };

      if (this.handleContainerOverflow) {
        setContainerStyle(data, container);
      }

      this.containers.push(container);
      this.data.push(data);
      return modalIdx;
    }
  }, {
    key: "remove",
    value: function remove(modal) {
      var modalIdx = this.modals.indexOf(modal);

      if (modalIdx === -1) {
        return modalIdx;
      }

      var containerIdx = findIndexOf(this.data, function (item) {
        return item.modals.indexOf(modal) !== -1;
      });
      var data = this.data[containerIdx];
      var container = this.containers[containerIdx];
      data.modals.splice(data.modals.indexOf(modal), 1);
      this.modals.splice(modalIdx, 1); // If that was the last modal in a container, clean up the container.

      if (data.modals.length === 0) {
        if (this.handleContainerOverflow) {
          removeContainerStyle(data, container);
        }

        if (this.hideSiblingNodes) {
          (0, _manageAriaHidden.showSiblings)(container, modal.mountNode);
        }

        this.containers.splice(containerIdx, 1);
        this.data.splice(containerIdx, 1);
      } else if (this.hideSiblingNodes) {
        // Otherwise make sure the next top modal is visible to a screan reader.
        (0, _manageAriaHidden.ariaHidden)(false, data.modals[data.modals.length - 1].mountNode);
      }

      return modalIdx;
    }
  }, {
    key: "isTopModal",
    value: function isTopModal(modal) {
      return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
    }
  }]);
  return ModalManager;
}();

var _default = ModalManager;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Modal.default;
  }
});
Object.defineProperty(exports, "ModalManager", {
  enumerable: true,
  get: function get() {
    return _ModalManager.default;
  }
});

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/Modal.js"));

var _ModalManager = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/ModalManager.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/isOverflowing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isBody = isBody;
exports.default = isOverflowing;

var _isWindow = _interopRequireDefault(__webpack_require__("./node_modules/dom-helpers/query/isWindow.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
} // Do we have a scroll bar?


function isOverflowing(container) {
  var doc = (0, _ownerDocument.default)(container);
  var win = (0, _ownerWindow.default)(doc);
  /* istanbul ignore next */

  if (!(0, _isWindow.default)(doc) && !isBody(container)) {
    return container.scrollHeight > container.clientHeight;
  } // Takes in account potential non zero margin on the body.


  var style = win.getComputedStyle(doc.body);
  var marginLeft = parseInt(style.getPropertyValue('margin-left'), 10);
  var marginRight = parseInt(style.getPropertyValue('margin-right'), 10);
  return marginLeft + doc.body.clientWidth + marginRight < win.innerWidth;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/Modal/manageAriaHidden.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

function isHidable(node) {
  return node.nodeType === 1 && BLACKLIST.indexOf(node.tagName.toLowerCase()) === -1;
}

function siblings(container, mount, callback) {
  mount = [].concat(mount); // eslint-disable-line no-param-reassign

  [].forEach.call(container.children, function (node) {
    if (mount.indexOf(node) === -1 && isHidable(node)) {
      callback(node);
    }
  });
}

function ariaHidden(show, node) {
  if (!node) {
    return;
  }

  if (show) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, mountNode) {
  siblings(container, mountNode, function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelect.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _NativeSelectInput = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _ArrowDropDown = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js"));

var _Input = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Input/index.js"));

// @inheritedComponent Input
var styles = function styles(theme) {
  return {
    root: {
      position: 'relative',
      width: '100%'
    },
    select: {
      '-moz-appearance': 'none',
      // Reset
      '-webkit-appearance': 'none',
      // Reset
      // When interacting quickly, the text can end up selected.
      // Native select can't be selected either.
      userSelect: 'none',
      paddingRight: theme.spacing.unit * 4,
      width: "calc(100% - ".concat(theme.spacing.unit * 4, "px)"),
      minWidth: theme.spacing.unit * 2,
      // So it doesn't collapse.
      cursor: 'pointer',
      '&:focus': {
        // Show that it's not an text input
        background: theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)',
        borderRadius: 0 // Reset Chrome style

      },
      // Remove Firefox focus border
      '&:-moz-focusring': {
        color: 'transparent',
        textShadow: '0 0 0 #000'
      },
      // Remove IE11 arrow
      '&::-ms-expand': {
        display: 'none'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },
    selectMenu: {
      width: 'auto',
      // Fix Safari textOverflow
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      minHeight: '1.1875em' // Reset (19px), match the native input line-height

    },
    disabled: {},
    icon: {
      // We use a position absolute over a flexbox in order to forward the pointer events
      // to the input.
      position: 'absolute',
      right: 0,
      top: 'calc(50% - 12px)',
      // Center vertically
      color: theme.palette.action.active,
      'pointer-events': 'none' // Don't block pointer events on the select under the icon.

    }
  };
};
/**
 * An alternative to `<Select native />` with a much smaller dependency graph.
 */


exports.styles = styles;

function NativeSelect(props) {
  var children = props.children,
      classes = props.classes,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "IconComponent", "input", "inputProps"]);
  return _react.default.cloneElement(input, (0, _objectSpread2.default)({
    // Most of the logic is implemented in `NativeSelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: _NativeSelectInput.default,
    inputProps: (0, _objectSpread2.default)({
      children: children,
      classes: classes,
      IconComponent: IconComponent,
      type: undefined
    }, inputProps, input ? input.props.inputProps : {})
  }, other));
}

NativeSelect.propTypes =  true ? {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: _propTypes.default.element,

  /**
   * Attributes applied to the `select` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
NativeSelect.defaultProps = {
  IconComponent: _ArrowDropDown.default,
  input: _react.default.createElement(_Input.default, null)
};
NativeSelect.muiName = 'NativeSelect';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiNativeSelect'
})(NativeSelect);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

/**
 * @ignore - internal component.
 */
function NativeSelectInput(props) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      disabled = props.disabled,
      IconComponent = props.IconComponent,
      inputRef = props.inputRef,
      name = props.name,
      onChange = props.onChange,
      value = props.value,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disabled", "IconComponent", "inputRef", "name", "onChange", "value"]);
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("select", (0, _extends2.default)({
    className: (0, _classnames.default)(classes.select, (0, _defineProperty2.default)({}, classes.disabled, disabled), className),
    name: name,
    disabled: disabled,
    onChange: onChange,
    value: value,
    ref: inputRef
  }, other), children), _react.default.createElement(IconComponent, {
    className: classes.icon
  }));
}

NativeSelectInput.propTypes =  true ? {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: _propTypes.default.string,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])
} : {};
var _default = NativeSelectInput;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/Paper.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  var elevations = {};
  theme.shadows.forEach(function (shadow, index) {
    elevations["elevation".concat(index)] = {
      boxShadow: shadow
    };
  });
  return (0, _objectSpread2.default)({
    root: {
      backgroundColor: theme.palette.background.paper
    },
    rounded: {
      borderRadius: theme.shape.borderRadius
    }
  }, elevations);
};

exports.styles = styles;

function Paper(props) {
  var classes = props.classes,
      classNameProp = props.className,
      Component = props.component,
      square = props.square,
      elevation = props.elevation,
      other = (0, _objectWithoutProperties2.default)(props, ["classes", "className", "component", "square", "elevation"]);
   true ? (0, _warning.default)(elevation >= 0 && elevation < 25, "Material-UI: this elevation `".concat(elevation, "` is not implemented.")) : void 0;
  var className = (0, _classnames.default)(classes.root, classes["elevation".concat(elevation)], (0, _defineProperty2.default)({}, classes.rounded, !square), classNameProp);
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Paper.propTypes =  true ? {
  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It's accepting values between 0 and 24 inclusive.
   */
  elevation: _propTypes.default.number,

  /**
   * If `true`, rounded corners are disabled.
   */
  square: _propTypes.default.bool
} : {};
Paper.defaultProps = {
  component: 'div',
  elevation: 2,
  square: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPaper'
})(Paper);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Paper/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Paper.default;
  }
});

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/Paper.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Popover/Popover.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/debounce/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _Modal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Modal/index.js"));

var _Grow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Grow/index.js"));

var _Paper = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Paper/index.js"));

// @inheritedComponent Modal
// < 1kb payload overhead when lodash/debounce is > 3kb.
function getOffsetTop(rect, vertical) {
  var offset = 0;

  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }

  return offset;
}

function getOffsetLeft(rect, horizontal) {
  var offset = 0;

  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }

  return offset;
}

function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(function (n) {
    return typeof n === 'number' ? "".concat(n, "px") : n;
  }).join(' ');
} // Sum the scrollTop between two elements.


function getScrollParent(parent, child) {
  var element = child;
  var scrollTop = 0;

  while (element && element !== parent) {
    element = element.parentNode;
    scrollTop += element.scrollTop;
  }

  return scrollTop;
}

function getAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

var styles = {
  paper: {
    position: 'absolute',
    overflowY: 'auto',
    overflowX: 'hidden',
    // So we see the popover when it's empty.
    // It's most likely on issue on userland.
    minWidth: 16,
    minHeight: 16,
    maxWidth: 'calc(100% - 32px)',
    maxHeight: 'calc(100% - 32px)',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 'none'
  }
};
exports.styles = styles;

var Popover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popover, _React$Component);

  function Popover() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Popover.__proto__ || Object.getPrototypeOf(Popover)).call.apply(_ref, [this].concat(args))), _this.transitionEl = null, _this.handleGetOffsetTop = getOffsetTop, _this.handleGetOffsetLeft = getOffsetLeft, _this.handleResize = (0, _debounce.default)(function () {
      var element = _reactDom.default.findDOMNode(_this.transitionEl);

      _this.setPositioningStyles(element);
    }, 166), _this.componentWillUnmount = function () {
      _this.handleResize.clear();
    }, _this.setPositioningStyles = function (element) {
      if (element && element.style) {
        var positioning = _this.getPositioningStyle(element);

        if (positioning.top !== null) {
          element.style.top = positioning.top;
        }

        if (positioning.left !== null) {
          element.style.left = positioning.left;
        }

        element.style.transformOrigin = positioning.transformOrigin;
      }
    }, _this.getPositioningStyle = function (element) {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          anchorReference = _this$props.anchorReference,
          marginThreshold = _this$props.marginThreshold; // Check if the parent has requested anchoring on an inner content node

      var contentAnchorOffset = _this.getContentAnchorOffset(element);

      var elemRect = {
        width: element.clientWidth,
        height: element.clientHeight
      }; // Get the transform origin point on the element itself

      var transformOrigin = _this.getTransformOrigin(elemRect, contentAnchorOffset);

      if (anchorReference === 'none') {
        return {
          top: null,
          left: null,
          transformOrigin: getTransformOriginValue(transformOrigin)
        };
      } // Get the offset of of the anchoring element


      var anchorOffset = _this.getAnchorOffset(contentAnchorOffset); // Calculate element positioning


      var top = anchorOffset.top - transformOrigin.vertical;
      var left = anchorOffset.left - transformOrigin.horizontal;
      var bottom = top + elemRect.height;
      var right = left + elemRect.width; // Use the parent window of the anchorEl if provided

      var containerWindow = (0, _ownerWindow.default)(getAnchorEl(anchorEl)); // Window thresholds taking required margin into account

      var heightThreshold = containerWindow.innerHeight - marginThreshold;
      var widthThreshold = containerWindow.innerWidth - marginThreshold; // Check if the vertical axis needs shifting

      if (top < marginThreshold) {
        var diff = top - marginThreshold;
        top -= diff;
        transformOrigin.vertical += diff;
      } else if (bottom > heightThreshold) {
        var _diff = bottom - heightThreshold;

        top -= _diff;
        transformOrigin.vertical += _diff;
      }

       true ? (0, _warning.default)(elemRect.height < heightThreshold || !elemRect.height || !heightThreshold, ['Material-UI: the popover component is too tall.', "Some part of it can not be seen on the screen (".concat(elemRect.height - heightThreshold, "px)."), 'Please consider adding a `max-height` to improve the user-experience.'].join('\n')) : void 0; // Check if the horizontal axis needs shifting

      if (left < marginThreshold) {
        var _diff2 = left - marginThreshold;

        left -= _diff2;
        transformOrigin.horizontal += _diff2;
      } else if (right > widthThreshold) {
        var _diff3 = right - widthThreshold;

        left -= _diff3;
        transformOrigin.horizontal += _diff3;
      }

      return {
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        transformOrigin: getTransformOriginValue(transformOrigin)
      };
    }, _this.handleEnter = function (element) {
      if (_this.props.onEnter) {
        _this.props.onEnter(element);
      }

      _this.setPositioningStyles(element);
    }, _temp));
  }

  (0, _createClass2.default)(Popover, [{
    key: "componentDidMount",
    // Corresponds to 10 frames at 60 Hz.
    value: function componentDidMount() {
      if (this.props.action) {
        this.props.action({
          updatePosition: this.handleResize
        });
      }
    }
  }, {
    key: "getAnchorOffset",
    // Returns the top/left offset of the position
    // to attach to on the anchor element (or body if none is provided)
    value: function getAnchorOffset(contentAnchorOffset) {
      var _props = this.props,
          anchorEl = _props.anchorEl,
          anchorOrigin = _props.anchorOrigin,
          anchorReference = _props.anchorReference,
          anchorPosition = _props.anchorPosition;

      if (anchorReference === 'anchorPosition') {
         true ? (0, _warning.default)(anchorPosition, 'Material-UI: you need to provide a `anchorPosition` property when using ' + '<Popover anchorReference="anchorPosition" />.') : void 0;
        return anchorPosition;
      } // If an anchor element wasn't provided, just use the parent body element of this Popover


      var anchorElement = getAnchorEl(anchorEl) || (0, _ownerDocument.default)(_reactDom.default.findDOMNode(this.transitionEl)).body;
      var anchorRect = anchorElement.getBoundingClientRect();
      var anchorVertical = contentAnchorOffset === 0 ? anchorOrigin.vertical : 'center';
      return {
        top: anchorRect.top + this.handleGetOffsetTop(anchorRect, anchorVertical),
        left: anchorRect.left + this.handleGetOffsetLeft(anchorRect, anchorOrigin.horizontal)
      };
    } // Returns the vertical offset of inner content to anchor the transform on if provided

  }, {
    key: "getContentAnchorOffset",
    value: function getContentAnchorOffset(element) {
      var _props2 = this.props,
          getContentAnchorEl = _props2.getContentAnchorEl,
          anchorReference = _props2.anchorReference;
      var contentAnchorOffset = 0;

      if (getContentAnchorEl && anchorReference === 'anchorEl') {
        var contentAnchorEl = getContentAnchorEl(element);

        if (contentAnchorEl && element.contains(contentAnchorEl)) {
          var scrollTop = getScrollParent(element, contentAnchorEl);
          contentAnchorOffset = contentAnchorEl.offsetTop + contentAnchorEl.clientHeight / 2 - scrollTop || 0;
        } // != the default value


         true ? (0, _warning.default)(this.props.anchorOrigin.vertical === 'top', ['Material-UI: you can not change the default `anchorOrigin.vertical` value ', 'when also providing the `getContentAnchorEl` property to the popover component.', 'Only use one of the two properties.', 'Set `getContentAnchorEl` to null or left `anchorOrigin.vertical` unchanged.'].join('\n')) : void 0;
      }

      return contentAnchorOffset;
    } // Return the base transform origin using the element
    // and taking the content anchor offset into account if in use

  }, {
    key: "getTransformOrigin",
    value: function getTransformOrigin(elemRect) {
      var contentAnchorOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var transformOrigin = this.props.transformOrigin;
      return {
        vertical: this.handleGetOffsetTop(elemRect, transformOrigin.vertical) + contentAnchorOffset,
        horizontal: this.handleGetOffsetLeft(elemRect, transformOrigin.horizontal)
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props3 = this.props,
          action = _props3.action,
          anchorEl = _props3.anchorEl,
          anchorOrigin = _props3.anchorOrigin,
          anchorPosition = _props3.anchorPosition,
          anchorReference = _props3.anchorReference,
          children = _props3.children,
          classes = _props3.classes,
          containerProp = _props3.container,
          elevation = _props3.elevation,
          getContentAnchorEl = _props3.getContentAnchorEl,
          marginThreshold = _props3.marginThreshold,
          onEnter = _props3.onEnter,
          onEntered = _props3.onEntered,
          onEntering = _props3.onEntering,
          onExit = _props3.onExit,
          onExited = _props3.onExited,
          onExiting = _props3.onExiting,
          open = _props3.open,
          PaperProps = _props3.PaperProps,
          role = _props3.role,
          transformOrigin = _props3.transformOrigin,
          TransitionComponent = _props3.TransitionComponent,
          transitionDurationProp = _props3.transitionDuration,
          TransitionProps = _props3.TransitionProps,
          other = (0, _objectWithoutProperties2.default)(_props3, ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "classes", "container", "elevation", "getContentAnchorEl", "marginThreshold", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "open", "PaperProps", "role", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps"]);
      var transitionDuration = transitionDurationProp;

      if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
        transitionDuration = undefined;
      } // If the container prop is provided, use that
      // If the anchorEl prop is provided, use its parent body element as the container
      // If neither are provided let the Modal take care of choosing the container


      var container = containerProp || (anchorEl ? (0, _ownerDocument.default)(getAnchorEl(anchorEl)).body : undefined);
      return _react.default.createElement(_Modal.default, (0, _extends2.default)({
        container: container,
        open: open,
        BackdropProps: {
          invisible: true
        }
      }, other), _react.default.createElement(TransitionComponent, (0, _extends2.default)({
        appear: true,
        "in": open,
        onEnter: this.handleEnter,
        onEntered: onEntered,
        onEntering: onEntering,
        onExit: onExit,
        onExited: onExited,
        onExiting: onExiting,
        role: role,
        ref: function ref(node) {
          _this2.transitionEl = node;
        },
        timeout: transitionDuration
      }, TransitionProps), _react.default.createElement(_Paper.default, (0, _extends2.default)({
        className: classes.paper,
        elevation: elevation
      }, PaperProps), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), children)));
    }
  }]);
  return Popover;
}(_react.default.Component);

Popover.propTypes =  true ? {
  /**
   * This is callback property. It's called by the component on mount.
   * This is useful when you want to trigger an action programmatically.
   * It currently only supports updatePosition() action.
   *
   * @param {object} actions This object contains all posible actions
   * that can be triggered programmatically.
   */
  action: _propTypes.default.func,

  /**
   * This is the DOM element, or a function that returns the DOM element,
   * that may be used to set the position of the popover.
   */
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   */
  anchorOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])])
  }),

  /**
   * This is the position that may be used
   * to set the position of the popover.
   * The coordinates are relative to
   * the application's client area.
   */
  anchorPosition: _propTypes.default.shape({
    left: _propTypes.default.number,
    top: _propTypes.default.number
  }),

  /*
   * This determines which anchor prop to refer to to set
   * the position of the popover.
   */
  anchorReference: _propTypes.default.oneOf(['anchorEl', 'anchorPosition', 'none']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * The elevation of the popover.
   */
  elevation: _propTypes.default.number,

  /**
   * This function is called in order to retrieve the content anchor element.
   * It's the opposite of the `anchorEl` property.
   * The content anchor element should be an element inside the popover.
   * It's used to correctly scroll and set the position of the popover.
   * The positioning strategy tries to make the content anchor element just above the
   * anchor element.
   */
  getContentAnchorEl: _propTypes.default.func,

  /**
   * Specifies how close to the edge of the window the popover can appear.
   */
  marginThreshold: _propTypes.default.number,

  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired before the component is entering.
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired when the component has entered.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired when the component is entering.
   */
  onEntering: _propTypes.default.func,

  /**
   * Callback fired before the component is exiting.
   */
  onExit: _propTypes.default.func,

  /**
   * Callback fired when the component has exited.
   */
  onExited: _propTypes.default.func,

  /**
   * Callback fired when the component is exiting.
   */
  onExiting: _propTypes.default.func,

  /**
   * If `true`, the popover is visible.
   */
  open: _propTypes.default.bool.isRequired,

  /**
   * Properties applied to the `Paper` element.
   */
  PaperProps: _propTypes.default.object,

  /**
   * @ignore
   */
  role: _propTypes.default.string,

  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   */
  transformOrigin: _propTypes.default.shape({
    horizontal: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['left', 'center', 'right'])]),
    vertical: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf(['top', 'center', 'bottom'])])
  }),

  /**
   * Transition component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  }), _propTypes.default.oneOf(['auto'])]),

  /**
   * Properties applied to the `Transition` element.
   */
  TransitionProps: _propTypes.default.object
} : {};
Popover.defaultProps = {
  anchorReference: 'anchorEl',
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  elevation: 8,
  marginThreshold: 16,
  transformOrigin: {
    vertical: 'top',
    horizontal: 'left'
  },
  TransitionComponent: _Grow.default,
  transitionDuration: 'auto'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiPopover'
})(Popover);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Popover/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Popover.default;
  }
});

var _Popover = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Popover/Popover.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Portal/Portal.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

function getContainer(container, defaultContainer) {
  container = typeof container === 'function' ? container() : container;
  return _reactDom.default.findDOMNode(container) || defaultContainer;
}

function getOwnerDocument(element) {
  return (0, _ownerDocument.default)(_reactDom.default.findDOMNode(element));
}
/**
 * This component shares many concepts with
 * [react-overlays](https://react-bootstrap.github.io/react-overlays/#portals)
 * But has been forked in order to fix some bugs, reduce the number of dependencies
 * and take the control of our destiny.
 */


var Portal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Portal, _React$Component);

  function Portal() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Portal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Portal.__proto__ || Object.getPrototypeOf(Portal)).call.apply(_ref, [this].concat(args))), _this.getMountNode = function () {
      return _this.mountNode;
    }, _temp));
  }

  (0, _createClass2.default)(Portal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setContainer(this.props.container);
      this.forceUpdate(this.props.onRendered);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.container !== this.props.container) {
        this.setContainer(this.props.container);
        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.mountNode = null;
    }
  }, {
    key: "setContainer",
    value: function setContainer(container) {
      this.mountNode = getContainer(container, getOwnerDocument(this).body);
    }
    /**
     * @public
     */

  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return this.mountNode ? _reactDom.default.createPortal(children, this.mountNode) : null;
    }
  }]);
  return Portal;
}(_react.default.Component);

Portal.propTypes =  true ? {
  /**
   * The children to render into the `container`.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * A node, component instance, or function that returns either.
   * The `container` will have the portal children appended to it.
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Callback fired once the children has been mounted into the `container`.
   */
  onRendered: _propTypes.default.func
} : {};
Portal.propTypes =  true ? (0, _exactProp.default)(Portal.propTypes) : {};
var _default = Portal;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Portal/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Portal.default;
  }
});

var _Portal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Portal/Portal.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/RootRef/RootRef.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

/**
 * Helper component to allow attaching a ref to a
 * wrapped element to access the underlying DOM element.
 *
 * It's higly inspired by https://github.com/facebook/react/issues/11401#issuecomment-340543801.
 * For example:
 * ```jsx
 * import React from 'react';
 * import RootRef from '@material-ui/core/RootRef';
 *
 * class MyComponent extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.domRef = React.createRef();
 *   }
 *
 *   componentDidMount() {
 *     console.log(this.domRef.current); // DOM node
 *   }
 *
 *   render() {
 *     return (
 *       <RootRef rootRef={this.domRef}>
 *         <SomeChildComponent />
 *       </RootRef>
 *     );
 *   }
 * }
 * ```
 */
var RootRef =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(RootRef, _React$Component);

  function RootRef() {
    (0, _classCallCheck2.default)(this, RootRef);
    return (0, _possibleConstructorReturn2.default)(this, (RootRef.__proto__ || Object.getPrototypeOf(RootRef)).apply(this, arguments));
  }

  (0, _createClass2.default)(RootRef, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var rootRef = this.props.rootRef;

      var node = _reactDom.default.findDOMNode(this);

      if (typeof rootRef === 'function') {
        rootRef(node);
      } else if (rootRef) {
        rootRef.current = node;
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var rootRef = this.props.rootRef;

      if (typeof rootRef === 'function') {
        rootRef(null);
      } else if (rootRef) {
        rootRef.current = null;
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children;
    }
  }]);
  return RootRef;
}(_react.default.Component);

RootRef.propTypes =  true ? {
  /**
   * The wrapped element.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * Provide a way to access the DOM node of the wrapped element.
   * You can provide a callback ref or a `React.createRef()` ref.
   */
  rootRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]).isRequired
} : {};
RootRef.propTypes =  true ? (0, _exactProp.default)(RootRef.propTypes) : {};
var _default = RootRef;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/RootRef/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _RootRef.default;
  }
});

var _RootRef = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/RootRef/RootRef.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/Select.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _SelectInput = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Select/SelectInput.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _mergeClasses = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/mergeClasses.js"));

var _ArrowDropDown = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js"));

var _Input = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Input/index.js"));

var _NativeSelect = __webpack_require__("./node_modules/@material-ui/core/NativeSelect/NativeSelect.js");

var _NativeSelectInput = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/NativeSelect/NativeSelectInput.js"));

// @inheritedComponent Input
var styles = _NativeSelect.styles;
exports.styles = styles;

function Select(props) {
  var autoWidth = props.autoWidth,
      children = props.children,
      classes = props.classes,
      displayEmpty = props.displayEmpty,
      IconComponent = props.IconComponent,
      input = props.input,
      inputProps = props.inputProps,
      MenuProps = props.MenuProps,
      multiple = props.multiple,
      native = props.native,
      onClose = props.onClose,
      onOpen = props.onOpen,
      open = props.open,
      renderValue = props.renderValue,
      SelectDisplayProps = props.SelectDisplayProps,
      other = (0, _objectWithoutProperties2.default)(props, ["autoWidth", "children", "classes", "displayEmpty", "IconComponent", "input", "inputProps", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps"]);
  var inputComponent = native ? _NativeSelectInput.default : _SelectInput.default;
  return _react.default.cloneElement(input, (0, _objectSpread2.default)({
    // Most of the logic is implemented in `SelectInput`.
    // The `Select` component is a simple API wrapper to expose something better to play with.
    inputComponent: inputComponent,
    inputProps: (0, _objectSpread2.default)({
      children: children,
      IconComponent: IconComponent,
      type: undefined
    }, native ? {} : {
      autoWidth: autoWidth,
      displayEmpty: displayEmpty,
      MenuProps: MenuProps,
      multiple: multiple,
      onClose: onClose,
      onOpen: onOpen,
      open: open,
      renderValue: renderValue,
      SelectDisplayProps: SelectDisplayProps
    }, inputProps, {
      classes: inputProps ? (0, _mergeClasses.default)({
        baseClasses: classes,
        newClasses: inputProps.classes,
        Component: Select
      }) : classes
    }, input ? input.props.inputProps : {})
  }, other));
}

Select.propTypes =  true ? {
  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes.default.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   * You can only use it when the `native` property is `false` (default).
   */
  displayEmpty: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: _propTypes.default.element,

  /**
   * Attributes applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: _propTypes.default.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   * You can only use it when the `native` property is `false` (default).
   */
  multiple: _propTypes.default.bool,

  /**
   * If `true`, the component will be using a native `select` element.
   */
  native: _propTypes.default.bool,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * Control `select` open state.
   * You can only use it when the `native` property is `false` (default).
   */
  open: _propTypes.default.bool,

  /**
   * Render the selected value.
   * You can only use it when the `native` property is `false` (default).
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: _propTypes.default.func,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: _propTypes.default.object,

  /**
   * The input value.
   * This property is required when the `native` property is `false` (default).
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))])
} : {};
Select.defaultProps = {
  autoWidth: false,
  displayEmpty: false,
  IconComponent: _ArrowDropDown.default,
  input: _react.default.createElement(_Input.default, null),
  multiple: false,
  native: false
};
Select.muiName = 'Select';

var _default = (0, _withStyles.default)(_NativeSelect.styles, {
  name: 'MuiSelect'
})(Select);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/SelectInput.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/toConsumableArray.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _keycode = _interopRequireDefault(__webpack_require__("./node_modules/keycode/index.js"));

var _Menu = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Menu/Menu.js"));

var _Input = __webpack_require__("./node_modules/@material-ui/core/Input/Input.js");

/**
 * @ignore - internal component.
 */
var SelectInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SelectInput, _React$Component);

  function SelectInput() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, SelectInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = SelectInput.__proto__ || Object.getPrototypeOf(SelectInput)).call.apply(_ref, [this].concat(args))), _this.ignoreNextBlur = false, _this.displayNode = null, _this.isOpenControlled = _this.props.open !== undefined, _this.state = {
      menuMinWidth: null,
      open: false
    }, _this.update = function (_ref2) {
      var event = _ref2.event,
          open = _ref2.open;

      if (_this.isOpenControlled) {
        if (open) {
          _this.props.onOpen(event);
        } else {
          _this.props.onClose(event);
        }

        return;
      }

      _this.setState({
        // Perfom the layout computation outside of the render method.
        menuMinWidth: _this.props.autoWidth ? null : _this.displayNode.clientWidth,
        open: open
      });
    }, _this.handleClick = function (event) {
      // Opening the menu is going to blur the. It will be focused back when closed.
      _this.ignoreNextBlur = true;

      _this.update({
        open: true,
        event: event
      });
    }, _this.handleClose = function (event) {
      _this.update({
        open: false,
        event: event
      });
    }, _this.handleItemClick = function (child) {
      return function (event) {
        if (!_this.props.multiple) {
          _this.update({
            open: false,
            event: event
          });
        }

        var _this$props = _this.props,
            onChange = _this$props.onChange,
            name = _this$props.name;

        if (onChange) {
          var value;
          var target;

          if (event.target) {
            target = event.target;
          }

          if (_this.props.multiple) {
            value = Array.isArray(_this.props.value) ? (0, _toConsumableArray2.default)(_this.props.value) : [];
            var itemIndex = value.indexOf(child.props.value);

            if (itemIndex === -1) {
              value.push(child.props.value);
            } else {
              value.splice(itemIndex, 1);
            }
          } else {
            value = child.props.value;
          }

          event.persist();
          event.target = (0, _objectSpread2.default)({}, target, {
            value: value,
            name: name
          });
          onChange(event, child);
        }
      };
    }, _this.handleBlur = function (event) {
      if (_this.ignoreNextBlur === true) {
        // The parent components are relying on the bubbling of the event.
        event.stopPropagation();
        _this.ignoreNextBlur = false;
        return;
      }

      if (_this.props.onBlur) {
        _this.props.onBlur(event);
      }
    }, _this.handleKeyDown = function (event) {
      if (_this.props.readOnly) {
        return;
      }

      if (['space', 'up', 'down'].indexOf((0, _keycode.default)(event)) !== -1) {
        event.preventDefault(); // Opening the menu is going to blur the. It will be focused back when closed.

        _this.ignoreNextBlur = true;

        _this.update({
          open: true,
          event: event
        });
      }
    }, _this.handleDisplayRef = function (node) {
      _this.displayNode = node;
    }, _this.handleInputRef = function (node) {
      var inputRef = _this.props.inputRef;

      if (!inputRef) {
        return;
      }

      var nodeProxy = {
        node: node,
        // By pass the native input as we expose a rich object (array).
        value: _this.props.value
      };

      if (typeof inputRef === 'function') {
        inputRef(nodeProxy);
      } else {
        inputRef.current = nodeProxy;
      }
    }, _temp));
  }

  (0, _createClass2.default)(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.isOpenControlled && this.props.open) {
        // Focus the display node so the focus is restored on this element once
        // the menu is closed.
        this.displayNode.focus(); // Rerender with the resolve `displayNode` reference.

        this.forceUpdate();
      }

      if (this.props.autoFocus) {
        this.displayNode.focus();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          autoWidth = _props.autoWidth,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disabled = _props.disabled,
          displayEmpty = _props.displayEmpty,
          IconComponent = _props.IconComponent,
          inputRef = _props.inputRef,
          _props$MenuProps = _props.MenuProps,
          MenuProps = _props$MenuProps === void 0 ? {} : _props$MenuProps,
          multiple = _props.multiple,
          name = _props.name,
          onBlur = _props.onBlur,
          onChange = _props.onChange,
          onClose = _props.onClose,
          onFocus = _props.onFocus,
          onOpen = _props.onOpen,
          openProp = _props.open,
          readOnly = _props.readOnly,
          renderValue = _props.renderValue,
          SelectDisplayProps = _props.SelectDisplayProps,
          tabIndexProp = _props.tabIndex,
          _props$type = _props.type,
          type = _props$type === void 0 ? 'hidden' : _props$type,
          value = _props.value,
          other = (0, _objectWithoutProperties2.default)(_props, ["autoWidth", "children", "classes", "className", "disabled", "displayEmpty", "IconComponent", "inputRef", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value"]);
      var open = this.isOpenControlled && this.displayNode ? openProp : this.state.open;
      var display;
      var displaySingle = '';
      var displayMultiple = [];
      var computeDisplay = false; // No need to display any value if the field is empty.

      if ((0, _Input.isFilled)(this.props) || displayEmpty) {
        if (renderValue) {
          display = renderValue(value);
        } else {
          computeDisplay = true;
        }
      }

      var items = _react.default.Children.map(children, function (child) {
        if (!_react.default.isValidElement(child)) {
          return null;
        }

        var selected;

        if (multiple) {
          if (!Array.isArray(value)) {
            throw new Error('Material-UI: the `value` property must be an array ' + 'when using the `Select` component with `multiple`.');
          }

          selected = value.indexOf(child.props.value) !== -1;

          if (selected && computeDisplay) {
            displayMultiple.push(child.props.children);
          }
        } else {
          selected = value === child.props.value;

          if (selected && computeDisplay) {
            displaySingle = child.props.children;
          }
        }

        return _react.default.cloneElement(child, {
          onClick: _this2.handleItemClick(child),
          role: 'option',
          selected: selected,
          value: undefined,
          // The value is most likely not a valid HTML attribute.
          'data-value': child.props.value // Instead, we provide it as a data attribute.

        });
      });

      if (computeDisplay) {
        display = multiple ? displayMultiple.join(', ') : displaySingle;
      } // Avoid performing a layout computation in the render method.


      var menuMinWidth = this.state.menuMinWidth;

      if (!autoWidth && this.isOpenControlled && this.displayNode) {
        menuMinWidth = this.displayNode.clientWidth;
      }

      var tabIndex;

      if (typeof tabIndexProp !== 'undefined') {
        tabIndex = tabIndexProp;
      } else {
        tabIndex = disabled ? null : 0;
      }

      return _react.default.createElement("div", {
        className: classes.root
      }, _react.default.createElement("div", (0, _extends2.default)({
        className: (0, _classnames.default)(classes.select, classes.selectMenu, (0, _defineProperty2.default)({}, classes.disabled, disabled), className),
        ref: this.handleDisplayRef,
        "aria-pressed": open ? 'true' : 'false',
        tabIndex: tabIndex,
        role: "button",
        "aria-owns": open ? "menu-".concat(name || '') : null,
        "aria-haspopup": "true",
        onKeyDown: this.handleKeyDown,
        onBlur: this.handleBlur,
        onClick: disabled || readOnly ? null : this.handleClick,
        onFocus: onFocus
      }, SelectDisplayProps), display || _react.default.createElement("span", {
        dangerouslySetInnerHTML: {
          __html: '&#8203;'
        }
      })), _react.default.createElement("input", (0, _extends2.default)({
        value: Array.isArray(value) ? value.join(',') : value,
        name: name,
        readOnly: readOnly,
        ref: this.handleInputRef,
        type: type
      }, other)), _react.default.createElement(IconComponent, {
        className: classes.icon
      }), _react.default.createElement(_Menu.default, (0, _extends2.default)({
        id: "menu-".concat(name || ''),
        anchorEl: this.displayNode,
        open: open,
        onClose: this.handleClose
      }, MenuProps, {
        MenuListProps: (0, _objectSpread2.default)({
          role: 'listbox'
        }, MenuProps.MenuListProps),
        PaperProps: (0, _objectSpread2.default)({}, MenuProps.PaperProps, {
          style: (0, _objectSpread2.default)({
            minWidth: menuMinWidth
          }, MenuProps.PaperProps != null ? MenuProps.PaperProps.style : null)
        })
      }), items));
    }
  }]);
  return SelectInput;
}(_react.default.Component);

SelectInput.propTypes =  true ? {
  /**
   * @ignore
   */
  autoFocus: _propTypes.default.bool,

  /**
   * If true, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: _propTypes.default.bool,

  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * The CSS class name of the select element.
   */
  className: _propTypes.default.string,

  /**
   * If `true`, the select will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: _propTypes.default.bool,

  /**
   * The icon that displays the arrow.
   */
  IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Use that property to pass a ref callback to the native select element.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties applied to the `Menu` element.
   */
  MenuProps: _propTypes.default.object,

  /**
   * If true, `value` must be an array and the menu will support multiple selections.
   */
  multiple: _propTypes.default.bool,

  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback function fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   * @param {object} [child] The react element that was selected.
   */
  onChange: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * Control `select` open state.
   */
  open: _propTypes.default.bool,

  /**
   * @ignore
   */
  readOnly: _propTypes.default.bool,

  /**
   * Render the selected value.
   *
   * @param {*} value The `value` provided to the component.
   * @returns {ReactElement}
   */
  renderValue: _propTypes.default.func,

  /**
   * Properties applied to the clickable div element.
   */
  SelectDisplayProps: _propTypes.default.object,

  /**
   * @ignore
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * @ignore
   */
  type: _propTypes.default.string,

  /**
   * The input value.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))]).isRequired
} : {};
var _default = SelectInput;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Select/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Select.default;
  }
});

var _Select = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Select/Select.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Slide/Slide.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTranslateValue = setTranslateValue;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactDom = _interopRequireDefault(__webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/debounce/index.js"));

var _Transition = _interopRequireDefault(__webpack_require__("./node_modules/react-transition-group/Transition.js"));

var _ownerWindow = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerWindow.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

var _transitions = __webpack_require__("./node_modules/@material-ui/core/styles/transitions.js");

var _utils = __webpack_require__("./node_modules/@material-ui/core/transitions/utils.js");

// @inheritedComponent Transition
// < 1kb payload overhead when lodash/debounce is > 3kb.
var GUTTER = 24; // Translate the node so he can't be seen on the screen.
// Later, we gonna translate back the node to his original location
// with `translate3d(0, 0, 0)`.`

function getTranslateValue(props, node) {
  var direction = props.direction;
  var rect = node.getBoundingClientRect();
  var transform;

  if (node.fakeTransform) {
    transform = node.fakeTransform;
  } else {
    var computedStyle = (0, _ownerWindow.default)(node).getComputedStyle(node);
    transform = computedStyle.getPropertyValue('-webkit-transform') || computedStyle.getPropertyValue('transform');
  }

  var offsetX = 0;
  var offsetY = 0;

  if (transform && transform !== 'none' && typeof transform === 'string') {
    var transformValues = transform.split('(')[1].split(')')[0].split(',');
    offsetX = parseInt(transformValues[4], 10);
    offsetY = parseInt(transformValues[5], 10);
  }

  if (direction === 'left') {
    return "translateX(100vw) translateX(-".concat(rect.left - offsetX, "px)");
  }

  if (direction === 'right') {
    return "translateX(-".concat(rect.left + rect.width + GUTTER - offsetX, "px)");
  }

  if (direction === 'up') {
    return "translateY(100vh) translateY(-".concat(rect.top - offsetY, "px)");
  } // direction === 'down'


  return "translateY(-".concat(rect.top + rect.height + GUTTER - offsetY, "px)");
}

function setTranslateValue(props, node) {
  var transform = getTranslateValue(props, node);

  if (transform) {
    node.style.webkitTransform = transform;
    node.style.transform = transform;
  }
}
/**
 * The Slide transition is used by the [Snackbar](/demos/snackbars) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */


var Slide =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Slide, _React$Component);

  function Slide() {
    var _ref;

    var _temp, _this;

    (0, _classCallCheck2.default)(this, Slide);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _possibleConstructorReturn2.default)(_this, (_temp = _this = (0, _possibleConstructorReturn2.default)(this, (_ref = Slide.__proto__ || Object.getPrototypeOf(Slide)).call.apply(_ref, [this].concat(args))), _this.mounted = false, _this.transition = null, _this.handleResize = (0, _debounce.default)(function () {
      // Skip configuration where the position is screen size invariant.
      if (_this.props.in || _this.props.direction === 'down' || _this.props.direction === 'right') {
        return;
      }

      var node = _reactDom.default.findDOMNode(_this.transition);

      if (node) {
        setTranslateValue(_this.props, node);
      }
    }, 166), _this.handleEnter = function (node) {
      setTranslateValue(_this.props, node);
      (0, _utils.reflow)(node);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    }, _this.handleEntering = function (node) {
      var theme = _this.props.theme;
      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'enter'
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _objectSpread2.default)({}, transitionProps, {
        easing: theme.transitions.easing.easeOut
      }));
      node.style.transition = theme.transitions.create('transform', (0, _objectSpread2.default)({}, transitionProps, {
        easing: theme.transitions.easing.easeOut
      }));
      node.style.webkitTransform = 'translate(0, 0)';
      node.style.transform = 'translate(0, 0)';

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    }, _this.handleExit = function (node) {
      var theme = _this.props.theme;
      var transitionProps = (0, _utils.getTransitionProps)(_this.props, {
        mode: 'exit'
      });
      node.style.webkitTransition = theme.transitions.create('-webkit-transform', (0, _objectSpread2.default)({}, transitionProps, {
        easing: theme.transitions.easing.sharp
      }));
      node.style.transition = theme.transitions.create('transform', (0, _objectSpread2.default)({}, transitionProps, {
        easing: theme.transitions.easing.sharp
      }));
      setTranslateValue(_this.props, node);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    }, _this.handleExited = function (node) {
      // No need for transitions when the component is hidden
      node.style.webkitTransition = '';
      node.style.transition = '';

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    }, _temp));
  }

  (0, _createClass2.default)(Slide, [{
    key: "componentDidMount",
    // Corresponds to 10 frames at 60 Hz.
    value: function componentDidMount() {
      // state.mounted handle SSR, once the component is mounted, we need
      // to properly hide it.
      if (!this.props.in) {
        // We need to set initial translate values of transition element
        // otherwise component will be shown when in=false.
        this.updatePosition();
      }

      this.mounted = true;
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (prevProps.direction !== this.props.direction && !this.props.in) {
        // We need to update the position of the drawer when the direction change and
        // when it's hidden.
        this.updatePosition();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.handleResize.clear();
    }
  }, {
    key: "updatePosition",
    value: function updatePosition() {
      var node = _reactDom.default.findDOMNode(this.transition);

      if (node) {
        node.style.visibility = 'inherit';
        setTranslateValue(this.props, node);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          onEnter = _props.onEnter,
          onEntering = _props.onEntering,
          onExit = _props.onExit,
          onExited = _props.onExited,
          styleProp = _props.style,
          theme = _props.theme,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "onEnter", "onEntering", "onExit", "onExited", "style", "theme"]);
      var style = {}; // We use this state to handle the server-side rendering.
      // We don't know the width of the children ahead of time.
      // We need to render it.

      if (!this.props.in && !this.mounted) {
        style.visibility = 'hidden';
      }

      style = (0, _objectSpread2.default)({}, style, styleProp, _react.default.isValidElement(children) ? children.props.style : {});
      return _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }, _react.default.createElement(_Transition.default, (0, _extends2.default)({
        onEnter: this.handleEnter,
        onEntering: this.handleEntering,
        onExit: this.handleExit,
        onExited: this.handleExited,
        appear: true,
        style: style,
        ref: function ref(node) {
          _this2.transition = node;
        }
      }, other), children));
    }
  }]);
  return Slide;
}(_react.default.Component);

Slide.propTypes =  true ? {
  /**
   * A single child content element.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * Direction the child node will enter from.
   */
  direction: _propTypes.default.oneOf(['left', 'right', 'up', 'down']),

  /**
   * If `true`, show the component; triggers the enter or exit animation.
   */
  in: _propTypes.default.bool,

  /**
   * @ignore
   */
  onEnter: _propTypes.default.func,

  /**
   * @ignore
   */
  onEntering: _propTypes.default.func,

  /**
   * @ignore
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  onExited: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Slide.defaultProps = {
  direction: 'down',
  timeout: {
    enter: _transitions.duration.enteringScreen,
    exit: _transitions.duration.leavingScreen
  }
};

var _default = (0, _withTheme.default)()(Slide);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Slide/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Slide.default;
  }
});

var _Slide = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Slide/Slide.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/SvgIcon.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      userSelect: 'none',
      fontSize: 24,
      width: '1em',
      height: '1em',
      display: 'inline-block',
      fill: 'currentColor',
      flexShrink: 0,
      transition: theme.transitions.create('fill', {
        duration: theme.transitions.duration.shorter
      })
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorAction: {
      color: theme.palette.action.active
    },
    colorError: {
      color: theme.palette.error.main
    },
    colorDisabled: {
      color: theme.palette.action.disabled
    }
  };
};

exports.styles = styles;

function SvgIcon(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      color = props.color,
      nativeColor = props.nativeColor,
      titleAccess = props.titleAccess,
      viewBox = props.viewBox,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "color", "nativeColor", "titleAccess", "viewBox"]);
  var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'inherit'), classNameProp);
  return _react.default.createElement("svg", (0, _extends2.default)({
    className: className,
    focusable: "false",
    viewBox: viewBox,
    color: nativeColor,
    "aria-hidden": titleAccess ? 'false' : 'true'
  }, other), titleAccess ? _react.default.createElement("title", null, titleAccess) : null, children);
}

SvgIcon.propTypes =  true ? {
  /**
   * Node passed into the SVG element.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'secondary', 'action', 'error', 'disabled']),

  /**
   * Applies a color attribute to the SVG element.
   */
  nativeColor: _propTypes.default.string,

  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: _propTypes.default.string,

  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   */
  viewBox: _propTypes.default.string
} : {};
SvgIcon.defaultProps = {
  color: 'inherit',
  viewBox: '0 0 24 24'
};
SvgIcon.muiName = 'SvgIcon';

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiSvgIcon'
})(SvgIcon);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/SvgIcon/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _SvgIcon.default;
  }
});

var _SvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/SvgIcon/SvgIcon.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/TextField.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _Input = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Input/index.js"));

var _InputLabel = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/InputLabel/index.js"));

var _FormControl = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormControl/index.js"));

var _FormHelperText = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/FormHelperText/index.js"));

var _Select = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Select/index.js"));

// @inheritedComponent FormControl

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 * - [FormControl](/api/form-control)
 * - [InputLabel](/api/input-label)
 * - [Input](/api/input)
 * - [FormHelperText](/api/form-helper-text)
 *
 * If you wish to alter the properties applied to the native input, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
function TextField(props) {
  var autoComplete = props.autoComplete,
      autoFocus = props.autoFocus,
      children = props.children,
      className = props.className,
      defaultValue = props.defaultValue,
      disabled = props.disabled,
      error = props.error,
      FormHelperTextProps = props.FormHelperTextProps,
      fullWidth = props.fullWidth,
      helperText = props.helperText,
      id = props.id,
      InputLabelProps = props.InputLabelProps,
      inputProps = props.inputProps,
      InputProps = props.InputProps,
      inputRef = props.inputRef,
      label = props.label,
      multiline = props.multiline,
      name = props.name,
      onBlur = props.onBlur,
      onChange = props.onChange,
      onFocus = props.onFocus,
      placeholder = props.placeholder,
      required = props.required,
      rows = props.rows,
      rowsMax = props.rowsMax,
      select = props.select,
      SelectProps = props.SelectProps,
      type = props.type,
      value = props.value,
      other = (0, _objectWithoutProperties2.default)(props, ["autoComplete", "autoFocus", "children", "className", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "rowsMax", "select", "SelectProps", "type", "value"]);
   true ? (0, _warning.default)(!select || Boolean(children), 'Material-UI: `children` must be passed when using the `TextField` component with `select`.') : void 0;
  var helperTextId = helperText && id ? "".concat(id, "-helper-text") : undefined;

  var InputElement = _react.default.createElement(_Input.default, (0, _extends2.default)({
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    disabled: disabled,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    rowsMax: rowsMax,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputProps));

  return _react.default.createElement(_FormControl.default, (0, _extends2.default)({
    "aria-describedby": helperTextId,
    className: className,
    error: error,
    fullWidth: fullWidth,
    required: required
  }, other), label && _react.default.createElement(_InputLabel.default, (0, _extends2.default)({
    htmlFor: id
  }, InputLabelProps), label), select ? _react.default.createElement(_Select.default, (0, _extends2.default)({
    value: value,
    input: InputElement
  }, SelectProps), children) : InputElement, helperText && _react.default.createElement(_FormHelperText.default, (0, _extends2.default)({
    id: helperTextId
  }, FormHelperTextProps), helperText));
}

TextField.propTypes =  true ? {
  /**
   * This property helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it here:
   * https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
   */
  autoComplete: _propTypes.default.string,

  /**
   * If `true`, the input will be focused during the first mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The default value of the `Input` element.
   */
  defaultValue: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * If `true`, the input will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, the label will be displayed in an error state.
   */
  error: _propTypes.default.bool,

  /**
   * Properties applied to the `FormHelperText` element.
   */
  FormHelperTextProps: _propTypes.default.object,

  /**
   * If `true`, the input will take up the full width of its container.
   */
  fullWidth: _propTypes.default.bool,

  /**
   * The helper text content.
   */
  helperText: _propTypes.default.node,

  /**
   * The id of the `input` element.
   * Use that property to make `label` and `helperText` accessible for screen readers.
   */
  id: _propTypes.default.string,

  /**
   * Properties applied to the `InputLabel` element.
   */
  InputLabelProps: _propTypes.default.object,

  /**
   * Properties applied to the `Input` element.
   */
  InputProps: _propTypes.default.object,

  /**
   * Attributes applied to the native `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Use that property to pass a ref callback to the native input component.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * The label content.
   */
  label: _propTypes.default.node,

  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   */
  margin: _propTypes.default.oneOf(['none', 'dense', 'normal']),

  /**
   * If `true`, a textarea element will be rendered instead of an input.
   */
  multiline: _propTypes.default.bool,

  /**
   * Name attribute of the `input` element.
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value`.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * The short hint displayed in the input before the user enters a value.
   */
  placeholder: _propTypes.default.string,

  /**
   * If `true`, the label is displayed as required.
   */
  required: _propTypes.default.bool,

  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  rowsMax: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),

  /**
   * Render a `Select` element while passing the `Input` element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   */
  select: _propTypes.default.bool,

  /**
   * Properties applied to the `Select` element.
   */
  SelectProps: _propTypes.default.object,

  /**
   * Type attribute of the `Input` element. It should be a valid HTML5 input type.
   */
  type: _propTypes.default.string,

  /**
   * The value of the `Input` element, required for a controlled component.
   */
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]))])
} : {};
TextField.defaultProps = {
  required: false,
  select: false
};
var _default = TextField;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/TextField/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _TextField.default;
  }
});

var _TextField = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/TextField/TextField.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Toolbar/Toolbar.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var styles = function styles(theme) {
  return {
    root: (0, _objectSpread2.default)({}, theme.mixins.toolbar, {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }),
    gutters: theme.mixins.gutters()
  };
};

exports.styles = styles;

function Toolbar(props) {
  var children = props.children,
      classes = props.classes,
      classNameProp = props.className,
      disableGutters = props.disableGutters,
      other = (0, _objectWithoutProperties2.default)(props, ["children", "classes", "className", "disableGutters"]);
  var className = (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.gutters, !disableGutters), classNameProp);
  return _react.default.createElement("div", (0, _extends2.default)({
    className: className
  }, other), children);
}

Toolbar.propTypes =  true ? {
  /**
   * Toolbar children, usually a mixture of `IconButton`, `Button` and `Typography`.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * If `true`, disables gutter padding.
   */
  disableGutters: _propTypes.default.bool
} : {};
Toolbar.defaultProps = {
  disableGutters: false
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiToolbar'
})(Toolbar);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Toolbar/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Toolbar.default;
  }
});

var _Toolbar = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Toolbar/Toolbar.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Tooltip/Tooltip.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _reactEventListener = _interopRequireDefault(__webpack_require__("./node_modules/react-event-listener/dist/react-event-listener.cjs.js"));

var _debounce = _interopRequireDefault(__webpack_require__("./node_modules/debounce/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _reactPopper = __webpack_require__("./node_modules/react-popper/lib/react-popper.js");

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var _RootRef = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/RootRef/index.js"));

var _Portal = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Portal/index.js"));

var _common = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/common.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

/* eslint-disable react/no-multi-comp, no-underscore-dangle */
// < 1kb payload overhead when lodash/debounce is > 3kb.
var styles = function styles(theme) {
  return {
    popper: {
      zIndex: theme.zIndex.tooltip,
      pointerEvents: 'none',
      '&$open': {
        pointerEvents: 'auto'
      }
    },
    open: {},
    tooltip: {
      backgroundColor: theme.palette.grey[700],
      borderRadius: theme.shape.borderRadius,
      color: _common.default.white,
      fontFamily: theme.typography.fontFamily,
      opacity: 0,
      transform: 'scale(0)',
      transition: theme.transitions.create(['opacity', 'transform'], {
        duration: theme.transitions.duration.shortest,
        easing: theme.transitions.easing.easeIn
      }),
      minHeight: 0,
      padding: "".concat(theme.spacing.unit / 2, "px ").concat(theme.spacing.unit, "px"),
      fontSize: theme.typography.pxToRem(10),
      lineHeight: "".concat(theme.typography.round(14 / 10), "em"),
      '&$open': {
        opacity: 0.9,
        transform: 'scale(1)',
        transition: theme.transitions.create(['opacity', 'transform'], {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeOut
        })
      }
    },
    touch: {
      padding: "".concat(theme.spacing.unit, "px ").concat(theme.spacing.unit * 2, "px"),
      fontSize: theme.typography.pxToRem(14),
      lineHeight: "".concat(theme.typography.round(16 / 14), "em")
    },
    tooltipPlacementLeft: (0, _defineProperty2.default)({
      transformOrigin: 'right center',
      margin: "0 ".concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementRight: (0, _defineProperty2.default)({
      transformOrigin: 'left center',
      margin: "0 ".concat(theme.spacing.unit * 3, "px")
    }, theme.breakpoints.up('sm'), {
      margin: '0 14px'
    }),
    tooltipPlacementTop: (0, _defineProperty2.default)({
      transformOrigin: 'center bottom',
      margin: "".concat(theme.spacing.unit * 3, "px 0")
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    }),
    tooltipPlacementBottom: (0, _defineProperty2.default)({
      transformOrigin: 'center top',
      margin: "".concat(theme.spacing.unit * 3, "px 0")
    }, theme.breakpoints.up('sm'), {
      margin: '14px 0'
    })
  };
};

exports.styles = styles;

function flipPlacement(placement) {
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tooltip, _React$Component);

  // Corresponds to 10 frames at 60 Hz.
  function Tooltip(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tooltip);
    _this = (0, _possibleConstructorReturn2.default)(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).call(this, props));
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.touchTimer = null;
    _this.closeTimer = null;
    _this.isControlled = null;
    _this.popper = null;
    _this.children = null;
    _this.ignoreNonTouchEvents = false;
    _this.handleResize = (0, _debounce.default)(function () {
      if (_this.popper) {
        _this.popper._popper.scheduleUpdate();
      }
    }, 166);
    _this.state = {};

    _this.handleEnter = function (event) {
      var _this$props = _this.props,
          children = _this$props.children,
          enterDelay = _this$props.enterDelay;
      var childrenProps = children.props;

      if (event.type === 'focus' && childrenProps.onFocus) {
        childrenProps.onFocus(event);
      }

      if (event.type === 'mouseover' && childrenProps.onMouseOver) {
        childrenProps.onMouseOver(event);
      }

      if (_this.ignoreNonTouchEvents && event.type !== 'touchstart') {
        return;
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      if (!_this.isControlled) {
        _this.setState({
          open: true
        });
      }

      if (_this.props.onOpen) {
        _this.props.onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          leaveDelay = _this$props2.leaveDelay;
      var childrenProps = children.props;

      if (event.type === 'blur' && childrenProps.onBlur) {
        childrenProps.onBlur(event);
      }

      if (event.type === 'mouseleave' && childrenProps.onMouseLeave) {
        childrenProps.onMouseLeave(event);
      }

      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer);

      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      if (!_this.isControlled) {
        _this.setState({
          open: false
        });
      }

      if (_this.props.onClose) {
        _this.props.onClose(event, false);
      }

      clearTimeout(_this.closeTimer);
      _this.closeTimer = setTimeout(function () {
        _this.ignoreNonTouchEvents = false;
      }, _this.props.theme.transitions.duration.shortest);
    };

    _this.handleTouchStart = function (event) {
      _this.ignoreNonTouchEvents = true;
      var _this$props3 = _this.props,
          children = _this$props3.children,
          enterTouchDelay = _this$props3.enterTouchDelay;
      var childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }

      clearTimeout(_this.leaveTimer);
      clearTimeout(_this.closeTimer);
      clearTimeout(_this.touchTimer);
      event.persist();
      _this.touchTimer = setTimeout(function () {
        _this.handleEnter(event);
      }, enterTouchDelay);
    };

    _this.handleTouchEnd = function (event) {
      var _this$props4 = _this.props,
          children = _this$props4.children,
          leaveTouchDelay = _this$props4.leaveTouchDelay;
      var childrenProps = children.props;

      if (childrenProps.onTouchEnd) {
        childrenProps.onTouchEnd(event);
      }

      clearTimeout(_this.touchTimer);
      clearTimeout(_this.leaveTimer);
      event.persist();
      _this.leaveTimer = setTimeout(function () {
        _this.handleClose(event);
      }, leaveTouchDelay);
    };

    _this.isControlled = props.open != null;

    if (!_this.isControlled) {
      // not controlled, use internal state
      _this.state.open = false;
    }

    return _this;
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
       true ? (0, _warning.default)(!this.children || !this.children.disabled || !this.children.tagName.toLowerCase() === 'button', ['Material-UI: you are providing a disabled `button` child to the Tooltip component.', 'A disabled element does not fire events.', "Tooltip needs to listen to the child element's events to display the title.", '', 'Place a `div` container on top of the element.'].join('\n')) : void 0;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer);
      clearTimeout(this.touchTimer);
      clearTimeout(this.closeTimer);
      this.handleResize.clear();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          children = _props.children,
          classes = _props.classes,
          className = _props.className,
          disableFocusListener = _props.disableFocusListener,
          disableHoverListener = _props.disableHoverListener,
          disableTouchListener = _props.disableTouchListener,
          enterDelay = _props.enterDelay,
          enterTouchDelay = _props.enterTouchDelay,
          id = _props.id,
          leaveDelay = _props.leaveDelay,
          leaveTouchDelay = _props.leaveTouchDelay,
          onClose = _props.onClose,
          onOpen = _props.onOpen,
          openProp = _props.open,
          placementProp = _props.placement,
          _props$PopperProps = _props.PopperProps;
      _props$PopperProps = _props$PopperProps === void 0 ? {} : _props$PopperProps;
      var PopperClassName = _props$PopperProps.className,
          PopperProps = (0, _objectWithoutProperties2.default)(_props$PopperProps, ["className"]),
          theme = _props.theme,
          title = _props.title,
          other = (0, _objectWithoutProperties2.default)(_props, ["children", "classes", "className", "disableFocusListener", "disableHoverListener", "disableTouchListener", "enterDelay", "enterTouchDelay", "id", "leaveDelay", "leaveTouchDelay", "onClose", "onOpen", "open", "placement", "PopperProps", "theme", "title"]);
      var placement = theme.direction === 'rtl' ? flipPlacement(placementProp) : placementProp;
      var open = this.isControlled ? openProp : this.state.open;
      var childrenProps = {
        'aria-describedby': id
      }; // There is no point at displaying an empty tooltip.

      if (title === '') {
        open = false;
      }

      if (!disableTouchListener) {
        childrenProps.onTouchStart = this.handleTouchStart;
        childrenProps.onTouchEnd = this.handleTouchEnd;
      }

      if (!disableHoverListener) {
        childrenProps.onMouseOver = this.handleEnter;
        childrenProps.onMouseLeave = this.handleLeave;
      }

      if (!disableFocusListener) {
        childrenProps.onFocus = this.handleEnter;
        childrenProps.onBlur = this.handleLeave;
      }

       true ? (0, _warning.default)(!children.props.title, ['Material-UI: you have been providing a `title` property to the child of <Tooltip />.', "Remove this title property `".concat(children.props.title, "` or the Tooltip component.")].join('\n')) : void 0;
      return _react.default.createElement(_reactPopper.Manager, (0, _extends2.default)({
        tag: false
      }, other), _react.default.createElement(_reactEventListener.default, {
        target: "window",
        onResize: this.handleResize
      }), _react.default.createElement(_reactPopper.Target, null, function (_ref) {
        var targetProps = _ref.targetProps;
        return _react.default.createElement(_RootRef.default, {
          rootRef: function rootRef(node) {
            _this2.children = node;
            targetProps.ref(_this2.children);
          }
        }, _react.default.cloneElement(children, childrenProps));
      }), _react.default.createElement(_Portal.default, null, _react.default.createElement(_reactPopper.Popper, (0, _extends2.default)({
        placement: placement,
        eventsEnabled: open,
        className: (0, _classnames.default)(classes.popper, (0, _defineProperty2.default)({}, classes.open, open), PopperClassName),
        ref: function ref(node) {
          _this2.popper = node;
        }
      }, PopperProps), function (_ref2) {
        var popperProps = _ref2.popperProps,
            restProps = _ref2.restProps;
        var actualPlacement = (popperProps['data-placement'] || placement).split('-')[0];
        return _react.default.createElement("div", (0, _extends2.default)({}, popperProps, restProps, {
          style: (0, _objectSpread2.default)({}, popperProps.style, {
            top: popperProps.style.top || 0,
            left: popperProps.style.left || 0
          }, restProps.style)
        }), _react.default.createElement("div", {
          id: id,
          role: "tooltip",
          "aria-hidden": !open,
          className: (0, _classnames.default)(classes.tooltip, (0, _defineProperty2.default)({}, classes.open, open), (0, _defineProperty2.default)({}, classes.touch, _this2.ignoreNonTouchEvents), classes["tooltipPlacement".concat((0, _helpers.capitalize)(actualPlacement))])
        }, title));
      })));
    }
  }]);
  return Tooltip;
}(_react.default.Component);

Tooltip.propTypes =  true ? {
  /**
   * Tooltip reference element.
   */
  children: _propTypes.default.element.isRequired,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes.default.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes.default.bool,

  /**
   * Do not respond to long press touch events.
   */
  disableTouchListener: _propTypes.default.bool,

  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This property won't impact the enter touch delay (`enterTouchDelay`).
   */
  enterDelay: _propTypes.default.number,

  /**
   * The number of milliseconds a user must touch the element before showing the tooltip.
   */
  enterTouchDelay: _propTypes.default.number,

  /**
   * The relationship between the tooltip and the wrapper component is not clear from the DOM.
   * By providing this property, we can use aria-describedby to solve the accessibility issue.
   */
  id: _propTypes.default.string,

  /**
   * The number of milliseconds to wait before hiding the tooltip.
   * This property won't impact the leave touch delay (`leaveTouchDelay`).
   */
  leaveDelay: _propTypes.default.number,

  /**
   * The number of milliseconds after the user stops touching an element before hiding the tooltip.
   */
  leaveTouchDelay: _propTypes.default.number,

  /**
   * Callback fired when the tooltip requests to be closed.
   *
   * @param {object} event The event source of the callback
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the tooltip requests to be open.
   *
   * @param {object} event The event source of the callback
   */
  onOpen: _propTypes.default.func,

  /**
   * If `true`, the tooltip is shown.
   */
  open: _propTypes.default.bool,

  /**
   * Tooltip placement
   */
  placement: _propTypes.default.oneOf(['bottom-end', 'bottom-start', 'bottom', 'left-end', 'left-start', 'left', 'right-end', 'right-start', 'right', 'top-end', 'top-start', 'top']),

  /**
   * Properties applied to the `Popper` element.
   */
  PopperProps: _propTypes.default.object,

  /**
   * @ignore
   */
  theme: _propTypes.default.object.isRequired,

  /**
   * Tooltip title. Zero-length titles string are never displayed.
   */
  title: _propTypes.default.node.isRequired
} : {};
Tooltip.defaultProps = {
  disableFocusListener: false,
  disableHoverListener: false,
  disableTouchListener: false,
  enterDelay: 0,
  enterTouchDelay: 1000,
  leaveDelay: 0,
  leaveTouchDelay: 1500,
  placement: 'bottom'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTooltip',
  withTheme: true
})(Tooltip);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Tooltip/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Tooltip.default;
  }
});

var _Tooltip = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Tooltip/Tooltip.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/Typography.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.styles = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _helpers = __webpack_require__("./node_modules/@material-ui/core/utils/helpers.js");

var styles = function styles(theme) {
  return {
    root: {
      display: 'block',
      margin: 0
    },
    display4: theme.typography.display4,
    display3: theme.typography.display3,
    display2: theme.typography.display2,
    display1: theme.typography.display1,
    headline: theme.typography.headline,
    title: theme.typography.title,
    subheading: theme.typography.subheading,
    body2: theme.typography.body2,
    body1: theme.typography.body1,
    caption: theme.typography.caption,
    button: theme.typography.button,
    alignLeft: {
      textAlign: 'left'
    },
    alignCenter: {
      textAlign: 'center'
    },
    alignRight: {
      textAlign: 'right'
    },
    alignJustify: {
      textAlign: 'justify'
    },
    noWrap: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    },
    gutterBottom: {
      marginBottom: '0.35em'
    },
    paragraph: {
      marginBottom: theme.spacing.unit * 2
    },
    colorInherit: {
      color: 'inherit'
    },
    colorPrimary: {
      color: theme.palette.primary.main
    },
    colorSecondary: {
      color: theme.palette.secondary.main
    },
    colorTextSecondary: {
      color: theme.palette.text.secondary
    },
    colorError: {
      color: theme.palette.error.main
    }
  };
};

exports.styles = styles;

function Typography(props) {
  var _classNames;

  var align = props.align,
      classes = props.classes,
      classNameProp = props.className,
      componentProp = props.component,
      color = props.color,
      gutterBottom = props.gutterBottom,
      headlineMapping = props.headlineMapping,
      noWrap = props.noWrap,
      paragraph = props.paragraph,
      variant = props.variant,
      other = (0, _objectWithoutProperties2.default)(props, ["align", "classes", "className", "component", "color", "gutterBottom", "headlineMapping", "noWrap", "paragraph", "variant"]);
  var className = (0, _classnames.default)(classes.root, classes[variant], (_classNames = {}, (0, _defineProperty2.default)(_classNames, classes["color".concat((0, _helpers.capitalize)(color))], color !== 'default'), (0, _defineProperty2.default)(_classNames, classes.noWrap, noWrap), (0, _defineProperty2.default)(_classNames, classes.gutterBottom, gutterBottom), (0, _defineProperty2.default)(_classNames, classes.paragraph, paragraph), (0, _defineProperty2.default)(_classNames, classes["align".concat((0, _helpers.capitalize)(align))], align !== 'inherit'), _classNames), classNameProp);
  var Component = componentProp || (paragraph ? 'p' : headlineMapping[variant]) || 'span';
  return _react.default.createElement(Component, (0, _extends2.default)({
    className: className
  }, other));
}

Typography.propTypes =  true ? {
  /**
   * Set the text-align on the component.
   */
  align: _propTypes.default.oneOf(['inherit', 'left', 'center', 'right', 'justify']),

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css-api) below for more details.
   */
  classes: _propTypes.default.object.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color: _propTypes.default.oneOf(['inherit', 'primary', 'textSecondary', 'secondary', 'error', 'default']),

  /**
   * The component used for the root node.
   * Either a string to use a DOM element or a component.
   * By default, it maps the variant to a good default headline component.
   */
  component: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the text will have a bottom margin.
   */
  gutterBottom: _propTypes.default.bool,

  /**
   * We are empirically mapping the variant property to a range of different DOM element types.
   * For instance, h1 to h6. If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` property.
   */
  headlineMapping: _propTypes.default.object,

  /**
   * If `true`, the text will not wrap, but instead will truncate with an ellipsis.
   */
  noWrap: _propTypes.default.bool,

  /**
   * If `true`, the text will have a bottom margin.
   */
  paragraph: _propTypes.default.bool,

  /**
   * Applies the theme typography styles.
   */
  variant: _propTypes.default.oneOf(['display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', 'body1', 'caption', 'button'])
} : {};
Typography.defaultProps = {
  align: 'inherit',
  color: 'default',
  gutterBottom: false,
  headlineMapping: {
    display4: 'h1',
    display3: 'h1',
    display2: 'h1',
    display1: 'h1',
    headline: 'h1',
    title: 'h2',
    subheading: 'h3',
    body2: 'aside',
    body1: 'p'
  },
  noWrap: false,
  paragraph: false,
  variant: 'body1'
};

var _default = (0, _withStyles.default)(styles, {
  name: 'MuiTypography'
})(Typography);

exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/Typography/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "default", {
  enumerable: true,
  get: function get() {
    return _Typography.default;
  }
});

var _Typography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/Typography/Typography.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/common.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var common = {
  black: '#000',
  white: '#fff'
};
var _default = common;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/green.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
var _default = green;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/grey.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#d5d5d5',
  A200: '#aaaaaa',
  A400: '#303030',
  A700: '#616161'
};
var _default = grey;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/indigo.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var indigo = {
  50: '#e8eaf6',
  100: '#c5cae9',
  200: '#9fa8da',
  300: '#7986cb',
  400: '#5c6bc0',
  500: '#3f51b5',
  600: '#3949ab',
  700: '#303f9f',
  800: '#283593',
  900: '#1a237e',
  A100: '#8c9eff',
  A200: '#536dfe',
  A400: '#3d5afe',
  A700: '#304ffe'
};
var _default = indigo;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/pink.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var pink = {
  50: '#fce4ec',
  100: '#f8bbd0',
  200: '#f48fb1',
  300: '#f06292',
  400: '#ec407a',
  500: '#e91e63',
  600: '#d81b60',
  700: '#c2185b',
  800: '#ad1457',
  900: '#880e4f',
  A100: '#ff80ab',
  A200: '#ff4081',
  A400: '#f50057',
  A700: '#c51162'
};
var _default = pink;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/purple.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
var _default = purple;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/colors/red.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
var _default = red;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/internal/svg-icons/ArrowDropDown.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _pure = _interopRequireDefault(__webpack_require__("./node_modules/recompose/pure.js"));

var _SvgIcon = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/SvgIcon/index.js"));

var _ref = _react.default.createElement("path", {
  d: "M7 10l5 5 5-5z"
});

/**
 * @ignore - internal component.
 */
var ArrowDropDown = function ArrowDropDown(props) {
  return _react.default.createElement(_SvgIcon.default, props, _ref);
};

ArrowDropDown = (0, _pure.default)(ArrowDropDown);
ArrowDropDown.muiName = 'SvgIcon';
var _default = ArrowDropDown;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/MuiThemeProvider.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _brcast = _interopRequireDefault(__webpack_require__("./node_modules/brcast/dist/brcast.es.js"));

var _themeListener = _interopRequireWildcard(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var _exactProp = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/exactProp.js"));

/**
 * This component takes a `theme` property.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
var MuiThemeProvider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MuiThemeProvider, _React$Component);

  // We are not using the React state in order to avoid unnecessary rerender.
  function MuiThemeProvider(props, context) {
    var _this;

    (0, _classCallCheck2.default)(this, MuiThemeProvider);
    _this = (0, _possibleConstructorReturn2.default)(this, (MuiThemeProvider.__proto__ || Object.getPrototypeOf(MuiThemeProvider)).call(this, props, context)); // Get the outer theme from the context, can be null

    _this.broadcast = (0, _brcast.default)();
    _this.unsubscribeId = null;
    _this.outerTheme = null;
    _this.outerTheme = _themeListener.default.initial(context); // Propagate the theme so it can be accessed by the children

    _this.broadcast.setState(_this.mergeOuterLocalTheme(_this.props.theme));

    return _this;
  }

  (0, _createClass2.default)(MuiThemeProvider, [{
    key: "getChildContext",
    value: function getChildContext() {
      var _ref;

      var _props = this.props,
          sheetsManager = _props.sheetsManager,
          disableStylesGeneration = _props.disableStylesGeneration;
      var muiThemeProviderOptions = this.context.muiThemeProviderOptions || {};

      if (sheetsManager !== undefined) {
        muiThemeProviderOptions.sheetsManager = sheetsManager;
      }

      if (disableStylesGeneration !== undefined) {
        muiThemeProviderOptions.disableStylesGeneration = disableStylesGeneration;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, _themeListener.CHANNEL, this.broadcast), (0, _defineProperty2.default)(_ref, "muiThemeProviderOptions", muiThemeProviderOptions), _ref;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      // Subscribe on the outer theme, if present
      this.unsubscribeId = _themeListener.default.subscribe(this.context, function (outerTheme) {
        _this2.outerTheme = outerTheme; // Forward the parent theme update to the children

        _this2.broadcast.setState(_this2.mergeOuterLocalTheme(_this2.props.theme));
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      // Propagate a local theme update
      if (this.props.theme !== prevProps.theme) {
        this.broadcast.setState(this.mergeOuterLocalTheme(this.props.theme));
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.unsubscribeId !== null) {
        _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
      }
    } // Simple merge between the outer theme and the local theme

  }, {
    key: "mergeOuterLocalTheme",
    value: function mergeOuterLocalTheme(localTheme) {
      // To support composition of theme.
      if (typeof localTheme === 'function') {
         true ? (0, _warning.default)(this.outerTheme, ['Material-UI: you are providing a theme function property ' + 'to the MuiThemeProvider component:', '<MuiThemeProvider theme={outerTheme => outerTheme} />', '', 'However, no outer theme is present.', 'Make sure a theme is already injected higher in the React tree ' + 'or provide a theme object.'].join('\n')) : void 0;
        return localTheme(this.outerTheme);
      }

      if (!this.outerTheme) {
        return localTheme;
      }

      return (0, _objectSpread2.default)({}, this.outerTheme, localTheme);
    }
  }, {
    key: "render",
    value: function render() {
      // TODO move the sheetsManager property to a different component.
      // warning(
      //   typeof window !== 'undefined' || this.props.sheetsManager,
      //   [
      //     'Material-UI: you need to provide a sheetsManager to the MuiThemeProvider ' +
      //       'when rendering on the server.',
      //     'If you do not, you might experience a memory leak',
      //   ].join('\n'),
      // );
      return this.props.children;
    }
  }]);
  return MuiThemeProvider;
}(_react.default.Component);

MuiThemeProvider.propTypes =  true ? {
  /**
   * You can wrap a node.
   */
  children: _propTypes.default.node.isRequired,

  /**
   * You can disable the generation of the styles with this option.
   * It can be useful when traversing the React tree outside of the HTML
   * rendering step on the server.
   * Let's say you are using react-apollo to extract all
   * the queries made by the interface server side.
   * You can significantly speed up the traversal with this property.
   */
  disableStylesGeneration: _propTypes.default.bool,

  /**
   * The sheetsManager is used to deduplicate style sheet injection in the page.
   * It's deduplicating using the (theme, styles) couple.
   * On the server, you should provide a new instance for each request.
   */
  sheetsManager: _propTypes.default.object,

  /**
   * A theme object.
   */
  theme: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]).isRequired
} : {};
MuiThemeProvider.propTypes =  true ? (0, _exactProp.default)(MuiThemeProvider.propTypes) : {};
MuiThemeProvider.childContextTypes = (0, _objectSpread2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
MuiThemeProvider.contextTypes = (0, _objectSpread2.default)({}, _themeListener.default.contextTypes, {
  muiThemeProviderOptions: _propTypes.default.object
});
var _default = MuiThemeProvider;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/colorManipulator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.convertHexToRGB = convertHexToRGB;
exports.decomposeColor = decomposeColor;
exports.recomposeColor = recomposeColor;
exports.getContrastRatio = getContrastRatio;
exports.getLuminance = getLuminance;
exports.emphasize = emphasize;
exports.fade = fade;
exports.darken = darken;
exports.lighten = lighten;

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

//  weak

/* eslint-disable no-use-before-define */

/**
 * Returns a number whose value is limited to the given range.
 *
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clamp(value) {
  var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
   true ? (0, _warning.default)(value >= min && value <= max, "Material-UI: the value provided ".concat(value, " is out of range [").concat(min, ", ").concat(max, "].")) : void 0;

  if (value < min) {
    return min;
  }

  if (value > max) {
    return max;
  }

  return value;
}
/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */


function convertHexToRGB(color) {
  color = color.substr(1);
  var re = new RegExp(".{1,".concat(color.length / 3, "}"), 'g');
  var colors = color.match(re);

  if (colors && colors[0].length === 1) {
    colors = colors.map(function (n) {
      return n + n;
    });
  }

  return colors ? "rgb(".concat(colors.map(function (n) {
    return parseInt(n, 16);
  }).join(', '), ")") : '';
}
/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */


function decomposeColor(color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color));
  }

  var marker = color.indexOf('(');
  var type = color.substring(0, marker);
  var values = color.substring(marker + 1, color.length - 1).split(',');
  values = values.map(function (value) {
    return parseFloat(value);
  });

  if (true) {
    if (['rgb', 'rgba', 'hsl', 'hsla'].indexOf(type) === -1) {
      throw new Error(["Material-UI: unsupported `".concat(color, "` color."), 'We support the following formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla().'].join('\n'));
    }
  }

  return {
    type: type,
    values: values
  };
}
/**
 * Converts a color object with type and values to a string.
 *
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */


function recomposeColor(color) {
  var type = color.type;
  var values = color.values;

  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map(function (n, i) {
      return i < 3 ? parseInt(n, 10) : n;
    });
  }

  if (type.indexOf('hsl') !== -1) {
    values[1] = "".concat(values[1], "%");
    values[2] = "".concat(values[2], "%");
  }

  return "".concat(color.type, "(").concat(values.join(', '), ")");
}
/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */


function getContrastRatio(foreground, background) {
  var lumA = getLuminance(foreground);
  var lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */


function getLuminance(color) {
  var decomposedColor = decomposeColor(color);

  if (decomposedColor.type.indexOf('rgb') !== -1) {
    var rgb = decomposedColor.values.map(function (val) {
      val /= 255; // normalized

      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    }); // Truncate at 3 digits

    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
  } // else if (decomposedColor.type.indexOf('hsl') !== -1)


  return decomposedColor.values[2] / 100;
}
/**
 * Darken or lighten a colour, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function emphasize(color) {
  var coefficient = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.15;
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
/**
 * Set the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} value - value to set the alpha channel to in the range 0 -1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function fade(color, value) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in fade(".concat(color, ", ").concat(value, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  value = clamp(value);

  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }

  color.values[3] = value;
  return recomposeColor(color);
}
/**
 * Darkens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function darken(color, coefficient) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in darken(".concat(color, ", ").concat(coefficient, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }

  return recomposeColor(color);
}
/**
 * Lightens a color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */


function lighten(color, coefficient) {
   true ? (0, _warning.default)(color, "Material-UI: missing color argument in lighten(".concat(color, ", ").concat(coefficient, ").")) : void 0;
  if (!color) return color;
  color = decomposeColor(color);
  coefficient = clamp(coefficient);

  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (var i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  }

  return recomposeColor(color);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createBreakpoints.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBreakpoints;
exports.keys = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
var keys = ['xs', 'sm', 'md', 'lg', 'xl']; // Keep in mind that @media is inclusive by the CSS specification.

exports.keys = keys;

function createBreakpoints(breakpoints) {
  var _breakpoints$values = breakpoints.values,
      values = _breakpoints$values === void 0 ? {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920
  } : _breakpoints$values,
      _breakpoints$unit = breakpoints.unit,
      unit = _breakpoints$unit === void 0 ? 'px' : _breakpoints$unit,
      _breakpoints$step = breakpoints.step,
      step = _breakpoints$step === void 0 ? 5 : _breakpoints$step,
      other = (0, _objectWithoutProperties2.default)(breakpoints, ["values", "unit", "step"]);

  function up(key) {
    var value = typeof values[key] === 'number' ? values[key] : key;
    return "@media (min-width:".concat(value).concat(unit, ")");
  }

  function down(key) {
    var endIndex = keys.indexOf(key) + 1;
    var upperbound = values[keys[endIndex]];

    if (endIndex === keys.length) {
      // xl down applies to all sizes
      return up('xs');
    }

    var value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : key;
    return "@media (max-width:".concat(value - step / 100).concat(unit, ")");
  }

  function between(start, end) {
    var endIndex = keys.indexOf(end) + 1;

    if (endIndex === keys.length) {
      return up(start);
    }

    return "@media (min-width:".concat(values[start]).concat(unit, ") and ") + "(max-width:".concat(values[keys[endIndex]] - step / 100).concat(unit, ")");
  }

  function only(key) {
    return between(key, key);
  }

  function width(key) {
    return values[key];
  }

  return (0, _objectSpread2.default)({
    keys: keys,
    values: values,
    up: up,
    down: down,
    between: between,
    only: only,
    width: width
  }, other);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createGenerateClassName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createGenerateClassName;

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

/* eslint-disable no-underscore-dangle */
// People might bundle this classname generator twice.
// We need to use a global.
global.__MUI_GENERATOR_COUNTER__ = 0;
var escapeRegex = /([[\].#*$><+~=|^:(),"'`\s])/g;

function safePrefix(classNamePrefix) {
  var prefix = String(classNamePrefix);
   true ? (0, _warning.default)(prefix.length < 100, "Material-UI: the class name prefix is too long: ".concat(prefix, ".")) : void 0; // Sanitize the string as will be used to prefix the generated class name.

  return prefix.replace(escapeRegex, '-');
} // Returns a function which generates unique class names based on counters.
// When new generator function is created, rule counter is reset.
// We need to reset the rule counter for SSR for each request.
//
// It's inspired by
// https://github.com/cssinjs/jss/blob/4e6a05dd3f7b6572fdd3ab216861d9e446c20331/src/utils/createGenerateClassName.js


function createGenerateClassName() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$dangerouslyU = options.dangerouslyUseGlobalCSS,
      dangerouslyUseGlobalCSS = _options$dangerouslyU === void 0 ? false : _options$dangerouslyU,
      _options$productionPr = options.productionPrefix,
      productionPrefix = _options$productionPr === void 0 ? 'jss' : _options$productionPr;
  var ruleCounter = 0; // - HMR can lead to many class name generators being instantiated,
  // so the warning is only triggered in production.
  // - We expect a class name generator to be instantiated per new request on the server,
  // so the warning is only triggered client side.

  if (false) {
    global.__MUI_GENERATOR_COUNTER__ += 1;

    if (global.__MUI_GENERATOR_COUNTER__ > 2) {
      // eslint-disable-next-line no-console
      console.error(['Material-UI: we have detected more than needed creation of the class name generator.', 'You should only use one class name generator on the client side.', 'If you do otherwise, you take the risk to have conflicting class names in production.'].join('\n'));
    }
  }

  return function (rule, styleSheet) {
    ruleCounter += 1;
     true ? (0, _warning.default)(ruleCounter < 1e10, ['Material-UI: you might have a memory leak.', 'The ruleCounter is not supposed to grow that much.'].join('')) : void 0; // Code branch the whole block at the expense of more code.

    if (dangerouslyUseGlobalCSS) {
      if (styleSheet && styleSheet.options.classNamePrefix) {
        var prefix = safePrefix(styleSheet.options.classNamePrefix);

        if (prefix.match(/^Mui/)) {
          return "".concat(prefix, "-").concat(rule.key);
        }

        if (true) {
          return "".concat(prefix, "-").concat(rule.key, "-").concat(ruleCounter);
        }
      }

      if (false) {
        return "".concat(productionPrefix).concat(ruleCounter);
      }

      return "".concat(rule.key, "-").concat(ruleCounter);
    }

    if (false) {
      return "".concat(productionPrefix).concat(ruleCounter);
    }

    if (styleSheet && styleSheet.options.classNamePrefix) {
      var _prefix = safePrefix(styleSheet.options.classNamePrefix);

      return "".concat(_prefix, "-").concat(rule.key, "-").concat(ruleCounter);
    }

    return "".concat(rule.key, "-").concat(ruleCounter);
  };
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createMixins.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createMixins;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

function createMixins(breakpoints, spacing, mixins) {
  var _toolbar;

  return (0, _objectSpread3.default)({
    gutters: function gutters() {
      var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return (0, _objectSpread3.default)({
        paddingLeft: spacing.unit * 2,
        paddingRight: spacing.unit * 2
      }, styles, (0, _defineProperty2.default)({}, breakpoints.up('sm'), (0, _objectSpread3.default)({
        paddingLeft: spacing.unit * 3,
        paddingRight: spacing.unit * 3
      }, styles[breakpoints.up('sm')])));
    },
    toolbar: (_toolbar = {
      minHeight: 56
    }, (0, _defineProperty2.default)(_toolbar, "".concat(breakpoints.up('xs'), " and (orientation: landscape)"), {
      minHeight: 48
    }), (0, _defineProperty2.default)(_toolbar, breakpoints.up('sm'), {
      minHeight: 64
    }), _toolbar)
  }, mixins);
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createMuiTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _createBreakpoints = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createBreakpoints.js"));

var _createMixins = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMixins.js"));

var _createPalette = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createPalette.js"));

var _createTypography = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createTypography.js"));

var _shadows = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/shadows.js"));

var _shape = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/shape.js"));

var _spacing = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/spacing.js"));

var _transitions = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/transitions.js"));

var _zIndex = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/zIndex.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
function createMuiTheme() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _options$breakpoints = options.breakpoints,
      breakpointsInput = _options$breakpoints === void 0 ? {} : _options$breakpoints,
      _options$mixins = options.mixins,
      mixinsInput = _options$mixins === void 0 ? {} : _options$mixins,
      _options$palette = options.palette,
      paletteInput = _options$palette === void 0 ? {} : _options$palette,
      shadowsInput = options.shadows,
      _options$typography = options.typography,
      typographyInput = _options$typography === void 0 ? {} : _options$typography,
      other = (0, _objectWithoutProperties2.default)(options, ["breakpoints", "mixins", "palette", "shadows", "typography"]);
  var palette = (0, _createPalette.default)(paletteInput);
  var breakpoints = (0, _createBreakpoints.default)(breakpointsInput);
  var muiTheme = (0, _objectSpread2.default)({
    breakpoints: breakpoints,
    direction: 'ltr',
    mixins: (0, _createMixins.default)(breakpoints, _spacing.default, mixinsInput),
    overrides: {},
    // Inject custom styles
    palette: palette,
    props: {},
    // Inject custom properties
    shadows: shadowsInput || _shadows.default,
    shape: _shape.default,
    typography: (0, _createTypography.default)(palette, typographyInput)
  }, (0, _deepmerge.default)({
    transitions: _transitions.default,
    spacing: _spacing.default,
    zIndex: _zIndex.default
  }, other));
   true ? (0, _warning.default)(muiTheme.shadows.length === 25, 'Material-UI: the shadows array provided to createMuiTheme should support 25 elevations.') : void 0;
  return muiTheme;
}

var _default = createMuiTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createPalette.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createPalette;
exports.dark = exports.light = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

var _indigo = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/indigo.js"));

var _pink = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/pink.js"));

var _grey = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/grey.js"));

var _red = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/red.js"));

var _common = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/colors/common.js"));

var _colorManipulator = __webpack_require__("./node_modules/@material-ui/core/styles/colorManipulator.js");

// < 1kb payload overhead when lodash/merge is > 3kb.
var light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.54)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)',
    // Text hints.
    hint: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: _common.default.white,
    default: _grey.default[50]
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.08)',
    hoverOpacity: 0.08,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.14)',
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)'
  }
};
exports.light = light;
var dark = {
  text: {
    primary: _common.default.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: _grey.default[800],
    default: '#303030'
  },
  action: {
    active: _common.default.white,
    hover: 'rgba(255, 255, 255, 0.1)',
    hoverOpacity: 0.1,
    selected: 'rgba(255, 255, 255, 0.2)',
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)'
  }
};
exports.dark = dark;

function addLightOrDark(intent, direction, shade, tonalOffset) {
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0, _colorManipulator.lighten)(intent.main, tonalOffset);
    } else if (direction === 'dark') {
      intent.dark = (0, _colorManipulator.darken)(intent.main, tonalOffset * 1.5);
    }
  }
}

function createPalette(palette) {
  var _palette$primary = palette.primary,
      primary = _palette$primary === void 0 ? {
    light: _indigo.default[300],
    main: _indigo.default[500],
    dark: _indigo.default[700]
  } : _palette$primary,
      _palette$secondary = palette.secondary,
      secondary = _palette$secondary === void 0 ? {
    light: _pink.default.A200,
    main: _pink.default.A400,
    dark: _pink.default.A700
  } : _palette$secondary,
      _palette$error = palette.error,
      error = _palette$error === void 0 ? {
    light: _red.default[300],
    main: _red.default[500],
    dark: _red.default[700]
  } : _palette$error,
      _palette$type = palette.type,
      type = _palette$type === void 0 ? 'light' : _palette$type,
      _palette$contrastThre = palette.contrastThreshold,
      contrastThreshold = _palette$contrastThre === void 0 ? 3 : _palette$contrastThre,
      _palette$tonalOffset = palette.tonalOffset,
      tonalOffset = _palette$tonalOffset === void 0 ? 0.2 : _palette$tonalOffset,
      other = (0, _objectWithoutProperties2.default)(palette, ["primary", "secondary", "error", "type", "contrastThreshold", "tonalOffset"]);

  function getContrastText(background) {
    // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
    var contrastText = (0, _colorManipulator.getContrastRatio)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;

    if (true) {
      var contrast = (0, _colorManipulator.getContrastRatio)(background, contrastText);
       true ? (0, _warning.default)(contrast >= 3, ["Material-UI: the contrast ratio of ".concat(contrast, ":1 for ").concat(contrastText, " on ").concat(background), 'falls below the WACG recommended absolute minimum contrast ratio of 3:1.', 'https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast'].join('\n')) : void 0;
    }

    return contrastText;
  }

  function augmentColor(color, mainShade, lightShade, darkShade) {
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }

    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);

    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
  }

  augmentColor(primary, 500, 300, 700);
  augmentColor(secondary, 'A400', 'A200', 'A700');
  augmentColor(error, 500, 300, 700);
  var types = {
    dark: dark,
    light: light
  };
   true ? (0, _warning.default)(types[type], "Material-UI: the palette type `".concat(type, "` is not supported.")) : void 0;
  var paletteOutput = (0, _deepmerge.default)((0, _objectSpread2.default)({
    // A collection of common colors.
    common: _common.default,
    // The palette type, can be light or dark.
    type: type,
    // The colors used to represent primary interface elements for a user.
    primary: primary,
    // The colors used to represent secondary interface elements for a user.
    secondary: secondary,
    // The colors used to represent interface elements that the user should be made aware of.
    error: error,
    // The grey colors.
    grey: _grey.default,
    // Used by `getContrastText()` to maximize the contrast between the background and
    // the text.
    contrastThreshold: contrastThreshold,
    // Take a background color and return the color of the text to maximize the contrast.
    getContrastText: getContrastText,
    // Generate a rich color object.
    augmentColor: augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: tonalOffset
  }, types[type]), other, {
    clone: false // No need to clone deep

  });
  return paletteOutput;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createStyles;

function createStyles(s) {
  return s;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/createTypography.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createTypography;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}

function createTypography(palette, typography) {
  var _ref = typeof typography === 'function' ? typography(palette) : typography,
      _ref$fontFamily = _ref.fontFamily,
      fontFamily = _ref$fontFamily === void 0 ? '"Roboto", "Helvetica", "Arial", sans-serif' : _ref$fontFamily,
      _ref$fontSize = _ref.fontSize,
      fontSize = _ref$fontSize === void 0 ? 14 : _ref$fontSize,
      _ref$fontWeightLight = _ref.fontWeightLight,
      fontWeightLight = _ref$fontWeightLight === void 0 ? 300 : _ref$fontWeightLight,
      _ref$fontWeightRegula = _ref.fontWeightRegular,
      fontWeightRegular = _ref$fontWeightRegula === void 0 ? 400 : _ref$fontWeightRegula,
      _ref$fontWeightMedium = _ref.fontWeightMedium,
      fontWeightMedium = _ref$fontWeightMedium === void 0 ? 500 : _ref$fontWeightMedium,
      _ref$htmlFontSize = _ref.htmlFontSize,
      htmlFontSize = _ref$htmlFontSize === void 0 ? 16 : _ref$htmlFontSize,
      allVariants = _ref.allVariants,
      other = (0, _objectWithoutProperties2.default)(_ref, ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "htmlFontSize", "allVariants"]);

  var coef = fontSize / 14;

  function pxToRem(value) {
    return "".concat(value / htmlFontSize * coef, "rem");
  }

  return (0, _deepmerge.default)({
    pxToRem: pxToRem,
    round: round,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeightLight: fontWeightLight,
    fontWeightRegular: fontWeightRegular,
    fontWeightMedium: fontWeightMedium,
    display4: (0, _objectSpread2.default)({
      fontSize: pxToRem(112),
      fontWeight: fontWeightLight,
      fontFamily: fontFamily,
      letterSpacing: '-.04em',
      lineHeight: "".concat(round(128 / 112), "em"),
      marginLeft: '-.04em',
      color: palette.text.secondary
    }, allVariants),
    display3: (0, _objectSpread2.default)({
      fontSize: pxToRem(56),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      letterSpacing: '-.02em',
      lineHeight: "".concat(round(73 / 56), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    }, allVariants),
    display2: (0, _objectSpread2.default)({
      fontSize: pxToRem(45),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(48 / 45), "em"),
      marginLeft: '-.02em',
      color: palette.text.secondary
    }, allVariants),
    display1: (0, _objectSpread2.default)({
      fontSize: pxToRem(34),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(41 / 34), "em"),
      color: palette.text.secondary
    }, allVariants),
    headline: (0, _objectSpread2.default)({
      fontSize: pxToRem(24),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(32.5 / 24), "em"),
      color: palette.text.primary
    }, allVariants),
    title: (0, _objectSpread2.default)({
      fontSize: pxToRem(21),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24.5 / 21), "em"),
      color: palette.text.primary
    }, allVariants),
    subheading: (0, _objectSpread2.default)({
      fontSize: pxToRem(16),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 16), "em"),
      color: palette.text.primary
    }, allVariants),
    body2: (0, _objectSpread2.default)({
      fontSize: pxToRem(14),
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(24 / 14), "em"),
      color: palette.text.primary
    }, allVariants),
    body1: (0, _objectSpread2.default)({
      fontSize: pxToRem(14),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(20.5 / 14), "em"),
      color: palette.text.primary
    }, allVariants),
    caption: (0, _objectSpread2.default)({
      fontSize: pxToRem(12),
      fontWeight: fontWeightRegular,
      fontFamily: fontFamily,
      lineHeight: "".concat(round(16.5 / 12), "em"),
      color: palette.text.secondary
    }, allVariants),
    button: (0, _objectSpread2.default)({
      fontSize: pxToRem(14),
      textTransform: 'uppercase',
      fontWeight: fontWeightMedium,
      fontFamily: fontFamily,
      color: palette.text.primary
    }, allVariants)
  }, other, {
    clone: false // No need to clone deep

  });
}

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/getStylesCreator.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/typeof.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _deepmerge = _interopRequireDefault(__webpack_require__("./node_modules/deepmerge/dist/es.js"));

// < 1kb payload overhead when lodash/merge is > 3kb.
// Support for the jss-expand plugin.
function arrayMerge(destination, source) {
  return source;
}

function getStylesCreator(stylesOrCreator) {
  var themingEnabled = typeof stylesOrCreator === 'function';
   true ? (0, _warning.default)((0, _typeof2.default)(stylesOrCreator) === 'object' || themingEnabled, ['Material-UI: the first argument provided to withStyles() is invalid.', 'You need to provide a function generating the styles or a styles object.'].join('\n')) : void 0;

  function create(theme, name) {
    var styles = themingEnabled ? stylesOrCreator(theme) : stylesOrCreator;

    if (!name || !theme.overrides || !theme.overrides[name]) {
      return styles;
    }

    var overrides = theme.overrides[name];
    var stylesWithOverrides = (0, _objectSpread2.default)({}, styles);
    Object.keys(overrides).forEach(function (key) {
       true ? (0, _warning.default)(stylesWithOverrides[key], ['Material-UI: you are trying to override a style that does not exist.', "Fix the `".concat(key, "` key of `theme.overrides.").concat(name, "`.")].join('\n')) : void 0;
      stylesWithOverrides[key] = (0, _deepmerge.default)(stylesWithOverrides[key], overrides[key], {
        arrayMerge: arrayMerge
      });
    });
    return stylesWithOverrides;
  }

  return {
    create: create,
    options: {},
    themingEnabled: themingEnabled
  };
}

var _default = getStylesCreator;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/getThemeProps.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getThemeProps(params) {
  var theme = params.theme,
      name = params.name;

  if (!name || !theme.props || !theme.props[name]) {
    return {};
  }

  return theme.props[name];
}

var _default = getThemeProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createGenerateClassName", {
  enumerable: true,
  get: function get() {
    return _createGenerateClassName.default;
  }
});
Object.defineProperty(exports, "createMuiTheme", {
  enumerable: true,
  get: function get() {
    return _createMuiTheme.default;
  }
});
Object.defineProperty(exports, "jssPreset", {
  enumerable: true,
  get: function get() {
    return _jssPreset.default;
  }
});
Object.defineProperty(exports, "MuiThemeProvider", {
  enumerable: true,
  get: function get() {
    return _MuiThemeProvider.default;
  }
});
Object.defineProperty(exports, "createStyles", {
  enumerable: true,
  get: function get() {
    return _createStyles.default;
  }
});
Object.defineProperty(exports, "withStyles", {
  enumerable: true,
  get: function get() {
    return _withStyles.default;
  }
});
Object.defineProperty(exports, "withTheme", {
  enumerable: true,
  get: function get() {
    return _withTheme.default;
  }
});

var _createGenerateClassName = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/jssPreset.js"));

var _MuiThemeProvider = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/MuiThemeProvider.js"));

var _createStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createStyles.js"));

var _withStyles = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withStyles.js"));

var _withTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/withTheme.js"));

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/jssPreset.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _jssGlobal = _interopRequireDefault(__webpack_require__("./node_modules/jss-global/lib/index.js"));

var _jssNested = _interopRequireDefault(__webpack_require__("./node_modules/jss-nested/lib/index.js"));

var _jssCamelCase = _interopRequireDefault(__webpack_require__("./node_modules/jss-camel-case/lib/index.js"));

var _jssDefaultUnit = _interopRequireDefault(__webpack_require__("./node_modules/jss-default-unit/lib/index.js"));

var _jssVendorPrefixer = _interopRequireDefault(__webpack_require__("./node_modules/jss-vendor-prefixer/lib/index.js"));

var _jssPropsSort = _interopRequireDefault(__webpack_require__("./node_modules/jss-props-sort/lib/index.js"));

// Subset of jss-preset-default with only the plugins the Material-UI
// components are using.
function jssPreset() {
  return {
    plugins: [(0, _jssGlobal.default)(), (0, _jssNested.default)(), (0, _jssCamelCase.default)(), (0, _jssDefaultUnit.default)(), (0, _jssVendorPrefixer.default)(), (0, _jssPropsSort.default)()]
  };
}

var _default = jssPreset;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/mergeClasses.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/getDisplayName.js"));

function mergeClasses() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseClasses = options.baseClasses,
      newClasses = options.newClasses,
      Component = options.Component,
      _options$noBase = options.noBase,
      noBase = _options$noBase === void 0 ? false : _options$noBase;

  if (!newClasses) {
    return baseClasses;
  }

  return (0, _objectSpread2.default)({}, baseClasses, Object.keys(newClasses).reduce(function (accumulator, key) {
     true ? (0, _warning.default)(baseClasses[key] || noBase, ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not implemented in ".concat((0, _getDisplayName.default)(Component), "."), "You can only override one of the following: ".concat(Object.keys(baseClasses).join(','))].join('\n')) : void 0;
     true ? (0, _warning.default)(!newClasses[key] || typeof newClasses[key] === 'string', ["Material-UI: the key `".concat(key, "` ") + "provided to the classes property is not valid for ".concat((0, _getDisplayName.default)(Component), "."), "You need to provide a non empty string instead of: ".concat(newClasses[key], ".")].join('\n')) : void 0;

    if (newClasses[key]) {
      accumulator[key] = "".concat(baseClasses[key], " ").concat(newClasses[key]);
    }

    return accumulator;
  }, {}));
}

var _default = mergeClasses;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/shadows.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shadowKeyUmbraOpacity = 0.2;
var shadowKeyPenumbraOpacity = 0.14;
var shadowAmbientShadowOpacity = 0.12;

function createShadow() {
  return ["".concat(arguments.length <= 0 ? undefined : arguments[0], "px ").concat(arguments.length <= 1 ? undefined : arguments[1], "px ").concat(arguments.length <= 2 ? undefined : arguments[2], "px ").concat(arguments.length <= 3 ? undefined : arguments[3], "px rgba(0, 0, 0, ").concat(shadowKeyUmbraOpacity, ")"), "".concat(arguments.length <= 4 ? undefined : arguments[4], "px ").concat(arguments.length <= 5 ? undefined : arguments[5], "px ").concat(arguments.length <= 6 ? undefined : arguments[6], "px ").concat(arguments.length <= 7 ? undefined : arguments[7], "px rgba(0, 0, 0, ").concat(shadowKeyPenumbraOpacity, ")"), "".concat(arguments.length <= 8 ? undefined : arguments[8], "px ").concat(arguments.length <= 9 ? undefined : arguments[9], "px ").concat(arguments.length <= 10 ? undefined : arguments[10], "px ").concat(arguments.length <= 11 ? undefined : arguments[11], "px rgba(0, 0, 0, ").concat(shadowAmbientShadowOpacity, ")")].join(',');
}

var shadows = ['none', createShadow(0, 1, 3, 0, 0, 1, 1, 0, 0, 2, 1, -1), createShadow(0, 1, 5, 0, 0, 2, 2, 0, 0, 3, 1, -2), createShadow(0, 1, 8, 0, 0, 3, 4, 0, 0, 3, 3, -2), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
var _default = shadows;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/shape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var shape = {
  borderRadius: 4
};
var _default = shape;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/spacing.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var spacing = {
  // All components align to an 8dp square baseline grid for mobile, tablet, and desktop.
  // https://material.io/design/layout/understanding-layout.html#pixel-density
  unit: 8
};
var _default = spacing;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/themeListener.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.CHANNEL = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

// Same value used by react-jss
var CHANNEL = '__THEMING__';
exports.CHANNEL = CHANNEL;
var themeListener = {
  contextTypes: (0, _defineProperty2.default)({}, CHANNEL, _propTypes.default.object),
  initial: function initial(context) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].getState();
  },
  subscribe: function subscribe(context, cb) {
    if (!context[CHANNEL]) {
      return null;
    }

    return context[CHANNEL].subscribe(cb);
  },
  unsubscribe: function unsubscribe(context, subscriptionId) {
    if (context[CHANNEL]) {
      context[CHANNEL].unsubscribe(subscriptionId);
    }
  }
};
var _default = themeListener;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/transitions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.isNumber = exports.isString = exports.formatMs = exports.duration = exports.easing = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

/* eslint-disable no-param-reassign */

/* eslint-disable no-restricted-globals */
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
var easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
}; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing

exports.easing = easing;
var duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
exports.duration = duration;

var formatMs = function formatMs(milliseconds) {
  return "".concat(Math.round(milliseconds), "ms");
};

exports.formatMs = formatMs;

var isString = function isString(value) {
  return typeof value === 'string';
};

exports.isString = isString;

var isNumber = function isNumber(value) {
  return !isNaN(parseFloat(value));
};
/**
 * @param {string|Array} props
 * @param {object} param
 * @param {string} param.prop
 * @param {number} param.duration
 * @param {string} param.easing
 * @param {number} param.delay
 */


exports.isNumber = isNumber;
var _default = {
  easing: easing,
  duration: duration,
  create: function create() {
    var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return function () {
      var _options$duration = options.duration,
          durationOption = _options$duration === void 0 ? duration.standard : _options$duration,
          _options$easing = options.easing,
          easingOption = _options$easing === void 0 ? easing.easeInOut : _options$easing,
          _options$delay = options.delay,
          delay = _options$delay === void 0 ? 0 : _options$delay,
          other = (0, _objectWithoutProperties2.default)(options, ["duration", "easing", "delay"]);
       true ? (0, _warning.default)(isString(props) || Array.isArray(props), 'Material-UI: argument "props" must be a string or Array.') : void 0;
       true ? (0, _warning.default)(isNumber(durationOption) || isString(durationOption), "Material-UI: argument \"duration\" must be a number or a string but found ".concat(durationOption, ".")) : void 0;
       true ? (0, _warning.default)(isString(easingOption), 'Material-UI: argument "easing" must be a string.') : void 0;
       true ? (0, _warning.default)(isNumber(delay) || isString(delay), 'Material-UI: argument "delay" must be a number or a string.') : void 0;
       true ? (0, _warning.default)(Object.keys(other).length === 0, "Material-UI: unrecognized argument(s) [".concat(Object.keys(other).join(','), "]")) : void 0;
      return (Array.isArray(props) ? props : [props]).map(function (animatedProp) {
        return "".concat(animatedProp, " ").concat(typeof durationOption === 'string' ? durationOption : formatMs(durationOption), " ").concat(easingOption, " ").concat(typeof delay === 'string' ? delay : formatMs(delay));
      }).join(',');
    }();
  },
  getAutoHeightDuration: function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    var constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * Math.pow(constant, 0.25) + constant / 5) * 10);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.sheetsManager = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _objectSpread2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _propTypes = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js"));

var _getDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/getDisplayName.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/wrapDisplayName.js"));

var _contextTypes = _interopRequireDefault(__webpack_require__("./node_modules/react-jss/lib/contextTypes.js"));

var _jss = __webpack_require__("./node_modules/jss/lib/index.js");

var ns = _interopRequireWildcard(__webpack_require__("./node_modules/react-jss/lib/ns.js"));

var _jssPreset = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/jssPreset.js"));

var _mergeClasses = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/mergeClasses.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var _createGenerateClassName = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createGenerateClassName.js"));

var _getStylesCreator = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/getStylesCreator.js"));

var _getThemeProps = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/getThemeProps.js"));

// Default JSS instance.
var jss = (0, _jss.create)((0, _jssPreset.default)()); // Use a singleton or the provided one by the context.

var generateClassName = (0, _createGenerateClassName.default)(); // Global index counter to preserve source order.
// We create the style sheet during at the creation of the component,
// children are handled after the parents, so the order of style elements would be parent->child.
// It is a problem though when a parent passes a className
// which needs to override any childs styles.
// StyleSheet of the child has a higher specificity, because of the source order.
// So our solution is to render sheets them in the reverse order child->sheet, so
// that parent has a higher specificity.

var indexCounter = -10e10; // Exported for test purposes

var sheetsManager = new Map(); // We use the same empty object to ref count the styles that don't need a theme object.

exports.sheetsManager = sheetsManager;
var noopTheme = {}; // In order to have self-supporting components, we rely on default theme when not provided.

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Link a style sheet with a component.
// It does not modify the component passed to it;
// instead, it returns a new component, with a `classes` property.


var withStyles = function withStyles(stylesOrCreator) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return function (Component) {
    var _options$withTheme = options.withTheme,
        withTheme = _options$withTheme === void 0 ? false : _options$withTheme,
        _options$flip = options.flip,
        flip = _options$flip === void 0 ? null : _options$flip,
        name = options.name,
        styleSheetOptions = (0, _objectWithoutProperties2.default)(options, ["withTheme", "flip", "name"]);
    var stylesCreator = (0, _getStylesCreator.default)(stylesOrCreator);
    var listenToTheme = stylesCreator.themingEnabled || withTheme || typeof name === 'string';
    indexCounter += 1;
    stylesCreator.options.index = indexCounter;
     true ? (0, _warning.default)(indexCounter < 0, ['Material-UI: you might have a memory leak.', 'The indexCounter is not supposed to grow that much.'].join(' ')) : void 0;

    var WithStyles =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithStyles, _React$Component);

      function WithStyles(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithStyles);
        _this = (0, _possibleConstructorReturn2.default)(this, (WithStyles.__proto__ || Object.getPrototypeOf(WithStyles)).call(this, props, context));
        _this.disableStylesGeneration = false;
        _this.jss = null;
        _this.sheetOptions = null;
        _this.sheetsManager = sheetsManager;
        _this.stylesCreatorSaved = null;
        _this.theme = null;
        _this.unsubscribeId = null;
        _this.state = {};
        _this.jss = _this.context[ns.jss] || jss;
        var muiThemeProviderOptions = _this.context.muiThemeProviderOptions;

        if (muiThemeProviderOptions) {
          if (muiThemeProviderOptions.sheetsManager) {
            _this.sheetsManager = muiThemeProviderOptions.sheetsManager;
          }

          _this.disableStylesGeneration = muiThemeProviderOptions.disableStylesGeneration;
        } // Attach the stylesCreator to the instance of the component as in the context
        // of react-hot-loader the hooks can be executed in a different closure context:
        // https://github.com/gaearon/react-hot-loader/blob/master/src/patch.dev.js#L107


        _this.stylesCreatorSaved = stylesCreator;
        _this.sheetOptions = (0, _objectSpread2.default)({
          generateClassName: generateClassName
        }, _this.context[ns.sheetOptions]); // We use || as the function call is lazy evaluated.

        _this.theme = listenToTheme ? _themeListener.default.initial(context) || getDefaultTheme() : noopTheme;

        _this.attach(_this.theme);

        _this.cacheClasses = {
          // Cache for the finalized classes value.
          value: null,
          // Cache for the last used classes prop pointer.
          lastProp: null,
          // Cache for the last used rendered classes pointer.
          lastJSS: {}
        };
        return _this;
      }

      (0, _createClass2.default)(WithStyles, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          if (!listenToTheme) {
            return;
          }

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            var oldTheme = _this2.theme;
            _this2.theme = theme;

            _this2.attach(_this2.theme); // Rerender the component so the underlying component gets the theme update.
            // By theme update we mean receiving and applying the new class names.


            _this2.setState({}, function () {
              _this2.detach(oldTheme);
            });
          });
        }
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate() {
          // react-hot-loader specific logic
          if (this.stylesCreatorSaved === stylesCreator || "development" === 'production') {
            return;
          }

          this.detach(this.theme);
          this.stylesCreatorSaved = stylesCreator;
          this.attach(this.theme);
          this.forceUpdate();
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          this.detach(this.theme);

          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "getClasses",
        value: function getClasses() {
          // Tracks if either the rendered classes or classes prop has changed,
          // requiring the generation of a new finalized classes object.
          var generate = false;

          if (!this.disableStylesGeneration) {
            var sheetManager = this.sheetsManager.get(this.stylesCreatorSaved);
            var sheetsManagerTheme = sheetManager.get(this.theme);

            if (sheetsManagerTheme.sheet.classes !== this.cacheClasses.lastJSS) {
              this.cacheClasses.lastJSS = sheetsManagerTheme.sheet.classes;
              generate = true;
            }
          }

          if (this.props.classes !== this.cacheClasses.lastProp) {
            this.cacheClasses.lastProp = this.props.classes;
            generate = true;
          }

          if (generate) {
            this.cacheClasses.value = (0, _mergeClasses.default)({
              baseClasses: this.cacheClasses.lastJSS,
              newClasses: this.props.classes,
              Component: Component,
              noBase: this.disableStylesGeneration
            });
          }

          return this.cacheClasses.value;
        }
      }, {
        key: "attach",
        value: function attach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);

          if (!sheetManager) {
            sheetManager = new Map();
            this.sheetsManager.set(stylesCreatorSaved, sheetManager);
          }

          var sheetManagerTheme = sheetManager.get(theme);

          if (!sheetManagerTheme) {
            sheetManagerTheme = {
              refs: 0,
              sheet: null
            };
            sheetManager.set(theme, sheetManagerTheme);
          }

          if (sheetManagerTheme.refs === 0) {
            var styles = stylesCreatorSaved.create(theme, name);
            var meta = name;

            if ("development" !== 'production' && !meta) {
              meta = (0, _getDisplayName.default)(Component);
               true ? (0, _warning.default)(typeof meta === 'string', ['Material-UI: the component displayName is invalid. It needs to be a string.', "Please fix the following component: ".concat(Component, ".")].join('\n')) : void 0;
            }

            var sheet = this.jss.createStyleSheet(styles, (0, _objectSpread2.default)({
              meta: meta,
              classNamePrefix: meta,
              flip: typeof flip === 'boolean' ? flip : theme.direction === 'rtl',
              link: false
            }, this.sheetOptions, stylesCreatorSaved.options, {
              name: name
            }, styleSheetOptions));
            sheetManagerTheme.sheet = sheet;
            sheet.attach();
            var sheetsRegistry = this.context[ns.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.add(sheet);
            }
          }

          sheetManagerTheme.refs += 1;
        }
      }, {
        key: "detach",
        value: function detach(theme) {
          if (this.disableStylesGeneration) {
            return;
          }

          var stylesCreatorSaved = this.stylesCreatorSaved;
          var sheetManager = this.sheetsManager.get(stylesCreatorSaved);
          var sheetManagerTheme = sheetManager.get(theme);
          sheetManagerTheme.refs -= 1;

          if (sheetManagerTheme.refs === 0) {
            sheetManager.delete(theme);
            this.jss.removeStyleSheet(sheetManagerTheme.sheet);
            var sheetsRegistry = this.context[ns.sheetsRegistry];

            if (sheetsRegistry) {
              sheetsRegistry.remove(sheetManagerTheme.sheet);
            }
          }
        }
      }, {
        key: "render",
        value: function render() {
          var _props = this.props,
              classes = _props.classes,
              innerRef = _props.innerRef,
              other = (0, _objectWithoutProperties2.default)(_props, ["classes", "innerRef"]);
          var more = (0, _getThemeProps.default)({
            theme: this.theme,
            name: name
          }); // Provide the theme to the wrapped component.
          // So we don't have to use the `withTheme()` Higher-order Component.

          if (withTheme) {
            more.theme = this.theme;
          }

          return _react.default.createElement(Component, (0, _extends2.default)({}, more, {
            classes: this.getClasses(),
            ref: innerRef
          }, other));
        }
      }]);
      return WithStyles;
    }(_react.default.Component);

    WithStyles.propTypes =  true ? {
      /**
       * Override or extend the styles applied to the component.
       */
      classes: _propTypes.default.object,

      /**
       * Use that property to pass a ref callback to the decorated component.
       */
      innerRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object])
    } : {};
    WithStyles.contextTypes = (0, _objectSpread2.default)({
      muiThemeProviderOptions: _propTypes.default.object
    }, _contextTypes.default, listenToTheme ? _themeListener.default.contextTypes : {});

    if (true) {
      WithStyles.displayName = (0, _wrapDisplayName.default)(Component, 'WithStyles');
    }

    (0, _hoistNonReactStatics.default)(WithStyles, Component);

    if (true) {
      // Exposed for test purposes.
      WithStyles.Naked = Component;
      WithStyles.options = options;
    }

    return WithStyles;
  };
};

var _default = withStyles;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/withTheme.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));

var _createClass2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));

var _inherits2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _hoistNonReactStatics = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/hoist-non-react-statics/index.js"));

var _wrapDisplayName = _interopRequireDefault(__webpack_require__("./node_modules/recompose/wrapDisplayName.js"));

var _createMuiTheme = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/createMuiTheme.js"));

var _themeListener = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/styles/themeListener.js"));

var defaultTheme;

function getDefaultTheme() {
  if (defaultTheme) {
    return defaultTheme;
  }

  defaultTheme = (0, _createMuiTheme.default)();
  return defaultTheme;
} // Provide the theme object as a property to the input component.


var withTheme = function withTheme() {
  return function (Component) {
    var WithTheme =
    /*#__PURE__*/
    function (_React$Component) {
      (0, _inherits2.default)(WithTheme, _React$Component);

      function WithTheme(props, context) {
        var _this;

        (0, _classCallCheck2.default)(this, WithTheme);
        _this = (0, _possibleConstructorReturn2.default)(this, (WithTheme.__proto__ || Object.getPrototypeOf(WithTheme)).call(this, props, context));
        _this.unsubscribeId = null;
        _this.state = {};
        _this.state = {
          // We use || as the function call is lazy evaluated.
          theme: _themeListener.default.initial(context) || getDefaultTheme()
        };
        return _this;
      }

      (0, _createClass2.default)(WithTheme, [{
        key: "componentDidMount",
        value: function componentDidMount() {
          var _this2 = this;

          this.unsubscribeId = _themeListener.default.subscribe(this.context, function (theme) {
            _this2.setState({
              theme: theme
            });
          });
        }
      }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
          if (this.unsubscribeId !== null) {
            _themeListener.default.unsubscribe(this.context, this.unsubscribeId);
          }
        }
      }, {
        key: "render",
        value: function render() {
          return _react.default.createElement(Component, (0, _extends2.default)({
            theme: this.state.theme
          }, this.props));
        }
      }]);
      return WithTheme;
    }(_react.default.Component);

    WithTheme.contextTypes = _themeListener.default.contextTypes;

    if (true) {
      WithTheme.displayName = (0, _wrapDisplayName.default)(Component, 'WithTheme');
    }

    (0, _hoistNonReactStatics.default)(WithTheme, Component);

    if (true) {
      // Exposed for test purposes.
      WithTheme.Naked = Component;
    }

    return WithTheme;
  };
};

var _default = withTheme;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/styles/zIndex.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
var zIndex = {
  mobileStepper: 1000,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
var _default = zIndex;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/transitions/utils.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTransitionProps = getTransitionProps;
exports.reflow = void 0;

var reflow = function reflow(node) {
  return node.scrollTop;
};

exports.reflow = reflow;

function getTransitionProps(props, options) {
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style;
  return {
    duration: style.transitionDuration || typeof timeout === 'number' ? timeout : timeout[options.mode],
    delay: style.transitionDelay
  };
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/exactProp.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.specialProperty = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js"));

var _objectSpread3 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));

// This module is based on https://github.com/airbnb/prop-types-exact repository.
// However, in order to reduce the number of dependencies and to remove some extra safe checks
// the module was forked.
// Only exported for test purposes.
var specialProperty = "exact-prop: \u200B";
exports.specialProperty = specialProperty;

function exactProp(propTypes) {
  /* istanbul ignore if */
  if (false) {
    return propTypes;
  }

  return (0, _objectSpread3.default)({}, propTypes, (0, _defineProperty2.default)({}, specialProperty, function (props) {
    var unsupportedProps = Object.keys(props).filter(function (prop) {
      return !propTypes.hasOwnProperty(prop);
    });

    if (unsupportedProps.length > 0) {
      return new Error("The following properties are not supported: ".concat(unsupportedProps.map(function (prop) {
        return "`".concat(prop, "`");
      }).join(', '), ". Please remove them."));
    }

    return null;
  }));
}

var _default = exactProp;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/helpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.capitalize = capitalize;
exports.contains = contains;
exports.findIndex = findIndex;
exports.find = find;
exports.createChainedFunction = createChainedFunction;

var _typeof2 = _interopRequireDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/typeof.js"));

var _warning = _interopRequireDefault(__webpack_require__("./node_modules/warning/warning.js"));

//  weak
function capitalize(string) {
  if ("development" !== 'production' && typeof string !== 'string') {
    throw new Error('Material-UI: capitalize(string) expects a string argument.');
  }

  return string.charAt(0).toUpperCase() + string.slice(1);
}

function contains(obj, pred) {
  return Object.keys(pred).every(function (key) {
    return obj.hasOwnProperty(key) && obj[key] === pred[key];
  });
}

function findIndex(arr, pred) {
  var predType = (0, _typeof2.default)(pred);

  for (var i = 0; i < arr.length; i += 1) {
    if (predType === 'function' && !!pred(arr[i], i, arr) === true) {
      return i;
    }

    if (predType === 'object' && contains(arr[i], pred)) {
      return i;
    }

    if (['string', 'number', 'boolean'].indexOf(predType) !== -1) {
      return arr.indexOf(pred);
    }
  }

  return -1;
}

function find(arr, pred) {
  var index = findIndex(arr, pred);
  return index > -1 ? arr[index] : undefined;
}
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */


function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.reduce(function (acc, func) {
    if (func == null) {
      return acc;
    }

     true ? (0, _warning.default)(typeof func === 'function', 'Material-UI: invalid Argument Type, must only provide functions, undefined, or null.') : void 0;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      acc.apply(this, args);
      func.apply(this, args);
    };
  }, function () {});
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/ownerDocument.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

var _default = ownerDocument;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/ownerWindow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__("./node_modules/@material-ui/core/utils/ownerDocument.js"));

function ownerWindow(node) {
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : window;
  var doc = (0, _ownerDocument.default)(node);
  return doc.defaultView || doc.parentView || fallback;
}

var _default = ownerWindow;
exports.default = _default;

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/reactHelpers.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cloneElementWithClassName = cloneElementWithClassName;
exports.cloneChildrenWithClassName = cloneChildrenWithClassName;
exports.isMuiElement = isMuiElement;
exports.isMuiComponent = isMuiComponent;

var _react = _interopRequireDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));

var _classnames = _interopRequireDefault(__webpack_require__("./node_modules/classnames/index.js"));

/* eslint-disable import/prefer-default-export */
function cloneElementWithClassName(child, className) {
  return _react.default.cloneElement(child, {
    className: (0, _classnames.default)(child.props.className, className)
  });
}

function cloneChildrenWithClassName(children, className) {
  return _react.default.Children.map(children, function (child) {
    return _react.default.isValidElement(child) && cloneElementWithClassName(child, className);
  });
}

function isMuiElement(element, muiNames) {
  return _react.default.isValidElement(element) && muiNames.indexOf(element.type.muiName) !== -1;
}

function isMuiComponent(element, muiNames) {
  return muiNames.indexOf(element.muiName) !== -1;
}

/***/ }),

/***/ "./node_modules/@material-ui/core/utils/requirePropFactory.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

//  weak
function requirePropFactory(componentNameInError) {
  /* istanbul ignore if */
  if (false) {
    return function () {
      return null;
    };
  }

  var requireProp = function requireProp(requiredProp) {
    return function (props, propName, componentName, location, propFullName) {
      var propFullNameSafe = propFullName || propName;

      if (typeof props[propName] !== 'undefined' && !props[requiredProp]) {
        return new Error("The property `".concat(propFullNameSafe, "` of ") + "`".concat(componentNameInError, "` must be used on `").concat(requiredProp, "`."));
      }

      return null;
    };
  };

  return requireProp;
}

var _default = requirePropFactory;
exports.default = _default;

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/create.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/create.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/object/set-prototype-of.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/object/set-prototype-of.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/index.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/core-js/symbol/iterator.js":
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__("./node_modules/core-js/library/fn/symbol/iterator.js"), __esModule: true };

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/classCallCheck.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/inherits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__("./node_modules/babel-runtime/core-js/object/set-prototype-of.js");

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__("./node_modules/babel-runtime/core-js/object/create.js");

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__("./node_modules/babel-runtime/helpers/typeof.js");

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),

/***/ "./node_modules/babel-runtime/helpers/typeof.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__("./node_modules/babel-runtime/core-js/symbol/iterator.js");

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__("./node_modules/babel-runtime/core-js/symbol.js");

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),

/***/ "./node_modules/brcast/dist/brcast.es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createBroadcast (initialState) {
  var listeners = {};
  var id = 1;
  var _state = initialState;

  function getState () {
    return _state
  }

  function setState (state) {
    _state = state;
    var keys = Object.keys(listeners);
    var i = 0;
    var len = keys.length;
    for (; i < len; i++) {
      // if a listener gets unsubscribed during setState we just skip it
      if (listeners[keys[i]]) { listeners[keys[i]](state); }
    }
  }

  // subscribe to changes and return the subscriptionId
  function subscribe (listener) {
    if (typeof listener !== 'function') {
      throw new Error('listener must be a function.')
    }
    var currentId = id;
    listeners[currentId] = listener;
    id += 1;
    return currentId
  }

  // remove subscription by removing the listener function
  function unsubscribe (id) {
    listeners[id] = undefined;
  }

  return { getState: getState, setState: setState, subscribe: subscribe, unsubscribe: unsubscribe }
}

/* harmony default export */ __webpack_exports__["default"] = (createBroadcast);


/***/ }),

/***/ "./node_modules/classnames/index.js":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),

/***/ "./node_modules/css-vendor/lib/camelize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Convert dash separated strings to camel cased.
 *
 * @param {String} str
 * @return {String}
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.prefix = undefined;

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__("./node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__("./node_modules/css-vendor/lib/supported-value.js");

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  prefix: _prefix2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
}; /**
    * CSS Vendor prefix detection and property feature testing.
    *
    * @copyright Oleg Slobodskoi 2015
    * @website https://github.com/jsstyles/css-vendor
    * @license MIT
    */

exports.prefix = _prefix2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ "./node_modules/css-vendor/lib/prefix.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; /**
              * Export javascript style and css style vendor prefixes.
              * Based on "transform" support test.
              */

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    // IE did it wrong again ...
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };
  var style = document.createElement('p').style;
  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-property.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _camelize = __webpack_require__("./node_modules/css-vendor/lib/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  /**
   * We test every property on vendor prefix requirement.
   * Once tested, result is cached. It gives us up to 70% perf boost.
   * http://jsperf.com/element-style-object-access-vs-plain-object
   *
   * Prefill cache with known css properties to reduce amount of
   * properties we need to feature test at runtime.
   * http://davidwalsh.name/vendor-prefix
   */
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @return {String|Boolean}
 * @api public
 */
function supportedProperty(prop) {
  // For server-side rendering.
  if (!el) return prop;

  // We have not tested this prop yet, lets do the test.
  if (cache[prop] != null) return cache[prop];

  // Camelization is required because we can't test using
  // css syntax for e.g. in FF.
  // Test if property is supported as it is.
  if ((0, _camelize2['default'])(prop) in el.style) {
    cache[prop] = prop;
  }
  // Test if property is supported with vendor prefix.
  else if (_prefix2['default'].js + (0, _camelize2['default'])('-' + prop) in el.style) {
      cache[prop] = _prefix2['default'].css + prop;
    } else {
      cache[prop] = false;
    }

  return cache[prop];
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-value.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__("./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var el = void 0;

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */
function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) return value;

  var cacheKey = property + value;

  if (cache[cacheKey] != null) return cache[cacheKey];

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    cache[cacheKey] = false;
    return false;
  }

  // Value is supported as it is.
  if (el.style[property] !== '') {
    cache[cacheKey] = value;
  } else {
    // Test value with vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    el.style[property] = value;

    // Value is supported with vendor prefix.
    if (el.style[property] !== '') cache[cacheKey] = value;
  }

  if (!cache[cacheKey]) cache[cacheKey] = false;

  // Reset style value.
  el.style[property] = '';

  return cache[cacheKey];
}

/***/ }),

/***/ "./node_modules/debounce/index.js":
/***/ (function(module, exports) {

/**
 * Returns a function, that, as long as it continues to be invoked, will not
 * be triggered. The function will be called after it stops being called for
 * N milliseconds. If `immediate` is passed, trigger the function on the
 * leading edge, instead of the trailing. The function also has a property 'clear' 
 * that is a function which will clear the timer to prevent previously scheduled executions. 
 *
 * @source underscore.js
 * @see http://unscriptable.com/2009/03/20/debouncing-javascript-methods/
 * @param {Function} function to wrap
 * @param {Number} timeout in ms (`100`)
 * @param {Boolean} whether to execute at the beginning (`false`)
 * @api public
 */

module.exports = function debounce(func, wait, immediate){
  var timeout, args, context, timestamp, result;
  if (null == wait) wait = 100;

  function later() {
    var last = Date.now() - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        context = args = null;
      }
    }
  };

  var debounced = function(){
    context = this;
    args = arguments;
    timestamp = Date.now();
    var callNow = immediate && !timeout;
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };

  debounced.clear = function() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = null;
    }
  };
  
  debounced.flush = function() {
    if (timeout) {
      result = func.apply(context, args);
      context = args = null;
      
      clearTimeout(timeout);
      timeout = null;
    }
  };

  return debounced;
};


/***/ }),

/***/ "./node_modules/deepmerge/dist/es.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		Object.keys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	Object.keys(source).forEach(function(key) {
		if (!options.isMergeableObject(source[key]) || !target[key]) {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		} else {
			destination[key] = deepmerge(target[key], source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

/* harmony default export */ __webpack_exports__["default"] = (deepmerge_1);


/***/ }),

/***/ "./node_modules/dom-helpers/query/isWindow.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getWindow;
function getWindow(node) {
  return node === node.window ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/style/getComputedStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _getComputedStyle;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rposition = /^(top|right|bottom|left)$/;
var rnumnonpx = /^([+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|))(?!px)[a-z%]+$/i;

function _getComputedStyle(node) {
  if (!node) throw new TypeError('No Element passed to `getComputedStyle()`');
  var doc = node.ownerDocument;

  return 'defaultView' in doc ? doc.defaultView.opener ? node.ownerDocument.defaultView.getComputedStyle(node, null) : window.getComputedStyle(node, null) : {
    //ie 8 "magic" from: https://github.com/jquery/jquery/blob/1.11-stable/src/css/curCSS.js#L72
    getPropertyValue: function getPropertyValue(prop) {
      var style = node.style;

      prop = (0, _camelizeStyle2.default)(prop);

      if (prop == 'float') prop = 'styleFloat';

      var current = node.currentStyle[prop] || null;

      if (current == null && style && style[prop]) current = style[prop];

      if (rnumnonpx.test(current) && !rposition.test(prop)) {
        // Remember the original values
        var left = style.left;
        var runStyle = node.runtimeStyle;
        var rsLeft = runStyle && runStyle.left;

        // Put in the new values to get a computed value out
        if (rsLeft) runStyle.left = node.currentStyle.left;

        style.left = prop === 'fontSize' ? '1em' : current;
        current = style.pixelLeft + 'px';

        // Revert the changed values
        style.left = left;
        if (rsLeft) runStyle.left = rsLeft;
      }

      return current;
    }
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = style;

var _camelizeStyle = __webpack_require__("./node_modules/dom-helpers/util/camelizeStyle.js");

var _camelizeStyle2 = _interopRequireDefault(_camelizeStyle);

var _hyphenateStyle = __webpack_require__("./node_modules/dom-helpers/util/hyphenateStyle.js");

var _hyphenateStyle2 = _interopRequireDefault(_hyphenateStyle);

var _getComputedStyle2 = __webpack_require__("./node_modules/dom-helpers/style/getComputedStyle.js");

var _getComputedStyle3 = _interopRequireDefault(_getComputedStyle2);

var _removeStyle = __webpack_require__("./node_modules/dom-helpers/style/removeStyle.js");

var _removeStyle2 = _interopRequireDefault(_removeStyle);

var _properties = __webpack_require__("./node_modules/dom-helpers/transition/properties.js");

var _isTransform = __webpack_require__("./node_modules/dom-helpers/transition/isTransform.js");

var _isTransform2 = _interopRequireDefault(_isTransform);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function style(node, property, value) {
  var css = '';
  var transforms = '';
  var props = property;

  if (typeof property === 'string') {
    if (value === undefined) {
      return node.style[(0, _camelizeStyle2.default)(property)] || (0, _getComputedStyle3.default)(node).getPropertyValue((0, _hyphenateStyle2.default)(property));
    } else {
      (props = {})[property] = value;
    }
  }

  Object.keys(props).forEach(function (key) {
    var value = props[key];
    if (!value && value !== 0) {
      (0, _removeStyle2.default)(node, (0, _hyphenateStyle2.default)(key));
    } else if ((0, _isTransform2.default)(key)) {
      transforms += key + '(' + value + ') ';
    } else {
      css += (0, _hyphenateStyle2.default)(key) + ': ' + value + ';';
    }
  });

  if (transforms) {
    css += _properties.transform + ': ' + transforms + ';';
  }

  node.style.cssText += ';' + css;
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/style/removeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = removeStyle;
function removeStyle(node, key) {
  return 'removeProperty' in node.style ? node.style.removeProperty(key) : node.style.removeAttribute(key);
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/isTransform.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;

function isTransform(property) {
  return !!(property && supportedTransforms.test(property));
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/transition/properties.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;


  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};


function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelize;
var rHyphen = /-(.)/g;

function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/util/camelizeStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = camelizeStyleName;

var _camelize = __webpack_require__("./node_modules/dom-helpers/util/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^-ms-/; /**
                          * Copyright 2014-2015, Facebook, Inc.
                          * All rights reserved.
                          * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/camelizeStyleName.js
                          */
function camelizeStyleName(string) {
  return (0, _camelize2.default)(string.replace(msPattern, 'ms-'));
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenate;

var rUpper = /([A-Z])/g;

function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/hyphenateStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hyphenateStyleName;

var _hyphenate = __webpack_require__("./node_modules/dom-helpers/util/hyphenate.js");

var _hyphenate2 = _interopRequireDefault(_hyphenate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var msPattern = /^ms-/; /**
                         * Copyright 2013-2014, Facebook, Inc.
                         * All rights reserved.
                         * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
                         */

function hyphenateStyleName(string) {
  return (0, _hyphenate2.default)(string).replace(msPattern, '-ms-');
}
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/inDOM.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/dom-helpers/util/scrollbarSize.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (recalc) {
  if (!size && size !== 0 || recalc) {
    if (_inDOM2.default) {
      var scrollDiv = document.createElement('div');

      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';

      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
};

var _inDOM = __webpack_require__("./node_modules/dom-helpers/util/inDOM.js");

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var size = void 0;

module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/fbjs/lib/shallowEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @typechecks
 * 
 */

/*eslint-disable no-self-compare */



var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */
function is(x, y) {
  // SameValue algorithm
  if (x === y) {
    // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    // Added the nonzero y check to make Flow happy, but it is redundant
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // Step 6.a: NaN == NaN
    return x !== x && y !== y;
  }
}

/**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */
function shallowEqual(objA, objB) {
  if (is(objA, objB)) {
    return true;
  }

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Test for A's keys different from B.
  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

module.exports = shallowEqual;

/***/ }),

/***/ "./node_modules/hyphenate-style-name/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;


/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/jss-camel-case/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelCase;

var _hyphenateStyleName = __webpack_require__("./node_modules/hyphenate-style-name/index.js");

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Convert camel cased property names to dash separated.
 *
 * @param {Object} style
 * @return {Object}
 */
function convertCase(style) {
  var converted = {};

  for (var prop in style) {
    converted[(0, _hyphenateStyleName2['default'])(prop)] = style[prop];
  }

  if (style.fallbacks) {
    if (Array.isArray(style.fallbacks)) converted.fallbacks = style.fallbacks.map(convertCase);else converted.fallbacks = convertCase(style.fallbacks);
  }

  return converted;
}

/**
 * Allow camel cased property names by converting them back to dasherized.
 *
 * @param {Rule} rule
 */
function camelCase() {
  function onProcessStyle(style) {
    if (Array.isArray(style)) {
      // Handle rules like @font-face, which can have multiple styles in an array
      for (var index = 0; index < style.length; index++) {
        style[index] = convertCase(style[index]);
      }
      return style;
    }

    return convertCase(style);
  }

  function onChangeValue(value, prop, rule) {
    var hyphenatedProp = (0, _hyphenateStyleName2['default'])(prop);

    // There was no camel case in place
    if (prop === hyphenatedProp) return value;

    rule.prop(hyphenatedProp, value);

    // Core will ignore that property value we set the proper one above.
    return null;
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss-default-unit/lib/defaultUnits.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Generated jss-default-unit CSS property units
 *
 * @type object
 */
exports['default'] = {
  'animation-delay': 'ms',
  'animation-duration': 'ms',
  'background-position': 'px',
  'background-position-x': 'px',
  'background-position-y': 'px',
  'background-size': 'px',
  border: 'px',
  'border-bottom': 'px',
  'border-bottom-left-radius': 'px',
  'border-bottom-right-radius': 'px',
  'border-bottom-width': 'px',
  'border-left': 'px',
  'border-left-width': 'px',
  'border-radius': 'px',
  'border-right': 'px',
  'border-right-width': 'px',
  'border-spacing': 'px',
  'border-top': 'px',
  'border-top-left-radius': 'px',
  'border-top-right-radius': 'px',
  'border-top-width': 'px',
  'border-width': 'px',
  'border-after-width': 'px',
  'border-before-width': 'px',
  'border-end-width': 'px',
  'border-horizontal-spacing': 'px',
  'border-start-width': 'px',
  'border-vertical-spacing': 'px',
  bottom: 'px',
  'box-shadow': 'px',
  'column-gap': 'px',
  'column-rule': 'px',
  'column-rule-width': 'px',
  'column-width': 'px',
  'flex-basis': 'px',
  'font-size': 'px',
  'font-size-delta': 'px',
  height: 'px',
  left: 'px',
  'letter-spacing': 'px',
  'logical-height': 'px',
  'logical-width': 'px',
  margin: 'px',
  'margin-after': 'px',
  'margin-before': 'px',
  'margin-bottom': 'px',
  'margin-left': 'px',
  'margin-right': 'px',
  'margin-top': 'px',
  'max-height': 'px',
  'max-width': 'px',
  'margin-end': 'px',
  'margin-start': 'px',
  'mask-position-x': 'px',
  'mask-position-y': 'px',
  'mask-size': 'px',
  'max-logical-height': 'px',
  'max-logical-width': 'px',
  'min-height': 'px',
  'min-width': 'px',
  'min-logical-height': 'px',
  'min-logical-width': 'px',
  motion: 'px',
  'motion-offset': 'px',
  outline: 'px',
  'outline-offset': 'px',
  'outline-width': 'px',
  padding: 'px',
  'padding-bottom': 'px',
  'padding-left': 'px',
  'padding-right': 'px',
  'padding-top': 'px',
  'padding-after': 'px',
  'padding-before': 'px',
  'padding-end': 'px',
  'padding-start': 'px',
  'perspective-origin-x': '%',
  'perspective-origin-y': '%',
  perspective: 'px',
  right: 'px',
  'shape-margin': 'px',
  size: 'px',
  'text-indent': 'px',
  'text-stroke': 'px',
  'text-stroke-width': 'px',
  top: 'px',
  'transform-origin': '%',
  'transform-origin-x': '%',
  'transform-origin-y': '%',
  'transform-origin-z': '%',
  'transition-delay': 'ms',
  'transition-duration': 'ms',
  'vertical-align': 'px',
  width: 'px',
  'word-spacing': 'px',
  // Not existing properties.
  // Used to avoid issues with jss-expand intergration.
  'box-shadow-x': 'px',
  'box-shadow-y': 'px',
  'box-shadow-blur': 'px',
  'box-shadow-spread': 'px',
  'font-line-height': 'px',
  'text-shadow-x': 'px',
  'text-shadow-y': 'px',
  'text-shadow-blur': 'px'
};

/***/ }),

/***/ "./node_modules/jss-default-unit/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = defaultUnit;

var _defaultUnits = __webpack_require__("./node_modules/jss-default-unit/lib/defaultUnits.js");

var _defaultUnits2 = _interopRequireDefault(_defaultUnits);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Clones the object and adds a camel cased property version.
 */
function addCamelCasedVersion(obj) {
  var regExp = /(-[a-z])/g;
  var replace = function replace(str) {
    return str[1].toUpperCase();
  };
  var newObj = {};
  for (var key in obj) {
    newObj[key] = obj[key];
    newObj[key.replace(regExp, replace)] = obj[key];
  }
  return newObj;
}

var units = addCamelCasedVersion(_defaultUnits2['default']);

/**
 * Recursive deep style passing function
 *
 * @param {String} current property
 * @param {(Object|Array|Number|String)} property value
 * @param {Object} options
 * @return {(Object|Array|Number|String)} resulting value
 */
function iterate(prop, value, options) {
  if (!value) return value;

  var convertedValue = value;

  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type === 'object' && Array.isArray(value)) type = 'array';

  switch (type) {
    case 'object':
      if (prop === 'fallbacks') {
        for (var innerProp in value) {
          value[innerProp] = iterate(innerProp, value[innerProp], options);
        }
        break;
      }
      for (var _innerProp in value) {
        value[_innerProp] = iterate(prop + '-' + _innerProp, value[_innerProp], options);
      }
      break;
    case 'array':
      for (var i = 0; i < value.length; i++) {
        value[i] = iterate(prop, value[i], options);
      }
      break;
    case 'number':
      if (value !== 0) {
        convertedValue = value + (options[prop] || units[prop] || '');
      }
      break;
    default:
      break;
  }

  return convertedValue;
}

/**
 * Add unit to numeric values.
 */
function defaultUnit() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var camelCasedOptions = addCamelCasedVersion(options);

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      style[prop] = iterate(prop, style[prop], camelCasedOptions);
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return iterate(prop, value, camelCasedOptions);
  }

  return { onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss-global/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports['default'] = jssGlobal;

var _jss = __webpack_require__("./node_modules/jss/lib/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var propKey = '@global';
var prefixKey = '@global ';

var GlobalContainerRule = function () {
  function GlobalContainerRule(key, styles, options) {
    _classCallCheck(this, GlobalContainerRule);

    this.type = 'global';

    this.key = key;
    this.options = options;
    this.rules = new _jss.RuleList(_extends({}, options, {
      parent: this
    }));

    for (var selector in styles) {
      this.rules.add(selector, styles[selector], { selector: selector });
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(GlobalContainerRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      return this.rules.toString();
    }
  }]);

  return GlobalContainerRule;
}();

var GlobalPrefixedRule = function () {
  function GlobalPrefixedRule(name, style, options) {
    _classCallCheck(this, GlobalPrefixedRule);

    this.name = name;
    this.options = options;
    var selector = name.substr(prefixKey.length);
    this.rule = options.jss.createRule(selector, style, _extends({}, options, {
      parent: this,
      selector: selector
    }));
  }

  _createClass(GlobalPrefixedRule, [{
    key: 'toString',
    value: function toString(options) {
      return this.rule.toString(options);
    }
  }]);

  return GlobalPrefixedRule;
}();

var separatorRegExp = /\s*,\s*/g;

function addScope(selector, scope) {
  var parts = selector.split(separatorRegExp);
  var scoped = '';
  for (var i = 0; i < parts.length; i++) {
    scoped += scope + ' ' + parts[i].trim();
    if (parts[i + 1]) scoped += ', ';
  }
  return scoped;
}

function handleNestedGlobalContainerRule(rule) {
  var options = rule.options,
      style = rule.style;

  var rules = style[propKey];

  if (!rules) return;

  for (var name in rules) {
    options.sheet.addRule(name, rules[name], _extends({}, options, {
      selector: addScope(name, rule.selector)
    }));
  }

  delete style[propKey];
}

function handlePrefixedGlobalRule(rule) {
  var options = rule.options,
      style = rule.style;

  for (var prop in style) {
    if (prop.substr(0, propKey.length) !== propKey) continue;

    var selector = addScope(prop.substr(propKey.length), rule.selector);
    options.sheet.addRule(selector, style[prop], _extends({}, options, {
      selector: selector
    }));
    delete style[prop];
  }
}

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssGlobal() {
  function onCreateRule(name, styles, options) {
    if (name === propKey) {
      return new GlobalContainerRule(name, styles, options);
    }

    if (name[0] === '@' && name.substr(0, prefixKey.length) === prefixKey) {
      return new GlobalPrefixedRule(name, styles, options);
    }

    var parent = options.parent;


    if (parent) {
      if (parent.type === 'global' || parent.options.parent.type === 'global') {
        options.global = true;
      }
    }

    if (options.global) options.selector = name;

    return null;
  }

  function onProcessRule(rule) {
    if (rule.type !== 'style') return;

    handleNestedGlobalContainerRule(rule);
    handlePrefixedGlobalRule(rule);
  }

  return { onCreateRule: onCreateRule, onProcessRule: onProcessRule };
}

/***/ }),

/***/ "./node_modules/jss-nested/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = jssNested;

var _warning = __webpack_require__("./node_modules/jss-nested/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var separatorRegExp = /\s*,\s*/g;
var parentRegExp = /&/g;
var refRegExp = /\$([\w-]+)/g;

/**
 * Convert nested rules to separate, remove them from original styles.
 *
 * @param {Rule} rule
 * @api public
 */
function jssNested() {
  // Get a function to be used for $ref replacement.
  function getReplaceRef(container) {
    return function (match, key) {
      var rule = container.getRule(key);
      if (rule) return rule.selector;
      (0, _warning2.default)(false, '[JSS] Could not find the referenced rule %s in %s.', key, container.options.meta || container);
      return key;
    };
  }

  var hasAnd = function hasAnd(str) {
    return str.indexOf('&') !== -1;
  };

  function replaceParentRefs(nestedProp, parentProp) {
    var parentSelectors = parentProp.split(separatorRegExp);
    var nestedSelectors = nestedProp.split(separatorRegExp);

    var result = '';

    for (var i = 0; i < parentSelectors.length; i++) {
      var parent = parentSelectors[i];

      for (var j = 0; j < nestedSelectors.length; j++) {
        var nested = nestedSelectors[j];
        if (result) result += ', ';
        // Replace all & by the parent or prefix & with the parent.
        result += hasAnd(nested) ? nested.replace(parentRegExp, parent) : parent + ' ' + nested;
      }
    }

    return result;
  }

  function getOptions(rule, container, options) {
    // Options has been already created, now we only increase index.
    if (options) return _extends({}, options, { index: options.index + 1 });

    var nestingLevel = rule.options.nestingLevel;

    nestingLevel = nestingLevel === undefined ? 1 : nestingLevel + 1;

    return _extends({}, rule.options, {
      nestingLevel: nestingLevel,
      index: container.indexOf(rule) + 1
    });
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;
    var container = rule.options.parent;
    var options = void 0;
    var replaceRef = void 0;
    for (var prop in style) {
      var isNested = hasAnd(prop);
      var isNestedConditional = prop[0] === '@';

      if (!isNested && !isNestedConditional) continue;

      options = getOptions(rule, container, options);

      if (isNested) {
        var selector = replaceParentRefs(prop, rule.selector
        // Lazily create the ref replacer function just once for
        // all nested rules within the sheet.
        );if (!replaceRef) replaceRef = getReplaceRef(container
        // Replace all $refs.
        );selector = selector.replace(refRegExp, replaceRef);

        container.addRule(selector, style[prop], _extends({}, options, { selector: selector }));
      } else if (isNestedConditional) {
        container
        // Place conditional right after the parent rule to ensure right ordering.
        .addRule(prop, null, options).addRule(rule.key, style[prop], { selector: rule.selector });
      }

      delete style[prop];
    }

    return style;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "./node_modules/jss-nested/node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/jss-props-sort/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssPropsSort;
/**
 * Sort props by length.
 */
function jssPropsSort() {
  function sort(prop0, prop1) {
    return prop0.length - prop1.length;
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    var newStyle = {};
    var props = Object.keys(style).sort(sort);
    for (var prop in props) {
      newStyle[props[prop]] = style[props[prop]];
    }
    return newStyle;
  }

  return { onProcessStyle: onProcessStyle };
}

/***/ }),

/***/ "./node_modules/jss-vendor-prefixer/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = jssVendorPrefixer;

var _cssVendor = __webpack_require__("./node_modules/css-vendor/lib/index.js");

var vendor = _interopRequireWildcard(_cssVendor);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

/**
 * Add vendor prefix to a property name when needed.
 *
 * @param {Rule} rule
 * @api public
 */
function jssVendorPrefixer() {
  function onProcessRule(rule) {
    if (rule.type === 'keyframes') {
      rule.key = '@' + vendor.prefix.css + rule.key.substr(1);
    }
  }

  function onProcessStyle(style, rule) {
    if (rule.type !== 'style') return style;

    for (var prop in style) {
      var value = style[prop];

      var changeProp = false;
      var supportedProp = vendor.supportedProperty(prop);
      if (supportedProp && supportedProp !== prop) changeProp = true;

      var changeValue = false;
      var supportedValue = vendor.supportedValue(supportedProp, value);
      if (supportedValue && supportedValue !== value) changeValue = true;

      if (changeProp || changeValue) {
        if (changeProp) delete style[prop];
        style[supportedProp || prop] = supportedValue || value;
      }
    }

    return style;
  }

  function onChangeValue(value, prop) {
    return vendor.supportedValue(prop, value);
  }

  return { onProcessRule: onProcessRule, onProcessStyle: onProcessStyle, onChangeValue: onChangeValue };
}

/***/ }),

/***/ "./node_modules/jss/lib/Jss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _isInBrowser = __webpack_require__("./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _StyleSheet = __webpack_require__("./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _PluginsRegistry = __webpack_require__("./node_modules/jss/lib/PluginsRegistry.js");

var _PluginsRegistry2 = _interopRequireDefault(_PluginsRegistry);

var _rules = __webpack_require__("./node_modules/jss/lib/plugins/rules.js");

var _rules2 = _interopRequireDefault(_rules);

var _observables = __webpack_require__("./node_modules/jss/lib/plugins/observables.js");

var _observables2 = _interopRequireDefault(_observables);

var _functions = __webpack_require__("./node_modules/jss/lib/plugins/functions.js");

var _functions2 = _interopRequireDefault(_functions);

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createGenerateClassName = __webpack_require__("./node_modules/jss/lib/utils/createGenerateClassName.js");

var _createGenerateClassName2 = _interopRequireDefault(_createGenerateClassName);

var _createRule2 = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule3 = _interopRequireDefault(_createRule2);

var _DomRenderer = __webpack_require__("./node_modules/jss/lib/renderers/DomRenderer.js");

var _DomRenderer2 = _interopRequireDefault(_DomRenderer);

var _VirtualRenderer = __webpack_require__("./node_modules/jss/lib/renderers/VirtualRenderer.js");

var _VirtualRenderer2 = _interopRequireDefault(_VirtualRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var defaultPlugins = _rules2['default'].concat([_observables2['default'], _functions2['default']]);

var instanceCounter = 0;

var Jss = function () {
  function Jss(options) {
    _classCallCheck(this, Jss);

    this.id = instanceCounter++;
    this.version = "9.8.7";
    this.plugins = new _PluginsRegistry2['default']();
    this.options = {
      createGenerateClassName: _createGenerateClassName2['default'],
      Renderer: _isInBrowser2['default'] ? _DomRenderer2['default'] : _VirtualRenderer2['default'],
      plugins: []
    };
    this.generateClassName = (0, _createGenerateClassName2['default'])();

    // eslint-disable-next-line prefer-spread
    this.use.apply(this, defaultPlugins);
    this.setup(options);
  }

  _createClass(Jss, [{
    key: 'setup',
    value: function setup() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (options.createGenerateClassName) {
        this.options.createGenerateClassName = options.createGenerateClassName;
        // $FlowFixMe
        this.generateClassName = options.createGenerateClassName();
      }

      if (options.insertionPoint != null) this.options.insertionPoint = options.insertionPoint;
      if (options.virtual || options.Renderer) {
        this.options.Renderer = options.Renderer || (options.virtual ? _VirtualRenderer2['default'] : _DomRenderer2['default']);
      }

      // eslint-disable-next-line prefer-spread
      if (options.plugins) this.use.apply(this, options.plugins);

      return this;
    }

    /**
     * Create a Style Sheet.
     */

  }, {
    key: 'createStyleSheet',
    value: function createStyleSheet(styles) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var index = options.index;
      if (typeof index !== 'number') {
        index = _sheets2['default'].index === 0 ? 0 : _sheets2['default'].index + 1;
      }
      var sheet = new _StyleSheet2['default'](styles, _extends({}, options, {
        jss: this,
        generateClassName: options.generateClassName || this.generateClassName,
        insertionPoint: this.options.insertionPoint,
        Renderer: this.options.Renderer,
        index: index
      }));
      this.plugins.onProcessSheet(sheet);

      return sheet;
    }

    /**
     * Detach the Style Sheet and remove it from the registry.
     */

  }, {
    key: 'removeStyleSheet',
    value: function removeStyleSheet(sheet) {
      sheet.detach();
      _sheets2['default'].remove(sheet);
      return this;
    }

    /**
     * Create a rule without a Style Sheet.
     */

  }, {
    key: 'createRule',
    value: function createRule(name) {
      var style = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      // Enable rule without name for inline styles.
      if ((typeof name === 'undefined' ? 'undefined' : _typeof(name)) === 'object') {
        options = style;
        style = name;
        name = undefined;
      }

      // Cast from RuleFactoryOptions to RuleOptions
      // https://stackoverflow.com/questions/41328728/force-casting-in-flow
      var ruleOptions = options;

      ruleOptions.jss = this;
      ruleOptions.Renderer = this.options.Renderer;
      if (!ruleOptions.generateClassName) ruleOptions.generateClassName = this.generateClassName;
      if (!ruleOptions.classes) ruleOptions.classes = {};
      var rule = (0, _createRule3['default'])(name, style, ruleOptions);

      if (!ruleOptions.selector && rule instanceof _StyleRule2['default']) {
        rule.selector = '.' + ruleOptions.generateClassName(rule);
      }

      this.plugins.onProcessRule(rule);

      return rule;
    }

    /**
     * Register plugin. Passed function will be invoked with a rule instance.
     */

  }, {
    key: 'use',
    value: function use() {
      var _this = this;

      for (var _len = arguments.length, plugins = Array(_len), _key = 0; _key < _len; _key++) {
        plugins[_key] = arguments[_key];
      }

      plugins.forEach(function (plugin) {
        // Avoids applying same plugin twice, at least based on ref.
        if (_this.options.plugins.indexOf(plugin) === -1) {
          _this.options.plugins.push(plugin);
          _this.plugins.use(plugin);
        }
      });

      return this;
    }
  }]);

  return Jss;
}();

exports['default'] = Jss;

/***/ }),

/***/ "./node_modules/jss/lib/PluginsRegistry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PluginsRegistry = function () {
  function PluginsRegistry() {
    _classCallCheck(this, PluginsRegistry);

    this.hooks = {
      onCreateRule: [],
      onProcessRule: [],
      onProcessStyle: [],
      onProcessSheet: [],
      onChangeValue: [],
      onUpdate: []

      /**
       * Call `onCreateRule` hooks and return an object if returned by a hook.
       */
    };
  }

  _createClass(PluginsRegistry, [{
    key: 'onCreateRule',
    value: function onCreateRule(name, decl, options) {
      for (var i = 0; i < this.hooks.onCreateRule.length; i++) {
        var rule = this.hooks.onCreateRule[i](name, decl, options);
        if (rule) return rule;
      }
      return null;
    }

    /**
     * Call `onProcessRule` hooks.
     */

  }, {
    key: 'onProcessRule',
    value: function onProcessRule(rule) {
      if (rule.isProcessed) return;
      var sheet = rule.options.sheet;

      for (var i = 0; i < this.hooks.onProcessRule.length; i++) {
        this.hooks.onProcessRule[i](rule, sheet);
      }

      // $FlowFixMe
      if (rule.style) this.onProcessStyle(rule.style, rule, sheet);

      rule.isProcessed = true;
    }

    /**
     * Call `onProcessStyle` hooks.
     */

  }, {
    key: 'onProcessStyle',
    value: function onProcessStyle(style, rule, sheet) {
      var nextStyle = style;

      for (var i = 0; i < this.hooks.onProcessStyle.length; i++) {
        nextStyle = this.hooks.onProcessStyle[i](nextStyle, rule, sheet);
        // $FlowFixMe
        rule.style = nextStyle;
      }
    }

    /**
     * Call `onProcessSheet` hooks.
     */

  }, {
    key: 'onProcessSheet',
    value: function onProcessSheet(sheet) {
      for (var i = 0; i < this.hooks.onProcessSheet.length; i++) {
        this.hooks.onProcessSheet[i](sheet);
      }
    }

    /**
     * Call `onUpdate` hooks.
     */

  }, {
    key: 'onUpdate',
    value: function onUpdate(data, rule, sheet) {
      for (var i = 0; i < this.hooks.onUpdate.length; i++) {
        this.hooks.onUpdate[i](data, rule, sheet);
      }
    }

    /**
     * Call `onChangeValue` hooks.
     */

  }, {
    key: 'onChangeValue',
    value: function onChangeValue(value, prop, rule) {
      var processedValue = value;
      for (var i = 0; i < this.hooks.onChangeValue.length; i++) {
        processedValue = this.hooks.onChangeValue[i](processedValue, prop, rule);
      }
      return processedValue;
    }

    /**
     * Register a plugin.
     * If function is passed, it is a shortcut for `{onProcessRule}`.
     */

  }, {
    key: 'use',
    value: function use(plugin) {
      for (var name in plugin) {
        if (this.hooks[name]) this.hooks[name].push(plugin[name]);else (0, _warning2['default'])(false, '[JSS] Unknown hook "%s".', name);
      }
    }
  }]);

  return PluginsRegistry;
}();

exports['default'] = PluginsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/RuleList.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _linkRule = __webpack_require__("./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _escape = __webpack_require__("./node_modules/jss/lib/utils/escape.js");

var _escape2 = _interopRequireDefault(_escape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Contains rules objects and allows adding/removing etc.
 * Is used for e.g. by `StyleSheet` or `ConditionalRule`.
 */
var RuleList = function () {

  // Original styles object.
  function RuleList(options) {
    var _this = this;

    _classCallCheck(this, RuleList);

    this.map = {};
    this.raw = {};
    this.index = [];

    this.update = function (name, data) {
      var _options = _this.options,
          plugins = _options.jss.plugins,
          sheet = _options.sheet;

      if (typeof name === 'string') {
        plugins.onUpdate(data, _this.get(name), sheet);
      } else {
        for (var index = 0; index < _this.index.length; index++) {
          plugins.onUpdate(name, _this.index[index], sheet);
        }
      }
    };

    this.options = options;
    this.classes = options.classes;
  }

  /**
   * Create and register rule.
   *
   * Will not render after Style Sheet was rendered the first time.
   */


  // Used to ensure correct rules order.

  // Rules registry for access by .get() method.
  // It contains the same rule registered by name and by selector.


  _createClass(RuleList, [{
    key: 'add',
    value: function add(name, decl, options) {
      var _options2 = this.options,
          parent = _options2.parent,
          sheet = _options2.sheet,
          jss = _options2.jss,
          Renderer = _options2.Renderer,
          generateClassName = _options2.generateClassName;


      options = _extends({
        classes: this.classes,
        parent: parent,
        sheet: sheet,
        jss: jss,
        Renderer: Renderer,
        generateClassName: generateClassName
      }, options);

      if (!options.selector && this.classes[name]) {
        options.selector = '.' + (0, _escape2['default'])(this.classes[name]);
      }

      this.raw[name] = decl;

      var rule = (0, _createRule2['default'])(name, decl, options);

      var className = void 0;

      if (!options.selector && rule instanceof _StyleRule2['default']) {
        className = generateClassName(rule, sheet);
        rule.selector = '.' + (0, _escape2['default'])(className);
      }

      this.register(rule, className);

      var index = options.index === undefined ? this.index.length : options.index;
      this.index.splice(index, 0, rule);

      return rule;
    }

    /**
     * Get a rule.
     */

  }, {
    key: 'get',
    value: function get(name) {
      return this.map[name];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'remove',
    value: function remove(rule) {
      this.unregister(rule);
      this.index.splice(this.indexOf(rule), 1);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.index.indexOf(rule);
    }

    /**
     * Run `onProcessRule()` plugins on every rule.
     */

  }, {
    key: 'process',
    value: function process() {
      var plugins = this.options.jss.plugins;
      // We need to clone array because if we modify the index somewhere else during a loop
      // we end up with very hard-to-track-down side effects.

      this.index.slice(0).forEach(plugins.onProcessRule, plugins);
    }

    /**
     * Register a rule in `.map` and `.classes` maps.
     */

  }, {
    key: 'register',
    value: function register(rule, className) {
      this.map[rule.key] = rule;
      if (rule instanceof _StyleRule2['default']) {
        this.map[rule.selector] = rule;
        if (className) this.classes[rule.key] = className;
      }
    }

    /**
     * Unregister a rule.
     */

  }, {
    key: 'unregister',
    value: function unregister(rule) {
      delete this.map[rule.key];
      if (rule instanceof _StyleRule2['default']) {
        delete this.map[rule.selector];
        delete this.classes[rule.key];
      }
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'link',


    /**
     * Link renderable rules with CSSRuleList.
     */
    value: function link(cssRules) {
      var map = this.options.sheet.renderer.getUnescapedKeysMap(this.index);

      for (var i = 0; i < cssRules.length; i++) {
        var cssRule = cssRules[i];
        var _key = this.options.sheet.renderer.getKey(cssRule);
        if (map[_key]) _key = map[_key];
        var rule = this.map[_key];
        if (rule) (0, _linkRule2['default'])(rule, cssRule);
      }
    }

    /**
     * Convert rules to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var str = '';
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;

      for (var index = 0; index < this.index.length; index++) {
        var rule = this.index[index];
        var css = rule.toString(options);

        // No need to render an empty rule.
        if (!css && !link) continue;

        if (str) str += '\n';
        str += css;
      }

      return str;
    }
  }]);

  return RuleList;
}();

exports['default'] = RuleList;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsManager.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * SheetsManager is like a WeakMap which is designed to count StyleSheet
 * instances and attach/detach automatically.
 */
var SheetsManager = function () {
  function SheetsManager() {
    _classCallCheck(this, SheetsManager);

    this.sheets = [];
    this.refs = [];
    this.keys = [];
  }

  _createClass(SheetsManager, [{
    key: 'get',
    value: function get(key) {
      var index = this.keys.indexOf(key);
      return this.sheets[index];
    }
  }, {
    key: 'add',
    value: function add(key, sheet) {
      var sheets = this.sheets,
          refs = this.refs,
          keys = this.keys;

      var index = sheets.indexOf(sheet);

      if (index !== -1) return index;

      sheets.push(sheet);
      refs.push(0);
      keys.push(key);

      return sheets.length - 1;
    }
  }, {
    key: 'manage',
    value: function manage(key) {
      var index = this.keys.indexOf(key);
      var sheet = this.sheets[index];
      if (this.refs[index] === 0) sheet.attach();
      this.refs[index]++;
      if (!this.keys[index]) this.keys.splice(index, 0, key);
      return sheet;
    }
  }, {
    key: 'unmanage',
    value: function unmanage(key) {
      var index = this.keys.indexOf(key);
      if (index === -1) {
        // eslint-ignore-next-line no-console
        (0, _warning2['default'])(false, "SheetsManager: can't find sheet to unmanage");
        return;
      }
      if (this.refs[index] > 0) {
        this.refs[index]--;
        if (this.refs[index] === 0) this.sheets[index].detach();
      }
    }
  }, {
    key: 'size',
    get: function get() {
      return this.keys.length;
    }
  }]);

  return SheetsManager;
}();

exports['default'] = SheetsManager;

/***/ }),

/***/ "./node_modules/jss/lib/SheetsRegistry.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Sheets registry to access them all at one place.
 */
var SheetsRegistry = function () {
  function SheetsRegistry() {
    _classCallCheck(this, SheetsRegistry);

    this.registry = [];
  }

  _createClass(SheetsRegistry, [{
    key: 'add',


    /**
     * Register a Style Sheet.
     */
    value: function add(sheet) {
      var registry = this.registry;
      var index = sheet.options.index;


      if (registry.indexOf(sheet) !== -1) return;

      if (registry.length === 0 || index >= this.index) {
        registry.push(sheet);
        return;
      }

      // Find a position.
      for (var i = 0; i < registry.length; i++) {
        if (registry[i].options.index > index) {
          registry.splice(i, 0, sheet);
          return;
        }
      }
    }

    /**
     * Reset the registry.
     */

  }, {
    key: 'reset',
    value: function reset() {
      this.registry = [];
    }

    /**
     * Remove a Style Sheet.
     */

  }, {
    key: 'remove',
    value: function remove(sheet) {
      var index = this.registry.indexOf(sheet);
      this.registry.splice(index, 1);
    }

    /**
     * Convert all attached sheets to a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      return this.registry.filter(function (sheet) {
        return sheet.attached;
      }).map(function (sheet) {
        return sheet.toString(options);
      }).join('\n');
    }
  }, {
    key: 'index',


    /**
     * Current highest index number.
     */
    get: function get() {
      return this.registry.length === 0 ? 0 : this.registry[this.registry.length - 1].options.index;
    }
  }]);

  return SheetsRegistry;
}();

exports['default'] = SheetsRegistry;

/***/ }),

/***/ "./node_modules/jss/lib/StyleSheet.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _linkRule = __webpack_require__("./node_modules/jss/lib/utils/linkRule.js");

var _linkRule2 = _interopRequireDefault(_linkRule);

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable-next-line no-use-before-define */
var StyleSheet = function () {
  function StyleSheet(styles, options) {
    var _this = this;

    _classCallCheck(this, StyleSheet);

    this.update = function (name, data) {
      if (typeof name === 'string') {
        _this.rules.update(name, data);
      } else {
        _this.rules.update(name);
      }
      return _this;
    };

    this.attached = false;
    this.deployed = false;
    this.linked = false;
    this.classes = {};
    this.options = _extends({}, options, {
      sheet: this,
      parent: this,
      classes: this.classes
    });
    this.renderer = new options.Renderer(this);
    this.rules = new _RuleList2['default'](this.options);

    for (var _name in styles) {
      this.rules.add(_name, styles[_name]);
    }

    this.rules.process();
  }

  /**
   * Attach renderable to the render tree.
   */


  _createClass(StyleSheet, [{
    key: 'attach',
    value: function attach() {
      if (this.attached) return this;
      if (!this.deployed) this.deploy();
      this.renderer.attach();
      if (!this.linked && this.options.link) this.link();
      this.attached = true;
      return this;
    }

    /**
     * Remove renderable from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      if (!this.attached) return this;
      this.renderer.detach();
      this.attached = false;
      return this;
    }

    /**
     * Add a rule to the current stylesheet.
     * Will insert a rule also after the stylesheet has been rendered first time.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, decl, options) {
      var queue = this.queue;

      // Plugins can create rules.
      // In order to preserve the right order, we need to queue all `.addRule` calls,
      // which happen after the first `rules.add()` call.

      if (this.attached && !queue) this.queue = [];

      var rule = this.rules.add(name, decl, options);
      this.options.jss.plugins.onProcessRule(rule);

      if (this.attached) {
        if (!this.deployed) return rule;
        // Don't insert rule directly if there is no stringified version yet.
        // It will be inserted all together when .attach is called.
        if (queue) queue.push(rule);else {
          this.insertRule(rule);
          if (this.queue) {
            this.queue.forEach(this.insertRule, this);
            this.queue = undefined;
          }
        }
        return rule;
      }

      // We can't add rules to a detached style node.
      // We will redeploy the sheet once user will attach it.
      this.deployed = false;

      return rule;
    }

    /**
     * Insert rule into the StyleSheet
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule) {
      var renderable = this.renderer.insertRule(rule);
      if (renderable && this.options.link) (0, _linkRule2['default'])(rule, renderable);
    }

    /**
     * Create and add rules.
     * Will render also after Style Sheet was rendered the first time.
     */

  }, {
    key: 'addRules',
    value: function addRules(styles, options) {
      var added = [];
      for (var _name2 in styles) {
        added.push(this.addRule(_name2, styles[_name2], options));
      }
      return added;
    }

    /**
     * Get a rule by name.
     */

  }, {
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Delete a rule by name.
     * Returns `true`: if rule has been deleted from the DOM.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(name) {
      var rule = this.rules.get(name);

      if (!rule) return false;

      this.rules.remove(rule);

      if (this.attached && rule.renderable) {
        return this.renderer.deleteRule(rule.renderable);
      }

      return true;
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Deploy pure CSS string to a renderable.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      this.renderer.deploy();
      this.deployed = true;
      return this;
    }

    /**
     * Link renderable CSS rules from sheet with their corresponding models.
     */

  }, {
    key: 'link',
    value: function link() {
      var cssRules = this.renderer.getRules();

      // Is undefined when VirtualRenderer is used.
      if (cssRules) this.rules.link(cssRules);
      this.linked = true;
      return this;
    }

    /**
     * Update the function values with a new data.
     */

  }, {
    key: 'toString',


    /**
     * Convert rules to a CSS string.
     */
    value: function toString(options) {
      return this.rules.toString(options);
    }
  }]);

  return StyleSheet;
}();

exports['default'] = StyleSheet;

/***/ }),

/***/ "./node_modules/jss/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = exports.createGenerateClassName = exports.sheets = exports.RuleList = exports.SheetsManager = exports.SheetsRegistry = exports.toCssValue = exports.getDynamicStyles = undefined;

var _getDynamicStyles = __webpack_require__("./node_modules/jss/lib/utils/getDynamicStyles.js");

Object.defineProperty(exports, 'getDynamicStyles', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_getDynamicStyles)['default'];
  }
});

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

Object.defineProperty(exports, 'toCssValue', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_toCssValue)['default'];
  }
});

var _SheetsRegistry = __webpack_require__("./node_modules/jss/lib/SheetsRegistry.js");

Object.defineProperty(exports, 'SheetsRegistry', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsRegistry)['default'];
  }
});

var _SheetsManager = __webpack_require__("./node_modules/jss/lib/SheetsManager.js");

Object.defineProperty(exports, 'SheetsManager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_SheetsManager)['default'];
  }
});

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

Object.defineProperty(exports, 'RuleList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_RuleList)['default'];
  }
});

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

Object.defineProperty(exports, 'sheets', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sheets)['default'];
  }
});

var _createGenerateClassName = __webpack_require__("./node_modules/jss/lib/utils/createGenerateClassName.js");

Object.defineProperty(exports, 'createGenerateClassName', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_createGenerateClassName)['default'];
  }
});

var _Jss = __webpack_require__("./node_modules/jss/lib/Jss.js");

var _Jss2 = _interopRequireDefault(_Jss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Creates a new instance of Jss.
 */
var create = exports.create = function create(options) {
  return new _Jss2['default'](options);
};

/**
 * A global Jss instance.
 */
exports['default'] = create();

/***/ }),

/***/ "./node_modules/jss/lib/plugins/functions.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// A symbol replacement.
var now = Date.now();

var fnValuesNs = 'fnValues' + now;
var fnStyleNs = 'fnStyle' + ++now;

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (typeof decl !== 'function') return null;
    var rule = (0, _createRule2['default'])(name, {}, options);
    rule[fnStyleNs] = decl;
    return rule;
  },
  onProcessStyle: function onProcessStyle(style, rule) {
    var fn = {};
    for (var prop in style) {
      var value = style[prop];
      if (typeof value !== 'function') continue;
      delete style[prop];
      fn[prop] = value;
    }
    rule = rule;
    rule[fnValuesNs] = fn;
    return style;
  },
  onUpdate: function onUpdate(data, rule) {
    // It is a rules container like for e.g. ConditionalRule.
    if (rule.rules instanceof _RuleList2['default']) {
      rule.rules.update(data);
      return;
    }
    if (!(rule instanceof _StyleRule2['default'])) return;

    rule = rule;

    // If we have a fn values map, it is a rule with function values.
    if (rule[fnValuesNs]) {
      for (var prop in rule[fnValuesNs]) {
        rule.prop(prop, rule[fnValuesNs][prop](data));
      }
    }

    rule = rule;

    var fnStyle = rule[fnStyleNs];

    // If we have a style function, the entire rule is dynamic and style object
    // will be returned from that function.
    if (fnStyle) {
      var style = fnStyle(data);
      for (var _prop in style) {
        rule.prop(_prop, style[_prop]);
      }
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/observables.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _createRule = __webpack_require__("./node_modules/jss/lib/utils/createRule.js");

var _createRule2 = _interopRequireDefault(_createRule);

var _isObservable = __webpack_require__("./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  onCreateRule: function onCreateRule(name, decl, options) {
    if (!(0, _isObservable2['default'])(decl)) return null;

    // Cast `decl` to `Observable`, since it passed the type guard.
    var style$ = decl;

    var rule = (0, _createRule2['default'])(name, {}, options);

    // TODO
    // Call `stream.subscribe()` returns a subscription, which should be explicitly
    // unsubscribed from when we know this sheet is no longer needed.
    style$.subscribe(function (style) {
      for (var prop in style) {
        rule.prop(prop, style[prop]);
      }
    });

    return rule;
  },
  onProcessRule: function onProcessRule(rule) {
    if (!(rule instanceof _StyleRule2['default'])) return;
    var styleRule = rule;
    var style = styleRule.style;

    var _loop = function _loop(prop) {
      var value = style[prop];
      if (!(0, _isObservable2['default'])(value)) return 'continue';
      delete style[prop];
      value.subscribe({
        next: function next(nextValue) {
          styleRule.prop(prop, nextValue);
        }
      });
    };

    for (var prop in style) {
      var _ret = _loop(prop);

      if (_ret === 'continue') continue;
    }
  }
};

/***/ }),

/***/ "./node_modules/jss/lib/plugins/rules.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimpleRule = __webpack_require__("./node_modules/jss/lib/rules/SimpleRule.js");

var _SimpleRule2 = _interopRequireDefault(_SimpleRule);

var _KeyframesRule = __webpack_require__("./node_modules/jss/lib/rules/KeyframesRule.js");

var _KeyframesRule2 = _interopRequireDefault(_KeyframesRule);

var _ConditionalRule = __webpack_require__("./node_modules/jss/lib/rules/ConditionalRule.js");

var _ConditionalRule2 = _interopRequireDefault(_ConditionalRule);

var _FontFaceRule = __webpack_require__("./node_modules/jss/lib/rules/FontFaceRule.js");

var _FontFaceRule2 = _interopRequireDefault(_FontFaceRule);

var _ViewportRule = __webpack_require__("./node_modules/jss/lib/rules/ViewportRule.js");

var _ViewportRule2 = _interopRequireDefault(_ViewportRule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var classes = {
  '@charset': _SimpleRule2['default'],
  '@import': _SimpleRule2['default'],
  '@namespace': _SimpleRule2['default'],
  '@keyframes': _KeyframesRule2['default'],
  '@media': _ConditionalRule2['default'],
  '@supports': _ConditionalRule2['default'],
  '@font-face': _FontFaceRule2['default'],
  '@viewport': _ViewportRule2['default'],
  '@-ms-viewport': _ViewportRule2['default']

  /**
   * Generate plugins which will register all rules.
   */
};
var plugins = Object.keys(classes).map(function (key) {
  // https://jsperf.com/indexof-vs-substr-vs-regex-at-the-beginning-3
  var re = new RegExp('^' + key);
  var RuleClass = classes[key];
  var onCreateRule = function onCreateRule(name, decl, options) {
    return re.test(name) ? new RuleClass(name, decl, options) : null;
  };
  return { onCreateRule: onCreateRule };
});

exports['default'] = plugins;

/***/ }),

/***/ "./node_modules/jss/lib/renderers/DomRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _sheets = __webpack_require__("./node_modules/jss/lib/sheets.js");

var _sheets2 = _interopRequireDefault(_sheets);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Cache the value from the first time a function is called.
 */
var memoize = function memoize(fn) {
  var value = void 0;
  return function () {
    if (!value) value = fn();
    return value;
  };
};

/**
 * Get a style property value.
 */
function getPropertyValue(cssRule, prop) {
  try {
    return cssRule.style.getPropertyValue(prop);
  } catch (err) {
    // IE may throw if property is unknown.
    return '';
  }
}

/**
 * Set a style property.
 */
function setProperty(cssRule, prop, value) {
  try {
    var cssValue = value;

    if (Array.isArray(value)) {
      cssValue = (0, _toCssValue2['default'])(value, true);

      if (value[value.length - 1] === '!important') {
        cssRule.style.setProperty(prop, cssValue, 'important');
        return true;
      }
    }

    cssRule.style.setProperty(prop, cssValue);
  } catch (err) {
    // IE may throw if property is unknown.
    return false;
  }
  return true;
}

/**
 * Remove a style property.
 */
function removeProperty(cssRule, prop) {
  try {
    cssRule.style.removeProperty(prop);
  } catch (err) {
    (0, _warning2['default'])(false, '[JSS] DOMException "%s" was thrown. Tried to remove property "%s".', err.message, prop);
  }
}

var CSSRuleTypes = {
  STYLE_RULE: 1,
  KEYFRAMES_RULE: 7

  /**
   * Get the CSS Rule key.
   */

};var getKey = function () {
  var extractKey = function extractKey(cssText) {
    var from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    return cssText.substr(from, cssText.indexOf('{') - 1);
  };

  return function (cssRule) {
    if (cssRule.type === CSSRuleTypes.STYLE_RULE) return cssRule.selectorText;
    if (cssRule.type === CSSRuleTypes.KEYFRAMES_RULE) {
      var name = cssRule.name;

      if (name) return '@keyframes ' + name;

      // There is no rule.name in the following browsers:
      // - IE 9
      // - Safari 7.1.8
      // - Mobile Safari 9.0.0
      var cssText = cssRule.cssText;

      return '@' + extractKey(cssText, cssText.indexOf('keyframes'));
    }

    // Conditionals.
    return extractKey(cssRule.cssText);
  };
}();

/**
 * Set the selector.
 */
function setSelector(cssRule, selectorText) {
  cssRule.selectorText = selectorText;

  // Return false if setter was not successful.
  // Currently works in chrome only.
  return cssRule.selectorText === selectorText;
}

/**
 * Gets the `head` element upon the first call and caches it.
 */
var getHead = memoize(function () {
  return document.head || document.getElementsByTagName('head')[0];
});

/**
 * Gets a map of rule keys, where the property is an unescaped key and value
 * is a potentially escaped one.
 * It is used to identify CSS rules and the corresponding JSS rules. As an identifier
 * for CSSStyleRule we normally use `selectorText`. Though if original selector text
 * contains escaped code points e.g. `:not(#\\20)`, CSSOM will compile it to `:not(# )`
 * and so CSS rule's `selectorText` won't match JSS rule selector.
 *
 * https://www.w3.org/International/questions/qa-escapes#cssescapes
 */
var getUnescapedKeysMap = function () {
  var style = void 0;
  var isAttached = false;

  return function (rules) {
    var map = {};
    // https://github.com/facebook/flow/issues/2696
    if (!style) style = document.createElement('style');
    for (var i = 0; i < rules.length; i++) {
      var rule = rules[i];
      if (!(rule instanceof _StyleRule2['default'])) continue;
      var selector = rule.selector;
      // Only unescape selector over CSSOM if it contains a back slash.

      if (selector && selector.indexOf('\\') !== -1) {
        // Lazilly attach when needed.
        if (!isAttached) {
          getHead().appendChild(style);
          isAttached = true;
        }
        style.textContent = selector + ' {}';
        var _style = style,
            sheet = _style.sheet;

        if (sheet) {
          var cssRules = sheet.cssRules;

          if (cssRules) map[cssRules[0].selectorText] = rule.key;
        }
      }
    }
    if (isAttached) {
      getHead().removeChild(style);
      isAttached = false;
    }
    return map;
  };
}();

/**
 * Find attached sheet with an index higher than the passed one.
 */
function findHigherSheet(registry, options) {
  for (var i = 0; i < registry.length; i++) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.index > options.index && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find attached sheet with the highest index.
 */
function findHighestSheet(registry, options) {
  for (var i = registry.length - 1; i >= 0; i--) {
    var sheet = registry[i];
    if (sheet.attached && sheet.options.insertionPoint === options.insertionPoint) {
      return sheet;
    }
  }
  return null;
}

/**
 * Find a comment with "jss" inside.
 */
function findCommentNode(text) {
  var head = getHead();
  for (var i = 0; i < head.childNodes.length; i++) {
    var node = head.childNodes[i];
    if (node.nodeType === 8 && node.nodeValue.trim() === text) {
      return node;
    }
  }
  return null;
}

/**
 * Find a node before which we can insert the sheet.
 */
function findPrevNode(options) {
  var registry = _sheets2['default'].registry;


  if (registry.length > 0) {
    // Try to insert before the next higher sheet.
    var sheet = findHigherSheet(registry, options);
    if (sheet) return sheet.renderer.element;

    // Otherwise insert after the last attached.
    sheet = findHighestSheet(registry, options);
    if (sheet) return sheet.renderer.element.nextElementSibling;
  }

  // Try to find a comment placeholder if registry is empty.
  var insertionPoint = options.insertionPoint;

  if (insertionPoint && typeof insertionPoint === 'string') {
    var comment = findCommentNode(insertionPoint);
    if (comment) return comment.nextSibling;
    // If user specifies an insertion point and it can't be found in the document -
    // bad specificity issues may appear.
    (0, _warning2['default'])(insertionPoint === 'jss', '[JSS] Insertion point "%s" not found.', insertionPoint);
  }

  return null;
}

/**
 * Insert style element into the DOM.
 */
function insertStyle(style, options) {
  var insertionPoint = options.insertionPoint;

  var prevNode = findPrevNode(options);

  if (prevNode) {
    var parentNode = prevNode.parentNode;

    if (parentNode) parentNode.insertBefore(style, prevNode);
    return;
  }

  // Works with iframes and any node types.
  if (insertionPoint && typeof insertionPoint.nodeType === 'number') {
    // https://stackoverflow.com/questions/41328728/force-casting-in-flow
    var insertionPointElement = insertionPoint;
    var _parentNode = insertionPointElement.parentNode;

    if (_parentNode) _parentNode.insertBefore(style, insertionPointElement.nextSibling);else (0, _warning2['default'])(false, '[JSS] Insertion point is not in the DOM.');
    return;
  }

  getHead().insertBefore(style, prevNode);
}

/**
 * Read jss nonce setting from the page if the user has set it.
 */
var getNonce = memoize(function () {
  var node = document.querySelector('meta[property="csp-nonce"]');
  return node ? node.getAttribute('content') : null;
});

var DomRenderer = function () {
  function DomRenderer(sheet) {
    _classCallCheck(this, DomRenderer);

    this.getPropertyValue = getPropertyValue;
    this.setProperty = setProperty;
    this.removeProperty = removeProperty;
    this.setSelector = setSelector;
    this.getKey = getKey;
    this.getUnescapedKeysMap = getUnescapedKeysMap;
    this.hasInsertedRules = false;

    // There is no sheet when the renderer is used from a standalone StyleRule.
    if (sheet) _sheets2['default'].add(sheet);

    this.sheet = sheet;

    var _ref = this.sheet ? this.sheet.options : {},
        media = _ref.media,
        meta = _ref.meta,
        element = _ref.element;

    this.element = element || document.createElement('style');
    this.element.setAttribute('data-jss', '');
    if (media) this.element.setAttribute('media', media);
    if (meta) this.element.setAttribute('data-meta', meta);
    var nonce = getNonce();
    if (nonce) this.element.setAttribute('nonce', nonce);
  }

  /**
   * Insert style element into render tree.
   */


  // HTMLStyleElement needs fixing https://github.com/facebook/flow/issues/2696


  _createClass(DomRenderer, [{
    key: 'attach',
    value: function attach() {
      // In the case the element node is external and it is already in the DOM.
      if (this.element.parentNode || !this.sheet) return;

      // When rules are inserted using `insertRule` API, after `sheet.detach().attach()`
      // browsers remove those rules.
      // TODO figure out if its a bug and if it is known.
      // Workaround is to redeploy the sheet before attaching as a string.
      if (this.hasInsertedRules) {
        this.deploy();
        this.hasInsertedRules = false;
      }

      insertStyle(this.element, this.sheet.options);
    }

    /**
     * Remove style element from render tree.
     */

  }, {
    key: 'detach',
    value: function detach() {
      this.element.parentNode.removeChild(this.element);
    }

    /**
     * Inject CSS string into element.
     */

  }, {
    key: 'deploy',
    value: function deploy() {
      if (!this.sheet) return;
      this.element.textContent = '\n' + this.sheet.toString() + '\n';
    }

    /**
     * Insert a rule into element.
     */

  }, {
    key: 'insertRule',
    value: function insertRule(rule, index) {
      var sheet = this.element.sheet;
      var cssRules = sheet.cssRules;

      var str = rule.toString();
      if (!index) index = cssRules.length;

      if (!str) return false;

      try {
        sheet.insertRule(str, index);
      } catch (err) {
        (0, _warning2['default'])(false, '[JSS] Can not insert an unsupported rule \n\r%s', rule);
        return false;
      }
      this.hasInsertedRules = true;

      return cssRules[index];
    }

    /**
     * Delete a rule.
     */

  }, {
    key: 'deleteRule',
    value: function deleteRule(cssRule) {
      var sheet = this.element.sheet;

      var index = this.indexOf(cssRule);
      if (index === -1) return false;
      sheet.deleteRule(index);
      return true;
    }

    /**
     * Get index of a CSS Rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(cssRule) {
      var cssRules = this.element.sheet.cssRules;

      for (var _index = 0; _index < cssRules.length; _index++) {
        if (cssRule === cssRules[_index]) return _index;
      }
      return -1;
    }

    /**
     * Generate a new CSS rule and replace the existing one.
     */

  }, {
    key: 'replaceRule',
    value: function replaceRule(cssRule, rule) {
      var index = this.indexOf(cssRule);
      var newCssRule = this.insertRule(rule, index);
      this.element.sheet.deleteRule(index);
      return newCssRule;
    }

    /**
     * Get all rules elements.
     */

  }, {
    key: 'getRules',
    value: function getRules() {
      return this.element.sheet.cssRules;
    }
  }]);

  return DomRenderer;
}();

exports['default'] = DomRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/renderers/VirtualRenderer.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/* eslint-disable class-methods-use-this */

/**
 * Rendering backend to do nothing in nodejs.
 */
var VirtualRenderer = function () {
  function VirtualRenderer() {
    _classCallCheck(this, VirtualRenderer);
  }

  _createClass(VirtualRenderer, [{
    key: 'setProperty',
    value: function setProperty() {
      return true;
    }
  }, {
    key: 'getPropertyValue',
    value: function getPropertyValue() {
      return '';
    }
  }, {
    key: 'removeProperty',
    value: function removeProperty() {}
  }, {
    key: 'setSelector',
    value: function setSelector() {
      return true;
    }
  }, {
    key: 'getKey',
    value: function getKey() {
      return '';
    }
  }, {
    key: 'attach',
    value: function attach() {}
  }, {
    key: 'detach',
    value: function detach() {}
  }, {
    key: 'deploy',
    value: function deploy() {}
  }, {
    key: 'insertRule',
    value: function insertRule() {
      return false;
    }
  }, {
    key: 'deleteRule',
    value: function deleteRule() {
      return true;
    }
  }, {
    key: 'replaceRule',
    value: function replaceRule() {
      return false;
    }
  }, {
    key: 'getRules',
    value: function getRules() {}
  }, {
    key: 'indexOf',
    value: function indexOf() {
      return -1;
    }
  }]);

  return VirtualRenderer;
}();

exports['default'] = VirtualRenderer;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ConditionalRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Conditional rule for @media, @supports
 */
var ConditionalRule = function () {
  function ConditionalRule(key, styles, options) {
    _classCallCheck(this, ConditionalRule);

    this.type = 'conditional';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in styles) {
      this.rules.add(name, styles[name]);
    }

    this.rules.process();
  }

  /**
   * Get a rule.
   */


  _createClass(ConditionalRule, [{
    key: 'getRule',
    value: function getRule(name) {
      return this.rules.get(name);
    }

    /**
     * Get index of a rule.
     */

  }, {
    key: 'indexOf',
    value: function indexOf(rule) {
      return this.rules.indexOf(rule);
    }

    /**
     * Create and register rule, run plugins.
     */

  }, {
    key: 'addRule',
    value: function addRule(name, style, options) {
      var rule = this.rules.add(name, style, options);
      this.options.jss.plugins.onProcessRule(rule);
      return rule;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      return inner ? this.key + ' {\n' + inner + '\n}' : '';
    }
  }]);

  return ConditionalRule;
}();

exports['default'] = ConditionalRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/FontFaceRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FontFaceRule = function () {
  function FontFaceRule(key, style, options) {
    _classCallCheck(this, FontFaceRule);

    this.type = 'font-face';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(FontFaceRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.style)) {
        var str = '';
        for (var index = 0; index < this.style.length; index++) {
          str += (0, _toCss2['default'])(this.key, this.style[index]);
          if (this.style[index + 1]) str += '\n';
        }
        return str;
      }

      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return FontFaceRule;
}();

exports['default'] = FontFaceRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/KeyframesRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RuleList = __webpack_require__("./node_modules/jss/lib/RuleList.js");

var _RuleList2 = _interopRequireDefault(_RuleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Rule for @keyframes
 */
var KeyframesRule = function () {
  function KeyframesRule(key, frames, options) {
    _classCallCheck(this, KeyframesRule);

    this.type = 'keyframes';
    this.isProcessed = false;

    this.key = key;
    this.options = options;
    this.rules = new _RuleList2['default'](_extends({}, options, { parent: this }));

    for (var name in frames) {
      this.rules.add(name, frames[name], _extends({}, this.options, {
        parent: this,
        selector: name
      }));
    }

    this.rules.process();
  }

  /**
   * Generates a CSS string.
   */


  _createClass(KeyframesRule, [{
    key: 'toString',
    value: function toString() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { indent: 1 };

      var inner = this.rules.toString(options);
      if (inner) inner += '\n';
      return this.key + ' {\n' + inner + '}';
    }
  }]);

  return KeyframesRule;
}();

exports['default'] = KeyframesRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/SimpleRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimpleRule = function () {
  function SimpleRule(key, value, options) {
    _classCallCheck(this, SimpleRule);

    this.type = 'simple';
    this.isProcessed = false;

    this.key = key;
    this.value = value;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */
  // eslint-disable-next-line no-unused-vars


  _createClass(SimpleRule, [{
    key: 'toString',
    value: function toString(options) {
      if (Array.isArray(this.value)) {
        var str = '';
        for (var index = 0; index < this.value.length; index++) {
          str += this.key + ' ' + this.value[index] + ';';
          if (this.value[index + 1]) str += '\n';
        }
        return str;
      }

      return this.key + ' ' + this.value + ';';
    }
  }]);

  return SimpleRule;
}();

exports['default'] = SimpleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/StyleRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StyleRule = function () {
  function StyleRule(key, style, options) {
    _classCallCheck(this, StyleRule);

    this.type = 'style';
    this.isProcessed = false;
    var sheet = options.sheet,
        Renderer = options.Renderer,
        selector = options.selector;

    this.key = key;
    this.options = options;
    this.style = style;
    if (selector) this.selectorText = selector;
    this.renderer = sheet ? sheet.renderer : new Renderer();
  }

  /**
   * Set selector string.
   * Attention: use this with caution. Most browsers didn't implement
   * selectorText setter, so this may result in rerendering of entire Style Sheet.
   */


  _createClass(StyleRule, [{
    key: 'prop',


    /**
     * Get or set a style property.
     */
    value: function prop(name, value) {
      // It's a getter.
      if (value === undefined) return this.style[name];

      // Don't do anything if the value has not changed.
      if (this.style[name] === value) return this;

      value = this.options.jss.plugins.onChangeValue(value, name, this);

      var isEmpty = value == null || value === false;
      var isDefined = name in this.style;

      // Value is empty and wasn't defined before.
      if (isEmpty && !isDefined) return this;

      // We are going to remove this value.
      var remove = isEmpty && isDefined;

      if (remove) delete this.style[name];else this.style[name] = value;

      // Renderable is defined if StyleSheet option `link` is true.
      if (this.renderable) {
        if (remove) this.renderer.removeProperty(this.renderable, name);else this.renderer.setProperty(this.renderable, name, value);
        return this;
      }

      var sheet = this.options.sheet;

      if (sheet && sheet.attached) {
        (0, _warning2['default'])(false, 'Rule is not linked. Missing sheet option "link: true".');
      }
      return this;
    }

    /**
     * Apply rule to an element inline.
     */

  }, {
    key: 'applyTo',
    value: function applyTo(renderable) {
      var json = this.toJSON();
      for (var prop in json) {
        this.renderer.setProperty(renderable, prop, json[prop]);
      }return this;
    }

    /**
     * Returns JSON representation of the rule.
     * Fallbacks are not supported.
     * Useful for inline styles.
     */

  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};
      for (var prop in this.style) {
        var value = this.style[prop];
        if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) !== 'object') json[prop] = value;else if (Array.isArray(value)) json[prop] = (0, _toCssValue2['default'])(value);
      }
      return json;
    }

    /**
     * Generates a CSS string.
     */

  }, {
    key: 'toString',
    value: function toString(options) {
      var sheet = this.options.sheet;

      var link = sheet ? sheet.options.link : false;
      var opts = link ? _extends({}, options, { allowEmpty: true }) : options;
      return (0, _toCss2['default'])(this.selector, this.style, opts);
    }
  }, {
    key: 'selector',
    set: function set(selector) {
      if (selector === this.selectorText) return;

      this.selectorText = selector;

      if (!this.renderable) return;

      var hasChanged = this.renderer.setSelector(this.renderable, selector);

      // If selector setter is not implemented, rerender the rule.
      if (!hasChanged && this.renderable) {
        var renderable = this.renderer.replaceRule(this.renderable, this);
        if (renderable) this.renderable = renderable;
      }
    }

    /**
     * Get selector string.
     */
    ,
    get: function get() {
      return this.selectorText;
    }
  }]);

  return StyleRule;
}();

exports['default'] = StyleRule;

/***/ }),

/***/ "./node_modules/jss/lib/rules/ViewportRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _toCss = __webpack_require__("./node_modules/jss/lib/utils/toCss.js");

var _toCss2 = _interopRequireDefault(_toCss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ViewportRule = function () {
  function ViewportRule(key, style, options) {
    _classCallCheck(this, ViewportRule);

    this.type = 'viewport';
    this.isProcessed = false;

    this.key = key;
    this.style = style;
    this.options = options;
  }

  /**
   * Generates a CSS string.
   */


  _createClass(ViewportRule, [{
    key: 'toString',
    value: function toString(options) {
      return (0, _toCss2['default'])(this.key, this.style, options);
    }
  }]);

  return ViewportRule;
}();

exports['default'] = ViewportRule;

/***/ }),

/***/ "./node_modules/jss/lib/sheets.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SheetsRegistry = __webpack_require__("./node_modules/jss/lib/SheetsRegistry.js");

var _SheetsRegistry2 = _interopRequireDefault(_SheetsRegistry);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * This is a global sheets registry. Only DomRenderer will add sheets to it.
 * On the server one should use an own SheetsRegistry instance and add the
 * sheets to it, because you need to make sure to create a new registry for
 * each request in order to not leak sheets across requests.
 */
exports['default'] = new _SheetsRegistry2['default']();

/***/ }),

/***/ "./node_modules/jss/lib/utils/cloneStyle.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = cloneStyle;

var _isObservable = __webpack_require__("./node_modules/jss/lib/utils/isObservable.js");

var _isObservable2 = _interopRequireDefault(_isObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var isArray = Array.isArray;
function cloneStyle(style) {
  // Support empty values in case user ends up with them by accident.
  if (style == null) return style;

  // Support string value for SimpleRule.
  var typeOfStyle = typeof style === 'undefined' ? 'undefined' : _typeof(style);

  if (typeOfStyle === 'string' || typeOfStyle === 'number' || typeOfStyle === 'function') {
    return style;
  }

  // Support array for FontFaceRule.
  if (isArray(style)) return style.map(cloneStyle);

  // Support Observable styles.  Observables are immutable, so we don't need to
  // copy them.
  if ((0, _isObservable2['default'])(style)) return style;

  var newStyle = {};
  for (var name in style) {
    var value = style[name];
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
      newStyle[name] = cloneStyle(value);
      continue;
    }
    newStyle[name] = value;
  }

  return newStyle;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/createGenerateClassName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleSheet = __webpack_require__("./node_modules/jss/lib/StyleSheet.js");

var _StyleSheet2 = _interopRequireDefault(_StyleSheet);

var _moduleId = __webpack_require__("./node_modules/jss/lib/utils/moduleId.js");

var _moduleId2 = _interopRequireDefault(_moduleId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var maxRules = 1e10;


var env = "development";

/**
 * Returns a function which generates unique class names based on counters.
 * When new generator function is created, rule counter is reseted.
 * We need to reset the rule counter for SSR for each request.
 */

exports['default'] = function () {
  var ruleCounter = 0;
  var defaultPrefix = env === 'production' ? 'c' : '';

  return function (rule, sheet) {
    ruleCounter += 1;

    if (ruleCounter > maxRules) {
      (0, _warning2['default'])(false, '[JSS] You might have a memory leak. Rule counter is at %s.', ruleCounter);
    }

    var prefix = defaultPrefix;
    var jssId = '';

    if (sheet) {
      prefix = sheet.options.classNamePrefix || defaultPrefix;
      if (sheet.options.jss.id != null) jssId += sheet.options.jss.id;
    }

    if (env === 'production') {
      return '' + prefix + _moduleId2['default'] + jssId + ruleCounter;
    }

    return prefix + rule.key + '-' + _moduleId2['default'] + (jssId && '-' + jssId) + '-' + ruleCounter;
  };
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/createRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = createRule;

var _warning = __webpack_require__("./node_modules/jss/node_modules/warning/browser.js");

var _warning2 = _interopRequireDefault(_warning);

var _StyleRule = __webpack_require__("./node_modules/jss/lib/rules/StyleRule.js");

var _StyleRule2 = _interopRequireDefault(_StyleRule);

var _cloneStyle = __webpack_require__("./node_modules/jss/lib/utils/cloneStyle.js");

var _cloneStyle2 = _interopRequireDefault(_cloneStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Create a rule instance.
 */
function createRule() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'unnamed';
  var decl = arguments[1];
  var options = arguments[2];
  var jss = options.jss;

  var declCopy = (0, _cloneStyle2['default'])(decl);

  var rule = jss.plugins.onCreateRule(name, declCopy, options);
  if (rule) return rule;

  // It is an at-rule and it has no instance.
  if (name[0] === '@') {
    (0, _warning2['default'])(false, '[JSS] Unknown at-rule %s', name);
  }

  return new _StyleRule2['default'](name, declCopy, options);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/escape.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var CSS = global.CSS;

var env = "development";

var escapeRegex = /([[\].#*$><+~=|^:(),"'`])/g;

exports['default'] = function (str) {
  // We don't need to escape it in production, because we are not using user's
  // input for selectors, we are generating a valid selector.
  if (env === 'production') return str;

  if (!CSS || !CSS.escape) {
    return str.replace(escapeRegex, '\\$1');
  }

  return CSS.escape(str);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/getDynamicStyles.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports['default'] = getDynamicStyles;
/**
 * Extracts a styles object with only props that contain function values.
 */
function getDynamicStyles(styles) {
  var to = null;

  for (var key in styles) {
    var value = styles[key];
    var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);

    if (type === 'function') {
      if (!to) to = {};
      to[key] = value;
    } else if (type === 'object' && value !== null && !Array.isArray(value)) {
      var extracted = getDynamicStyles(value);
      if (extracted) {
        if (!to) to = {};
        to[key] = extracted;
      }
    }
  }

  return to;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/isObservable.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _symbolObservable = __webpack_require__("./node_modules/jss/node_modules/symbol-observable/es/index.js");

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = function (value) {
  return value && value[_symbolObservable2['default']] && value === value[_symbolObservable2['default']]();
};

/***/ }),

/***/ "./node_modules/jss/lib/utils/linkRule.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = linkRule;
/**
 * Link rule with CSSStyleRule and nested rules with corresponding nested cssRules if both exists.
 */
function linkRule(rule, cssRule) {
  rule.renderable = cssRule;
  if (rule.rules && cssRule.cssRules) rule.rules.link(cssRule.cssRules);
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/moduleId.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ns = '2f1acc6c3a606b082e5eef5e54414ffb';
if (global[ns] == null) global[ns] = 0;

// Bundle may contain multiple JSS versions at the same time. In order to identify
// the current version with just one short number and use it for classes generation
// we use a counter. Also it is more accurate, because user can manually reevaluate
// the module.
exports['default'] = global[ns]++;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCss.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCss;

var _toCssValue = __webpack_require__("./node_modules/jss/lib/utils/toCssValue.js");

var _toCssValue2 = _interopRequireDefault(_toCssValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Indent a string.
 * http://jsperf.com/array-join-vs-for
 */
function indentStr(str, indent) {
  var result = '';
  for (var index = 0; index < indent; index++) {
    result += '  ';
  }return result + str;
}

/**
 * Converts a Rule to CSS string.
 */

function toCss(selector, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var result = '';

  if (!style) return result;

  var _options$indent = options.indent,
      indent = _options$indent === undefined ? 0 : _options$indent;
  var fallbacks = style.fallbacks;


  indent++;

  // Apply fallbacks first.
  if (fallbacks) {
    // Array syntax {fallbacks: [{prop: value}]}
    if (Array.isArray(fallbacks)) {
      for (var index = 0; index < fallbacks.length; index++) {
        var fallback = fallbacks[index];
        for (var prop in fallback) {
          var value = fallback[prop];
          if (value != null) {
            result += '\n' + indentStr(prop + ': ' + (0, _toCssValue2['default'])(value) + ';', indent);
          }
        }
      }
    } else {
      // Object syntax {fallbacks: {prop: value}}
      for (var _prop in fallbacks) {
        var _value = fallbacks[_prop];
        if (_value != null) {
          result += '\n' + indentStr(_prop + ': ' + (0, _toCssValue2['default'])(_value) + ';', indent);
        }
      }
    }
  }

  for (var _prop2 in style) {
    var _value2 = style[_prop2];
    if (_value2 != null && _prop2 !== 'fallbacks') {
      result += '\n' + indentStr(_prop2 + ': ' + (0, _toCssValue2['default'])(_value2) + ';', indent);
    }
  }

  // Allow empty style in this case, because properties will be added dynamically.
  if (!result && !options.allowEmpty) return result;

  indent--;
  result = indentStr(selector + ' {' + result + '\n', indent) + indentStr('}', indent);

  return result;
}

/***/ }),

/***/ "./node_modules/jss/lib/utils/toCssValue.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = toCssValue;
var join = function join(value, by) {
  var result = '';
  for (var i = 0; i < value.length; i++) {
    // Remove !important from the value, it will be readded later.
    if (value[i] === '!important') break;
    if (result) result += by;
    result += value[i];
  }
  return result;
};

/**
 * Converts array values to string.
 *
 * `margin: [['5px', '10px']]` > `margin: 5px 10px;`
 * `border: ['1px', '2px']` > `border: 1px, 2px;`
 * `margin: [['5px', '10px'], '!important']` > `margin: 5px 10px !important;`
 * `color: ['red', !important]` > `color: red !important;`
 */
function toCssValue(value) {
  var ignoreImportant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (!Array.isArray(value)) return value;

  var cssValue = '';

  // Support space separated values via `[['5px', '10px']]`.
  if (Array.isArray(value[0])) {
    for (var i = 0; i < value.length; i++) {
      if (value[i] === '!important') break;
      if (cssValue) cssValue += ', ';
      cssValue += join(value[i], ' ');
    }
  } else cssValue = join(value, ', ');

  // Add !important, because it was ignored.
  if (!ignoreImportant && value[value.length - 1] === '!important') {
    cssValue += ' !important';
  }

  return cssValue;
}

/***/ }),

/***/ "./node_modules/jss/node_modules/symbol-observable/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__("./node_modules/jss/node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js"), __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/jss/node_modules/symbol-observable/es/ponyfill.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/jss/node_modules/warning/browser.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (true) {
  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (format.length < 10 || (/^[s\W]*$/).test(format)) {
      throw new Error(
        'The warning format should be able to uniquely identify this ' +
        'warning. Please, use a more descriptive format than: ' + format
      );
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' +
        format.replace(/%s/g, function() {
          return args[argIndex++];
        });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch(x) {}
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/keycode/index.js":
/***/ (function(module, exports) {

// Source: http://jsfiddle.net/vWx8V/
// http://stackoverflow.com/questions/5603195/full-list-of-javascript-keycodes

/**
 * Conenience method returns corresponding value for given keyName or keyCode.
 *
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Mixed}
 * @api public
 */

function keyCode(searchInput) {
  // Keyboard Events
  if (searchInput && 'object' === typeof searchInput) {
    var hasKeyCode = searchInput.which || searchInput.keyCode || searchInput.charCode
    if (hasKeyCode) searchInput = hasKeyCode
  }

  // Numbers
  if ('number' === typeof searchInput) return names[searchInput]

  // Everything else (cast to string)
  var search = String(searchInput)

  // check codes
  var foundNamedKey = codes[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // check aliases
  var foundNamedKey = aliases[search.toLowerCase()]
  if (foundNamedKey) return foundNamedKey

  // weird character?
  if (search.length === 1) return search.charCodeAt(0)

  return undefined
}

/**
 * Compares a keyboard event with a given keyCode or keyName.
 *
 * @param {Event} event Keyboard event that should be tested
 * @param {Mixed} keyCode {Number} or keyName {String}
 * @return {Boolean}
 * @api public
 */
keyCode.isEventKey = function isEventKey(event, nameOrCode) {
  if (event && 'object' === typeof event) {
    var keyCode = event.which || event.keyCode || event.charCode
    if (keyCode === null || keyCode === undefined) { return false; }
    if (typeof nameOrCode === 'string') {
      // check codes
      var foundNamedKey = codes[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    
      // check aliases
      var foundNamedKey = aliases[nameOrCode.toLowerCase()]
      if (foundNamedKey) { return foundNamedKey === keyCode; }
    } else if (typeof nameOrCode === 'number') {
      return nameOrCode === keyCode;
    }
    return false;
  }
}

exports = module.exports = keyCode;

/**
 * Get by name
 *
 *   exports.code['enter'] // => 13
 */

var codes = exports.code = exports.codes = {
  'backspace': 8,
  'tab': 9,
  'enter': 13,
  'shift': 16,
  'ctrl': 17,
  'alt': 18,
  'pause/break': 19,
  'caps lock': 20,
  'esc': 27,
  'space': 32,
  'page up': 33,
  'page down': 34,
  'end': 35,
  'home': 36,
  'left': 37,
  'up': 38,
  'right': 39,
  'down': 40,
  'insert': 45,
  'delete': 46,
  'command': 91,
  'left command': 91,
  'right command': 93,
  'numpad *': 106,
  'numpad +': 107,
  'numpad -': 109,
  'numpad .': 110,
  'numpad /': 111,
  'num lock': 144,
  'scroll lock': 145,
  'my computer': 182,
  'my calculator': 183,
  ';': 186,
  '=': 187,
  ',': 188,
  '-': 189,
  '.': 190,
  '/': 191,
  '`': 192,
  '[': 219,
  '\\': 220,
  ']': 221,
  "'": 222
}

// Helper aliases

var aliases = exports.aliases = {
  'windows': 91,
  '⇧': 16,
  '⌥': 18,
  '⌃': 17,
  '⌘': 91,
  'ctl': 17,
  'control': 17,
  'option': 18,
  'pause': 19,
  'break': 19,
  'caps': 20,
  'return': 13,
  'escape': 27,
  'spc': 32,
  'spacebar': 32,
  'pgup': 33,
  'pgdn': 34,
  'ins': 45,
  'del': 46,
  'cmd': 91
}

/*!
 * Programatically add the following
 */

// lower case chars
for (i = 97; i < 123; i++) codes[String.fromCharCode(i)] = i - 32

// numbers
for (var i = 48; i < 58; i++) codes[i - 48] = i

// function keys
for (i = 1; i < 13; i++) codes['f'+i] = i + 111

// numpad keys
for (i = 0; i < 10; i++) codes['numpad '+i] = i + 96

/**
 * Get by code
 *
 *   exports.name[13] // => 'Enter'
 */

var names = exports.names = exports.title = {} // title for backward compat

// Create reverse mapping
for (i in codes) names[codes[i]] = i

// Add aliases
for (var alias in aliases) {
  codes[alias] = aliases[alias]
}


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/arrayWithoutHoles.js":
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/assertThisInitialized.js":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js":
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js":
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/extends.js":
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js":
/***/ (function(module, exports) {

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireDefault.js":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/interopRequireWildcard.js":
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/iterableToArray.js":
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/nonIterableSpread.js":
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js":
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/defineProperty.js");

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      defineProperty(target, key, source[key]);
    });
  }

  return target;
}

module.exports = _objectSpread;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js":
/***/ (function(module, exports) {

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/typeof.js");

var assertThisInitialized = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/toConsumableArray.js":
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/iterableToArray.js");

var nonIterableSpread = __webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/builtin/typeof.js":
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/popper.js/dist/esm/popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.3
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && parent.nodeName === 'HTML') {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // Avoid blurry text by using full pixel integers.
  // For pixel-perfect positioning, top/bottom prefers rounded
  // values, while left/right prefers floored values.
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.round(popper.top),
    bottom: Math.round(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/react-event-listener/dist/react-event-listener.cjs.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var _classCallCheck = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/classCallCheck.js"));
var _createClass = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/createClass.js"));
var _possibleConstructorReturn = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/possibleConstructorReturn.js"));
var _inherits = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/inherits.js"));
var _typeof = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/typeof.js"));
var _objectWithoutProperties = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectWithoutProperties.js"));
var _objectSpread = _interopDefault(__webpack_require__("./node_modules/next/node_modules/@babel/runtime/helpers/builtin/objectSpread.js"));
var React = _interopDefault(__webpack_require__("./node_modules/react/cjs/react.development.js"));
var PropTypes = _interopDefault(__webpack_require__("./node_modules/next/node_modules/prop-types/index.js"));
var warning = _interopDefault(__webpack_require__("./node_modules/warning/warning.js"));

function defineProperty(object, property, attr) {
  return Object.defineProperty(object, property, attr);
} // Passive options
// Inspired by https://github.com/Modernizr/Modernizr/blob/master/feature-detects/dom/passiveeventlisteners.js


var passiveOption = function () {
  var cache = null;
  return function () {
    if (cache !== null) {
      return cache;
    }

    var supportsPassiveOption = false;

    try {
      window.addEventListener('test', null, defineProperty({}, 'passive', {
        get: function get() {
          supportsPassiveOption = true;
        }
      }));
    } catch (err) {//
    }

    cache = supportsPassiveOption;
    return supportsPassiveOption;
  }();
}();

var defaultEventOptions = {
  capture: false,
  passive: false
};

function mergeDefaultEventOptions(options) {
  return _objectSpread({}, defaultEventOptions, options);
}

function getEventListenerArgs(eventName, callback, options) {
  var args = [eventName, callback];
  args.push(passiveOption ? options : options.capture);
  return args;
}

function on(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.addEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function off(target, eventName, callback, options) {
  // eslint-disable-next-line prefer-spread
  target.removeEventListener.apply(target, getEventListenerArgs(eventName, callback, options));
}

function forEachListener(props, iteratee) {
  var children = props.children,
      target = props.target,
      eventProps = _objectWithoutProperties(props, ["children", "target"]);

  Object.keys(eventProps).forEach(function (name) {
    if (name.substring(0, 2) !== 'on') {
      return;
    }

    var prop = eventProps[name];

    var type = _typeof(prop);

    var isObject = type === 'object';
    var isFunction = type === 'function';

    if (!isObject && !isFunction) {
      return;
    }

    var capture = name.substr(-7).toLowerCase() === 'capture';
    var eventName = name.substring(2).toLowerCase();
    eventName = capture ? eventName.substring(0, eventName.length - 7) : eventName;

    if (isObject) {
      iteratee(eventName, prop.handler, prop.options);
    } else {
      iteratee(eventName, prop, mergeDefaultEventOptions({
        capture: capture
      }));
    }
  });
}

function withOptions(handler, options) {
   true ? warning(options, 'react-event-listener: should be specified options in withOptions.') : void 0;
  return {
    handler: handler,
    options: mergeDefaultEventOptions(options)
  };
}

var EventListener =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(EventListener, _React$PureComponent);

  function EventListener() {
    _classCallCheck(this, EventListener);

    return _possibleConstructorReturn(this, (EventListener.__proto__ || Object.getPrototypeOf(EventListener)).apply(this, arguments));
  }

  _createClass(EventListener, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.applyListeners(on);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      this.applyListeners(off, prevProps);
      this.applyListeners(on);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.applyListeners(off);
    }
  }, {
    key: "applyListeners",
    value: function applyListeners(onOrOff) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.props;
      var target = props.target;

      if (target) {
        var element = target;

        if (typeof target === 'string') {
          element = window[target];
        }

        forEachListener(props, onOrOff.bind(null, element));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return this.props.children || null;
    }
  }]);

  return EventListener;
}(React.PureComponent);

EventListener.propTypes =  true ? {
  /**
   * You can provide a single child too.
   */
  children: PropTypes.node,

  /**
   * The DOM target to listen to.
   */
  target: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired
} : {};

exports.withOptions = withOptions;
exports.default = EventListener;


/***/ }),

/***/ "./node_modules/react-jss/lib/contextTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ns$jss$ns$sheetOptio;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _ns = __webpack_require__("./node_modules/react-jss/lib/ns.js");

var ns = _interopRequireWildcard(_ns);

var _propTypes2 = __webpack_require__("./node_modules/react-jss/lib/propTypes.js");

var _propTypes3 = _interopRequireDefault(_propTypes2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports['default'] = (_ns$jss$ns$sheetOptio = {}, _defineProperty(_ns$jss$ns$sheetOptio, ns.jss, _propTypes3['default'].jss), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetOptions, _propTypes.object), _defineProperty(_ns$jss$ns$sheetOptio, ns.sheetsRegistry, _propTypes3['default'].registry), _defineProperty(_ns$jss$ns$sheetOptio, ns.managers, _propTypes.object), _ns$jss$ns$sheetOptio);

/***/ }),

/***/ "./node_modules/react-jss/lib/ns.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Namespaces to avoid conflicts on the context.
 */
var jss = exports.jss = '64a55d578f856d258dc345b094a2a2b3';
var sheetsRegistry = exports.sheetsRegistry = 'd4bd0baacbc52bbd48bbb9eb24344ecd';
var managers = exports.managers = 'b768b78919504fba9de2c03545c5cd3a';
var sheetOptions = exports.sheetOptions = '6fc570d6bd61383819d0f9e7407c452d';

/***/ }),

/***/ "./node_modules/react-jss/lib/propTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

exports['default'] = {
  jss: (0, _propTypes.shape)({
    options: (0, _propTypes.shape)({
      createGenerateClassName: _propTypes.func.isRequired
    }).isRequired,
    createStyleSheet: _propTypes.func.isRequired,
    removeStyleSheet: _propTypes.func.isRequired
  }),
  registry: (0, _propTypes.shape)({
    add: _propTypes.func.isRequired,
    toString: _propTypes.func.isRequired
  })
};

/***/ }),

/***/ "./node_modules/react-popper/lib/Arrow.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Arrow = function Arrow(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'span' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popper = context.popper;

  var arrowRef = function arrowRef(node) {
    popper.setArrowNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };
  var arrowStyle = popper.getArrowStyle();

  if (typeof children === 'function') {
    var arrowProps = {
      ref: arrowRef,
      style: arrowStyle
    };
    return children({ arrowProps: arrowProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps, {
    style: _extends({}, arrowStyle, restProps.style)
  });

  if (typeof component === 'string') {
    componentProps.ref = arrowRef;
  } else {
    componentProps.innerRef = arrowRef;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, componentProps, children);
};

Arrow.contextTypes = {
  popper: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

Arrow.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

/* harmony default export */ __webpack_exports__["a"] = (Arrow);

/***/ }),

/***/ "./node_modules/react-popper/lib/Manager.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var Manager = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Manager);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Manager.__proto__ || Object.getPrototypeOf(Manager)).call.apply(_ref, [this].concat(args))), _this), _this._setTargetNode = function (node) {
      _this._targetNode = node;
    }, _this._getTargetNode = function () {
      return _this._targetNode;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Manager, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popperManager: {
          setTargetNode: this._setTargetNode,
          getTargetNode: this._getTargetNode
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          tag = _props.tag,
          children = _props.children,
          restProps = _objectWithoutProperties(_props, ['tag', 'children']);

      if (tag !== false) {
        return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(tag, restProps, children);
      } else {
        return children;
      }
    }
  }]);

  return Manager;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Manager.childContextTypes = {
  popperManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
Manager.propTypes = {
  tag: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool]),
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};
Manager.defaultProps = {
  tag: 'div'
};


/* harmony default export */ __webpack_exports__["a"] = (Manager);

/***/ }),

/***/ "./node_modules/react-popper/lib/Popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return placements; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_popper_js__ = __webpack_require__("./node_modules/popper.js/dist/esm/popper.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var placements = __WEBPACK_IMPORTED_MODULE_2_popper_js__["a" /* default */].placements;

var Popper = function (_Component) {
  _inherits(Popper, _Component);

  function Popper() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Popper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Popper.__proto__ || Object.getPrototypeOf(Popper)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this._setArrowNode = function (node) {
      _this._arrowNode = node;
    }, _this._getTargetNode = function () {
      if (_this.props.target) {
        return _this.props.target;
      } else if (!_this.context.popperManager || !_this.context.popperManager.getTargetNode()) {
        throw new Error('Target missing. Popper must be given a target from the Popper Manager, or as a prop.');
      }
      return _this.context.popperManager.getTargetNode();
    }, _this._getOffsets = function (data) {
      return Object.keys(data.offsets).map(function (key) {
        return data.offsets[key];
      });
    }, _this._isDataDirty = function (data) {
      if (_this.state.data) {
        return JSON.stringify(_this._getOffsets(_this.state.data)) !== JSON.stringify(_this._getOffsets(data));
      } else {
        return true;
      }
    }, _this._updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        if (_this._isDataDirty(data)) {
          _this.setState({ data: data });
        }
        return data;
      }
    }, _this._getPopperStyle = function () {
      var data = _this.state.data;


      if (!_this._popper || !data) {
        return {
          position: 'absolute',
          pointerEvents: 'none',
          opacity: 0
        };
      }

      return _extends({
        position: data.offsets.popper.position
      }, data.styles);
    }, _this._getPopperPlacement = function () {
      return _this.state.data ? _this.state.data.placement : undefined;
    }, _this._getPopperHide = function () {
      return !!_this.state.data && _this.state.data.hide ? '' : undefined;
    }, _this._getArrowStyle = function () {
      if (!_this.state.data || !_this.state.data.offsets.arrow) {
        return {};
      } else {
        var _this$state$data$offs = _this.state.data.offsets.arrow,
            top = _this$state$data$offs.top,
            left = _this$state$data$offs.left;

        return { top: top, left: left };
      }
    }, _this._handlePopperRef = function (node) {
      _this._popperNode = node;
      if (node) {
        _this._createPopper();
      } else {
        _this._destroyPopper();
      }
      if (_this.props.innerRef) {
        _this.props.innerRef(node);
      }
    }, _this._scheduleUpdate = function () {
      _this._popper && _this._popper.scheduleUpdate();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Popper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        popper: {
          setArrowNode: this._setArrowNode,
          getArrowStyle: this._getArrowStyle
        }
      };
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(lastProps) {
      if (lastProps.placement !== this.props.placement || lastProps.eventsEnabled !== this.props.eventsEnabled || lastProps.target !== this.props.target) {
        this._destroyPopper();
        this._createPopper();
      }
      if (lastProps.children !== this.props.children) {
        this._scheduleUpdate();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._destroyPopper();
    }
  }, {
    key: '_createPopper',
    value: function _createPopper() {
      var _this2 = this;

      var _props = this.props,
          placement = _props.placement,
          eventsEnabled = _props.eventsEnabled,
          positionFixed = _props.positionFixed;

      var modifiers = _extends({}, this.props.modifiers, {
        applyStyle: { enabled: false },
        updateState: this._updateStateModifier
      });
      if (this._arrowNode) {
        modifiers.arrow = _extends({}, this.props.modifiers.arrow || {}, {
          element: this._arrowNode
        });
      }
      this._popper = new __WEBPACK_IMPORTED_MODULE_2_popper_js__["a" /* default */](this._getTargetNode(), this._popperNode, {
        placement: placement,
        positionFixed: positionFixed,
        eventsEnabled: eventsEnabled,
        modifiers: modifiers
      });

      // TODO: look into setTimeout scheduleUpdate call, without it, the popper will not position properly on creation
      setTimeout(function () {
        return _this2._scheduleUpdate();
      });
    }
  }, {
    key: '_destroyPopper',
    value: function _destroyPopper() {
      if (this._popper) {
        this._popper.destroy();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          component = _props2.component,
          innerRef = _props2.innerRef,
          placement = _props2.placement,
          eventsEnabled = _props2.eventsEnabled,
          positionFixed = _props2.positionFixed,
          modifiers = _props2.modifiers,
          children = _props2.children,
          restProps = _objectWithoutProperties(_props2, ['component', 'innerRef', 'placement', 'eventsEnabled', 'positionFixed', 'modifiers', 'children']);

      var popperStyle = this._getPopperStyle();
      var popperPlacement = this._getPopperPlacement();
      var popperHide = this._getPopperHide();

      if (typeof children === 'function') {
        var popperProps = {
          ref: this._handlePopperRef,
          style: popperStyle,
          'data-placement': popperPlacement,
          'data-x-out-of-boundaries': popperHide
        };
        return children({
          popperProps: popperProps,
          restProps: restProps,
          scheduleUpdate: this._scheduleUpdate
        });
      }

      var componentProps = _extends({}, restProps, {
        style: _extends({}, restProps.style, popperStyle),
        'data-placement': popperPlacement,
        'data-x-out-of-boundaries': popperHide
      });

      if (typeof component === 'string') {
        componentProps.ref = this._handlePopperRef;
      } else {
        componentProps.innerRef = this._handlePopperRef;
      }

      return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, componentProps, children);
    }
  }]);

  return Popper;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

Popper.contextTypes = {
  popperManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};
Popper.childContextTypes = {
  popper: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
Popper.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  placement: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOf(placements),
  eventsEnabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  positionFixed: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  modifiers: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  target: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([
  // the following check is needed for SSR
  __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.instanceOf(typeof Element !== 'undefined' ? Element : Object), __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.shape({
    getBoundingClientRect: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func.isRequired,
    clientWidth: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired,
    clientHeight: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.number.isRequired
  })])
};
Popper.defaultProps = {
  component: 'div',
  placement: 'bottom',
  eventsEnabled: true,
  positionFixed: false,
  modifiers: {}
};


/* harmony default export */ __webpack_exports__["a"] = (Popper);

/***/ }),

/***/ "./node_modules/react-popper/lib/Target.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }




var Target = function Target(props, context) {
  var _props$component = props.component,
      component = _props$component === undefined ? 'div' : _props$component,
      innerRef = props.innerRef,
      children = props.children,
      restProps = _objectWithoutProperties(props, ['component', 'innerRef', 'children']);

  var popperManager = context.popperManager;

  var targetRef = function targetRef(node) {
    popperManager.setTargetNode(node);
    if (typeof innerRef === 'function') {
      innerRef(node);
    }
  };

  if (typeof children === 'function') {
    var targetProps = { ref: targetRef };
    return children({ targetProps: targetProps, restProps: restProps });
  }

  var componentProps = _extends({}, restProps);

  if (typeof component === 'string') {
    componentProps.ref = targetRef;
  } else {
    componentProps.innerRef = targetRef;
  }

  return Object(__WEBPACK_IMPORTED_MODULE_0_react__["createElement"])(component, componentProps, children);
};

Target.contextTypes = {
  popperManager: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

Target.propTypes = {
  component: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func]),
  innerRef: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node, __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func])
};

/* harmony default export */ __webpack_exports__["a"] = (Target);

/***/ }),

/***/ "./node_modules/react-popper/lib/react-popper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Manager__ = __webpack_require__("./node_modules/react-popper/lib/Manager.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Manager", function() { return __WEBPACK_IMPORTED_MODULE_0__Manager__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Target__ = __webpack_require__("./node_modules/react-popper/lib/Target.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Target", function() { return __WEBPACK_IMPORTED_MODULE_1__Target__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Popper__ = __webpack_require__("./node_modules/react-popper/lib/Popper.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popper", function() { return __WEBPACK_IMPORTED_MODULE_2__Popper__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "placements", function() { return __WEBPACK_IMPORTED_MODULE_2__Popper__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Arrow__ = __webpack_require__("./node_modules/react-popper/lib/Arrow.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Arrow", function() { return __WEBPACK_IMPORTED_MODULE_3__Arrow__["a"]; });





/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = undefined;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var PropTypes = _interopRequireWildcard(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("./node_modules/react-dom/cjs/react-dom.development.js");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _PropTypes = __webpack_require__("./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UNMOUNTED = exports.UNMOUNTED = 'unmounted';
var EXITED = exports.EXITED = 'exited';
var ENTERING = exports.ENTERING = 'entering';
var ENTERED = exports.ENTERED = 'entered';
var EXITING = exports.EXITING = 'exiting';

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/741op4mmj0?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 */

var Transition = function (_React$Component) {
  _inherits(Transition, _React$Component);

  function Transition(props, context) {
    _classCallCheck(this, Transition);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    var parentGroup = context.transitionGroup;
    // In the context of a TransitionGroup all enters are really appears
    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;

    var initialStatus = void 0;
    _this.nextStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.nextStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = { status: initialStatus };

    _this.nextCallback = null;
    return _this;
  }

  Transition.prototype.getChildContext = function getChildContext() {
    return { transitionGroup: null }; // allows for nested Transitions
  };

  Transition.prototype.componentDidMount = function componentDidMount() {
    this.updateStatus(true);
  };

  Transition.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _ref = this.pendingState || this.state,
        status = _ref.status;

    if (nextProps.in) {
      if (status === UNMOUNTED) {
        this.setState({ status: EXITED });
      }
      if (status !== ENTERING && status !== ENTERED) {
        this.nextStatus = ENTERING;
      }
    } else {
      if (status === ENTERING || status === ENTERED) {
        this.nextStatus = EXITING;
      }
    }
  };

  Transition.prototype.componentDidUpdate = function componentDidUpdate() {
    this.updateStatus();
  };

  Transition.prototype.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  Transition.prototype.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;

    var exit = void 0,
        enter = void 0,
        appear = void 0;

    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }
    return { exit: exit, enter: enter, appear: appear };
  };

  Transition.prototype.updateStatus = function updateStatus() {
    var mounting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

    var nextStatus = this.nextStatus;

    if (nextStatus !== null) {
      this.nextStatus = null;
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();
      var node = _reactDom2.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({ status: UNMOUNTED });
    }
  };

  Transition.prototype.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;

    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;

    var timeouts = this.getTimeouts();

    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      this.safeSetState({ status: ENTERED }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);

    this.safeSetState({ status: ENTERING }, function () {
      _this2.props.onEntering(node, appearing);

      // FIXME: appear timeout?
      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({ status: ENTERED }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  Transition.prototype.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;

    var timeouts = this.getTimeouts();

    // no exit animation skip right to EXITED
    if (!exit) {
      this.safeSetState({ status: EXITED }, function () {
        _this3.props.onExited(node);
      });
      return;
    }
    this.props.onExit(node);

    this.safeSetState({ status: EXITING }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({ status: EXITED }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  Transition.prototype.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  Transition.prototype.safeSetState = function safeSetState(nextState, callback) {
    var _this4 = this;

    // We need to track pending updates for instances where a cWRP fires quickly
    // after cDM and before the state flushes, which would double trigger a
    // transition
    this.pendingState = nextState;

    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, function () {
      _this4.pendingState = null;
      callback();
    });
  };

  Transition.prototype.setNextCallback = function setNextCallback(callback) {
    var _this5 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this5.nextCallback = null;

        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  Transition.prototype.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }
      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  Transition.prototype.render = function render() {
    var status = this.state.status;
    if (status === UNMOUNTED) {
      return null;
    }

    var _props = this.props,
        children = _props.children,
        childProps = _objectWithoutProperties(_props, ['children']);
    // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react2.default.Children.only(children);
    return _react2.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react2.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};


Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element.
   * This function is called with the current transition status
   * ('entering', 'entered', 'exiting', 'exited', 'unmounted'), which can be used
   * to apply context specific props to a component.
   *
   * ```jsx
   * <Transition timeout={150}>
   *   {(status) => (
   *     <MyComponent className={`fade fade-${status}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided
   *
   * You may specify a single timeout for all transitions like: `timeout={500}`,
   * or individually like:
   *
   * ```jsx
   * timeout={{
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * @type {number | { enter?: number, exit?: number }}
   */
  timeout: function timeout(props) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;
    return pt.apply(undefined, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : {};

// Name the function so it is clearer in the documentation
function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop
};

Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

exports.default = Transition;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _react2 = _interopRequireDefault(_react);

var _ChildMapping = __webpack_require__("./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes = {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes2.default.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   */
  children: _propTypes2.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes2.default.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes2.default.bool,
  /**
    * A convenience prop that enables or disables exit animations
    * for all children. Note that specifying this will override any defaults set
    * on individual children Transitions.
    */
  exit: _propTypes2.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes2.default.func
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
};

/**
 * The `<TransitionGroup>` component manages a set of `<Transition>` components
 * in a list. Like with the `<Transition>` component, `<TransitionGroup>`, is a
 * state machine for managing the mounting and unmounting of components over
 * time.
 *
 * Consider the example below using the `Fade` CSS transition from before.
 * As items are removed or added to the TodoList the `in` prop is toggled
 * automatically by the `<TransitionGroup>`. You can use _any_ `<Transition>`
 * component in a `<TransitionGroup>`, not just css.
 *
 * ## Example
 *
 * <iframe src="https://codesandbox.io/embed/00rqyo26kn?fontsize=14" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual `<Transition>`
 * components. This means you can mix and match animations across different
 * list items.
 */

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    // Initial children should all be entering, dependent on appear
    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children, function (child) {
        return (0, _react.cloneElement)(child, {
          onExited: _this.handleExited.bind(_this, child),
          in: true,
          appear: _this.getProp(child, 'appear'),
          enter: _this.getProp(child, 'enter'),
          exit: _this.getProp(child, 'exit')
        });
      })
    };
    return _this;
  }

  TransitionGroup.prototype.getChildContext = function getChildContext() {
    return {
      transitionGroup: { isMounting: !this.appeared }
    };
  };
  // use child config unless explictly set by the Group


  TransitionGroup.prototype.getProp = function getProp(child, prop) {
    var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.props;

    return props[prop] != null ? props[prop] : child.props[prop];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var prevChildMapping = this.state.children;
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);

    var children = (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping);

    Object.keys(children).forEach(function (key) {
      var child = children[key];

      if (!(0, _react.isValidElement)(child)) return;

      var hasPrev = key in prevChildMapping;
      var hasNext = key in nextChildMapping;

      var prevChild = prevChildMapping[key];
      var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in;

      // item is new (entering)
      if (hasNext && (!hasPrev || isLeaving)) {
        // console.log('entering', key)
        children[key] = (0, _react.cloneElement)(child, {
          onExited: _this2.handleExited.bind(_this2, child),
          in: true,
          exit: _this2.getProp(child, 'exit', nextProps),
          enter: _this2.getProp(child, 'enter', nextProps)
        });
      }
      // item is old (exiting)
      else if (!hasNext && hasPrev && !isLeaving) {
          // console.log('leaving', key)
          children[key] = (0, _react.cloneElement)(child, { in: false });
        }
        // item hasn't changed transition states
        // copy over the last transition props;
        else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
            // console.log('unchanged', key)
            children[key] = (0, _react.cloneElement)(child, {
              onExited: _this2.handleExited.bind(_this2, child),
              in: prevChild.props.in,
              exit: _this2.getProp(child, 'exit', nextProps),
              enter: _this2.getProp(child, 'enter', nextProps)
            });
          }
    });

    this.setState({ children: children });
  };

  TransitionGroup.prototype.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);

    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return { children: children };
    });
  };

  TransitionGroup.prototype.render = function render() {
    var _props = this.props,
        Component = _props.component,
        childFactory = _props.childFactory,
        props = _objectWithoutProperties(_props, ['component', 'childFactory']);

    var children = values(this.state.children).map(childFactory);

    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }
    return _react2.default.createElement(
      Component,
      props,
      children
    );
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes2.default.object.isRequired
};


TransitionGroup.propTypes =  true ? propTypes : {};
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = Object.create(null);

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _propTypes = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = exports.timeoutsShape = _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.shape({
  enter: _propTypes2.default.number,
  exit: _propTypes2.default.number
}).isRequired]);

var classNamesShape = exports.classNamesShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterDone: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  exit: _propTypes2.default.string,
  exitDone: _propTypes2.default.string,
  exitActive: _propTypes2.default.string
})]);

/***/ }),

/***/ "./node_modules/recompose/getDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),

/***/ "./node_modules/recompose/pure.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shouldUpdate = __webpack_require__("./node_modules/recompose/shouldUpdate.js");

var _shouldUpdate2 = _interopRequireDefault(_shouldUpdate);

var _shallowEqual = __webpack_require__("./node_modules/recompose/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _setDisplayName = __webpack_require__("./node_modules/recompose/setDisplayName.js");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("./node_modules/recompose/wrapDisplayName.js");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pure = function pure(BaseComponent) {
  var hoc = (0, _shouldUpdate2.default)(function (props, nextProps) {
    return !(0, _shallowEqual2.default)(props, nextProps);
  });

  if (true) {
    return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'pure'))(hoc(BaseComponent));
  }

  return hoc(BaseComponent);
};

exports.default = pure;

/***/ }),

/***/ "./node_modules/recompose/setDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _setStatic = __webpack_require__("./node_modules/recompose/setStatic.js");

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),

/***/ "./node_modules/recompose/setStatic.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),

/***/ "./node_modules/recompose/shallowEqual.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _shallowEqual = __webpack_require__("./node_modules/fbjs/lib/shallowEqual.js");

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _shallowEqual2.default;

/***/ }),

/***/ "./node_modules/recompose/shouldUpdate.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__("./node_modules/babel-runtime/helpers/classCallCheck.js");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__("./node_modules/babel-runtime/helpers/inherits.js");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__("./node_modules/react/cjs/react.development.js");

var _setDisplayName = __webpack_require__("./node_modules/recompose/setDisplayName.js");

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__("./node_modules/recompose/wrapDisplayName.js");

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var shouldUpdate = function shouldUpdate(test) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var ShouldUpdate = function (_Component) {
      (0, _inherits3.default)(ShouldUpdate, _Component);

      function ShouldUpdate() {
        (0, _classCallCheck3.default)(this, ShouldUpdate);
        return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
      }

      ShouldUpdate.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
        return test(this.props, nextProps);
      };

      ShouldUpdate.prototype.render = function render() {
        return factory(this.props);
      };

      return ShouldUpdate;
    }(_react.Component);

    if (true) {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'shouldUpdate'))(ShouldUpdate);
    }
    return ShouldUpdate;
  };
};

exports.default = shouldUpdate;

/***/ }),

/***/ "./node_modules/recompose/wrapDisplayName.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getDisplayName = __webpack_require__("./node_modules/recompose/getDisplayName.js");

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),

/***/ "./node_modules/warning/warning.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @providesModule warning
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./pages/contacto.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_withRoot__ = __webpack_require__("./src/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Layout__ = __webpack_require__("./Components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_Contacto_Contacto__ = __webpack_require__("./Components/Contacto/Contacto.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/pages/contacto.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








var styles = function styles(theme) {
  return {
    root: {
      textAlign: "center",
      paddingTop: theme.spacing.unit * 20
    }
  };
};

var Contact =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Contact, _React$Component);

  function Contact() {
    _classCallCheck(this, Contact);

    return _possibleConstructorReturn(this, (Contact.__proto__ || Object.getPrototypeOf(Contact)).apply(this, arguments));
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_Contacto_Contacto__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return Contact;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Contact.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};

var _default = Object(__WEBPACK_IMPORTED_MODULE_3__src_withRoot__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Contact));

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(styles, "styles", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/pages/contacto.js");
  reactHotLoader.register(Contact, "Contact", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/pages/contacto.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/pages/contacto.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contacto")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module, process, global) {/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("./node_modules/jss/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__ = __webpack_require__("./node_modules/@material-ui/core/colors/purple.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__ = __webpack_require__("./node_modules/@material-ui/core/colors/green.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__);
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

/* eslint-disable no-underscore-dangle */



 // A theme with custom primary and secondary color.
// It's optional.

var theme = Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createMuiTheme"])({
  palette: {
    primary: {
      light: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default.a[700]
    },
    secondary: {
      light: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[300],
      main: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[500],
      dark: __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default.a[700]
    }
  }
});

function createPageContext() {
  return {
    theme: theme,
    // This is needed in order to deduplicate the injection of CSS in the page.
    sheetsManager: new Map(),
    // This is needed in order to inject the critical CSS.
    sheetsRegistry: new __WEBPACK_IMPORTED_MODULE_0_jss__["SheetsRegistry"](),
    // The standard class name generator.
    generateClassName: Object(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__["createGenerateClassName"])()
  };
}

function getPageContext() {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  } // Reuse context on the client-side.


  if (!global.__INIT_MATERIAL_UI__) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
}
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(theme, "theme", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/getPageContext.js");
  reactHotLoader.register(createPageContext, "createPageContext", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/getPageContext.js");
  reactHotLoader.register(getPageContext, "getPageContext", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/getPageContext.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js"), __webpack_require__("./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/next/node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("./node_modules/@material-ui/core/styles/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__ = __webpack_require__("./node_modules/@material-ui/core/CssBaseline/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/withRoot.js";

(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }







function withRoot(Component) {
  var WithRoot =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(WithRoot, _React$Component);

    function WithRoot(props) {
      var _this;

      _classCallCheck(this, WithRoot);

      _this = _possibleConstructorReturn(this, (WithRoot.__proto__ || Object.getPrototypeOf(WithRoot)).call(this, props));
      Object.defineProperty(_assertThisInitialized(_this), "pageContext", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: null
      });
      _this.pageContext = _this.props.pageContext || Object(__WEBPACK_IMPORTED_MODULE_4__getPageContext__["a" /* default */])();
      return _this;
    }

    _createClass(WithRoot, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        // Remove the server-side injected CSS.
        var jssStyles = document.querySelector('#jss-server-side');

        if (jssStyles && jssStyles.parentNode) {
          jssStyles.parentNode.removeChild(jssStyles);
        }
      }
    }, {
      key: "render",
      value: function render() {
        // MuiThemeProvider makes the theme available down the React tree thanks to React context.
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["MuiThemeProvider"], {
          theme: this.pageContext.theme,
          sheetsManager: this.pageContext.sheetsManager,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          }
        }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Component, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          }
        })));
      }
    }, {
      key: "__reactstandin__regenerateByEval",
      // @ts-ignore
      value: function __reactstandin__regenerateByEval(key, code) {
        // @ts-ignore
        this[key] = eval(code);
      }
    }]);

    return WithRoot;
  }(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

  WithRoot.propTypes = {
    pageContext: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
  };

  WithRoot.getInitialProps = function (ctx) {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return WithRoot;
}

var _default = withRoot;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(withRoot, "withRoot", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/withRoot.js");
  reactHotLoader.register(_default, "default", "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/withRoot.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/contacto.js");


/***/ })

},[6])
          return { page: comp.default }
        })
      ;
//# sourceMappingURL=contacto.js.map