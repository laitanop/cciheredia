module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/Footer/Footer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__ = __webpack_require__("@material-ui/core/Tooltip");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Tooltip__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Footer/Footer.js";

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
  }]);

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Footer.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Footer));

/***/ }),

/***/ "./Components/HomeSection1/HomeSection1.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NewsCci__ = __webpack_require__("./Components/HomeSection1/NewsCci.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HomeSection2_SVGImages_HomeImage__ = __webpack_require__("./Components/HomeSection2/SVGImages/HomeImage.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection1/HomeSection1.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var styles = function styles(theme) {
  var _paper;

  return {
    root: _defineProperty({
      padding: theme.spacing.unit * 2,
      flexGrow: 1,
      marginTop: "-10px",
      marginBottom: "50px"
    }, theme.breakpoints.up("sm"), {
      marginLeft: "250px",
      marginRight: "250px"
    }),
    paper: (_paper = {
      padding: theme.spacing.unit * 6,
      textAlign: "center",
      color: theme.palette.text.secondary
    }, _defineProperty(_paper, theme.breakpoints.up("md"), {
      padding: theme.spacing.unit * 10
    }), _defineProperty(_paper, theme.breakpoints.up("xl"), {
      padding: theme.spacing.unit * 20
    }), _paper),
    paperNews: {
      padding: theme.spacing.unit * 1.5,
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    icon: {
      color: "#96ad32"
    },
    Title: _defineProperty({
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      fontWeight: "500",
      lineHeight: "38.4px",
      color: " #596327",
      fontSize: "32px",
      marginTop: "50px"
    }, theme.breakpoints.down("sm"), {
      fontSize: "16px",
      lineHeight: "20.4px",
      marginTop: "-10px"
    }),
    paperTitle: _defineProperty({
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      fontSize: "26.66667px",
      fontWeight: "600",
      lineHeight: "32px"
    }, theme.breakpoints.down("sm"), {
      fontSize: "18px"
    }),
    paperSubTitle: _defineProperty({
      color: "rgb(84, 84, 84)",
      fontSize: "24px",
      fontWeight: "600",
      lineHeight: "24px"
    }, theme.breakpoints.down("sm"), {
      fontSize: "18px"
    }),
    paperParagraph: _defineProperty({
      color: "rgb(84, 84, 84)",
      fontSize: "22.2222px",
      fontWeight: "300",
      lineHeight: "26.6667px"
    }, theme.breakpoints.down("sm"), {
      fontSize: "16px"
    }),
    img: _defineProperty({
      backgroundImage: "url(\"/../static/Slice 1.png\")",
      width: "130%",
      height: "380px",
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain"
    }, theme.breakpoints.down("sm"), {
      width: "95%",
      height: "400px",
      padding: theme.spacing.unit * 4
    })
  };
};

function HomeSection1(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.Title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    }
  }, "Centro Cristiano Internacional Galaad"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    container: true,
    spacing: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.paper,
    elevation: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__HomeSection2_SVGImages_HomeImage__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paperTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    }
  }, "Horario de Reuniones"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paperSubTitle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    }
  }, "S\xE1bados 3:00 PM"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paperParagraph,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    }
  }, "Concepci\xF3n de San Rafael de Heredia"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.paperNews,
    elevation: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    style: {
      backgroundColor: "#dfe9a0",
      marginBottom: "10px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    }
  }, "Canta al Creador"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NewsCci__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    }
  })))));
}

HomeSection1.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(HomeSection1));

/***/ }),

/***/ "./Components/HomeSection1/NewsCci.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__ = __webpack_require__("@material-ui/core/Card");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__ = __webpack_require__("@material-ui/core/CardActions");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__ = __webpack_require__("@material-ui/core/CardContent");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia__ = __webpack_require__("@material-ui/core/CardMedia");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection1/NewsCci.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import CardActionArea from '@material-ui/core/CardActionArea';





var styles = function styles(theme) {
  return {
    card: _defineProperty({
      maxWidth: 445
    }, theme.breakpoints.up("xl"), {
      maxWidth: 745
    }),
    media: _defineProperty({
      objectFit: "cover"
    }, theme.breakpoints.up("xl"), {
      height: 287
    }),
    title: {
      fontSize: "18px",
      color: "#596327",
      fontWeight: "bold"
    },
    text: {
      fontSize: "14px",
      textAlign: "justify",
      marginTop: "7px"
    },
    icon: {
      color: "#96ad32"
    }
  };
};

function NewsCci(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.card,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_CardMedia___default.a, {
    component: "img",
    className: classes.media,
    height: "140",
    image: "/static/Slice 1.png\\",
    title: "Contemplative Reptile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_CardContent___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.title,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    }
  }, "Musica Acustica"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    }
  }, "M\xFAscia que edifica en un ambiente amistoso y breves reflexiones para le alma. Ven y acompa\xF1anos!"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_CardActions___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
    className: "material-icons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, "calendar_today"), "\xA0 \xA0 Sabado 27 de Octubre 2018,  de 3:00-5:00pm")));
}

NewsCci.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(NewsCci));

/***/ }),

/***/ "./Components/HomeSection2/Belive.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/Belive.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: _objectSpread({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1,
      textAlign: "center",
      "&:hover": {
        boxShadow: "5px 5px 5px 5px #BDBDBD"
      }
    })
  };
};

function Belive(props) {
  var classes = props.classes;
  var listVideo = [{
    src: "../static/join.png",
    name: "Creer"
  }];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, listVideo.map(function (video) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
      className: classes.root,
      elevation: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      container: true,
      spacing: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      item: true,
      xs: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
      src: video.src,
      alt: "CCI",
      height: "70",
      width: "70",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      }
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      item: true,
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      style: {
        fontSize: "16px",
        marginTop: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61
      }
    }, video.name))))));
  }));
}

Belive.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(Belive));
{
  /* <Grid item  sm={12}>
  							
  							
  							<div className={classes.paper1}><img src="../static/join.png" alt="CCI" height="70" width="70" /></div>
  							<div className={classes.paper1}>Creer</div>
  						</Grid>
  						<Grid item  sm={12}>
  							<div className={classes.paper1}>	<img src="../static/grow.png" alt="CCI" height="70" width="70" /></div>
  							<div className={classes.paper1}>	Crecer </div>
  						</Grid>
  						<Grid item sm={12}>
  							<div className={classes.paper1}>	<img src="../static/serve.png" alt="CCI" height="70" width="70" /></div>
  							<div className={classes.paper1}>Servir</div>
  						</Grid> */
}

/***/ }),

/***/ "./Components/HomeSection2/HomeSection2.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__VideoCard__ = __webpack_require__("./Components/HomeSection2/VideoCard.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Belive__ = __webpack_require__("./Components/HomeSection2/Belive.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SVGImages_GrowImage__ = __webpack_require__("./Components/HomeSection2/SVGImages/GrowImage.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__VideoCardResponsivo__ = __webpack_require__("./Components/HomeSection2/VideoCardResponsivo.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/HomeSection2.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var styles = function styles(theme) {
  var _paper;

  return {
    root: _defineProperty({
      flexGrow: 1,
      padding: "100px",
      margin: "100px"
    }, theme.breakpoints.down("sm"), {
      marginLeft: "20px",
      marginRight: "20px",
      padding: "10px"
    }),
    paper: (_paper = {}, _defineProperty(_paper, theme.breakpoints.up("md"), {
      padding: theme.spacing.unit * 12,
      marginLeft: "150px",
      marginRight: "150px",
      backgroundColor: "#fff"
    }), _defineProperty(_paper, theme.breakpoints.down("sm"), {
      marginLeft: "15px",
      marginRight: "15px"
    }), _paper),
    paper1: {
      padding: theme.spacing.unit * 2,
      textAlign: "center",
      fontSize: "20px"
    },
    scroll: _defineProperty({
      overflow: "scroll",
      height: "600px"
    }, theme.breakpoints.down("md"), {
      display: "none",
      visibility: "hidden"
    }),
    VideoCardResponsivo: _defineProperty({}, theme.breakpoints.up("md"), {
      display: "none",
      visibility: "hidden"
    })
  };
};

function HomeSection2(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.root,
    elevation: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    container: true,
    spacing: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    }
  }, "Creer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/join.png",
    alt: "CCI",
    height: "100",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    }
  }), " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    }
  }, "Crecer"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }, " ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__SVGImages_GrowImage__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    }
  }), " "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    }
  }, "Servir"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/serve.png",
    alt: "CCI",
    height: "100",
    width: "100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    }
  }), " ")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default.a, {
    item: true,
    xs: 12,
    sm: 6,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.paper1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    }
  }, "Sermones "), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.scroll,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__VideoCard__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.VideoCardResponsivo,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__VideoCardResponsivo__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    }
  }))))));
}

HomeSection2.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(HomeSection2));

/***/ }),

/***/ "./Components/HomeSection2/SVGImages/GrowImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/SVGImages/GrowImage.js";



function GrowImage() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-4210915011"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "100px",
    height: "100px",
    viewBox: "0 0 289 280",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4210915011"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("g", {
    id: "Artboard",
    stroke: "none",
    "stroke-width": "2",
    fill: "none",
    "fill-rule": "evenodd",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    className: "jsx-4210915011" + " " + 'cls-1'
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ellipse", {
    id: "Oval",
    fill: "#6A772A",
    "fill-rule": "nonzero",
    cx: "144",
    cy: "137",
    rx: "135",
    ry: "128",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    className: "jsx-4210915011" + " " + 'cls-1'
  }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    d: "M129.561523,125.787109 C92.2426605,124.466491 62.0302312,103.554192 76.0996094,61.203125 C76.7267612,59.3152982 77.00247,65.248965 78.3134766,66.7451172 C79.9554092,68.6189302 82.1402793,70.247602 84.5566406,70.8544922 C93.8279863,73.1830715 103.595696,73.0997212 112.868164,75.4238281 C116.442226,76.3196523 119.73237,78.2758609 122.727539,80.421875 C124.628728,81.7840614 126.127167,83.7239704 127.287109,85.7548828 C129.329216,89.3303517 131.459682,93.0288167 132.237305,97.0722656 C139.16522,133.095737 133.539991,117.498604 113.787109,102.300781 C111.787503,100.762288 105.418305,96.8255828 107.152344,98.6582031 C120.438317,112.699494 128.617696,119.045885 138.713867,133.907227 C139.941692,135.714558 142.652425,136.370192 143.50293,138.382813 C146.965504,146.576592 142.667829,162.083343 151.379883,163.879883 C159.019442,165.45526 153.701184,148.220786 157.051758,141.176758 C160.31815,134.309707 172.2815,130.457306 170.828125,122.993164 C169.603799,116.705354 161.734783,132.494998 155.857422,135.042969 C154.176566,135.771658 152.186898,132.99354 151.951172,131.176758 C151.597093,128.447814 152.595839,125.408051 154.330078,123.271484 C157.089351,119.872085 160.938644,117.402464 164.802734,115.34375 C174.129707,110.374516 184.41174,107.341335 193.698242,102.296875 C198.343251,99.77369 202.403392,96.2565096 206.371094,92.7636719 C207.736989,91.5612501 209.109228,86.5701126 209.560547,88.3330078 C214.66902,108.287201 188.318222,132.889105 173.557617,141.283203 C171.419247,142.499257 167.67394,140.820054 166.356445,142.897461 L163.274414,138.251953 C158.53582,145.723704 144.737397,183.393994 152.482422,192.259766 C158.689823,199.365412 171.416403,192.355021 180.749023,193.742188 C189.359876,195.022073 199.656148,194.31249 206.048828,200.22168 C209.105673,203.04733 200.008792,205.990123 196.630859,208.422852 C193.276805,210.838383 189.773346,213.159518 185.939453,214.704102 C159.266345,225.45006 130.076718,227.136696 102.980469,215.617188 C94.8212091,212.148417 85.1573313,208.837985 80.6123047,201.225586 C78.5846227,197.829451 87.4814998,197.161304 91.2568359,195.981445 C96.8824171,194.223353 102.707166,192.861433 108.588867,192.482422 C134.175594,190.833639 151.626224,204.700612 147.530273,172.571289 C146.430479,163.944317 143.970393,155.507789 141.242188,147.25 C140.760573,145.79224 138.636288,145.341388 138.063477,143.916992 L129.561523,125.787109 Z",
    id: "Path-2",
    stroke: "#6A772A",
    fill: "#FFFFFF",
    "fill-rule": "nonzero",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    className: "jsx-4210915011"
  }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4210915011",
    css: ".cls-1.jsx-4210915011{stroke-dasharray:1000;stroke-dashoffset:1000;-webkit-animation:dash-jsx-4210915011 30s linear alternate infinite;animation:dash-jsx-4210915011 30s linear alternate infinite;-webkit-animation:stroke_fill-jsx-4210915011 10s linear forwards;animation:stroke_fill-jsx-4210915011 10s linear forwards;}@keyframes dash from.jsx-4210915011{stroke-dashoffset:1000;}@keyframes dash to.jsx-4210915011{stroke-dashoffset:0;-webkit-transition:fill .4s ease;transition:fill .4s ease;}@-webkit-keyframes stroke_fill-jsx-4210915011{0%{fill:white;}50%{fill:white;stroke-dashoffset:0;}100%{fill:#6A772A;stroke-dashoffset:0;}}@keyframes stroke_fill-jsx-4210915011{0%{fill:white;}50%{fill:white;stroke-dashoffset:0;}100%{fill:#6A772A;stroke-dashoffset:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSG9tZVNlY3Rpb24yL1NWR0ltYWdlcy9Hcm93SW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJlLEFBSStCLEFBUUcsQUFJSCxBQU9ULEFBR0EsQUFJRSxXQU5mLEFBR3NCLEVBSUEsT0FkSyxFQVpKLENBU3ZCLFFBY0EsRUFJQSxZQTFCNkMsaUNBWTdDLCtGQVgwQywwSEFDNUMiLCJmaWxlIjoiQ29tcG9uZW50cy9Ib21lU2VjdGlvbjIvU1ZHSW1hZ2VzL0dyb3dJbWFnZS5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcGFtZWxhcml2ZXJhL01pc0RvY3VtZW50b3MvY2NpL2NjaWhlcmVkaWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cblxuZnVuY3Rpb24gR3Jvd0ltYWdlKCkge1xuXHRyZXR1cm4gKFxuICBcblx0XHQ8ZGl2PlxuXG5cdFx0XHQ8c3ZnIHdpZHRoPVwiMTAwcHhcIiBoZWlnaHQ9XCIxMDBweFwiIHZpZXdCb3g9XCIwIDAgMjg5IDI4MFwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+XG4gXG5cdFx0XG5cdFx0XHRcdDxnIGlkPVwiQXJ0Ym9hcmRcIiAgY2xhc3NOYW1lPSdjbHMtMScgc3Ryb2tlPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjJcIiBmaWxsPVwibm9uZVwiIGZpbGwtcnVsZT1cImV2ZW5vZGRcIj5cblx0XHRcdFx0XHQ8ZWxsaXBzZSAgIGNsYXNzTmFtZT0nY2xzLTEnIGlkPVwiT3ZhbFwiIGZpbGw9XCIjNkE3NzJBXCIgZmlsbC1ydWxlPVwibm9uemVyb1wiIGN4PVwiMTQ0XCIgY3k9XCIxMzdcIiByeD1cIjEzNVwiIHJ5PVwiMTI4XCI+PC9lbGxpcHNlPlxuXHRcdFx0XHRcdDxwYXRoIGQ9XCJNMTI5LjU2MTUyMywxMjUuNzg3MTA5IEM5Mi4yNDI2NjA1LDEyNC40NjY0OTEgNjIuMDMwMjMxMiwxMDMuNTU0MTkyIDc2LjA5OTYwOTQsNjEuMjAzMTI1IEM3Ni43MjY3NjEyLDU5LjMxNTI5ODIgNzcuMDAyNDcsNjUuMjQ4OTY1IDc4LjMxMzQ3NjYsNjYuNzQ1MTE3MiBDNzkuOTU1NDA5Miw2OC42MTg5MzAyIDgyLjE0MDI3OTMsNzAuMjQ3NjAyIDg0LjU1NjY0MDYsNzAuODU0NDkyMiBDOTMuODI3OTg2Myw3My4xODMwNzE1IDEwMy41OTU2OTYsNzMuMDk5NzIxMiAxMTIuODY4MTY0LDc1LjQyMzgyODEgQzExNi40NDIyMjYsNzYuMzE5NjUyMyAxMTkuNzMyMzcsNzguMjc1ODYwOSAxMjIuNzI3NTM5LDgwLjQyMTg3NSBDMTI0LjYyODcyOCw4MS43ODQwNjE0IDEyNi4xMjcxNjcsODMuNzIzOTcwNCAxMjcuMjg3MTA5LDg1Ljc1NDg4MjggQzEyOS4zMjkyMTYsODkuMzMwMzUxNyAxMzEuNDU5NjgyLDkzLjAyODgxNjcgMTMyLjIzNzMwNSw5Ny4wNzIyNjU2IEMxMzkuMTY1MjIsMTMzLjA5NTczNyAxMzMuNTM5OTkxLDExNy40OTg2MDQgMTEzLjc4NzEwOSwxMDIuMzAwNzgxIEMxMTEuNzg3NTAzLDEwMC43NjIyODggMTA1LjQxODMwNSw5Ni44MjU1ODI4IDEwNy4xNTIzNDQsOTguNjU4MjAzMSBDMTIwLjQzODMxNywxMTIuNjk5NDk0IDEyOC42MTc2OTYsMTE5LjA0NTg4NSAxMzguNzEzODY3LDEzMy45MDcyMjcgQzEzOS45NDE2OTIsMTM1LjcxNDU1OCAxNDIuNjUyNDI1LDEzNi4zNzAxOTIgMTQzLjUwMjkzLDEzOC4zODI4MTMgQzE0Ni45NjU1MDQsMTQ2LjU3NjU5MiAxNDIuNjY3ODI5LDE2Mi4wODMzNDMgMTUxLjM3OTg4MywxNjMuODc5ODgzIEMxNTkuMDE5NDQyLDE2NS40NTUyNiAxNTMuNzAxMTg0LDE0OC4yMjA3ODYgMTU3LjA1MTc1OCwxNDEuMTc2NzU4IEMxNjAuMzE4MTUsMTM0LjMwOTcwNyAxNzIuMjgxNSwxMzAuNDU3MzA2IDE3MC44MjgxMjUsMTIyLjk5MzE2NCBDMTY5LjYwMzc5OSwxMTYuNzA1MzU0IDE2MS43MzQ3ODMsMTMyLjQ5NDk5OCAxNTUuODU3NDIyLDEzNS4wNDI5NjkgQzE1NC4xNzY1NjYsMTM1Ljc3MTY1OCAxNTIuMTg2ODk4LDEzMi45OTM1NCAxNTEuOTUxMTcyLDEzMS4xNzY3NTggQzE1MS41OTcwOTMsMTI4LjQ0NzgxNCAxNTIuNTk1ODM5LDEyNS40MDgwNTEgMTU0LjMzMDA3OCwxMjMuMjcxNDg0IEMxNTcuMDg5MzUxLDExOS44NzIwODUgMTYwLjkzODY0NCwxMTcuNDAyNDY0IDE2NC44MDI3MzQsMTE1LjM0Mzc1IEMxNzQuMTI5NzA3LDExMC4zNzQ1MTYgMTg0LjQxMTc0LDEwNy4zNDEzMzUgMTkzLjY5ODI0MiwxMDIuMjk2ODc1IEMxOTguMzQzMjUxLDk5Ljc3MzY5IDIwMi40MDMzOTIsOTYuMjU2NTA5NiAyMDYuMzcxMDk0LDkyLjc2MzY3MTkgQzIwNy43MzY5ODksOTEuNTYxMjUwMSAyMDkuMTA5MjI4LDg2LjU3MDExMjYgMjA5LjU2MDU0Nyw4OC4zMzMwMDc4IEMyMTQuNjY5MDIsMTA4LjI4NzIwMSAxODguMzE4MjIyLDEzMi44ODkxMDUgMTczLjU1NzYxNywxNDEuMjgzMjAzIEMxNzEuNDE5MjQ3LDE0Mi40OTkyNTcgMTY3LjY3Mzk0LDE0MC44MjAwNTQgMTY2LjM1NjQ0NSwxNDIuODk3NDYxIEwxNjMuMjc0NDE0LDEzOC4yNTE5NTMgQzE1OC41MzU4MiwxNDUuNzIzNzA0IDE0NC43MzczOTcsMTgzLjM5Mzk5NCAxNTIuNDgyNDIyLDE5Mi4yNTk3NjYgQzE1OC42ODk4MjMsMTk5LjM2NTQxMiAxNzEuNDE2NDAzLDE5Mi4zNTUwMjEgMTgwLjc0OTAyMywxOTMuNzQyMTg4IEMxODkuMzU5ODc2LDE5NS4wMjIwNzMgMTk5LjY1NjE0OCwxOTQuMzEyNDkgMjA2LjA0ODgyOCwyMDAuMjIxNjggQzIwOS4xMDU2NzMsMjAzLjA0NzMzIDIwMC4wMDg3OTIsMjA1Ljk5MDEyMyAxOTYuNjMwODU5LDIwOC40MjI4NTIgQzE5My4yNzY4MDUsMjEwLjgzODM4MyAxODkuNzczMzQ2LDIxMy4xNTk1MTggMTg1LjkzOTQ1MywyMTQuNzA0MTAyIEMxNTkuMjY2MzQ1LDIyNS40NTAwNiAxMzAuMDc2NzE4LDIyNy4xMzY2OTYgMTAyLjk4MDQ2OSwyMTUuNjE3MTg4IEM5NC44MjEyMDkxLDIxMi4xNDg0MTcgODUuMTU3MzMxMywyMDguODM3OTg1IDgwLjYxMjMwNDcsMjAxLjIyNTU4NiBDNzguNTg0NjIyNywxOTcuODI5NDUxIDg3LjQ4MTQ5OTgsMTk3LjE2MTMwNCA5MS4yNTY4MzU5LDE5NS45ODE0NDUgQzk2Ljg4MjQxNzEsMTk0LjIyMzM1MyAxMDIuNzA3MTY2LDE5Mi44NjE0MzMgMTA4LjU4ODg2NywxOTIuNDgyNDIyIEMxMzQuMTc1NTk0LDE5MC44MzM2MzkgMTUxLjYyNjIyNCwyMDQuNzAwNjEyIDE0Ny41MzAyNzMsMTcyLjU3MTI4OSBDMTQ2LjQzMDQ3OSwxNjMuOTQ0MzE3IDE0My45NzAzOTMsMTU1LjUwNzc4OSAxNDEuMjQyMTg4LDE0Ny4yNSBDMTQwLjc2MDU3MywxNDUuNzkyMjQgMTM4LjYzNjI4OCwxNDUuMzQxMzg4IDEzOC4wNjM0NzcsMTQzLjkxNjk5MiBMMTI5LjU2MTUyMywxMjUuNzg3MTA5IFpcIiBpZD1cIlBhdGgtMlwiIHN0cm9rZT1cIiM2QTc3MkFcIiBmaWxsPVwiI0ZGRkZGRlwiIGZpbGwtcnVsZT1cIm5vbnplcm9cIj48L3BhdGg+XG5cdFx0XHRcdDwvZz5cblx0XHRcdDwvc3ZnPlxuXHRcdFx0XG5cdFx0XHQ8c3R5bGUganN4PntgXG4gICAgICAuY2xzLTEge1xuICAgICBcbiAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMTAwMDtcbiAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDEwMDA7XG4gICAgICAgIGFuaW1hdGlvbjogZGFzaCAzMHMgbGluZWFyIGFsdGVybmF0ZSBpbmZpbml0ZTtcbiAgICAgICAgYW5pbWF0aW9uOiBzdHJva2VfZmlsbCAxMHMgbGluZWFyIGZvcndhcmRzO1xuICAgICAgfVxuICAgICAgXG4gICAgICBAa2V5ZnJhbWVzIGRhc2gge1xuICAgICAgICBmcm9tIHtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcbiAgICAgICAgICAvLyB0cmFuc2l0aW9uOiBmaWxsIC40cyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIHRvIHtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIC40cyBlYXNlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgc3Ryb2tlX2ZpbGwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgZmlsbDogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMDtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICBmaWxsOiAjNkE3NzJBO1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gIFxuXG5cdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyb3dJbWFnZTtcbiJdfQ== */\n/*@ sourceURL=Components/HomeSection2/SVGImages/GrowImage.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (GrowImage);

/***/ }),

/***/ "./Components/HomeSection2/SVGImages/HomeImage.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/SVGImages/HomeImage.js";



function HomeImage() {
  return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    className: "jsx-4210915011"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("svg", {
    width: "50px",
    height: "50px",
    "aria-hidden": "true",
    "data-prefix": "fas",
    "data-icon": "home",
    role: "img",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 576 512",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4210915011" + " " + "svg-inline--fa fa-home fa-w-18"
  }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("path", {
    stroke: "#6A772A",
    "stroke-width": "8",
    fill: "#6A772A",
    d: "M488 312.7V456c0 13.3-10.7 24-24 24H348c-6.6 0-12-5.4-12-12V356c0-6.6-5.4-12-12-12h-72c-6.6 0-12 5.4-12 12v112c0 6.6-5.4 12-12 12H112c-13.3 0-24-10.7-24-24V312.7c0-3.6 1.6-7 4.4-9.3l188-154.8c4.4-3.6 10.8-3.6 15.3 0l188 154.8c2.7 2.3 4.3 5.7 4.3 9.3zm83.6-60.9L488 182.9V44.4c0-6.6-5.4-12-12-12h-56c-6.6 0-12 5.4-12 12V117l-89.5-73.7c-17.7-14.6-43.3-14.6-61 0L4.4 251.8c-5.1 4.2-5.8 11.8-1.6 16.9l25.5 31c4.2 5.1 11.8 5.8 16.9 1.6l235.2-193.7c4.4-3.6 10.8-3.6 15.3 0l235.2 193.7c5.1 4.2 12.7 3.5 16.9-1.6l25.5-31c4.2-5.2 3.4-12.7-1.7-16.9z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    className: "jsx-4210915011" + " " + 'cls-1'
  })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
    styleId: "4210915011",
    css: ".cls-1.jsx-4210915011{stroke-dasharray:1000;stroke-dashoffset:1000;-webkit-animation:dash-jsx-4210915011 30s linear alternate infinite;animation:dash-jsx-4210915011 30s linear alternate infinite;-webkit-animation:stroke_fill-jsx-4210915011 10s linear forwards;animation:stroke_fill-jsx-4210915011 10s linear forwards;}@keyframes dash from.jsx-4210915011{stroke-dashoffset:1000;}@keyframes dash to.jsx-4210915011{stroke-dashoffset:0;-webkit-transition:fill .4s ease;transition:fill .4s ease;}@-webkit-keyframes stroke_fill-jsx-4210915011{0%{fill:white;}50%{fill:white;stroke-dashoffset:0;}100%{fill:#6A772A;stroke-dashoffset:0;}}@keyframes stroke_fill-jsx-4210915011{0%{fill:white;}50%{fill:white;stroke-dashoffset:0;}100%{fill:#6A772A;stroke-dashoffset:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkNvbXBvbmVudHMvSG9tZVNlY3Rpb24yL1NWR0ltYWdlcy9Ib21lSW1hZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2UsQUFJK0IsQUFRRyxBQUlILEFBT1QsQUFHQSxBQUlFLFdBTmYsQUFHc0IsRUFJQSxPQWRLLEVBWkosQ0FTdkIsUUFjQSxFQUlBLFlBMUI2QyxpQ0FZN0MsK0ZBWDBDLDBIQUM1QyIsImZpbGUiOiJDb21wb25lbnRzL0hvbWVTZWN0aW9uMi9TVkdJbWFnZXMvSG9tZUltYWdlLmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9wYW1lbGFyaXZlcmEvTWlzRG9jdW1lbnRvcy9jY2kvY2NpaGVyZWRpYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuXG5mdW5jdGlvbiBIb21lSW1hZ2UoKSB7XG5cdHJldHVybiAoXG4gIFxuXHRcdDxkaXY+XG5cbjxzdmcgIHdpZHRoPVwiNTBweFwiIGhlaWdodD1cIjUwcHhcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLXByZWZpeD1cImZhc1wiIGRhdGEtaWNvbj1cImhvbWVcIiBjbGFzc05hbWU9XCJzdmctaW5saW5lLS1mYSBmYS1ob21lIGZhLXctMThcIiByb2xlPVwiaW1nXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgNTc2IDUxMlwiPjxwYXRoIGNsYXNzTmFtZT0nY2xzLTEnIHN0cm9rZT1cIiM2QTc3MkFcIiBzdHJva2Utd2lkdGg9XCI4XCIgZmlsbD1cIiM2QTc3MkFcIiBkPVwiTTQ4OCAzMTIuN1Y0NTZjMCAxMy4zLTEwLjcgMjQtMjQgMjRIMzQ4Yy02LjYgMC0xMi01LjQtMTItMTJWMzU2YzAtNi42LTUuNC0xMi0xMi0xMmgtNzJjLTYuNiAwLTEyIDUuNC0xMiAxMnYxMTJjMCA2LjYtNS40IDEyLTEyIDEySDExMmMtMTMuMyAwLTI0LTEwLjctMjQtMjRWMzEyLjdjMC0zLjYgMS42LTcgNC40LTkuM2wxODgtMTU0LjhjNC40LTMuNiAxMC44LTMuNiAxNS4zIDBsMTg4IDE1NC44YzIuNyAyLjMgNC4zIDUuNyA0LjMgOS4zem04My42LTYwLjlMNDg4IDE4Mi45VjQ0LjRjMC02LjYtNS40LTEyLTEyLTEyaC01NmMtNi42IDAtMTIgNS40LTEyIDEyVjExN2wtODkuNS03My43Yy0xNy43LTE0LjYtNDMuMy0xNC42LTYxIDBMNC40IDI1MS44Yy01LjEgNC4yLTUuOCAxMS44LTEuNiAxNi45bDI1LjUgMzFjNC4yIDUuMSAxMS44IDUuOCAxNi45IDEuNmwyMzUuMi0xOTMuN2M0LjQtMy42IDEwLjgtMy42IDE1LjMgMGwyMzUuMiAxOTMuN2M1LjEgNC4yIDEyLjcgMy41IDE2LjktMS42bDI1LjUtMzFjNC4yLTUuMiAzLjQtMTIuNy0xLjctMTYuOXpcIj48L3BhdGg+PC9zdmc+XG5cdFx0XG5cdFx0XHRcblx0XHRcdDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jbHMtMSB7XG4gICAgIFxuICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAxMDAwO1xuICAgICAgICBzdHJva2UtZGFzaG9mZnNldDogMTAwMDtcbiAgICAgICAgYW5pbWF0aW9uOiBkYXNoIDMwcyBsaW5lYXIgYWx0ZXJuYXRlIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IHN0cm9rZV9maWxsIDEwcyBsaW5lYXIgZm9yd2FyZHM7XG4gICAgICB9XG4gICAgICBcbiAgICAgIEBrZXlmcmFtZXMgZGFzaCB7XG4gICAgICAgIGZyb20ge1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAxMDAwO1xuICAgICAgICAgIC8vIHRyYW5zaXRpb246IGZpbGwgLjRzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgICAgdG8ge1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgLjRzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBzdHJva2VfZmlsbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBmaWxsOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgICAgICA1MCUge1xuICAgICAgICAgIGZpbGw6IHdoaXRlO1xuICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAwO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIGZpbGw6ICM2QTc3MkE7XG4gICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgYH08L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgXG5cblx0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZUltYWdlO1xuIl19 */\n/*@ sourceURL=Components/HomeSection2/SVGImages/HomeImage.js */"
  }));
}

/* harmony default export */ __webpack_exports__["a"] = (HomeImage);

/***/ }),

/***/ "./Components/HomeSection2/VideoCard.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/VideoCard.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var styles = function styles(theme) {
  return {
    root: _objectSpread({}, theme.mixins.gutters(), {
      paddingTop: theme.spacing.unit * 1,
      paddingBottom: theme.spacing.unit * 1
    }),
    root1: {
      "&:hover": {
        boxShadow: "5px 5px 5px 5px #BDBDBD"
      }
    }
  };
};

function VideoCard(props) {
  var classes = props.classes;
  var listVideo = [{
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Crear una cultura de servico en casa."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Imparte fuerzas para vencer el miedo."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Sé vivir."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Este es tu momento."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Una mala racha."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472950204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Donde esta Dios cuando tengo dificultades."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471358830&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Pon tu confianza en el señor."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461122575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Aspira a lo mejor."
  }, {
    src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457565901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
    name: "Un botín prohibido."
  }];
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    }
  }, listVideo.map(function (video) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      className: classes.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
      className: classes.root1,
      elevation: 2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      container: true,
      spacing: 0,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      item: true,
      xs: 8,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
      width: "70%",
      height: "150",
      scrolling: "no",
      frameborder: "no",
      allow: "autoplay",
      src: video.src,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      }
    })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Grid___default.a, {
      item: true,
      xs: 4,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      style: {
        fontSize: "16px",
        textAlign: "left",
        marginTop: "30px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      }
    }, video.name), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
      style: {
        color: "#BDBDBD",
        fontSize: "10px",
        textAlign: "right",
        marginRight: "9px"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88
      }
    }, "Pastor Rolando Soto"))))));
  }));
}

VideoCard.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(VideoCard));

/***/ }),

/***/ "./Components/HomeSection2/VideoCardResponsivo.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_MobileStepper__ = __webpack_require__("@material-ui/core/MobileStepper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_MobileStepper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_MobileStepper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_swipeable_views__ = __webpack_require__("react-swipeable-views");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_swipeable_views___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react_swipeable_views__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection2/VideoCardResponsivo.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }









var tutorialSteps = [{
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/492538365&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Crear una cultura de servico en casa."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/485937321&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Imparte fuerzas para vencer el miedo."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480298671&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Sé vivir."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/480184503&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Este es tu momento."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/475809495&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Una mala racha."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/472950204&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Donde esta Dios cuando tengo dificultades."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471358830&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Pon tu confianza en el señor."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/461122575&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Aspira a lo mejor."
}, {
  src: "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/457565901&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
  label: "Un botín prohibido."
}];

var styles = function styles(theme) {
  return {
    root: {
      maxWidth: 400,
      flexGrow: 1
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      height: 50,
      paddingLeft: theme.spacing.unit * 4,
      marginBottom: 20,
      backgroundColor: theme.palette.background.default
    },
    img: {
      height: 200,
      maxWidth: 400,
      overflow: 'hidden',
      width: '100%'
    }
  };
};

var VideoCardResponsivo =
/*#__PURE__*/
function (_React$Component) {
  _inherits(VideoCardResponsivo, _React$Component);

  function VideoCardResponsivo() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, VideoCardResponsivo);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = VideoCardResponsivo.__proto__ || Object.getPrototypeOf(VideoCardResponsivo)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        activeStep: 0
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleNext", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            activeStep: prevState.activeStep + 1
          };
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleBack", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState(function (prevState) {
          return {
            activeStep: prevState.activeStep - 1
          };
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleStepChange", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value(activeStep) {
        _this.setState({
          activeStep: activeStep
        });
      }
    }), _temp));
  }

  _createClass(VideoCardResponsivo, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          classes = _props.classes,
          theme = _props.theme;
      var activeStep = this.state.activeStep;
      var maxSteps = tutorialSteps.length;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: classes.root,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Paper___default.a, {
        square: true,
        elevation: 0,
        className: classes.header,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        style: {
          fontSize: "16px",
          textAlign: "left",
          marginTop: "30px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, tutorialSteps[activeStep].label, "   ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        style: {
          color: "#BDBDBD",
          fontSize: "10px",
          textAlign: "right",
          marginRight: "9px"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, " Pastor Rolando Soto"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_swipeable_views___default.a, {
        axis: theme.direction === 'rtl' ? 'x-reverse' : 'x',
        index: this.state.activeStep,
        onChangeIndex: this.handleStepChange,
        enableMouseEvents: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, tutorialSteps.map(function (step) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("iframe", {
          width: "100%",
          height: "150",
          scrolling: "no",
          frameborder: "no",
          allow: "autoplay",
          src: step.src,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 113
          }
        });
      })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_MobileStepper___default.a, {
        steps: 5,
        position: "static",
        activeStep: activeStep,
        className: classes.mobileStepper,
        nextButton: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
          size: "small",
          onClick: this.handleNext,
          disabled: activeStep === maxSteps - 1,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          }
        }, "Next", theme.direction === 'rtl' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "fas fa-chevron-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 130
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "fas fa-chevron-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          }
        })),
        backButton: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default.a, {
          size: "small",
          onClick: this.handleBack,
          disabled: activeStep === 0,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          }
        }, theme.direction === 'rtl' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "fas fa-chevron-right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          }
        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("i", {
          className: "fas fa-chevron-left",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          }
        }), "Back"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }));
    }
  }]);

  return VideoCardResponsivo;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

VideoCardResponsivo.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  theme: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles, {
  withTheme: true
})(VideoCardResponsivo));

/***/ }),

/***/ "./Components/HomeSection3.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__ = __webpack_require__("@material-ui/core/Paper");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__ = __webpack_require__("@material-ui/core/Grid");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Grid__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/HomeSection3.js";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








var styles = function styles(theme) {
  return {
    root: _objectSpread({}, theme.mixins.gutters(), {
      marginTop: "100px",
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 5,
      marginLeft: "150px",
      marginRight: "150px"
    }),
    root1: {
      flexGrow: 1 // backgroundImage: "url(\"/static/Untitled (1).png\")",
      // height: 600,

    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: "center" // color: theme.palette.text.secondary,

    },
    paperLeftTitle: {
      padding: theme.spacing.unit * 2,
      fontSize: "26px",
      fontWeight: 600,
      lineHeigth: "32px",
      fontFamily: "Nunito, sans-serif",
      textAlign: "center",
      color: "rgb(84, 84, 84)"
    }
  };
};

function HomeSection3(props) {
  var classes = props.classes;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: classes.root1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Paper___default.a, {
    className: classes.root,
    elevation: 24,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Typography___default.a, {
    className: classes.paperLeftTitle,
    variant: "headline",
    component: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "Se parte de un Grupo de Vida en CCI"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "../static/joinGV.png",
    alt: "CCI",
    height: "240",
    width: "330",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    }
  })));
}

HomeSection3.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* unused harmony default export */ var _unused_webpack_default_export = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(HomeSection3));

/***/ }),

/***/ "./Components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__NavigationBar_Navigation__ = __webpack_require__("./Components/NavigationBar/Navigation.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Footer_Footer__ = __webpack_require__("./Components/Footer/Footer.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/Layout.js";

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
  }]);

  return Layout;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Layout.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Layout));

/***/ }),

/***/ "./Components/NavigationBar/Navigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__ = __webpack_require__("@material-ui/core/AppBar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__ = __webpack_require__("@material-ui/core/Toolbar");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Toolbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__ = __webpack_require__("@material-ui/core/Typography");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_Typography__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__ = __webpack_require__("@material-ui/core/IconButton");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_IconButton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon__ = __webpack_require__("@material-ui/core/Icon");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_Icon__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ResponsiveNavigation__ = __webpack_require__("./Components/NavigationBar/ResponsiveNavigation.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/Navigation.js";

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
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Navigation)); // https://churchthemes.com/church-website-content/

/***/ }),

/***/ "./Components/NavigationBar/ResponsiveNavigation.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer__ = __webpack_require__("@material-ui/core/Drawer");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_Drawer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__ = __webpack_require__("@material-ui/core/Button");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__material_ui_core_Button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__ = __webpack_require__("@material-ui/core/List");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__material_ui_core_List___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__material_ui_core_List__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider__ = __webpack_require__("@material-ui/core/Divider");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__material_ui_core_Divider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__ = __webpack_require__("@material-ui/core/ListItem");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__material_ui_core_ListItem__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__ = __webpack_require__("@material-ui/core/ListItemText");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__material_ui_core_ListItemText__);
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/Components/NavigationBar/ResponsiveNavigation.js";

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
  }]);

  return ResponsiveNavigation;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

ResponsiveNavigation.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(ResponsiveNavigation));

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_withRoot__ = __webpack_require__("./src/withRoot.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Components_Layout__ = __webpack_require__("./Components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Components_HomeSection1_HomeSection1__ = __webpack_require__("./Components/HomeSection1/HomeSection1.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Components_HomeSection3__ = __webpack_require__("./Components/HomeSection3.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Components_HomeSection2_HomeSection2__ = __webpack_require__("./Components/HomeSection2/HomeSection2.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }










var styles = function styles(theme) {
  return {
    root: {
      textAlign: 'center',
      paddingTop: theme.spacing.unit * 20
    }
  };
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        open: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClose", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: false
        });
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "handleClick", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        _this.setState({
          open: true
        });
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var open = this.state.open;
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Components_Layout__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Components_HomeSection1_HomeSection1__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__Components_HomeSection2_HomeSection2__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

Index.propTypes = {
  classes: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_3__src_withRoot__["a" /* default */])(Object(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__["withStyles"])(styles)(Index)));

/***/ }),

/***/ "./src/getPageContext.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getPageContext;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss__ = __webpack_require__("jss");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_jss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_jss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__ = __webpack_require__("@material-ui/core/colors/purple");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_colors_purple__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__ = __webpack_require__("@material-ui/core/colors/green");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_colors_green__);
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

/***/ }),

/***/ "./src/withRoot.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("prop-types");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__ = __webpack_require__("@material-ui/core/styles");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__material_ui_core_styles__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__ = __webpack_require__("@material-ui/core/CssBaseline");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__material_ui_core_CssBaseline__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getPageContext__ = __webpack_require__("./src/getPageContext.js");
var _jsxFileName = "/Users/pamelarivera/MisDocumentos/cci/cciheredia/src/withRoot.js";

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

/* harmony default export */ __webpack_exports__["a"] = (withRoot);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "@material-ui/core/AppBar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "@material-ui/core/Button":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "@material-ui/core/Card":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Card");

/***/ }),

/***/ "@material-ui/core/CardActions":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardActions");

/***/ }),

/***/ "@material-ui/core/CardContent":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardContent");

/***/ }),

/***/ "@material-ui/core/CardMedia":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CardMedia");

/***/ }),

/***/ "@material-ui/core/CssBaseline":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "@material-ui/core/Divider":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "@material-ui/core/Drawer":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Drawer");

/***/ }),

/***/ "@material-ui/core/Grid":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "@material-ui/core/Icon":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Icon");

/***/ }),

/***/ "@material-ui/core/IconButton":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "@material-ui/core/List":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "@material-ui/core/ListItem":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "@material-ui/core/ListItemText":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "@material-ui/core/MobileStepper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MobileStepper");

/***/ }),

/***/ "@material-ui/core/Paper":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "@material-ui/core/Toolbar":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),

/***/ "@material-ui/core/Tooltip":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "@material-ui/core/Typography":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "@material-ui/core/colors/green":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/green");

/***/ }),

/***/ "@material-ui/core/colors/purple":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/purple");

/***/ }),

/***/ "@material-ui/core/styles":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "jss":
/***/ (function(module, exports) {

module.exports = require("jss");

/***/ }),

/***/ "prop-types":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-swipeable-views":
/***/ (function(module, exports) {

module.exports = require("react-swipeable-views");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map