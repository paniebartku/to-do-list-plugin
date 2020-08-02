/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./public/src/index.js":
/*!*****************************!*\
  !*** ./public/src/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(jQuery) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scss/style.scss */ "./public/src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable */


function updateIcons() {
  var updateIcons = _toConsumableArray(document.querySelectorAll(".updateBtn i"));

  updateIcons.forEach(function (item) {
    console.log(item.parentElement.parentElement.parentElement);

    if (item.parentElement.parentElement.parentElement.className.includes("done")) {
      item.classList.remove("fa-square-o");
      item.classList.add("fa-check-square-o");
    }
  });
} //sort fnc


function sortItems() {
  var items = _toConsumableArray(document.querySelectorAll(".single-task"));

  var ul = document.querySelector(".to-do-list-post-area ul");
  var newArray = items.sort(function (a, b) {
    if (a.className.includes("done")) return 1;
    return 0;
  });
  console.log(newArray);

  for (var i = 0; i < newArray.length; i++) {
    ul.appendChild(newArray[i]);
  }
}

function getPosts() {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
    type: "GET",
    url: MyAjax.ajaxurl,
    dataType: "html",
    // add data type
    data: {
      action: "get_ajax_posts"
    },
    success: function success(response) {
      jquery__WEBPACK_IMPORTED_MODULE_0___default()(".to-do-list-post-area ul").html(response);
      updateIcons();
      sortItems();
    }
  });
}

(function ($) {
  getPosts();
  $(document).on("click", ".removeBtn", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    var nonce = $(this).data("nonce");
    $.ajax({
      type: "post",
      url: MyAjax.ajaxurl,
      data: {
        action: "my_delete_post",
        nonce: nonce,
        id: id
      },
      success: function success(result) {
        if (result == "success") {
          getPosts();
        }
      }
    });
    return false;
  });
  $(document).on("click", ".updateBtn", function (e) {
    e.preventDefault();
    var id = $(this).data("id");
    var nonce = $(this).data("nonce-update");
    $.ajax({
      type: "post",
      url: MyAjax.ajaxurl,
      data: {
        action: "my_update_post",
        nonce: nonce,
        id: id
      },
      success: function success(result) {
        getPosts();
      }
    });
    return false;
  });
  document.addEventListener("DOMContentLoaded", function (e) {
    var taskForm = document.getElementById("task-form");
    taskForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var url = taskForm.dataset.url;
      var params = new URLSearchParams(new FormData(taskForm));
      taskForm.querySelector(".js-form-submission").classList.add("show");
      fetch(url, {
        method: "POST",
        body: params
      }).then(function (res) {
        return res.json();
      }).then(function (response) {
        getPosts();
        resetMessages();

        if (response === 0 || response.status === "error") {
          taskForm.querySelector(".js-form-error").classList.add("show");
          return;
        }

        taskForm.querySelector(".js-form-success").classList.add("show");
        taskForm.reset();
      });
    });
  });

  function resetMessages() {
    document.querySelectorAll(".field-msg").forEach(function (item) {
      return item.classList.remove("show");
    });
  }
})(jQuery); // change icon



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./public/src/scss/style.scss":
/*!************************************!*\
  !*** ./public/src/scss/style.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!***********************************!*\
  !*** multi ./public/src/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /opt/lampp/htdocs/wp/wp-content/plugins/to-do-list-task/public/src/index.js */"./public/src/index.js");


/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=public.js.map