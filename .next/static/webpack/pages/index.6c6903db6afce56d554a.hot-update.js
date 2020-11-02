webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;#Menu{position:fixed;cursor:pointer;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(35px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 35px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({// transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    // opacity: toggle ? 1 : 0,\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 115,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"Menu\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 141,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 145,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 149,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 134,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 133,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 157,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 155,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 132,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 164,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 163,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A. Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 168,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 166,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 171,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 170,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 176,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 162,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 112,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"Xv1HnMOfur0YFwP/B47l3SMo+0M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsImFuaW1hdGVkU2lkZWJhciIsInVzZVNwcmluZyIsInNvY2lhbE1lZGlhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxVQUFVLEdBQUdDLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEseXRCQUFoQjtLQUFNRixVOztBQW9FTixJQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsS0FBRCxDQURaO0FBQUEsTUFDakJDLE1BRGlCO0FBQUEsTUFDVEMsU0FEUzs7QUFHeEIsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkMsS0FEb0IsRUFFakI7QUFDSEEsU0FBSyxDQUFDQyxjQUFOO0FBRUFDLFVBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsNkJBQXZCO0FBQ0QsR0FORDs7QUFRQSxNQUFNQyxjQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQ3BCTCxLQURvQixFQUVqQjtBQUNIQSxTQUFLLENBQUNDLGNBQU47O0FBRUEsUUFBSSxDQUFDSixNQUFMLEVBQWE7QUFDWEMsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsS0FBRCxDQUFUO0FBQ0Q7QUFDRixHQVZEOztBQVlBLE1BQU1RLGVBQWUsR0FBR0MsOERBQVMsQ0FBQyxDQUNoQztBQUNBO0FBRmdD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QUFBO0FBQUE7QUFBQTtBQUFBLGFBTkY7QUFBQSxrQkFERjtBQWlGRCxDQTdHRDs7R0FBTUwsVztVQXVCb0JZLHNEOzs7TUF2QnBCWixXO0FBK0dTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8qXG5pbXBvcnQgU29jaWFsIGZyb20gXCIuL1NvY2lhbFwiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcblxuY29uc3QgRGl2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICNNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgLnNvY2lhbE1lZGlhIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjdXJ2ZWRTdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAxMDBweDtcbiAgICBjb2xvcjogI2RiY2ZjZjtcbiAgICBsaW5lLWhlaWdodDogOTtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDE1cHggNHB4O1xuICAgICAgZm9udC1zaXplOiBjbGFtcCg1cHgsIDV2dywgMjBweCk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDM1cHgsIDV2dywgODBweCk7XG4gICAgICBmb250LXdlaWdodDogNjAwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cblxuICAgIGgyOm50aC1jaGlsZCgyKSB7XG4gICAgICBjb2xvcjogdmFyKC0tc2xhdGUpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDV2dywgMjBweCk7XG4gICAgICBtYXgtd2lkdGg6IDQzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICBjb2xvcjogdmFyKC0tc2xhdGUpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgcGFkZGluZzogNjBweCAzNXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogNjBweCAzNXB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVkaXJlY3RFbWFpbCA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJtYWlsdG86aWFuZHJpbG9uMkBnbWFpbC5jb21cIjtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0b2dnbGUpIHtcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgYW5pbWF0ZWRTaWRlYmFyID0gdXNlU3ByaW5nKHtcbiAgICAvLyB0cmFuc2Zvcm06IHRvZ2dsZSA/IFwidHJhbnNsYXRlWCgwJSlcIiA6IFwidHJhbnNsYXRlWCgtMTAwJSlcIixcbiAgICAvLyBvcGFjaXR5OiB0b2dnbGUgPyAxIDogMCxcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgYW5pbWF0ZWRTaWRlYmFyPXthbmltYXRlZFNpZGViYXJ9XG4gICAgICAgIHRvb2dsZT17dG9nZ2xlfVxuICAgICAgICB0b2dnbGVTaWRlQmFyPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfVxuICAgICAgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxEaXZXcmFwcGVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgIGlkPVwiY3VydmVkU3ZnXCJcbiAgICAgICAgICAgICAgd2lkdGg9XCI1NzlcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCI1NzVcIlxuICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3OSA1NzVcIlxuICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBkPVwiTTU3OSAwSDAuNjEzODMxQzE5LjE1MzUgNTcuMzA0MSA2MC4xMjM4IDEwMS41MDcgMTI5Ljk4NSAxMjAuMjA3QzI4My40ODYgMTYxLjI5NSAyODcuNTExIDI1OC4xNjUgMjkxLjQwOCAzNTEuOTMxQzI5Ni4xNzcgNDY2LjcgMzAwLjc1MiA1NzYuODIgNTc5IDU3NC4zMDlWMFpcIlxuICAgICAgICAgICAgICAgIGZpbGw9XCIjMjkyRjRGXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHshdG9nZ2xlICYmIChcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJNZW51XCI+XG4gICAgICAgICAgICAgIDxkaXYgb25DbGljaz17KGV2ZW50KSA9PiB0b2dnbGVTaWRlQmFyKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIzMFwiXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyOVwiXG4gICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDMwIDI5XCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDcuMjQzOThDMi41IDYuNTc5NCAzLjA1NzUgNi4wNDE2OSAzLjc0Mzc1IDYuMDQxNjlIMTMuNzU2M0MxNC4wODYxIDYuMDQxNjkgMTQuNDAyNSA2LjE2ODM2IDE0LjYzNTcgNi4zOTM4M0MxNC44NjkgNi42MTkzIDE1IDYuOTI1MTEgMTUgNy4yNDM5OEMxNSA3LjU2Mjg1IDE0Ljg2OSA3Ljg2ODY1IDE0LjYzNTcgOC4wOTQxM0MxNC40MDI1IDguMzE5NiAxNC4wODYxIDguNDQ2MjcgMTMuNzU2MyA4LjQ0NjI3SDMuNzQzNzVDMy40MTM4OSA4LjQ0NjI3IDMuMDk3NTMgOC4zMTk2IDIuODY0MjkgOC4wOTQxM0MyLjYzMTA0IDcuODY4NjUgMi41IDcuNTYyODUgMi41IDcuMjQzOThaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMi41IDE0LjVDMi41IDEzLjgzNTQgMy4wNTc1IDEzLjI5NzcgMy43NDM3NSAxMy4yOTc3SDI2LjI1NjNDMjYuNTg2MSAxMy4yOTc3IDI2LjkwMjUgMTMuNDI0NCAyNy4xMzU3IDEzLjY0OTlDMjcuMzY5IDEzLjg3NTMgMjcuNSAxNC4xODEyIDI3LjUgMTQuNUMyNy41IDE0LjgxODkgMjcuMzY5IDE1LjEyNDcgMjcuMTM1NyAxNS4zNTAyQzI2LjkwMjUgMTUuNTc1NiAyNi41ODYxIDE1LjcwMjMgMjYuMjU2MyAxNS43MDIzSDMuNzQzNzVDMy40MTM4OSAxNS43MDIzIDMuMDk3NTMgMTUuNTc1NiAyLjg2NDI5IDE1LjM1MDJDMi42MzEwNCAxNS4xMjQ3IDIuNSAxNC44MTg5IDIuNSAxNC41WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTMuNzQzNzUgMjAuNTUzOEMzLjQxMzg5IDIwLjU1MzggMy4wOTc1MyAyMC42ODA0IDIuODY0MjkgMjAuOTA1OUMyLjYzMTA0IDIxLjEzMTQgMi41IDIxLjQzNzIgMi41IDIxLjc1NjFDMi41IDIyLjA3NDkgMi42MzEwNCAyMi4zODA3IDIuODY0MjkgMjIuNjA2MkMzLjA5NzUzIDIyLjgzMTcgMy40MTM4OSAyMi45NTg0IDMuNzQzNzUgMjIuOTU4NEgxOC43NTYzQzE5LjA4NjEgMjIuOTU4NCAxOS40MDI1IDIyLjgzMTcgMTkuNjM1NyAyMi42MDYyQzE5Ljg2OSAyMi4zODA3IDIwIDIyLjA3NDkgMjAgMjEuNzU2MUMyMCAyMS40MzcyIDE5Ljg2OSAyMS4xMzE0IDE5LjYzNTcgMjAuOTA1OUMxOS40MDI1IDIwLjY4MDQgMTkuMDg2MSAyMC41NTM4IDE4Ljc1NjMgMjAuNTUzOEgzLjc0Mzc1WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbE1lZGlhXCI+XG4gICAgICAgICAgICAgICAge3NvY2lhbE1lZGlhICYmIChcbiAgICAgICAgICAgICAgICAgIDxTb2NpYWwgc29jaWFsTWVkaWE9e3NvY2lhbE1lZGlhfSB0b2dnbGU9e3RvZ2dsZX0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDM+SGksIG15IG5hbWUgaXM8L2gzPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDI+SWFuIEEuIERyaWxvbi48L2gyPlxuICAgICAgICAgICAgICA8aDI+SSBidWlsZCB0aGluZ3MgZm9yIHdlYi48L2gyPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSxcbiAgICAgICAgICAgICAgICB0YWtpbmcgYSBCYWNoZWxvciBvZiBTY2llbmNlIGluIENvbXB1dGVyIFNjaWVuY2UuXG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KGV2ZW50KSA9PiByZWRpcmVjdEVtYWlsKGV2ZW50KX0+XG4gICAgICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L0RpdldyYXBwZXI+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})