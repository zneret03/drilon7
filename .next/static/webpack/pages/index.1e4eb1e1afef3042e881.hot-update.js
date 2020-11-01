webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;#Menu{position:fixed;z-index:2;cursor:pointer;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(35px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 35px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    opacity: toggle ? 1 : 0\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 109,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"Menu\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 136,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 140,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 144,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 128,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 152,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 127,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 159,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 158,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A. Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 162,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 163,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 161,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 166,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 172,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 171,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 157,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 107,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_s(LandingPage, \"Xv1HnMOfur0YFwP/B47l3SMo+0M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsImFuaW1hdGVkU2lkZWJhciIsInVzZVNwcmluZyIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJzb2NpYWxNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBR0EsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLHd0QkFBaEI7S0FBTUYsVTs7QUFvRU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBR3hCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJDLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDZCQUF2QjtBQUNELEdBTkQ7O0FBUUEsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkwsS0FEb0IsRUFFakI7QUFDSEEsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUksQ0FBQ0osTUFBTCxFQUFhO0FBQ1hDLGVBQVMsQ0FBQyxJQUFELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FWRDs7QUFZQSxNQUFNUSxlQUFlLEdBQUdDLDhEQUFTLENBQUM7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WixXO0FBMEdTQSwwRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTGFuZGluZ1BhZ2UudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8qXG5pbXBvcnQgU29jaWFsIGZyb20gXCIuL1NvY2lhbFwiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcblxuY29uc3QgRGl2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICNNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAuc29jaWFsTWVkaWEge1xuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2N1cnZlZFN2ZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cblxuICBzZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA2MHB4IDEwMHB4O1xuICAgIGNvbG9yOiAjZGJjZmNmO1xuICAgIGxpbmUtaGVpZ2h0OiA5O1xuXG4gICAgaDMge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gICAgICBtYXJnaW46IDBweCAwcHggMTVweCA0cHg7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDVweCwgNXZ3LCAyMHB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMzVweCwgNXZ3LCA4MHB4KTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDBweDtcbiAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgfVxuXG4gICAgaDI6bnRoLWNoaWxkKDIpIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBmb250LWZhbWlseTogdmFyKC0tZm9udC1zYW5zKTtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoMTBweCwgNXZ3LCAyMHB4KTtcbiAgICAgIG1heC13aWR0aDogNDMwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjdweDtcbiAgICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM1cHg7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICBwYWRkaW5nOiA2MHB4IDM1cHg7XG4gICAgfVxuICB9XG5gO1xuXG5jb25zdCBMYW5kaW5nUGFnZSA9ICgpID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCByZWRpcmVjdEVtYWlsID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haWx0bzppYW5kcmlsb24yQGdtYWlsLmNvbVwiO1xuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZVNpZGVCYXIgPSAoXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+XG4gICkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBpZiAoIXRvZ2dsZSkge1xuICAgICAgc2V0VG9nZ2xlKHRydWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXRUb2dnbGUoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG9wYWNpdHk6IHRvZ2dsZSA/IDEgOiAwLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8RGl2V3JhcHBlcj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICBpZD1cImN1cnZlZFN2Z1wiXG4gICAgICAgICAgICAgIHdpZHRoPVwiNTc5XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiNTc1XCJcbiAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NzkgNTc1XCJcbiAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGNsaXBSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgZD1cIk01NzkgMEgwLjYxMzgzMUMxOS4xNTM1IDU3LjMwNDEgNjAuMTIzOCAxMDEuNTA3IDEyOS45ODUgMTIwLjIwN0MyODMuNDg2IDE2MS4yOTUgMjg3LjUxMSAyNTguMTY1IDI5MS40MDggMzUxLjkzMUMyOTYuMTc3IDQ2Ni43IDMwMC43NTIgNTc2LjgyIDU3OSA1NzQuMzA5VjBaXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzI5MkY0RlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7IXRvZ2dsZSAmJiAoXG4gICAgICAgICAgICA8ZGl2IGlkPVwiTWVudVwiPlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9PlxuICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMzBcIlxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjlcIlxuICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAyOVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSA3LjI0Mzk4QzIuNSA2LjU3OTQgMy4wNTc1IDYuMDQxNjkgMy43NDM3NSA2LjA0MTY5SDEzLjc1NjNDMTQuMDg2MSA2LjA0MTY5IDE0LjQwMjUgNi4xNjgzNiAxNC42MzU3IDYuMzkzODNDMTQuODY5IDYuNjE5MyAxNSA2LjkyNTExIDE1IDcuMjQzOThDMTUgNy41NjI4NSAxNC44NjkgNy44Njg2NSAxNC42MzU3IDguMDk0MTNDMTQuNDAyNSA4LjMxOTYgMTQuMDg2MSA4LjQ0NjI3IDEzLjc1NjMgOC40NDYyN0gzLjc0Mzc1QzMuNDEzODkgOC40NDYyNyAzLjA5NzUzIDguMzE5NiAyLjg2NDI5IDguMDk0MTNDMi42MzEwNCA3Ljg2ODY1IDIuNSA3LjU2Mjg1IDIuNSA3LjI0Mzk4WlwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIuNSAxNC41QzIuNSAxMy44MzU0IDMuMDU3NSAxMy4yOTc3IDMuNzQzNzUgMTMuMjk3N0gyNi4yNTYzQzI2LjU4NjEgMTMuMjk3NyAyNi45MDI1IDEzLjQyNDQgMjcuMTM1NyAxMy42NDk5QzI3LjM2OSAxMy44NzUzIDI3LjUgMTQuMTgxMiAyNy41IDE0LjVDMjcuNSAxNC44MTg5IDI3LjM2OSAxNS4xMjQ3IDI3LjEzNTcgMTUuMzUwMkMyNi45MDI1IDE1LjU3NTYgMjYuNTg2MSAxNS43MDIzIDI2LjI1NjMgMTUuNzAyM0gzLjc0Mzc1QzMuNDEzODkgMTUuNzAyMyAzLjA5NzUzIDE1LjU3NTYgMi44NjQyOSAxNS4zNTAyQzIuNjMxMDQgMTUuMTI0NyAyLjUgMTQuODE4OSAyLjUgMTQuNVpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0zLjc0Mzc1IDIwLjU1MzhDMy40MTM4OSAyMC41NTM4IDMuMDk3NTMgMjAuNjgwNCAyLjg2NDI5IDIwLjkwNTlDMi42MzEwNCAyMS4xMzE0IDIuNSAyMS40MzcyIDIuNSAyMS43NTYxQzIuNSAyMi4wNzQ5IDIuNjMxMDQgMjIuMzgwNyAyLjg2NDI5IDIyLjYwNjJDMy4wOTc1MyAyMi44MzE3IDMuNDEzODkgMjIuOTU4NCAzLjc0Mzc1IDIyLjk1ODRIMTguNzU2M0MxOS4wODYxIDIyLjk1ODQgMTkuNDAyNSAyMi44MzE3IDE5LjYzNTcgMjIuNjA2MkMxOS44NjkgMjIuMzgwNyAyMCAyMi4wNzQ5IDIwIDIxLjc1NjFDMjAgMjEuNDM3MiAxOS44NjkgMjEuMTMxNCAxOS42MzU3IDIwLjkwNTlDMTkuNDAyNSAyMC42ODA0IDE5LjA4NjEgMjAuNTUzOCAxOC43NTYzIDIwLjU1MzhIMy43NDM3NVpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWxNZWRpYVwiPlxuICAgICAgICAgICAgICAgIHtzb2NpYWxNZWRpYSAmJiAoXG4gICAgICAgICAgICAgICAgICA8U29jaWFsIHNvY2lhbE1lZGlhPXtzb2NpYWxNZWRpYX0gdG9nZ2xlPXt0b2dnbGV9IC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgzPkhpLCBteSBuYW1lIGlzPC9oMz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGgyPklhbiBBLiBEcmlsb24uPC9oMj5cbiAgICAgICAgICAgICAgPGgyPkkgYnVpbGQgdGhpbmdzIGZvciB3ZWIuPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSeKAmW0gYSBzdHVkZW50IG9mIElsb2lsbyBTY2llbmNlIGFuZCBUZWNobm9sb2d5IFVuaXZlcnNpdHksXG4gICAgICAgICAgICAgICAgdGFraW5nIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBDb21wdXRlciBTY2llbmNlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcmVkaXJlY3RFbWFpbChldmVudCl9PlxuICAgICAgICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9EaXZXcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ }),

/***/ "./components/Sidebar.tsx":
false,

/***/ "./node_modules/prop-types/checkPropTypes.js":
false,

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
false,

/***/ "./node_modules/prop-types/index.js":
false,

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
false,

/***/ "./node_modules/react-fast-compare/index.js":
false,

/***/ "./node_modules/react-feather/dist/icons/activity.js":
false,

/***/ "./node_modules/react-feather/dist/icons/airplay.js":
false,

/***/ "./node_modules/react-feather/dist/icons/alert-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/alert-octagon.js":
false,

/***/ "./node_modules/react-feather/dist/icons/alert-triangle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/align-center.js":
false,

/***/ "./node_modules/react-feather/dist/icons/align-justify.js":
false,

/***/ "./node_modules/react-feather/dist/icons/align-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/align-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/anchor.js":
false,

/***/ "./node_modules/react-feather/dist/icons/aperture.js":
false,

/***/ "./node_modules/react-feather/dist/icons/archive.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-down-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-down-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-down-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-left-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-right-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-up-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-up-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-up-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/arrow-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/at-sign.js":
false,

/***/ "./node_modules/react-feather/dist/icons/award.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bar-chart-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bar-chart.js":
false,

/***/ "./node_modules/react-feather/dist/icons/battery-charging.js":
false,

/***/ "./node_modules/react-feather/dist/icons/battery.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bell-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bell.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bluetooth.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bold.js":
false,

/***/ "./node_modules/react-feather/dist/icons/book-open.js":
false,

/***/ "./node_modules/react-feather/dist/icons/book.js":
false,

/***/ "./node_modules/react-feather/dist/icons/bookmark.js":
false,

/***/ "./node_modules/react-feather/dist/icons/box.js":
false,

/***/ "./node_modules/react-feather/dist/icons/briefcase.js":
false,

/***/ "./node_modules/react-feather/dist/icons/calendar.js":
false,

/***/ "./node_modules/react-feather/dist/icons/camera-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/camera.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cast.js":
false,

/***/ "./node_modules/react-feather/dist/icons/check-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/check-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/check.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevron-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevron-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevron-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevron-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevrons-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevrons-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevrons-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chevrons-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/chrome.js":
false,

/***/ "./node_modules/react-feather/dist/icons/circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/clipboard.js":
false,

/***/ "./node_modules/react-feather/dist/icons/clock.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud-drizzle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud-lightning.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud-rain.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud-snow.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cloud.js":
false,

/***/ "./node_modules/react-feather/dist/icons/code.js":
false,

/***/ "./node_modules/react-feather/dist/icons/codepen.js":
false,

/***/ "./node_modules/react-feather/dist/icons/codesandbox.js":
false,

/***/ "./node_modules/react-feather/dist/icons/coffee.js":
false,

/***/ "./node_modules/react-feather/dist/icons/columns.js":
false,

/***/ "./node_modules/react-feather/dist/icons/command.js":
false,

/***/ "./node_modules/react-feather/dist/icons/compass.js":
false,

/***/ "./node_modules/react-feather/dist/icons/copy.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-down-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-down-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-left-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-left-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-right-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-right-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-up-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/corner-up-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/cpu.js":
false,

/***/ "./node_modules/react-feather/dist/icons/credit-card.js":
false,

/***/ "./node_modules/react-feather/dist/icons/crop.js":
false,

/***/ "./node_modules/react-feather/dist/icons/crosshair.js":
false,

/***/ "./node_modules/react-feather/dist/icons/database.js":
false,

/***/ "./node_modules/react-feather/dist/icons/delete.js":
false,

/***/ "./node_modules/react-feather/dist/icons/disc.js":
false,

/***/ "./node_modules/react-feather/dist/icons/divide-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/divide-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/divide.js":
false,

/***/ "./node_modules/react-feather/dist/icons/dollar-sign.js":
false,

/***/ "./node_modules/react-feather/dist/icons/download-cloud.js":
false,

/***/ "./node_modules/react-feather/dist/icons/download.js":
false,

/***/ "./node_modules/react-feather/dist/icons/dribbble.js":
false,

/***/ "./node_modules/react-feather/dist/icons/droplet.js":
false,

/***/ "./node_modules/react-feather/dist/icons/edit-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/edit-3.js":
false,

/***/ "./node_modules/react-feather/dist/icons/edit.js":
false,

/***/ "./node_modules/react-feather/dist/icons/external-link.js":
false,

/***/ "./node_modules/react-feather/dist/icons/eye-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/eye.js":
false,

/***/ "./node_modules/react-feather/dist/icons/facebook.js":
false,

/***/ "./node_modules/react-feather/dist/icons/fast-forward.js":
false,

/***/ "./node_modules/react-feather/dist/icons/feather.js":
false,

/***/ "./node_modules/react-feather/dist/icons/figma.js":
false,

/***/ "./node_modules/react-feather/dist/icons/file-minus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/file-plus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/file-text.js":
false,

/***/ "./node_modules/react-feather/dist/icons/file.js":
false,

/***/ "./node_modules/react-feather/dist/icons/film.js":
false,

/***/ "./node_modules/react-feather/dist/icons/filter.js":
false,

/***/ "./node_modules/react-feather/dist/icons/flag.js":
false,

/***/ "./node_modules/react-feather/dist/icons/folder-minus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/folder-plus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/folder.js":
false,

/***/ "./node_modules/react-feather/dist/icons/framer.js":
false,

/***/ "./node_modules/react-feather/dist/icons/frown.js":
false,

/***/ "./node_modules/react-feather/dist/icons/gift.js":
false,

/***/ "./node_modules/react-feather/dist/icons/git-branch.js":
false,

/***/ "./node_modules/react-feather/dist/icons/git-commit.js":
false,

/***/ "./node_modules/react-feather/dist/icons/git-merge.js":
false,

/***/ "./node_modules/react-feather/dist/icons/git-pull-request.js":
false,

/***/ "./node_modules/react-feather/dist/icons/github.js":
false,

/***/ "./node_modules/react-feather/dist/icons/gitlab.js":
false,

/***/ "./node_modules/react-feather/dist/icons/globe.js":
false,

/***/ "./node_modules/react-feather/dist/icons/grid.js":
false,

/***/ "./node_modules/react-feather/dist/icons/hard-drive.js":
false,

/***/ "./node_modules/react-feather/dist/icons/hash.js":
false,

/***/ "./node_modules/react-feather/dist/icons/headphones.js":
false,

/***/ "./node_modules/react-feather/dist/icons/heart.js":
false,

/***/ "./node_modules/react-feather/dist/icons/help-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/hexagon.js":
false,

/***/ "./node_modules/react-feather/dist/icons/home.js":
false,

/***/ "./node_modules/react-feather/dist/icons/image.js":
false,

/***/ "./node_modules/react-feather/dist/icons/inbox.js":
false,

/***/ "./node_modules/react-feather/dist/icons/info.js":
false,

/***/ "./node_modules/react-feather/dist/icons/instagram.js":
false,

/***/ "./node_modules/react-feather/dist/icons/italic.js":
false,

/***/ "./node_modules/react-feather/dist/icons/key.js":
false,

/***/ "./node_modules/react-feather/dist/icons/layers.js":
false,

/***/ "./node_modules/react-feather/dist/icons/layout.js":
false,

/***/ "./node_modules/react-feather/dist/icons/life-buoy.js":
false,

/***/ "./node_modules/react-feather/dist/icons/link-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/link.js":
false,

/***/ "./node_modules/react-feather/dist/icons/linkedin.js":
false,

/***/ "./node_modules/react-feather/dist/icons/list.js":
false,

/***/ "./node_modules/react-feather/dist/icons/loader.js":
false,

/***/ "./node_modules/react-feather/dist/icons/lock.js":
false,

/***/ "./node_modules/react-feather/dist/icons/log-in.js":
false,

/***/ "./node_modules/react-feather/dist/icons/log-out.js":
false,

/***/ "./node_modules/react-feather/dist/icons/mail.js":
false,

/***/ "./node_modules/react-feather/dist/icons/map-pin.js":
false,

/***/ "./node_modules/react-feather/dist/icons/map.js":
false,

/***/ "./node_modules/react-feather/dist/icons/maximize-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/maximize.js":
false,

/***/ "./node_modules/react-feather/dist/icons/meh.js":
false,

/***/ "./node_modules/react-feather/dist/icons/menu.js":
false,

/***/ "./node_modules/react-feather/dist/icons/message-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/message-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/mic-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/mic.js":
false,

/***/ "./node_modules/react-feather/dist/icons/minimize-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/minimize.js":
false,

/***/ "./node_modules/react-feather/dist/icons/minus-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/minus-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/minus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/monitor.js":
false,

/***/ "./node_modules/react-feather/dist/icons/moon.js":
false,

/***/ "./node_modules/react-feather/dist/icons/more-horizontal.js":
false,

/***/ "./node_modules/react-feather/dist/icons/more-vertical.js":
false,

/***/ "./node_modules/react-feather/dist/icons/mouse-pointer.js":
false,

/***/ "./node_modules/react-feather/dist/icons/move.js":
false,

/***/ "./node_modules/react-feather/dist/icons/music.js":
false,

/***/ "./node_modules/react-feather/dist/icons/navigation-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/navigation.js":
false,

/***/ "./node_modules/react-feather/dist/icons/octagon.js":
false,

/***/ "./node_modules/react-feather/dist/icons/package.js":
false,

/***/ "./node_modules/react-feather/dist/icons/paperclip.js":
false,

/***/ "./node_modules/react-feather/dist/icons/pause-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/pause.js":
false,

/***/ "./node_modules/react-feather/dist/icons/pen-tool.js":
false,

/***/ "./node_modules/react-feather/dist/icons/percent.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-call.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-forwarded.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-incoming.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-missed.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone-outgoing.js":
false,

/***/ "./node_modules/react-feather/dist/icons/phone.js":
false,

/***/ "./node_modules/react-feather/dist/icons/pie-chart.js":
false,

/***/ "./node_modules/react-feather/dist/icons/play-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/play.js":
false,

/***/ "./node_modules/react-feather/dist/icons/plus-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/plus-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/plus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/pocket.js":
false,

/***/ "./node_modules/react-feather/dist/icons/power.js":
false,

/***/ "./node_modules/react-feather/dist/icons/printer.js":
false,

/***/ "./node_modules/react-feather/dist/icons/radio.js":
false,

/***/ "./node_modules/react-feather/dist/icons/refresh-ccw.js":
false,

/***/ "./node_modules/react-feather/dist/icons/refresh-cw.js":
false,

/***/ "./node_modules/react-feather/dist/icons/repeat.js":
false,

/***/ "./node_modules/react-feather/dist/icons/rewind.js":
false,

/***/ "./node_modules/react-feather/dist/icons/rotate-ccw.js":
false,

/***/ "./node_modules/react-feather/dist/icons/rotate-cw.js":
false,

/***/ "./node_modules/react-feather/dist/icons/rss.js":
false,

/***/ "./node_modules/react-feather/dist/icons/save.js":
false,

/***/ "./node_modules/react-feather/dist/icons/scissors.js":
false,

/***/ "./node_modules/react-feather/dist/icons/search.js":
false,

/***/ "./node_modules/react-feather/dist/icons/send.js":
false,

/***/ "./node_modules/react-feather/dist/icons/server.js":
false,

/***/ "./node_modules/react-feather/dist/icons/settings.js":
false,

/***/ "./node_modules/react-feather/dist/icons/share-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/share.js":
false,

/***/ "./node_modules/react-feather/dist/icons/shield-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/shield.js":
false,

/***/ "./node_modules/react-feather/dist/icons/shopping-bag.js":
false,

/***/ "./node_modules/react-feather/dist/icons/shopping-cart.js":
false,

/***/ "./node_modules/react-feather/dist/icons/shuffle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/sidebar.js":
false,

/***/ "./node_modules/react-feather/dist/icons/skip-back.js":
false,

/***/ "./node_modules/react-feather/dist/icons/skip-forward.js":
false,

/***/ "./node_modules/react-feather/dist/icons/slack.js":
false,

/***/ "./node_modules/react-feather/dist/icons/slash.js":
false,

/***/ "./node_modules/react-feather/dist/icons/sliders.js":
false,

/***/ "./node_modules/react-feather/dist/icons/smartphone.js":
false,

/***/ "./node_modules/react-feather/dist/icons/smile.js":
false,

/***/ "./node_modules/react-feather/dist/icons/speaker.js":
false,

/***/ "./node_modules/react-feather/dist/icons/square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/star.js":
false,

/***/ "./node_modules/react-feather/dist/icons/stop-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/sun.js":
false,

/***/ "./node_modules/react-feather/dist/icons/sunrise.js":
false,

/***/ "./node_modules/react-feather/dist/icons/sunset.js":
false,

/***/ "./node_modules/react-feather/dist/icons/tablet.js":
false,

/***/ "./node_modules/react-feather/dist/icons/tag.js":
false,

/***/ "./node_modules/react-feather/dist/icons/target.js":
false,

/***/ "./node_modules/react-feather/dist/icons/terminal.js":
false,

/***/ "./node_modules/react-feather/dist/icons/thermometer.js":
false,

/***/ "./node_modules/react-feather/dist/icons/thumbs-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/thumbs-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/toggle-left.js":
false,

/***/ "./node_modules/react-feather/dist/icons/toggle-right.js":
false,

/***/ "./node_modules/react-feather/dist/icons/tool.js":
false,

/***/ "./node_modules/react-feather/dist/icons/trash-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/trash.js":
false,

/***/ "./node_modules/react-feather/dist/icons/trello.js":
false,

/***/ "./node_modules/react-feather/dist/icons/trending-down.js":
false,

/***/ "./node_modules/react-feather/dist/icons/trending-up.js":
false,

/***/ "./node_modules/react-feather/dist/icons/triangle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/truck.js":
false,

/***/ "./node_modules/react-feather/dist/icons/tv.js":
false,

/***/ "./node_modules/react-feather/dist/icons/twitch.js":
false,

/***/ "./node_modules/react-feather/dist/icons/twitter.js":
false,

/***/ "./node_modules/react-feather/dist/icons/type.js":
false,

/***/ "./node_modules/react-feather/dist/icons/umbrella.js":
false,

/***/ "./node_modules/react-feather/dist/icons/underline.js":
false,

/***/ "./node_modules/react-feather/dist/icons/unlock.js":
false,

/***/ "./node_modules/react-feather/dist/icons/upload-cloud.js":
false,

/***/ "./node_modules/react-feather/dist/icons/upload.js":
false,

/***/ "./node_modules/react-feather/dist/icons/user-check.js":
false,

/***/ "./node_modules/react-feather/dist/icons/user-minus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/user-plus.js":
false,

/***/ "./node_modules/react-feather/dist/icons/user-x.js":
false,

/***/ "./node_modules/react-feather/dist/icons/user.js":
false,

/***/ "./node_modules/react-feather/dist/icons/users.js":
false,

/***/ "./node_modules/react-feather/dist/icons/video-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/video.js":
false,

/***/ "./node_modules/react-feather/dist/icons/voicemail.js":
false,

/***/ "./node_modules/react-feather/dist/icons/volume-1.js":
false,

/***/ "./node_modules/react-feather/dist/icons/volume-2.js":
false,

/***/ "./node_modules/react-feather/dist/icons/volume-x.js":
false,

/***/ "./node_modules/react-feather/dist/icons/volume.js":
false,

/***/ "./node_modules/react-feather/dist/icons/watch.js":
false,

/***/ "./node_modules/react-feather/dist/icons/wifi-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/wifi.js":
false,

/***/ "./node_modules/react-feather/dist/icons/wind.js":
false,

/***/ "./node_modules/react-feather/dist/icons/x-circle.js":
false,

/***/ "./node_modules/react-feather/dist/icons/x-octagon.js":
false,

/***/ "./node_modules/react-feather/dist/icons/x-square.js":
false,

/***/ "./node_modules/react-feather/dist/icons/x.js":
false,

/***/ "./node_modules/react-feather/dist/icons/youtube.js":
false,

/***/ "./node_modules/react-feather/dist/icons/zap-off.js":
false,

/***/ "./node_modules/react-feather/dist/icons/zap.js":
false,

/***/ "./node_modules/react-feather/dist/icons/zoom-in.js":
false,

/***/ "./node_modules/react-feather/dist/icons/zoom-out.js":
false,

/***/ "./node_modules/react-feather/dist/index.js":
false,

/***/ "./node_modules/react-helmet/es/Helmet.js":
false,

/***/ "./node_modules/react-side-effect/lib/index.js":
false,

/***/ "./node_modules/webpack/buildin/global.js":
false

})