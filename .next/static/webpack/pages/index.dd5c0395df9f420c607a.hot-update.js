webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/config */ \"./utils/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;.Nav{position:fixed;top:0;left:0;cursor:pointer;background-color:var(--navy);box-shadow:-10px 0px 30px -15px var(--lightest-navy);padding:15px 30px;width:100%;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}.Menu{position:fixed;cursor:pointer;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(45px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;resize:both;line-height:27px;color:var(--slate);}@media (max-width:1080px){padding:60px 0px;}@media (max-width:768px){padding:60px 0px;}@media (max-width:480px){padding:60px 10px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sticky = _useState2[0],\n      setSticky = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mountNavbar = function mountNavbar() {\n      var fixed = window.pageYOffset < 9;\n      var innerWidth = window.innerWidth < 763;\n\n      if (!fixed && innerWidth) {\n        setSticky(true);\n      } else {\n        setSticky(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", mountNavbar);\n    return function () {\n      return window.removeEventListener(\"scroll\", mountNavbar);\n    };\n  }, [sticky]);\n  console.log(sticky);\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    marginLeft: toggle ? \"0px\" : \"-400px\"\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"container-wrapper\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              id: \"curvedSvg\",\n              width: \"579\",\n              height: \"575\",\n              viewBox: \"0 0 579 575\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                fillRule: \"evenodd\",\n                clipRule: \"evenodd\",\n                d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n                fill: \"#292F4F\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 167,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\".concat(sticky ? \"Nav\" : \"Menu\"),\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              onClick: function onClick(event) {\n                return _toggleSideBar(event);\n              },\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n                width: \"30\",\n                height: \"29\",\n                viewBox: \"0 0 30 29\",\n                fill: \"none\",\n                xmlns: \"http://www.w3.org/2000/svg\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                  d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                  fill: \"#FFFAFA\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 185,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                  d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                  fill: \"#FFFAFA\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 189,\n                  columnNumber: 21\n                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                  d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                  fill: \"#FFFAFA\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 193,\n                  columnNumber: 21\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 178,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 17\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"socialMedia\",\n              children: _utils_config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                socialMedia: _utils_config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n                toggle: toggle\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 201,\n                columnNumber: 21\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 199,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n                children: \"Hi, my name is\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 208,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 207,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                children: \"Ian A Drilon.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 211,\n                columnNumber: 17\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n                children: \"I build things for web.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 212,\n                columnNumber: 17\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 210,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n                children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 215,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 214,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"button\",\n                onClick: function onClick(event) {\n                  return redirectEmail(event);\n                },\n                children: \"Get In Touch\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 221,\n                columnNumber: 17\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 220,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 206,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"jtVtgUDFQqHnuaem9SnfFYWkRUw=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsInN0aWNreSIsInNldFN0aWNreSIsInVzZUVmZmVjdCIsIm1vdW50TmF2YmFyIiwiZml4ZWQiLCJwYWdlWU9mZnNldCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlZFNpZGViYXIiLCJ1c2VTcHJpbmciLCJ0cmFuc2Zvcm0iLCJtYXJnaW5MZWZ0Iiwic29jaWFsTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSwyL0JBQWhCO0tBQU1GLFU7O0FBNEZOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxLQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUd4QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxLQURvQixFQUVqQjtBQUNIQSxTQUFLLENBQUNDLGNBQU47QUFFQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1Qiw2QkFBdkI7QUFDRCxHQU5EOztBQVFBLE1BQU1DLGNBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJMLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0Ms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QUE7QUFBQSxhQU5GO0FBQUEsa0JBREY7QUFtRkQsQ0FsSUQ7O0dBQU1MLFc7VUEwQ29CdUIsc0Q7OztNQTFDcEJ2QixXO0FBb0lTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNwcmluZywgYW5pbWF0ZWQgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8qXG5pbXBvcnQgU29jaWFsIGZyb20gXCIuL1NvY2lhbFwiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi4vdXRpbHMvY29uZmlnXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCI7XG5cbmNvbnN0IERpdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcblxuICAuTmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDBweCAzMHB4IC0xNXB4IHZhcigtLWxpZ2h0ZXN0LW5hdnkpO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuTWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY3VydmVkU3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgY29sb3I6ICNkYmNmY2Y7XG4gICAgbGluZS1oZWlnaHQ6IDk7XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA1dncsIDIwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCg0NXB4LCA1dncsIDgwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG5cbiAgICBoMjpudGgtY2hpbGQoMikge1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA1dncsIDIwcHgpO1xuICAgICAgbWF4LXdpZHRoOiA0MzBweDtcbiAgICAgIHJlc2l6ZTogYm90aDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogMTA4MHB4KSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMHB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogNjBweCAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVkaXJlY3RFbWFpbCA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJtYWlsdG86aWFuZHJpbG9uMkBnbWFpbC5jb21cIjtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0b2dnbGUpIHtcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vdW50TmF2YmFyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZml4ZWQgPSB3aW5kb3cucGFnZVlPZmZzZXQgPCA5O1xuICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzYzO1xuICAgICAgaWYgKCFmaXhlZCAmJiBpbm5lcldpZHRoKSB7XG4gICAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG1vdW50TmF2YmFyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbW91bnROYXZiYXIpO1xuICB9LCBbc3RpY2t5XSk7XG5cbiAgY29uc29sZS5sb2coc3RpY2t5KTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRvZ2dsZSA/IFwiMHB4XCIgOiBcIi00MDBweFwiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhclxuICAgICAgICBhbmltYXRlZFNpZGViYXI9e2FuaW1hdGVkU2lkZWJhcn1cbiAgICAgICAgdG9vZ2xlPXt0b2dnbGV9XG4gICAgICAgIHRvZ2dsZVNpZGVCYXI9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxEaXZXcmFwcGVyPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGlkPVwiY3VydmVkU3ZnXCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjU3OVwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNTc1XCJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OSA1NzVcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNNTc5IDBIMC42MTM4MzFDMTkuMTUzNSA1Ny4zMDQxIDYwLjEyMzggMTAxLjUwNyAxMjkuOTg1IDEyMC4yMDdDMjgzLjQ4NiAxNjEuMjk1IDI4Ny41MTEgMjU4LjE2NSAyOTEuNDA4IDM1MS45MzFDMjk2LjE3NyA0NjYuNyAzMDAuNzUyIDU3Ni44MiA1NzkgNTc0LjMwOVYwWlwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzI5MkY0RlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0aWNreSA/IFwiTmF2XCIgOiBcIk1lbnVcIn1gfT5cbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9PlxuICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDI5XCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA3LjI0Mzk4QzIuNSA2LjU3OTQgMy4wNTc1IDYuMDQxNjkgMy43NDM3NSA2LjA0MTY5SDEzLjc1NjNDMTQuMDg2MSA2LjA0MTY5IDE0LjQwMjUgNi4xNjgzNiAxNC42MzU3IDYuMzkzODNDMTQuODY5IDYuNjE5MyAxNSA2LjkyNTExIDE1IDcuMjQzOThDMTUgNy41NjI4NSAxNC44NjkgNy44Njg2NSAxNC42MzU3IDguMDk0MTNDMTQuNDAyNSA4LjMxOTYgMTQuMDg2MSA4LjQ0NjI3IDEzLjc1NjMgOC40NDYyN0gzLjc0Mzc1QzMuNDEzODkgOC40NDYyNyAzLjA5NzUzIDguMzE5NiAyLjg2NDI5IDguMDk0MTNDMi42MzEwNCA3Ljg2ODY1IDIuNSA3LjU2Mjg1IDIuNSA3LjI0Mzk4WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDE0LjVDMi41IDEzLjgzNTQgMy4wNTc1IDEzLjI5NzcgMy43NDM3NSAxMy4yOTc3SDI2LjI1NjNDMjYuNTg2MSAxMy4yOTc3IDI2LjkwMjUgMTMuNDI0NCAyNy4xMzU3IDEzLjY0OTlDMjcuMzY5IDEzLjg3NTMgMjcuNSAxNC4xODEyIDI3LjUgMTQuNUMyNy41IDE0LjgxODkgMjcuMzY5IDE1LjEyNDcgMjcuMTM1NyAxNS4zNTAyQzI2LjkwMjUgMTUuNTc1NiAyNi41ODYxIDE1LjcwMjMgMjYuMjU2MyAxNS43MDIzSDMuNzQzNzVDMy40MTM4OSAxNS43MDIzIDMuMDk3NTMgMTUuNTc1NiAyLjg2NDI5IDE1LjM1MDJDMi42MzEwNCAxNS4xMjQ3IDIuNSAxNC44MTg5IDIuNSAxNC41WlwiXG4gICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGQ9XCJNMy43NDM3NSAyMC41NTM4QzMuNDEzODkgMjAuNTUzOCAzLjA5NzUzIDIwLjY4MDQgMi44NjQyOSAyMC45MDU5QzIuNjMxMDQgMjEuMTMxNCAyLjUgMjEuNDM3MiAyLjUgMjEuNzU2MUMyLjUgMjIuMDc0OSAyLjYzMTA0IDIyLjM4MDcgMi44NjQyOSAyMi42MDYyQzMuMDk3NTMgMjIuODMxNyAzLjQxMzg5IDIyLjk1ODQgMy43NDM3NSAyMi45NTg0SDE4Ljc1NjNDMTkuMDg2MSAyMi45NTg0IDE5LjQwMjUgMjIuODMxNyAxOS42MzU3IDIyLjYwNjJDMTkuODY5IDIyLjM4MDcgMjAgMjIuMDc0OSAyMCAyMS43NTYxQzIwIDIxLjQzNzIgMTkuODY5IDIxLjEzMTQgMTkuNjM1NyAyMC45MDU5QzE5LjQwMjUgMjAuNjgwNCAxOS4wODYxIDIwLjU1MzggMTguNzU2MyAyMC41NTM4SDMuNzQzNzVaXCJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhXCI+XG4gICAgICAgICAgICAgICAgICB7c29jaWFsTWVkaWEgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX0gdG9nZ2xlPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDM+SGksIG15IG5hbWUgaXM8L2gzPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDI+SWFuIEEgRHJpbG9uLjwvaDI+XG4gICAgICAgICAgICAgICAgPGgyPkkgYnVpbGQgdGhpbmdzIGZvciB3ZWIuPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSxcbiAgICAgICAgICAgICAgICAgIHRha2luZyBhIEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gQ29tcHV0ZXIgU2NpZW5jZS5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcmVkaXJlY3RFbWFpbChldmVudCl9PlxuICAgICAgICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvRGl2V3JhcHBlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})