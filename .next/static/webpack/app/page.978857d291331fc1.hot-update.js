"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/three/computer-com-loader.jsx":
/*!******************************************************!*\
  !*** ./src/components/three/computer-com-loader.jsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   DogContainer: function() { return /* binding */ DogContainer; },\n/* harmony export */   DogSpinner: function() { return /* binding */ DogSpinner; },\n/* harmony export */   \"default\": function() { return /* binding */ Loader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"(app-pages-browser)/./src/components/three/style.css\");\n\n\n\nconst DogSpinner = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"load-container bg-[--bg]\"\n    }, void 0, false, {\n        fileName: \"D:\\\\job\\\\front-all\\\\myblog\\\\src\\\\components\\\\three\\\\computer-com-loader.jsx\",\n        lineNumber: 4,\n        columnNumber: 3\n    }, undefined);\n_c = DogSpinner;\nconst DogContainer = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((param, ref)=>{\n    let { children } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: ref,\n        className: \"h-40\",\n        position: \"relative\",\n        children: children\n    }, void 0, false, {\n        fileName: \"D:\\\\job\\\\front-all\\\\myblog\\\\src\\\\components\\\\three\\\\computer-com-loader.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n});\n_c1 = DogContainer;\nfunction Loader() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DogContainer, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DogSpinner, {}, void 0, false, {\n            fileName: \"D:\\\\job\\\\front-all\\\\myblog\\\\src\\\\components\\\\three\\\\computer-com-loader.jsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\job\\\\front-all\\\\myblog\\\\src\\\\components\\\\three\\\\computer-com-loader.jsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, this);\n}\n_c2 = Loader;\n;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"DogSpinner\");\n$RefreshReg$(_c1, \"DogContainer\");\n$RefreshReg$(_c2, \"Loader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3RocmVlL2NvbXB1dGVyLWNvbS1sb2FkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ2Q7QUFDZCxNQUFNQyxhQUFhLGtCQUN4Qiw4REFBQ0M7UUFBSUMsV0FBVTs7Ozs7a0JBQ2Y7S0FGV0Y7QUFJTixNQUFNRyw2QkFBZUosaURBQVVBLENBQUMsUUFBZUs7UUFBZCxFQUFFQyxRQUFRLEVBQUU7eUJBQ2xELDhEQUFDSjtRQUFJRyxLQUFLQTtRQUFLRixXQUFVO1FBQU9JLFVBQVM7a0JBQ3RDRDs7Ozs7O0dBRUY7TUFKVUY7QUFNRSxTQUFTSTtJQUN0QixxQkFDRSw4REFBQ0o7a0JBQ0MsNEVBQUNIOzs7Ozs7Ozs7O0FBR1A7TUFOd0JPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3RocmVlL2NvbXB1dGVyLWNvbS1sb2FkZXIuanN4P2NlMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9yd2FyZFJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5leHBvcnQgY29uc3QgRG9nU3Bpbm5lciA9ICgpID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cImxvYWQtY29udGFpbmVyIGJnLVstLWJnXVwiPjwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IERvZ0NvbnRhaW5lciA9IGZvcndhcmRSZWYoKHsgY2hpbGRyZW4gfSwgcmVmKSA9PiAoXHJcbiAgPGRpdiByZWY9e3JlZn0gY2xhc3NOYW1lPVwiaC00MFwiIHBvc2l0aW9uPVwicmVsYXRpdmVcIj5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkZXIgICgpICB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxEb2dDb250YWluZXI+XHJcbiAgICAgIDxEb2dTcGlubmVyIC8+XHJcbiAgICA8L0RvZ0NvbnRhaW5lcj5cclxuICApO1xyXG59O1xyXG5cclxuIFxyXG4iXSwibmFtZXMiOlsiZm9yd2FyZFJlZiIsIkRvZ1NwaW5uZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJEb2dDb250YWluZXIiLCJyZWYiLCJjaGlsZHJlbiIsInBvc2l0aW9uIiwiTG9hZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/three/computer-com-loader.jsx\n"));

/***/ })

});