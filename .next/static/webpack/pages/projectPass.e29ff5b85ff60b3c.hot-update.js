"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/projectPass",{

/***/ "./src/pages/projectPass/index.jsx":
/*!*****************************************!*\
  !*** ./src/pages/projectPass/index.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var E_1_Personal_p_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var E_1_Personal_p_3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var E_1_Personal_p_3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var E_1_Personal_p_3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_1_Personal_p_3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Navbar/navbar */ \"./src/components/Navbar/navbar.jsx\");\n/* harmony import */ var _layouts_Dark__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../layouts/Dark */ \"./src/layouts/Dark.jsx\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Call-to-action/call-to-action */ \"./src/components/Call-to-action/call-to-action.jsx\");\n/* harmony import */ var _components_Loader_loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Loader/loader */ \"./src/components/Loader/loader.jsx\");\n/* harmony import */ var _components_project_pass_form_project_pass_form__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/project-pass-form/project-pass-form */ \"./src/components/project-pass-form/project-pass-form.jsx\");\n/* harmony import */ var _context_AuthContext_useAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context/AuthContext/useAuth */ \"./src/context/AuthContext/useAuth.js\");\n/* harmony import */ var _context_UserAuthContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/UserAuthContext */ \"./src/context/UserAuthContext.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"E:\\\\1. Personal\\\\p-3\\\\src\\\\pages\\\\projectPass\\\\index.jsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar ProjectPass = function ProjectPass() {\n  _s();\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default().useState(false),\n      _React$useState2 = (0,E_1_Personal_p_3_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_React$useState, 2),\n      isLoading = _React$useState2[0],\n      setIsLoading = _React$useState2[1];\n\n  var fixedHeader = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n  var MainContent = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n  var navbarRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n  var logoRef = react__WEBPACK_IMPORTED_MODULE_3___default().useRef(null);\n  var authContext = react__WEBPACK_IMPORTED_MODULE_3___default().useContext(_context_UserAuthContext__WEBPACK_IMPORTED_MODULE_11__.AuthContext);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {\n    setInterval(function () {\n      if (fixedHeader.current) {\n        var slidHeight = fixedHeader.current.offsetHeight;\n      }\n\n      if (MainContent.current) {\n        MainContent.current.style.marginTop = slidHeight + 'px';\n      }\n    }, 1000);\n    var navbar = navbarRef.current;\n\n    if (window.pageYOffset > 300) {\n      navbar.classList.add('nav-scroll');\n    } else {\n      navbar.classList.remove('nav-scroll');\n    }\n\n    window.addEventListener('scroll', function () {\n      if (window.pageYOffset > 300) {\n        navbar.classList.add('nav-scroll');\n      } else {\n        navbar.classList.remove('nav-scroll');\n      }\n    });\n  }, [fixedHeader, MainContent, navbarRef]);\n\n  var restoreUser = /*#__PURE__*/function () {\n    var _ref = (0,E_1_Personal_p_3_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/E_1_Personal_p_3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {\n      var data;\n      return E_1_Personal_p_3_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              setTimeout(function () {\n                // Code to be executed after the timeout\n                setIsLoading(true);\n              }, 2000);\n              data = _context_AuthContext_useAuth__WEBPACK_IMPORTED_MODULE_10__[\"default\"].getUser();\n\n              if (data) {\n                router.push(\"/project-hub/\".concat(data.user_id));\n              }\n\n              setIsLoading(false);\n\n            case 4:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function restoreUser() {\n      return _ref.apply(this, arguments);\n    };\n  }();\n\n  react__WEBPACK_IMPORTED_MODULE_3___default().useEffect(function () {\n    restoreUser();\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_layouts_Dark__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    children: [isLoading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Loader_loader__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 21\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n      className: \"circle-bg\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n        className: \"circle-color fixed\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n          className: \"gradient-circle\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n          className: \"gradient-circle two\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 69,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Navbar_navbar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      nr: navbarRef,\n      lr: logoRef\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 72,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(\"div\", {\n      ref: MainContent,\n      className: \"main-content\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_project_pass_form_project_pass_form__WEBPACK_IMPORTED_MODULE_9__[\"default\"], {\n        noLine: true\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxDEV)(_components_Call_to_action_call_to_action__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 64,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProjectPass, \"R/x3FYCTGCDZvanLZreqAOKFrtg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter];\n});\n\n_c = ProjectPass;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectPass);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProjectPass\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHFEQUFEO0FBQUEsZUFDR3hCLFNBQVMsaUJBQUksK0RBQUMsaUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURoQixlQUVFO0FBQUssZUFBUyxFQUFDLFdBQWY7QUFBQSw2QkFDRTtBQUFLLGlCQUFTLEVBQUMsb0JBQWY7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsZUFRRSwrREFBQyxpRUFBRDtBQUFRLFFBQUUsRUFBRUssU0FBWjtBQUF1QixRQUFFLEVBQUVDO0FBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFSRixlQVVFO0FBQUssU0FBRyxFQUFFRixXQUFWO0FBQXVCLGVBQVMsRUFBQyxjQUFqQztBQUFBLDhCQUdFLCtEQUFDLHVGQUFEO0FBQWlCLGNBQU07QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGLGVBSUUsK0RBQUMsaUZBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0JELENBdkVEOztHQUFNTjtVQU9XTjs7O0tBUFhNO0FBeUVOLCtEQUFlQSxXQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9wcm9qZWN0UGFzcy9pbmRleC5qc3g/YmI1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyL25hdmJhcic7XHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSAnLi4vLi4vbGF5b3V0cy9EYXJrJztcclxuXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhbGwtdG8tYWN0aW9uL2NhbGwtdG8tYWN0aW9uJztcclxuaW1wb3J0IExvYWRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xvYWRlci9sb2FkZXInO1xyXG5pbXBvcnQgUHJvamVjdFBhc3NGb3JtIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvcHJvamVjdC1wYXNzLWZvcm0vcHJvamVjdC1wYXNzLWZvcm0nO1xyXG5pbXBvcnQgdXNlQXV0aCBmcm9tICcuLi8uLi9jb250ZXh0L0F1dGhDb250ZXh0L3VzZUF1dGgnO1xyXG5pbXBvcnQgeyBBdXRoQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQvVXNlckF1dGhDb250ZXh0JztcclxuXHJcbmNvbnN0IFByb2plY3RQYXNzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgZml4ZWRIZWFkZXIgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgTWFpbkNvbnRlbnQgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgbmF2YmFyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IGxvZ29SZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgYXV0aENvbnRleHQgPSBSZWFjdC51c2VDb250ZXh0KEF1dGhDb250ZXh0KTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgaWYgKGZpeGVkSGVhZGVyLmN1cnJlbnQpIHtcclxuICAgICAgICB2YXIgc2xpZEhlaWdodCA9IGZpeGVkSGVhZGVyLmN1cnJlbnQub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChNYWluQ29udGVudC5jdXJyZW50KSB7XHJcbiAgICAgICAgTWFpbkNvbnRlbnQuY3VycmVudC5zdHlsZS5tYXJnaW5Ub3AgPSBzbGlkSGVpZ2h0ICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgfSwgMTAwMCk7XHJcbiAgICB2YXIgbmF2YmFyID0gbmF2YmFyUmVmLmN1cnJlbnQ7XHJcbiAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID4gMzAwKSB7XHJcbiAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXYtc2Nyb2xsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuYXZiYXIuY2xhc3NMaXN0LnJlbW92ZSgnbmF2LXNjcm9sbCcpO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsICgpID0+IHtcclxuICAgICAgaWYgKHdpbmRvdy5wYWdlWU9mZnNldCA+IDMwMCkge1xyXG4gICAgICAgIG5hdmJhci5jbGFzc0xpc3QuYWRkKCduYXYtc2Nyb2xsJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmF2YmFyLmNsYXNzTGlzdC5yZW1vdmUoJ25hdi1zY3JvbGwnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfSwgW2ZpeGVkSGVhZGVyLCBNYWluQ29udGVudCwgbmF2YmFyUmVmXSk7XHJcblxyXG4gIGNvbnN0IHJlc3RvcmVVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIC8vIENvZGUgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhlIHRpbWVvdXRcclxuICAgICAgc2V0SXNMb2FkaW5nKHRydWUpO1xyXG4gICAgfSwgMjAwMCk7XHJcblxyXG4gICAgY29uc3QgZGF0YSA9IHVzZUF1dGguZ2V0VXNlcigpO1xyXG5cclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKGAvcHJvamVjdC1odWIvJHtkYXRhLnVzZXJfaWR9YCk7XHJcbiAgICB9XHJcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICByZXN0b3JlVXNlcigpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxEYXJrVGhlbWU+XHJcbiAgICAgIHtpc0xvYWRpbmcgJiYgPExvYWRlciAvPn1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZS1iZyc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NpcmNsZS1jb2xvciBmaXhlZCc+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZ3JhZGllbnQtY2lyY2xlJz48L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdncmFkaWVudC1jaXJjbGUgdHdvJz48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxOYXZiYXIgbnI9e25hdmJhclJlZn0gbHI9e2xvZ29SZWZ9IC8+XHJcblxyXG4gICAgICA8ZGl2IHJlZj17TWFpbkNvbnRlbnR9IGNsYXNzTmFtZT0nbWFpbi1jb250ZW50Jz5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0gRm9ybSAtLS0tLS0tLS0tLS0tLSAqL31cclxuXHJcbiAgICAgICAgPFByb2plY3RQYXNzRm9ybSBub0xpbmUgLz5cclxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgICAgey8qIC0tLS0tLSBFbmQgLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0RhcmtUaGVtZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdFBhc3M7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIk5hdmJhciIsIkRhcmtUaGVtZSIsInVzZVJvdXRlciIsIkNhbGxUb0FjdGlvbiIsIkxvYWRlciIsIlByb2plY3RQYXNzRm9ybSIsInVzZUF1dGgiLCJBdXRoQ29udGV4dCIsIlByb2plY3RQYXNzIiwidXNlU3RhdGUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJmaXhlZEhlYWRlciIsInVzZVJlZiIsIk1haW5Db250ZW50IiwibmF2YmFyUmVmIiwibG9nb1JlZiIsImF1dGhDb250ZXh0IiwidXNlQ29udGV4dCIsInJvdXRlciIsInVzZUVmZmVjdCIsInNldEludGVydmFsIiwiY3VycmVudCIsInNsaWRIZWlnaHQiLCJvZmZzZXRIZWlnaHQiLCJzdHlsZSIsIm1hcmdpblRvcCIsIm5hdmJhciIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc3RvcmVVc2VyIiwic2V0VGltZW91dCIsImRhdGEiLCJnZXRVc2VyIiwicHVzaCIsInVzZXJfaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/projectPass/index.jsx\n");

/***/ })

});