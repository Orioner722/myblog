"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hast-util-from-html-isomorphic";
exports.ids = ["vendor-chunks/hast-util-from-html-isomorphic"];
exports.modules = {

/***/ "(rsc)/./node_modules/hast-util-from-html-isomorphic/lib/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/hast-util-from-html-isomorphic/lib/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fromHtmlIsomorphic: () => (/* binding */ fromHtmlIsomorphic)\n/* harmony export */ });\n/* harmony import */ var hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hast-util-from-html */ \"(rsc)/./node_modules/hast-util-from-html/lib/index.js\");\n/* harmony import */ var unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-remove-position */ \"(rsc)/./node_modules/unist-util-remove-position/lib/index.js\");\n/**\n * @typedef {import('hast').Root} Root\n * @typedef {Pick<import('hast-util-from-html').Options, 'fragment'>} Options\n */\n\n\n\n\n/**\n * Turn HTML into a syntax tree, using browser APIs when available, so it has\n * a smaller bundle size there.\n *\n * @param {string} value\n *   Serialized HTML to parse.\n * @param {Options | null | undefined} [options]\n *   Configuration (optional).\n * @returns {Root}\n *   Tree.\n */\nfunction fromHtmlIsomorphic(value, options) {\n  const tree = (0,hast_util_from_html__WEBPACK_IMPORTED_MODULE_0__.fromHtml)(value, options)\n  ;(0,unist_util_remove_position__WEBPACK_IMPORTED_MODULE_1__.removePosition)(tree, {force: true})\n  delete tree.data\n  return tree\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBLGFBQWEscUJBQXFCO0FBQ2xDLGFBQWEseURBQXlEO0FBQ3RFOztBQUU0QztBQUNhOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGVBQWUsNkRBQVE7QUFDdkIsRUFBRSwyRUFBYyxRQUFRLFlBQVk7QUFDcEM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGFuLWJsb2cvLi9ub2RlX21vZHVsZXMvaGFzdC11dGlsLWZyb20taHRtbC1pc29tb3JwaGljL2xpYi9pbmRleC5qcz9mOGExIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHR5cGVkZWYge2ltcG9ydCgnaGFzdCcpLlJvb3R9IFJvb3RcbiAqIEB0eXBlZGVmIHtQaWNrPGltcG9ydCgnaGFzdC11dGlsLWZyb20taHRtbCcpLk9wdGlvbnMsICdmcmFnbWVudCc+fSBPcHRpb25zXG4gKi9cblxuaW1wb3J0IHtmcm9tSHRtbH0gZnJvbSAnaGFzdC11dGlsLWZyb20taHRtbCdcbmltcG9ydCB7cmVtb3ZlUG9zaXRpb259IGZyb20gJ3VuaXN0LXV0aWwtcmVtb3ZlLXBvc2l0aW9uJ1xuXG4vKipcbiAqIFR1cm4gSFRNTCBpbnRvIGEgc3ludGF4IHRyZWUsIHVzaW5nIGJyb3dzZXIgQVBJcyB3aGVuIGF2YWlsYWJsZSwgc28gaXQgaGFzXG4gKiBhIHNtYWxsZXIgYnVuZGxlIHNpemUgdGhlcmUuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiAgIFNlcmlhbGl6ZWQgSFRNTCB0byBwYXJzZS5cbiAqIEBwYXJhbSB7T3B0aW9ucyB8IG51bGwgfCB1bmRlZmluZWR9IFtvcHRpb25zXVxuICogICBDb25maWd1cmF0aW9uIChvcHRpb25hbCkuXG4gKiBAcmV0dXJucyB7Um9vdH1cbiAqICAgVHJlZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGZyb21IdG1sSXNvbW9ycGhpYyh2YWx1ZSwgb3B0aW9ucykge1xuICBjb25zdCB0cmVlID0gZnJvbUh0bWwodmFsdWUsIG9wdGlvbnMpXG4gIHJlbW92ZVBvc2l0aW9uKHRyZWUsIHtmb3JjZTogdHJ1ZX0pXG4gIGRlbGV0ZSB0cmVlLmRhdGFcbiAgcmV0dXJuIHRyZWVcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/hast-util-from-html-isomorphic/lib/index.js\n");

/***/ })

};
;