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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/LandingPage.tsx":
/*!************************************!*\
  !*** ./components/LandingPage.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/components/LandingPage.tsx\";\n\n\nconst CurveSvg = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.svg.withConfig({\n  displayName: \"LandingPage__CurveSvg\",\n  componentId: \"keb21i-0\"\n})([\"position:absolute;top:0;right:0;\"]);\nconst SectionWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.section.withConfig({\n  displayName: \"LandingPage__SectionWrapper\",\n  componentId: \"keb21i-1\"\n})([\"padding:40px 100px;color:#dbcfcf;line-height:9;h3{font-family:var(--font-mono);margin:0px 0px 15px 4px;font-size:20px;font-weight:normal;color:#fff;}h2{font-family:var(--font-sans);font-size:clamp(40px,5vw,80px);font-weight:600px;letter-spacing:2px;}h2:nth-child(2){color:var(--slate);}p{font-family:var(--font-sans);font-size:20px;max-width:430px;line-height:27px;color:var(--slate);}\"]);\n\nconst LandingPage = () => {\n  const redirectEmail = event => {\n    event.preventDefault();\n    window.location.href = \"mailto:iandrilon2@gmail.com\";\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(CurveSvg, {\n        width: \"579\",\n        height: \"575\",\n        viewBox: \"0 0 579 575\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          \"fill-rule\": \"evenodd\",\n          \"clip-rule\": \"evenodd\",\n          d: \"M579 0H0.613831C19.1535 57.3041 60.1238 101.507 129.985 120.207C283.486 161.295 287.511 258.165 291.408 351.931C296.177 466.7 300.752 576.82 579 574.309V0Z\",\n          fill: \"#292F4F\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n        width: \"30\",\n        height: \"29\",\n        viewBox: \"0 0 30 29\",\n        fill: \"none\",\n        xmlns: \"http://www.w3.org/2000/svg\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          d: \"M2.5 7.24398C2.5 6.5794 3.0575 6.04169 3.74375 6.04169H13.7563C14.0861 6.04169 14.4025 6.16836 14.6357 6.39383C14.869 6.6193 15 6.92511 15 7.24398C15 7.56285 14.869 7.86865 14.6357 8.09413C14.4025 8.3196 14.0861 8.44627 13.7563 8.44627H3.74375C3.41389 8.44627 3.09753 8.3196 2.86429 8.09413C2.63104 7.86865 2.5 7.56285 2.5 7.24398Z\",\n          fill: \"#FFFAFA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          d: \"M2.5 14.5C2.5 13.8354 3.0575 13.2977 3.74375 13.2977H26.2563C26.5861 13.2977 26.9025 13.4244 27.1357 13.6499C27.369 13.8753 27.5 14.1812 27.5 14.5C27.5 14.8189 27.369 15.1247 27.1357 15.3502C26.9025 15.5756 26.5861 15.7023 26.2563 15.7023H3.74375C3.41389 15.7023 3.09753 15.5756 2.86429 15.3502C2.63104 15.1247 2.5 14.8189 2.5 14.5Z\",\n          fill: \"#FFFAFA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n          d: \"M3.74375 20.5538C3.41389 20.5538 3.09753 20.6804 2.86429 20.9059C2.63104 21.1314 2.5 21.4372 2.5 21.7561C2.5 22.0749 2.63104 22.3807 2.86429 22.6062C3.09753 22.8317 3.41389 22.9584 3.74375 22.9584H18.7563C19.0861 22.9584 19.4025 22.8317 19.6357 22.6062C19.869 22.3807 20 22.0749 20 21.7561C20 21.4372 19.869 21.1314 19.6357 20.9059C19.4025 20.6804 19.0861 20.5538 18.7563 20.5538H3.74375Z\",\n          fill: \"#FFFAFA\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 70,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(SectionWrapper, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Hi, my name is\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"Ian A. Drilon.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 97,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          children: \"I build things for web.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 96,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n          children: \"I\\u2019m a student of Iloilo Science and Technology University, taking a Bachelor of Science in Computer Science.\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          type: \"button\",\n          onClick: event => redirectEmail(event),\n          children: \"Get In Touch\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 107,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 53,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (LandingPage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xhbmRpbmdQYWdlLnRzeD8wZWQ1Il0sIm5hbWVzIjpbIkN1cnZlU3ZnIiwic3R5bGVkIiwic3ZnIiwiU2VjdGlvbldyYXBwZXIiLCJzZWN0aW9uIiwiTGFuZGluZ1BhZ2UiLCJyZWRpcmVjdEVtYWlsIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBLE1BQU1BLFFBQVEsR0FBR0Msd0RBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSx3Q0FBZDtBQU1BLE1BQU1DLGNBQWMsR0FBR0Ysd0RBQU0sQ0FBQ0csT0FBVjtBQUFBO0FBQUE7QUFBQSx5WUFBcEI7O0FBaUNBLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLGFBQWEsR0FDakJDLEtBRG9CLElBRWpCO0FBQ0hBLFNBQUssQ0FBQ0MsY0FBTjtBQUVBQyxVQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLDZCQUF2QjtBQUNELEdBTkQ7O0FBUUEsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBLDZCQUNFLHFFQUFDLFFBQUQ7QUFDRSxhQUFLLEVBQUMsS0FEUjtBQUVFLGNBQU0sRUFBQyxLQUZUO0FBR0UsZUFBTyxFQUFDLGFBSFY7QUFJRSxZQUFJLEVBQUMsTUFKUDtBQUtFLGFBQUssRUFBQyw0QkFMUjtBQUFBLCtCQU9FO0FBQ0UsdUJBQVUsU0FEWjtBQUVFLHVCQUFVLFNBRlo7QUFHRSxXQUFDLEVBQUMsNkpBSEo7QUFJRSxjQUFJLEVBQUM7QUFKUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFpQkU7QUFBQSw2QkFDRTtBQUNFLGFBQUssRUFBQyxJQURSO0FBRUUsY0FBTSxFQUFDLElBRlQ7QUFHRSxlQUFPLEVBQUMsV0FIVjtBQUlFLFlBQUksRUFBQyxNQUpQO0FBS0UsYUFBSyxFQUFDLDRCQUxSO0FBQUEsZ0NBT0U7QUFDRSxXQUFDLEVBQUMsNlVBREo7QUFFRSxjQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLGVBV0U7QUFDRSxXQUFDLEVBQUMsOFVBREo7QUFFRSxjQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVhGLGVBZUU7QUFDRSxXQUFDLEVBQUMsc1lBREo7QUFFRSxjQUFJLEVBQUM7QUFGUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBakJGLGVBdUNFLHFFQUFDLGNBQUQ7QUFBQSw4QkFDRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFO0FBQUEsZ0NBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRTtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQWNFO0FBQUEsK0JBQ0U7QUFBUSxjQUFJLEVBQUMsUUFBYjtBQUFzQixpQkFBTyxFQUFHSixLQUFELElBQVdELGFBQWEsQ0FBQ0MsS0FBRCxDQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThERCxDQXZFRDs7QUF5RWVGLDBFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MYW5kaW5nUGFnZS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBDdXJ2ZVN2ZyA9IHN0eWxlZC5zdmdgXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbmA7XG5cbmNvbnN0IFNlY3Rpb25XcmFwcGVyID0gc3R5bGVkLnNlY3Rpb25gXG4gIHBhZGRpbmc6IDQwcHggMTAwcHg7XG4gIGNvbG9yOiAjZGJjZmNmO1xuICBsaW5lLWhlaWdodDogOTtcblxuICBoMyB7XG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XG4gICAgbWFyZ2luOiAwcHggMHB4IDE1cHggNHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiAjZmZmO1xuICB9XG5cbiAgaDIge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgIGZvbnQtc2l6ZTogY2xhbXAoNDBweCwgNXZ3LCA4MHB4KTtcbiAgICBmb250LXdlaWdodDogNjAwcHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgfVxuXG4gIGgyOm50aC1jaGlsZCgyKSB7XG4gICAgY29sb3I6IHZhcigtLXNsYXRlKTtcbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LXNhbnMpO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXgtd2lkdGg6IDQzMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICAgIGNvbG9yOiB2YXIoLS1zbGF0ZSk7XG4gIH1cbmA7XG5cbmNvbnN0IExhbmRpbmdQYWdlID0gKCkgPT4ge1xuICBjb25zdCByZWRpcmVjdEVtYWlsID0gKFxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxCdXR0b25FbGVtZW50LCBNb3VzZUV2ZW50PlxuICApID0+IHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIm1haWx0bzppYW5kcmlsb24yQGdtYWlsLmNvbVwiO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIHdpZHRoPVwiNTc5XCJcbiAgICAgICAgICBoZWlnaHQ9XCI1NzVcIlxuICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTc5IDU3NVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGZpbGwtcnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgY2xpcC1ydWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICBkPVwiTTU3OSAwSDAuNjEzODMxQzE5LjE1MzUgNTcuMzA0MSA2MC4xMjM4IDEwMS41MDcgMTI5Ljk4NSAxMjAuMjA3QzI4My40ODYgMTYxLjI5NSAyODcuNTExIDI1OC4xNjUgMjkxLjQwOCAzNTEuOTMxQzI5Ni4xNzcgNDY2LjcgMzAwLjc1MiA1NzYuODIgNTc5IDU3NC4zMDlWMFpcIlxuICAgICAgICAgICAgZmlsbD1cIiMyOTJGNEZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQ3VydmVTdmc+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICB3aWR0aD1cIjMwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIyOVwiXG4gICAgICAgICAgdmlld0JveD1cIjAgMCAzMCAyOVwiXG4gICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMi41IDcuMjQzOThDMi41IDYuNTc5NCAzLjA1NzUgNi4wNDE2OSAzLjc0Mzc1IDYuMDQxNjlIMTMuNzU2M0MxNC4wODYxIDYuMDQxNjkgMTQuNDAyNSA2LjE2ODM2IDE0LjYzNTcgNi4zOTM4M0MxNC44NjkgNi42MTkzIDE1IDYuOTI1MTEgMTUgNy4yNDM5OEMxNSA3LjU2Mjg1IDE0Ljg2OSA3Ljg2ODY1IDE0LjYzNTcgOC4wOTQxM0MxNC40MDI1IDguMzE5NiAxNC4wODYxIDguNDQ2MjcgMTMuNzU2MyA4LjQ0NjI3SDMuNzQzNzVDMy40MTM4OSA4LjQ0NjI3IDMuMDk3NTMgOC4zMTk2IDIuODY0MjkgOC4wOTQxM0MyLjYzMTA0IDcuODY4NjUgMi41IDcuNTYyODUgMi41IDcuMjQzOThaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBkPVwiTTIuNSAxNC41QzIuNSAxMy44MzU0IDMuMDU3NSAxMy4yOTc3IDMuNzQzNzUgMTMuMjk3N0gyNi4yNTYzQzI2LjU4NjEgMTMuMjk3NyAyNi45MDI1IDEzLjQyNDQgMjcuMTM1NyAxMy42NDk5QzI3LjM2OSAxMy44NzUzIDI3LjUgMTQuMTgxMiAyNy41IDE0LjVDMjcuNSAxNC44MTg5IDI3LjM2OSAxNS4xMjQ3IDI3LjEzNTcgMTUuMzUwMkMyNi45MDI1IDE1LjU3NTYgMjYuNTg2MSAxNS43MDIzIDI2LjI1NjMgMTUuNzAyM0gzLjc0Mzc1QzMuNDEzODkgMTUuNzAyMyAzLjA5NzUzIDE1LjU3NTYgMi44NjQyOSAxNS4zNTAyQzIuNjMxMDQgMTUuMTI0NyAyLjUgMTQuODE4OSAyLjUgMTQuNVpcIlxuICAgICAgICAgICAgZmlsbD1cIiNGRkZBRkFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgIGQ9XCJNMy43NDM3NSAyMC41NTM4QzMuNDEzODkgMjAuNTUzOCAzLjA5NzUzIDIwLjY4MDQgMi44NjQyOSAyMC45MDU5QzIuNjMxMDQgMjEuMTMxNCAyLjUgMjEuNDM3MiAyLjUgMjEuNzU2MUMyLjUgMjIuMDc0OSAyLjYzMTA0IDIyLjM4MDcgMi44NjQyOSAyMi42MDYyQzMuMDk3NTMgMjIuODMxNyAzLjQxMzg5IDIyLjk1ODQgMy43NDM3NSAyMi45NTg0SDE4Ljc1NjNDMTkuMDg2MSAyMi45NTg0IDE5LjQwMjUgMjIuODMxNyAxOS42MzU3IDIyLjYwNjJDMTkuODY5IDIyLjM4MDcgMjAgMjIuMDc0OSAyMCAyMS43NTYxQzIwIDIxLjQzNzIgMTkuODY5IDIxLjEzMTQgMTkuNjM1NyAyMC45MDU5QzE5LjQwMjUgMjAuNjgwNCAxOS4wODYxIDIwLjU1MzggMTguNzU2MyAyMC41NTM4SDMuNzQzNzVaXCJcbiAgICAgICAgICAgIGZpbGw9XCIjRkZGQUZBXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L3N2Zz5cbiAgICAgIDwvZGl2PlxuICAgICAgPFNlY3Rpb25XcmFwcGVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMz5IaSwgbXkgbmFtZSBpczwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoMj5JYW4gQS4gRHJpbG9uLjwvaDI+XG4gICAgICAgICAgPGgyPkkgYnVpbGQgdGhpbmdzIGZvciB3ZWIuPC9oMj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBJ4oCZbSBhIHN0dWRlbnQgb2YgSWxvaWxvIFNjaWVuY2UgYW5kIFRlY2hub2xvZ3kgVW5pdmVyc2l0eSwgdGFraW5nIGFcbiAgICAgICAgICAgIEJhY2hlbG9yIG9mIFNjaWVuY2UgaW4gQ29tcHV0ZXIgU2NpZW5jZS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eyhldmVudCkgPT4gcmVkaXJlY3RFbWFpbChldmVudCl9PlxuICAgICAgICAgICAgR2V0IEluIFRvdWNoXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9TZWN0aW9uV3JhcHBlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdQYWdlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/LandingPage.tsx\n");

/***/ }),

/***/ "./css/GlobalStyles.tsx":
/*!******************************!*\
  !*** ./css/GlobalStyles.tsx ***!
  \******************************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return GlobalStyle; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"createGlobalStyle\"]`\n    body {\n        padding : 0;\n        margin : 0;\n        background: #0A192F;\n    }\n\n    button {\n        padding: 15px 30px;\n        border : solid 1px;\n        border-radius : 3px;\n        border-color : #FAF3F3;\n        color : #FAF3F3;\n        font-size : 15px;\n        font-weight : lighter;\n        font-family : var(--font-mono);\n        background-color : #0A192F;\n        cursor: pointer;\n    }\n\n    :root {\n    --dark-navy: #020c1b;\n    --navy: #0a192f;\n    --light-navy: #172a45;\n    --lightest-navy: #303C55;\n    --navy-shadow: rgba(2, 12, 27, 0.7);\n    --slate: #8690B0;\n    --light-slate: #a8b2d1;\n    --lightest-slate: #ccd6f6;\n    --white: #e6f1ff;\n    --green: #64ffda;\n    --green-tint: rgba(100, 255, 218, 0.1);\n\n    --font-sans: 'Calibre', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif;\n    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;\n    \n    --fz-xxs: 12px;\n    --fz-xs: 13px;\n    --fz-sm: 14px;\n    --fz-md: 16px;\n    --fz-lg: 18px;\n    --fz-xl: 20px;\n    --fz-xxl: 22px;\n    --fz-heading: 32px;\n\n    --border-radius: 4px;\n    --nav-height: 100px;\n    --nav-scroll-height: 70px;\n\n    --tab-height: 42px;\n    --tab-width: 120px;\n\n    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);\n    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);\n\n    --hamburger-width: 30px;\n\n    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;\n    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;\n    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);\n    --ham-after-active: bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;\n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    margin: 0 0 10px 0;\n    font-weight: 600;\n    color: var(--lightest-slate);\n    line-height: 1.1;\n  }\n\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvR2xvYmFsU3R5bGVzLnRzeD82MTQ3Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0EzRUEiLCJmaWxlIjoiLi9jc3MvR2xvYmFsU3R5bGVzLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUdsb2JhbFN0eWxlIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXG4gICAgYm9keSB7XG4gICAgICAgIHBhZGRpbmcgOiAwO1xuICAgICAgICBtYXJnaW4gOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMEExOTJGO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMzBweDtcbiAgICAgICAgYm9yZGVyIDogc29saWQgMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzIDogM3B4O1xuICAgICAgICBib3JkZXItY29sb3IgOiAjRkFGM0YzO1xuICAgICAgICBjb2xvciA6ICNGQUYzRjM7XG4gICAgICAgIGZvbnQtc2l6ZSA6IDE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0IDogbGlnaHRlcjtcbiAgICAgICAgZm9udC1mYW1pbHkgOiB2YXIoLS1mb250LW1vbm8pO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yIDogIzBBMTkyRjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIDpyb290IHtcbiAgICAtLWRhcmstbmF2eTogIzAyMGMxYjtcbiAgICAtLW5hdnk6ICMwYTE5MmY7XG4gICAgLS1saWdodC1uYXZ5OiAjMTcyYTQ1O1xuICAgIC0tbGlnaHRlc3QtbmF2eTogIzMwM0M1NTtcbiAgICAtLW5hdnktc2hhZG93OiByZ2JhKDIsIDEyLCAyNywgMC43KTtcbiAgICAtLXNsYXRlOiAjODY5MEIwO1xuICAgIC0tbGlnaHQtc2xhdGU6ICNhOGIyZDE7XG4gICAgLS1saWdodGVzdC1zbGF0ZTogI2NjZDZmNjtcbiAgICAtLXdoaXRlOiAjZTZmMWZmO1xuICAgIC0tZ3JlZW46ICM2NGZmZGE7XG4gICAgLS1ncmVlbi10aW50OiByZ2JhKDEwMCwgMjU1LCAyMTgsIDAuMSk7XG5cbiAgICAtLWZvbnQtc2FuczogJ0NhbGlicmUnLCAnU2FuIEZyYW5jaXNjbycsICdTRiBQcm8gVGV4dCcsIC1hcHBsZS1zeXN0ZW0sIHN5c3RlbS11aSwgc2Fucy1zZXJpZjtcbiAgICAtLWZvbnQtbW9ubzogJ1NGIE1vbm8nLCAnRmlyYSBDb2RlJywgJ0ZpcmEgTW9ubycsICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcbiAgICBcbiAgICAtLWZ6LXh4czogMTJweDtcbiAgICAtLWZ6LXhzOiAxM3B4O1xuICAgIC0tZnotc206IDE0cHg7XG4gICAgLS1mei1tZDogMTZweDtcbiAgICAtLWZ6LWxnOiAxOHB4O1xuICAgIC0tZnoteGw6IDIwcHg7XG4gICAgLS1mei14eGw6IDIycHg7XG4gICAgLS1mei1oZWFkaW5nOiAzMnB4O1xuXG4gICAgLS1ib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgLS1uYXYtaGVpZ2h0OiAxMDBweDtcbiAgICAtLW5hdi1zY3JvbGwtaGVpZ2h0OiA3MHB4O1xuXG4gICAgLS10YWItaGVpZ2h0OiA0MnB4O1xuICAgIC0tdGFiLXdpZHRoOiAxMjBweDtcblxuICAgIC0tZWFzaW5nOiBjdWJpYy1iZXppZXIoMC42NDUsIDAuMDQ1LCAwLjM1NSwgMSk7XG4gICAgLS10cmFuc2l0aW9uOiBhbGwgMC4yNXMgY3ViaWMtYmV6aWVyKDAuNjQ1LCAwLjA0NSwgMC4zNTUsIDEpO1xuXG4gICAgLS1oYW1idXJnZXItd2lkdGg6IDMwcHg7XG5cbiAgICAtLWhhbS1iZWZvcmU6IHRvcCAwLjFzIGVhc2UtaW4gMC4yNXMsIG9wYWNpdHkgMC4xcyBlYXNlLWluO1xuICAgIC0taGFtLWJlZm9yZS1hY3RpdmU6IHRvcCAwLjFzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMXMgZWFzZS1vdXQgMC4xMnM7XG4gICAgLS1oYW0tYWZ0ZXI6IGJvdHRvbSAwLjFzIGVhc2UtaW4gMC4yNXMsIHRyYW5zZm9ybSAwLjIycyBjdWJpYy1iZXppZXIoMC41NSwgMC4wNTUsIDAuNjc1LCAwLjE5KTtcbiAgICAtLWhhbS1hZnRlci1hY3RpdmU6IGJvdHRvbSAwLjFzIGVhc2Utb3V0LCB0cmFuc2Zvcm0gMC4yMnMgY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxLCAwLjM1NSwgMSkgMC4xMnM7XG4gIH1cblxuICBoMSxcbiAgaDIsXG4gIGgzLFxuICBoNCxcbiAgaDUsXG4gIGg2IHtcbiAgICBtYXJnaW46IDAgMCAxMHB4IDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogdmFyKC0tbGlnaHRlc3Qtc2xhdGUpO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gIH1cblxuYDtcblxuZXhwb3J0IHsgR2xvYmFsU3R5bGUgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./css/GlobalStyles.tsx\n");

/***/ }),

/***/ "./css/index.tsx":
/*!***********************!*\
  !*** ./css/index.tsx ***!
  \***********************/
/*! exports provided: GlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalStyles */ \"./css/GlobalStyles.tsx\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"GlobalStyle\", function() { return _GlobalStyles__WEBPACK_IMPORTED_MODULE_0__[\"GlobalStyle\"]; });\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jc3MvaW5kZXgudHN4PzNlMzMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiIuL2Nzcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWxTdHlsZSB9IGZyb20gXCIuL0dsb2JhbFN0eWxlc1wiO1xuXG5leHBvcnQgeyBHbG9iYWxTdHlsZSB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./css/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_LandingPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LandingPage */ \"./components/LandingPage.tsx\");\n/* harmony import */ var _css_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/index */ \"./css/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/home/exedotzip/Documents/Website_Reference/drilon7/pages/index.tsx\";\n\n\n\n\nconst Div = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({\n  displayName: \"pages__Div\",\n  componentId: \"sc-1ahzpag-0\"\n})([\"padding:45px 60px;\"]);\n\nconst index = () => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Div, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_css_index__WEBPACK_IMPORTED_MODULE_3__[\"GlobalStyle\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LandingPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJEaXYiLCJzdHlsZWQiLCJkaXYiLCJpbmRleCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUdDLHdEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsMEJBQVQ7O0FBSUEsTUFBTUMsS0FBZSxHQUFHLE1BQU07QUFDNUIsc0JBQ0U7QUFBQSwyQkFDRSxxRUFBQyxHQUFEO0FBQUEsOEJBQ0UscUVBQUMsc0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBREY7QUFRRCxDQVREOztBQVdlQSxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMYW5kaW5nUGFnZSBmcm9tIFwiLi4vY29tcG9uZW50cy9MYW5kaW5nUGFnZVwiO1xuaW1wb3J0IHsgR2xvYmFsU3R5bGUgfSBmcm9tIFwiLi4vY3NzL2luZGV4XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBEaXYgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiA0NXB4IDYwcHg7XG5gO1xuXG5jb25zdCBpbmRleDogUmVhY3QuRkMgPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxEaXY+XG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgICAgICA8TGFuZGluZ1BhZ2UgLz5cbiAgICAgIDwvRGl2PlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

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