webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;.Nav{position:fixed;top:0;left:0;cursor:pointer;background-color:var(--navy);box-shadow:-10px 0px 30px -15px var(--lightest-navy);padding:15px 30px;width:100%;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}.Menu{position:fixed;cursor:pointer;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(45px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 10px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sticky = _useState2[0],\n      setSticky = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mountNavbar = function mountNavbar() {\n      var fixed = window.pageYOffset < 180;\n      var innerWidth = window.innerWidth < 763;\n\n      if (!fixed && innerWidth) {\n        setSticky(true);\n      } else {\n        setSticky(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", mountNavbar);\n    return function () {\n      return window.removeEventListener(\"scroll\", mountNavbar);\n    };\n  }, [sticky]);\n  console.log(sticky);\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    // transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    marginLeft: toggle ? \"0px\" : \"-400px\"\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 161,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"\".concat(sticky ? \"Nav\" : \"Menu\"),\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 179,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 183,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 187,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 172,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 171,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 195,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 193,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 170,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 202,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 201,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 205,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 206,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 204,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 209,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 208,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 215,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 214,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 200,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 150,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"jtVtgUDFQqHnuaem9SnfFYWkRUw=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsInN0aWNreSIsInNldFN0aWNreSIsInVzZUVmZmVjdCIsIm1vdW50TmF2YmFyIiwiZml4ZWQiLCJwYWdlWU9mZnNldCIsImlubmVyV2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJhbmltYXRlZFNpZGViYXIiLCJ1c2VTcHJpbmciLCJtYXJnaW5MZWZ0Iiwic29jaWFsTWVkaWEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFVBQVUsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvOEJBQWhCO0tBQU1GLFU7O0FBdUZOLElBQU1HLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFBQTs7QUFBQSxrQkFDSUMsc0RBQVEsQ0FBQyxLQUFELENBRFo7QUFBQSxNQUNqQkMsTUFEaUI7QUFBQSxNQUNUQyxTQURTOztBQUd4QixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCQyxLQURvQixFQUVqQjtBQUNIQSxTQUFLLENBQUNDLGNBQU47QUFFQUMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1Qiw2QkFBdkI7QUFDRCxHQU5EOztBQVFBLE1BQU1DLGNBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJMLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjs7QUFFQSxR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LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcsIGFuaW1hdGVkIH0gZnJvbSBcInJlYWN0LXNwcmluZ1wiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbi8vKlxuaW1wb3J0IFNvY2lhbCBmcm9tIFwiLi9Tb2NpYWxcIjtcbmltcG9ydCB7IHNvY2lhbE1lZGlhIH0gZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9TaWRlYmFyXCI7XG5cbmNvbnN0IERpdldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDogMTAwJTtcblxuICAuTmF2IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdnkpO1xuICAgIGJveC1zaGFkb3c6IC0xMHB4IDBweCAzMHB4IC0xNXB4IHZhcigtLWxpZ2h0ZXN0LW5hdnkpO1xuICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuTWVudSB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiAxMDtcblxuICAgIC5zb2NpYWxNZWRpYSB7XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAjY3VydmVkU3ZnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIHotaW5kZXg6IC0xO1xuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gIHNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDYwcHggMTAwcHg7XG4gICAgY29sb3I6ICNkYmNmY2Y7XG4gICAgbGluZS1oZWlnaHQ6IDk7XG5cbiAgICBoMyB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcbiAgICAgIG1hcmdpbjogMHB4IDBweCAxNXB4IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoNXB4LCA1dncsIDIwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCg0NXB4LCA1dncsIDgwcHgpO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMHB4O1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICB9XG5cbiAgICBoMjpudGgtY2hpbGQoMikge1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgZm9udC1zaXplOiBjbGFtcCgxMHB4LCA1dncsIDIwcHgpO1xuICAgICAgbWF4LXdpZHRoOiA0MzBweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMzVweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDYwcHggMTBweDtcbiAgICB9XG4gIH1cbmA7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xuICBjb25zdCBbdG9nZ2xlLCBzZXRUb2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHJlZGlyZWN0RW1haWwgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwibWFpbHRvOmlhbmRyaWxvbjJAZ21haWwuY29tXCI7XG4gIH07XG5cbiAgY29uc3QgdG9nZ2xlU2lkZUJhciA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MRGl2RWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICghdG9nZ2xlKSB7XG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFRvZ2dsZShmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtzdGlja3ksIHNldFN0aWNreV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBtb3VudE5hdmJhciA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGZpeGVkID0gd2luZG93LnBhZ2VZT2Zmc2V0IDwgMTgwO1xuICAgICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIDwgNzYzO1xuICAgICAgaWYgKCFmaXhlZCAmJiBpbm5lcldpZHRoKSB7XG4gICAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG1vdW50TmF2YmFyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbW91bnROYXZiYXIpO1xuICB9LCBbc3RpY2t5XSk7XG5cbiAgY29uc29sZS5sb2coc3RpY2t5KTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIC8vIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRvZ2dsZSA/IFwiMHB4XCIgOiBcIi00MDBweFwiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhclxuICAgICAgICBhbmltYXRlZFNpZGViYXI9e2FuaW1hdGVkU2lkZWJhcn1cbiAgICAgICAgdG9vZ2xlPXt0b2dnbGV9XG4gICAgICAgIHRvZ2dsZVNpZGVCYXI9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPERpdldyYXBwZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgaWQ9XCJjdXJ2ZWRTdmdcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU3OVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjU3NVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc5IDU3NVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNTc5IDBIMC42MTM4MzFDMTkuMTUzNSA1Ny4zMDQxIDYwLjEyMzggMTAxLjUwNyAxMjkuOTg1IDEyMC4yMDdDMjgzLjQ4NiAxNjEuMjk1IDI4Ny41MTEgMjU4LjE2NSAyOTEuNDA4IDM1MS45MzFDMjk2LjE3NyA0NjYuNyAzMDAuNzUyIDU3Ni44MiA1NzkgNTc0LjMwOVYwWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyOTJGNEZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyF0b2dnbGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0aWNreSA/IFwiTmF2XCIgOiBcIk1lbnVcIn1gfT5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI5XCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMjlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNy4yNDM5OEMyLjUgNi41Nzk0IDMuMDU3NSA2LjA0MTY5IDMuNzQzNzUgNi4wNDE2OUgxMy43NTYzQzE0LjA4NjEgNi4wNDE2OSAxNC40MDI1IDYuMTY4MzYgMTQuNjM1NyA2LjM5MzgzQzE0Ljg2OSA2LjYxOTMgMTUgNi45MjUxMSAxNSA3LjI0Mzk4QzE1IDcuNTYyODUgMTQuODY5IDcuODY4NjUgMTQuNjM1NyA4LjA5NDEzQzE0LjQwMjUgOC4zMTk2IDE0LjA4NjEgOC40NDYyNyAxMy43NTYzIDguNDQ2MjdIMy43NDM3NUMzLjQxMzg5IDguNDQ2MjcgMy4wOTc1MyA4LjMxOTYgMi44NjQyOSA4LjA5NDEzQzIuNjMxMDQgNy44Njg2NSAyLjUgNy41NjI4NSAyLjUgNy4yNDM5OFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgMTQuNUMyLjUgMTMuODM1NCAzLjA1NzUgMTMuMjk3NyAzLjc0Mzc1IDEzLjI5NzdIMjYuMjU2M0MyNi41ODYxIDEzLjI5NzcgMjYuOTAyNSAxMy40MjQ0IDI3LjEzNTcgMTMuNjQ5OUMyNy4zNjkgMTMuODc1MyAyNy41IDE0LjE4MTIgMjcuNSAxNC41QzI3LjUgMTQuODE4OSAyNy4zNjkgMTUuMTI0NyAyNy4xMzU3IDE1LjM1MDJDMjYuOTAyNSAxNS41NzU2IDI2LjU4NjEgMTUuNzAyMyAyNi4yNTYzIDE1LjcwMjNIMy43NDM3NUMzLjQxMzg5IDE1LjcwMjMgMy4wOTc1MyAxNS41NzU2IDIuODY0MjkgMTUuMzUwMkMyLjYzMTA0IDE1LjEyNDcgMi41IDE0LjgxODkgMi41IDE0LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMy43NDM3NSAyMC41NTM4QzMuNDEzODkgMjAuNTUzOCAzLjA5NzUzIDIwLjY4MDQgMi44NjQyOSAyMC45MDU5QzIuNjMxMDQgMjEuMTMxNCAyLjUgMjEuNDM3MiAyLjUgMjEuNzU2MUMyLjUgMjIuMDc0OSAyLjYzMTA0IDIyLjM4MDcgMi44NjQyOSAyMi42MDYyQzMuMDk3NTMgMjIuODMxNyAzLjQxMzg5IDIyLjk1ODQgMy43NDM3NSAyMi45NTg0SDE4Ljc1NjNDMTkuMDg2MSAyMi45NTg0IDE5LjQwMjUgMjIuODMxNyAxOS42MzU3IDIyLjYwNjJDMTkuODY5IDIyLjM4MDcgMjAgMjIuMDc0OSAyMCAyMS43NTYxQzIwIDIxLjQzNzIgMTkuODY5IDIxLjEzMTQgMTkuNjM1NyAyMC45MDU5QzE5LjQwMjUgMjAuNjgwNCAxOS4wODYxIDIwLjU1MzggMTguNzU2MyAyMC41NTM4SDMuNzQzNzVaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFcIj5cbiAgICAgICAgICAgICAgICB7c29jaWFsTWVkaWEgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9IHRvZ2dsZT17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5IaSwgbXkgbmFtZSBpczwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5JYW4gQSBEcmlsb24uPC9oMj5cbiAgICAgICAgICAgICAgPGgyPkkgYnVpbGQgdGhpbmdzIGZvciB3ZWIuPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSeKAmW0gYSBzdHVkZW50IG9mIElsb2lsbyBTY2llbmNlIGFuZCBUZWNobm9sb2d5IFVuaXZlcnNpdHksXG4gICAgICAgICAgICAgICAgdGFraW5nIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBDb21wdXRlciBTY2llbmNlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcmVkaXJlY3RFbWFpbChldmVudCl9PlxuICAgICAgICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9EaXZXcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})