module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/Sidebar.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/config.tsx":
/*!*******************************!*\
  !*** ./components/config.tsx ***!
  \*******************************/
/*! exports provided: socialMedia, sideLink */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socialMedia\", function() { return socialMedia; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sideLink\", function() { return sideLink; });\nconst socialMedia = [{\n  name: \"Twitter\",\n  url: \"https://twitter.com/DrilonIan\"\n}, {\n  name: \"Instagram\",\n  url: \"https://www.instagram.com/zen.codes/\"\n}, {\n  name: \"LinkedIn\",\n  url: \"https://www.linkedin.com/in/ian-drilon-952a37179/\"\n}, {\n  name: \"Facebook\",\n  url: \"https://www.facebook.com/ian.drilon.7/\"\n}, {\n  name: \"Github\",\n  url: \"https://github.com/zneret03\"\n}];\nconst sideLink = [{\n  id: \"Home\",\n  name: \"Home\"\n}, {\n  id: \"About\",\n  name: \"About\"\n}, {\n  id: \"Works\",\n  name: \"Works\"\n}, {\n  id: \"Contact\",\n  name: \"Contact\"\n}];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2NvbmZpZy50c3g/MmZjOCJdLCJuYW1lcyI6WyJzb2NpYWxNZWRpYSIsIm5hbWUiLCJ1cmwiLCJzaWRlTGluayIsImlkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQSxNQUFNQSxXQUFXLEdBQUcsQ0FDbEI7QUFDRUMsTUFBSSxFQUFFLFNBRFI7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FEa0IsRUFLbEI7QUFDRUQsTUFBSSxFQUFFLFdBRFI7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FMa0IsRUFTbEI7QUFDRUQsTUFBSSxFQUFFLFVBRFI7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0FUa0IsRUFhbEI7QUFDRUQsTUFBSSxFQUFFLFVBRFI7QUFFRUMsS0FBRyxFQUFFO0FBRlAsQ0Fia0IsRUFpQmxCO0FBQ0VELE1BQUksRUFBRSxRQURSO0FBRUVDLEtBQUcsRUFBRTtBQUZQLENBakJrQixDQUFwQjtBQXVCQSxNQUFNQyxRQUFRLEdBQUcsQ0FDZjtBQUNFQyxJQUFFLEVBQUUsTUFETjtBQUVFSCxNQUFJLEVBQUU7QUFGUixDQURlLEVBS2Y7QUFDRUcsSUFBRSxFQUFFLE9BRE47QUFFRUgsTUFBSSxFQUFFO0FBRlIsQ0FMZSxFQVNmO0FBQ0VHLElBQUUsRUFBRSxPQUROO0FBRUVILE1BQUksRUFBRTtBQUZSLENBVGUsRUFhZjtBQUNFRyxJQUFFLEVBQUUsU0FETjtBQUVFSCxNQUFJLEVBQUU7QUFGUixDQWJlLENBQWpCIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9jb25maWcudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc29jaWFsTWVkaWEgPSBbXG4gIHtcbiAgICBuYW1lOiBcIlR3aXR0ZXJcIixcbiAgICB1cmw6IFwiaHR0cHM6Ly90d2l0dGVyLmNvbS9Ecmlsb25JYW5cIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiSW5zdGFncmFtXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vemVuLmNvZGVzL1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJMaW5rZWRJblwiLFxuICAgIHVybDogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vaWFuLWRyaWxvbi05NTJhMzcxNzkvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkZhY2Vib29rXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9pYW4uZHJpbG9uLjcvXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkdpdGh1YlwiLFxuICAgIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vem5lcmV0MDNcIixcbiAgfSxcbl07XG5cbmNvbnN0IHNpZGVMaW5rID0gW1xuICB7XG4gICAgaWQ6IFwiSG9tZVwiLFxuICAgIG5hbWU6IFwiSG9tZVwiLFxuICB9LFxuICB7XG4gICAgaWQ6IFwiQWJvdXRcIixcbiAgICBuYW1lOiBcIkFib3V0XCIsXG4gIH0sXG4gIHtcbiAgICBpZDogXCJXb3Jrc1wiLFxuICAgIG5hbWU6IFwiV29ya3NcIixcbiAgfSxcbiAge1xuICAgIGlkOiBcIkNvbnRhY3RcIixcbiAgICBuYW1lOiBcIkNvbnRhY3RcIixcbiAgfSxcbl07XG5cbmV4cG9ydCB7IHNvY2lhbE1lZGlhLCBzaWRlTGluayB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/config.tsx\n");

/***/ }),

/***/ "./pages/Sidebar.tsx":
/*!***************************!*\
  !*** ./pages/Sidebar.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-spring */ \"react-spring\");\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/config */ \"./components/config.tsx\");\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/pages/Sidebar.tsx\";\n\n\n\n\nconst SideBarWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({\n  displayName: \"Sidebar__SideBarWrapper\",\n  componentId: \"sc-11fl36r-0\"\n})([\"background:#172a45;list-style:none;z-index:1;height:100vh;\"]);\n\nconst Sidebar = ({\n  animatedSidebar\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_spring__WEBPACK_IMPORTED_MODULE_2__[\"animated\"].div, {\n    style: animatedSidebar,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SideBarWrapper, {\n      children: _components_config__WEBPACK_IMPORTED_MODULE_4__[\"sideLink\"].map(link => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n        children: link.name\n      }, link.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 19,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9TaWRlYmFyLnRzeD9mYjNhIl0sIm5hbWVzIjpbIlNpZGVCYXJXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU2lkZWJhciIsImFuaW1hdGVkU2lkZWJhciIsInNpZGVMaW5rIiwibWFwIiwibGluayIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFNQSxNQUFNQSxjQUFjLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsa0VBQXBCOztBQU9BLE1BQU1DLE9BQTRCLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBeUI7QUFDNUQsc0JBQ0UscUVBQUMscURBQUQsQ0FBVSxHQUFWO0FBQWMsU0FBSyxFQUFFQSxlQUFyQjtBQUFBLDJCQUNFLHFFQUFDLGNBQUQ7QUFBQSxnQkFDR0MsMkRBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxJQUFELGlCQUNaO0FBQUEsa0JBQW1CQSxJQUFJLENBQUNDO0FBQXhCLFNBQVNELElBQUksQ0FBQ0UsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVNELENBVkQ7O0FBWWVOLHNFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvU2lkZWJhci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhbmltYXRlZCB9IGZyb20gXCJyZWFjdC1zcHJpbmdcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyBzaWRlTGluayB9IGZyb20gXCIuLi9jb21wb25lbnRzL2NvbmZpZ1wiO1xuXG5pbnRlcmZhY2UgUHJvcFR5cGVzIHtcbiAgYW5pbWF0ZWRTaWRlYmFyOiBhbnk7XG59XG5cbmNvbnN0IFNpZGVCYXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZDogIzE3MmE0NTtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgei1pbmRleDogMTtcbiAgaGVpZ2h0OiAxMDB2aDtcbmA7XG5cbmNvbnN0IFNpZGViYXI6IFJlYWN0LkZDPFByb3BUeXBlcz4gPSAoeyBhbmltYXRlZFNpZGViYXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxhbmltYXRlZC5kaXYgc3R5bGU9e2FuaW1hdGVkU2lkZWJhcn0+XG4gICAgICA8U2lkZUJhcldyYXBwZXI+XG4gICAgICAgIHtzaWRlTGluay5tYXAoKGxpbms6IGFueSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2xpbmsuaWR9PntsaW5rLm5hbWV9PC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L1NpZGVCYXJXcmFwcGVyPlxuICAgIDwvYW5pbWF0ZWQuZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Sidebar.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-spring":
/*!*******************************!*\
  !*** external "react-spring" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spring\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zcHJpbmdcIj9lZTg4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0LXNwcmluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNwcmluZ1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-spring\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });