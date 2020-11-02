webpackHotUpdate_N_E("pages/index",{

/***/ "./css/GlobalStyles.tsx":
/*!******************************!*\
  !*** ./css/GlobalStyles.tsx ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    body {\\n        margin: 0;\\n        width: 100%;\\n        min-height: 100%;\\n        overflow-x: hidden;\\n        -moz-osx-font-smoothing: grayscale;\\n        -webkit-font-smoothing: antialiased;\\n        background-color: var(--navy);\\n        color: var(--slate);\\n        font-family: var(--font-sans);\\n        font-size: var(--fz-xl);\\n        line-height: 1.3;\\n\\n      @media (max-width: 480px) {\\n        font-size: var(--fz-lg);\\n      }\\n\\n      &.blur {\\n        overflow: hidden;\\n        header {\\n          background-color: transparent;\\n        }\\n      .container  {\\n          filter: blur(5px) brightness(0.7);\\n          pointer-events: none;\\n          user-select: none;\\n        }\\n    }\\n\\n    html {\\n      box-sizing: border-box;\\n      width: 100%;\\n    }\\n\\n    }\\n\\n    button {\\n        padding: 15px 30px;\\n        border : solid 1px;\\n        border-radius : 3px;\\n        border-color : #FAF3F3;\\n        color : #FAF3F3;\\n        font-size : 15px;\\n        font-weight : lighter;\\n        font-family : var(--font-mono);\\n        background-color : #0A192F;\\n        cursor: pointer;\\n\\n        &:hover{\\n          background : #053041;\\n        }\\n    }\\n\\n    :root {\\n    --dark-navy: #020c1b;\\n    --navy: #0a192f;\\n    --light-navy: #172a45;\\n    --lightest-navy: #303C55;\\n    --navy-shadow: rgba(2, 12, 27, 0.7);\\n    --slate: #8690B0;\\n    --light-slate: #a8b2d1;\\n    --lightest-slate: #ccd6f6;\\n    --white: #e6f1ff;\\n    --green: #64ffda;\\n    --green-tint: rgba(100, 255, 218, 0.1);\\n\\n    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;\\n    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;\\n    \\n    --fz-xxs: 12px;\\n    --fz-xs: 13px;\\n    --fz-sm: 14px;\\n    --fz-md: 16px;\\n    --fz-lg: 18px;\\n    --fz-xl: 20px;\\n    --fz-xxl: 22px;\\n    --fz-heading: 32px;\\n\\n    --border-radius: 4px;\\n    --nav-height: 100px;\\n    --nav-scroll-height: 70px;\\n\\n    --tab-height: 42px;\\n    --tab-width: 120px;\\n\\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\\n\\n    --hamburger-width: 30px;\\n\\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\\n  }\\n\\n  .container {\\n    width : 100%;\\n    margin : 0 auto;\\n    max-width: 1600px;\\n    min-height: 100vh;\\n  }\\n\\n  .container-wrapper {\\n    padding: 45px 60px;\\n\\n    max-width : 1000px;\\n\\n    @media (max-width: 768px) {\\n      padding: 35px 30px;\\n    }\\n\\n    @media (max-width: 480px) {\\n      padding: 35px 27px;\\n    }\\n  }\\n\\n  \\n  .numbered-heading {\\n    display: flex;\\n    align-items: center;\\n    position: relative;\\n    margin: 10px 0 10px;\\n    padding: 0px 100px;\\n    width: 100%;\\n    font-size: clamp(26px, 5vw, var(--fz-heading));\\n    white-space: nowrap;\\n    \\n    &:before {\\n      position: relative;\\n      bottom: 4px;\\n      counter-increment: section;\\n      margin-right: 10px;\\n      color: var(--green);\\n      font-family: var(--font-mono);\\n      font-size: clamp(var(--fz-md), 3vw, var(--fz-xl));\\n      font-weight: 400;\\n\\n      @media (max-width: 480px) {\\n        margin-bottom: -3px;\\n        margin-right: 5px;\\n      }\\n    }\\n\\n    &:after {\\n      content: '';\\n      display: block;\\n      position: relative;\\n      top: -5px;\\n      width: 300px;\\n      height: 1px;\\n      margin-left: 20px;\\n      background-color: var(--lightest-navy);\\n\\n      @media (max-width: 1080px) {\\n        width: 200px;\\n      }\\n\\n      @media (max-width: 768px) {\\n        width: 100%;\\n      }\\n\\n      @media (max-width: 600px) {\\n        margin-left: 10px;\\n      }\\n    }\\n  }\\n\\n\\n  h1,\\n  h2,\\n  h3,\\n  h4,\\n  h5,\\n  h6 {\\n    margin: 0 0 10px 0;\\n    font-weight: 600;\\n    color: var(--lightest-slate);\\n    line-height: 1.1;\\n  }\\n\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\nvar GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__[\"createGlobalStyle\"])(_templateObject());\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY3NzL0dsb2JhbFN0eWxlcy50c3g/NjE0NyJdLCJuYW1lcyI6WyJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxXQUFXLEdBQUdDLDJFQUFILG1CQUFqQjtBQXdMQSIsImZpbGUiOiIuL2Nzcy9HbG9iYWxTdHlsZXMudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgR2xvYmFsU3R5bGUgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgICBib2R5IHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2eSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWZ6LXhsKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMztcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZnotbGcpO1xuICAgICAgfVxuXG4gICAgICAmLmJsdXIge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWFkZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAuY29udGFpbmVyICB7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDVweCkgYnJpZ2h0bmVzcygwLjcpO1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaHRtbCB7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgfVxuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTVweCAzMHB4O1xuICAgICAgICBib3JkZXIgOiBzb2xpZCAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXMgOiAzcHg7XG4gICAgICAgIGJvcmRlci1jb2xvciA6ICNGQUYzRjM7XG4gICAgICAgIGNvbG9yIDogI0ZBRjNGMztcbiAgICAgICAgZm9udC1zaXplIDogMTVweDtcbiAgICAgICAgZm9udC13ZWlnaHQgOiBsaWdodGVyO1xuICAgICAgICBmb250LWZhbWlseSA6IHZhcigtLWZvbnQtbW9ubyk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3IgOiAjMEExOTJGO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgJjpob3ZlcntcbiAgICAgICAgICBiYWNrZ3JvdW5kIDogIzA1MzA0MTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIDpyb290IHtcbiAgICAtLWRhcmstbmF2eTogIzAyMGMxYjtcbiAgICAtLW5hdnk6ICMwYTE5MmY7XG4gICAgLS1saWdodC1uYXZ5OiAjMTcyYTQ1O1xuICAgIC0tbGlnaHRlc3QtbmF2eTogIzMwM0M1NTtcbiAgICAtLW5hdnktc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgICAtLXNsYXRlOiAjODY5MEIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLXdoaXRlOiAjZTZmMWZmO1xuICAgIC0tZ3JlZW46ICM2NGZmZGE7XG4gICAgLS1ncmVlbi10aW50OiByZ2JhKDEwMCwgMjU1LCAyMTgsIDAuMSk7XG5cbiAgICAtLWZvbnQtc2FuczogJ0NhbGlicmUnLCAnU2FuIEZyYW5jaXNjbycsICdTRiBQcm8gVGV4dCcsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtbW9ubzogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICBcbiAgICAtLWZ6LXh4czogMTJweDtcbiAgICAtLWZ6LXhzOiAxM3B4O1xuICAgIC0tZnotc206IDE0cHg7XG4gICAgLS1mei1tZDogMTZweDtcbiAgICAtLWZ6LWxnOiAxOHB4O1xuICAgIC0tZnoteGw6IDIwcHg7XG4gICAgLS1mei14eGw6IDIycHg7XG4gICAgLS1mei1oZWFkaW5nOiAzMnB4O1xuXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1uYXYtaGVpZ2h0OiAxMDBweDtcbiAgICAtLW5hdi1zY3JvbGwtaGVpZ2h0OiA3MHB4O1xuXG4gICAgLS10YWItaGVpZ2h0OiA0MnB4O1xuICAgIC0tdGFiLXdpZHRoOiAxMjBweDtcblxuICAgIC0tZWFzaW5nOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgLS1oYW1idXJnZXItd2lkdGg6IDMwcHg7XG5cbiAgICAtLWhhbS1iZWZvcmU6IHRvcCAwLjFzIGVhc2UtaW4gMC4yNXMsIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xuICAgIC0taGFtLWJlZm9yZS1hY3RpdmU6IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQgMC4xMnM7XG4gICAgLS1oYW0tYWZ0ZXI6IGJvdHRvbSAwLjFzIGVhc2UtaW4gMC4yNXMsIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICAtLWhhbS1hZnRlci1hY3RpdmU6IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMC4xMnM7XG4gIH1cblxuICAuY29udGFpbmVyIHtcbiAgICB3aWR0aCA6IDEwMCU7XG4gICAgbWFyZ2luIDogMCBhdXRvO1xuICAgIG1heC13aWR0aDogMTYwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICB9XG5cbiAgLmNvbnRhaW5lci13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiA0NXB4IDYwcHg7XG5cbiAgICBtYXgtd2lkdGggOiAxMDAwcHg7XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgIHBhZGRpbmc6IDM1cHggMzBweDtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgIHBhZGRpbmc6IDM1cHggMjdweDtcbiAgICB9XG4gIH1cblxuICBcbiAgLm51bWJlcmVkLWhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMTBweDtcbiAgICBwYWRkaW5nOiAwcHggMTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiBjbGFtcCgyNnB4LCA1dncsIHZhcigtLWZ6LWhlYWRpbmcpKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIFxuICAgICY6YmVmb3JlIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgY291bnRlci1pbmNyZW1lbnQ6IHNlY3Rpb247XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xuICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gICAgICBmb250LXNpemU6IGNsYW1wKHZhcigtLWZ6LW1kKSwgM3Z3LCB2YXIoLS1mei14bCkpO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC0zcHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHRvcDogLTVweDtcbiAgICAgIHdpZHRoOiAzMDBweDtcbiAgICAgIGhlaWdodDogMXB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVzdC1uYXZ5KTtcblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDEwODBweCkge1xuICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgaDEsXG4gIGgyLFxuICBoMyxcbiAgaDQsXG4gIGg1LFxuICBoNiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6IHZhcigtLWxpZ2h0ZXN0LXNsYXRlKTtcbiAgICBsaW5lLWhlaWdodDogMS4xO1xuICB9XG5cbmA7XG5cbmV4cG9ydCB7IEdsb2JhbFN0eWxlIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./css/GlobalStyles.tsx\n");

/***/ })

})