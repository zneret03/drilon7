webpackHotUpdate_N_E("pages/index",{

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Social */ \"./components/Social.tsx\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./config */ \"./components/config.tsx\");\n/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Sidebar */ \"./components/Sidebar.tsx\");\n\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n //*\n\n\n\n\nvar DivWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"LandingPage__DivWrapper\",\n  componentId: \"keb21i-0\"\n})([\"height:100vh;width:100%;#Menu{position:fixed;cursor:pointer;z-index:10;.socialMedia{@media (max-width:768px){display:none;}}}#curvedSvg{position:absolute;top:0;right:0;z-index:-1;@media (max-width:768px){display:none;}}section{padding:60px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:clamp(5px,5vw,20px);font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(45px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:clamp(10px,5vw,20px);max-width:430px;line-height:27px;color:var(--slate);}@media (max-width:768px){padding:60px 35px;}@media (max-width:480px){padding:60px 10px;}}\"]);\n_c = DivWrapper;\n\nvar LandingPage = function LandingPage() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      toggle = _useState[0],\n      setToggle = _useState[1];\n\n  var redirectEmail = function redirectEmail(event) {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  var _toggleSideBar = function toggleSideBar(event) {\n    event.preventDefault();\n\n    if (!toggle) {\n      setToggle(true);\n    } else {\n      setToggle(false);\n    }\n  };\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      sticky = _useState2[0],\n      setSticky = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(function () {\n    var mountNavbar = function mountNavbar() {\n      var fixed = window.pageXOffset < 180;\n\n      if (fixed != true) {\n        setSticky(true);\n      } else {\n        setSticky(false);\n      }\n    };\n\n    window.addEventListener(\"scroll\", mountNavbar);\n    return function () {\n      return window.removeEventListener(\"scroll\", mountNavbar);\n    };\n  }, []);\n  console.log(sticky);\n  var animatedSidebar = Object(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"])({\n    // transform: toggle ? \"translateX(0%)\" : \"translateX(-100%)\",\n    marginLeft: toggle ? \"0px\" : \"-400px\"\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Sidebar__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      animatedSidebar: animatedSidebar,\n      toogle: toggle,\n      toggleSideBar: function toggleSideBar(event) {\n        return _toggleSideBar(event);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container\",\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(DivWrapper, {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            id: \"curvedSvg\",\n            width: \"579\",\n            height: \"575\",\n            viewBox: \"0 0 579 575\",\n            fill: \"none\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              fillRule: \"evenodd\",\n              clipRule: \"evenodd\",\n              d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n              fill: \"#292F4F\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 143,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 135,\n            columnNumber: 13\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, _this), !toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          id: \"Menu\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            onClick: function onClick(event) {\n              return _toggleSideBar(event);\n            },\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n              width: \"30\",\n              height: \"29\",\n              viewBox: \"0 0 30 29\",\n              fill: \"none\",\n              xmlns: \"http://www.w3.org/2000/svg\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 161,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 165,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n                d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n                fill: \"#FFFAFA\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 169,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 154,\n              columnNumber: 17\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 153,\n            columnNumber: 15\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"socialMedia\",\n            children: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"] && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Social__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              socialMedia: _config__WEBPACK_IMPORTED_MODULE_5__[\"socialMedia\"],\n              toggle: toggle\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 177,\n              columnNumber: 19\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 175,\n            columnNumber: 15\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n              children: \"Hi, my name is\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 184,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 183,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"Ian A Drilon.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 187,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n              children: \"I build things for web.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 188,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 186,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n              children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 191,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 190,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              type: \"button\",\n              onClick: function onClick(event) {\n                return redirectEmail(event);\n              },\n              children: \"Get In Touch\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 197,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 196,\n            columnNumber: 13\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 182,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 132,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true);\n};\n\n_s(LandingPage, \"jtVtgUDFQqHnuaem9SnfFYWkRUw=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_2__[\"useSpring\"]];\n});\n\n_c2 = LandingPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"DivWrapper\");\n$RefreshReg$(_c2, \"LandingPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3g/MGVkNSJdLCJuYW1lcyI6WyJEaXZXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiTGFuZGluZ1BhZ2UiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInJlZGlyZWN0RW1haWwiLCJldmVudCIsInByZXZlbnREZWZhdWx0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwidG9nZ2xlU2lkZUJhciIsInN0aWNreSIsInNldFN0aWNreSIsInVzZUVmZmVjdCIsIm1vdW50TmF2YmFyIiwiZml4ZWQiLCJwYWdlWE9mZnNldCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsImFuaW1hdGVkU2lkZWJhciIsInVzZVNwcmluZyIsIm1hcmdpbkxlZnQiLCJzb2NpYWxNZWRpYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsVUFBVSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG91QkFBaEI7S0FBTUYsVTs7QUFxRU4sSUFBTUcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLEtBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBR3hCLE1BQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FDcEJDLEtBRG9CLEVBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDZCQUF2QjtBQUNELEdBTkQ7O0FBUUEsTUFBTUMsY0FBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUNwQkwsS0FEb0IsRUFFakI7QUFDSEEsU0FBSyxDQUFDQyxjQUFOOztBQUVBLFFBQUksQ0FBQ0osTUFB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LCtDQUFEO0FBQVEseUJBQVcsRUFBRUEsbURBQXJCO0FBQWtDLG9CQUFNLEVBQUV0QjtBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQW5CSixlQWlERTtBQUFBLGtDQUNFO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBSUU7QUFBQSxvQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFKRixlQVFFO0FBQUEsbUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBY0U7QUFBQSxtQ0FDRTtBQUFRLGtCQUFJLEVBQUMsUUFBYjtBQUFzQixxQkFBTyxFQUFFLGlCQUFDRyxLQUFEO0FBQUEsdUJBQVdELGFBQWEsQ0FBQ0MsS0FBRCxDQUF4QjtBQUFBLGVBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFORjtBQUFBLGtCQURGO0FBaUZELENBaElEOztHQUFNTCxXO1VBMENvQnNCLHNEOzs7TUExQ3BCdEIsVztBQWtJU0EsMEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTcHJpbmcgfSBmcm9tIFwicmVhY3Qtc3ByaW5nXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuLy8qXG5pbXBvcnQgU29jaWFsIGZyb20gXCIuL1NvY2lhbFwiO1xuaW1wb3J0IHsgc29jaWFsTWVkaWEgfSBmcm9tIFwiLi9jb25maWdcIjtcbmltcG9ydCBTaWRlYmFyIGZyb20gXCIuL1NpZGViYXJcIjtcblxuY29uc3QgRGl2V3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDAlO1xuXG4gICNNZW51IHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgLnNvY2lhbE1lZGlhIHtcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICNjdXJ2ZWRTdmcge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogLTE7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG5cbiAgc2VjdGlvbiB7XG4gICAgcGFkZGluZzogNjBweCAxMDBweDtcbiAgICBjb2xvcjogI2RiY2ZjZjtcbiAgICBsaW5lLWhlaWdodDogOTtcblxuICAgIGgzIHtcbiAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LW1vbm8pO1xuICAgICAgbWFyZ2luOiAwcHggMHB4IDE1cHggNHB4O1xuICAgICAgZm9udC1zaXplOiBjbGFtcCg1cHgsIDV2dywgMjBweCk7XG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgaDIge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDQ1cHgsIDV2dywgODBweCk7XG4gICAgICBmb250LXdlaWdodDogNjAwcHg7XG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIH1cblxuICAgIGgyOm50aC1jaGlsZCgyKSB7XG4gICAgICBjb2xvcjogdmFyKC0tc2xhdGUpO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtc2Fucyk7XG4gICAgICBmb250LXNpemU6IGNsYW1wKDEwcHgsIDV2dywgMjBweCk7XG4gICAgICBtYXgtd2lkdGg6IDQzMHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gICAgICBjb2xvcjogdmFyKC0tc2xhdGUpO1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgcGFkZGluZzogNjBweCAzNXB4O1xuICAgIH1cblxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgcGFkZGluZzogNjBweCAxMHB4O1xuICAgIH1cbiAgfVxuYDtcblxuY29uc3QgTGFuZGluZ1BhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgcmVkaXJlY3RFbWFpbCA9IChcbiAgICBldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudCwgTW91c2VFdmVudD5cbiAgKSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJtYWlsdG86aWFuZHJpbG9uMkBnbWFpbC5jb21cIjtcbiAgfTtcblxuICBjb25zdCB0b2dnbGVTaWRlQmFyID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCF0b2dnbGUpIHtcbiAgICAgIHNldFRvZ2dsZSh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3N0aWNreSwgc2V0U3RpY2t5XSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IG1vdW50TmF2YmFyID0gKCkgPT4ge1xuICAgICAgY29uc3QgZml4ZWQgPSB3aW5kb3cucGFnZVhPZmZzZXQgPCAxODA7XG5cbiAgICAgIGlmIChmaXhlZCAhPSB0cnVlKSB7XG4gICAgICAgIHNldFN0aWNreSh0cnVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFN0aWNreShmYWxzZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIG1vdW50TmF2YmFyKTtcbiAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgbW91bnROYXZiYXIpO1xuICB9LCBbXSk7XG5cbiAgY29uc29sZS5sb2coc3RpY2t5KTtcblxuICBjb25zdCBhbmltYXRlZFNpZGViYXIgPSB1c2VTcHJpbmcoe1xuICAgIC8vIHRyYW5zZm9ybTogdG9nZ2xlID8gXCJ0cmFuc2xhdGVYKDAlKVwiIDogXCJ0cmFuc2xhdGVYKC0xMDAlKVwiLFxuICAgIG1hcmdpbkxlZnQ6IHRvZ2dsZSA/IFwiMHB4XCIgOiBcIi00MDBweFwiLFxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8U2lkZWJhclxuICAgICAgICBhbmltYXRlZFNpZGViYXI9e2FuaW1hdGVkU2lkZWJhcn1cbiAgICAgICAgdG9vZ2xlPXt0b2dnbGV9XG4gICAgICAgIHRvZ2dsZVNpZGVCYXI9eyhldmVudCkgPT4gdG9nZ2xlU2lkZUJhcihldmVudCl9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPERpdldyYXBwZXI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgaWQ9XCJjdXJ2ZWRTdmdcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjU3OVwiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjU3NVwiXG4gICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc5IDU3NVwiXG4gICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgZmlsbFJ1bGU9XCJldmVub2RkXCJcbiAgICAgICAgICAgICAgICBjbGlwUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgIGQ9XCJNNTc5IDBIMC42MTM4MzFDMTkuMTUzNSA1Ny4zMDQxIDYwLjEyMzggMTAxLjUwNyAxMjkuOTg1IDEyMC4yMDdDMjgzLjQ4NiAxNjEuMjk1IDI4Ny41MTEgMjU4LjE2NSAyOTEuNDA4IDM1MS45MzFDMjk2LjE3NyA0NjYuNyAzMDAuNzUyIDU3Ni44MiA1NzkgNTc0LjMwOVYwWlwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyOTJGNEZcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgeyF0b2dnbGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBpZD1cIk1lbnVcIj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoZXZlbnQpID0+IHRvZ2dsZVNpZGVCYXIoZXZlbnQpfT5cbiAgICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI5XCJcbiAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMzAgMjlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNy4yNDM5OEMyLjUgNi41Nzk0IDMuMDU3NSA2LjA0MTY5IDMuNzQzNzUgNi4wNDE2OUgxMy43NTYzQzE0LjA4NjEgNi4wNDE2OSAxNC40MDI1IDYuMTY4MzYgMTQuNjM1NyA2LjM5MzgzQzE0Ljg2OSA2LjYxOTMgMTUgNi45MjUxMSAxNSA3LjI0Mzk4QzE1IDcuNTYyODUgMTQuODY5IDcuODY4NjUgMTQuNjM1NyA4LjA5NDEzQzE0LjQwMjUgOC4zMTk2IDE0LjA4NjEgOC40NDYyNyAxMy43NTYzIDguNDQ2MjdIMy43NDM3NUMzLjQxMzg5IDguNDQ2MjcgMy4wOTc1MyA4LjMxOTYgMi44NjQyOSA4LjA5NDEzQzIuNjMxMDQgNy44Njg2NSAyLjUgNy41NjI4NSAyLjUgNy4yNDM5OFpcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI0ZGRkFGQVwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgMTQuNUMyLjUgMTMuODM1NCAzLjA1NzUgMTMuMjk3NyAzLjc0Mzc1IDEzLjI5NzdIMjYuMjU2M0MyNi41ODYxIDEzLjI5NzcgMjYuOTAyNSAxMy40MjQ0IDI3LjEzNTcgMTMuNjQ5OUMyNy4zNjkgMTMuODc1MyAyNy41IDE0LjE4MTIgMjcuNSAxNC41QzI3LjUgMTQuODE4OSAyNy4zNjkgMTUuMTI0NyAyNy4xMzU3IDE1LjM1MDJDMjYuOTAyNSAxNS41NzU2IDI2LjU4NjEgMTUuNzAyMyAyNi4yNTYzIDE1LjcwMjNIMy43NDM3NUMzLjQxMzg5IDE1LjcwMjMgMy4wOTc1MyAxNS41NzU2IDIuODY0MjkgMTUuMzUwMkMyLjYzMTA0IDE1LjEyNDcgMi41IDE0LjgxODkgMi41IDE0LjVaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNMy43NDM3NSAyMC41NTM4QzMuNDEzODkgMjAuNTUzOCAzLjA5NzUzIDIwLjY4MDQgMi44NjQyOSAyMC45MDU5QzIuNjMxMDQgMjEuMTMxNCAyLjUgMjEuNDM3MiAyLjUgMjEuNzU2MUMyLjUgMjIuMDc0OSAyLjYzMTA0IDIyLjM4MDcgMi44NjQyOSAyMi42MDYyQzMuMDk3NTMgMjIuODMxNyAzLjQxMzg5IDIyLjk1ODQgMy43NDM3NSAyMi45NTg0SDE4Ljc1NjNDMTkuMDg2MSAyMi45NTg0IDE5LjQwMjUgMjIuODMxNyAxOS42MzU3IDIyLjYwNjJDMTkuODY5IDIyLjM4MDcgMjAgMjIuMDc0OSAyMCAyMS43NTYxQzIwIDIxLjQzNzIgMTkuODY5IDIxLjEzMTQgMTkuNjM1NyAyMC45MDU5QzE5LjQwMjUgMjAuNjgwNCAxOS4wODYxIDIwLjU1MzggMTguNzU2MyAyMC41NTM4SDMuNzQzNzVaXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsTWVkaWFcIj5cbiAgICAgICAgICAgICAgICB7c29jaWFsTWVkaWEgJiYgKFxuICAgICAgICAgICAgICAgICAgPFNvY2lhbCBzb2NpYWxNZWRpYT17c29jaWFsTWVkaWF9IHRvZ2dsZT17dG9nZ2xlfSAvPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMz5IaSwgbXkgbmFtZSBpczwvaDM+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMj5JYW4gQSBEcmlsb24uPC9oMj5cbiAgICAgICAgICAgICAgPGgyPkkgYnVpbGQgdGhpbmdzIGZvciB3ZWIuPC9oMj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgSeKAmW0gYSBzdHVkZW50IG9mIElsb2lsbyBTY2llbmNlIGFuZCBUZWNobm9sb2d5IFVuaXZlcnNpdHksXG4gICAgICAgICAgICAgICAgdGFraW5nIGEgQmFjaGVsb3Igb2YgU2NpZW5jZSBpbiBDb21wdXRlciBTY2llbmNlLlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcmVkaXJlY3RFbWFpbChldmVudCl9PlxuICAgICAgICAgICAgICAgIEdldCBJbiBUb3VjaFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9EaXZXcmFwcGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nUGFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ })

})