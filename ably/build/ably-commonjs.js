/*!
 * @license Copyright 2015-2022 Ably Real-time Ltd (ably.com)
 * 
 * Ably JavaScript Library v1.2.48
 * https://github.com/ably/ably-js
 * 
 * Released under the Apache Licence v2.0
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Ably"] = factory();
	else
		root["Ably"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArray", function() { return __spreadArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.allToUpperCase = exports.allToLowerCase = exports.encodeBody = exports.decodeBody = exports.Format = exports.promisify = exports.trim = exports.arrChooseN = exports.randomHexString = exports.randomString = exports.cheapRandStr = exports.dataSizeBytes = exports.inspectBody = exports.inspectError = exports.isErrorInfoOrPartialErrorInfo = exports.now = exports.parseQueryString = exports.toQueryString = exports.arrPopRandomElement = exports.defaultPostHeaders = exports.defaultGetHeaders = exports.allSame = exports.arrEvery = exports.arrFilter = exports.arrMap = exports.safeArrForEach = exports.arrForEach = exports.forInOwnNonNullProperties = exports.valuesArray = exports.keysArray = exports.arrWithoutValue = exports.arrDeleteValue = exports.arrIn = exports.arrIndexOf = exports.arrSubtract = exports.arrIntersectOb = exports.arrIntersect = exports.intersect = exports.containsValue = exports.inherits = exports.prototypicalClone = exports.shallowClone = exports.isEmptyArg = exports.isOnlyPropIn = exports.isEmpty = exports.isObject = exports.ensureArray = exports.isArray = exports.copy = exports.mixin = void 0;
exports.arrEquals = exports.toBase64 = exports.matchDerivedChannel = exports.shallowEquals = exports.getGlobalObject = exports.getRetryTime = exports.getJitterCoefficient = exports.getBackoffCoefficient = void 0;
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var defaults_1 = tslib_1.__importStar(__webpack_require__(8));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var enc_base64_1 = __webpack_require__(11);
var enc_utf8_1 = __webpack_require__(31);
function randomPosn(arrOrStr) {
    return Math.floor(Math.random() * arrOrStr.length);
}
/*
 * Add a set of properties to a target object
 * target: the target object
 * props:  an object whose enumerable properties are
 *         added, by reference only
 */
function mixin(target) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        var source = args[i];
        if (!source) {
            break;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        for (var key in source) {
            if (!hasOwnProperty || hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
exports.mixin = mixin;
/*
 * Add a set of properties to a target object
 * target: the target object
 * props:  an object whose enumerable properties are
 *         added, by reference only
 */
function copy(src) {
    return mixin({}, src);
}
exports.copy = copy;
/*
 * Determine whether or not a given object is
 * an array.
 */
exports.isArray = Array.isArray ||
    function (value) {
        return Object.prototype.toString.call(value) == '[object Array]';
    };
/*
 * Ensures that an Array object is always returned
 * returning the original Array of obj is an Array
 * else wrapping the obj in a single element Array
 */
function ensureArray(obj) {
    if (isEmptyArg(obj)) {
        return [];
    }
    if ((0, exports.isArray)(obj)) {
        return obj;
    }
    return [obj];
}
exports.ensureArray = ensureArray;
function isObject(ob) {
    return Object.prototype.toString.call(ob) == '[object Object]';
}
exports.isObject = isObject;
/*
 * Determine whether or not an object contains
 * any enumerable properties.
 * ob: the object
 */
function isEmpty(ob) {
    for (var prop in ob)
        return false;
    return true;
}
exports.isEmpty = isEmpty;
function isOnlyPropIn(ob, property) {
    for (var prop in ob) {
        if (prop !== property) {
            return false;
        }
    }
    return true;
}
exports.isOnlyPropIn = isOnlyPropIn;
/*
 * Determine whether or not an argument to an overloaded function is
 * undefined (missing) or null.
 * This method is useful when constructing functions such as (WebIDL terminology):
 *   off([TreatUndefinedAs=Null] DOMString? event)
 * as you can then confirm the argument using:
 *   Utils.isEmptyArg(event)
 */
function isEmptyArg(arg) {
    return arg === null || arg === undefined;
}
exports.isEmptyArg = isEmptyArg;
/*
 * Perform a simple shallow clone of an object.
 * Result is an object irrespective of whether
 * the input is an object or array. All
 * enumerable properties are copied.
 * ob: the object
 */
function shallowClone(ob) {
    var result = new Object();
    for (var prop in ob)
        result[prop] = ob[prop];
    return result;
}
exports.shallowClone = shallowClone;
/*
 * Clone an object by creating a new object with the
 * given object as its prototype. Optionally
 * a set of additional own properties can be
 * supplied to be added to the newly created clone.
 * ob:            the object to be cloned
 * ownProperties: optional object with additional
 *                properties to add
 */
function prototypicalClone(ob, ownProperties) {
    var F = /** @class */ (function () {
        function F() {
        }
        return F;
    }());
    F.prototype = ob;
    var result = new F();
    if (ownProperties)
        mixin(result, ownProperties);
    return result;
}
exports.prototypicalClone = prototypicalClone;
/*
 * Declare a constructor to represent a subclass
 * of another constructor
 * If platform has a built-in version we use that from Platform, else we
 * define here (so can make use of other Utils fns)
 * See node.js util.inherits
 */
var inherits = function (ctor, superCtor) {
    if (platform_1.default.Config.inherits) {
        platform_1.default.Config.inherits(ctor, superCtor);
        return;
    }
    ctor.super_ = superCtor;
    ctor.prototype = prototypicalClone(superCtor.prototype, { constructor: ctor });
};
exports.inherits = inherits;
/*
 * Determine whether or not an object has an enumerable
 * property whose value equals a given value.
 * ob:  the object
 * val: the value to find
 */
function containsValue(ob, val) {
    for (var i in ob) {
        if (ob[i] == val)
            return true;
    }
    return false;
}
exports.containsValue = containsValue;
function intersect(arr, ob) {
    return (0, exports.isArray)(ob) ? arrIntersect(arr, ob) : arrIntersectOb(arr, ob);
}
exports.intersect = intersect;
function arrIntersect(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var member = arr1[i];
        if ((0, exports.arrIndexOf)(arr2, member) != -1)
            result.push(member);
    }
    return result;
}
exports.arrIntersect = arrIntersect;
function arrIntersectOb(arr, ob) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var member = arr[i];
        if (member in ob)
            result.push(member);
    }
    return result;
}
exports.arrIntersectOb = arrIntersectOb;
function arrSubtract(arr1, arr2) {
    var result = [];
    for (var i = 0; i < arr1.length; i++) {
        var element = arr1[i];
        if ((0, exports.arrIndexOf)(arr2, element) == -1)
            result.push(element);
    }
    return result;
}
exports.arrSubtract = arrSubtract;
exports.arrIndexOf = Array.prototype.indexOf
    ? function (arr, elem, fromIndex) {
        return arr.indexOf(elem, fromIndex);
    }
    : function (arr, elem, fromIndex) {
        fromIndex = fromIndex || 0;
        var len = arr.length;
        for (; fromIndex < len; fromIndex++) {
            if (arr[fromIndex] === elem) {
                return fromIndex;
            }
        }
        return -1;
    };
function arrIn(arr, val) {
    return (0, exports.arrIndexOf)(arr, val) !== -1;
}
exports.arrIn = arrIn;
function arrDeleteValue(arr, val) {
    var idx = (0, exports.arrIndexOf)(arr, val);
    var res = idx != -1;
    if (res)
        arr.splice(idx, 1);
    return res;
}
exports.arrDeleteValue = arrDeleteValue;
function arrWithoutValue(arr, val) {
    var newArr = arr.slice();
    arrDeleteValue(newArr, val);
    return newArr;
}
exports.arrWithoutValue = arrWithoutValue;
/*
 * Construct an array of the keys of the enumerable
 * properties of a given object, optionally limited
 * to only the own properties.
 * ob:      the object
 * ownOnly: boolean, get own properties only
 */
function keysArray(ob, ownOnly) {
    var result = [];
    for (var prop in ob) {
        if (ownOnly && !Object.prototype.hasOwnProperty.call(ob, prop))
            continue;
        result.push(prop);
    }
    return result;
}
exports.keysArray = keysArray;
/*
 * Construct an array of the values of the enumerable
 * properties of a given object, optionally limited
 * to only the own properties.
 * ob:      the object
 * ownOnly: boolean, get own properties only
 */
function valuesArray(ob, ownOnly) {
    var result = [];
    for (var prop in ob) {
        if (ownOnly && !Object.prototype.hasOwnProperty.call(ob, prop))
            continue;
        result.push(ob[prop]);
    }
    return result;
}
exports.valuesArray = valuesArray;
function forInOwnNonNullProperties(ob, fn) {
    for (var prop in ob) {
        if (Object.prototype.hasOwnProperty.call(ob, prop) && ob[prop]) {
            fn(prop);
        }
    }
}
exports.forInOwnNonNullProperties = forInOwnNonNullProperties;
exports.arrForEach = Array.prototype.forEach
    ? function (arr, fn) {
        arr.forEach(fn);
    }
    : function (arr, fn) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            fn(arr[i], i, arr);
        }
    };
/* Useful when the function may mutate the array */
function safeArrForEach(arr, fn) {
    return (0, exports.arrForEach)(arr.slice(), fn);
}
exports.safeArrForEach = safeArrForEach;
exports.arrMap = Array.prototype.map
    ? function (arr, fn) {
        return arr.map(fn);
    }
    : function (arr, fn) {
        var result = [];
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            result.push(fn(arr[i], i, arr));
        }
        return result;
    };
exports.arrFilter = Array.prototype.filter
    ? function (arr, fn) {
        return arr.filter(fn);
    }
    : function (arr, fn) {
        var result = [], len = arr.length;
        for (var i = 0; i < len; i++) {
            if (fn(arr[i])) {
                result.push(arr[i]);
            }
        }
        return result;
    };
exports.arrEvery = Array.prototype.every
    ? function (arr, fn) {
        return arr.every(fn);
    }
    : function (arr, fn) {
        var len = arr.length;
        for (var i = 0; i < len; i++) {
            if (!fn(arr[i], i, arr)) {
                return false;
            }
        }
        return true;
    };
function allSame(arr, prop) {
    if (arr.length === 0) {
        return true;
    }
    var first = arr[0][prop];
    return (0, exports.arrEvery)(arr, function (item) {
        return item[prop] === first;
    });
}
exports.allSame = allSame;
var contentTypes = {
    json: 'application/json',
    jsonp: 'application/javascript',
    xml: 'application/xml',
    html: 'text/html',
    msgpack: 'application/x-msgpack',
};
function defaultGetHeaders(options, format) {
    var accept = contentTypes[format || Format.json];
    return {
        accept: accept,
        'X-Ably-Version': defaults_1.default.protocolVersion.toString(),
        'Ably-Agent': (0, defaults_1.getAgentString)(options),
    };
}
exports.defaultGetHeaders = defaultGetHeaders;
function defaultPostHeaders(options, format) {
    var contentType;
    var accept = (contentType = contentTypes[format || Format.json]);
    return {
        accept: accept,
        'content-type': contentType,
        'X-Ably-Version': defaults_1.default.protocolVersion.toString(),
        'Ably-Agent': (0, defaults_1.getAgentString)(options),
    };
}
exports.defaultPostHeaders = defaultPostHeaders;
function arrPopRandomElement(arr) {
    return arr.splice(randomPosn(arr), 1)[0];
}
exports.arrPopRandomElement = arrPopRandomElement;
function toQueryString(params) {
    var parts = [];
    if (params) {
        for (var key in params)
            parts.push(encodeURIComponent(key) + '=' + encodeURIComponent(params[key]));
    }
    return parts.length ? '?' + parts.join('&') : '';
}
exports.toQueryString = toQueryString;
function parseQueryString(query) {
    var match;
    var search = /([^?&=]+)=?([^&]*)/g;
    var result = {};
    while ((match = search.exec(query)))
        result[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    return result;
}
exports.parseQueryString = parseQueryString;
exports.now = Date.now ||
    function () {
        /* IE 8 */
        return new Date().getTime();
    };
function isErrorInfoOrPartialErrorInfo(err) {
    return (typeof err == 'object' &&
        err !== null &&
        (err.constructor.name == 'ErrorInfo' || err.constructor.name == 'PartialErrorInfo'));
}
exports.isErrorInfoOrPartialErrorInfo = isErrorInfoOrPartialErrorInfo;
function inspectError(err) {
    var _a, _b;
    if (err instanceof Error ||
        ((_a = err === null || err === void 0 ? void 0 : err.constructor) === null || _a === void 0 ? void 0 : _a.name) === 'ErrorInfo' ||
        ((_b = err === null || err === void 0 ? void 0 : err.constructor) === null || _b === void 0 ? void 0 : _b.name) === 'PartialErrorInfo')
        return err.toString();
    return platform_1.default.Config.inspect(err);
}
exports.inspectError = inspectError;
function inspectBody(body) {
    if (platform_1.default.BufferUtils.isBuffer(body)) {
        return body.toString();
    }
    else if (typeof body === 'string') {
        return body;
    }
    else {
        return platform_1.default.Config.inspect(body);
    }
}
exports.inspectBody = inspectBody;
/* Data is assumed to be either a string or a buffer. */
function dataSizeBytes(data) {
    if (platform_1.default.BufferUtils.isBuffer(data)) {
        return platform_1.default.BufferUtils.byteLength(data);
    }
    if (typeof data === 'string') {
        return platform_1.default.Config.stringByteSize(data);
    }
    throw new Error('Expected input of Utils.dataSizeBytes to be a buffer or string, but was: ' + typeof data);
}
exports.dataSizeBytes = dataSizeBytes;
function cheapRandStr() {
    return String(Math.random()).substr(2);
}
exports.cheapRandStr = cheapRandStr;
/* Takes param the minimum number of bytes of entropy the string must
 * include, not the length of the string. String length produced is not
 * guaranteed. */
var randomString = function (numBytes) {
    if (platform_1.default.Config.getRandomValues && typeof Uint8Array !== 'undefined') {
        var uIntArr = new Uint8Array(numBytes);
        platform_1.default.Config.getRandomValues(uIntArr);
        return platform_1.default.BufferUtils.base64Encode(uIntArr);
    }
    /* Old browser; fall back to Math.random. Could just use a
     * CryptoJS version of the above, but want this to still work in nocrypto
     * versions of the library */
    var charset = platform_1.default.BufferUtils.base64CharSet;
    /* base64 has 33% overhead; round length up */
    var length = Math.round((numBytes * 4) / 3);
    var result = '';
    for (var i = 0; i < length; i++) {
        result += charset[randomPosn(charset)];
    }
    return result;
};
exports.randomString = randomString;
var randomHexString = function (numBytes) {
    if (platform_1.default.Config.getRandomValues && typeof Uint8Array !== 'undefined') {
        var uIntArr = new Uint8Array(numBytes);
        platform_1.default.Config.getRandomValues(uIntArr);
        return platform_1.default.BufferUtils.hexEncode(uIntArr);
    }
    var charset = platform_1.default.BufferUtils.hexCharSet;
    var length = numBytes * 2;
    var result = '';
    for (var i = 0; i < length; i++) {
        result += charset[randomPosn(charset)];
    }
    return result;
};
exports.randomHexString = randomHexString;
/* Pick n elements at random without replacement from an array */
function arrChooseN(arr, n) {
    var numItems = Math.min(n, arr.length), mutableArr = arr.slice(), result = [];
    for (var i = 0; i < numItems; i++) {
        result.push(arrPopRandomElement(mutableArr));
    }
    return result;
}
exports.arrChooseN = arrChooseN;
exports.trim = String.prototype.trim
    ? function (str) {
        return str.trim();
    }
    : function (str) {
        return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
function promisify(ob, fnName, args) {
    return new Promise(function (resolve, reject) {
        ob[fnName].apply(ob, tslib_1.__spreadArray(tslib_1.__spreadArray([], args, false), [function (err, res) {
                err ? reject(err) : resolve(res);
            }], false));
    });
}
exports.promisify = promisify;
var Format;
(function (Format) {
    Format["msgpack"] = "msgpack";
    Format["json"] = "json";
})(Format = exports.Format || (exports.Format = {}));
function decodeBody(body, format) {
    return format == 'msgpack' ? platform_1.default.Config.msgpack.decode(body) : JSON.parse(String(body));
}
exports.decodeBody = decodeBody;
function encodeBody(body, format) {
    return format == 'msgpack' ? platform_1.default.Config.msgpack.encode(body, true) : JSON.stringify(body);
}
exports.encodeBody = encodeBody;
function allToLowerCase(arr) {
    return arr.map(function (element) {
        return element && element.toLowerCase();
    });
}
exports.allToLowerCase = allToLowerCase;
function allToUpperCase(arr) {
    return arr.map(function (element) {
        return element && element.toUpperCase();
    });
}
exports.allToUpperCase = allToUpperCase;
function getBackoffCoefficient(count) {
    return Math.min((count + 2) / 3, 2);
}
exports.getBackoffCoefficient = getBackoffCoefficient;
function getJitterCoefficient() {
    return 1 - Math.random() * 0.2;
}
exports.getJitterCoefficient = getJitterCoefficient;
/**
 *
 * @param initialTimeout initial timeout value
 * @param retryAttempt integer indicating retryAttempt
 * @returns RetryTimeout value for given timeout and retryAttempt.
 * If x is the value generated then,
 * Upper bound = min((retryAttempt + 2) / 3, 2) * initialTimeout,
 * Lower bound = 0.8 * Upper bound,
 * Lower bound < x < Upper bound
 */
function getRetryTime(initialTimeout, retryAttempt) {
    return initialTimeout * getBackoffCoefficient(retryAttempt) * getJitterCoefficient();
}
exports.getRetryTime = getRetryTime;
function getGlobalObject() {
    if (global) {
        return global;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    return self;
}
exports.getGlobalObject = getGlobalObject;
function shallowEquals(source, target) {
    return (Object.keys(source).every(function (key) { return source[key] === target[key]; }) &&
        Object.keys(target).every(function (key) { return target[key] === source[key]; }));
}
exports.shallowEquals = shallowEquals;
function matchDerivedChannel(name) {
    /**
     * This regex check is to retain existing channel params if any e.g [?rewind=1]foo to
     * [filter=xyz?rewind=1]foo. This is to keep channel compatibility around use of
     * channel params that work with derived channels.
     *
     * This eslint unsafe regex warning is triggered because the RegExp uses nested quantifiers,
     * but it does not create any situation where the regex engine has to
     * explore a large number of possible matches so it’s safe to ignore
     */
    var regex = /^(\[([^?]*)(?:(.*))\])?(.+)$/; // eslint-disable-line
    var match = name.match(regex);
    if (!match || !match.length || match.length < 5) {
        throw new errorinfo_1.default('regex match failed', 400, 40010);
    }
    // Fail if there is already a channel qualifier, eg [meta]foo should fail instead of just overriding with [filter=xyz]foo
    if (match[2]) {
        throw new errorinfo_1.default("cannot use a derived option with a ".concat(match[2], " channel"), 400, 40010);
    }
    // Return match values to be added to derive channel quantifier.
    return {
        qualifierParam: match[3] || '',
        channelName: match[4],
    };
}
exports.matchDerivedChannel = matchDerivedChannel;
function toBase64(str) {
    if (platform_1.default.Config.createHmac) {
        return Buffer.from(str, 'ascii').toString('base64');
    }
    return (0, enc_base64_1.stringify)((0, enc_utf8_1.parse)(str));
}
exports.toBase64 = toBase64;
function arrEquals(a, b) {
    return (a.length === b.length &&
        (0, exports.arrEvery)(a, function (val, i) {
            return val === b[i];
        }));
}
exports.arrEquals = arrEquals;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
// Workaround for salesforce lightning locker compatibility
// This is a shorthand version of Utils.getGlobalObject (which we can't use here without creating a circular import)
var globalObject = global || (typeof window !== 'undefined' ? window : self);
var LogLevels;
(function (LogLevels) {
    LogLevels[LogLevels["None"] = 0] = "None";
    LogLevels[LogLevels["Error"] = 1] = "Error";
    LogLevels[LogLevels["Major"] = 2] = "Major";
    LogLevels[LogLevels["Minor"] = 3] = "Minor";
    LogLevels[LogLevels["Micro"] = 4] = "Micro";
})(LogLevels || (LogLevels = {}));
function pad(timeSegment, three) {
    return "".concat(timeSegment).padStart(three ? 3 : 2, '0');
}
function getHandler(logger) {
    return platform_1.default.Config.logTimestamps
        ? function (msg) {
            var time = new Date();
            logger(pad(time.getHours()) +
                ':' +
                pad(time.getMinutes()) +
                ':' +
                pad(time.getSeconds()) +
                '.' +
                pad(time.getMilliseconds(), 1) +
                ' ' +
                msg);
        }
        : logger;
}
var getDefaultLoggers = function () {
    var _a, _b;
    var consoleLogger;
    var errorLogger;
    /* Can't just check for console && console.log; fails in IE <=9 */
    if ((typeof Window === 'undefined' && typeof WorkerGlobalScope === 'undefined') /* node */ ||
        typeof ((_b = (_a = globalObject === null || globalObject === void 0 ? void 0 : globalObject.console) === null || _a === void 0 ? void 0 : _a.log) === null || _b === void 0 ? void 0 : _b.apply) === 'function' /* sensible browsers */) {
        consoleLogger = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            console.log.apply(console, args);
        };
        errorLogger = console.warn
            ? function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                console.warn.apply(console, args);
            }
            : consoleLogger;
    }
    else if (globalObject === null || globalObject === void 0 ? void 0 : globalObject.console.log) {
        /* IE <= 9 with the console open -- console.log does not
         * inherit from Function, so has no apply method */
        consoleLogger = errorLogger = function () {
            Function.prototype.apply.call(console.log, console, arguments);
        };
    }
    else {
        /* IE <= 9 when dev tools are closed - window.console not even defined */
        consoleLogger = errorLogger = function () { };
    }
    return [consoleLogger, errorLogger].map(getHandler);
};
var Logger = /** @class */ (function () {
    function Logger() {
        Logger.logLevel = Logger.LOG_DEFAULT;
    }
    Logger.initLogHandlers = function () {
        var _a = getDefaultLoggers(), logHandler = _a[0], logErrorHandler = _a[1];
        this.logHandler = logHandler;
        this.logErrorHandler = logErrorHandler;
    };
    Logger.logLevel = LogLevels.Error; // default logLevel
    // public constants
    Logger.LOG_NONE = LogLevels.None;
    Logger.LOG_ERROR = LogLevels.Error;
    Logger.LOG_MAJOR = LogLevels.Major;
    Logger.LOG_MINOR = LogLevels.Minor;
    Logger.LOG_MICRO = LogLevels.Micro;
    // aliases
    Logger.LOG_DEFAULT = LogLevels.Error;
    Logger.LOG_DEBUG = LogLevels.Micro;
    /* public static functions */
    Logger.logAction = function (level, action, message) {
        if (Logger.shouldLog(level)) {
            (level === LogLevels.Error ? Logger.logErrorHandler : Logger.logHandler)('Ably: ' + action + ': ' + message);
        }
    };
    Logger.deprecated = function (original, replacement) {
        Logger.deprecatedWithMsg(original, "Please use '" + replacement + "' instead.");
    };
    Logger.deprecatedWithMsg = function (funcName, msg) {
        if (Logger.shouldLog(LogLevels.Error)) {
            Logger.logErrorHandler("Ably: Deprecation warning - '" + funcName + "' is deprecated and will be removed from a future version. " + msg);
        }
    };
    /* Where a logging operation is expensive, such as serialisation of data, use shouldLog will prevent
         the object being serialised if the log level will not output the message */
    Logger.shouldLog = function (level) {
        return level <= Logger.logLevel;
    };
    Logger.setLog = function (level, handler) {
        if (level !== undefined)
            Logger.logLevel = level;
        if (handler !== undefined)
            Logger.logHandler = Logger.logErrorHandler = handler;
    };
    return Logger;
}());
exports.default = Logger;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Platform = /** @class */ (function () {
    function Platform() {
    }
    return Platform;
}());
exports.default = Platform;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PartialErrorInfo = void 0;
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var Utils = tslib_1.__importStar(__webpack_require__(1));
function toString(err) {
    var result = '[' + err.constructor.name;
    if (err.message)
        result += ': ' + err.message;
    if (err.statusCode)
        result += '; statusCode=' + err.statusCode;
    if (err.code)
        result += '; code=' + err.code;
    if (err.cause)
        result += '; cause=' + Utils.inspectError(err.cause);
    if (err.href && !(err.message && err.message.indexOf('help.ably.io') > -1))
        result += '; see ' + err.href + ' ';
    result += ']';
    return result;
}
var ErrorInfo = /** @class */ (function (_super) {
    tslib_1.__extends(ErrorInfo, _super);
    function ErrorInfo(message, code, statusCode, cause) {
        var _this = _super.call(this, message) || this;
        if (typeof Object.setPrototypeOf !== 'undefined') {
            Object.setPrototypeOf(_this, ErrorInfo.prototype);
        }
        _this.code = code;
        _this.statusCode = statusCode;
        _this.cause = cause;
        return _this;
    }
    ErrorInfo.prototype.toString = function () {
        return toString(this);
    };
    ErrorInfo.fromValues = function (values) {
        var _a = values, message = _a.message, code = _a.code, statusCode = _a.statusCode;
        if (typeof message !== 'string' || typeof code !== 'number' || typeof statusCode !== 'number') {
            throw new Error('ErrorInfo.fromValues(): invalid values: ' + platform_1.default.Config.inspect(values));
        }
        var result = Object.assign(new ErrorInfo(message, code, statusCode), values);
        if (result.code && !result.href) {
            result.href = 'https://help.ably.io/error/' + result.code;
        }
        return result;
    };
    return ErrorInfo;
}(Error));
exports.default = ErrorInfo;
var PartialErrorInfo = /** @class */ (function (_super) {
    tslib_1.__extends(PartialErrorInfo, _super);
    function PartialErrorInfo(message, code, statusCode, cause) {
        var _this = _super.call(this, message) || this;
        if (typeof Object.setPrototypeOf !== 'undefined') {
            Object.setPrototypeOf(_this, PartialErrorInfo.prototype);
        }
        _this.code = code;
        _this.statusCode = statusCode;
        _this.cause = cause;
        return _this;
    }
    PartialErrorInfo.prototype.toString = function () {
        return toString(this);
    };
    return PartialErrorInfo;
}(Error));
exports.PartialErrorInfo = PartialErrorInfo;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/*globals window, global, require*/

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {

	    var crypto;

	    // Native crypto from window (Browser)
	    if (typeof window !== 'undefined' && window.crypto) {
	        crypto = window.crypto;
	    }

	    // Native (experimental IE 11) crypto from window (Browser)
	    if (!crypto && typeof window !== 'undefined' && window.msCrypto) {
	        crypto = window.msCrypto;
	    }

	    // Native crypto from global (NodeJS)
	    if (!crypto && typeof global !== 'undefined' && global.crypto) {
	        crypto = global.crypto;
	    }

	    // Native crypto import via require (NodeJS)
	    if (!crypto && "function" === 'function') {
	        try {
	            crypto = __webpack_require__(44);
	        } catch (err) {}
	    }

	    /*
	     * Cryptographically secure pseudorandom number generator
	     *
	     * As Math.random() is cryptographically not safe to use
	     */
	    var cryptoSecureRandomInt = function () {
	        if (crypto) {
	            // Use getRandomValues method (Browser)
	            if (typeof crypto.getRandomValues === 'function') {
	                try {
	                    return crypto.getRandomValues(new Uint32Array(1))[0];
	                } catch (err) {}
	            }

	            // Use randomBytes method (NodeJS)
	            if (typeof crypto.randomBytes === 'function') {
	                try {
	                    return crypto.randomBytes(4).readInt32LE();
	                } catch (err) {}
	            }
	        }

	        throw new Error('Native crypto module could not be used to get secure random number.');
	    };

	    /*
	     * Local polyfill of Object.create

	     */
	    var create = Object.create || (function () {
	        function F() {}

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            for (var i = 0; i < nBytes; i += 4) {
	                words.push(cryptoSecureRandomInt());
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            var processedWords;

	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
/* Call the listener, catch any exceptions and log, but continue operation*/
function callListener(eventThis, listener, args) {
    try {
        listener.apply(eventThis, args);
    }
    catch (e) {
        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'EventEmitter.emit()', 'Unexpected listener exception: ' + e + '; stack = ' + (e && e.stack));
    }
}
/**
 * Remove listeners that match listener
 * @param targetListeners is an array of listener arrays or event objects with arrays of listeners
 * @param listener the listener callback to remove
 * @param eventFilter (optional) event name instructing the function to only remove listeners for the specified event
 */
function removeListener(targetListeners, listener, eventFilter) {
    var listeners;
    var index;
    var eventName;
    for (var targetListenersIndex = 0; targetListenersIndex < targetListeners.length; targetListenersIndex++) {
        listeners = targetListeners[targetListenersIndex];
        if (eventFilter) {
            listeners = listeners[eventFilter];
        }
        if (Utils.isArray(listeners)) {
            while ((index = Utils.arrIndexOf(listeners, listener)) !== -1) {
                listeners.splice(index, 1);
            }
            /* If events object has an event name key with no listeners then
                          remove the key to stop the list growing indefinitely */
            if (eventFilter && listeners.length === 0) {
                delete targetListeners[targetListenersIndex][eventFilter];
            }
        }
        else if (Utils.isObject(listeners)) {
            /* events */
            for (eventName in listeners) {
                if (Object.prototype.hasOwnProperty.call(listeners, eventName) && Utils.isArray(listeners[eventName])) {
                    removeListener([listeners], listener, eventName);
                }
            }
        }
    }
}
var EventEmitter = /** @class */ (function () {
    function EventEmitter() {
        this.any = [];
        this.events = Object.create(null);
        this.anyOnce = [];
        this.eventsOnce = Object.create(null);
    }
    EventEmitter.prototype.on = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length === 1) {
            var listener = args[0];
            if (typeof listener === 'function') {
                this.any.push(listener);
            }
            else {
                throw new Error('EventListener.on(): Invalid arguments: ' + platform_1.default.Config.inspect(args));
            }
        }
        if (args.length === 2) {
            var event_1 = args[0], listener_1 = args[1];
            if (typeof listener_1 !== 'function') {
                throw new Error('EventListener.on(): Invalid arguments: ' + platform_1.default.Config.inspect(args));
            }
            if (Utils.isEmptyArg(event_1)) {
                this.any.push(listener_1);
            }
            else if (Utils.isArray(event_1)) {
                event_1.forEach(function (eventName) {
                    _this.on(eventName, listener_1);
                });
            }
            else {
                if (typeof event_1 !== 'string') {
                    throw new Error('EventListener.on(): Invalid arguments: ' + platform_1.default.Config.inspect(args));
                }
                var listeners = this.events[event_1] || (this.events[event_1] = []);
                listeners.push(listener_1);
            }
        }
    };
    EventEmitter.prototype.off = function () {
        var _a;
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (args.length == 0 || (Utils.isEmptyArg(args[0]) && Utils.isEmptyArg(args[1]))) {
            this.any = [];
            this.events = Object.create(null);
            this.anyOnce = [];
            this.eventsOnce = Object.create(null);
            return;
        }
        var firstArg = args[0], secondArg = args[1];
        var listener = null;
        var event = null;
        if (args.length === 1 || !secondArg) {
            if (typeof firstArg === 'function') {
                /* we take this to be the listener and treat the event as "any" .. */
                listener = firstArg;
            }
            else {
                event = firstArg;
            }
            /* ... or we take event to be the actual event name and listener to be all */
        }
        else {
            if (typeof secondArg !== 'function') {
                throw new Error('EventEmitter.off(): invalid arguments:' + platform_1.default.Config.inspect(args));
            }
            _a = [firstArg, secondArg], event = _a[0], listener = _a[1];
        }
        if (listener && Utils.isEmptyArg(event)) {
            removeListener([this.any, this.events, this.anyOnce, this.eventsOnce], listener);
            return;
        }
        if (Utils.isArray(event)) {
            event.forEach(function (eventName) {
                _this.off(eventName, listener);
            });
            return;
        }
        /* "normal" case where event is an actual event */
        if (typeof event !== 'string') {
            throw new Error('EventEmitter.off(): invalid arguments:' + platform_1.default.Config.inspect(args));
        }
        if (listener) {
            removeListener([this.events, this.eventsOnce], listener, event);
        }
        else {
            delete this.events[event];
            delete this.eventsOnce[event];
        }
    };
    /**
     * Get the array of listeners for a given event; excludes once events
     * @param event (optional) the name of the event, or none for 'any'
     * @return array of events, or null if none
     */
    EventEmitter.prototype.listeners = function (event) {
        if (event) {
            var listeners = this.events[event] || [];
            if (this.eventsOnce[event])
                Array.prototype.push.apply(listeners, this.eventsOnce[event]);
            return listeners.length ? listeners : null;
        }
        return this.any.length ? this.any : null;
    };
    /**
     * Emit an event
     * @param event the event name
     * @param args the arguments to pass to the listener
     */
    EventEmitter.prototype.emit = function (event) {
        var args = []; /* , args... */
        for (var _i = 1 /* , args... */; _i < arguments.length /* , args... */; _i++ /* , args... */) {
            args[_i - 1] = arguments[_i]; /* , args... */
        }
        var eventThis = { event: event };
        var listeners = [];
        if (this.anyOnce.length) {
            Array.prototype.push.apply(listeners, this.anyOnce);
            this.anyOnce = [];
        }
        if (this.any.length) {
            Array.prototype.push.apply(listeners, this.any);
        }
        var eventsOnceListeners = this.eventsOnce[event];
        if (eventsOnceListeners) {
            Array.prototype.push.apply(listeners, eventsOnceListeners);
            delete this.eventsOnce[event];
        }
        var eventsListeners = this.events[event];
        if (eventsListeners) {
            Array.prototype.push.apply(listeners, eventsListeners);
        }
        Utils.arrForEach(listeners, function (listener) {
            callListener(eventThis, listener, args);
        });
    };
    EventEmitter.prototype.once = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var argCount = args.length;
        if ((argCount === 0 || (argCount === 1 && typeof args[0] !== 'function')) && platform_1.default.Config.Promise) {
            var event_2 = args[0];
            return new platform_1.default.Config.Promise(function (resolve) {
                _this.once(event_2, resolve);
            });
        }
        var firstArg = args[0], secondArg = args[1];
        if (args.length === 1 && typeof firstArg === 'function') {
            this.anyOnce.push(firstArg);
        }
        else if (Utils.isEmptyArg(firstArg)) {
            if (typeof secondArg !== 'function') {
                throw new Error('EventEmitter.once(): Invalid arguments:' + platform_1.default.Config.inspect(args));
            }
            this.anyOnce.push(secondArg);
        }
        else if (Utils.isArray(firstArg)) {
            var self_1 = this;
            var listenerWrapper_1 = function () {
                var innerArgs = Array.prototype.slice.call(arguments);
                Utils.arrForEach(firstArg, function (eventName) {
                    self_1.off(eventName, listenerWrapper_1);
                });
                if (typeof secondArg !== 'function') {
                    throw new Error('EventEmitter.once(): Invalid arguments:' + platform_1.default.Config.inspect(args));
                }
                secondArg.apply(this, innerArgs);
            };
            Utils.arrForEach(firstArg, function (eventName) {
                self_1.on(eventName, listenerWrapper_1);
            });
        }
        else {
            if (typeof firstArg !== 'string') {
                throw new Error('EventEmitter.once(): Invalid arguments:' + platform_1.default.Config.inspect(args));
            }
            var listeners = this.eventsOnce[firstArg] || (this.eventsOnce[firstArg] = []);
            if (secondArg) {
                if (typeof secondArg !== 'function') {
                    throw new Error('EventEmitter.once(): Invalid arguments:' + platform_1.default.Config.inspect(args));
                }
                listeners.push(secondArg);
            }
        }
    };
    /**
     * Private API
     *
     * Listen for a single occurrence of a state event and fire immediately if currentState matches targetState
     * @param targetState the name of the state event to listen to
     * @param currentState the name of the current state of this object
     * @param listener the listener to be called
     * @param listenerArgs
     */
    EventEmitter.prototype.whenState = function (targetState, currentState, listener) {
        var _this = this;
        var listenerArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            listenerArgs[_i - 3] = arguments[_i];
        }
        var eventThis = { event: targetState };
        if (typeof targetState !== 'string' || typeof currentState !== 'string') {
            throw 'whenState requires a valid event String argument';
        }
        if (typeof listener !== 'function' && platform_1.default.Config.Promise) {
            return new platform_1.default.Config.Promise(function (resolve) {
                EventEmitter.prototype.whenState.apply(_this, [targetState, currentState, resolve].concat(listenerArgs));
            });
        }
        if (targetState === currentState) {
            callListener(eventThis, listener, listenerArgs);
        }
        else {
            this.once(targetState, listener);
        }
    };
    return EventEmitter;
}());
exports.default = EventEmitter;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaults = exports.normaliseOptions = exports.objectifyOptions = exports.getAgentString = exports.getHosts = exports.getFallbackHosts = exports.environmentFallbackHosts = exports.getHttpScheme = exports.getPort = exports.getHost = void 0;
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var package_json_1 = __webpack_require__(43);
var agent = 'ably-js/' + package_json_1.version;
var Defaults = {
    ENVIRONMENT: '',
    REST_HOST: 'rest.ably.io',
    REALTIME_HOST: 'realtime.ably.io',
    FALLBACK_HOSTS: [
        'A.ably-realtime.com',
        'B.ably-realtime.com',
        'C.ably-realtime.com',
        'D.ably-realtime.com',
        'E.ably-realtime.com',
    ],
    PORT: 80,
    TLS_PORT: 443,
    TIMEOUTS: {
        /* Documented as options params: */
        disconnectedRetryTimeout: 15000,
        suspendedRetryTimeout: 30000,
        /* Undocumented, but part of the api and can be used by customers: */
        httpRequestTimeout: 15000,
        channelRetryTimeout: 15000,
        fallbackRetryTimeout: 600000,
        /* For internal / test use only: */
        connectionStateTtl: 120000,
        realtimeRequestTimeout: 10000,
        recvTimeout: 90000,
        preferenceConnectTimeout: 6000,
        parallelUpgradeDelay: 6000,
    },
    httpMaxRetryCount: 3,
    maxMessageSize: 65536,
    version: package_json_1.version,
    protocolVersion: 2,
    agent: agent,
    getHost: getHost,
    getPort: getPort,
    getHttpScheme: getHttpScheme,
    environmentFallbackHosts: environmentFallbackHosts,
    getFallbackHosts: getFallbackHosts,
    getHosts: getHosts,
    checkHost: checkHost,
    objectifyOptions: objectifyOptions,
    normaliseOptions: normaliseOptions,
};
function getHost(options, host, ws) {
    if (ws)
        host = (host == options.restHost && options.realtimeHost) || host || options.realtimeHost;
    else
        host = host || options.restHost;
    return host;
}
exports.getHost = getHost;
function getPort(options, tls) {
    return tls || options.tls ? options.tlsPort : options.port;
}
exports.getPort = getPort;
function getHttpScheme(options) {
    return options.tls ? 'https://' : 'http://';
}
exports.getHttpScheme = getHttpScheme;
// construct environment fallback hosts as per RSC15i
function environmentFallbackHosts(environment) {
    return [
        environment + '-a-fallback.ably-realtime.com',
        environment + '-b-fallback.ably-realtime.com',
        environment + '-c-fallback.ably-realtime.com',
        environment + '-d-fallback.ably-realtime.com',
        environment + '-e-fallback.ably-realtime.com',
    ];
}
exports.environmentFallbackHosts = environmentFallbackHosts;
function getFallbackHosts(options) {
    var fallbackHosts = options.fallbackHosts, httpMaxRetryCount = typeof options.httpMaxRetryCount !== 'undefined' ? options.httpMaxRetryCount : Defaults.httpMaxRetryCount;
    return fallbackHosts ? Utils.arrChooseN(fallbackHosts, httpMaxRetryCount) : [];
}
exports.getFallbackHosts = getFallbackHosts;
function getHosts(options) {
    return [options.restHost].concat(getFallbackHosts(options));
}
exports.getHosts = getHosts;
function checkHost(host) {
    if (typeof host !== 'string') {
        throw new errorinfo_1.default('host must be a string; was a ' + typeof host, 40000, 400);
    }
    if (!host.length) {
        throw new errorinfo_1.default('host must not be zero-length', 40000, 400);
    }
}
function getRealtimeHost(options, production, environment) {
    if (options.realtimeHost)
        return options.realtimeHost;
    /* prefer setting realtimeHost to restHost as a custom restHost typically indicates
     * a development environment is being used that can't be inferred by the library */
    if (options.restHost) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Defaults.normaliseOptions', 'restHost is set to "' +
            options.restHost +
            '" but realtimeHost is not set, so setting realtimeHost to "' +
            options.restHost +
            '" too. If this is not what you want, please set realtimeHost explicitly.');
        return options.restHost;
    }
    return production ? Defaults.REALTIME_HOST : environment + '-' + Defaults.REALTIME_HOST;
}
function getTimeouts(options) {
    /* Allow values passed in options to override default timeouts */
    var timeouts = {};
    for (var prop in Defaults.TIMEOUTS) {
        timeouts[prop] = options[prop] || Defaults.TIMEOUTS[prop];
    }
    return timeouts;
}
function getAgentString(options) {
    var agentStr = Defaults.agent;
    if (options.agents) {
        for (var agent in options.agents) {
            agentStr += ' ' + agent + '/' + options.agents[agent];
        }
    }
    return agentStr;
}
exports.getAgentString = getAgentString;
function objectifyOptions(options) {
    if (typeof options == 'string') {
        return options.indexOf(':') == -1 ? { token: options } : { key: options };
    }
    return options;
}
exports.objectifyOptions = objectifyOptions;
function normaliseOptions(options) {
    /* Deprecated options */
    if (options.host) {
        logger_1.default.deprecated('host', 'restHost');
        options.restHost = options.host;
    }
    if (options.wsHost) {
        logger_1.default.deprecated('wsHost', 'realtimeHost');
        options.realtimeHost = options.wsHost;
    }
    if (options.queueEvents) {
        logger_1.default.deprecated('queueEvents', 'queueMessages');
        options.queueMessages = options.queueEvents;
    }
    if (options.fallbackHostsUseDefault) {
        /* fallbackHostsUseDefault and fallbackHosts are mutually exclusive as per TO3k7 */
        if (options.fallbackHosts) {
            var msg = 'fallbackHosts and fallbackHostsUseDefault cannot both be set';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Defaults.normaliseOptions', msg);
            throw new errorinfo_1.default(msg, 40000, 400);
        }
        /* default fallbacks can't be used with custom ports */
        if (options.port || options.tlsPort) {
            var msg = 'fallbackHostsUseDefault cannot be set when port or tlsPort are set';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Defaults.normaliseOptions', msg);
            throw new errorinfo_1.default(msg, 40000, 400);
        }
        /* emit an appropriate deprecation warning */
        if (options.environment) {
            logger_1.default.deprecatedWithMsg('fallbackHostsUseDefault', 'There is no longer a need to set this when the environment option is also set since the library will now generate the correct fallback hosts using the environment option.');
        }
        else {
            logger_1.default.deprecated('fallbackHostsUseDefault', 'fallbackHosts: Ably.Defaults.FALLBACK_HOSTS');
        }
        /* use the default fallback hosts as requested */
        options.fallbackHosts = Defaults.FALLBACK_HOSTS;
    }
    /* options.recover as a boolean is deprecated, and therefore is not part of the public typing */
    if (options.recover === true) {
        logger_1.default.deprecated('{recover: true}', '{recover: function(lastConnectionDetails, cb) { cb(true); }}');
        options.recover = function (lastConnectionDetails, cb) {
            cb(true);
        };
    }
    if (typeof options.recover === 'function' && options.closeOnUnload === true) {
        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Defaults.normaliseOptions', 'closeOnUnload was true and a session recovery function was set - these are mutually exclusive, so unsetting the latter');
        options.recover = undefined;
    }
    if (!('closeOnUnload' in options)) {
        /* Have closeOnUnload default to true unless we have any indication that
         * the user may want to recover the connection */
        options.closeOnUnload = !options.recover;
    }
    if (options.transports && Utils.arrIn(options.transports, 'xhr')) {
        logger_1.default.deprecated('transports: ["xhr"]', 'transports: ["xhr_streaming"]');
        Utils.arrDeleteValue(options.transports, 'xhr');
        options.transports.push('xhr_streaming');
    }
    if (!('queueMessages' in options))
        options.queueMessages = true;
    /* infer hosts and fallbacks based on the configured environment */
    var environment = (options.environment && String(options.environment).toLowerCase()) || Defaults.ENVIRONMENT;
    var production = !environment || environment === 'production';
    if (!options.fallbackHosts && !options.restHost && !options.realtimeHost && !options.port && !options.tlsPort) {
        options.fallbackHosts = production ? Defaults.FALLBACK_HOSTS : environmentFallbackHosts(environment);
    }
    var restHost = options.restHost || (production ? Defaults.REST_HOST : environment + '-' + Defaults.REST_HOST);
    var realtimeHost = getRealtimeHost(options, production, environment);
    Utils.arrForEach((options.fallbackHosts || []).concat(restHost, realtimeHost), checkHost);
    options.port = options.port || Defaults.PORT;
    options.tlsPort = options.tlsPort || Defaults.TLS_PORT;
    if (!('tls' in options))
        options.tls = true;
    var timeouts = getTimeouts(options);
    if ('useBinaryProtocol' in options) {
        options.useBinaryProtocol = platform_1.default.Config.supportsBinary && options.useBinaryProtocol;
    }
    else {
        options.useBinaryProtocol = platform_1.default.Config.preferBinary;
    }
    if (options.clientId) {
        var headers = (options.headers = options.headers || {});
        headers['X-Ably-ClientId'] = platform_1.default.BufferUtils.base64Encode(platform_1.default.BufferUtils.utf8Encode(options.clientId));
    }
    if (!('idempotentRestPublishing' in options)) {
        options.idempotentRestPublishing = true;
    }
    if (options.promises && !platform_1.default.Config.Promise) {
        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Defaults.normaliseOptions', '{promises: true} was specified, but no Promise constructor found; disabling promises');
        options.promises = false;
    }
    var connectivityCheckParams = null;
    var connectivityCheckUrl = options.connectivityCheckUrl;
    if (options.connectivityCheckUrl) {
        var _a = options.connectivityCheckUrl.split('?'), uri = _a[0], qs = _a[1];
        connectivityCheckParams = qs ? Utils.parseQueryString(qs) : {};
        if (uri.indexOf('://') === -1) {
            uri = 'https://' + uri;
        }
        connectivityCheckUrl = uri;
    }
    return tslib_1.__assign(tslib_1.__assign({}, options), { useBinaryProtocol: 'useBinaryProtocol' in options
            ? platform_1.default.Config.supportsBinary && options.useBinaryProtocol
            : platform_1.default.Config.preferBinary, realtimeHost: realtimeHost, restHost: restHost, maxMessageSize: options.maxMessageSize || Defaults.maxMessageSize, timeouts: timeouts, connectivityCheckParams: connectivityCheckParams, connectivityCheckUrl: connectivityCheckUrl });
}
exports.normaliseOptions = normaliseOptions;
exports.default = Defaults;
function getDefaults(platformDefaults) {
    return Object.assign(Defaults, platformDefaults);
}
exports.getDefaults = getDefaults;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var Utils = tslib_1.__importStar(__webpack_require__(1));
function normaliseContext(context) {
    if (!context || !context.channelOptions) {
        return {
            channelOptions: context,
            plugins: {},
            baseEncodedPreviousPayload: undefined,
        };
    }
    return context;
}
function normalizeCipherOptions(options) {
    if (options && options.cipher) {
        if (!platform_1.default.Crypto)
            throw new Error('Encryption not enabled; use ably.encryption.js instead');
        var cipher = platform_1.default.Crypto.getCipher(options.cipher);
        return {
            cipher: cipher.cipherParams,
            channelCipher: cipher.cipher,
        };
    }
    return options !== null && options !== void 0 ? options : {};
}
function getMessageSize(msg) {
    var size = 0;
    if (msg.name) {
        size += msg.name.length;
    }
    if (msg.clientId) {
        size += msg.clientId.length;
    }
    if (msg.extras) {
        size += JSON.stringify(msg.extras).length;
    }
    if (msg.data) {
        size += Utils.dataSizeBytes(msg.data);
    }
    return size;
}
var Message = /** @class */ (function () {
    function Message() {
    }
    /**
     * Overload toJSON() to intercept JSON.stringify()
     * @return {*}
     */
    Message.prototype.toJSON = function () {
        /* encode data to base64 if present and we're returning real JSON;
         * although msgpack calls toJSON(), we know it is a stringify()
         * call if it has a non-empty arguments list */
        var encoding = this.encoding;
        var data = this.data;
        if (data && platform_1.default.BufferUtils.isBuffer(data)) {
            if (arguments.length > 0) {
                /* stringify call */
                encoding = encoding ? encoding + '/base64' : 'base64';
                data = platform_1.default.BufferUtils.base64Encode(data);
            }
            else {
                /* Called by msgpack. toBuffer returns a datatype understandable by
                 * that platform's msgpack implementation (Buffer in node, Uint8Array
                 * in browsers) */
                data = platform_1.default.BufferUtils.toBuffer(data);
            }
        }
        return {
            name: this.name,
            id: this.id,
            clientId: this.clientId,
            connectionId: this.connectionId,
            connectionKey: this.connectionKey,
            extras: this.extras,
            encoding: encoding,
            data: data,
        };
    };
    Message.prototype.toString = function () {
        var result = '[Message';
        if (this.name)
            result += '; name=' + this.name;
        if (this.id)
            result += '; id=' + this.id;
        if (this.timestamp)
            result += '; timestamp=' + this.timestamp;
        if (this.clientId)
            result += '; clientId=' + this.clientId;
        if (this.connectionId)
            result += '; connectionId=' + this.connectionId;
        if (this.encoding)
            result += '; encoding=' + this.encoding;
        if (this.extras)
            result += '; extras =' + JSON.stringify(this.extras);
        if (this.data) {
            if (typeof this.data == 'string')
                result += '; data=' + this.data;
            else if (platform_1.default.BufferUtils.isBuffer(this.data))
                result += '; data (buffer)=' + platform_1.default.BufferUtils.base64Encode(this.data);
            else
                result += '; data (json)=' + JSON.stringify(this.data);
        }
        if (this.extras)
            result += '; extras=' + JSON.stringify(this.extras);
        result += ']';
        return result;
    };
    Message.encrypt = function (msg, options, callback) {
        var data = msg.data, encoding = msg.encoding, cipher = options.channelCipher;
        encoding = encoding ? encoding + '/' : '';
        if (!platform_1.default.BufferUtils.isBuffer(data)) {
            data = platform_1.default.BufferUtils.utf8Encode(String(data));
            encoding = encoding + 'utf-8/';
        }
        cipher.encrypt(data, function (err, data) {
            if (err) {
                callback(err);
                return;
            }
            msg.data = data;
            msg.encoding = encoding + 'cipher+' + cipher.algorithm;
            callback(null, msg);
        });
    };
    Message.encode = function (msg, options, callback) {
        var data = msg.data;
        var nativeDataType = typeof data == 'string' || platform_1.default.BufferUtils.isBuffer(data) || data === null || data === undefined;
        if (!nativeDataType) {
            if (Utils.isObject(data) || Utils.isArray(data)) {
                msg.data = JSON.stringify(data);
                msg.encoding = msg.encoding ? msg.encoding + '/json' : 'json';
            }
            else {
                throw new errorinfo_1.default('Data type is unsupported', 40013, 400);
            }
        }
        if (options != null && options.cipher) {
            Message.encrypt(msg, options, callback);
        }
        else {
            callback(null, msg);
        }
    };
    Message.encodeArray = function (messages, options, callback) {
        var processed = 0;
        for (var i = 0; i < messages.length; i++) {
            Message.encode(messages[i], options, function (err) {
                if (err) {
                    callback(err);
                    return;
                }
                processed++;
                if (processed == messages.length) {
                    callback(null, messages);
                }
            });
        }
    };
    Message.decode = function (message, inputContext) {
        var context = normaliseContext(inputContext);
        var lastPayload = message.data;
        var encoding = message.encoding;
        if (encoding) {
            var xforms = encoding.split('/');
            var lastProcessedEncodingIndex = void 0, encodingsToProcess = xforms.length, data = message.data;
            var xform = '';
            try {
                while ((lastProcessedEncodingIndex = encodingsToProcess) > 0) {
                    // eslint-disable-next-line security/detect-unsafe-regex
                    var match = xforms[--encodingsToProcess].match(/([-\w]+)(\+([\w-]+))?/);
                    if (!match)
                        break;
                    xform = match[1];
                    switch (xform) {
                        case 'base64':
                            data = platform_1.default.BufferUtils.base64Decode(String(data));
                            if (lastProcessedEncodingIndex == xforms.length) {
                                lastPayload = data;
                            }
                            continue;
                        case 'utf-8':
                            data = platform_1.default.BufferUtils.utf8Decode(data);
                            continue;
                        case 'json':
                            data = JSON.parse(data);
                            continue;
                        case 'cipher':
                            if (context.channelOptions != null &&
                                context.channelOptions.cipher &&
                                context.channelOptions.channelCipher) {
                                var xformAlgorithm = match[3], cipher = context.channelOptions.channelCipher;
                                /* don't attempt to decrypt unless the cipher params are compatible */
                                if (xformAlgorithm != cipher.algorithm) {
                                    throw new Error('Unable to decrypt message with given cipher; incompatible cipher params');
                                }
                                data = cipher.decrypt(data);
                                continue;
                            }
                            else {
                                throw new Error('Unable to decrypt message; not an encrypted channel');
                            }
                        case 'vcdiff':
                            if (!context.plugins || !context.plugins.vcdiff) {
                                throw new errorinfo_1.default('Missing Vcdiff decoder (https://github.com/ably-forks/vcdiff-decoder)', 40019, 400);
                            }
                            if (typeof Uint8Array === 'undefined') {
                                throw new errorinfo_1.default('Delta decoding not supported on this browser (need ArrayBuffer & Uint8Array)', 40020, 400);
                            }
                            try {
                                var deltaBase = context.baseEncodedPreviousPayload;
                                if (typeof deltaBase === 'string') {
                                    deltaBase = platform_1.default.BufferUtils.utf8Encode(deltaBase);
                                }
                                /* vcdiff expects Uint8Arrays, can't copy with ArrayBuffers. (also, if we
                                 * don't have a TextDecoder, deltaBase might be a WordArray here, so need
                                 * to process it into a buffer anyway) */
                                deltaBase = platform_1.default.BufferUtils.toBuffer(deltaBase);
                                data = platform_1.default.BufferUtils.toBuffer(data);
                                data = platform_1.default.BufferUtils.typedArrayToBuffer(context.plugins.vcdiff.decode(data, deltaBase));
                                lastPayload = data;
                            }
                            catch (e) {
                                throw new errorinfo_1.default('Vcdiff delta decode failed with ' + e, 40018, 400);
                            }
                            continue;
                        default:
                            throw new Error('Unknown encoding');
                    }
                }
            }
            catch (e) {
                var err = e;
                throw new errorinfo_1.default('Error processing the ' + xform + ' encoding, decoder returned ‘' + err.message + '’', err.code || 40013, 400);
            }
            finally {
                message.encoding =
                    lastProcessedEncodingIndex <= 0 ? null : xforms.slice(0, lastProcessedEncodingIndex).join('/');
                message.data = data;
            }
        }
        context.baseEncodedPreviousPayload = lastPayload;
    };
    Message.fromResponseBody = function (body, options, format) {
        if (format) {
            body = Utils.decodeBody(body, format);
        }
        for (var i = 0; i < body.length; i++) {
            var msg = (body[i] = Message.fromValues(body[i]));
            try {
                Message.decode(msg, options);
            }
            catch (e) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Message.fromResponseBody()', e.toString());
            }
        }
        return body;
    };
    Message.fromValues = function (values) {
        return Object.assign(new Message(), values);
    };
    Message.fromValuesArray = function (values) {
        var count = values.length, result = new Array(count);
        for (var i = 0; i < count; i++)
            result[i] = Message.fromValues(values[i]);
        return result;
    };
    Message.fromEncoded = function (encoded, inputOptions) {
        var msg = Message.fromValues(encoded);
        var options = normalizeCipherOptions(inputOptions !== null && inputOptions !== void 0 ? inputOptions : null);
        /* if decoding fails at any point, catch and return the message decoded to
         * the fullest extent possible */
        try {
            Message.decode(msg, options);
        }
        catch (e) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Message.fromEncoded()', e.toString());
        }
        return msg;
    };
    Message.fromEncodedArray = function (encodedArray, options) {
        return encodedArray.map(function (encoded) {
            return Message.fromEncoded(encoded, options);
        });
    };
    /* This should be called on encode()d (and encrypt()d) Messages (as it
     * assumes the data is a string or buffer) */
    Message.getMessagesSize = function (messages) {
        var msg, total = 0;
        for (var i = 0; i < messages.length; i++) {
            msg = messages[i];
            total += msg.size || (msg.size = getMessageSize(msg));
        }
        return total;
    };
    Message.serialize = Utils.encodeBody;
    return Message;
}());
exports.default = Message;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(15));
var actions = {
    HEARTBEAT: 0,
    ACK: 1,
    NACK: 2,
    CONNECT: 3,
    CONNECTED: 4,
    DISCONNECT: 5,
    DISCONNECTED: 6,
    CLOSE: 7,
    CLOSED: 8,
    ERROR: 9,
    ATTACH: 10,
    ATTACHED: 11,
    DETACH: 12,
    DETACHED: 13,
    PRESENCE: 14,
    MESSAGE: 15,
    SYNC: 16,
    AUTH: 17,
    ACTIVATE: 18,
};
var ActionName = [];
Object.keys(actions).forEach(function (name) {
    ActionName[actions[name]] = name;
});
var flags = {
    /* Channel attach state flags */
    HAS_PRESENCE: 1 << 0,
    HAS_BACKLOG: 1 << 1,
    RESUMED: 1 << 2,
    TRANSIENT: 1 << 4,
    ATTACH_RESUME: 1 << 5,
    /* Channel mode flags */
    PRESENCE: 1 << 16,
    PUBLISH: 1 << 17,
    SUBSCRIBE: 1 << 18,
    PRESENCE_SUBSCRIBE: 1 << 19,
};
var flagNames = Object.keys(flags);
flags.MODE_ALL = flags.PRESENCE | flags.PUBLISH | flags.SUBSCRIBE | flags.PRESENCE_SUBSCRIBE;
function toStringArray(array) {
    var result = [];
    if (array) {
        for (var i = 0; i < array.length; i++) {
            result.push(array[i].toString());
        }
    }
    return '[ ' + result.join(', ') + ' ]';
}
var simpleAttributes = 'id channel channelSerial connectionId count msgSerial timestamp'.split(' ');
var ProtocolMessage = /** @class */ (function () {
    function ProtocolMessage() {
        var _this = this;
        this.hasFlag = function (flag) {
            return (_this.flags & flags[flag]) > 0;
        };
    }
    ProtocolMessage.prototype.setFlag = function (flag) {
        return (this.flags = this.flags | flags[flag]);
    };
    ProtocolMessage.prototype.getMode = function () {
        return this.flags && this.flags & flags.MODE_ALL;
    };
    ProtocolMessage.prototype.encodeModesToFlags = function (modes) {
        var _this = this;
        modes.forEach(function (mode) { return _this.setFlag(mode); });
    };
    ProtocolMessage.prototype.decodeModesFromFlags = function () {
        var _this = this;
        var modes = [];
        ProtocolMessage.channelModes.forEach(function (mode) {
            if (_this.hasFlag(mode)) {
                modes.push(mode);
            }
        });
        return modes.length > 0 ? modes : undefined;
    };
    ProtocolMessage.fromValues = function (values) {
        return Object.assign(new ProtocolMessage(), values);
    };
    ProtocolMessage.Action = actions;
    ProtocolMessage.channelModes = ['PRESENCE', 'PUBLISH', 'SUBSCRIBE', 'PRESENCE_SUBSCRIBE'];
    ProtocolMessage.ActionName = ActionName;
    ProtocolMessage.serialize = Utils.encodeBody;
    ProtocolMessage.deserialize = function (serialized, format) {
        var deserialized = Utils.decodeBody(serialized, format);
        return ProtocolMessage.fromDeserialized(deserialized);
    };
    ProtocolMessage.fromDeserialized = function (deserialized) {
        var error = deserialized.error;
        if (error)
            deserialized.error = errorinfo_1.default.fromValues(error);
        var messages = deserialized.messages;
        if (messages)
            for (var i = 0; i < messages.length; i++)
                messages[i] = message_1.default.fromValues(messages[i]);
        var presence = deserialized.presence;
        if (presence)
            for (var i = 0; i < presence.length; i++)
                presence[i] = presencemessage_1.default.fromValues(presence[i], true);
        return Object.assign(new ProtocolMessage(), deserialized);
    };
    ProtocolMessage.stringify = function (msg) {
        var result = '[ProtocolMessage';
        if (msg.action !== undefined)
            result += '; action=' + ProtocolMessage.ActionName[msg.action] || false;
        var attribute;
        for (var attribIndex = 0; attribIndex < simpleAttributes.length; attribIndex++) {
            attribute = simpleAttributes[attribIndex];
            if (msg[attribute] !== undefined)
                result += '; ' + attribute + '=' + msg[attribute];
        }
        if (msg.messages)
            result += '; messages=' + toStringArray(message_1.default.fromValuesArray(msg.messages));
        if (msg.presence)
            result += '; presence=' + toStringArray(presencemessage_1.default.fromValuesArray(msg.presence));
        if (msg.error)
            result += '; error=' + errorinfo_1.default.fromValues(msg.error).toString();
        if (msg.auth && msg.auth.accessToken)
            result += '; token=' + msg.auth.accessToken;
        if (msg.flags)
            result += '; flags=' + flagNames.filter(msg.hasFlag).join(',');
        if (msg.params) {
            var stringifiedParams_1 = '';
            Utils.forInOwnNonNullProperties(msg.params, function (prop) {
                if (stringifiedParams_1.length > 0) {
                    stringifiedParams_1 += '; ';
                }
                stringifiedParams_1 += prop + '=' + msg.params[prop];
            });
            if (stringifiedParams_1.length > 0) {
                result += '; params=[' + stringifiedParams_1 + ']';
            }
        }
        result += ']';
        return result;
    };
    return ProtocolMessage;
}());
exports.default = ProtocolMessage;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        }
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              var bitsCombined = bits1 | bits2;
	              words[nBytes >>> 2] |= bitsCombined << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var transport_1 = tslib_1.__importDefault(__webpack_require__(26));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(20));
var auth_1 = tslib_1.__importDefault(__webpack_require__(17));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var XHRStates_1 = tslib_1.__importDefault(__webpack_require__(21));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
/* TODO: can remove once realtime sends protocol message responses for comet errors */
function shouldBeErrorAction(err) {
    var UNRESOLVABLE_ERROR_CODES = [80015, 80017, 80030];
    if (err.code) {
        if (auth_1.default.isTokenErr(err))
            return false;
        if (Utils.arrIn(UNRESOLVABLE_ERROR_CODES, err.code))
            return true;
        return err.code >= 40000 && err.code < 50000;
    }
    else {
        /* Likely a network or transport error of some kind. Certainly not fatal to the connection */
        return false;
    }
}
function protocolMessageFromRawError(err) {
    /* err will be either a legacy (non-protocolmessage) comet error response
     * (which will have an err.code), or a xhr/network error (which won't). */
    if (shouldBeErrorAction(err)) {
        return [protocolmessage_1.default.fromValues({ action: protocolmessage_1.default.Action.ERROR, error: err })];
    }
    else {
        return [protocolmessage_1.default.fromValues({ action: protocolmessage_1.default.Action.DISCONNECTED, error: err })];
    }
}
/*
 * A base comet transport class
 */
var CometTransport = /** @class */ (function (_super) {
    tslib_1.__extends(CometTransport, _super);
    function CometTransport(connectionManager, auth, params) {
        var _this = _super.call(this, connectionManager, auth, params, /* binary not supported for comet so force JSON protocol */ true) || this;
        /* For comet, we could do the auth update by aborting the current recv and
         * starting a new one with the new token, that'd be sufficient for realtime.
         * Problem is JSONP - you can't cancel truly abort a recv once started. So
         * we need to send an AUTH for jsonp. In which case it's simpler to keep all
         * comet transports the same and do it for all of them. So we send the AUTH
         * instead, and don't need to abort the recv */
        _this.onAuthUpdated = function (tokenDetails) {
            _this.authParams = { access_token: tokenDetails.token };
        };
        _this.stream = 'stream' in params ? params.stream : true;
        _this.sendRequest = null;
        _this.recvRequest = null;
        _this.pendingCallback = null;
        _this.pendingItems = null;
        return _this;
    }
    CometTransport.prototype.connect = function () {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.connect()', 'starting');
        transport_1.default.prototype.connect.call(this);
        var params = this.params;
        var options = params.options;
        var host = defaults_1.default.getHost(options, params.host);
        var port = defaults_1.default.getPort(options);
        var cometScheme = options.tls ? 'https://' : 'http://';
        this.baseUri = cometScheme + host + ':' + port + '/comet/';
        var connectUri = this.baseUri + 'connect';
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.connect()', 'uri: ' + connectUri);
        this.auth.getAuthParams(function (err, authParams) {
            if (err) {
                _this.disconnect(err);
                return;
            }
            if (_this.isDisposed) {
                return;
            }
            _this.authParams = authParams;
            var connectParams = _this.params.getConnectParams(authParams);
            if ('stream' in connectParams)
                _this.stream = connectParams.stream;
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.connect()', 'connectParams:' + Utils.toQueryString(connectParams));
            /* this will be the 'recvRequest' so this connection can stream messages */
            var preconnected = false;
            var connectRequest = (_this.recvRequest = _this.createRequest(connectUri, null, connectParams, null, _this.stream ? XHRStates_1.default.REQ_RECV_STREAM : XHRStates_1.default.REQ_RECV));
            connectRequest.on('data', function (data) {
                if (!_this.recvRequest) {
                    /* the transport was disposed before we connected */
                    return;
                }
                if (!preconnected) {
                    preconnected = true;
                    _this.emit('preconnect');
                }
                _this.onData(data);
            });
            connectRequest.on('complete', function (err) {
                if (!_this.recvRequest) {
                    /* the transport was disposed before we connected */
                    err = err || new errorinfo_1.default('Request cancelled', 80003, 400);
                }
                _this.recvRequest = null;
                /* Connect request may complete without a emitting 'data' event since that is not
                 * emitted for e.g. a non-streamed error response. Still implies preconnect. */
                if (!preconnected && !err) {
                    preconnected = true;
                    _this.emit('preconnect');
                }
                _this.onActivity();
                if (err) {
                    if (err.code) {
                        /* A protocol error received from realtime. TODO: once realtime
                         * consistendly sends errors wrapped in protocol messages, should be
                         * able to remove this */
                        _this.onData(protocolMessageFromRawError(err));
                    }
                    else {
                        /* A network/xhr error. Don't bother wrapping in a protocol message,
                         * just disconnect the transport */
                        _this.disconnect(err);
                    }
                    return;
                }
                platform_1.default.Config.nextTick(function () {
                    _this.recv();
                });
            });
            connectRequest.exec();
        });
    };
    CometTransport.prototype.requestClose = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.requestClose()');
        this._requestCloseOrDisconnect(true);
    };
    CometTransport.prototype.requestDisconnect = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.requestDisconnect()');
        this._requestCloseOrDisconnect(false);
    };
    CometTransport.prototype._requestCloseOrDisconnect = function (closing) {
        var _this = this;
        var closeOrDisconnectUri = closing ? this.closeUri : this.disconnectUri;
        if (closeOrDisconnectUri) {
            var request = this.createRequest(closeOrDisconnectUri, null, this.authParams, null, XHRStates_1.default.REQ_SEND);
            request.on('complete', function (err) {
                if (err) {
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'CometTransport.request' + (closing ? 'Close()' : 'Disconnect()'), 'request returned err = ' + Utils.inspectError(err));
                    _this.finish('disconnected', err);
                }
            });
            request.exec();
        }
    };
    CometTransport.prototype.dispose = function () {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.dispose()', '');
        if (!this.isDisposed) {
            this.isDisposed = true;
            if (this.recvRequest) {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'CometTransport.dispose()', 'aborting recv request');
                this.recvRequest.abort();
                this.recvRequest = null;
            }
            /* In almost all cases the transport will be finished before it's
             * disposed. Finish here just to make sure. */
            this.finish('disconnected', connectionerrors_1.default.disconnected());
            platform_1.default.Config.nextTick(function () {
                _this.emit('disposed');
            });
        }
    };
    CometTransport.prototype.onConnect = function (message) {
        var _a;
        /* if this transport has been disposed whilst awaiting connection, do nothing */
        if (this.isDisposed) {
            return;
        }
        /* the connectionKey in a comet connected response is really
         * <instId>-<connectionKey> */
        var connectionStr = (_a = message.connectionDetails) === null || _a === void 0 ? void 0 : _a.connectionKey;
        transport_1.default.prototype.onConnect.call(this, message);
        var baseConnectionUri = this.baseUri + connectionStr;
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'CometTransport.onConnect()', 'baseUri = ' + baseConnectionUri);
        this.sendUri = baseConnectionUri + '/send';
        this.recvUri = baseConnectionUri + '/recv';
        this.closeUri = baseConnectionUri + '/close';
        this.disconnectUri = baseConnectionUri + '/disconnect';
    };
    CometTransport.prototype.send = function (message) {
        if (this.sendRequest) {
            /* there is a pending send, so queue this message */
            this.pendingItems = this.pendingItems || [];
            this.pendingItems.push(message);
            return;
        }
        /* send this, plus any pending, now */
        var pendingItems = this.pendingItems || [];
        pendingItems.push(message);
        this.pendingItems = null;
        this.sendItems(pendingItems);
    };
    CometTransport.prototype.sendAnyPending = function () {
        var pendingItems = this.pendingItems;
        if (!pendingItems) {
            return;
        }
        this.pendingItems = null;
        this.sendItems(pendingItems);
    };
    CometTransport.prototype.sendItems = function (items) {
        var _this = this;
        var sendRequest = (this.sendRequest = this.createRequest(this.sendUri, null, this.authParams, this.encodeRequest(items), XHRStates_1.default.REQ_SEND));
        sendRequest.on('complete', function (err, data) {
            if (err)
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'CometTransport.sendItems()', 'on complete: err = ' + Utils.inspectError(err));
            _this.sendRequest = null;
            /* the result of the request, even if a nack, is usually a protocol response
             * contained in the data. An err is anomolous, and indicates some issue with the
             * network,transport, or connection */
            if (err) {
                if (err.code) {
                    /* A protocol error received from realtime. TODO: once realtime
                     * consistendly sends errors wrapped in protocol messages, should be
                     * able to remove this */
                    _this.onData(protocolMessageFromRawError(err));
                }
                else {
                    /* A network/xhr error. Don't bother wrapping in a protocol message,
                     * just disconnect the transport */
                    _this.disconnect(err);
                }
                return;
            }
            if (data) {
                _this.onData(data);
            }
            if (_this.pendingItems) {
                platform_1.default.Config.nextTick(function () {
                    /* If there's a new send request by now, any pending items will have
                     * been picked up by that; any new ones added since then will be
                     * picked up after that one completes */
                    if (!_this.sendRequest) {
                        _this.sendAnyPending();
                    }
                });
            }
        });
        sendRequest.exec();
    };
    CometTransport.prototype.recv = function () {
        var _this = this;
        /* do nothing if there is an active request, which might be streaming */
        if (this.recvRequest)
            return;
        /* If we're no longer connected, do nothing */
        if (!this.isConnected)
            return;
        var recvRequest = (this.recvRequest = this.createRequest(this.recvUri, null, this.authParams, null, this.stream ? XHRStates_1.default.REQ_RECV_STREAM : XHRStates_1.default.REQ_RECV_POLL));
        recvRequest.on('data', function (data) {
            _this.onData(data);
        });
        recvRequest.on('complete', function (err) {
            _this.recvRequest = null;
            /* A request completing must be considered activity, as realtime sends
             * heartbeats every 15s since a request began, not every 15s absolutely */
            _this.onActivity();
            if (err) {
                if (err.code) {
                    /* A protocol error received from realtime. TODO: once realtime
                     * consistently sends errors wrapped in protocol messages, should be
                     * able to remove this */
                    _this.onData(protocolMessageFromRawError(err));
                }
                else {
                    /* A network/xhr error. Don't bother wrapping in a protocol message,
                     * just disconnect the transport */
                    _this.disconnect(err);
                }
                return;
            }
            platform_1.default.Config.nextTick(function () {
                _this.recv();
            });
        });
        recvRequest.exec();
    };
    CometTransport.prototype.onData = function (responseData) {
        try {
            var items = this.decodeResponse(responseData);
            if (items && items.length)
                for (var i = 0; i < items.length; i++)
                    this.onProtocolMessage(protocolmessage_1.default.fromDeserialized(items[i]));
        }
        catch (e) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'CometTransport.onData()', 'Unexpected exception handing channel event: ' + e.stack);
        }
    };
    CometTransport.prototype.encodeRequest = function (requestItems) {
        return JSON.stringify(requestItems);
    };
    CometTransport.prototype.decodeResponse = function (responseData) {
        if (typeof responseData == 'string')
            return JSON.parse(responseData);
        return responseData;
    };
    return CometTransport;
}(transport_1.default));
exports.default = CometTransport;


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var auth_1 = tslib_1.__importDefault(__webpack_require__(17));
var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(18));
var errorinfo_1 = __webpack_require__(4);
function withAuthDetails(rest, headers, params, errCallback, opCallback) {
    if (rest.http.supportsAuthHeaders) {
        rest.auth.getAuthHeaders(function (err, authHeaders) {
            if (err)
                errCallback(err);
            else
                opCallback(Utils.mixin(authHeaders, headers), params);
        });
    }
    else {
        rest.auth.getAuthParams(function (err, authParams) {
            if (err)
                errCallback(err);
            else
                opCallback(headers, Utils.mixin(authParams, params));
        });
    }
}
function unenvelope(callback, format) {
    return function (err, body, outerHeaders, unpacked, outerStatusCode) {
        if (err && !body) {
            callback(err);
            return;
        }
        if (!unpacked) {
            try {
                body = Utils.decodeBody(body, format);
            }
            catch (e) {
                if (Utils.isErrorInfoOrPartialErrorInfo(e)) {
                    callback(e);
                }
                else {
                    callback(new errorinfo_1.PartialErrorInfo(Utils.inspectError(e), null));
                }
                return;
            }
        }
        if (!body) {
            callback(new errorinfo_1.PartialErrorInfo('unenvelope(): Response body is missing', null));
            return;
        }
        var _a = body, wrappedStatusCode = _a.statusCode, response = _a.response, wrappedHeaders = _a.headers;
        if (wrappedStatusCode === undefined) {
            /* Envelope already unwrapped by the transport */
            callback(err, body, outerHeaders, true, outerStatusCode);
            return;
        }
        if (wrappedStatusCode < 200 || wrappedStatusCode >= 300) {
            /* handle wrapped errors */
            var wrappedErr = (response && response.error) || err;
            if (!wrappedErr) {
                wrappedErr = new Error('Error in unenveloping ' + body);
                wrappedErr.statusCode = wrappedStatusCode;
            }
            callback(wrappedErr, response, wrappedHeaders, true, wrappedStatusCode);
            return;
        }
        callback(err, response, wrappedHeaders, true, wrappedStatusCode);
    };
}
function paramString(params) {
    var paramPairs = [];
    if (params) {
        for (var needle in params) {
            paramPairs.push(needle + '=' + params[needle]);
        }
    }
    return paramPairs.join('&');
}
function urlFromPathAndParams(path, params) {
    return path + (params ? '?' : '') + paramString(params);
}
function logResponseHandler(callback, method, path, params) {
    return function (err, body, headers, unpacked, statusCode) {
        if (err) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Resource.' + method + '()', 'Received Error; ' + urlFromPathAndParams(path, params) + '; Error: ' + Utils.inspectError(err));
        }
        else {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Resource.' + method + '()', 'Received; ' +
                urlFromPathAndParams(path, params) +
                '; Headers: ' +
                paramString(headers) +
                '; StatusCode: ' +
                statusCode +
                '; Body: ' +
                (platform_1.default.BufferUtils.isBuffer(body) ? body.toString() : body));
        }
        if (callback) {
            callback(err, body, headers, unpacked, statusCode);
        }
    };
}
var Resource = /** @class */ (function () {
    function Resource() {
    }
    Resource.get = function (rest, path, headers, params, envelope, callback) {
        Resource.do(HttpMethods_1.default.Get, rest, path, null, headers, params, envelope, callback);
    };
    Resource.delete = function (rest, path, headers, params, envelope, callback) {
        Resource.do(HttpMethods_1.default.Delete, rest, path, null, headers, params, envelope, callback);
    };
    Resource.post = function (rest, path, body, headers, params, envelope, callback) {
        Resource.do(HttpMethods_1.default.Post, rest, path, body, headers, params, envelope, callback);
    };
    Resource.patch = function (rest, path, body, headers, params, envelope, callback) {
        Resource.do(HttpMethods_1.default.Patch, rest, path, body, headers, params, envelope, callback);
    };
    Resource.put = function (rest, path, body, headers, params, envelope, callback) {
        Resource.do(HttpMethods_1.default.Put, rest, path, body, headers, params, envelope, callback);
    };
    Resource.do = function (method, rest, path, body, headers, params, envelope, callback) {
        if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
            callback = logResponseHandler(callback, method, path, params);
        }
        if (envelope) {
            callback = callback && unenvelope(callback, envelope);
            (params = params || {})['envelope'] = envelope;
        }
        function doRequest(headers, params) {
            var _a;
            if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Resource.' + method + '()', 'Sending; ' + urlFromPathAndParams(path, params));
            }
            if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
                var decodedBody = body;
                if (((_a = headers['content-type']) === null || _a === void 0 ? void 0 : _a.indexOf('msgpack')) > 0) {
                    try {
                        decodedBody = platform_1.default.Config.msgpack.decode(body);
                    }
                    catch (decodeErr) {
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Resource.' + method + '()', 'Sending MsgPack Decoding Error: ' + Utils.inspectError(decodeErr));
                    }
                }
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Resource.' + method + '()', 'Sending; ' + urlFromPathAndParams(path, params) + '; Body: ' + decodedBody);
            }
            rest.http.do(method, rest, path, headers, body, params, function (err, res, headers, unpacked, statusCode) {
                if (err && auth_1.default.isTokenErr(err)) {
                    /* token has expired, so get a new one */
                    rest.auth.authorize(null, null, function (err) {
                        if (err) {
                            callback(err);
                            return;
                        }
                        /* retry ... */
                        withAuthDetails(rest, headers, params, callback, doRequest);
                    });
                    return;
                }
                callback(err, res, headers, unpacked, statusCode);
            });
        }
        withAuthDetails(rest, headers, params, callback, doRequest);
    };
    return Resource;
}());
exports.default = Resource;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var Utils = tslib_1.__importStar(__webpack_require__(1));
function toActionValue(actionString) {
    return PresenceMessage.Actions.indexOf(actionString);
}
var PresenceMessage = /** @class */ (function () {
    function PresenceMessage() {
    }
    /* Returns whether this presenceMessage is synthesized, i.e. was not actually
     * sent by the connection (usually means a leave event sent 15s after a
     * disconnection). This is useful because synthesized messages cannot be
     * compared for newness by id lexicographically - RTP2b1
     */
    PresenceMessage.prototype.isSynthesized = function () {
        if (!this.id || !this.connectionId) {
            return true;
        }
        return this.id.substring(this.connectionId.length, 0) !== this.connectionId;
    };
    /* RTP2b2 */
    PresenceMessage.prototype.parseId = function () {
        if (!this.id)
            throw new Error('parseId(): Presence message does not contain an id');
        var parts = this.id.split(':');
        return {
            connectionId: parts[0],
            msgSerial: parseInt(parts[1], 10),
            index: parseInt(parts[2], 10),
        };
    };
    /**
     * Overload toJSON() to intercept JSON.stringify()
     * @return {*}
     */
    PresenceMessage.prototype.toJSON = function () {
        /* encode data to base64 if present and we're returning real JSON;
         * although msgpack calls toJSON(), we know it is a stringify()
         * call if it has a non-empty arguments list */
        var data = this.data;
        var encoding = this.encoding;
        if (data && platform_1.default.BufferUtils.isBuffer(data)) {
            if (arguments.length > 0) {
                /* stringify call */
                encoding = encoding ? encoding + '/base64' : 'base64';
                data = platform_1.default.BufferUtils.base64Encode(data);
            }
            else {
                /* Called by msgpack. toBuffer returns a datatype understandable by
                 * that platform's msgpack implementation (Buffer in node, Uint8Array
                 * in browsers) */
                data = platform_1.default.BufferUtils.toBuffer(data);
            }
        }
        return {
            id: this.id,
            clientId: this.clientId,
            /* Convert presence action back to an int for sending to Ably */
            action: toActionValue(this.action),
            data: data,
            encoding: encoding,
            extras: this.extras,
        };
    };
    PresenceMessage.prototype.toString = function () {
        var result = '[PresenceMessage';
        result += '; action=' + this.action;
        if (this.id)
            result += '; id=' + this.id;
        if (this.timestamp)
            result += '; timestamp=' + this.timestamp;
        if (this.clientId)
            result += '; clientId=' + this.clientId;
        if (this.connectionId)
            result += '; connectionId=' + this.connectionId;
        if (this.encoding)
            result += '; encoding=' + this.encoding;
        if (this.data) {
            if (typeof this.data == 'string')
                result += '; data=' + this.data;
            else if (platform_1.default.BufferUtils.isBuffer(this.data))
                result += '; data (buffer)=' + platform_1.default.BufferUtils.base64Encode(this.data);
            else
                result += '; data (json)=' + JSON.stringify(this.data);
        }
        if (this.extras) {
            result += '; extras=' + JSON.stringify(this.extras);
        }
        result += ']';
        return result;
    };
    PresenceMessage.fromResponseBody = function (body, options, format) {
        var messages = [];
        if (format) {
            body = Utils.decodeBody(body, format);
        }
        for (var i = 0; i < body.length; i++) {
            var msg = (messages[i] = PresenceMessage.fromValues(body[i], true));
            try {
                PresenceMessage.decode(msg, options);
            }
            catch (e) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'PresenceMessage.fromResponseBody()', e.toString());
            }
        }
        return messages;
    };
    PresenceMessage.fromValues = function (values, stringifyAction) {
        if (stringifyAction) {
            values.action = PresenceMessage.Actions[values.action];
        }
        return Object.assign(new PresenceMessage(), values);
    };
    PresenceMessage.fromValuesArray = function (values) {
        var count = values.length, result = new Array(count);
        for (var i = 0; i < count; i++)
            result[i] = PresenceMessage.fromValues(values[i]);
        return result;
    };
    PresenceMessage.fromEncoded = function (encoded, options) {
        var msg = PresenceMessage.fromValues(encoded, true);
        /* if decoding fails at any point, catch and return the message decoded to
         * the fullest extent possible */
        try {
            PresenceMessage.decode(msg, options !== null && options !== void 0 ? options : {});
        }
        catch (e) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'PresenceMessage.fromEncoded()', e.toString());
        }
        return msg;
    };
    PresenceMessage.fromEncodedArray = function (encodedArray, options) {
        return encodedArray.map(function (encoded) {
            return PresenceMessage.fromEncoded(encoded, options);
        });
    };
    PresenceMessage.fromData = function (data) {
        if (data instanceof PresenceMessage) {
            return data;
        }
        return PresenceMessage.fromValues({
            data: data,
        });
    };
    PresenceMessage.Actions = ['absent', 'present', 'enter', 'leave', 'update'];
    PresenceMessage.encode = message_1.default.encode;
    PresenceMessage.decode = message_1.default.decode;
    PresenceMessage.getMessagesSize = message_1.default.getMessagesSize;
    return PresenceMessage;
}());
exports.default = PresenceMessage;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var errorinfo_1 = tslib_1.__importStar(__webpack_require__(4));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var XHRStates_1 = tslib_1.__importDefault(__webpack_require__(21));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
function isAblyError(responseBody, headers) {
    return Utils.arrIn(Utils.allToLowerCase(Utils.keysArray(headers)), 'x-ably-errorcode');
}
function getAblyError(responseBody, headers) {
    if (isAblyError(responseBody, headers)) {
        return responseBody.error && errorinfo_1.default.fromValues(responseBody.error);
    }
}
var noop = function () { };
var idCounter = 0;
var pendingRequests = {};
var isIE = typeof global !== 'undefined' && global.XDomainRequest;
function ieVersion() {
    var match = navigator.userAgent.toString().match(/MSIE\s([\d.]+)/);
    return match && Number(match[1]);
}
function needJsonEnvelope() {
    /* IE 10 xhr bug: http://stackoverflow.com/a/16320339 */
    var version;
    return isIE && (version = ieVersion()) && version === 10;
}
function getHeader(xhr, header) {
    return xhr.getResponseHeader && xhr.getResponseHeader(header);
}
/* Safari mysteriously returns 'Identity' for transfer-encoding when in fact
 * it is 'chunked'. So instead, decide that it is chunked when
 * transfer-encoding is present or content-length is absent.  ('or' because
 * when using http2 streaming, there's no transfer-encoding header, but can
 * still deduce streaming from lack of content-length) */
function isEncodingChunked(xhr) {
    return (xhr.getResponseHeader && (xhr.getResponseHeader('transfer-encoding') || !xhr.getResponseHeader('content-length')));
}
function getHeadersAsObject(xhr) {
    var headerPairs = Utils.trim(xhr.getAllResponseHeaders()).split('\r\n');
    var headers = {};
    for (var i = 0; i < headerPairs.length; i++) {
        var parts = headerPairs[i].split(':').map(Utils.trim);
        headers[parts[0].toLowerCase()] = parts[1];
    }
    return headers;
}
var XHRRequest = /** @class */ (function (_super) {
    tslib_1.__extends(XHRRequest, _super);
    function XHRRequest(uri, headers, params, body, requestMode, timeouts, method) {
        var _this = _super.call(this) || this;
        params = params || {};
        params.rnd = Utils.cheapRandStr();
        if (needJsonEnvelope() && !params.envelope)
            params.envelope = 'json';
        _this.uri = uri + Utils.toQueryString(params);
        _this.headers = headers || {};
        _this.body = body;
        _this.method = method ? method.toUpperCase() : Utils.isEmptyArg(body) ? 'GET' : 'POST';
        _this.requestMode = requestMode;
        _this.timeouts = timeouts;
        _this.timedOut = false;
        _this.requestComplete = false;
        _this.id = String(++idCounter);
        pendingRequests[_this.id] = _this;
        return _this;
    }
    XHRRequest.createRequest = function (uri, headers, params, body, requestMode, timeouts, method) {
        /* XHR requests are used either with the context being a realtime
         * transport, or with timeouts passed in (for when used by a rest client),
         * or completely standalone.  Use the appropriate timeouts in each case */
        var _timeouts = timeouts || defaults_1.default.TIMEOUTS;
        return new XHRRequest(uri, headers, Utils.copy(params), body, requestMode, _timeouts, method);
    };
    XHRRequest.prototype.complete = function (err, body, headers, unpacked, statusCode) {
        if (!this.requestComplete) {
            this.requestComplete = true;
            if (!err && body) {
                this.emit('data', body);
            }
            this.emit('complete', err, body, headers, unpacked, statusCode);
            this.dispose();
        }
    };
    XHRRequest.prototype.abort = function () {
        this.dispose();
    };
    XHRRequest.prototype.exec = function () {
        var _this = this;
        var headers = this.headers;
        var timeout = this.requestMode == XHRStates_1.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout, timer = (this.timer = setTimeout(function () {
            _this.timedOut = true;
            xhr.abort();
        }, timeout)), method = this.method, xhr = (this.xhr = new XMLHttpRequest()), accept = headers['accept'];
        var body = this.body;
        var responseType = 'text';
        if (!accept) {
            // Default to JSON
            headers['accept'] = 'application/json';
        }
        else if (accept.indexOf('application/x-msgpack') === 0) {
            // Msgpack responses will be typed as ArrayBuffer
            responseType = 'arraybuffer';
        }
        if (body) {
            var contentType = headers['content-type'] || (headers['content-type'] = 'application/json');
            if (contentType.indexOf('application/json') > -1 && typeof body != 'string')
                body = JSON.stringify(body);
        }
        // Can probably remove this directive if https://github.com/nodesecurity/eslint-plugin-security/issues/26 is resolved
        // eslint-disable-next-line security/detect-non-literal-fs-filename
        xhr.open(method, this.uri, true);
        xhr.responseType = responseType;
        if ('authorization' in headers) {
            xhr.withCredentials = true;
        }
        for (var h in headers)
            xhr.setRequestHeader(h, headers[h]);
        var errorHandler = function (errorEvent, message, code, statusCode) {
            var _a;
            var errorMessage = message + ' (event type: ' + errorEvent.type + ')';
            if ((_a = _this === null || _this === void 0 ? void 0 : _this.xhr) === null || _a === void 0 ? void 0 : _a.statusText)
                errorMessage += ', current statusText is ' + _this.xhr.statusText;
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Request.on' + errorEvent.type + '()', errorMessage);
            _this.complete(new errorinfo_1.PartialErrorInfo(errorMessage, code, statusCode));
        };
        xhr.onerror = function (errorEvent) {
            errorHandler(errorEvent, 'XHR error occurred', null, 400);
        };
        xhr.onabort = function (errorEvent) {
            if (_this.timedOut) {
                errorHandler(errorEvent, 'Request aborted due to request timeout expiring', null, 408);
            }
            else {
                errorHandler(errorEvent, 'Request cancelled', null, 400);
            }
        };
        xhr.ontimeout = function (errorEvent) {
            errorHandler(errorEvent, 'Request timed out', null, 408);
        };
        var streaming;
        var statusCode;
        var successResponse;
        var streamPos = 0;
        var unpacked = false;
        var onResponse = function () {
            clearTimeout(timer);
            successResponse = statusCode < 400;
            if (statusCode == 204) {
                _this.complete(null, null, null, null, statusCode);
                return;
            }
            streaming = _this.requestMode == XHRStates_1.default.REQ_RECV_STREAM && successResponse && isEncodingChunked(xhr);
        };
        var onEnd = function () {
            var parsedResponse;
            try {
                var contentType = getHeader(xhr, 'content-type');
                /* Be liberal in what we accept; buggy auth servers may respond
                 * without the correct contenttype, but assume they're still
                 * responding with json */
                var json = contentType ? contentType.indexOf('application/json') >= 0 : xhr.responseType == 'text';
                if (json) {
                    /* If we requested msgpack but server responded with json, then since
                     * we set the responseType expecting msgpack, the response will be
                     * an ArrayBuffer containing json */
                    var jsonResponseBody = xhr.responseType === 'arraybuffer'
                        ? platform_1.default.BufferUtils.utf8Decode(xhr.response)
                        : String(xhr.responseText);
                    if (jsonResponseBody.length) {
                        parsedResponse = JSON.parse(jsonResponseBody);
                    }
                    else {
                        parsedResponse = jsonResponseBody;
                    }
                    unpacked = true;
                }
                else {
                    parsedResponse = xhr.response;
                }
                if (parsedResponse.response !== undefined) {
                    /* unwrap JSON envelope */
                    statusCode = parsedResponse.statusCode;
                    successResponse = statusCode < 400;
                    headers = parsedResponse.headers;
                    parsedResponse = parsedResponse.response;
                }
                else {
                    headers = getHeadersAsObject(xhr);
                }
            }
            catch (e) {
                _this.complete(new errorinfo_1.PartialErrorInfo('Malformed response body from server: ' + e.message, null, 400));
                return;
            }
            /* If response is an array, it's an array of protocol messages -- even if
             * is contains an error action (hence the nonsuccess statuscode), we can
             * consider the request to have succeeded, just pass it on to
             * onProtocolMessage to decide what to do */
            if (successResponse || Utils.isArray(parsedResponse)) {
                _this.complete(null, parsedResponse, headers, unpacked, statusCode);
                return;
            }
            var err = getAblyError(parsedResponse, headers);
            if (!err) {
                err = new errorinfo_1.PartialErrorInfo('Error response received from server: ' +
                    statusCode +
                    ' body was: ' +
                    platform_1.default.Config.inspect(parsedResponse), null, statusCode);
            }
            _this.complete(err, parsedResponse, headers, unpacked, statusCode);
        };
        function onProgress() {
            var responseText = xhr.responseText;
            var bodyEnd = responseText.length - 1;
            var idx, chunk;
            while (streamPos < bodyEnd && (idx = responseText.indexOf('\n', streamPos)) > -1) {
                chunk = responseText.slice(streamPos, idx);
                streamPos = idx + 1;
                onChunk(chunk);
            }
        }
        var onChunk = function (chunk) {
            try {
                chunk = JSON.parse(chunk);
            }
            catch (e) {
                _this.complete(new errorinfo_1.PartialErrorInfo('Malformed response body from server: ' + e.message, null, 400));
                return;
            }
            _this.emit('data', chunk);
        };
        var onStreamEnd = function () {
            onProgress();
            _this.streamComplete = true;
            platform_1.default.Config.nextTick(function () {
                _this.complete();
            });
        };
        xhr.onreadystatechange = function () {
            var readyState = xhr.readyState;
            if (readyState < 3)
                return;
            if (xhr.status !== 0) {
                if (statusCode === undefined) {
                    statusCode = xhr.status;
                    /* IE returns 1223 for 204: http://bugs.jquery.com/ticket/1450 */
                    if (statusCode === 1223)
                        statusCode = 204;
                    onResponse();
                }
                if (readyState == 3 && streaming) {
                    onProgress();
                }
                else if (readyState == 4) {
                    if (streaming)
                        onStreamEnd();
                    else
                        onEnd();
                }
            }
        };
        xhr.send(body);
    };
    XHRRequest.prototype.dispose = function () {
        var xhr = this.xhr;
        if (xhr) {
            xhr.onreadystatechange = xhr.onerror = xhr.onabort = xhr.ontimeout = noop;
            this.xhr = null;
            var timer = this.timer;
            if (timer) {
                clearTimeout(timer);
                this.timer = null;
            }
            if (!this.requestComplete)
                xhr.abort();
        }
        delete pendingRequests[this.id];
    };
    return XHRRequest;
}(eventemitter_1.default));
exports.default = XHRRequest;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var multicaster_1 = tslib_1.__importDefault(__webpack_require__(23));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var hmac_sha256_1 = tslib_1.__importDefault(__webpack_require__(45));
var enc_base64_1 = __webpack_require__(11);
var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(18));
var HttpStatusCodes_1 = tslib_1.__importDefault(__webpack_require__(25));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var resource_1 = tslib_1.__importDefault(__webpack_require__(14));
var MAX_TOKEN_LENGTH = Math.pow(2, 17);
function noop() { }
function random() {
    return ('000000' + Math.floor(Math.random() * 1e16)).slice(-16);
}
function isRealtime(client) {
    return !!client.connection;
}
/* A client auth callback may give errors in any number of formats; normalise to an ErrorInfo or PartialErrorInfo */
function normaliseAuthcallbackError(err) {
    if (!Utils.isErrorInfoOrPartialErrorInfo(err)) {
        return new errorinfo_1.default(Utils.inspectError(err), err.code || 40170, err.statusCode || 401);
    }
    /* network errors will not have an inherent error code */
    if (!err.code) {
        if (err.statusCode === 403) {
            err.code = 40300;
        }
        else {
            err.code = 40170;
            /* normalise statusCode to 401 per RSA4e */
            err.statusCode = 401;
        }
    }
    return err;
}
var hmac = function (text, key) {
    if (platform_1.default.Config.createHmac) {
        var inst = platform_1.default.Config.createHmac('SHA256', key);
        inst.update(text);
        return inst.digest('base64');
    }
    return (0, enc_base64_1.stringify)((0, hmac_sha256_1.default)(text, key));
};
function c14n(capability) {
    if (!capability)
        return '';
    if (typeof capability == 'string')
        capability = JSON.parse(capability);
    var c14nCapability = Object.create(null);
    var keys = Utils.keysArray(capability, true);
    if (!keys)
        return '';
    keys.sort();
    for (var i = 0; i < keys.length; i++) {
        c14nCapability[keys[i]] = capability[keys[i]].sort();
    }
    return JSON.stringify(c14nCapability);
}
function logAndValidateTokenAuthMethod(authOptions) {
    if (authOptions.authCallback) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth()', 'using token auth with authCallback');
    }
    else if (authOptions.authUrl) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth()', 'using token auth with authUrl');
    }
    else if (authOptions.key) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth()', 'using token auth with client-side signing');
    }
    else if (authOptions.tokenDetails) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth()', 'using token auth with supplied token only');
    }
    else {
        var msg = 'authOptions must include valid authentication parameters';
        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth()', msg);
        throw new Error(msg);
    }
}
function basicAuthForced(options) {
    return 'useTokenAuth' in options && !options.useTokenAuth;
}
/* RSA4 */
function useTokenAuth(options) {
    return (options.useTokenAuth ||
        (!basicAuthForced(options) && (options.authCallback || options.authUrl || options.token || options.tokenDetails)));
}
/* RSA4a */
function noWayToRenew(options) {
    return !options.key && !options.authCallback && !options.authUrl;
}
var trId = 0;
function getTokenRequestId() {
    return trId++;
}
var Auth = /** @class */ (function () {
    function Auth(client, options) {
        // This initialization is always overwritten and only used to prevent a TypeScript compiler error
        this.authOptions = {};
        this.client = client;
        this.tokenParams = options.defaultTokenParams || {};
        /* The id of the current token request if one is in progress, else null */
        this.currentTokenRequestId = null;
        this.waitingForTokenRequest = null;
        if (useTokenAuth(options)) {
            /* Token auth */
            if (options.key && !hmac) {
                var msg = 'client-side token request signing not supported';
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth()', msg);
                throw new Error(msg);
            }
            if (noWayToRenew(options)) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth()', 'Warning: library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help');
            }
            this._saveTokenOptions(options.defaultTokenParams, options);
            logAndValidateTokenAuthMethod(this.authOptions);
        }
        else {
            /* Basic auth */
            if (!options.key) {
                var msg = 'No authentication options provided; need one of: key, authUrl, or authCallback (or for testing only, token or tokenDetails)';
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth()', msg);
                throw new errorinfo_1.default(msg, 40160, 401);
            }
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth()', 'anonymous, using basic auth');
            this._saveBasicOptions(options);
        }
    }
    Auth.prototype.authorize = function (tokenParams, authOptions, callback) {
        var _this = this;
        var _authOptions;
        /* shuffle and normalise arguments as necessary */
        if (typeof tokenParams == 'function' && !callback) {
            callback = tokenParams;
            _authOptions = tokenParams = null;
        }
        else if (typeof authOptions == 'function' && !callback) {
            callback = authOptions;
            _authOptions = null;
        }
        else {
            _authOptions = authOptions;
        }
        if (!callback) {
            if (this.client.options.promises) {
                return Utils.promisify(this, 'authorize', arguments);
            }
        }
        /* RSA10a: authorize() call implies token auth. If a key is passed it, we
         * just check if it doesn't clash and assume we're generating a token from it */
        if (_authOptions && _authOptions.key && this.authOptions.key !== _authOptions.key) {
            throw new errorinfo_1.default('Unable to update auth options with incompatible key', 40102, 401);
        }
        if (_authOptions && 'force' in _authOptions) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.authorize', 'Deprecation warning: specifying {force: true} in authOptions is no longer necessary, authorize() now always gets a new token. Please remove this, as in version 1.0 and later, having a non-null authOptions will overwrite stored library authOptions, which may not be what you want');
            /* Emulate the old behaviour: if 'force' was the only member of authOptions,
             * set it to null so it doesn't overwrite stored. TODO: remove in version 1.0 */
            if (Utils.isOnlyPropIn(_authOptions, 'force')) {
                _authOptions = null;
            }
        }
        this._forceNewToken(tokenParams, _authOptions, function (err, tokenDetails) {
            if (err) {
                if (_this.client.connection && err.statusCode === HttpStatusCodes_1.default.Forbidden) {
                    /* Per RSA4d & RSA4d1, if the auth server explicitly repudiates our right to
                     * stay connecticed by returning a 403, we actively disconnect the connection
                     * even though we may well still have time left in the old token. */
                    _this.client.connection.connectionManager.actOnErrorFromAuthorize(err);
                }
                callback === null || callback === void 0 ? void 0 : callback(err);
                return;
            }
            /* RTC8
             * - When authorize called by an end user and have a realtime connection,
             * don't call back till new token has taken effect.
             * - Use this.client.connection as a proxy for (this.client instanceof Realtime),
             * which doesn't work in node as Realtime isn't part of the vm context for Rest clients */
            if (isRealtime(_this.client)) {
                _this.client.connection.connectionManager.onAuthUpdated(tokenDetails, callback || noop);
            }
            else {
                callback === null || callback === void 0 ? void 0 : callback(null, tokenDetails);
            }
        });
    };
    Auth.prototype.authorise = function (tokenParams, authOptions, callback) {
        logger_1.default.deprecated('Auth.authorise', 'Auth.authorize');
        this.authorize(tokenParams, authOptions, callback);
    };
    /* For internal use, eg by connectionManager - useful when want to call back
     * as soon as we have the new token, rather than waiting for it to take
     * effect on the connection as #authorize does */
    Auth.prototype._forceNewToken = function (tokenParams, authOptions, callback) {
        var _this = this;
        /* get rid of current token even if still valid */
        this.tokenDetails = null;
        /* _save normalises the tokenParams and authOptions and updates the auth
         * object. All subsequent operations should use the values on `this`,
         * not the passed in ones. */
        this._saveTokenOptions(tokenParams, authOptions);
        logAndValidateTokenAuthMethod(this.authOptions);
        this._ensureValidAuthCredentials(true, function (err, tokenDetails) {
            /* RSA10g */
            delete _this.tokenParams.timestamp;
            delete _this.authOptions.queryTime;
            callback(err, tokenDetails);
        });
    };
    Auth.prototype.requestToken = function (tokenParams, authOptions, callback) {
        var _this = this;
        /* shuffle and normalise arguments as necessary */
        if (typeof tokenParams == 'function' && !callback) {
            callback = tokenParams;
            authOptions = tokenParams = null;
        }
        else if (typeof authOptions == 'function' && !callback) {
            callback = authOptions;
            authOptions = null;
        }
        if (!callback && this.client.options.promises) {
            return Utils.promisify(this, 'requestToken', arguments);
        }
        /* RSA8e: if authOptions passed in, they're used instead of stored, don't merge them */
        authOptions = authOptions || this.authOptions;
        tokenParams = tokenParams || Utils.copy(this.tokenParams);
        var _callback = callback || noop;
        /* first set up whatever callback will be used to get signed
         * token requests */
        var tokenRequestCallback, client = this.client;
        if (authOptions.authCallback) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.requestToken()', 'using token auth with authCallback');
            tokenRequestCallback = authOptions.authCallback;
        }
        else if (authOptions.authUrl) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.requestToken()', 'using token auth with authUrl');
            tokenRequestCallback = function (params, cb) {
                var authHeaders = Utils.mixin({ accept: 'application/json, text/plain' }, authOptions.authHeaders);
                var usePost = authOptions.authMethod && authOptions.authMethod.toLowerCase() === 'post';
                var providedQsParams;
                /* Combine authParams with any qs params given in the authUrl */
                var queryIdx = authOptions.authUrl.indexOf('?');
                if (queryIdx > -1) {
                    providedQsParams = Utils.parseQueryString(authOptions.authUrl.slice(queryIdx));
                    authOptions.authUrl = authOptions.authUrl.slice(0, queryIdx);
                    if (!usePost) {
                        /* In case of conflict, authParams take precedence over qs params in the authUrl */
                        authOptions.authParams = Utils.mixin(providedQsParams, authOptions.authParams);
                    }
                }
                /* RSA8c2 */
                var authParams = Utils.mixin({}, authOptions.authParams || {}, params);
                var authUrlRequestCallback = function (err, body, headers, unpacked) {
                    var contentType;
                    if (err) {
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Auth.requestToken().tokenRequestCallback', 'Received Error: ' + Utils.inspectError(err));
                    }
                    else {
                        contentType = headers['content-type'];
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Auth.requestToken().tokenRequestCallback', 'Received; content-type: ' + contentType + '; body: ' + Utils.inspectBody(body));
                    }
                    if (err || unpacked)
                        return cb(err, body);
                    if (platform_1.default.BufferUtils.isBuffer(body))
                        body = body.toString();
                    if (!contentType) {
                        cb(new errorinfo_1.default('authUrl response is missing a content-type header', 40170, 401));
                        return;
                    }
                    var json = contentType.indexOf('application/json') > -1, text = contentType.indexOf('text/plain') > -1 || contentType.indexOf('application/jwt') > -1;
                    if (!json && !text) {
                        cb(new errorinfo_1.default('authUrl responded with unacceptable content-type ' +
                            contentType +
                            ', should be either text/plain, application/jwt or application/json', 40170, 401));
                        return;
                    }
                    if (json) {
                        if (body.length > MAX_TOKEN_LENGTH) {
                            cb(new errorinfo_1.default('authUrl response exceeded max permitted length', 40170, 401));
                            return;
                        }
                        try {
                            body = JSON.parse(body);
                        }
                        catch (e) {
                            cb(new errorinfo_1.default('Unexpected error processing authURL response; err = ' + e.message, 40170, 401));
                            return;
                        }
                    }
                    cb(null, body, contentType);
                };
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Auth.requestToken().tokenRequestCallback', 'Requesting token from ' +
                    authOptions.authUrl +
                    '; Params: ' +
                    JSON.stringify(authParams) +
                    '; method: ' +
                    (usePost ? 'POST' : 'GET'));
                if (usePost) {
                    /* send body form-encoded */
                    var headers = authHeaders || {};
                    headers['content-type'] = 'application/x-www-form-urlencoded';
                    var body = Utils.toQueryString(authParams).slice(1); /* slice is to remove the initial '?' */
                    _this.client.http.doUri(HttpMethods_1.default.Post, client, authOptions.authUrl, headers, body, providedQsParams, authUrlRequestCallback);
                }
                else {
                    _this.client.http.doUri(HttpMethods_1.default.Get, client, authOptions.authUrl, authHeaders || {}, null, authParams, authUrlRequestCallback);
                }
            };
        }
        else if (authOptions.key) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.requestToken()', 'using token auth with client-side signing');
            tokenRequestCallback = function (params, cb) {
                _this.createTokenRequest(params, authOptions, cb);
            };
        }
        else {
            var msg = 'Need a new token, but authOptions does not include any way to request one (no authUrl, authCallback, or key)';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth()', 'library initialized with a token literal without any way to renew the token when it expires (no authUrl, authCallback, or key). See https://help.ably.io/error/40171 for help');
            _callback(new errorinfo_1.default(msg, 40171, 403));
            return;
        }
        /* normalise token params */
        if ('capability' in tokenParams)
            tokenParams.capability = c14n(tokenParams.capability);
        var tokenRequest = function (signedTokenParams, tokenCb) {
            var keyName = signedTokenParams.keyName, path = '/keys/' + keyName + '/requestToken', tokenUri = function (host) {
                return client.baseUri(host) + path;
            };
            var requestHeaders = Utils.defaultPostHeaders(_this.client.options);
            if (authOptions.requestHeaders)
                Utils.mixin(requestHeaders, authOptions.requestHeaders);
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Auth.requestToken().requestToken', 'Sending POST to ' + path + '; Token params: ' + JSON.stringify(signedTokenParams));
            _this.client.http.do(HttpMethods_1.default.Post, client, tokenUri, requestHeaders, JSON.stringify(signedTokenParams), null, tokenCb);
        };
        var tokenRequestCallbackTimeoutExpired = false, timeoutLength = this.client.options.timeouts.realtimeRequestTimeout, tokenRequestCallbackTimeout = setTimeout(function () {
            tokenRequestCallbackTimeoutExpired = true;
            var msg = 'Token request callback timed out after ' + timeoutLength / 1000 + ' seconds';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.requestToken()', msg);
            _callback(new errorinfo_1.default(msg, 40170, 401));
        }, timeoutLength);
        tokenRequestCallback(tokenParams, function (err, tokenRequestOrDetails, contentType) {
            if (tokenRequestCallbackTimeoutExpired)
                return;
            clearTimeout(tokenRequestCallbackTimeout);
            if (err) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.requestToken()', 'token request signing call returned error; err = ' + Utils.inspectError(err));
                _callback(normaliseAuthcallbackError(err));
                return;
            }
            /* the response from the callback might be a token string, a signed request or a token details */
            if (typeof tokenRequestOrDetails === 'string') {
                if (tokenRequestOrDetails.length === 0) {
                    _callback(new errorinfo_1.default('Token string is empty', 40170, 401));
                }
                else if (tokenRequestOrDetails.length > MAX_TOKEN_LENGTH) {
                    _callback(new errorinfo_1.default('Token string exceeded max permitted length (was ' + tokenRequestOrDetails.length + ' bytes)', 40170, 401));
                }
                else if (tokenRequestOrDetails === 'undefined' || tokenRequestOrDetails === 'null') {
                    /* common failure mode with poorly-implemented authCallbacks */
                    _callback(new errorinfo_1.default('Token string was literal null/undefined', 40170, 401));
                }
                else if (tokenRequestOrDetails[0] === '{' && !(contentType && contentType.indexOf('application/jwt') > -1)) {
                    _callback(new errorinfo_1.default("Token was double-encoded; make sure you're not JSON-encoding an already encoded token request or details", 40170, 401));
                }
                else {
                    _callback(null, { token: tokenRequestOrDetails });
                }
                return;
            }
            if (typeof tokenRequestOrDetails !== 'object') {
                var msg = 'Expected token request callback to call back with a token string or token request/details object, but got a ' +
                    typeof tokenRequestOrDetails;
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.requestToken()', msg);
                _callback(new errorinfo_1.default(msg, 40170, 401));
                return;
            }
            var objectSize = JSON.stringify(tokenRequestOrDetails).length;
            if (objectSize > MAX_TOKEN_LENGTH && !authOptions.suppressMaxLengthCheck) {
                _callback(new errorinfo_1.default('Token request/details object exceeded max permitted stringified size (was ' + objectSize + ' bytes)', 40170, 401));
                return;
            }
            if ('issued' in tokenRequestOrDetails) {
                /* a tokenDetails object */
                _callback(null, tokenRequestOrDetails);
                return;
            }
            if (!('keyName' in tokenRequestOrDetails)) {
                var msg = 'Expected token request callback to call back with a token string, token request object, or token details object';
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.requestToken()', msg);
                _callback(new errorinfo_1.default(msg, 40170, 401));
                return;
            }
            /* it's a token request, so make the request */
            tokenRequest(tokenRequestOrDetails, function (err, tokenResponse, headers, unpacked) {
                if (err) {
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth.requestToken()', 'token request API call returned error; err = ' + Utils.inspectError(err));
                    _callback(normaliseAuthcallbackError(err));
                    return;
                }
                if (!unpacked)
                    tokenResponse = JSON.parse(tokenResponse);
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.getToken()', 'token received');
                _callback(null, tokenResponse);
            });
        });
    };
    /**
     * Create and sign a token request based on the given options.
     * NOTE this can only be used when the key value is available locally.
     * Otherwise, signed token requests must be obtained from the key
     * owner (either using the token request callback or url).
     *
     * @param authOptions
     * an object containing the request options:
     * - key:           the key to use. If not specified, a key passed in constructing
     *                  the Rest interface will be used
     *
     * - queryTime      (optional) boolean indicating that the ably system should be
     *                  queried for the current time when none is specified explicitly
     *
     * - requestHeaders (optional, unsupported, for testing only) extra headers to add to the
     *                  requestToken request
     *
     * @param tokenParams
     * an object containing the parameters for the requested token:
     * - ttl:       (optional) the requested life of the token in ms. If none is specified
     *                  a default of 1 hour is provided. The maximum lifetime is 24hours; any request
     *                  exceeding that lifetime will be rejected with an error.
     *
     * - capability:    (optional) the capability to associate with the access token.
     *                  If none is specified, a token will be requested with all of the
     *                  capabilities of the specified key.
     *
     * - clientId:      (optional) a client ID to associate with the token; if not
     *                  specified, a clientId passed in constructing the Rest interface will be used
     *
     * - timestamp:     (optional) the time in ms since the epoch. If none is specified,
     *                  the system will be queried for a time value to use.
     *
     * @param callback
     */
    Auth.prototype.createTokenRequest = function (tokenParams, authOptions, callback) {
        var _this = this;
        /* shuffle and normalise arguments as necessary */
        if (typeof tokenParams == 'function' && !callback) {
            callback = tokenParams;
            authOptions = tokenParams = null;
        }
        else if (typeof authOptions == 'function' && !callback) {
            callback = authOptions;
            authOptions = null;
        }
        if (!callback && this.client.options.promises) {
            return Utils.promisify(this, 'createTokenRequest', arguments);
        }
        /* RSA9h: if authOptions passed in, they're used instead of stored, don't merge them */
        authOptions = authOptions || this.authOptions;
        tokenParams = tokenParams || Utils.copy(this.tokenParams);
        var key = authOptions.key;
        if (!key) {
            callback(new errorinfo_1.default('No key specified', 40101, 403));
            return;
        }
        var keyParts = key.split(':'), keyName = keyParts[0], keySecret = keyParts[1];
        if (!keySecret) {
            callback(new errorinfo_1.default('Invalid key specified', 40101, 403));
            return;
        }
        if (tokenParams.clientId === '') {
            callback(new errorinfo_1.default('clientId can’t be an empty string', 40012, 400));
            return;
        }
        if ('capability' in tokenParams) {
            tokenParams.capability = c14n(tokenParams.capability);
        }
        var request = Utils.mixin({ keyName: keyName }, tokenParams), clientId = tokenParams.clientId || '', ttl = tokenParams.ttl || '', capability = tokenParams.capability || '';
        (function (authoriseCb) {
            if (request.timestamp) {
                authoriseCb();
                return;
            }
            _this.getTimestamp(authOptions && authOptions.queryTime, function (err, time) {
                if (err) {
                    callback(err);
                    return;
                }
                request.timestamp = time;
                authoriseCb();
            });
        })(function () {
            /* nonce */
            /* NOTE: there is no expectation that the client
             * specifies the nonce; this is done by the library
             * However, this can be overridden by the client
             * simply for testing purposes. */
            var nonce = request.nonce || (request.nonce = random()), timestamp = request.timestamp;
            var signText = request.keyName + '\n' + ttl + '\n' + capability + '\n' + clientId + '\n' + timestamp + '\n' + nonce + '\n';
            /* mac */
            /* NOTE: there is no expectation that the client
             * specifies the mac; this is done by the library
             * However, this can be overridden by the client
             * simply for testing purposes. */
            request.mac = request.mac || hmac(signText, keySecret);
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.getTokenRequest()', 'generated signed request');
            callback(null, request);
        });
    };
    /**
     * Get the auth query params to use for a websocket connection,
     * based on the current auth parameters
     */
    Auth.prototype.getAuthParams = function (callback) {
        if (this.method == 'basic')
            callback(null, { key: this.key });
        else
            this._ensureValidAuthCredentials(false, function (err, tokenDetails) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!tokenDetails) {
                    throw new Error('Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails');
                }
                callback(null, { access_token: tokenDetails.token });
            });
    };
    /**
     * Get the authorization header to use for a REST or comet request,
     * based on the current auth parameters
     */
    Auth.prototype.getAuthHeaders = function (callback) {
        if (this.method == 'basic') {
            callback(null, { authorization: 'Basic ' + this.basicKey });
        }
        else {
            this._ensureValidAuthCredentials(false, function (err, tokenDetails) {
                if (err) {
                    callback(err);
                    return;
                }
                if (!tokenDetails) {
                    throw new Error('Auth.getAuthParams(): _ensureValidAuthCredentials returned no error or tokenDetails');
                }
                callback(null, { authorization: 'Bearer ' + Utils.toBase64(tokenDetails.token) });
            });
        }
    };
    /**
     * Get the current time based on the local clock,
     * or if the option queryTime is true, return the server time.
     * The server time offset from the local time is stored so that
     * only one request to the server to get the time is ever needed
     */
    Auth.prototype.getTimestamp = function (queryTime, callback) {
        if (!this.isTimeOffsetSet() && (queryTime || this.authOptions.queryTime)) {
            this.client.time(callback);
        }
        else {
            callback(null, this.getTimestampUsingOffset());
        }
    };
    Auth.prototype.getTimestampUsingOffset = function () {
        return Utils.now() + (this.client.serverTimeOffset || 0);
    };
    Auth.prototype.isTimeOffsetSet = function () {
        return this.client.serverTimeOffset !== null;
    };
    Auth.prototype._saveBasicOptions = function (authOptions) {
        this.method = 'basic';
        this.key = authOptions.key;
        this.basicKey = Utils.toBase64(authOptions.key);
        this.authOptions = authOptions || {};
        if ('clientId' in authOptions) {
            this._userSetClientId(authOptions.clientId);
        }
    };
    Auth.prototype._saveTokenOptions = function (tokenParams, authOptions) {
        this.method = 'token';
        if (tokenParams) {
            /* We temporarily persist tokenParams.timestamp in case a new token needs
             * to be requested, then null it out in the callback of
             * _ensureValidAuthCredentials for RSA10g compliance */
            this.tokenParams = tokenParams;
        }
        if (authOptions) {
            /* normalise */
            if (authOptions.token) {
                /* options.token may contain a token string or, for convenience, a TokenDetails */
                authOptions.tokenDetails =
                    typeof authOptions.token === 'string'
                        ? { token: authOptions.token }
                        : authOptions.token;
            }
            if (authOptions.tokenDetails) {
                this.tokenDetails = authOptions.tokenDetails;
            }
            if ('clientId' in authOptions) {
                this._userSetClientId(authOptions.clientId);
            }
            this.authOptions = authOptions;
        }
    };
    /* @param forceSupersede: force a new token request even if there's one in
     * progress, making all pending callbacks wait for the new one */
    Auth.prototype._ensureValidAuthCredentials = function (forceSupersede, callback) {
        var _this = this;
        var token = this.tokenDetails;
        if (token) {
            if (this._tokenClientIdMismatch(token.clientId)) {
                /* 403 to trigger a permanently failed client - RSA15c */
                callback(new errorinfo_1.default('Mismatch between clientId in token (' + token.clientId + ') and current clientId (' + this.clientId + ')', 40102, 403));
                return;
            }
            /* RSA4b1 -- if we have a server time offset set already, we can
             * automatically remove expired tokens. Else just use the cached token. If it is
             * expired Ably will tell us and we'll discard it then. */
            if (!this.isTimeOffsetSet() || !token.expires || token.expires >= this.getTimestampUsingOffset()) {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.getToken()', 'using cached token; expires = ' + token.expires);
                callback(null, token);
                return;
            }
            /* expired, so remove and fallthrough to getting a new one */
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth.getToken()', 'deleting expired token');
            this.tokenDetails = null;
        }
        (this.waitingForTokenRequest || (this.waitingForTokenRequest = multicaster_1.default.create())).push(callback);
        if (this.currentTokenRequestId !== null && !forceSupersede) {
            return;
        }
        /* Request a new token */
        var tokenRequestId = (this.currentTokenRequestId = getTokenRequestId());
        this.requestToken(this.tokenParams, this.authOptions, function (err, tokenResponse) {
            if (_this.currentTokenRequestId > tokenRequestId) {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Auth._ensureValidAuthCredentials()', 'Discarding token request response; overtaken by newer one');
                return;
            }
            _this.currentTokenRequestId = null;
            var callbacks = _this.waitingForTokenRequest || noop;
            _this.waitingForTokenRequest = null;
            if (err) {
                callbacks(err);
                return;
            }
            callbacks(null, (_this.tokenDetails = tokenResponse));
        });
    };
    /* User-set: check types, '*' is disallowed, throw any errors */
    Auth.prototype._userSetClientId = function (clientId) {
        if (!(typeof clientId === 'string' || clientId === null)) {
            throw new errorinfo_1.default('clientId must be either a string or null', 40012, 400);
        }
        else if (clientId === '*') {
            throw new errorinfo_1.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, instantiate the library with {defaultTokenParams: {clientId: "*"}}), or if calling authorize(), pass it in as a tokenParam: authorize({clientId: "*"}, authOptions)', 40012, 400);
        }
        else {
            var err = this._uncheckedSetClientId(clientId);
            if (err)
                throw err;
        }
    };
    /* Ably-set: no typechecking, '*' is allowed but not set on this.clientId), return errors to the caller */
    Auth.prototype._uncheckedSetClientId = function (clientId) {
        if (this._tokenClientIdMismatch(clientId)) {
            /* Should never happen in normal circumstances as realtime should
             * recognise mismatch and return an error */
            var msg = 'Unexpected clientId mismatch: client has ' + this.clientId + ', requested ' + clientId;
            var err = new errorinfo_1.default(msg, 40102, 401);
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Auth._uncheckedSetClientId()', msg);
            return err;
        }
        else {
            /* RSA7a4: if options.clientId is provided and is not
             * null, it overrides defaultTokenParams.clientId */
            this.clientId = this.tokenParams.clientId = clientId;
            return null;
        }
    };
    Auth.prototype._tokenClientIdMismatch = function (tokenClientId) {
        return !!(this.clientId &&
            this.clientId !== '*' &&
            tokenClientId &&
            tokenClientId !== '*' &&
            this.clientId !== tokenClientId);
    };
    Auth.isTokenErr = function (error) {
        return error.code && error.code >= 40140 && error.code < 40150;
    };
    Auth.prototype.revokeTokens = function (specifiers, optionsOrCallbackArg, callbackArg) {
        if (useTokenAuth(this.client.options)) {
            throw new errorinfo_1.default('Cannot revoke tokens when using token auth', 40162, 401);
        }
        var keyName = this.client.options.keyName;
        var resolvedOptions;
        if (typeof optionsOrCallbackArg === 'function') {
            callbackArg = optionsOrCallbackArg;
            resolvedOptions = {};
        }
        else {
            resolvedOptions = optionsOrCallbackArg !== null && optionsOrCallbackArg !== void 0 ? optionsOrCallbackArg : {};
        }
        if (callbackArg === undefined) {
            if (this.client.options.promises) {
                return Utils.promisify(this, 'revokeTokens', [specifiers, resolvedOptions]);
            }
            callbackArg = noop;
        }
        var callback = callbackArg;
        var requestBodyDTO = tslib_1.__assign({ targets: specifiers.map(function (specifier) { return "".concat(specifier.type, ":").concat(specifier.value); }) }, resolvedOptions);
        var format = this.client.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(this.client.options, format);
        if (this.client.options.headers)
            Utils.mixin(headers, this.client.options.headers);
        var requestBody = Utils.encodeBody(requestBodyDTO, format);
        resource_1.default.post(this.client, "/keys/".concat(keyName, "/revokeTokens"), requestBody, headers, { newBatchResponse: 'true' }, null, function (err, body, headers, unpacked) {
            if (err) {
                // TODO remove this type assertion after fixing https://github.com/ably/ably-js/issues/1405
                callback(err);
                return;
            }
            var batchResult = (unpacked ? body : Utils.decodeBody(body, format));
            callback(null, batchResult);
        });
    };
    return Auth;
}());
exports.default = Auth;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var HttpMethods;
(function (HttpMethods) {
    HttpMethods["Get"] = "get";
    HttpMethods["Delete"] = "delete";
    HttpMethods["Post"] = "post";
    HttpMethods["Put"] = "put";
    HttpMethods["Patch"] = "patch";
})(HttpMethods || (HttpMethods = {}));
exports.default = HttpMethods;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HttpPaginatedResponse = exports.PaginatedResult = void 0;
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var resource_1 = tslib_1.__importDefault(__webpack_require__(14));
function getRelParams(linkUrl) {
    var urlMatch = linkUrl.match(/^\.\/(\w+)\?(.*)$/);
    return urlMatch && urlMatch[2] && Utils.parseQueryString(urlMatch[2]);
}
function parseRelLinks(linkHeader) {
    if (typeof linkHeader == 'string')
        linkHeader = linkHeader.split(',');
    var relParams = {};
    for (var i = 0; i < linkHeader.length; i++) {
        var linkMatch = linkHeader[i].match(/^\s*<(.+)>;\s*rel="(\w+)"$/);
        if (linkMatch) {
            var params = getRelParams(linkMatch[1]);
            if (params)
                relParams[linkMatch[2]] = params;
        }
    }
    return relParams;
}
function returnErrOnly(err, body, useHPR) {
    /* If using httpPaginatedResponse, errors from Ably are returned as part of
     * the HPR, only do callback(err) for network errors etc. which don't
     * return a body and/or have no ably-originated error code (non-numeric
     * error codes originate from node) */
    return !(useHPR && (body || typeof err.code === 'number'));
}
var PaginatedResource = /** @class */ (function () {
    function PaginatedResource(rest, path, headers, envelope, bodyHandler, useHttpPaginatedResponse) {
        this.rest = rest;
        this.path = path;
        this.headers = headers;
        this.envelope = envelope !== null && envelope !== void 0 ? envelope : null;
        this.bodyHandler = bodyHandler;
        this.useHttpPaginatedResponse = useHttpPaginatedResponse || false;
    }
    PaginatedResource.prototype.get = function (params, callback) {
        var _this = this;
        resource_1.default.get(this.rest, this.path, this.headers, params, this.envelope, function (err, body, headers, unpacked, statusCode) {
            _this.handlePage(err, body, headers, unpacked, statusCode, callback);
        });
    };
    PaginatedResource.prototype.delete = function (params, callback) {
        var _this = this;
        resource_1.default.delete(this.rest, this.path, this.headers, params, this.envelope, function (err, body, headers, unpacked, statusCode) {
            _this.handlePage(err, body, headers, unpacked, statusCode, callback);
        });
    };
    PaginatedResource.prototype.post = function (params, body, callback) {
        var _this = this;
        resource_1.default.post(this.rest, this.path, body, this.headers, params, this.envelope, function (err, responseBody, headers, unpacked, statusCode) {
            if (callback) {
                _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
            }
        });
    };
    PaginatedResource.prototype.put = function (params, body, callback) {
        var _this = this;
        resource_1.default.put(this.rest, this.path, body, this.headers, params, this.envelope, function (err, responseBody, headers, unpacked, statusCode) {
            if (callback) {
                _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
            }
        });
    };
    PaginatedResource.prototype.patch = function (params, body, callback) {
        var _this = this;
        resource_1.default.patch(this.rest, this.path, body, this.headers, params, this.envelope, function (err, responseBody, headers, unpacked, statusCode) {
            if (callback) {
                _this.handlePage(err, responseBody, headers, unpacked, statusCode, callback);
            }
        });
    };
    PaginatedResource.prototype.handlePage = function (err, body, headers, unpacked, statusCode, callback) {
        if (err && returnErrOnly(err, body, this.useHttpPaginatedResponse)) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'PaginatedResource.handlePage()', 'Unexpected error getting resource: err = ' + Utils.inspectError(err));
            callback === null || callback === void 0 ? void 0 : callback(err);
            return;
        }
        var items, linkHeader, relParams;
        try {
            items = this.bodyHandler(body, headers || {}, unpacked);
        }
        catch (e) {
            /* If we got an error, the failure to parse the body is almost certainly
             * due to that, so callback with that in preference over the parse error */
            callback === null || callback === void 0 ? void 0 : callback(err || e);
            return;
        }
        if (headers && (linkHeader = headers['Link'] || headers['link'])) {
            relParams = parseRelLinks(linkHeader);
        }
        if (this.useHttpPaginatedResponse) {
            callback(null, new HttpPaginatedResponse(this, items, headers || {}, statusCode, relParams, err));
        }
        else {
            callback(null, new PaginatedResult(this, items, relParams));
        }
    };
    return PaginatedResource;
}());
var PaginatedResult = /** @class */ (function () {
    function PaginatedResult(resource, items, relParams) {
        var _this = this;
        this.resource = resource;
        this.items = items;
        var self = this;
        if (relParams) {
            if ('first' in relParams) {
                this.first = function (callback) {
                    if (!callback && self.resource.rest.options.promises) {
                        return Utils.promisify(self, 'first', []);
                    }
                    self.get(relParams.first, callback);
                };
            }
            if ('current' in relParams) {
                this.current = function (callback) {
                    if (!callback && self.resource.rest.options.promises) {
                        return Utils.promisify(self, 'current', []);
                    }
                    self.get(relParams.current, callback);
                };
            }
            this.next = function (callback) {
                if (!callback && self.resource.rest.options.promises) {
                    return Utils.promisify(self, 'next', []);
                }
                if ('next' in relParams) {
                    self.get(relParams.next, callback);
                }
                else {
                    callback(null);
                }
            };
            this.hasNext = function () {
                return 'next' in relParams;
            };
            this.isLast = function () {
                var _a;
                return !((_a = _this.hasNext) === null || _a === void 0 ? void 0 : _a.call(_this));
            };
        }
    }
    /* We assume that only the initial request can be a POST, and that accessing
     * the rest of a multipage set of results can always be done with GET */
    PaginatedResult.prototype.get = function (params, callback) {
        var res = this.resource;
        resource_1.default.get(res.rest, res.path, res.headers, params, res.envelope, function (err, body, headers, unpacked, statusCode) {
            res.handlePage(err, body, headers, unpacked, statusCode, callback);
        });
    };
    return PaginatedResult;
}());
exports.PaginatedResult = PaginatedResult;
var HttpPaginatedResponse = /** @class */ (function (_super) {
    tslib_1.__extends(HttpPaginatedResponse, _super);
    function HttpPaginatedResponse(resource, items, headers, statusCode, relParams, err) {
        var _this = _super.call(this, resource, items, relParams) || this;
        _this.statusCode = statusCode;
        _this.success = statusCode < 300 && statusCode >= 200;
        _this.headers = headers;
        _this.errorCode = err && err.code;
        _this.errorMessage = err && err.message;
        return _this;
    }
    HttpPaginatedResponse.prototype.toJSON = function () {
        return {
            items: this.items,
            statusCode: this.statusCode,
            success: this.success,
            headers: this.headers,
            errorCode: this.errorCode,
            errorMessage: this.errorMessage,
        };
    };
    return HttpPaginatedResponse;
}(PaginatedResult));
exports.HttpPaginatedResponse = HttpPaginatedResponse;
exports.default = PaginatedResource;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isRetriable = void 0;
var tslib_1 = __webpack_require__(0);
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var ConnectionErrorCodes = {
    DISCONNECTED: 80003,
    SUSPENDED: 80002,
    FAILED: 80000,
    CLOSING: 80017,
    CLOSED: 80017,
    UNKNOWN_CONNECTION_ERR: 50002,
    UNKNOWN_CHANNEL_ERR: 50001,
};
var ConnectionErrors = {
    disconnected: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 400,
            code: ConnectionErrorCodes.DISCONNECTED,
            message: 'Connection to server temporarily unavailable',
        });
    },
    suspended: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 400,
            code: ConnectionErrorCodes.SUSPENDED,
            message: 'Connection to server unavailable',
        });
    },
    failed: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 400,
            code: ConnectionErrorCodes.FAILED,
            message: 'Connection failed or disconnected by server',
        });
    },
    closing: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 400,
            code: ConnectionErrorCodes.CLOSING,
            message: 'Connection closing',
        });
    },
    closed: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 400,
            code: ConnectionErrorCodes.CLOSED,
            message: 'Connection closed',
        });
    },
    unknownConnectionErr: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 500,
            code: ConnectionErrorCodes.UNKNOWN_CONNECTION_ERR,
            message: 'Internal connection error',
        });
    },
    unknownChannelErr: function () {
        return errorinfo_1.default.fromValues({
            statusCode: 500,
            code: ConnectionErrorCodes.UNKNOWN_CONNECTION_ERR,
            message: 'Internal channel error',
        });
    },
};
function isRetriable(err) {
    if (!err.statusCode || !err.code || err.statusCode >= 500) {
        return true;
    }
    return Object.values(ConnectionErrorCodes).includes(err.code);
}
exports.isRetriable = isRetriable;
exports.default = ConnectionErrors;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var XHRStates;
(function (XHRStates) {
    XHRStates[XHRStates["REQ_SEND"] = 0] = "REQ_SEND";
    XHRStates[XHRStates["REQ_RECV"] = 1] = "REQ_RECV";
    XHRStates[XHRStates["REQ_RECV_POLL"] = 2] = "REQ_RECV_POLL";
    XHRStates[XHRStates["REQ_RECV_STREAM"] = 3] = "REQ_RECV_STREAM";
})(XHRStates || (XHRStates = {}));
exports.default = XHRStates;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(5), __webpack_require__(58), __webpack_require__(11), __webpack_require__(40), __webpack_require__(32), __webpack_require__(24), __webpack_require__(27), __webpack_require__(28), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var Multicaster = /** @class */ (function () {
    // Private constructor; use static Multicaster.create instead
    function Multicaster(members) {
        this.members = members || [];
    }
    Multicaster.prototype.call = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, _b = this.members; _a < _b.length; _a++) {
            var member = _b[_a];
            if (member) {
                try {
                    member.apply(void 0, args);
                }
                catch (e) {
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Multicaster multiple callback handler', 'Unexpected exception: ' + e + '; stack = ' + e.stack);
                }
            }
        }
    };
    Multicaster.prototype.push = function () {
        var _a;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        (_a = this.members).push.apply(_a, args);
    };
    Multicaster.create = function (members) {
        var instance = new Multicaster(members);
        return Object.assign(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return instance.call.apply(instance, args);
        }, {
            push: function (fn) { return instance.push(fn); },
        });
    };
    return Multicaster;
}());
exports.default = Multicaster;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSuccessCode = void 0;
var HttpStatusCodes;
(function (HttpStatusCodes) {
    HttpStatusCodes[HttpStatusCodes["Success"] = 200] = "Success";
    HttpStatusCodes[HttpStatusCodes["NoContent"] = 204] = "NoContent";
    HttpStatusCodes[HttpStatusCodes["BadRequest"] = 400] = "BadRequest";
    HttpStatusCodes[HttpStatusCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpStatusCodes[HttpStatusCodes["Forbidden"] = 403] = "Forbidden";
    HttpStatusCodes[HttpStatusCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpStatusCodes[HttpStatusCodes["InternalServerError"] = 500] = "InternalServerError";
})(HttpStatusCodes || (HttpStatusCodes = {}));
function isSuccessCode(statusCode) {
    return statusCode >= HttpStatusCodes.Success && statusCode < HttpStatusCodes.BadRequest;
}
exports.isSuccessCode = isSuccessCode;
exports.default = HttpStatusCodes;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(20));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var actions = protocolmessage_1.default.Action;
var closeMessage = protocolmessage_1.default.fromValues({ action: actions.CLOSE });
var disconnectMessage = protocolmessage_1.default.fromValues({ action: actions.DISCONNECT });
/*
 * Transport instances inherit from EventEmitter and emit the following events:
 *
 * event name       data
 * closed           error
 * failed           error
 * disposed
 * connected        null error, connectionSerial, connectionId, connectionDetails
 * event            channel message object
 */
var Transport = /** @class */ (function (_super) {
    tslib_1.__extends(Transport, _super);
    function Transport(connectionManager, auth, params, forceJsonProtocol) {
        var _this = _super.call(this) || this;
        if (forceJsonProtocol) {
            params.format = undefined;
            params.heartbeats = true;
        }
        _this.connectionManager = connectionManager;
        connectionManager.registerProposedTransport(_this);
        _this.auth = auth;
        _this.params = params;
        _this.timeouts = params.options.timeouts;
        _this.format = params.format;
        _this.isConnected = false;
        _this.isFinished = false;
        _this.isDisposed = false;
        _this.maxIdleInterval = null;
        _this.idleTimer = null;
        _this.lastActivity = null;
        return _this;
    }
    Transport.prototype.connect = function () { };
    Transport.prototype.close = function () {
        if (this.isConnected) {
            this.requestClose();
        }
        this.finish('closed', connectionerrors_1.default.closed());
    };
    Transport.prototype.disconnect = function (err) {
        /* Used for network/transport issues that need to result in the transport
         * being disconnected, but should not transition the connection to 'failed' */
        if (this.isConnected) {
            this.requestDisconnect();
        }
        this.finish('disconnected', err || connectionerrors_1.default.disconnected());
    };
    Transport.prototype.fail = function (err) {
        /* Used for client-side-detected fatal connection issues */
        if (this.isConnected) {
            this.requestDisconnect();
        }
        this.finish('failed', err || connectionerrors_1.default.failed());
    };
    Transport.prototype.finish = function (event, err) {
        var _a;
        if (this.isFinished) {
            return;
        }
        this.isFinished = true;
        this.isConnected = false;
        this.maxIdleInterval = null;
        clearTimeout((_a = this.idleTimer) !== null && _a !== void 0 ? _a : undefined);
        this.idleTimer = null;
        this.emit(event, err);
        this.dispose();
    };
    Transport.prototype.onProtocolMessage = function (message) {
        if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Transport.onProtocolMessage()', 'received on ' +
                this.shortName +
                ': ' +
                protocolmessage_1.default.stringify(message) +
                '; connectionId = ' +
                this.connectionManager.connectionId);
        }
        this.onActivity();
        switch (message.action) {
            case actions.HEARTBEAT:
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Transport.onProtocolMessage()', this.shortName + ' heartbeat; connectionId = ' + this.connectionManager.connectionId);
                this.emit('heartbeat', message.id);
                break;
            case actions.CONNECTED:
                this.onConnect(message);
                this.emit('connected', message.error, message.connectionId, message.connectionDetails, message);
                break;
            case actions.CLOSED:
                this.onClose(message);
                break;
            case actions.DISCONNECTED:
                this.onDisconnect(message);
                break;
            case actions.ACK:
                this.emit('ack', message.msgSerial, message.count);
                break;
            case actions.NACK:
                this.emit('nack', message.msgSerial, message.count, message.error);
                break;
            case actions.SYNC:
                this.connectionManager.onChannelMessage(message, this);
                break;
            case actions.ACTIVATE:
                // Ignored.
                break;
            case actions.AUTH:
                this.auth.authorize(function (err) {
                    if (err) {
                        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Transport.onProtocolMessage()', 'Ably requested re-authentication, but unable to obtain a new token: ' + Utils.inspectError(err));
                    }
                });
                break;
            case actions.ERROR:
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.onProtocolMessage()', 'received error action; connectionId = ' +
                    this.connectionManager.connectionId +
                    '; err = ' +
                    platform_1.default.Config.inspect(message.error) +
                    (message.channel ? ', channel: ' + message.channel : ''));
                if (message.channel === undefined) {
                    this.onFatalError(message);
                    break;
                }
                /* otherwise it's a channel-specific error, so handle it in the channel */
                this.connectionManager.onChannelMessage(message, this);
                break;
            default:
                /* all other actions are channel-specific */
                this.connectionManager.onChannelMessage(message, this);
        }
    };
    Transport.prototype.onConnect = function (message) {
        this.isConnected = true;
        if (!message.connectionDetails) {
            throw new Error('Transport.onConnect(): Connect message recieved without connectionDetails');
        }
        var maxPromisedIdle = message.connectionDetails.maxIdleInterval;
        if (maxPromisedIdle) {
            this.maxIdleInterval = maxPromisedIdle + this.timeouts.realtimeRequestTimeout;
            this.onActivity();
        }
        /* else Realtime declines to guarantee any maximum idle interval - CD2h */
    };
    Transport.prototype.onDisconnect = function (message) {
        /* Used for when the server has disconnected the client (usually with a
         * DISCONNECTED action) */
        var err = message && message.error;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.onDisconnect()', 'err = ' + Utils.inspectError(err));
        this.finish('disconnected', err);
    };
    Transport.prototype.onFatalError = function (message) {
        /* On receipt of a fatal connection error, we can assume that the server
         * will close the connection and the transport, and do not need to request
         * a disconnection - RTN15i */
        var err = message && message.error;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.onFatalError()', 'err = ' + Utils.inspectError(err));
        this.finish('failed', err);
    };
    Transport.prototype.onClose = function (message) {
        var err = message && message.error;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.onClose()', 'err = ' + Utils.inspectError(err));
        this.finish('closed', err);
    };
    Transport.prototype.requestClose = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.requestClose()', '');
        this.send(closeMessage);
    };
    Transport.prototype.requestDisconnect = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.requestDisconnect()', '');
        this.send(disconnectMessage);
    };
    Transport.prototype.ping = function (id) {
        var msg = { action: protocolmessage_1.default.Action.HEARTBEAT };
        if (id)
            msg.id = id;
        this.send(protocolmessage_1.default.fromValues(msg));
    };
    Transport.prototype.dispose = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.dispose()', '');
        this.isDisposed = true;
        this.off();
    };
    Transport.prototype.onActivity = function () {
        if (!this.maxIdleInterval) {
            return;
        }
        this.lastActivity = this.connectionManager.lastActivity = Utils.now();
        this.setIdleTimer(this.maxIdleInterval + 100);
    };
    Transport.prototype.setIdleTimer = function (timeout) {
        var _this = this;
        if (!this.idleTimer) {
            this.idleTimer = setTimeout(function () {
                _this.onIdleTimerExpire();
            }, timeout);
        }
    };
    Transport.prototype.onIdleTimerExpire = function () {
        if (!this.lastActivity || !this.maxIdleInterval) {
            throw new Error('Transport.onIdleTimerExpire(): lastActivity/maxIdleInterval not set');
        }
        this.idleTimer = null;
        var sinceLast = Utils.now() - this.lastActivity;
        var timeRemaining = this.maxIdleInterval - sinceLast;
        if (timeRemaining <= 0) {
            var msg = 'No activity seen from realtime in ' + sinceLast + 'ms; assuming connection has dropped';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Transport.onIdleTimerExpire()', msg);
            this.disconnect(new errorinfo_1.default(msg, 80003, 408));
        }
        else {
            this.setIdleTimer(timeRemaining + 100);
        }
    };
    Transport.tryConnect = function (transportCtor, connectionManager, auth, transportParams, callback) {
        var transport = new transportCtor(connectionManager, auth, transportParams);
        var transportAttemptTimer;
        var errorCb = function (err) {
            clearTimeout(transportAttemptTimer);
            callback({ event: this.event, error: err });
        };
        var realtimeRequestTimeout = connectionManager.options.timeouts.realtimeRequestTimeout;
        transportAttemptTimer = setTimeout(function () {
            transport.off(['preconnect', 'disconnected', 'failed']);
            transport.dispose();
            errorCb.call({ event: 'disconnected' }, new errorinfo_1.default('Timeout waiting for transport to indicate itself viable', 50000, 500));
        }, realtimeRequestTimeout);
        transport.on(['failed', 'disconnected'], errorCb);
        transport.on('preconnect', function () {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Transport.tryConnect()', 'viable transport ' + transport);
            clearTimeout(transportAttemptTimer);
            transport.off(['failed', 'disconnected'], errorCb);
            callback(null, transport);
        });
        transport.connect();
    };
    return Transport;
}(eventemitter_1.default));
exports.default = Transport;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(40), __webpack_require__(24));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            var block;

	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(27));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            var block;

	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            var modeCreator;

	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            var finalProcessedBlocks;

	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            var wordArray;

	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            var salt;

	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Request = exports.createRequest = void 0;
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var comettransport_1 = tslib_1.__importDefault(__webpack_require__(12));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var errorinfo_1 = __webpack_require__(4);
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var XHRStates_1 = tslib_1.__importDefault(__webpack_require__(21));
// Workaround for salesforce lightning locker compatibility
var globalObject = Utils.getGlobalObject();
var noop = function () { };
/* Can't just use window.Ably, as that won't exist if using the commonjs version. */
var _ = (globalObject._ablyjs_jsonp = {});
/* express strips out parantheses from the callback!
 * Kludge to still alow its responses to work, while not keeping the
 * function form for normal use and not cluttering window.Ably
 * https://github.com/expressjs/express/blob/5b4d4b4ab1324743534fbcd4709f4e75bb4b4e9d/lib/response.js#L305
 */
_._ = function (id) {
    return _['_' + id] || noop;
};
var idCounter = 1;
var shortName = 'jsonp';
function createRequest(uri, headers, params, body, requestMode, timeouts, method) {
    /* JSONP requests are used either with the context being a realtime
     * transport, or with timeouts passed in (for when used by a rest client),
     * or completely standalone.  Use the appropriate timeouts in each case */
    timeouts = timeouts || defaults_1.default.TIMEOUTS;
    return new Request(undefined, uri, headers, Utils.copy(params), body, requestMode, timeouts, method);
}
exports.createRequest = createRequest;
var JSONPTransport = /** @class */ (function (_super) {
    tslib_1.__extends(JSONPTransport, _super);
    function JSONPTransport(connectionManager, auth, params) {
        var _this = _super.call(this, connectionManager, auth, params) || this;
        _this.shortName = shortName;
        params.stream = false;
        return _this;
    }
    JSONPTransport.isAvailable = function () {
        return platform_1.default.Config.jsonpSupported && platform_1.default.Config.allowComet;
    };
    JSONPTransport.prototype.toString = function () {
        return 'JSONPTransport; uri=' + this.baseUri + '; isConnected=' + this.isConnected;
    };
    JSONPTransport.prototype.createRequest = function (uri, headers, params, body, requestMode, timeouts, method) {
        /* JSONP requests are used either with the context being a realtime
         * transport, or with timeouts passed in (for when used by a rest client),
         * or completely standalone.  Use the appropriate timeouts in each case */
        timeouts = (this === null || this === void 0 ? void 0 : this.timeouts) || timeouts || defaults_1.default.TIMEOUTS;
        return createRequest(uri, headers, params, body, requestMode, timeouts, method);
    };
    return JSONPTransport;
}(comettransport_1.default));
var Request = /** @class */ (function (_super) {
    tslib_1.__extends(Request, _super);
    function Request(id, uri, headers, params, body, requestMode, timeouts, method) {
        var _this = _super.call(this) || this;
        if (id === undefined)
            id = idCounter++;
        _this.id = id;
        _this.uri = uri;
        _this.params = params || {};
        _this.params.rnd = Utils.cheapRandStr();
        if (headers) {
            /* JSONP doesn't allow headers. Cherry-pick a couple to turn into qs params */
            if (headers['X-Ably-Version'])
                _this.params.v = headers['X-Ably-Version'];
            if (headers['X-Ably-Lib'])
                _this.params.lib = headers['X-Ably-Lib'];
        }
        _this.body = body;
        _this.method = method;
        _this.requestMode = requestMode;
        _this.timeouts = timeouts;
        _this.requestComplete = false;
        return _this;
    }
    Request.prototype.exec = function () {
        var _this = this;
        var id = this.id, body = this.body, method = this.method, uri = this.uri, params = this.params;
        params.callback = '_ablyjs_jsonp._(' + id + ')';
        params.envelope = 'jsonp';
        if (body) {
            params.body = body;
        }
        if (method && method !== 'get') {
            params.method = method;
        }
        var script = (this.script = document.createElement('script'));
        var src = uri + Utils.toQueryString(params);
        script.src = src;
        if (script.src.split('/').slice(-1)[0] !== src.split('/').slice(-1)[0]) {
            /* The src has been truncated. Can't abort, but can at least emit an
             * error so the user knows what's gone wrong. (Can't compare strings
             * directly as src may have a port, script.src won't) */
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'JSONP Request.exec()', 'Warning: the browser appears to have truncated the script URI. This will likely result in the request failing due to an unparseable body param');
        }
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        script.onerror = function (err) {
            _this.complete(new errorinfo_1.PartialErrorInfo('JSONP script error (event: ' + platform_1.default.Config.inspect(err) + ')', null, 400));
        };
        _['_' + id] = function (message) {
            if (message.statusCode) {
                /* Handle as enveloped jsonp, as all jsonp transport uses should be */
                var response = message.response;
                if (message.statusCode == 204) {
                    _this.complete(null, null, null, message.statusCode);
                }
                else if (!response) {
                    _this.complete(new errorinfo_1.PartialErrorInfo('Invalid server response: no envelope detected', null, 500));
                }
                else if (message.statusCode < 400 || Utils.isArray(response)) {
                    /* If response is an array, it's an array of protocol messages -- even if
                     * it contains an error action (hence the nonsuccess statuscode), we can
                     * consider the request to have succeeded, just pass it on to
                     * onProtocolMessage to decide what to do */
                    _this.complete(null, response, message.headers, message.statusCode);
                }
                else {
                    var err = response.error || new errorinfo_1.PartialErrorInfo('Error response received from server', null, message.statusCode);
                    _this.complete(err);
                }
            }
            else {
                /* Handle as non-enveloped -- as will be eg from a customer's authUrl server */
                _this.complete(null, message);
            }
        };
        var timeout = this.requestMode == XHRStates_1.default.REQ_SEND ? this.timeouts.httpRequestTimeout : this.timeouts.recvTimeout;
        this.timer = setTimeout(this.abort.bind(this), timeout);
        var head = document.getElementsByTagName('head')[0];
        head.insertBefore(script, head.firstChild);
    };
    Request.prototype.complete = function (err, body, headers, statusCode) {
        headers = headers || {};
        if (!this.requestComplete) {
            this.requestComplete = true;
            var contentType = void 0;
            if (body) {
                contentType = typeof body == 'string' ? 'text/plain' : 'application/json';
                headers['content-type'] = contentType;
                this.emit('data', body);
            }
            this.emit('complete', err, body, headers, /* unpacked: */ true, statusCode);
            this.dispose();
        }
    };
    Request.prototype.abort = function () {
        this.dispose();
    };
    Request.prototype.dispose = function () {
        var timer = this.timer;
        if (timer) {
            clearTimeout(timer);
            this.timer = null;
        }
        var script = this.script;
        if (script.parentNode)
            script.parentNode.removeChild(script);
        delete _[this.id];
        this.emit('disposed');
    };
    return Request;
}(eventemitter_1.default));
exports.Request = Request;
function default_1(connectionManager) {
    globalObject.JSONPTransport = JSONPTransport;
    if (JSONPTransport.isAvailable()) {
        connectionManager.supportedTransports[shortName] = JSONPTransport;
    }
    return JSONPTransport;
}
exports.default = default_1;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var auth_1 = tslib_1.__importDefault(__webpack_require__(17));
var push_1 = tslib_1.__importDefault(__webpack_require__(46));
var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(19));
var channel_1 = tslib_1.__importDefault(__webpack_require__(33));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var stats_1 = tslib_1.__importDefault(__webpack_require__(49));
var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(18));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(15));
var resource_1 = tslib_1.__importDefault(__webpack_require__(14));
var noop = function () { };
var Rest = /** @class */ (function () {
    function Rest(options) {
        if (!options) {
            var msg = 'no options provided';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Rest()', msg);
            throw new Error(msg);
        }
        var optionsObj = defaults_1.default.objectifyOptions(options);
        if (optionsObj.log) {
            logger_1.default.setLog(optionsObj.log.level, optionsObj.log.handler);
        }
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Rest()', 'initialized with clientOptions ' + platform_1.default.Config.inspect(options));
        var normalOptions = (this.options = defaults_1.default.normaliseOptions(optionsObj));
        /* process options */
        if (normalOptions.key) {
            var keyMatch = normalOptions.key.match(/^([^:\s]+):([^:.\s]+)$/);
            if (!keyMatch) {
                var msg = 'invalid key parameter';
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Rest()', msg);
                throw new errorinfo_1.default(msg, 40400, 404);
            }
            normalOptions.keyName = keyMatch[1];
            normalOptions.keySecret = keyMatch[2];
        }
        if ('clientId' in normalOptions) {
            if (!(typeof normalOptions.clientId === 'string' || normalOptions.clientId === null))
                throw new errorinfo_1.default('clientId must be either a string or null', 40012, 400);
            else if (normalOptions.clientId === '*')
                throw new errorinfo_1.default('Can’t use "*" as a clientId as that string is reserved. (To change the default token request behaviour to use a wildcard clientId, use {defaultTokenParams: {clientId: "*"}})', 40012, 400);
        }
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Rest()', 'started; version = ' + defaults_1.default.version);
        this.baseUri = this.authority = function (host) {
            return defaults_1.default.getHttpScheme(normalOptions) + host + ':' + defaults_1.default.getPort(normalOptions, false);
        };
        this._currentFallback = null;
        this.serverTimeOffset = null;
        this.http = new platform_1.default.Http(normalOptions);
        this.auth = new auth_1.default(this, normalOptions);
        this.channels = new Channels(this);
        this.push = new push_1.default(this);
    }
    Rest.prototype.stats = function (params, callback) {
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.options.promises) {
                    return Utils.promisify(this, 'stats', [params]);
                }
                callback = noop;
            }
        }
        var headers = Utils.defaultGetHeaders(this.options), format = this.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.http.supportsLinkHeaders ? undefined : format;
        if (this.options.headers)
            Utils.mixin(headers, this.options.headers);
        new paginatedresource_1.default(this, '/stats', headers, envelope, function (body, headers, unpacked) {
            var statsValues = unpacked ? body : JSON.parse(body);
            for (var i = 0; i < statsValues.length; i++)
                statsValues[i] = stats_1.default.fromValues(statsValues[i]);
            return statsValues;
        }).get(params, callback);
    };
    Rest.prototype.time = function (params, callback) {
        var _this = this;
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.options.promises) {
                    return Utils.promisify(this, 'time', [params]);
                }
            }
        }
        var _callback = callback || noop;
        var headers = Utils.defaultGetHeaders(this.options);
        if (this.options.headers)
            Utils.mixin(headers, this.options.headers);
        var timeUri = function (host) {
            return _this.authority(host) + '/time';
        };
        this.http.do(HttpMethods_1.default.Get, this, timeUri, headers, null, params, function (err, res, headers, unpacked) {
            if (err) {
                _callback(err);
                return;
            }
            if (!unpacked)
                res = JSON.parse(res);
            var time = res[0];
            if (!time) {
                _callback(new errorinfo_1.default('Internal error (unexpected result type from GET /time)', 50000, 500));
                return;
            }
            /* calculate time offset only once for this device by adding to the prototype */
            _this.serverTimeOffset = time - Utils.now();
            _callback(null, time);
        });
    };
    Rest.prototype.request = function (method, path, params, body, customHeaders, callback) {
        var useBinary = this.options.useBinaryProtocol, encoder = useBinary ? platform_1.default.Config.msgpack.encode : JSON.stringify, decoder = useBinary ? platform_1.default.Config.msgpack.decode : JSON.parse, format = useBinary ? Utils.Format.msgpack : Utils.Format.json, envelope = this.http.supportsLinkHeaders ? undefined : format;
        params = params || {};
        var _method = method.toLowerCase();
        var headers = _method == 'get' ? Utils.defaultGetHeaders(this.options, format) : Utils.defaultPostHeaders(this.options, format);
        if (callback === undefined) {
            if (this.options.promises) {
                return Utils.promisify(this, 'request', [method, path, params, body, customHeaders]);
            }
            callback = noop;
        }
        if (typeof body !== 'string') {
            body = encoder(body);
        }
        if (this.options.headers) {
            Utils.mixin(headers, this.options.headers);
        }
        if (customHeaders) {
            Utils.mixin(headers, customHeaders);
        }
        var paginatedResource = new paginatedresource_1.default(this, path, headers, envelope, function (resbody, headers, unpacked) {
            return Utils.ensureArray(unpacked ? resbody : decoder(resbody));
        }, 
        /* useHttpPaginatedResponse: */ true);
        if (!Utils.arrIn(platform_1.default.Http.methods, _method)) {
            throw new errorinfo_1.default('Unsupported method ' + _method, 40500, 405);
        }
        if (Utils.arrIn(platform_1.default.Http.methodsWithBody, _method)) {
            paginatedResource[_method](params, body, callback);
        }
        else {
            paginatedResource[_method](params, callback);
        }
    };
    Rest.prototype.batchPublish = function (specOrSpecs, callbackArg) {
        if (callbackArg === undefined) {
            if (this.options.promises) {
                return Utils.promisify(this, 'batchPublish', [specOrSpecs]);
            }
            callbackArg = noop;
        }
        var callback = callbackArg;
        var requestBodyDTO;
        var singleSpecMode;
        if (Utils.isArray(specOrSpecs)) {
            requestBodyDTO = specOrSpecs;
            singleSpecMode = false;
        }
        else {
            requestBodyDTO = [specOrSpecs];
            singleSpecMode = true;
        }
        var format = this.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(this.options, format);
        if (this.options.headers)
            Utils.mixin(headers, this.options.headers);
        var requestBody = Utils.encodeBody(requestBodyDTO, format);
        resource_1.default.post(this, '/messages', requestBody, headers, { newBatchResponse: 'true' }, null, function (err, body, headers, unpacked) {
            if (err) {
                // TODO remove this type assertion after fixing https://github.com/ably/ably-js/issues/1405
                callback(err);
                return;
            }
            var batchResults = (unpacked ? body : Utils.decodeBody(body, format));
            // I don't love the below type assertions for `callback` but not sure how to avoid them
            if (singleSpecMode) {
                callback(null, batchResults[0]);
            }
            else {
                callback(null, batchResults);
            }
        });
    };
    Rest.prototype.batchPresence = function (channels, callbackArg) {
        if (callbackArg === undefined) {
            if (this.options.promises) {
                return Utils.promisify(this, 'batchPresence', [channels]);
            }
            callbackArg = noop;
        }
        var callback = callbackArg;
        var format = this.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(this.options, format);
        if (this.options.headers)
            Utils.mixin(headers, this.options.headers);
        var channelsParam = channels.join(',');
        resource_1.default.get(this, '/presence', headers, { newBatchResponse: 'true', channels: channelsParam }, null, function (err, body, headers, unpacked) {
            if (err) {
                // TODO remove this type assertion after fixing https://github.com/ably/ably-js/issues/1405
                callback(err);
                return;
            }
            var batchResult = (unpacked ? body : Utils.decodeBody(body, format));
            callback(null, batchResult);
        });
    };
    Rest.prototype.setLog = function (logOptions) {
        logger_1.default.setLog(logOptions.level, logOptions.handler);
    };
    Rest.Promise = function (options) {
        options = defaults_1.default.objectifyOptions(options);
        options.promises = true;
        return new Rest(options);
    };
    Rest.Callbacks = Rest;
    Rest.Platform = platform_1.default;
    Rest.Message = message_1.default;
    Rest.PresenceMessage = presencemessage_1.default;
    return Rest;
}());
var Channels = /** @class */ (function () {
    function Channels(rest) {
        this.rest = rest;
        this.all = Object.create(null);
    }
    Channels.prototype.get = function (name, channelOptions) {
        name = String(name);
        var channel = this.all[name];
        if (!channel) {
            this.all[name] = channel = new channel_1.default(this.rest, name, channelOptions);
        }
        else if (channelOptions) {
            channel.setOptions(channelOptions);
        }
        return channel;
    };
    /* Included to support certain niche use-cases; most users should ignore this.
     * Please do not use this unless you know what you're doing */
    Channels.prototype.release = function (name) {
        delete this.all[String(name)];
    };
    return Channels;
}());
exports.default = Rest;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Utf8;

}));

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var presence_1 = tslib_1.__importDefault(__webpack_require__(34));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(19));
var resource_1 = tslib_1.__importDefault(__webpack_require__(14));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
function noop() { }
var MSG_ID_ENTROPY_BYTES = 9;
function allEmptyIds(messages) {
    return Utils.arrEvery(messages, function (message) {
        return !message.id;
    });
}
function normaliseChannelOptions(options) {
    var channelOptions = options || {};
    if (channelOptions.cipher) {
        if (!platform_1.default.Crypto)
            throw new Error('Encryption not enabled; use ably.encryption.js instead');
        var cipher = platform_1.default.Crypto.getCipher(channelOptions.cipher);
        channelOptions.cipher = cipher.cipherParams;
        channelOptions.channelCipher = cipher.cipher;
    }
    else if ('cipher' in channelOptions) {
        /* Don't deactivate an existing cipher unless options
         * has a 'cipher' key that's falsey */
        channelOptions.cipher = undefined;
        channelOptions.channelCipher = null;
    }
    return channelOptions;
}
var Channel = /** @class */ (function (_super) {
    tslib_1.__extends(Channel, _super);
    function Channel(rest, name, channelOptions) {
        var _this = _super.call(this) || this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Channel()', 'started; name = ' + name);
        _this.rest = rest;
        _this.name = name;
        _this.basePath = '/channels/' + encodeURIComponent(name);
        _this.presence = new presence_1.default(_this);
        _this.channelOptions = normaliseChannelOptions(channelOptions);
        return _this;
    }
    Channel.prototype.setOptions = function (options) {
        this.channelOptions = normaliseChannelOptions(options);
    };
    Channel.prototype.history = function (params, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Channel.history()', 'channel = ' + this.name);
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.rest.options.promises) {
                    return Utils.promisify(this, 'history', arguments);
                }
                callback = noop;
            }
        }
        this._history(params, callback);
    };
    Channel.prototype._history = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        var options = this.channelOptions;
        new paginatedresource_1.default(rest, this.basePath + '/messages', headers, envelope, function (body, headers, unpacked) {
            return message_1.default.fromResponseBody(body, options, unpacked ? undefined : format);
        }).get(params, callback);
    };
    Channel.prototype.publish = function () {
        var _this = this;
        var argCount = arguments.length, first = arguments[0], second = arguments[1];
        var callback = arguments[argCount - 1];
        var messages;
        var params;
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'publish', arguments);
            }
            callback = noop;
        }
        if (typeof first === 'string' || first === null) {
            /* (name, data, ...) */
            messages = [message_1.default.fromValues({ name: first, data: second })];
            params = arguments[2];
        }
        else if (Utils.isObject(first)) {
            messages = [message_1.default.fromValues(first)];
            params = arguments[1];
        }
        else if (Utils.isArray(first)) {
            messages = message_1.default.fromValuesArray(first);
            params = arguments[1];
        }
        else {
            throw new errorinfo_1.default('The single-argument form of publish() expects a message object or an array of message objects', 40013, 400);
        }
        if (typeof params !== 'object' || !params) {
            /* No params supplied (so after-message argument is just the callback or undefined) */
            params = {};
        }
        var rest = this.rest, options = rest.options, format = options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, idempotentRestPublishing = rest.options.idempotentRestPublishing, headers = Utils.defaultPostHeaders(rest.options, format);
        if (options.headers)
            Utils.mixin(headers, options.headers);
        if (idempotentRestPublishing && allEmptyIds(messages)) {
            var msgIdBase_1 = Utils.randomString(MSG_ID_ENTROPY_BYTES);
            Utils.arrForEach(messages, function (message, index) {
                message.id = msgIdBase_1 + ':' + index.toString();
            });
        }
        message_1.default.encodeArray(messages, this.channelOptions, function (err) {
            if (err) {
                callback(err);
                return;
            }
            /* RSL1i */
            var size = message_1.default.getMessagesSize(messages), maxMessageSize = options.maxMessageSize;
            if (size > maxMessageSize) {
                callback(new errorinfo_1.default('Maximum size of messages that can be published at once exceeded ( was ' +
                    size +
                    ' bytes; limit is ' +
                    maxMessageSize +
                    ' bytes)', 40009, 400));
                return;
            }
            _this._publish(message_1.default.serialize(messages, format), headers, params, callback);
        });
    };
    Channel.prototype._publish = function (requestBody, headers, params, callback) {
        resource_1.default.post(this.rest, this.basePath + '/messages', requestBody, headers, params, null, callback);
    };
    Channel.prototype.status = function (callback) {
        if (typeof callback !== 'function' && this.rest.options.promises) {
            return Utils.promisify(this, 'status', []);
        }
        var format = this.rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json;
        var headers = Utils.defaultPostHeaders(this.rest.options, format);
        resource_1.default.get(this.rest, this.basePath, headers, {}, format, callback || noop);
    };
    return Channel;
}(eventemitter_1.default));
exports.default = Channel;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(19));
var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(15));
function noop() { }
var Presence = /** @class */ (function (_super) {
    tslib_1.__extends(Presence, _super);
    function Presence(channel) {
        var _this = _super.call(this) || this;
        _this.channel = channel;
        _this.basePath = channel.basePath + '/presence';
        return _this;
    }
    Presence.prototype.get = function (params, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Presence.get()', 'channel = ' + this.channel.name);
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.channel.rest.options.promises) {
                    return Utils.promisify(this, 'get', arguments);
                }
                callback = noop;
            }
        }
        var rest = this.channel.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.channel.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        var options = this.channel.channelOptions;
        new paginatedresource_1.default(rest, this.basePath, headers, envelope, function (body, headers, unpacked) {
            return presencemessage_1.default.fromResponseBody(body, options, unpacked ? undefined : format);
        }).get(params, callback);
    };
    Presence.prototype.history = function (params, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Presence.history()', 'channel = ' + this.channel.name);
        return this._history(params, callback);
    };
    Presence.prototype._history = function (params, callback) {
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.channel.rest.options.promises) {
                    return Utils.promisify(this, '_history', [params]);
                }
                callback = noop;
            }
        }
        var rest = this.channel.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.channel.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        var options = this.channel.channelOptions;
        new paginatedresource_1.default(rest, this.basePath + '/history', headers, envelope, function (body, headers, unpacked) {
            return presencemessage_1.default.fromResponseBody(body, options, unpacked ? undefined : format);
        }).get(params, callback);
    };
    return Presence;
}(eventemitter_1.default));
exports.default = Presence;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportParams = void 0;
var tslib_1 = __webpack_require__(0);
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var protocol_1 = tslib_1.__importStar(__webpack_require__(52));
var defaults_1 = tslib_1.__importStar(__webpack_require__(8));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var messagequeue_1 = tslib_1.__importDefault(__webpack_require__(36));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var connectionstatechange_1 = tslib_1.__importDefault(__webpack_require__(37));
var connectionerrors_1 = tslib_1.__importStar(__webpack_require__(20));
var errorinfo_1 = tslib_1.__importStar(__webpack_require__(4));
var auth_1 = tslib_1.__importDefault(__webpack_require__(17));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var multicaster_1 = tslib_1.__importDefault(__webpack_require__(23));
var websockettransport_1 = tslib_1.__importDefault(__webpack_require__(53));
var transport_1 = tslib_1.__importDefault(__webpack_require__(26));
var HttpStatusCodes_1 = tslib_1.__importDefault(__webpack_require__(25));
var haveWebStorage = function () { var _a; return typeof platform_1.default.WebStorage !== 'undefined' && ((_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.localSupported); };
var haveSessionStorage = function () { var _a; return typeof platform_1.default.WebStorage !== 'undefined' && ((_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.sessionSupported); };
var actions = protocolmessage_1.default.Action;
var noop = function () { };
var transportPreferenceName = 'ably-transport-preference';
var sessionRecoveryName = 'ably-connection-recovery';
function getSessionRecoverData() {
    var _a, _b;
    return haveSessionStorage() && ((_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.getSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName));
}
function setSessionRecoverData(value) {
    var _a, _b;
    return haveSessionStorage() && ((_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.setSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName, value));
}
function clearSessionRecoverData() {
    var _a, _b;
    return haveSessionStorage() && ((_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.removeSession) === null || _b === void 0 ? void 0 : _b.call(_a, sessionRecoveryName));
}
function betterTransportThan(a, b) {
    return (Utils.arrIndexOf(platform_1.default.Defaults.transportPreferenceOrder, a.shortName) >
        Utils.arrIndexOf(platform_1.default.Defaults.transportPreferenceOrder, b.shortName));
}
function bundleWith(dest, src, maxSize) {
    var action;
    if (dest.channel !== src.channel) {
        /* RTL6d3 */
        return false;
    }
    if ((action = dest.action) !== actions.PRESENCE && action !== actions.MESSAGE) {
        /* RTL6d - can only bundle messages or presence */
        return false;
    }
    if (action !== src.action) {
        /* RTL6d4 */
        return false;
    }
    var kind = action === actions.PRESENCE ? 'presence' : 'messages', proposed = dest[kind].concat(src[kind]), size = message_1.default.getMessagesSize(proposed);
    if (size > maxSize) {
        /* RTL6d1 */
        return false;
    }
    if (!Utils.allSame(proposed, 'clientId')) {
        /* RTL6d2 */
        return false;
    }
    if (!Utils.arrEvery(proposed, function (msg) {
        return !msg.id;
    })) {
        /* RTL6d7 */
        return false;
    }
    /* we're good to go! */
    dest[kind] = proposed;
    return true;
}
function decodeRecoveryKey(recoveryKey) {
    try {
        return JSON.parse(recoveryKey);
    }
    catch (e) {
        return null;
    }
}
var TransportParams = /** @class */ (function () {
    function TransportParams(options, host, mode, connectionKey) {
        this.options = options;
        this.host = host;
        this.mode = mode;
        this.connectionKey = connectionKey;
        this.format = options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json;
    }
    TransportParams.prototype.getConnectParams = function (authParams) {
        var params = authParams ? Utils.copy(authParams) : {};
        var options = this.options;
        switch (this.mode) {
            case 'upgrade':
                params.upgrade = this.connectionKey;
                break;
            case 'resume':
                params.resume = this.connectionKey;
                break;
            case 'recover': {
                var recoveryContext = decodeRecoveryKey(options.recover);
                if (recoveryContext) {
                    params.recover = recoveryContext.connectionKey;
                }
                break;
            }
            default:
        }
        if (options.clientId !== undefined) {
            params.clientId = options.clientId;
        }
        if (options.echoMessages === false) {
            params.echo = 'false';
        }
        if (this.format !== undefined) {
            params.format = this.format;
        }
        if (this.stream !== undefined) {
            params.stream = this.stream;
        }
        if (this.heartbeats !== undefined) {
            params.heartbeats = this.heartbeats;
        }
        params.v = defaults_1.default.protocolVersion;
        params.agent = (0, defaults_1.getAgentString)(this.options);
        if (options.transportParams !== undefined) {
            Utils.mixin(params, options.transportParams);
        }
        return params;
    };
    TransportParams.prototype.toString = function () {
        var result = '[mode=' + this.mode;
        if (this.host) {
            result += ',host=' + this.host;
        }
        if (this.connectionKey) {
            result += ',connectionKey=' + this.connectionKey;
        }
        if (this.format) {
            result += ',format=' + this.format;
        }
        result += ']';
        return result;
    };
    return TransportParams;
}());
exports.TransportParams = TransportParams;
var ConnectionManager = /** @class */ (function (_super) {
    tslib_1.__extends(ConnectionManager, _super);
    function ConnectionManager(realtime, options) {
        var _this = _super.call(this) || this;
        _this.disconnectedRetryCount = 0;
        ConnectionManager.initTransports();
        _this.realtime = realtime;
        _this.options = options;
        var timeouts = options.timeouts;
        /* connectingTimeout: leave preferenceConnectTimeout (~6s) to try the
         * preference transport, then realtimeRequestTimeout (~10s) to establish
         * the base transport in case that fails */
        var connectingTimeout = timeouts.preferenceConnectTimeout + timeouts.realtimeRequestTimeout;
        _this.states = {
            initialized: {
                state: 'initialized',
                terminal: false,
                queueEvents: true,
                sendEvents: false,
                failState: 'disconnected',
            },
            connecting: {
                state: 'connecting',
                terminal: false,
                queueEvents: true,
                sendEvents: false,
                retryDelay: connectingTimeout,
                failState: 'disconnected',
            },
            connected: {
                state: 'connected',
                terminal: false,
                queueEvents: false,
                sendEvents: true,
                failState: 'disconnected',
            },
            synchronizing: {
                state: 'connected',
                terminal: false,
                queueEvents: true,
                sendEvents: false,
                forceQueueEvents: true,
                failState: 'disconnected',
            },
            disconnected: {
                state: 'disconnected',
                terminal: false,
                queueEvents: true,
                sendEvents: false,
                retryDelay: timeouts.disconnectedRetryTimeout,
                failState: 'disconnected',
            },
            suspended: {
                state: 'suspended',
                terminal: false,
                queueEvents: false,
                sendEvents: false,
                retryDelay: timeouts.suspendedRetryTimeout,
                failState: 'suspended',
            },
            closing: {
                state: 'closing',
                terminal: false,
                queueEvents: false,
                sendEvents: false,
                retryDelay: timeouts.realtimeRequestTimeout,
                failState: 'closed',
            },
            closed: { state: 'closed', terminal: true, queueEvents: false, sendEvents: false, failState: 'closed' },
            failed: { state: 'failed', terminal: true, queueEvents: false, sendEvents: false, failState: 'failed' },
        };
        _this.state = _this.states.initialized;
        _this.errorReason = null;
        _this.queuedMessages = new messagequeue_1.default();
        _this.msgSerial = 0;
        _this.connectionDetails = undefined;
        _this.connectionId = undefined;
        _this.connectionKey = undefined;
        _this.connectionStateTtl = timeouts.connectionStateTtl;
        _this.maxIdleInterval = null;
        _this.transports = Utils.intersect(options.transports || defaults_1.default.defaultTransports, ConnectionManager.supportedTransports);
        /* baseTransports selects the leftmost transport in the Defaults.baseTransportOrder list
         * that's both requested and supported. Normally this will be xhr_polling;
         * if xhr isn't supported it will be jsonp. If the user has forced a
         * transport, it'll just be that one. */
        _this.baseTransport = Utils.intersect(defaults_1.default.baseTransportOrder, _this.transports)[0];
        _this.upgradeTransports = Utils.intersect(_this.transports, defaults_1.default.upgradeTransports);
        _this.transportPreference = null;
        _this.httpHosts = defaults_1.default.getHosts(options);
        _this.activeProtocol = null;
        _this.proposedTransports = [];
        _this.pendingTransports = [];
        _this.host = null;
        _this.lastAutoReconnectAttempt = null;
        _this.lastActivity = null;
        _this.forceFallbackHost = false;
        _this.connectCounter = 0;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Realtime.ConnectionManager()', 'started');
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Realtime.ConnectionManager()', 'requested transports = [' + (options.transports || defaults_1.default.defaultTransports) + ']');
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Realtime.ConnectionManager()', 'available transports = [' + _this.transports + ']');
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Realtime.ConnectionManager()', 'http hosts = [' + _this.httpHosts + ']');
        if (!_this.transports.length) {
            var msg = 'no requested transports available';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'realtime.ConnectionManager()', msg);
            throw new Error(msg);
        }
        var addEventListener = platform_1.default.Config.addEventListener;
        if (addEventListener) {
            /* intercept close event in browser to persist connection id if requested */
            if (haveSessionStorage() && typeof options.recover === 'function') {
                /* Usually can't use bind as not supported in IE8, but IE doesn't support sessionStorage, so... */
                addEventListener('beforeunload', _this.persistConnection.bind(_this));
            }
            if (options.closeOnUnload === true) {
                addEventListener('beforeunload', function () {
                    logger_1.default.logAction(logger_1.default.LOG_MAJOR, 'Realtime.ConnectionManager()', 'beforeunload event has triggered the connection to close as closeOnUnload is true');
                    _this.requestState({ state: 'closing' });
                });
            }
            /* Listen for online and offline events */
            addEventListener('online', function () {
                if (_this.state == _this.states.disconnected || _this.state == _this.states.suspended) {
                    logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager caught browser ‘online’ event', 'reattempting connection');
                    _this.requestState({ state: 'connecting' });
                }
                else if (_this.state == _this.states.connecting) {
                    // RTN20c: if 'online' event recieved while CONNECTING, abandon connection attempt and retry
                    _this.pendingTransports.forEach(function (transport) {
                        // Detach transport listeners to avoid connection state side effects from calling dispose
                        transport.off();
                    });
                    _this.disconnectAllTransports();
                    _this.startConnect();
                }
            });
            addEventListener('offline', function () {
                if (_this.state == _this.states.connected) {
                    logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager caught browser ‘offline’ event', 'disconnecting active transport');
                    // Not sufficient to just go to the 'disconnected' state, want to
                    // force all transports to reattempt the connection. Will immediately
                    // retry.
                    _this.disconnectAllTransports();
                }
            });
        }
        return _this;
    }
    ConnectionManager.initTransports = function () {
        (0, websockettransport_1.default)(ConnectionManager);
        Utils.arrForEach(platform_1.default.Transports, function (initFn) {
            initFn(ConnectionManager);
        });
    };
    ConnectionManager.prototype.createTransportParams = function (host, mode) {
        return new TransportParams(this.options, host, mode, this.connectionKey);
    };
    ConnectionManager.prototype.getTransportParams = function (callback) {
        var _this = this;
        var decideMode = function (modeCb) {
            if (_this.connectionKey) {
                modeCb('resume');
                return;
            }
            if (typeof _this.options.recover === 'string') {
                modeCb('recover');
                return;
            }
            var recoverFn = _this.options.recover, lastSessionData = getSessionRecoverData();
            if (lastSessionData && typeof recoverFn === 'function') {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.getTransportParams()', 'Calling clientOptions-provided recover function with last session data');
                recoverFn(lastSessionData, function (shouldRecover) {
                    if (shouldRecover) {
                        _this.options.recover = lastSessionData.recoveryKey;
                        modeCb('recover');
                    }
                    else {
                        modeCb('clean');
                    }
                });
                return;
            }
            modeCb('clean');
        };
        decideMode(function (mode) {
            var transportParams = _this.createTransportParams(null, mode);
            if (mode === 'recover') {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.getTransportParams()', 'Transport recovery mode = recover; recoveryKey = ' + _this.options.recover);
                var recoveryContext = decodeRecoveryKey(_this.options.recover);
                if (recoveryContext) {
                    _this.msgSerial = recoveryContext.msgSerial;
                }
            }
            else {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.getTransportParams()', 'Transport params = ' + transportParams.toString());
            }
            callback(transportParams);
        });
    };
    /**
     * Attempt to connect using a given transport
     * @param transportParams
     * @param candidate, the transport to try
     * @param callback
     */
    ConnectionManager.prototype.tryATransport = function (transportParams, candidate, callback) {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.tryATransport()', 'trying ' + candidate);
        transport_1.default.tryConnect(ConnectionManager.supportedTransports[candidate], this, this.realtime.auth, transportParams, function (wrappedErr, transport) {
            var state = _this.state;
            if (state == _this.states.closing || state == _this.states.closed || state == _this.states.failed) {
                if (transport) {
                    logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.tryATransport()', 'connection ' + state.state + ' while we were attempting the transport; closing ' + transport);
                    transport.close();
                }
                callback(true);
                return;
            }
            if (wrappedErr) {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.tryATransport()', 'transport ' + candidate + ' ' + wrappedErr.event + ', err: ' + wrappedErr.error.toString());
                /* Comet transport onconnect token errors can be dealt with here.
                 * Websocket ones only happen after the transport claims to be viable,
                 * so are dealt with as non-onconnect token errors */
                if (auth_1.default.isTokenErr(wrappedErr.error) &&
                    !(_this.errorReason && auth_1.default.isTokenErr(_this.errorReason))) {
                    _this.errorReason = wrappedErr.error;
                    /* re-get a token and try again */
                    _this.realtime.auth._forceNewToken(null, null, function (err) {
                        if (err) {
                            _this.actOnErrorFromAuthorize(err);
                            return;
                        }
                        _this.tryATransport(transportParams, candidate, callback);
                    });
                }
                else if (wrappedErr.event === 'failed') {
                    /* Error that's fatal to the connection */
                    _this.notifyState({ state: 'failed', error: wrappedErr.error });
                    callback(true);
                }
                else if (wrappedErr.event === 'disconnected') {
                    if (!(0, connectionerrors_1.isRetriable)(wrappedErr.error)) {
                        /* Error received from the server that does not call for trying a fallback host, eg a rate limit */
                        _this.notifyState({ state: _this.states.connecting.failState, error: wrappedErr.error });
                        callback(true);
                    }
                    else {
                        /* Error with that transport only; continue trying other fallback hosts */
                        callback(false);
                    }
                }
                return;
            }
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.tryATransport()', 'viable transport ' + candidate + '; setting pending');
            _this.setTransportPending(transport, transportParams);
            callback(null, transport);
        });
    };
    /**
     * Called when a transport is indicated to be viable, and the ConnectionManager
     * expects to activate this transport as soon as it is connected.
     * @param transport
     * @param transportParams
     */
    ConnectionManager.prototype.setTransportPending = function (transport, transportParams) {
        var _this = this;
        var mode = transportParams.mode;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.setTransportPending()', 'transport = ' + transport + '; mode = ' + mode);
        Utils.arrDeleteValue(this.proposedTransports, transport);
        this.pendingTransports.push(transport);
        var optimalTransport = platform_1.default.Defaults.transportPreferenceOrder[platform_1.default.Defaults.transportPreferenceOrder.length - 1];
        transport.once('connected', function (error, connectionId, connectionDetails) {
            if (mode == 'upgrade' && _this.activeProtocol) {
                /*  if ws and xhrs are connecting in parallel, delay xhrs activation to let ws go ahead */
                if (transport.shortName !== optimalTransport &&
                    Utils.arrIn(_this.getUpgradePossibilities(), optimalTransport) &&
                    _this.activeProtocol) {
                    setTimeout(function () {
                        _this.scheduleTransportActivation(error, transport, connectionId, connectionDetails);
                    }, _this.options.timeouts.parallelUpgradeDelay);
                }
                else {
                    _this.scheduleTransportActivation(error, transport, connectionId, connectionDetails);
                }
            }
            else {
                _this.activateTransport(error, transport, connectionId, connectionDetails);
                /* allow connectImpl to start the upgrade process if needed, but allow
                 * other event handlers, including activating the transport, to run first */
                platform_1.default.Config.nextTick(function () {
                    _this.connectImpl(transportParams);
                });
            }
            if (mode === 'recover' && _this.options.recover) {
                /* After a successful recovery, we unpersist, as a recovery key cannot
                 * be used more than once */
                _this.options.recover = null;
                _this.unpersistConnection();
            }
        });
        var self = this;
        transport.on(['disconnected', 'closed', 'failed'], function (error) {
            self.deactivateTransport(transport, this.event, error);
        });
        this.emit('transport.pending', transport);
    };
    /**
     * Called when an upgrade transport is connected,
     * to schedule the activation of that transport.
     * @param error
     * @param transport
     * @param connectionId
     * @param connectionDetails
     */
    ConnectionManager.prototype.scheduleTransportActivation = function (error, transport, connectionId, connectionDetails) {
        var _this = this;
        var currentTransport = this.activeProtocol && this.activeProtocol.getTransport(), abandon = function () {
            transport.disconnect();
            Utils.arrDeleteValue(_this.pendingTransports, transport);
        };
        if (this.state !== this.states.connected && this.state !== this.states.connecting) {
            /* This is most likely to happen for the delayed XHRs, when XHRs and ws are scheduled in parallel*/
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Current connection state (' +
                this.state.state +
                (this.state === this.states.synchronizing ? ', but with an upgrade already in progress' : '') +
                ') is not valid to upgrade in; abandoning upgrade to ' +
                transport.shortName);
            abandon();
            return;
        }
        if (currentTransport && !betterTransportThan(transport, currentTransport)) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Proposed transport ' +
                transport.shortName +
                ' is no better than current active transport ' +
                currentTransport.shortName +
                ' - abandoning upgrade');
            abandon();
            return;
        }
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Scheduling transport upgrade; transport = ' + transport);
        var oldProtocol = null;
        if (!transport.isConnected) {
            /* This is only possible if the xhr streaming transport was disconnected during the parallelUpgradeDelay */
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Proposed transport ' + transport.shortName + 'is no longer connected; abandoning upgrade');
            abandon();
            return;
        }
        if (this.state === this.states.connected) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.scheduleTransportActivation()', 'Currently connected, so temporarily pausing events until the upgrade is complete');
            this.state = this.states.synchronizing;
            oldProtocol = this.activeProtocol;
        }
        else if (this.state !== this.states.connecting) {
            /* Note: upgrading from the connecting state is valid if the old active
             * transport was deactivated after the upgrade transport first connected;
             * see logic in deactivateTransport */
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Current connection state (' +
                this.state.state +
                (this.state === this.states.synchronizing ? ', but with an upgrade already in progress' : '') +
                ') is not valid to upgrade in; abandoning upgrade to ' +
                transport.shortName);
            abandon();
            return;
        }
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Syncing transport; transport = ' + transport);
        var finishUpgrade = function () {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Activating transport; transport = ' + transport);
            // Send ACTIVATE to tell the server to make this transport the
            // active transport, which suspends channels until we re-attach.
            transport.send(protocolmessage_1.default.fromValues({
                action: actions.ACTIVATE,
            }));
            _this.activateTransport(error, transport, connectionId, connectionDetails);
            /* Restore pre-sync state. If state has changed in the meantime,
             * don't touch it -- since the websocket transport waits a tick before
             * disposing itself, it's possible for it to have happily synced
             * without err while, unknown to it, the connection has closed in the
             * meantime and the ws transport is scheduled for death */
            if (_this.state === _this.states.synchronizing) {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.scheduleTransportActivation()', 'Pre-upgrade protocol idle, sending queued messages on upgraded transport; transport = ' + transport);
                _this.state = _this.states.connected;
            }
            else {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.scheduleTransportActivation()', 'Pre-upgrade protocol idle, but state is now ' + _this.state.state + ', so leaving unchanged');
            }
            if (_this.state.sendEvents) {
                _this.sendQueuedMessages();
            }
        };
        /* Wait until sync is done and old transport is idle before activating new transport. This
         * guarantees that messages arrive at realtime in the same order they are sent.
         *
         * If a message times out on the old transport, since it's still the active transport the
         * message will be requeued. deactivateTransport will see the pending transport and notify
         * the `connecting` state without starting a new connection, so the new transport can take
         * over once deactivateTransport clears the old protocol's queue.
         *
         * If there is no old protocol, that meant that we weren't in the connected state at the
         * beginning of the sync - likely the base transport died just before the sync. So can just
         * finish the upgrade. If we're actually in closing/failed rather than connecting, that's
         * fine, activatetransport will deal with that. */
        if (oldProtocol) {
            /* Most of the time this will be already true: the new-transport sync will have given
             * enough time for in-flight messages on the old transport to complete. */
            oldProtocol.onceIdle(finishUpgrade);
        }
        else {
            finishUpgrade();
        }
    };
    /**
     * Called when a transport is connected, and the connectionmanager decides that
     * it will now be the active transport. Returns whether or not it activated
     * the transport (if the connection is closing/closed it will choose not to).
     * @param transport the transport instance
     * @param connectionId the id of the new active connection
     * @param connectionDetails the details of the new active connection
     */
    ConnectionManager.prototype.activateTransport = function (error, transport, connectionId, connectionDetails) {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.activateTransport()', 'transport = ' + transport);
        if (error) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.activateTransport()', 'error = ' + error);
        }
        if (connectionId) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.activateTransport()', 'connectionId =  ' + connectionId);
        }
        if (connectionDetails) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.activateTransport()', 'connectionDetails =  ' + JSON.stringify(connectionDetails));
        }
        this.persistTransportPreference(transport);
        /* if the connectionmanager moved to the closing/closed state before this
         * connection event, then we won't activate this transport */
        var existingState = this.state, connectedState = this.states.connected.state;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.activateTransport()', 'current state = ' + existingState.state);
        if (existingState.state == this.states.closing.state ||
            existingState.state == this.states.closed.state ||
            existingState.state == this.states.failed.state) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.activateTransport()', 'Disconnecting transport and abandoning');
            transport.disconnect();
            return false;
        }
        /* remove this transport from pending transports */
        Utils.arrDeleteValue(this.pendingTransports, transport);
        /* if the transport is not connected then don't activate it */
        if (!transport.isConnected) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.activateTransport()', 'Declining to activate transport ' + transport + ' since it appears to no longer be connected');
            return false;
        }
        /* the given transport is connected; this will immediately
         * take over as the active transport */
        var existingActiveProtocol = this.activeProtocol;
        this.activeProtocol = new protocol_1.default(transport);
        this.host = transport.params.host;
        var connectionKey = connectionDetails.connectionKey;
        if (connectionKey && this.connectionKey != connectionKey) {
            this.setConnection(connectionId, connectionDetails, !!error);
        }
        /* Rebroadcast any new connectionDetails from the active transport, which
         * can come at any time (eg following a reauth), and emit an RTN24 UPDATE
         * event. (Listener added on nextTick because we're in a transport.on('connected')
         * callback at the moment; if we add it now we'll be adding it to the end
         * of the listeners array and it'll be called immediately) */
        this.onConnectionDetailsUpdate(connectionDetails, transport);
        platform_1.default.Config.nextTick(function () {
            transport.on('connected', function (connectedErr, _connectionId, connectionDetails) {
                _this.onConnectionDetailsUpdate(connectionDetails, transport);
                _this.emit('update', new connectionstatechange_1.default(connectedState, connectedState, null, connectedErr));
            });
        });
        /* If previously not connected, notify the state change (including any
         * error). */
        if (existingState.state === this.states.connected.state) {
            if (error) {
                /* if upgrading without error, leave any existing errorReason alone */
                this.errorReason = this.realtime.connection.errorReason = error;
                /* Only bother emitting an upgrade if there's an error; otherwise it's
                 * just a transport upgrade, so auth details won't have changed */
                this.emit('update', new connectionstatechange_1.default(connectedState, connectedState, null, error));
            }
        }
        else {
            this.notifyState({ state: 'connected', error: error });
            this.errorReason = this.realtime.connection.errorReason = error || null;
        }
        /* Send after the connection state update, as Channels hooks into this to
         * resend attaches on a new transport if necessary */
        this.emit('transport.active', transport);
        /* Gracefully terminate existing protocol */
        if (existingActiveProtocol) {
            if (existingActiveProtocol.messageQueue.count() > 0) {
                /* We could just requeue pending messages on the new transport, but
                 * actually this should never happen: transports should only take over
                 * from other active transports when upgrading, and upgrading waits for
                 * the old transport to be idle. So log an error. */
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.activateTransport()', 'Previous active protocol (for transport ' +
                    existingActiveProtocol.transport.shortName +
                    ', new one is ' +
                    transport.shortName +
                    ') finishing with ' +
                    existingActiveProtocol.messageQueue.count() +
                    ' messages still pending');
            }
            if (existingActiveProtocol.transport === transport) {
                var msg = 'Assumption violated: activating a transport that was also the transport for the previous active protocol; transport = ' +
                    transport.shortName +
                    '; stack = ' +
                    new Error().stack;
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.activateTransport()', msg);
            }
            else {
                existingActiveProtocol.finish();
            }
        }
        /* Terminate any other pending transport(s), and
         * abort any not-yet-pending transport attempts */
        Utils.safeArrForEach(this.pendingTransports, function (pendingTransport) {
            if (pendingTransport === transport) {
                var msg = 'Assumption violated: activating a transport that is still marked as a pending transport; transport = ' +
                    transport.shortName +
                    '; stack = ' +
                    new Error().stack;
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.activateTransport()', msg);
                Utils.arrDeleteValue(_this.pendingTransports, transport);
            }
            else {
                pendingTransport.disconnect();
            }
        });
        Utils.safeArrForEach(this.proposedTransports, function (proposedTransport) {
            if (proposedTransport === transport) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.activateTransport()', 'Assumption violated: activating a transport that is still marked as a proposed transport; transport = ' +
                    transport.shortName +
                    '; stack = ' +
                    new Error().stack);
                Utils.arrDeleteValue(_this.proposedTransports, transport);
            }
            else {
                proposedTransport.dispose();
            }
        });
        return true;
    };
    /**
     * Called when a transport is no longer the active transport. This can occur
     * in any transport connection state.
     * @param transport
     */
    ConnectionManager.prototype.deactivateTransport = function (transport, state, error) {
        var currentProtocol = this.activeProtocol, wasActive = currentProtocol && currentProtocol.getTransport() === transport, wasPending = Utils.arrDeleteValue(this.pendingTransports, transport), wasProposed = Utils.arrDeleteValue(this.proposedTransports, transport), noTransportsScheduledForActivation = this.noTransportsScheduledForActivation();
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.deactivateTransport()', 'transport = ' + transport);
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.deactivateTransport()', 'state = ' +
            state +
            (wasActive ? '; was active' : wasPending ? '; was pending' : wasProposed ? '; was proposed' : '') +
            (noTransportsScheduledForActivation ? '' : '; another transport is scheduled for activation'));
        if (error && error.message)
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.deactivateTransport()', 'reason =  ' + error.message);
        if (wasActive) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.deactivateTransport()', 'Getting, clearing, and requeuing ' +
                this.activeProtocol.messageQueue.count() +
                ' pending messages');
            this.queuePendingMessages(currentProtocol.getPendingMessages());
            /* Clear any messages we requeue to allow the protocol to become idle.
             * In case of an upgrade, this will trigger an immediate activation of
             * the upgrade transport, so delay a tick so this transport can finish
             * deactivating */
            platform_1.default.Config.nextTick(function () {
                currentProtocol.clearPendingMessages();
            });
            this.activeProtocol = this.host = null;
        }
        this.emit('transport.inactive', transport);
        /* this transport state change is a state change for the connectionmanager if
         * - the transport was the active transport and there are no transports
         *   which are connected and scheduled for activation, just waiting for the
         *   active transport to finish what its doing; or
         * - the transport was the active transport and the error was fatal (so
         *   unhealable by another transport); or
         * - there is no active transport, and this is the last remaining
         *   pending transport (so we were in the connecting state)
         */
        if ((wasActive && noTransportsScheduledForActivation) ||
            (wasActive && state === 'failed') ||
            state === 'closed' ||
            (currentProtocol === null && wasPending && this.pendingTransports.length === 0)) {
            /* If we're disconnected with a 5xx we need to try fallback hosts
             * (RTN14d), but (a) due to how the upgrade sequence works, the
             * host/transport selection sequence only cares about getting to
             * `preconnect` (eg establishing a websocket) getting a `disconnected`
             * protocol message afterwards is too late; and (b) host retry only
             * applies to connectBase unless the stored preference transport doesn't
             * work. We solve this by unpersisting the transport preference and
             * setting an instance variable to force fallback hosts to be used (if
             * any) here. Bit of a kludge, but no real better alternatives without
             * rewriting the entire thing */
            if (state === 'disconnected' && error && error.statusCode > 500 && this.httpHosts.length > 1) {
                this.unpersistTransportPreference();
                this.forceFallbackHost = true;
                /* and try to connect again to try a fallback host without waiting for the usual 15s disconnectedRetryTimeout */
                this.notifyState({ state: state, error: error, retryImmediately: true });
                return;
            }
            /* TODO remove below line once realtime sends token errors as DISCONNECTEDs */
            var newConnectionState = state === 'failed' && auth_1.default.isTokenErr(error) ? 'disconnected' : state;
            this.notifyState({ state: newConnectionState, error: error });
            return;
        }
        if (wasActive && state === 'disconnected' && this.state !== this.states.synchronizing) {
            /* If we were active but there is another transport scheduled for
             * activation, go into to the connecting state until that transport
             * activates and sets us back to connected. (manually starting the
             * transition timers in case that never happens). (If we were in the
             * synchronizing state, then that's fine, the old transport just got its
             * disconnected before the new one got the sync -- ignore it and keep
             * waiting for the sync. If it fails we have a separate sync timer that
             * will expire). */
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.deactivateTransport()', 'wasActive but another transport is connected and scheduled for activation, so going into the connecting state until it activates');
            this.startSuspendTimer();
            this.startTransitionTimer(this.states.connecting);
            this.notifyState({ state: 'connecting', error: error });
        }
    };
    /* Helper that returns true if there are no transports which are pending,
     * have been connected, and are just waiting for onceNoPending to fire before
     * being activated */
    ConnectionManager.prototype.noTransportsScheduledForActivation = function () {
        return (Utils.isEmpty(this.pendingTransports) ||
            this.pendingTransports.every(function (transport) {
                return !transport.isConnected;
            }));
    };
    ConnectionManager.prototype.setConnection = function (connectionId, connectionDetails, hasConnectionError) {
        /* if connectionKey changes but connectionId stays the same, then just a
         * transport change on the same connection. If connectionId changes, we're
         * on a new connection, with implications for msgSerial and channel state */
        /* If no previous connectionId, don't reset the msgSerial as it may have
         * been set by recover data (unless the recover failed) */
        var prevConnId = this.connectionId, connIdChanged = prevConnId && prevConnId !== connectionId, recoverFailure = !prevConnId && hasConnectionError;
        if (connIdChanged || recoverFailure) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.setConnection()', 'Resetting msgSerial');
            this.msgSerial = 0;
            // RTN19a2: In the event of a new connectionId, previous msgSerials are
            // meaningless.
            this.queuedMessages.resetSendAttempted();
        }
        if (this.connectionId !== connectionId) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.setConnection()', 'New connectionId; reattaching any attached channels');
        }
        this.realtime.connection.id = this.connectionId = connectionId;
        this.realtime.connection.key = this.connectionKey = connectionDetails.connectionKey;
    };
    ConnectionManager.prototype.clearConnection = function () {
        this.realtime.connection.id = this.connectionId = undefined;
        this.realtime.connection.key = this.connectionKey = undefined;
        this.msgSerial = 0;
        this.unpersistConnection();
    };
    ConnectionManager.prototype.createRecoveryKey = function () {
        // RTN16g2.
        if (!this.connectionKey) {
            return null;
        }
        return JSON.stringify({
            connectionKey: this.connectionKey,
            msgSerial: this.msgSerial,
            channelSerials: this.realtime.channels.channelSerials(),
        });
    };
    ConnectionManager.prototype.checkConnectionStateFreshness = function () {
        if (!this.lastActivity || !this.connectionId) {
            return;
        }
        var sinceLast = Utils.now() - this.lastActivity;
        if (sinceLast > this.connectionStateTtl + this.maxIdleInterval) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.checkConnectionStateFreshness()', 'Last known activity from realtime was ' + sinceLast + 'ms ago; discarding connection state');
            this.clearConnection();
            this.states.connecting.failState = 'suspended';
        }
    };
    /**
     * Called when the connectionmanager wants to persist transport
     * state for later recovery. Only applicable in the browser context.
     */
    ConnectionManager.prototype.persistConnection = function () {
        if (haveSessionStorage()) {
            var recoveryKey = this.createRecoveryKey();
            if (recoveryKey) {
                setSessionRecoverData({
                    recoveryKey: recoveryKey,
                    disconnectedAt: Utils.now(),
                    location: global.location,
                    clientId: this.realtime.auth.clientId,
                });
            }
        }
    };
    /**
     * Called when the connectionmanager wants to persist transport
     * state for later recovery. Only applicable in the browser context.
     */
    ConnectionManager.prototype.unpersistConnection = function () {
        clearSessionRecoverData();
    };
    /*********************
     * state management
     *********************/
    ConnectionManager.prototype.getError = function () {
        return this.errorReason || this.getStateError();
    };
    ConnectionManager.prototype.getStateError = function () {
        var _a, _b;
        return (_b = (_a = connectionerrors_1.default)[this.state.state]) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    ConnectionManager.prototype.activeState = function () {
        return this.state.queueEvents || this.state.sendEvents;
    };
    ConnectionManager.prototype.enactStateChange = function (stateChange) {
        var logLevel = stateChange.current === 'failed' ? logger_1.default.LOG_ERROR : logger_1.default.LOG_MAJOR;
        logger_1.default.logAction(logLevel, 'Connection state', stateChange.current + (stateChange.reason ? '; reason: ' + stateChange.reason : ''));
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.enactStateChange', 'setting new state: ' +
            stateChange.current +
            '; reason = ' +
            (stateChange.reason && stateChange.reason.message));
        var newState = (this.state = this.states[stateChange.current]);
        if (stateChange.reason) {
            this.errorReason = stateChange.reason;
            this.realtime.connection.errorReason = stateChange.reason;
        }
        if (newState.terminal || newState.state === 'suspended') {
            /* suspended is nonterminal, but once in the suspended state, realtime
             * will have discarded our connection state, so futher connection
             * attempts should start from scratch */
            this.clearConnection();
        }
        this.emit('connectionstate', stateChange);
    };
    /****************************************
     * ConnectionManager connection lifecycle
     ****************************************/
    ConnectionManager.prototype.startTransitionTimer = function (transitionState) {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.startTransitionTimer()', 'transitionState: ' + transitionState.state);
        if (this.transitionTimer) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.startTransitionTimer()', 'clearing already-running timer');
            clearTimeout(this.transitionTimer);
        }
        this.transitionTimer = setTimeout(function () {
            if (_this.transitionTimer) {
                _this.transitionTimer = null;
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager ' + transitionState.state + ' timer expired', 'requesting new state: ' + transitionState.failState);
                _this.notifyState({ state: transitionState.failState });
            }
        }, transitionState.retryDelay);
    };
    ConnectionManager.prototype.cancelTransitionTimer = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.cancelTransitionTimer()', '');
        if (this.transitionTimer) {
            clearTimeout(this.transitionTimer);
            this.transitionTimer = null;
        }
    };
    ConnectionManager.prototype.startSuspendTimer = function () {
        var _this = this;
        if (this.suspendTimer)
            return;
        this.suspendTimer = setTimeout(function () {
            if (_this.suspendTimer) {
                _this.suspendTimer = null;
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager suspend timer expired', 'requesting new state: suspended');
                _this.states.connecting.failState = 'suspended';
                _this.notifyState({ state: 'suspended' });
            }
        }, this.connectionStateTtl);
    };
    ConnectionManager.prototype.checkSuspendTimer = function (state) {
        if (state !== 'disconnected' && state !== 'suspended' && state !== 'connecting')
            this.cancelSuspendTimer();
    };
    ConnectionManager.prototype.cancelSuspendTimer = function () {
        this.states.connecting.failState = 'disconnected';
        if (this.suspendTimer) {
            clearTimeout(this.suspendTimer);
            this.suspendTimer = null;
        }
    };
    ConnectionManager.prototype.startRetryTimer = function (interval) {
        var _this = this;
        this.retryTimer = setTimeout(function () {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager retry timer expired', 'retrying');
            _this.retryTimer = null;
            _this.requestState({ state: 'connecting' });
        }, interval);
    };
    ConnectionManager.prototype.cancelRetryTimer = function () {
        if (this.retryTimer) {
            clearTimeout(this.retryTimer);
            this.retryTimer = null;
        }
    };
    ConnectionManager.prototype.notifyState = function (indicated) {
        var _this = this;
        var _a, _b;
        var state = indicated.state;
        /* We retry immediately if:
         * - something disconnects us while we're connected, or
         * - a viable (but not yet active) transport fails due to a token error (so
         *   this.errorReason will be set, and startConnect will do a forced
         *   authorize). If this.errorReason is already set (to a token error),
         *   then there has been at least one previous attempt to connect that also
         *   failed for a token error, so by RTN14b we go to DISCONNECTED and wait
         *   before trying again */
        var retryImmediately = state === 'disconnected' &&
            (this.state === this.states.connected ||
                this.state === this.states.synchronizing ||
                indicated.retryImmediately ||
                (this.state === this.states.connecting &&
                    indicated.error &&
                    auth_1.default.isTokenErr(indicated.error) &&
                    !(this.errorReason && auth_1.default.isTokenErr(this.errorReason))));
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.notifyState()', 'new state: ' + state + (retryImmediately ? '; will retry connection immediately' : ''));
        /* do nothing if we're already in the indicated state */
        if (state == this.state.state)
            return;
        /* kill timers (possibly excepting suspend timer depending on the notified
         * state), as these are superseded by this notification */
        this.cancelTransitionTimer();
        this.cancelRetryTimer();
        this.checkSuspendTimer(indicated.state);
        if (state === 'suspended' || state === 'connected') {
            this.disconnectedRetryCount = 0;
        }
        /* do nothing if we're unable to move from the current state */
        if (this.state.terminal)
            return;
        /* process new state */
        var newState = this.states[indicated.state];
        var retryDelay = newState.retryDelay;
        if (newState.state === 'disconnected') {
            this.disconnectedRetryCount++;
            retryDelay = Utils.getRetryTime(newState.retryDelay, this.disconnectedRetryCount);
        }
        var change = new connectionstatechange_1.default(this.state.state, newState.state, retryDelay, indicated.error || ((_b = (_a = connectionerrors_1.default)[newState.state]) === null || _b === void 0 ? void 0 : _b.call(_a)));
        if (retryImmediately) {
            var autoReconnect = function () {
                if (_this.state === _this.states.disconnected) {
                    _this.lastAutoReconnectAttempt = Utils.now();
                    _this.requestState({ state: 'connecting' });
                }
            };
            var sinceLast = this.lastAutoReconnectAttempt && Utils.now() - this.lastAutoReconnectAttempt + 1;
            if (sinceLast && sinceLast < 1000) {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.notifyState()', 'Last reconnect attempt was only ' +
                    sinceLast +
                    'ms ago, waiting another ' +
                    (1000 - sinceLast) +
                    'ms before trying again');
                setTimeout(autoReconnect, 1000 - sinceLast);
            }
            else {
                platform_1.default.Config.nextTick(autoReconnect);
            }
        }
        else if (state === 'disconnected' || state === 'suspended') {
            this.startRetryTimer(retryDelay);
        }
        /* If going into disconnect/suspended (and not retrying immediately), or a
         * terminal state, ensure there are no orphaned transports hanging around. */
        if ((state === 'disconnected' && !retryImmediately) || state === 'suspended' || newState.terminal) {
            /* Wait till the next tick so the connection state change is enacted,
             * so aborting transports doesn't trigger redundant state changes */
            platform_1.default.Config.nextTick(function () {
                _this.disconnectAllTransports();
            });
        }
        if (state == 'connected' && !this.activeProtocol) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.notifyState()', 'Broken invariant: attempted to go into connected state, but there is no active protocol');
        }
        /* implement the change and notify */
        this.enactStateChange(change);
        if (this.state.sendEvents) {
            this.sendQueuedMessages();
        }
        else if (!this.state.queueEvents) {
            this.realtime.channels.propogateConnectionInterruption(state, change.reason);
            this.failQueuedMessages(change.reason); // RTN7c
        }
    };
    ConnectionManager.prototype.requestState = function (request) {
        var _this = this;
        var _a, _b;
        var state = request.state;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.requestState()', 'requested state: ' + state + '; current state: ' + this.state.state);
        if (state == this.state.state)
            return; /* silently do nothing */
        /* kill running timers, as this request supersedes them */
        this.cancelTransitionTimer();
        this.cancelRetryTimer();
        /* for suspend timer check rather than cancel -- eg requesting a connecting
         * state should not reset the suspend timer */
        this.checkSuspendTimer(state);
        if (state == 'connecting' && this.state.state == 'connected')
            return;
        if (state == 'closing' && this.state.state == 'closed')
            return;
        var newState = this.states[state], change = new connectionstatechange_1.default(this.state.state, newState.state, null, request.error || ((_b = (_a = connectionerrors_1.default)[newState.state]) === null || _b === void 0 ? void 0 : _b.call(_a)));
        this.enactStateChange(change);
        if (state == 'connecting') {
            platform_1.default.Config.nextTick(function () {
                _this.startConnect();
            });
        }
        if (state == 'closing') {
            this.closeImpl();
        }
    };
    ConnectionManager.prototype.startConnect = function () {
        var _this = this;
        if (this.state !== this.states.connecting) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.startConnect()', 'Must be in connecting state to connect, but was ' + this.state.state);
            return;
        }
        var auth = this.realtime.auth;
        /* The point of the connectCounter mechanism is to ensure that the
         * connection procedure can be cancelled. We want disconnectAllTransports
         * to be able to stop any in-progress connection, even before it gets to
         * the stage of having a pending (or even a proposed) transport that it can
         * dispose() of. So we check that it's still current after any async stage,
         * up until the stage that is synchronous with instantiating a transport */
        var connectCount = ++this.connectCounter;
        var connect = function () {
            _this.checkConnectionStateFreshness();
            _this.getTransportParams(function (transportParams) {
                if (transportParams.mode === 'recover' && transportParams.options.recover) {
                    var recoveryContext = decodeRecoveryKey(transportParams.options.recover);
                    if (recoveryContext) {
                        _this.realtime.channels.recoverChannels(recoveryContext.channelSerials);
                    }
                }
                if (connectCount !== _this.connectCounter) {
                    return;
                }
                _this.connectImpl(transportParams, connectCount);
            });
        };
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.startConnect()', 'starting connection');
        this.startSuspendTimer();
        this.startTransitionTimer(this.states.connecting);
        if (auth.method === 'basic') {
            connect();
        }
        else {
            var authCb = function (err) {
                if (connectCount !== _this.connectCounter) {
                    return;
                }
                if (err) {
                    _this.actOnErrorFromAuthorize(err);
                }
                else {
                    connect();
                }
            };
            if (this.errorReason && auth_1.default.isTokenErr(this.errorReason)) {
                /* Force a refetch of a new token */
                auth._forceNewToken(null, null, authCb);
            }
            else {
                auth._ensureValidAuthCredentials(false, authCb);
            }
        }
    };
    /**
     * There are three stages in connecting:
     * - preference: if there is a cached transport preference, we try to connect
     *   on that. If that fails or times out we abort the attempt, remove the
     *   preference and fall back to base. If it succeeds, we try upgrading it if
     *   needed (will only be in the case where the preference is xhrs and the
     *   browser supports ws).
     * - base: we try to connect with the best transport that we think will
     *   never fail for this browser (usually this is xhr_polling; for very old
     *   browsers will be jsonp, for node will be comet). If it doesn't work, we
     *   try fallback hosts.
     * - upgrade: given a connected transport, we see if there are any better
     *   ones, and if so, try to upgrade to them.
     *
     * connectImpl works out what stage you're at (which is purely a function of
     * the current connection state and whether there are any stored preferences),
     * and dispatches accordingly. After a transport has been set pending,
     * tryATransport calls connectImpl to see if there's another stage to be done.
     * */
    ConnectionManager.prototype.connectImpl = function (transportParams, connectCount) {
        var state = this.state.state;
        if (state !== this.states.connecting.state && state !== this.states.connected.state) {
            /* Only keep trying as long as in the 'connecting' state (or 'connected'
             * for upgrading). Any operation can put us into 'disconnected' to cancel
             * connection attempts and wait before retrying, or 'failed' to fail. */
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.connectImpl()', 'Must be in connecting state to connect (or connected to upgrade), but was ' + state);
        }
        else if (this.pendingTransports.length) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.connectImpl()', 'Transports ' + this.pendingTransports[0].toString() + ' currently pending; taking no action');
        }
        else if (state == this.states.connected.state) {
            this.upgradeIfNeeded(transportParams);
        }
        else if (this.transports.length > 1 && this.getTransportPreference()) {
            this.connectPreference(transportParams, connectCount);
        }
        else {
            this.connectBase(transportParams, connectCount);
        }
    };
    ConnectionManager.prototype.connectPreference = function (transportParams, connectCount) {
        var _this = this;
        var preference = this.getTransportPreference();
        var preferenceTimeoutExpired = false;
        if (!Utils.arrIn(this.transports, preference)) {
            this.unpersistTransportPreference();
            this.connectImpl(transportParams, connectCount);
        }
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.connectPreference()', 'Trying to connect with stored transport preference ' + preference);
        var preferenceTimeout = setTimeout(function () {
            preferenceTimeoutExpired = true;
            if (!(_this.state.state === _this.states.connected.state)) {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.connectPreference()', 'Shortcircuit connection attempt with ' + preference + ' failed; clearing preference and trying from scratch');
                /* Abort all connection attempts. (This also disconnects the active
                 * protocol, but none exists if we're not in the connected state) */
                _this.disconnectAllTransports();
                /* Be quite agressive about clearing the stored preference if ever it doesn't work */
                _this.unpersistTransportPreference();
            }
            _this.connectImpl(transportParams, connectCount);
        }, this.options.timeouts.preferenceConnectTimeout);
        /* For connectPreference, just use the main host. If host fallback is needed, do it in connectBase.
         * The wstransport it will substitute the httphost for an appropriate wshost */
        transportParams.host = this.httpHosts[0];
        this.tryATransport(transportParams, preference, function (fatal, transport) {
            clearTimeout(preferenceTimeout);
            if (preferenceTimeoutExpired && transport) {
                /* Viable, but too late - connectImpl() will already be trying
                 * connectBase, and we weren't in upgrade mode. Just remove the
                 * onconnected listener and get rid of it */
                transport.off();
                transport.disconnect();
                Utils.arrDeleteValue(_this.pendingTransports, transport);
            }
            else if (!transport && !fatal) {
                /* Preference failed in a transport-specific way. Try more */
                _this.unpersistTransportPreference();
                _this.connectImpl(transportParams, connectCount);
            }
            /* If suceeded, or failed fatally, nothing to do */
        });
    };
    /**
     * Try to establish a transport on the base transport (the best transport
     * such that if it doesn't work, nothing will work) as determined through
     * static feature detection, checking for network connectivity and trying
     * fallback hosts if applicable.
     * @param transportParams
     */
    ConnectionManager.prototype.connectBase = function (transportParams, connectCount) {
        var _this = this;
        var giveUp = function (err) {
            _this.notifyState({ state: _this.states.connecting.failState, error: err });
        };
        var candidateHosts = this.httpHosts.slice();
        var hostAttemptCb = function (fatal, transport) {
            if (connectCount !== _this.connectCounter) {
                return;
            }
            if (!transport && !fatal) {
                tryFallbackHosts();
            }
        };
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.connectBase()', 'Trying to connect with base transport ' + this.baseTransport);
        /* first try to establish a connection with the priority host with http transport */
        var host = candidateHosts.shift();
        if (!host) {
            giveUp(new errorinfo_1.default('Unable to connect (no available host)', 80003, 404));
            return;
        }
        transportParams.host = host;
        /* this is what we'll be doing if the attempt for the main host fails */
        var tryFallbackHosts = function () {
            /* if there aren't any fallback hosts, fail */
            if (!candidateHosts.length) {
                giveUp(new errorinfo_1.default('Unable to connect (and no more fallback hosts to try)', 80003, 404));
                return;
            }
            /* before trying any fallback (or any remaining fallback) we decide if
             * there is a problem with the ably host, or there is a general connectivity
             * problem */
            if (!_this.realtime.http.checkConnectivity) {
                giveUp(new errorinfo_1.PartialErrorInfo('Internal error: Http.checkConnectivity not set', null, 500));
                return;
            }
            _this.realtime.http.checkConnectivity(function (err, connectivity) {
                if (connectCount !== _this.connectCounter) {
                    return;
                }
                /* we know err won't happen but handle it here anyway */
                if (err) {
                    giveUp(err);
                    return;
                }
                if (!connectivity) {
                    /* the internet isn't reachable, so don't try the fallback hosts */
                    giveUp(new errorinfo_1.default('Unable to connect (network unreachable)', 80003, 404));
                    return;
                }
                /* the network is there, so there's a problem with the main host, or
                 * its dns. Try the fallback hosts. We could try them simultaneously but
                 * that would potentially cause a huge spike in load on the load balancer */
                transportParams.host = Utils.arrPopRandomElement(candidateHosts);
                _this.tryATransport(transportParams, _this.baseTransport, hostAttemptCb);
            });
        };
        if (this.forceFallbackHost && candidateHosts.length) {
            this.forceFallbackHost = false;
            tryFallbackHosts();
            return;
        }
        this.tryATransport(transportParams, this.baseTransport, hostAttemptCb);
    };
    ConnectionManager.prototype.getUpgradePossibilities = function () {
        /* returns the subset of upgradeTransports to the right of the current
         * transport in upgradeTransports (if it's in there - if not, currentSerial
         * will be -1, so return upgradeTransports.slice(0) == upgradeTransports */
        var current = this.activeProtocol.getTransport().shortName;
        var currentSerial = Utils.arrIndexOf(this.upgradeTransports, current);
        return this.upgradeTransports.slice(currentSerial + 1);
    };
    ConnectionManager.prototype.upgradeIfNeeded = function (transportParams) {
        var _this = this;
        var upgradePossibilities = this.getUpgradePossibilities();
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.upgradeIfNeeded()', 'upgrade possibilities: ' + platform_1.default.Config.inspect(upgradePossibilities));
        if (!upgradePossibilities.length) {
            return;
        }
        Utils.arrForEach(upgradePossibilities, function (upgradeTransport) {
            /* Note: the transport may mutate the params, so give each transport a fresh one */
            var upgradeTransportParams = _this.createTransportParams(transportParams.host, 'upgrade');
            _this.tryATransport(upgradeTransportParams, upgradeTransport, noop);
        });
    };
    ConnectionManager.prototype.closeImpl = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.closeImpl()', 'closing connection');
        this.cancelSuspendTimer();
        this.startTransitionTimer(this.states.closing);
        Utils.safeArrForEach(this.pendingTransports, function (transport) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.closeImpl()', 'Closing pending transport: ' + transport);
            if (transport)
                transport.close();
        });
        Utils.safeArrForEach(this.proposedTransports, function (transport) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.closeImpl()', 'Disposing of proposed transport: ' + transport);
            if (transport)
                transport.dispose();
        });
        if (this.activeProtocol) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.closeImpl()', 'Closing active transport: ' + this.activeProtocol.getTransport());
            this.activeProtocol.getTransport().close();
        }
        /* If there was an active transport, this will probably be
         * preempted by the notifyState call in deactivateTransport */
        this.notifyState({ state: 'closed' });
    };
    ConnectionManager.prototype.onAuthUpdated = function (tokenDetails, callback) {
        var _this = this;
        var _a;
        switch (this.state.state) {
            case 'connected': {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.onAuthUpdated()', 'Sending AUTH message on active transport');
                /* If there are any proposed/pending transports (eg an upgrade that
                 * isn't yet scheduled for activation) that hasn't yet started syncing,
                 * just to get rid of them & restart the upgrade with the new token, to
                 * avoid a race condition. (If it has started syncing, the AUTH will be
                 * queued until the upgrade is complete, so everything's fine) */
                if ((this.pendingTransports.length || this.proposedTransports.length) &&
                    this.state !== this.states.synchronizing) {
                    this.disconnectAllTransports(/* exceptActive: */ true);
                    var transportParams_1 = this.activeProtocol.getTransport().params;
                    platform_1.default.Config.nextTick(function () {
                        if (_this.state.state === 'connected') {
                            _this.upgradeIfNeeded(transportParams_1);
                        }
                    });
                }
                /* Do any transport-specific new-token action */
                var activeTransport = (_a = this.activeProtocol) === null || _a === void 0 ? void 0 : _a.getTransport();
                if (activeTransport && activeTransport.onAuthUpdated) {
                    activeTransport.onAuthUpdated(tokenDetails);
                }
                var authMsg = protocolmessage_1.default.fromValues({
                    action: actions.AUTH,
                    auth: {
                        accessToken: tokenDetails.token,
                    },
                });
                this.send(authMsg);
                /* The answer will come back as either a connectiondetails event
                 * (realtime sends a CONNECTED to acknowledge the reauth) or a
                 * statechange to failed */
                var successListener_1 = function () {
                    _this.off(failureListener_1);
                    callback(null, tokenDetails);
                };
                var failureListener_1 = function (stateChange) {
                    if (stateChange.current === 'failed') {
                        _this.off(successListener_1);
                        _this.off(failureListener_1);
                        callback(stateChange.reason || _this.getStateError());
                    }
                };
                this.once('connectiondetails', successListener_1);
                this.on('connectionstate', failureListener_1);
                break;
            }
            case 'connecting':
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.onAuthUpdated()', 'Aborting current connection attempts in order to start again with the new auth details');
                this.disconnectAllTransports();
            /* fallthrough to add statechange listener */
            default: {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.onAuthUpdated()', 'Connection state is ' + this.state.state + '; waiting until either connected or failed');
                var listener_1 = function (stateChange) {
                    switch (stateChange.current) {
                        case 'connected':
                            _this.off(listener_1);
                            callback(null, tokenDetails);
                            break;
                        case 'failed':
                        case 'closed':
                        case 'suspended':
                            _this.off(listener_1);
                            callback(stateChange.reason || _this.getStateError());
                            break;
                        default:
                            /* ignore till we get either connected or failed */
                            break;
                    }
                };
                this.on('connectionstate', listener_1);
                if (this.state.state === 'connecting') {
                    /* can happen if in the connecting state but no transport was pending
                     * yet, so disconnectAllTransports did not trigger a disconnected state */
                    this.startConnect();
                }
                else {
                    this.requestState({ state: 'connecting' });
                }
            }
        }
    };
    ConnectionManager.prototype.disconnectAllTransports = function (exceptActive) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.disconnectAllTransports()', 'Disconnecting all transports' + (exceptActive ? ' except the active transport' : ''));
        /* This will prevent any connection procedure in an async part of one of its early stages from continuing */
        this.connectCounter++;
        Utils.safeArrForEach(this.pendingTransports, function (transport) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.disconnectAllTransports()', 'Disconnecting pending transport: ' + transport);
            if (transport)
                transport.disconnect();
        });
        this.pendingTransports = [];
        Utils.safeArrForEach(this.proposedTransports, function (transport) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.disconnectAllTransports()', 'Disposing of proposed transport: ' + transport);
            if (transport)
                transport.dispose();
        });
        this.proposedTransports = [];
        if (this.activeProtocol && !exceptActive) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.disconnectAllTransports()', 'Disconnecting active transport: ' + this.activeProtocol.getTransport());
            this.activeProtocol.getTransport().disconnect();
        }
        /* No need to notify state disconnected; disconnecting the active transport
         * will have that effect */
    };
    /******************
     * event queueing
     ******************/
    ConnectionManager.prototype.send = function (msg, queueEvent, callback) {
        callback = callback || noop;
        var state = this.state;
        if (state.sendEvents) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.send()', 'sending event');
            this.sendImpl(new protocol_1.PendingMessage(msg, callback));
            return;
        }
        var shouldQueue = (queueEvent && state.queueEvents) || state.forceQueueEvents;
        if (!shouldQueue) {
            var err = 'rejecting event, queueEvent was ' + queueEvent + ', state was ' + state.state;
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.send()', err);
            callback(this.errorReason || new errorinfo_1.default(err, 90000, 400));
            return;
        }
        if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.send()', 'queueing msg; ' + protocolmessage_1.default.stringify(msg));
        }
        this.queue(msg, callback);
    };
    ConnectionManager.prototype.sendImpl = function (pendingMessage) {
        var msg = pendingMessage.message;
        /* If have already attempted to send this, resend with the same msgSerial,
         * so Ably can dedup if the previous send succeeded */
        if (pendingMessage.ackRequired && !pendingMessage.sendAttempted) {
            msg.msgSerial = this.msgSerial++;
        }
        try {
            this.activeProtocol.send(pendingMessage);
        }
        catch (e) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.sendImpl()', 'Unexpected exception in transport.send(): ' + e.stack);
        }
    };
    ConnectionManager.prototype.queue = function (msg, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.queue()', 'queueing event');
        var lastQueued = this.queuedMessages.last();
        var maxSize = this.options.maxMessageSize;
        /* If have already attempted to send a message, don't merge more messages
         * into it, as if the previous send actually succeeded and realtime ignores
         * the dup, they'll be lost */
        if (lastQueued && !lastQueued.sendAttempted && bundleWith(lastQueued.message, msg, maxSize)) {
            if (!lastQueued.merged) {
                lastQueued.callback = multicaster_1.default.create([lastQueued.callback]);
                lastQueued.merged = true;
            }
            lastQueued.callback.push(callback);
        }
        else {
            this.queuedMessages.push(new protocol_1.PendingMessage(msg, callback));
        }
    };
    ConnectionManager.prototype.sendQueuedMessages = function () {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.sendQueuedMessages()', 'sending ' + this.queuedMessages.count() + ' queued messages');
        var pendingMessage;
        while ((pendingMessage = this.queuedMessages.shift()))
            this.sendImpl(pendingMessage);
    };
    ConnectionManager.prototype.queuePendingMessages = function (pendingMessages) {
        if (pendingMessages && pendingMessages.length) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.queuePendingMessages()', 'queueing ' + pendingMessages.length + ' pending messages');
            this.queuedMessages.prepend(pendingMessages);
        }
    };
    ConnectionManager.prototype.failQueuedMessages = function (err) {
        var numQueued = this.queuedMessages.count();
        if (numQueued > 0) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.failQueuedMessages()', 'failing ' + numQueued + ' queued messages, err = ' + Utils.inspectError(err));
            this.queuedMessages.completeAllMessages(err);
        }
    };
    ConnectionManager.prototype.onChannelMessage = function (message, transport) {
        var onActiveTransport = this.activeProtocol && transport === this.activeProtocol.getTransport(), onUpgradeTransport = Utils.arrIn(this.pendingTransports, transport) && this.state == this.states.synchronizing;
        /* As the lib now has a period where the upgrade transport is synced but
         * before it's become active (while waiting for the old one to become
         * idle), message can validly arrive on it even though it isn't active */
        if (onActiveTransport || onUpgradeTransport) {
            this.realtime.channels.onChannelMessage(message);
        }
        else {
            // Message came in on a defunct transport. Allow only acks, nacks, & errors for outstanding
            // messages,  no new messages (as sync has been sent on new transport so new messages will
            // be resent there, or connection has been closed so don't want new messages)
            if (Utils.arrIndexOf([actions.ACK, actions.NACK, actions.ERROR], message.action) > -1) {
                this.realtime.channels.onChannelMessage(message);
            }
            else {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'ConnectionManager.onChannelMessage()', 'received message ' + JSON.stringify(message) + 'on defunct transport; discarding');
            }
        }
    };
    ConnectionManager.prototype.ping = function (transport, callback) {
        var _this = this;
        /* if transport is specified, try that */
        if (transport) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.ping()', 'transport = ' + transport);
            var onTimeout = function () {
                transport.off('heartbeat', onHeartbeat_1);
                callback(new errorinfo_1.default('Timeout waiting for heartbeat response', 50000, 500));
            };
            var pingStart_1 = Utils.now(), id_1 = Utils.cheapRandStr();
            var onHeartbeat_1 = function (responseId) {
                if (responseId === id_1) {
                    transport.off('heartbeat', onHeartbeat_1);
                    clearTimeout(timer_1);
                    var responseTime = Utils.now() - pingStart_1;
                    callback(null, responseTime);
                }
            };
            var timer_1 = setTimeout(onTimeout, this.options.timeouts.realtimeRequestTimeout);
            transport.on('heartbeat', onHeartbeat_1);
            transport.ping(id_1);
            return;
        }
        /* if we're not connected, don't attempt */
        if (this.state.state !== 'connected') {
            callback(new errorinfo_1.default('Unable to ping service; not connected', 40000, 400));
            return;
        }
        /* no transport was specified, so use the current (connected) one
         * but ensure that we retry if the transport is superseded before we complete */
        var completed = false;
        var onPingComplete = function (err, responseTime) {
            _this.off('transport.active', onTransportActive);
            if (!completed) {
                completed = true;
                callback(err, responseTime);
            }
        };
        var onTransportActive = function () {
            if (!completed) {
                /* ensure that no callback happens for the currently outstanding operation */
                completed = true;
                /* repeat but picking up the new transport */
                platform_1.default.Config.nextTick(function () {
                    _this.ping(null, callback);
                });
            }
        };
        this.on('transport.active', onTransportActive);
        this.ping(this.activeProtocol.getTransport(), onPingComplete);
    };
    ConnectionManager.prototype.abort = function (error) {
        this.activeProtocol.getTransport().fail(error);
    };
    ConnectionManager.prototype.registerProposedTransport = function (transport) {
        this.proposedTransports.push(transport);
    };
    ConnectionManager.prototype.getTransportPreference = function () {
        var _a, _b;
        return this.transportPreference || (haveWebStorage() && ((_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.get) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName)));
    };
    ConnectionManager.prototype.persistTransportPreference = function (transport) {
        var _a, _b;
        if (Utils.arrIn(defaults_1.default.upgradeTransports, transport.shortName)) {
            this.transportPreference = transport.shortName;
            if (haveWebStorage()) {
                (_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.set) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName, transport.shortName);
            }
        }
    };
    ConnectionManager.prototype.unpersistTransportPreference = function () {
        var _a, _b;
        this.transportPreference = null;
        if (haveWebStorage()) {
            (_b = (_a = platform_1.default.WebStorage) === null || _a === void 0 ? void 0 : _a.remove) === null || _b === void 0 ? void 0 : _b.call(_a, transportPreferenceName);
        }
    };
    /* This method is only used during connection attempts, so implements RSA4c1, RSA4c2,
     * and RSA4d. It is generally not invoked for serverside-triggered reauths or manual
     * reauths, so RSA4c3 does not apply, except (per per RSA4d1) in the case that the auth
     * server returns 403. */
    ConnectionManager.prototype.actOnErrorFromAuthorize = function (err) {
        if (err.code === 40171) {
            /* No way to reauth */
            this.notifyState({ state: 'failed', error: err });
        }
        else if (err.code === 40102) {
            this.notifyState({ state: 'failed', error: err });
        }
        else if (err.statusCode === HttpStatusCodes_1.default.Forbidden) {
            var msg = 'Client configured authentication provider returned 403; failing the connection';
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.actOnErrorFromAuthorize()', msg);
            this.notifyState({ state: 'failed', error: new errorinfo_1.default(msg, 80019, 403, err) });
        }
        else {
            var msg = 'Client configured authentication provider request failed';
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'ConnectionManager.actOnErrorFromAuthorize', msg);
            this.notifyState({ state: this.state.failState, error: new errorinfo_1.default(msg, 80019, 401, err) });
        }
    };
    ConnectionManager.prototype.onConnectionDetailsUpdate = function (connectionDetails, transport) {
        if (!connectionDetails) {
            return;
        }
        this.connectionDetails = connectionDetails;
        if (connectionDetails.maxMessageSize) {
            this.options.maxMessageSize = connectionDetails.maxMessageSize;
        }
        var clientId = connectionDetails.clientId;
        if (clientId) {
            var err = this.realtime.auth._uncheckedSetClientId(clientId);
            if (err) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'ConnectionManager.onConnectionDetailsUpdate()', err.message);
                /* Errors setting the clientId are fatal to the connection */
                transport.fail(err);
                return;
            }
        }
        var connectionStateTtl = connectionDetails.connectionStateTtl;
        if (connectionStateTtl) {
            this.connectionStateTtl = connectionStateTtl;
        }
        this.maxIdleInterval = connectionDetails.maxIdleInterval;
        this.emit('connectiondetails', connectionDetails);
    };
    /*********************
     * transport management
     *********************/
    ConnectionManager.supportedTransports = {};
    return ConnectionManager;
}(eventemitter_1.default));
exports.default = ConnectionManager;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var MessageQueue = /** @class */ (function (_super) {
    tslib_1.__extends(MessageQueue, _super);
    function MessageQueue() {
        var _this = _super.call(this) || this;
        _this.messages = [];
        return _this;
    }
    MessageQueue.prototype.count = function () {
        return this.messages.length;
    };
    MessageQueue.prototype.push = function (message) {
        this.messages.push(message);
    };
    MessageQueue.prototype.shift = function () {
        return this.messages.shift();
    };
    MessageQueue.prototype.last = function () {
        return this.messages[this.messages.length - 1];
    };
    MessageQueue.prototype.copyAll = function () {
        return this.messages.slice();
    };
    MessageQueue.prototype.append = function (messages) {
        this.messages.push.apply(this.messages, messages);
    };
    MessageQueue.prototype.prepend = function (messages) {
        this.messages.unshift.apply(this.messages, messages);
    };
    MessageQueue.prototype.completeMessages = function (serial, count, err) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'MessageQueue.completeMessages()', 'serial = ' + serial + '; count = ' + count);
        err = err || null;
        var messages = this.messages;
        if (messages.length === 0) {
            throw new Error('MessageQueue.completeMessages(): completeMessages called on any empty MessageQueue');
        }
        var first = messages[0];
        if (first) {
            var startSerial = first.message.msgSerial;
            var endSerial = serial + count; /* the serial of the first message that is *not* the subject of this call */
            if (endSerial > startSerial) {
                var completeMessages = messages.splice(0, endSerial - startSerial);
                for (var _i = 0, completeMessages_1 = completeMessages; _i < completeMessages_1.length; _i++) {
                    var message = completeMessages_1[_i];
                    message.callback(err);
                }
            }
            if (messages.length == 0)
                this.emit('idle');
        }
    };
    MessageQueue.prototype.completeAllMessages = function (err) {
        this.completeMessages(0, Number.MAX_SAFE_INTEGER || Number.MAX_VALUE, err);
    };
    MessageQueue.prototype.resetSendAttempted = function () {
        for (var _i = 0, _a = this.messages; _i < _a.length; _i++) {
            var msg = _a[_i];
            msg.sendAttempted = false;
        }
    };
    MessageQueue.prototype.clear = function () {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'MessageQueue.clear()', 'clearing ' + this.messages.length + ' messages');
        this.messages = [];
        this.emit('idle');
    };
    return MessageQueue;
}(eventemitter_1.default));
exports.default = MessageQueue;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConnectionStateChange = /** @class */ (function () {
    function ConnectionStateChange(previous, current, retryIn, reason) {
        this.previous = previous;
        this.current = current;
        if (retryIn)
            this.retryIn = retryIn;
        if (reason)
            this.reason = reason;
    }
    return ConnectionStateChange;
}());
exports.default = ConnectionStateChange;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var channel_1 = tslib_1.__importDefault(__webpack_require__(33));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var realtimepresence_1 = tslib_1.__importDefault(__webpack_require__(54));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var channelstatechange_1 = tslib_1.__importDefault(__webpack_require__(39));
var errorinfo_1 = tslib_1.__importStar(__webpack_require__(4));
var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(15));
var connectionerrors_1 = tslib_1.__importDefault(__webpack_require__(20));
var actions = protocolmessage_1.default.Action;
var noop = function () { };
function validateChannelOptions(options) {
    if (options && 'params' in options && !Utils.isObject(options.params)) {
        return new errorinfo_1.default('options.params must be an object', 40000, 400);
    }
    if (options && 'modes' in options) {
        if (!Utils.isArray(options.modes)) {
            return new errorinfo_1.default('options.modes must be an array', 40000, 400);
        }
        for (var i = 0; i < options.modes.length; i++) {
            var currentMode = options.modes[i];
            if (!currentMode ||
                typeof currentMode !== 'string' ||
                !Utils.arrIn(protocolmessage_1.default.channelModes, String.prototype.toUpperCase.call(currentMode))) {
                return new errorinfo_1.default('Invalid channel mode: ' + currentMode, 40000, 400);
            }
        }
    }
}
var RealtimeChannel = /** @class */ (function (_super) {
    tslib_1.__extends(RealtimeChannel, _super);
    function RealtimeChannel(realtime, name, options) {
        var _this = _super.call(this, realtime, name, options) || this;
        _this.retryCount = 0;
        _this.history = function (params, callback) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.history()', 'channel = ' + this.name);
            /* params and callback are optional; see if params contains the callback */
            if (callback === undefined) {
                if (typeof params == 'function') {
                    callback = params;
                    params = null;
                }
                else {
                    if (this.rest.options.promises) {
                        return Utils.promisify(this, 'history', arguments);
                    }
                    callback = noop;
                }
            }
            if (params && params.untilAttach) {
                if (this.state !== 'attached') {
                    callback(new errorinfo_1.default('option untilAttach requires the channel to be attached', 40000, 400));
                    return;
                }
                if (!this.properties.attachSerial) {
                    callback(new errorinfo_1.default('untilAttach was specified and channel is attached, but attachSerial is not defined', 40000, 400));
                    return;
                }
                delete params.untilAttach;
                params.from_serial = this.properties.attachSerial;
            }
            channel_1.default.prototype._history.call(this, params, callback);
        };
        _this.whenState = (function (state, listener) {
            return eventemitter_1.default.prototype.whenState.call(_this, state, _this.state, listener);
        });
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel()', 'started; name = ' + name);
        _this.realtime = realtime;
        _this.presence = new realtimepresence_1.default(_this);
        _this.connectionManager = realtime.connection.connectionManager;
        _this.state = 'initialized';
        _this.subscriptions = new eventemitter_1.default();
        _this.syncChannelSerial = undefined;
        _this.properties = {
            attachSerial: undefined,
            channelSerial: undefined,
        };
        _this.setOptions(options);
        _this.errorReason = null;
        _this._requestedFlags = null;
        _this._mode = null;
        _this._attachResume = false;
        _this._decodingContext = {
            channelOptions: _this.channelOptions,
            plugins: realtime.options.plugins || {},
            baseEncodedPreviousPayload: undefined,
        };
        _this._lastPayload = {
            messageId: null,
            protocolMessageChannelSerial: null,
            decodeFailureRecoveryInProgress: null,
        };
        /* Only differences between this and the public event emitter is that this emits an
         * update event for all ATTACHEDs, whether resumed or not */
        _this._allChannelChanges = new eventemitter_1.default();
        return _this;
    }
    RealtimeChannel.prototype.invalidStateError = function () {
        return new errorinfo_1.default('Channel operation failed as channel state is ' + this.state, 90001, 400, this.errorReason || undefined);
    };
    RealtimeChannel.processListenerArgs = function (args) {
        /* [event], listener, [callback] */
        args = Array.prototype.slice.call(args);
        if (typeof args[0] === 'function') {
            args.unshift(null);
        }
        if (args[args.length - 1] == undefined) {
            args.pop();
        }
        return args;
    };
    RealtimeChannel.prototype.setOptions = function (options, callback) {
        if (!callback) {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'setOptions', arguments);
            }
        }
        var _callback = callback ||
            function (err) {
                if (err) {
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel.setOptions()', 'Set options failed: ' + err.toString());
                }
            };
        var err = validateChannelOptions(options);
        if (err) {
            _callback(err);
            return;
        }
        channel_1.default.prototype.setOptions.call(this, options);
        if (this._decodingContext)
            this._decodingContext.channelOptions = this.channelOptions;
        if (this._shouldReattachToSetOptions(options)) {
            /* This does not just do _attach(true, null, callback) because that would put us
             * into the 'attaching' state until we receive the new attached, which is
             * conceptually incorrect: we are still attached, we just have a pending request to
             * change some channel params. Per RTL17 going into the attaching state would mean
             * rejecting messages until we have confirmation that the options have changed,
             * which would unnecessarily lose message continuity. */
            this.attachImpl();
            // Ignore 'attaching' -- could be just due to to a resume & reattach, should not
            // call back setOptions until we're definitely attached with the new options (or
            // else in a terminal state)
            this._allChannelChanges.once(['attached', 'update', 'detached', 'failed'], function (stateChange) {
                switch (this.event) {
                    case 'update':
                    case 'attached':
                        _callback === null || _callback === void 0 ? void 0 : _callback(null);
                        return;
                    default:
                        _callback === null || _callback === void 0 ? void 0 : _callback(stateChange.reason);
                        return;
                }
            });
        }
        else {
            _callback();
        }
    };
    RealtimeChannel.prototype._shouldReattachToSetOptions = function (options) {
        if (!(this.state === 'attached' || this.state === 'attaching')) {
            return false;
        }
        if (options === null || options === void 0 ? void 0 : options.params) {
            // Don't check against the `agent` param - it isn't returned in the ATTACHED message
            var requestedParams = Object.assign({}, options.params);
            delete requestedParams.agent;
            if (Object.keys(requestedParams).length !== 0 && !this.params) {
                return true;
            }
            if (this.params && !Utils.shallowEquals(this.params, requestedParams)) {
                return true;
            }
        }
        if (options === null || options === void 0 ? void 0 : options.modes) {
            if (!this.modes || !Utils.arrEquals(options.modes, this.modes)) {
                return true;
            }
        }
        return false;
    };
    RealtimeChannel.prototype.publish = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var messages = args[0];
        var argCount = args.length;
        var callback = args[argCount - 1];
        if (typeof callback !== 'function') {
            if (this.realtime.options.promises) {
                return Utils.promisify(this, 'publish', arguments);
            }
            callback = noop;
            ++argCount;
        }
        if (!this.connectionManager.activeState()) {
            callback(this.connectionManager.getError());
            return;
        }
        if (argCount == 2) {
            if (Utils.isObject(messages))
                messages = [message_1.default.fromValues(messages)];
            else if (Utils.isArray(messages))
                messages = message_1.default.fromValuesArray(messages);
            else
                throw new errorinfo_1.default('The single-argument form of publish() expects a message object or an array of message objects', 40013, 400);
        }
        else {
            messages = [message_1.default.fromValues({ name: args[0], data: args[1] })];
        }
        var maxMessageSize = this.realtime.options.maxMessageSize;
        message_1.default.encodeArray(messages, this.channelOptions, function (err) {
            if (err) {
                callback(err);
                return;
            }
            /* RSL1i */
            var size = message_1.default.getMessagesSize(messages);
            if (size > maxMessageSize) {
                callback(new errorinfo_1.default('Maximum size of messages that can be published at once exceeded ( was ' +
                    size +
                    ' bytes; limit is ' +
                    maxMessageSize +
                    ' bytes)', 40009, 400));
                return;
            }
            _this.__publish(messages, callback);
        });
    };
    // Double underscore used to prevent type conflict with underlying Channel._publish method
    RealtimeChannel.prototype.__publish = function (messages, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.publish()', 'message count = ' + messages.length);
        var state = this.state;
        switch (state) {
            case 'failed':
            case 'suspended':
                callback(errorinfo_1.default.fromValues(this.invalidStateError()));
                break;
            default: {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.publish()', 'sending message; channel state is ' + state);
                var msg = new protocolmessage_1.default();
                msg.action = actions.MESSAGE;
                msg.channel = this.name;
                msg.messages = messages;
                this.sendMessage(msg, callback);
                break;
            }
        }
    };
    RealtimeChannel.prototype.onEvent = function (messages) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.onEvent()', 'received message');
        var subscriptions = this.subscriptions;
        for (var i = 0; i < messages.length; i++) {
            var message = messages[i];
            subscriptions.emit(message.name, message);
        }
    };
    RealtimeChannel.prototype.attach = function (flags, callback) {
        var _flags;
        if (typeof flags === 'function') {
            callback = flags;
            _flags = null;
        }
        else {
            _flags = flags;
        }
        if (!callback) {
            if (this.realtime.options.promises) {
                return Utils.promisify(this, 'attach', arguments);
            }
            callback = function (err) {
                if (err) {
                    logger_1.default.logAction(logger_1.default.LOG_MAJOR, 'RealtimeChannel.attach()', 'Channel attach failed: ' + err.toString());
                }
            };
        }
        if (_flags) {
            logger_1.default.deprecated('channel.attach() with flags', 'channel.setOptions() with channelOptions.params');
            /* If flags requested, always do a re-attach. TODO only do this if
             * current mode differs from requested mode */
            this._requestedFlags = _flags;
        }
        else if (this.state === 'attached') {
            callback(null, null);
            return;
        }
        this._attach(false, null, callback);
    };
    RealtimeChannel.prototype._attach = function (forceReattach, attachReason, callback) {
        if (!callback) {
            callback = function (err) {
                if (err) {
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel._attach()', 'Channel attach failed: ' + err.toString());
                }
            };
        }
        var connectionManager = this.connectionManager;
        if (!connectionManager.activeState()) {
            callback(connectionManager.getError());
            return;
        }
        if (this.state !== 'attaching' || forceReattach) {
            this.requestState('attaching', attachReason);
        }
        this.once(function (stateChange) {
            switch (this.event) {
                case 'attached':
                    callback === null || callback === void 0 ? void 0 : callback(null, stateChange);
                    break;
                case 'detached':
                case 'suspended':
                case 'failed':
                    callback === null || callback === void 0 ? void 0 : callback(stateChange.reason ||
                        connectionManager.getError() ||
                        new errorinfo_1.default('Unable to attach; reason unknown; state = ' + this.event, 90000, 500));
                    break;
                case 'detaching':
                    callback === null || callback === void 0 ? void 0 : callback(new errorinfo_1.default('Attach request superseded by a subsequent detach request', 90000, 409));
                    break;
            }
        });
    };
    RealtimeChannel.prototype.attachImpl = function () {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.attachImpl()', 'sending ATTACH message');
        var attachMsg = protocolmessage_1.default.fromValues({
            action: actions.ATTACH,
            channel: this.name,
            params: this.channelOptions.params,
            // RTL4c1: Includes the channel serial to resume from a previous message
            // or attachment.
            channelSerial: this.properties.channelSerial,
        });
        if (this._requestedFlags) {
            attachMsg.encodeModesToFlags(this._requestedFlags);
        }
        else if (this.channelOptions.modes) {
            attachMsg.encodeModesToFlags(Utils.allToUpperCase(this.channelOptions.modes));
        }
        if (this._attachResume) {
            attachMsg.setFlag('ATTACH_RESUME');
        }
        if (this._lastPayload.decodeFailureRecoveryInProgress) {
            attachMsg.channelSerial = this._lastPayload.protocolMessageChannelSerial;
        }
        this.sendMessage(attachMsg, noop);
    };
    RealtimeChannel.prototype.detach = function (callback) {
        if (!callback) {
            if (this.realtime.options.promises) {
                return Utils.promisify(this, 'detach', arguments);
            }
            callback = noop;
        }
        var connectionManager = this.connectionManager;
        if (!connectionManager.activeState()) {
            callback(connectionManager.getError());
            return;
        }
        switch (this.state) {
            case 'suspended':
                this.notifyState('detached');
                callback();
                break;
            case 'detached':
                callback();
                break;
            case 'failed':
                callback(new errorinfo_1.default('Unable to detach; channel state = failed', 90001, 400));
                break;
            default:
                this.requestState('detaching');
            // eslint-disable-next-line no-fallthrough
            case 'detaching':
                this.once(function (stateChange) {
                    switch (this.event) {
                        case 'detached':
                            callback();
                            break;
                        case 'attached':
                        case 'suspended':
                        case 'failed':
                            callback(stateChange.reason ||
                                connectionManager.getError() ||
                                new errorinfo_1.default('Unable to detach; reason unknown; state = ' + this.event, 90000, 500));
                            break;
                        case 'attaching':
                            callback(new errorinfo_1.default('Detach request superseded by a subsequent attach request', 90000, 409));
                            break;
                    }
                });
        }
    };
    RealtimeChannel.prototype.detachImpl = function (callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.detach()', 'sending DETACH message');
        var msg = protocolmessage_1.default.fromValues({ action: actions.DETACH, channel: this.name });
        this.sendMessage(msg, callback || noop);
    };
    RealtimeChannel.prototype.subscribe = function () {
        var args = []; /* [event], listener, [callback] */
        for (var _i = 0 /* [event], listener, [callback] */; _i < arguments.length /* [event], listener, [callback] */; _i++ /* [event], listener, [callback] */) {
            args[_i] = arguments[_i]; /* [event], listener, [callback] */
        }
        var _a = RealtimeChannel.processListenerArgs(args), event = _a[0], listener = _a[1], callback = _a[2];
        if (!callback && this.realtime.options.promises) {
            return Utils.promisify(this, 'subscribe', [event, listener]);
        }
        if (this.state === 'failed') {
            callback === null || callback === void 0 ? void 0 : callback(errorinfo_1.default.fromValues(this.invalidStateError()));
            return;
        }
        // Filtered
        if (event && typeof event === 'object' && !Array.isArray(event)) {
            this._subscribeFilter(event, listener);
        }
        else {
            this.subscriptions.on(event, listener);
        }
        return this.attach(callback || noop);
    };
    RealtimeChannel.prototype._subscribeFilter = function (filter, listener) {
        var filteredListener = function (m) {
            var _a, _b, _c, _d, _e, _f;
            var mapping = {
                name: m.name,
                refTimeserial: (_b = (_a = m.extras) === null || _a === void 0 ? void 0 : _a.ref) === null || _b === void 0 ? void 0 : _b.timeserial,
                refType: (_d = (_c = m.extras) === null || _c === void 0 ? void 0 : _c.ref) === null || _d === void 0 ? void 0 : _d.type,
                isRef: !!((_f = (_e = m.extras) === null || _e === void 0 ? void 0 : _e.ref) === null || _f === void 0 ? void 0 : _f.timeserial),
                clientId: m.clientId,
            };
            // Check if any values are defined in the filter and if they match the value in the message object
            if (Object.entries(filter).find(function (_a) {
                var key = _a[0], value = _a[1];
                return value !== undefined ? mapping[key] !== value : false;
            })) {
                return;
            }
            listener(m);
        };
        this._addFilteredSubscription(filter, listener, filteredListener);
        this.subscriptions.on(filteredListener);
    };
    // Adds a new filtered subscription
    RealtimeChannel.prototype._addFilteredSubscription = function (filter, realListener, filteredListener) {
        var _a;
        if (!this.filteredSubscriptions) {
            this.filteredSubscriptions = new Map();
        }
        if (this.filteredSubscriptions.has(realListener)) {
            var realListenerMap = this.filteredSubscriptions.get(realListener);
            // Add the filtered listener to the map, or append to the array if this filter has already been used
            realListenerMap.set(filter, ((_a = realListenerMap === null || realListenerMap === void 0 ? void 0 : realListenerMap.get(filter)) === null || _a === void 0 ? void 0 : _a.concat(filteredListener)) || [filteredListener]);
        }
        else {
            this.filteredSubscriptions.set(realListener, new Map([[filter, [filteredListener]]]));
        }
    };
    RealtimeChannel.prototype._getAndDeleteFilteredSubscriptions = function (filter, realListener) {
        var _this = this;
        // No filtered subscriptions map means there has been no filtered subscriptions yet, so return nothing
        if (!this.filteredSubscriptions) {
            return [];
        }
        // Only a filter is passed in with no specific listener
        if (!realListener && filter) {
            // Return each listener which is attached to the specified filter object
            return Array.from(this.filteredSubscriptions.entries())
                .map(function (_a) {
                var _b;
                var key = _a[0], filterMaps = _a[1];
                // Get (then delete) the maps matching this filter
                var listenerMaps = filterMaps.get(filter);
                filterMaps.delete(filter);
                // Clear the parent if nothing is left
                if (filterMaps.size === 0) {
                    (_b = _this.filteredSubscriptions) === null || _b === void 0 ? void 0 : _b.delete(key);
                }
                return listenerMaps;
            })
                .reduce(function (prev, cur) {
                var _a;
                return (cur ? (_a = prev).concat.apply(_a, cur) : prev);
            }, []);
        }
        // No subscriptions for this listener
        if (!realListener || !this.filteredSubscriptions.has(realListener)) {
            return [];
        }
        var realListenerMap = this.filteredSubscriptions.get(realListener);
        // If no filter is specified return all listeners using that function
        if (!filter) {
            // array.flat is not available unless we support es2019 or higher
            var listeners_1 = Array.from(realListenerMap.values()).reduce(function (prev, cur) { return prev.concat.apply(prev, cur); }, []);
            // remove the listener from the map
            this.filteredSubscriptions.delete(realListener);
            return listeners_1;
        }
        var listeners = realListenerMap.get(filter);
        realListenerMap.delete(filter);
        return listeners || [];
    };
    RealtimeChannel.prototype.unsubscribe = function () {
        var _this = this;
        var _a;
        var args = []; /* [event], listener */
        for (var _i = 0 /* [event], listener */; _i < arguments.length /* [event], listener */; _i++ /* [event], listener */) {
            args[_i] = arguments[_i]; /* [event], listener */
        }
        var _b = RealtimeChannel.processListenerArgs(args), event = _b[0], listener = _b[1];
        // If we either have a filtered listener, a filter or both we need to do additional processing to find the original function(s)
        if ((typeof event === 'object' && !listener) || ((_a = this.filteredSubscriptions) === null || _a === void 0 ? void 0 : _a.has(listener))) {
            this._getAndDeleteFilteredSubscriptions(event, listener).forEach(function (l) { return _this.subscriptions.off(l); });
            return;
        }
        this.subscriptions.off(event, listener);
    };
    RealtimeChannel.prototype.sync = function () {
        /* check preconditions */
        switch (this.state) {
            case 'initialized':
            case 'detaching':
            case 'detached':
                throw new errorinfo_1.PartialErrorInfo('Unable to sync to channel; not attached', 40000);
            default:
        }
        var connectionManager = this.connectionManager;
        if (!connectionManager.activeState()) {
            throw connectionManager.getError();
        }
        /* send sync request */
        var syncMessage = protocolmessage_1.default.fromValues({ action: actions.SYNC, channel: this.name });
        if (this.syncChannelSerial) {
            syncMessage.channelSerial = this.syncChannelSerial;
        }
        connectionManager.send(syncMessage);
    };
    RealtimeChannel.prototype.sendMessage = function (msg, callback) {
        this.connectionManager.send(msg, this.realtime.options.queueMessages, callback);
    };
    RealtimeChannel.prototype.sendPresence = function (presence, callback) {
        var msg = protocolmessage_1.default.fromValues({
            action: actions.PRESENCE,
            channel: this.name,
            presence: Utils.isArray(presence)
                ? presencemessage_1.default.fromValuesArray(presence)
                : [presencemessage_1.default.fromValues(presence)],
        });
        this.sendMessage(msg, callback);
    };
    RealtimeChannel.prototype.onMessage = function (message) {
        if (message.action === actions.ATTACHED ||
            message.action === actions.MESSAGE ||
            message.action === actions.PRESENCE) {
            // RTL15b
            this.setChannelSerial(message.channelSerial);
        }
        var syncChannelSerial, isSync = false;
        switch (message.action) {
            case actions.ATTACHED: {
                this.properties.attachSerial = message.channelSerial;
                this._mode = message.getMode();
                this.params = message.params || {};
                var modesFromFlags = message.decodeModesFromFlags();
                this.modes = (modesFromFlags && Utils.allToLowerCase(modesFromFlags)) || undefined;
                var resumed = message.hasFlag('RESUMED');
                var hasPresence = message.hasFlag('HAS_PRESENCE');
                var hasBacklog = message.hasFlag('HAS_BACKLOG');
                if (this.state === 'attached') {
                    if (!resumed) {
                        /* On a loss of continuity, the presence set needs to be re-synced */
                        this.presence.onAttached(hasPresence);
                    }
                    var change = new channelstatechange_1.default(this.state, this.state, resumed, hasBacklog, message.error);
                    this._allChannelChanges.emit('update', change);
                    if (!resumed || this.channelOptions.updateOnAttached) {
                        this.emit('update', change);
                    }
                }
                else if (this.state === 'detaching') {
                    /* RTL5i: re-send DETACH and remain in the 'detaching' state */
                    this.checkPendingState();
                }
                else {
                    this.notifyState('attached', message.error, resumed, hasPresence, hasBacklog);
                }
                break;
            }
            case actions.DETACHED: {
                var detachErr = message.error
                    ? errorinfo_1.default.fromValues(message.error)
                    : new errorinfo_1.default('Channel detached', 90001, 404);
                if (this.state === 'detaching') {
                    this.notifyState('detached', detachErr);
                }
                else if (this.state === 'attaching') {
                    /* Only retry immediately if we were previously attached. If we were
                     * attaching, go into suspended, fail messages, and wait a few seconds
                     * before retrying */
                    this.notifyState('suspended', detachErr);
                }
                else {
                    this.requestState('attaching', detachErr);
                }
                break;
            }
            case actions.SYNC:
                /* syncs can have channelSerials, but might not if the sync is one page long */
                isSync = true;
                syncChannelSerial = this.syncChannelSerial = message.channelSerial;
                /* syncs can happen on channels with no presence data as part of connection
                 * resuming, in which case protocol message has no presence property */
                if (!message.presence)
                    break;
            // eslint-disable-next-line no-fallthrough
            case actions.PRESENCE: {
                var presence = message.presence;
                var id = message.id, connectionId = message.connectionId, timestamp = message.timestamp;
                var options = this.channelOptions;
                var presenceMsg = void 0;
                for (var i = 0; i < presence.length; i++) {
                    try {
                        presenceMsg = presence[i];
                        presencemessage_1.default.decode(presenceMsg, options);
                        if (!presenceMsg.connectionId)
                            presenceMsg.connectionId = connectionId;
                        if (!presenceMsg.timestamp)
                            presenceMsg.timestamp = timestamp;
                        if (!presenceMsg.id)
                            presenceMsg.id = id + ':' + i;
                    }
                    catch (e) {
                        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel.onMessage()', e.toString());
                    }
                }
                this.presence.setPresence(presence, isSync, syncChannelSerial);
                break;
            }
            case actions.MESSAGE: {
                //RTL17
                if (this.state !== 'attached') {
                    logger_1.default.logAction(logger_1.default.LOG_MAJOR, 'RealtimeChannel.onMessage()', 'Message "' +
                        message.id +
                        '" skipped as this channel "' +
                        this.name +
                        '" state is not "attached" (state is "' +
                        this.state +
                        '").');
                    return;
                }
                var messages = message.messages, firstMessage = messages[0], lastMessage = messages[messages.length - 1], id = message.id, connectionId = message.connectionId, timestamp = message.timestamp;
                if (firstMessage.extras &&
                    firstMessage.extras.delta &&
                    firstMessage.extras.delta.from !== this._lastPayload.messageId) {
                    var msg = 'Delta message decode failure - previous message not available for message "' +
                        message.id +
                        '" on this channel "' +
                        this.name +
                        '".';
                    logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel.onMessage()', msg);
                    this._startDecodeFailureRecovery(new errorinfo_1.default(msg, 40018, 400));
                    break;
                }
                for (var i = 0; i < messages.length; i++) {
                    var msg = messages[i];
                    try {
                        message_1.default.decode(msg, this._decodingContext);
                    }
                    catch (e) {
                        /* decrypt failed .. the most likely cause is that we have the wrong key */
                        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel.onMessage()', e.toString());
                        switch (e.code) {
                            case 40018:
                                /* decode failure */
                                this._startDecodeFailureRecovery(e);
                                return;
                            case 40019:
                            /* No vcdiff plugin passed in - no point recovering, give up */
                            // eslint-disable-next-line no-fallthrough
                            case 40021:
                                /* Browser does not support deltas, similarly no point recovering */
                                this.notifyState('failed', e);
                                return;
                        }
                    }
                    if (!msg.connectionId)
                        msg.connectionId = connectionId;
                    if (!msg.timestamp)
                        msg.timestamp = timestamp;
                    if (!msg.id)
                        msg.id = id + ':' + i;
                }
                this._lastPayload.messageId = lastMessage.id;
                this._lastPayload.protocolMessageChannelSerial = message.channelSerial;
                this.onEvent(messages);
                break;
            }
            case actions.ERROR: {
                /* there was a channel-specific error */
                var err = message.error;
                if (err && err.code == 80016) {
                    /* attach/detach operation attempted on superseded transport handle */
                    this.checkPendingState();
                }
                else {
                    this.notifyState('failed', errorinfo_1.default.fromValues(err));
                }
                break;
            }
            default:
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimeChannel.onMessage()', 'Fatal protocol error: unrecognised action (' + message.action + ')');
                this.connectionManager.abort(connectionerrors_1.default.unknownChannelErr());
        }
    };
    RealtimeChannel.prototype._startDecodeFailureRecovery = function (reason) {
        var _this = this;
        if (!this._lastPayload.decodeFailureRecoveryInProgress) {
            logger_1.default.logAction(logger_1.default.LOG_MAJOR, 'RealtimeChannel.onMessage()', 'Starting decode failure recovery process.');
            this._lastPayload.decodeFailureRecoveryInProgress = true;
            this._attach(true, reason, function () {
                _this._lastPayload.decodeFailureRecoveryInProgress = false;
            });
        }
    };
    RealtimeChannel.prototype.onAttached = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.onAttached', 'activating channel; name = ' + this.name);
    };
    RealtimeChannel.prototype.notifyState = function (state, reason, resumed, hasPresence, hasBacklog) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.notifyState', 'name = ' + this.name + ', current state = ' + this.state + ', notifying state ' + state);
        this.clearStateTimer();
        // RTP5a1
        if (Utils.arrIn(['detached', 'suspended', 'failed'], state)) {
            this.properties.channelSerial = null;
        }
        if (state === this.state) {
            return;
        }
        this.presence.actOnChannelState(state, hasPresence, reason);
        if (state === 'suspended' && this.connectionManager.state.sendEvents) {
            this.startRetryTimer();
        }
        else {
            this.cancelRetryTimer();
        }
        if (reason) {
            this.errorReason = reason;
        }
        var change = new channelstatechange_1.default(this.state, state, resumed, hasBacklog, reason);
        var logLevel = state === 'failed' ? logger_1.default.LOG_ERROR : logger_1.default.LOG_MAJOR;
        logger_1.default.logAction(logLevel, 'Channel state for channel "' + this.name + '"', state + (reason ? '; reason: ' + reason : ''));
        if (state !== 'attaching' && state !== 'suspended') {
            this.retryCount = 0;
        }
        /* Note: we don't set inProgress for pending states until the request is actually in progress */
        if (state === 'attached') {
            this.onAttached();
        }
        if (state === 'attached') {
            this._attachResume = true;
        }
        else if (state === 'detaching' || state === 'failed') {
            this._attachResume = false;
        }
        this.state = state;
        this._allChannelChanges.emit(state, change);
        this.emit(state, change);
    };
    RealtimeChannel.prototype.requestState = function (state, reason) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.requestState', 'name = ' + this.name + ', state = ' + state);
        this.notifyState(state, reason);
        /* send the event and await response */
        this.checkPendingState();
    };
    RealtimeChannel.prototype.checkPendingState = function () {
        /* if can't send events, do nothing */
        var cmState = this.connectionManager.state;
        /* Allow attach messages to queue up when synchronizing, since this will be
         * the state we'll be in when upgrade transport.active triggers a checkpendingstate */
        if (!(cmState.sendEvents || cmState.forceQueueEvents)) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.checkPendingState', 'sendEvents is false; state is ' + this.connectionManager.state.state);
            return;
        }
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.checkPendingState', 'name = ' + this.name + ', state = ' + this.state);
        /* Only start the state timer running when actually sending the event */
        switch (this.state) {
            case 'attaching':
                this.startStateTimerIfNotRunning();
                this.attachImpl();
                break;
            case 'detaching':
                this.startStateTimerIfNotRunning();
                this.detachImpl();
                break;
            case 'attached':
                /* resume any sync operation that was in progress */
                this.sync();
                break;
            default:
                break;
        }
    };
    RealtimeChannel.prototype.timeoutPendingState = function () {
        switch (this.state) {
            case 'attaching': {
                var err = new errorinfo_1.default('Channel attach timed out', 90007, 408);
                this.notifyState('suspended', err);
                break;
            }
            case 'detaching': {
                var err = new errorinfo_1.default('Channel detach timed out', 90007, 408);
                this.notifyState('attached', err);
                break;
            }
            default:
                this.checkPendingState();
                break;
        }
    };
    RealtimeChannel.prototype.startStateTimerIfNotRunning = function () {
        var _this = this;
        if (!this.stateTimer) {
            this.stateTimer = setTimeout(function () {
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.startStateTimerIfNotRunning', 'timer expired');
                _this.stateTimer = null;
                _this.timeoutPendingState();
            }, this.realtime.options.timeouts.realtimeRequestTimeout);
        }
    };
    RealtimeChannel.prototype.clearStateTimer = function () {
        var stateTimer = this.stateTimer;
        if (stateTimer) {
            clearTimeout(stateTimer);
            this.stateTimer = null;
        }
    };
    RealtimeChannel.prototype.startRetryTimer = function () {
        var _this = this;
        if (this.retryTimer)
            return;
        this.retryCount++;
        var retryDelay = Utils.getRetryTime(this.realtime.options.timeouts.channelRetryTimeout, this.retryCount);
        this.retryTimer = setTimeout(function () {
            /* If connection is not connected, just leave in suspended, a reattach
             * will be triggered once it connects again */
            if (_this.state === 'suspended' && _this.connectionManager.state.sendEvents) {
                _this.retryTimer = null;
                logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel retry timer expired', 'attempting a new attach');
                _this.requestState('attaching');
            }
        }, retryDelay);
    };
    RealtimeChannel.prototype.cancelRetryTimer = function () {
        if (this.retryTimer) {
            clearTimeout(this.retryTimer);
            this.retryTimer = null;
        }
    };
    /* @returns null (if can safely be released) | ErrorInfo (if cannot) */
    RealtimeChannel.prototype.getReleaseErr = function () {
        var s = this.state;
        if (s === 'initialized' || s === 'detached' || s === 'failed') {
            return null;
        }
        return new errorinfo_1.default('Can only release a channel in a state where there is no possibility of further updates from the server being received (initialized, detached, or failed); was ' +
            s, 90001, 400);
    };
    RealtimeChannel.prototype.setChannelSerial = function (channelSerial) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimeChannel.setChannelSerial()', 'Updating channel serial; serial = ' + channelSerial + '; previous = ' + this.properties.channelSerial);
        // RTP17h: Only update the channel serial if its present (it won't always
        // be set).
        if (channelSerial) {
            this.properties.channelSerial = channelSerial;
        }
    };
    return RealtimeChannel;
}(channel_1.default));
exports.default = RealtimeChannel;


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ChannelStateChange = /** @class */ (function () {
    function ChannelStateChange(previous, current, resumed, hasBacklog, reason) {
        this.previous = previous;
        this.current = current;
        if (current === 'attached') {
            this.resumed = resumed;
            this.hasBacklog = hasBacklog;
        }
        if (reason)
            this.reason = reason;
    }
    return ChannelStateChange;
}());
exports.default = ChannelStateChange;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function inspect(buffer) {
    if (buffer === undefined)
        return 'undefined';
    var view;
    var type;
    if (buffer instanceof ArrayBuffer) {
        type = 'ArrayBuffer';
        view = new DataView(buffer);
    }
    else if (buffer instanceof DataView) {
        type = 'DataView';
        view = buffer;
    }
    if (!view)
        return JSON.stringify(buffer);
    var bytes = [];
    for (var i = 0; i < buffer.byteLength; i++) {
        if (i > 20) {
            bytes.push('...');
            break;
        }
        var byte_ = view.getUint8(i).toString(16);
        if (byte_.length === 1)
            byte_ = '0' + byte_;
        bytes.push(byte_);
    }
    return '<' + type + ' ' + bytes.join(' ') + '>';
}
// Encode string as utf8 into dataview at offset
function utf8Write(view, offset, string) {
    for (var i = 0, l = string.length; i < l; i++) {
        var codePoint = string.charCodeAt(i);
        // One byte of UTF-8
        if (codePoint < 0x80) {
            view.setUint8(offset++, ((codePoint >>> 0) & 0x7f) | 0x00);
            continue;
        }
        // Two bytes of UTF-8
        if (codePoint < 0x800) {
            view.setUint8(offset++, ((codePoint >>> 6) & 0x1f) | 0xc0);
            view.setUint8(offset++, ((codePoint >>> 0) & 0x3f) | 0x80);
            continue;
        }
        // Three bytes of UTF-8.
        if (codePoint < 0x10000) {
            view.setUint8(offset++, ((codePoint >>> 12) & 0x0f) | 0xe0);
            view.setUint8(offset++, ((codePoint >>> 6) & 0x3f) | 0x80);
            view.setUint8(offset++, ((codePoint >>> 0) & 0x3f) | 0x80);
            continue;
        }
        // Four bytes of UTF-8
        if (codePoint < 0x110000) {
            view.setUint8(offset++, ((codePoint >>> 18) & 0x07) | 0xf0);
            view.setUint8(offset++, ((codePoint >>> 12) & 0x3f) | 0x80);
            view.setUint8(offset++, ((codePoint >>> 6) & 0x3f) | 0x80);
            view.setUint8(offset++, ((codePoint >>> 0) & 0x3f) | 0x80);
            continue;
        }
        throw new Error('bad codepoint ' + codePoint);
    }
}
function utf8Read(view, offset, length) {
    var string = '';
    for (var i = offset, end = offset + length; i < end; i++) {
        var byte_ = view.getUint8(i);
        // One byte character
        if ((byte_ & 0x80) === 0x00) {
            string += String.fromCharCode(byte_);
            continue;
        }
        // Two byte character
        if ((byte_ & 0xe0) === 0xc0) {
            string += String.fromCharCode(((byte_ & 0x0f) << 6) | (view.getUint8(++i) & 0x3f));
            continue;
        }
        // Three byte character
        if ((byte_ & 0xf0) === 0xe0) {
            string += String.fromCharCode(((byte_ & 0x0f) << 12) | ((view.getUint8(++i) & 0x3f) << 6) | ((view.getUint8(++i) & 0x3f) << 0));
            continue;
        }
        // Four byte character
        if ((byte_ & 0xf8) === 0xf0) {
            string += String.fromCharCode(((byte_ & 0x07) << 18) |
                ((view.getUint8(++i) & 0x3f) << 12) |
                ((view.getUint8(++i) & 0x3f) << 6) |
                ((view.getUint8(++i) & 0x3f) << 0));
            continue;
        }
        throw new Error('Invalid byte ' + byte_.toString(16));
    }
    return string;
}
function utf8ByteCount(string) {
    var count = 0;
    for (var i = 0, l = string.length; i < l; i++) {
        var codePoint = string.charCodeAt(i);
        if (codePoint < 0x80) {
            count += 1;
            continue;
        }
        if (codePoint < 0x800) {
            count += 2;
            continue;
        }
        if (codePoint < 0x10000) {
            count += 3;
            continue;
        }
        if (codePoint < 0x110000) {
            count += 4;
            continue;
        }
        throw new Error('bad codepoint ' + codePoint);
    }
    return count;
}
function encode(value, sparse) {
    var size = sizeof(value, sparse);
    if (size === 0)
        return undefined;
    var buffer = new ArrayBuffer(size);
    var view = new DataView(buffer);
    _encode(value, view, 0, sparse);
    return buffer;
}
var SH_L_32 = (1 << 16) * (1 << 16), SH_R_32 = 1 / SH_L_32;
function getInt64(view, offset) {
    offset = offset || 0;
    return view.getInt32(offset) * SH_L_32 + view.getUint32(offset + 4);
}
function getUint64(view, offset) {
    offset = offset || 0;
    return view.getUint32(offset) * SH_L_32 + view.getUint32(offset + 4);
}
function setInt64(view, offset, val) {
    if (val < 0x8000000000000000) {
        view.setInt32(offset, Math.floor(val * SH_R_32));
        view.setInt32(offset + 4, val & -1);
    }
    else {
        view.setUint32(offset, 0x7fffffff);
        view.setUint32(offset + 4, 0x7fffffff);
    }
}
function setUint64(view, offset, val) {
    if (val < 0x10000000000000000) {
        view.setUint32(offset, Math.floor(val * SH_R_32));
        view.setInt32(offset + 4, val & -1);
    }
    else {
        view.setUint32(offset, 0xffffffff);
        view.setUint32(offset + 4, 0xffffffff);
    }
}
// https://gist.github.com/frsyuki/5432559 - v5 spec
//
// I've used one extension point from `fixext 1` to store `undefined`. On the wire this
// should translate to exactly 0xd40000
//
// +--------+--------+--------+
// |  0xd4  |  0x00  |  0x00  |
// +--------+--------+--------+
//    ^ fixext |        ^ value part unused (fixed to be 0)
//             ^ indicates undefined value
//
var Decoder = /** @class */ (function () {
    function Decoder(view, offset) {
        var _this = this;
        this.map = function (length) {
            var value = {};
            for (var i = 0; i < length; i++) {
                var key = _this.parse();
                value[key] = _this.parse();
            }
            return value;
        };
        this.bin = function (length) {
            var value = new ArrayBuffer(length);
            new Uint8Array(value).set(new Uint8Array(_this.view.buffer, _this.offset, length), 0);
            _this.offset += length;
            return value;
        };
        this.buf = this.bin;
        this.str = function (length) {
            var value = utf8Read(_this.view, _this.offset, length);
            _this.offset += length;
            return value;
        };
        this.array = function (length) {
            var value = new Array(length);
            for (var i = 0; i < length; i++) {
                value[i] = _this.parse();
            }
            return value;
        };
        this.ext = function (length) {
            _this.offset += length;
            return {
                type: _this.view.getInt8(_this.offset),
                data: _this.buf(length),
            };
        };
        this.parse = function () {
            var type = _this.view.getUint8(_this.offset);
            var value, length;
            // Positive FixInt - 0xxxxxxx
            if ((type & 0x80) === 0x00) {
                _this.offset++;
                return type;
            }
            // FixMap - 1000xxxx
            if ((type & 0xf0) === 0x80) {
                length = type & 0x0f;
                _this.offset++;
                return _this.map(length);
            }
            // FixArray - 1001xxxx
            if ((type & 0xf0) === 0x90) {
                length = type & 0x0f;
                _this.offset++;
                return _this.array(length);
            }
            // FixStr - 101xxxxx
            if ((type & 0xe0) === 0xa0) {
                length = type & 0x1f;
                _this.offset++;
                return _this.str(length);
            }
            // Negative FixInt - 111xxxxx
            if ((type & 0xe0) === 0xe0) {
                value = _this.view.getInt8(_this.offset);
                _this.offset++;
                return value;
            }
            switch (type) {
                // nil
                case 0xc0:
                    _this.offset++;
                    return null;
                // 0xc1 never used - use for undefined (NON-STANDARD)
                case 0xc1:
                    _this.offset++;
                    return undefined;
                // false
                case 0xc2:
                    _this.offset++;
                    return false;
                // true
                case 0xc3:
                    _this.offset++;
                    return true;
                // bin 8
                case 0xc4:
                    length = _this.view.getUint8(_this.offset + 1);
                    _this.offset += 2;
                    return _this.bin(length);
                // bin 16
                case 0xc5:
                    length = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return _this.bin(length);
                // bin 32
                case 0xc6:
                    length = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return _this.bin(length);
                // ext 8
                case 0xc7:
                    length = _this.view.getUint8(_this.offset + 1);
                    _this.offset += 2;
                    return _this.ext(length);
                // ext 16
                case 0xc8:
                    length = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return _this.ext(length);
                // ext 32
                case 0xc9:
                    length = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return _this.ext(length);
                // float 32
                case 0xca:
                    value = _this.view.getFloat32(_this.offset + 1);
                    _this.offset += 5;
                    return value;
                // float 64
                case 0xcb:
                    value = _this.view.getFloat64(_this.offset + 1);
                    _this.offset += 9;
                    return value;
                // uint8
                case 0xcc:
                    value = _this.view.getUint8(_this.offset + 1);
                    _this.offset += 2;
                    return value;
                // uint 16
                case 0xcd:
                    value = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return value;
                // uint 32
                case 0xce:
                    value = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return value;
                // uint 64
                case 0xcf:
                    value = getUint64(_this.view, _this.offset + 1);
                    _this.offset += 9;
                    return value;
                // int 8
                case 0xd0:
                    value = _this.view.getInt8(_this.offset + 1);
                    _this.offset += 2;
                    return value;
                // int 16
                case 0xd1:
                    value = _this.view.getInt16(_this.offset + 1);
                    _this.offset += 3;
                    return value;
                // int 32
                case 0xd2:
                    value = _this.view.getInt32(_this.offset + 1);
                    _this.offset += 5;
                    return value;
                // int 64
                case 0xd3:
                    value = getInt64(_this.view, _this.offset + 1);
                    _this.offset += 9;
                    return value;
                // fixext 1
                case 0xd4:
                    length = 1;
                    _this.offset++;
                    return _this.ext(length);
                // fixext 2
                case 0xd5:
                    length = 2;
                    _this.offset++;
                    return _this.ext(length);
                // fixext 4
                case 0xd6:
                    length = 4;
                    _this.offset++;
                    return _this.ext(length);
                // fixext 8
                case 0xd7:
                    length = 8;
                    _this.offset++;
                    return _this.ext(length);
                // fixext 16
                case 0xd8:
                    length = 16;
                    _this.offset++;
                    return _this.ext(length);
                // str8
                case 0xd9:
                    length = _this.view.getUint8(_this.offset + 1);
                    _this.offset += 2;
                    return _this.str(length);
                // str 16
                case 0xda:
                    length = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return _this.str(length);
                // str 32
                case 0xdb:
                    length = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return _this.str(length);
                // array 16
                case 0xdc:
                    length = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return _this.array(length);
                // array 32
                case 0xdd:
                    length = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return _this.array(length);
                // map 16
                case 0xde:
                    length = _this.view.getUint16(_this.offset + 1);
                    _this.offset += 3;
                    return _this.map(length);
                // map 32
                case 0xdf:
                    length = _this.view.getUint32(_this.offset + 1);
                    _this.offset += 5;
                    return _this.map(length);
            }
            throw new Error('Unknown type 0x' + type.toString(16));
        };
        this.offset = offset || 0;
        this.view = view;
    }
    return Decoder;
}());
function decode(buffer) {
    var view = new DataView(buffer);
    var decoder = new Decoder(view);
    var value = decoder.parse();
    if (decoder.offset !== buffer.byteLength)
        throw new Error(buffer.byteLength - decoder.offset + ' trailing bytes');
    return value;
}
function encodeableKeys(value, sparse) {
    return Object.keys(value).filter(function (e) {
        var val = value[e], type = typeof val;
        return (!sparse || (val !== undefined && val !== null)) && ('function' !== type || !!val.toJSON);
    });
}
function _encode(value, view, offset, sparse) {
    var type = typeof value;
    // Strings Bytes
    // There are four string types: fixstr/str8/str16/str32
    if (typeof value === 'string') {
        var length_1 = utf8ByteCount(value);
        // fixstr
        if (length_1 < 0x20) {
            view.setUint8(offset, length_1 | 0xa0);
            utf8Write(view, offset + 1, value);
            return 1 + length_1;
        }
        // str8
        if (length_1 < 0x100) {
            view.setUint8(offset, 0xd9);
            view.setUint8(offset + 1, length_1);
            utf8Write(view, offset + 2, value);
            return 2 + length_1;
        }
        // str16
        if (length_1 < 0x10000) {
            view.setUint8(offset, 0xda);
            view.setUint16(offset + 1, length_1);
            utf8Write(view, offset + 3, value);
            return 3 + length_1;
        }
        // str32
        if (length_1 < 0x100000000) {
            view.setUint8(offset, 0xdb);
            view.setUint32(offset + 1, length_1);
            utf8Write(view, offset + 5, value);
            return 5 + length_1;
        }
    }
    if (ArrayBuffer.isView && ArrayBuffer.isView(value)) {
        // extract the arraybuffer and fallthrough
        value = value.buffer;
    }
    // There are three bin types: bin8/bin16/bin32
    if (value instanceof ArrayBuffer) {
        var length_2 = value.byteLength;
        // bin8
        if (length_2 < 0x100) {
            view.setUint8(offset, 0xc4);
            view.setUint8(offset + 1, length_2);
            new Uint8Array(view.buffer).set(new Uint8Array(value), offset + 2);
            return 2 + length_2;
        }
        // bin16
        if (length_2 < 0x10000) {
            view.setUint8(offset, 0xc5);
            view.setUint16(offset + 1, length_2);
            new Uint8Array(view.buffer).set(new Uint8Array(value), offset + 3);
            return 3 + length_2;
        }
        // bin 32
        if (length_2 < 0x100000000) {
            view.setUint8(offset, 0xc6);
            view.setUint32(offset + 1, length_2);
            new Uint8Array(view.buffer).set(new Uint8Array(value), offset + 5);
            return 5 + length_2;
        }
    }
    if (typeof value === 'number') {
        // Floating Point
        // NOTE: We're always using float64
        if (Math.floor(value) !== value) {
            view.setUint8(offset, 0xcb);
            view.setFloat64(offset + 1, value);
            return 9;
        }
        // Integers
        if (value >= 0) {
            // positive fixnum
            if (value < 0x80) {
                view.setUint8(offset, value);
                return 1;
            }
            // uint 8
            if (value < 0x100) {
                view.setUint8(offset, 0xcc);
                view.setUint8(offset + 1, value);
                return 2;
            }
            // uint 16
            if (value < 0x10000) {
                view.setUint8(offset, 0xcd);
                view.setUint16(offset + 1, value);
                return 3;
            }
            // uint 32
            if (value < 0x100000000) {
                view.setUint8(offset, 0xce);
                view.setUint32(offset + 1, value);
                return 5;
            }
            // uint 64
            if (value < 0x10000000000000000) {
                view.setUint8(offset, 0xcf);
                setUint64(view, offset + 1, value);
                return 9;
            }
            throw new Error('Number too big 0x' + value.toString(16));
        }
        // negative fixnum
        if (value >= -0x20) {
            view.setInt8(offset, value);
            return 1;
        }
        // int 8
        if (value >= -0x80) {
            view.setUint8(offset, 0xd0);
            view.setInt8(offset + 1, value);
            return 2;
        }
        // int 16
        if (value >= -0x8000) {
            view.setUint8(offset, 0xd1);
            view.setInt16(offset + 1, value);
            return 3;
        }
        // int 32
        if (value >= -0x80000000) {
            view.setUint8(offset, 0xd2);
            view.setInt32(offset + 1, value);
            return 5;
        }
        // int 64
        if (value >= -0x8000000000000000) {
            view.setUint8(offset, 0xd3);
            setInt64(view, offset + 1, value);
            return 9;
        }
        throw new Error('Number too small -0x' + (-value).toString(16).substr(1));
    }
    // undefined - use d4 (NON-STANDARD)
    if (type === 'undefined') {
        if (sparse)
            return 0;
        view.setUint8(offset, 0xd4);
        view.setUint8(offset + 1, 0x00);
        view.setUint8(offset + 2, 0x00);
        return 3;
    }
    // null
    if (value === null) {
        if (sparse)
            return 0;
        view.setUint8(offset, 0xc0);
        return 1;
    }
    // Boolean
    if (type === 'boolean') {
        view.setUint8(offset, value ? 0xc3 : 0xc2);
        return 1;
    }
    if ('function' === typeof value.toJSON)
        return _encode(value.toJSON(), view, offset, sparse);
    // Container Types
    if (type === 'object') {
        var length_3, size = 0;
        var keys = void 0;
        var isArray = Array.isArray(value);
        if (isArray) {
            length_3 = value.length;
        }
        else {
            keys = encodeableKeys(value, sparse);
            length_3 = keys.length;
        }
        if (length_3 < 0x10) {
            view.setUint8(offset, length_3 | (isArray ? 0x90 : 0x80));
            size = 1;
        }
        else if (length_3 < 0x10000) {
            view.setUint8(offset, isArray ? 0xdc : 0xde);
            view.setUint16(offset + 1, length_3);
            size = 3;
        }
        else if (length_3 < 0x100000000) {
            view.setUint8(offset, isArray ? 0xdd : 0xdf);
            view.setUint32(offset + 1, length_3);
            size = 5;
        }
        if (isArray) {
            for (var i = 0; i < length_3; i++) {
                size += _encode(value[i], view, offset + size, sparse);
            }
        }
        else if (keys) {
            for (var i = 0; i < length_3; i++) {
                var key = keys[i];
                size += _encode(key, view, offset + size);
                size += _encode(value[key], view, offset + size, sparse);
            }
        }
        return size;
    }
    if (type === 'function')
        return 0;
    throw new Error('Unknown type ' + type);
}
function sizeof(value, sparse) {
    var type = typeof value;
    // fixstr or str8 or str16 or str32
    if (type === 'string') {
        var length_4 = utf8ByteCount(value);
        if (length_4 < 0x20) {
            return 1 + length_4;
        }
        if (length_4 < 0x100) {
            return 2 + length_4;
        }
        if (length_4 < 0x10000) {
            return 3 + length_4;
        }
        if (length_4 < 0x100000000) {
            return 5 + length_4;
        }
    }
    if (ArrayBuffer.isView && ArrayBuffer.isView(value)) {
        // extract the arraybuffer and fallthrough
        value = value.buffer;
    }
    // bin8 or bin16 or bin32
    if (value instanceof ArrayBuffer) {
        var length_5 = value.byteLength;
        if (length_5 < 0x100) {
            return 2 + length_5;
        }
        if (length_5 < 0x10000) {
            return 3 + length_5;
        }
        if (length_5 < 0x100000000) {
            return 5 + length_5;
        }
    }
    if (typeof value === 'number') {
        // Floating Point (32 bits)
        // double
        if (Math.floor(value) !== value)
            return 9;
        // Integers
        if (value >= 0) {
            // positive fixint
            if (value < 0x80)
                return 1;
            // uint 8
            if (value < 0x100)
                return 2;
            // uint 16
            if (value < 0x10000)
                return 3;
            // uint 32
            if (value < 0x100000000)
                return 5;
            // uint 64
            if (value < 0x10000000000000000)
                return 9;
            // Too big
            throw new Error('Number too big 0x' + value.toString(16));
        }
        // negative fixint
        if (value >= -0x20)
            return 1;
        // int 8
        if (value >= -0x80)
            return 2;
        // int 16
        if (value >= -0x8000)
            return 3;
        // int 32
        if (value >= -0x80000000)
            return 5;
        // int 64
        if (value >= -0x8000000000000000)
            return 9;
        // Too small
        throw new Error('Number too small -0x' + value.toString(16).substr(1));
    }
    // Boolean
    if (type === 'boolean')
        return 1;
    // undefined, null
    if (value === null)
        return sparse ? 0 : 1;
    if (value === undefined)
        return sparse ? 0 : 3;
    if ('function' === typeof value.toJSON)
        return sizeof(value.toJSON(), sparse);
    // Container Types
    if (type === 'object') {
        var length_6, size = 0;
        if (Array.isArray(value)) {
            length_6 = value.length;
            for (var i = 0; i < length_6; i++) {
                size += sizeof(value[i], sparse);
            }
        }
        else {
            var keys = encodeableKeys(value, sparse);
            length_6 = keys.length;
            for (var i = 0; i < length_6; i++) {
                var key = keys[i];
                size += sizeof(key) + sizeof(value[key], sparse);
            }
        }
        if (length_6 < 0x10) {
            return 1 + size;
        }
        if (length_6 < 0x10000) {
            return 3 + size;
        }
        if (length_6 < 0x100000000) {
            return 5 + size;
        }
        throw new Error('Array or object too long 0x' + length_6.toString(16));
    }
    if (type === 'function')
        return 0;
    throw new Error('Unknown type ' + type);
}
exports.default = {
    encode: encode,
    decode: decode,
    inspect: inspect,
    utf8Write: utf8Write,
    utf8Read: utf8Read,
    utf8ByteCount: utf8ByteCount,
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
// Common
var rest_1 = tslib_1.__importDefault(__webpack_require__(30));
var realtime_1 = tslib_1.__importDefault(__webpack_require__(50));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
// Platform Specific
var bufferutils_1 = tslib_1.__importDefault(__webpack_require__(55));
// @ts-ignore
var crypto_1 = tslib_1.__importDefault(__webpack_require__(57));
var http_1 = tslib_1.__importDefault(__webpack_require__(62));
var config_1 = tslib_1.__importDefault(__webpack_require__(64));
// @ts-ignore
var transport_1 = tslib_1.__importDefault(__webpack_require__(68));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var defaults_1 = __webpack_require__(8);
var webstorage_1 = tslib_1.__importDefault(__webpack_require__(65));
var defaults_2 = tslib_1.__importDefault(__webpack_require__(66));
var msgpack_1 = tslib_1.__importDefault(__webpack_require__(41));
var Crypto = (0, crypto_1.default)(config_1.default, bufferutils_1.default);
platform_1.default.Crypto = Crypto;
platform_1.default.BufferUtils = bufferutils_1.default;
platform_1.default.Http = http_1.default;
platform_1.default.Config = config_1.default;
platform_1.default.Transports = transport_1.default;
platform_1.default.WebStorage = webstorage_1.default;
rest_1.default.Crypto = Crypto;
realtime_1.default.Crypto = Crypto;
logger_1.default.initLogHandlers();
platform_1.default.Defaults = (0, defaults_1.getDefaults)(defaults_2.default);
if (platform_1.default.Config.agent) {
    // @ts-ignore
    platform_1.default.Defaults.agent += ' ' + platform_1.default.Config.agent;
}
/* If using IE8, don't attempt to upgrade from xhr_polling to xhr_streaming -
 * while it can do streaming, the low max http-connections-per-host limit means
 * that the polling transport is crippled during the upgrade process. So just
 * leave it at the base transport */
if (platform_1.default.Config.noUpgrade) {
    platform_1.default.Defaults.upgradeTransports = [];
}
exports.default = {
    ErrorInfo: errorinfo_1.default,
    Rest: rest_1.default,
    Realtime: realtime_1.default,
    msgpack: msgpack_1.default,
};


/***/ }),
/* 43 */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"ably\",\"description\":\"Realtime client library for Ably, the realtime messaging service\",\"version\":\"1.2.48\",\"license\":\"Apache-2.0\",\"bugs\":{\"url\":\"https://github.com/ably/ably-js/issues\",\"email\":\"support@ably.com\"},\"main\":\"./build/ably-node.js\",\"typings\":\"./ably.d.ts\",\"react-native\":{\"./build/ably-node.js\":\"./build/ably-reactnative.js\"},\"browser\":{\"./build/ably-node.js\":\"./build/ably-commonjs.js\"},\"files\":[\"build/**\",\"ably.d.ts\",\"callbacks.d.ts\",\"callbacks.js\",\"promises.d.ts\",\"promises.js\",\"resources/**\",\"src/**\",\"react/**\"],\"dependencies\":{\"@ably/msgpack-js\":\"^0.4.0\",\"got\":\"^11.8.5\",\"ws\":\"^8.14.2\"},\"peerDependencies\":{\"react\":\">=16.8.0\",\"react-dom\":\">=16.8.0\"},\"peerDependenciesMeta\":{\"react\":{\"optional\":true},\"react-dom\":{\"optional\":true}},\"devDependencies\":{\"@ably/vcdiff-decoder\":\"1.0.4\",\"@testing-library/react\":\"^13.3.0\",\"@types/crypto-js\":\"^4.0.1\",\"@types/jmespath\":\"^0.15.2\",\"@types/node\":\"^15.0.0\",\"@types/request\":\"^2.48.7\",\"@types/ws\":\"^8.2.0\",\"@typescript-eslint/eslint-plugin\":\"^5.14.0\",\"@typescript-eslint/parser\":\"^5.14.0\",\"@vitejs/plugin-react\":\"^1.3.2\",\"async\":\"ably-forks/async#requirejs\",\"aws-sdk\":\"^2.1413.0\",\"chai\":\"^4.2.0\",\"copy-webpack-plugin\":\"^6.4.1\",\"cors\":\"^2.8.5\",\"crypto-js\":\"ably-forks/crypto-js#crypto-lite\",\"eslint\":\"^7.13.0\",\"eslint-plugin-import\":\"^2.28.0\",\"eslint-plugin-jsdoc\":\"^40.0.0\",\"eslint-plugin-react\":\"^7.32.2\",\"eslint-plugin-react-hooks\":\"^4.6.0\",\"eslint-plugin-security\":\"^1.4.0\",\"express\":\"^4.17.1\",\"glob\":\"~4.4\",\"google-closure-compiler\":\"^20180610.0.1\",\"grunt\":\"^1.6.1\",\"grunt-bump\":\"^0.3.1\",\"grunt-cli\":\"~1.2.0\",\"grunt-closure-tools\":\"^1.0.0\",\"grunt-contrib-concat\":\"~0.5\",\"grunt-shell\":\"~1.1\",\"grunt-webpack\":\"^4.0.2\",\"hexy\":\"~0.2\",\"jmespath\":\"^0.16.0\",\"jsdom\":\"^20.0.0\",\"kexec\":\"ably-forks/node-kexec#update-for-node-12\",\"minimist\":\"^1.2.5\",\"mocha\":\"^8.1.3\",\"null-loader\":\"^4.0.1\",\"playwright\":\"^1.39.0\",\"prettier\":\"^2.5.1\",\"react\":\">=18.1.0\",\"react-dom\":\">=18.1.0\",\"requirejs\":\"~2.1\",\"shelljs\":\"~0.8\",\"source-map-explorer\":\"^2.5.2\",\"ts-loader\":\"^8.2.0\",\"tsconfig-paths-webpack-plugin\":\"^4.0.1\",\"tslib\":\"^2.3.1\",\"typedoc\":\"^0.23.8\",\"typescript\":\"^4.6.4\",\"vite\":\"^4.4.9\",\"vitest\":\"^0.18.0\",\"webpack\":\"^4.44.2\",\"webpack-cli\":\"^4.2.0\"},\"engines\":{\"node\":\">=5.10.x\"},\"repository\":\"ably/ably-js\",\"jspm\":{\"registry\":\"npm\",\"directories\":{\"lib\":\"build\"},\"main\":\"ably\"},\"scripts\":{\"start:react\":\"npx vite serve\",\"grunt\":\"grunt\",\"test\":\"grunt test\",\"test:node\":\"grunt test:node\",\"test:node:skip-build\":\"grunt mocha\",\"test:webserver\":\"grunt test:webserver\",\"test:playwright\":\"node test/support/runPlaywrightTests.js\",\"test:react\":\"vitest run\",\"concat\":\"grunt concat\",\"build\":\"grunt build:all && npm run build:react\",\"build:node\":\"grunt build:node\",\"build:browser\":\"grunt build:browser\",\"build:react\":\"npm run build:react:mjs && npm run build:react:cjs && cp src/platform/react-hooks/res/package.react.json react/package.json\",\"build:react:mjs\":\"tsc --project src/platform/react-hooks/tsconfig.mjs.json && cp src/platform/react-hooks/res/package.mjs.json react/mjs/package.json\",\"build:react:cjs\":\"tsc --project src/platform/react-hooks/tsconfig.cjs.json && cp src/platform/react-hooks/res/package.cjs.json react/cjs/package.json\",\"requirejs\":\"grunt requirejs\",\"lint\":\"eslint .\",\"lint:fix\":\"eslint --fix .\",\"check-closure-compiler\":\"grunt check-closure-compiler\",\"prepare\":\"npm run build\",\"format\":\"prettier --write --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js docs/chrome-mv3.md\",\"format:check\":\"prettier --check --ignore-path .gitignore --ignore-path .prettierignore src test ably.d.ts webpack.config.js Gruntfile.js scripts/cdn_deploy.js\",\"sourcemap\":\"source-map-explorer build/ably.min.js\",\"sourcemap:noencryption\":\"source-map-explorer build/ably.noencryption.min.js\",\"docs\":\"typedoc --entryPoints ably.d.ts --out docs/generated/default --readme docs/landing-pages/default.md && typedoc --entryPoints promises.d.ts --out docs/generated/promises --name \\\"ably (Promise-based)\\\" --readme docs/landing-pages/promises.md && cp docs/landing-pages/choose-library.html docs/generated/index.html\"}}");

/***/ }),
/* 44 */
/***/ (function(module, exports) {



/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(32), __webpack_require__(24));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.HmacSHA256;

}));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var devicedetails_1 = tslib_1.__importDefault(__webpack_require__(47));
var resource_1 = tslib_1.__importDefault(__webpack_require__(14));
var paginatedresource_1 = tslib_1.__importDefault(__webpack_require__(19));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var pushchannelsubscription_1 = tslib_1.__importDefault(__webpack_require__(48));
var noop = function () { };
var Push = /** @class */ (function () {
    function Push(rest) {
        this.rest = rest;
        this.admin = new Admin(rest);
    }
    return Push;
}());
var Admin = /** @class */ (function () {
    function Admin(rest) {
        this.rest = rest;
        this.deviceRegistrations = new DeviceRegistrations(rest);
        this.channelSubscriptions = new ChannelSubscriptions(rest);
    }
    Admin.prototype.publish = function (recipient, payload, callback) {
        var rest = this.rest;
        var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(rest.options, format), params = {};
        var body = Utils.mixin({ recipient: recipient }, payload);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'publish', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        var requestBody = Utils.encodeBody(body, format);
        resource_1.default.post(rest, '/push/publish', requestBody, headers, params, null, function (err) { return callback(err); });
    };
    return Admin;
}());
var DeviceRegistrations = /** @class */ (function () {
    function DeviceRegistrations(rest) {
        this.rest = rest;
    }
    DeviceRegistrations.prototype.save = function (device, callback) {
        var rest = this.rest;
        var body = devicedetails_1.default.fromValues(device);
        var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(rest.options, format), params = {};
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'save', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        var requestBody = Utils.encodeBody(body, format);
        resource_1.default.put(rest, '/push/deviceRegistrations/' + encodeURIComponent(device.id), requestBody, headers, params, null, function (err, body, headers, unpacked) {
            callback(err, !err
                ? devicedetails_1.default.fromResponseBody(body, unpacked ? undefined : format)
                : undefined);
        });
    };
    DeviceRegistrations.prototype.get = function (deviceIdOrDetails, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(rest.options, format), deviceId = deviceIdOrDetails.id || deviceIdOrDetails;
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'get', arguments);
            }
            callback = noop;
        }
        if (typeof deviceId !== 'string' || !deviceId.length) {
            callback(new errorinfo_1.default('First argument to DeviceRegistrations#get must be a deviceId string or DeviceDetails', 40000, 400));
            return;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        resource_1.default.get(rest, '/push/deviceRegistrations/' + encodeURIComponent(deviceId), headers, {}, null, function (err, body, headers, unpacked) {
            callback(err, !err
                ? devicedetails_1.default.fromResponseBody(body, unpacked ? undefined : format)
                : undefined);
        });
    };
    DeviceRegistrations.prototype.list = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'list', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        new paginatedresource_1.default(rest, '/push/deviceRegistrations', headers, envelope, function (body, headers, unpacked) {
            return devicedetails_1.default.fromResponseBody(body, unpacked ? undefined : format);
        }).get(params, callback);
    };
    DeviceRegistrations.prototype.remove = function (deviceIdOrDetails, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(rest.options, format), params = {}, deviceId = deviceIdOrDetails.id || deviceIdOrDetails;
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'remove', arguments);
            }
            callback = noop;
        }
        if (typeof deviceId !== 'string' || !deviceId.length) {
            callback(new errorinfo_1.default('First argument to DeviceRegistrations#remove must be a deviceId string or DeviceDetails', 40000, 400));
            return;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        resource_1.default['delete'](rest, '/push/deviceRegistrations/' + encodeURIComponent(deviceId), headers, params, null, function (err) { return callback(err); });
    };
    DeviceRegistrations.prototype.removeWhere = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(rest.options, format);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'removeWhere', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        resource_1.default['delete'](rest, '/push/deviceRegistrations', headers, params, null, function (err) { return callback(err); });
    };
    return DeviceRegistrations;
}());
var ChannelSubscriptions = /** @class */ (function () {
    function ChannelSubscriptions(rest) {
        /* ChannelSubscriptions have no unique id; removing one is equivalent to removeWhere by its properties */
        this.remove = ChannelSubscriptions.prototype.removeWhere;
        this.rest = rest;
    }
    ChannelSubscriptions.prototype.save = function (subscription, callback) {
        var rest = this.rest;
        var body = pushchannelsubscription_1.default.fromValues(subscription);
        var format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultPostHeaders(rest.options, format), params = {};
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'save', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        var requestBody = Utils.encodeBody(body, format);
        resource_1.default.post(rest, '/push/channelSubscriptions', requestBody, headers, params, null, function (err, body, headers, unpacked) {
            callback(err, !err && pushchannelsubscription_1.default.fromResponseBody(body, unpacked ? undefined : format));
        });
    };
    ChannelSubscriptions.prototype.list = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'list', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        new paginatedresource_1.default(rest, '/push/channelSubscriptions', headers, envelope, function (body, headers, unpacked) {
            return pushchannelsubscription_1.default.fromResponseBody(body, unpacked ? undefined : format);
        }).get(params, callback);
    };
    ChannelSubscriptions.prototype.removeWhere = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, headers = Utils.defaultGetHeaders(rest.options, format);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'removeWhere', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        resource_1.default['delete'](rest, '/push/channelSubscriptions', headers, params, null, function (err) { return callback(err); });
    };
    ChannelSubscriptions.prototype.listChannels = function (params, callback) {
        var rest = this.rest, format = rest.options.useBinaryProtocol ? Utils.Format.msgpack : Utils.Format.json, envelope = this.rest.http.supportsLinkHeaders ? undefined : format, headers = Utils.defaultGetHeaders(rest.options, format);
        if (typeof callback !== 'function') {
            if (this.rest.options.promises) {
                return Utils.promisify(this, 'listChannels', arguments);
            }
            callback = noop;
        }
        if (rest.options.headers)
            Utils.mixin(headers, rest.options.headers);
        if (rest.options.pushFullWait)
            Utils.mixin(params, { fullWait: 'true' });
        new paginatedresource_1.default(rest, '/push/channels', headers, envelope, function (body, headers, unpacked) {
            var parsedBody = (!unpacked && format ? Utils.decodeBody(body, format) : body);
            for (var i = 0; i < parsedBody.length; i++) {
                parsedBody[i] = String(parsedBody[i]);
            }
            return parsedBody;
        }).get(params, callback);
    };
    return ChannelSubscriptions;
}());
exports.default = Push;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var DeviceFormFactor;
(function (DeviceFormFactor) {
    DeviceFormFactor["Phone"] = "phone";
    DeviceFormFactor["Tablet"] = "tablet";
    DeviceFormFactor["Desktop"] = "desktop";
    DeviceFormFactor["TV"] = "tv";
    DeviceFormFactor["Watch"] = "watch";
    DeviceFormFactor["Car"] = "car";
    DeviceFormFactor["Embedded"] = "embedded";
    DeviceFormFactor["Other"] = "other";
})(DeviceFormFactor || (DeviceFormFactor = {}));
var DevicePlatform;
(function (DevicePlatform) {
    DevicePlatform["Android"] = "android";
    DevicePlatform["IOS"] = "ios";
    DevicePlatform["Browser"] = "browser";
})(DevicePlatform || (DevicePlatform = {}));
var DeviceDetails = /** @class */ (function () {
    function DeviceDetails() {
    }
    DeviceDetails.prototype.toJSON = function () {
        var _a, _b, _c;
        return {
            id: this.id,
            deviceSecret: this.deviceSecret,
            platform: this.platform,
            formFactor: this.formFactor,
            clientId: this.clientId,
            metadata: this.metadata,
            deviceIdentityToken: this.deviceIdentityToken,
            push: {
                recipient: (_a = this.push) === null || _a === void 0 ? void 0 : _a.recipient,
                state: (_b = this.push) === null || _b === void 0 ? void 0 : _b.state,
                error: (_c = this.push) === null || _c === void 0 ? void 0 : _c.error,
            },
        };
    };
    DeviceDetails.prototype.toString = function () {
        var _a, _b, _c, _d;
        var result = '[DeviceDetails';
        if (this.id)
            result += '; id=' + this.id;
        if (this.platform)
            result += '; platform=' + this.platform;
        if (this.formFactor)
            result += '; formFactor=' + this.formFactor;
        if (this.clientId)
            result += '; clientId=' + this.clientId;
        if (this.metadata)
            result += '; metadata=' + this.metadata;
        if (this.deviceIdentityToken)
            result += '; deviceIdentityToken=' + JSON.stringify(this.deviceIdentityToken);
        if ((_a = this.push) === null || _a === void 0 ? void 0 : _a.recipient)
            result += '; push.recipient=' + JSON.stringify(this.push.recipient);
        if ((_b = this.push) === null || _b === void 0 ? void 0 : _b.state)
            result += '; push.state=' + this.push.state;
        if ((_c = this.push) === null || _c === void 0 ? void 0 : _c.error)
            result += '; push.error=' + JSON.stringify(this.push.error);
        if ((_d = this.push) === null || _d === void 0 ? void 0 : _d.metadata)
            result += '; push.metadata=' + this.push.metadata;
        result += ']';
        return result;
    };
    DeviceDetails.fromResponseBody = function (body, format) {
        if (format) {
            body = Utils.decodeBody(body, format);
        }
        if (Utils.isArray(body)) {
            return DeviceDetails.fromValuesArray(body);
        }
        else {
            return DeviceDetails.fromValues(body);
        }
    };
    DeviceDetails.fromValues = function (values) {
        values.error = values.error && errorinfo_1.default.fromValues(values.error);
        return Object.assign(new DeviceDetails(), values);
    };
    DeviceDetails.fromValuesArray = function (values) {
        var count = values.length, result = new Array(count);
        for (var i = 0; i < count; i++)
            result[i] = DeviceDetails.fromValues(values[i]);
        return result;
    };
    DeviceDetails.toRequestBody = Utils.encodeBody;
    return DeviceDetails;
}());
exports.default = DeviceDetails;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var PushChannelSubscription = /** @class */ (function () {
    function PushChannelSubscription() {
    }
    /**
     * Overload toJSON() to intercept JSON.stringify()
     * @return {*}
     */
    PushChannelSubscription.prototype.toJSON = function () {
        return {
            channel: this.channel,
            deviceId: this.deviceId,
            clientId: this.clientId,
        };
    };
    PushChannelSubscription.prototype.toString = function () {
        var result = '[PushChannelSubscription';
        if (this.channel)
            result += '; channel=' + this.channel;
        if (this.deviceId)
            result += '; deviceId=' + this.deviceId;
        if (this.clientId)
            result += '; clientId=' + this.clientId;
        result += ']';
        return result;
    };
    PushChannelSubscription.fromResponseBody = function (body, format) {
        if (format) {
            body = Utils.decodeBody(body, format);
        }
        if (Utils.isArray(body)) {
            return PushChannelSubscription.fromValuesArray(body);
        }
        else {
            return PushChannelSubscription.fromValues(body);
        }
    };
    PushChannelSubscription.fromValues = function (values) {
        return Object.assign(new PushChannelSubscription(), values);
    };
    PushChannelSubscription.fromValuesArray = function (values) {
        var count = values.length, result = new Array(count);
        for (var i = 0; i < count; i++)
            result[i] = PushChannelSubscription.fromValues(values[i]);
        return result;
    };
    PushChannelSubscription.toRequestBody = Utils.encodeBody;
    return PushChannelSubscription;
}());
exports.default = PushChannelSubscription;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var MessageCount = /** @class */ (function () {
    function MessageCount(values) {
        this.count = (values && values.count) || 0;
        this.data = (values && values.data) || 0;
        this.uncompressedData = (values && values.uncompressedData) || 0;
        this.failed = (values && values.failed) || 0;
        this.refused = (values && values.refused) || 0;
    }
    return MessageCount;
}());
var MessageCategory = /** @class */ (function (_super) {
    tslib_1.__extends(MessageCategory, _super);
    function MessageCategory(values) {
        var _this = _super.call(this, values) || this;
        if (values && values.category) {
            _this.category = {};
            Utils.forInOwnNonNullProperties(values.category, function (prop) {
                _this.category[prop] = new MessageCount(values.category[prop]);
            });
        }
        return _this;
    }
    return MessageCategory;
}(MessageCount));
var ResourceCount = /** @class */ (function () {
    function ResourceCount(values) {
        this.peak = (values && values.peak) || 0;
        this.min = (values && values.min) || 0;
        this.mean = (values && values.mean) || 0;
        this.opened = (values && values.opened) || 0;
        this.refused = (values && values.refused) || 0;
    }
    return ResourceCount;
}());
var RequestCount = /** @class */ (function () {
    function RequestCount(values) {
        this.succeeded = (values && values.succeeded) || 0;
        this.failed = (values && values.failed) || 0;
        this.refused = (values && values.refused) || 0;
    }
    return RequestCount;
}());
var ConnectionTypes = /** @class */ (function () {
    function ConnectionTypes(values) {
        this.plain = new ResourceCount(values && values.plain);
        this.tls = new ResourceCount(values && values.tls);
        this.all = new ResourceCount(values && values.all);
    }
    return ConnectionTypes;
}());
var MessageTypes = /** @class */ (function () {
    function MessageTypes(values) {
        this.messages = new MessageCategory(values && values.messages);
        this.presence = new MessageCategory(values && values.presence);
        this.all = new MessageCategory(values && values.all);
    }
    return MessageTypes;
}());
var MessageTraffic = /** @class */ (function () {
    function MessageTraffic(values) {
        this.realtime = new MessageTypes(values && values.realtime);
        this.rest = new MessageTypes(values && values.rest);
        this.webhook = new MessageTypes(values && values.webhook);
        this.sharedQueue = new MessageTypes(values && values.sharedQueue);
        this.externalQueue = new MessageTypes(values && values.externalQueue);
        this.httpEvent = new MessageTypes(values && values.httpEvent);
        this.push = new MessageTypes(values && values.push);
        this.all = new MessageTypes(values && values.all);
    }
    return MessageTraffic;
}());
var MessageDirections = /** @class */ (function () {
    function MessageDirections(values) {
        this.all = new MessageTypes(values && values.all);
        this.inbound = new MessageTraffic(values && values.inbound);
        this.outbound = new MessageTraffic(values && values.outbound);
    }
    return MessageDirections;
}());
var XchgMessages = /** @class */ (function () {
    function XchgMessages(values) {
        this.all = new MessageTypes(values && values.all);
        this.producerPaid = new MessageDirections(values && values.producerPaid);
        this.consumerPaid = new MessageDirections(values && values.consumerPaid);
    }
    return XchgMessages;
}());
var PushStats = /** @class */ (function () {
    function PushStats(values) {
        this.messages = (values && values.messages) || 0;
        var notifications = values && values.notifications;
        this.notifications = {
            invalid: (notifications && notifications.invalid) || 0,
            attempted: (notifications && notifications.attempted) || 0,
            successful: (notifications && notifications.successful) || 0,
            failed: (notifications && notifications.failed) || 0,
        };
        this.directPublishes = (values && values.directPublishes) || 0;
    }
    return PushStats;
}());
var ProcessedCount = /** @class */ (function () {
    function ProcessedCount(values) {
        this.succeeded = (values && values.succeeded) || 0;
        this.skipped = (values && values.skipped) || 0;
        this.failed = (values && values.failed) || 0;
    }
    return ProcessedCount;
}());
var ProcessedMessages = /** @class */ (function () {
    function ProcessedMessages(values) {
        var _this = this;
        this.delta = undefined;
        if (values && values.delta) {
            this.delta = {};
            Utils.forInOwnNonNullProperties(values.delta, function (prop) {
                _this.delta[prop] = new ProcessedCount(values.delta[prop]);
            });
        }
    }
    return ProcessedMessages;
}());
var Stats = /** @class */ (function (_super) {
    tslib_1.__extends(Stats, _super);
    function Stats(values) {
        var _this = _super.call(this, values) || this;
        _this.persisted = new MessageTypes(values && values.persisted);
        _this.connections = new ConnectionTypes(values && values.connections);
        _this.channels = new ResourceCount(values && values.channels);
        _this.apiRequests = new RequestCount(values && values.apiRequests);
        _this.tokenRequests = new RequestCount(values && values.tokenRequests);
        _this.xchgProducer = new XchgMessages(values && values.xchgProducer);
        _this.xchgConsumer = new XchgMessages(values && values.xchgConsumer);
        _this.push = new PushStats(values && values.pushStats);
        _this.processed = new ProcessedMessages(values && values.processed);
        _this.inProgress = (values && values.inProgress) || undefined;
        _this.unit = (values && values.unit) || undefined;
        _this.intervalId = (values && values.intervalId) || undefined;
        return _this;
    }
    Stats.fromValues = function (values) {
        return new Stats(values);
    };
    return Stats;
}(MessageDirections));
exports.default = Stats;


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var rest_1 = tslib_1.__importDefault(__webpack_require__(30));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var connection_1 = tslib_1.__importDefault(__webpack_require__(51));
var realtimechannel_1 = tslib_1.__importDefault(__webpack_require__(38));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var connectionmanager_1 = tslib_1.__importDefault(__webpack_require__(35));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var message_1 = tslib_1.__importDefault(__webpack_require__(9));
var Realtime = /** @class */ (function (_super) {
    tslib_1.__extends(Realtime, _super);
    function Realtime(options) {
        var _this = _super.call(this, options) || this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Realtime()', '');
        _this.connection = new connection_1.default(_this, _this.options);
        _this.channels = new Channels(_this);
        if (options.autoConnect !== false)
            _this.connect();
        return _this;
    }
    Realtime.prototype.connect = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Realtime.connect()', '');
        this.connection.connect();
    };
    Realtime.prototype.close = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Realtime.close()', '');
        this.connection.close();
    };
    Realtime.Promise = function (options) {
        options = defaults_1.default.objectifyOptions(options);
        options.promises = true;
        return new Realtime(options);
    };
    Realtime.Callbacks = Realtime;
    Realtime.Utils = Utils;
    Realtime.ConnectionManager = connectionmanager_1.default;
    Realtime.Platform = platform_1.default;
    Realtime.ProtocolMessage = protocolmessage_1.default;
    Realtime.Message = message_1.default;
    return Realtime;
}(rest_1.default));
var Channels = /** @class */ (function (_super) {
    tslib_1.__extends(Channels, _super);
    function Channels(realtime) {
        var _this = _super.call(this) || this;
        _this.realtime = realtime;
        _this.all = Object.create(null);
        realtime.connection.connectionManager.on('transport.active', function () {
            _this.onTransportActive();
        });
        return _this;
    }
    Channels.prototype.channelSerials = function () {
        var serials = {};
        for (var _i = 0, _a = Utils.keysArray(this.all, true); _i < _a.length; _i++) {
            var name_1 = _a[_i];
            var channel = this.all[name_1];
            if (channel.properties.channelSerial) {
                serials[name_1] = channel.properties.channelSerial;
            }
        }
        return serials;
    };
    // recoverChannels gets the given channels and sets their channel serials.
    Channels.prototype.recoverChannels = function (channelSerials) {
        for (var _i = 0, _a = Utils.keysArray(channelSerials, true); _i < _a.length; _i++) {
            var name_2 = _a[_i];
            var channel = this.get(name_2);
            channel.properties.channelSerial = channelSerials[name_2];
        }
    };
    Channels.prototype.onChannelMessage = function (msg) {
        var channelName = msg.channel;
        if (channelName === undefined) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Channels.onChannelMessage()', 'received event unspecified channel, action = ' + msg.action);
            return;
        }
        var channel = this.all[channelName];
        if (!channel) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Channels.onChannelMessage()', 'received event for non-existent channel: ' + channelName);
            return;
        }
        channel.onMessage(msg);
    };
    /* called when a transport becomes connected; reattempt attach/detach
     * for channels that are attaching or detaching. */
    Channels.prototype.onTransportActive = function () {
        for (var channelName in this.all) {
            var channel = this.all[channelName];
            if (channel.state === 'attaching' || channel.state === 'detaching') {
                channel.checkPendingState();
            }
            else if (channel.state === 'suspended') {
                channel._attach(false, null);
            }
            else if (channel.state === 'attached') {
                // Note explicity request the state, channel.attach() would do nothing
                // as its already attached.
                channel.requestState('attaching');
            }
        }
    };
    /* Connection interruptions (ie when the connection will no longer queue
     * events) imply connection state changes for any channel which is either
     * attached, pending, or will attempt to become attached in the future */
    Channels.prototype.propogateConnectionInterruption = function (connectionState, reason) {
        var connectionStateToChannelState = {
            closing: 'detached',
            closed: 'detached',
            failed: 'failed',
            suspended: 'suspended',
        };
        var fromChannelStates = ['attaching', 'attached', 'detaching', 'suspended'];
        var toChannelState = connectionStateToChannelState[connectionState];
        for (var channelId in this.all) {
            var channel = this.all[channelId];
            if (Utils.arrIn(fromChannelStates, channel.state)) {
                channel.notifyState(toChannelState, reason);
            }
        }
    };
    Channels.prototype.get = function (name, channelOptions) {
        name = String(name);
        var channel = this.all[name];
        if (!channel) {
            channel = this.all[name] = new realtimechannel_1.default(this.realtime, name, channelOptions);
        }
        else if (channelOptions) {
            if (channel._shouldReattachToSetOptions(channelOptions)) {
                throw new errorinfo_1.default('Channels.get() cannot be used to set channel options that would cause the channel to reattach. Please, use RealtimeChannel.setOptions() instead.', 40000, 400);
            }
            channel.setOptions(channelOptions);
        }
        return channel;
    };
    Channels.prototype.getDerived = function (name, deriveOptions, channelOptions) {
        if (deriveOptions.filter) {
            var filter = Utils.toBase64(deriveOptions.filter);
            var match = Utils.matchDerivedChannel(name);
            name = "[filter=".concat(filter).concat(match.qualifierParam, "]").concat(match.channelName);
        }
        return this.get(name, channelOptions);
    };
    /* Included to support certain niche use-cases; most users should ignore this.
     * Please do not use this unless you know what you're doing */
    Channels.prototype.release = function (name) {
        name = String(name);
        var channel = this.all[name];
        if (!channel) {
            return;
        }
        var releaseErr = channel.getReleaseErr();
        if (releaseErr) {
            throw releaseErr;
        }
        delete this.all[name];
    };
    return Channels;
}(eventemitter_1.default));
exports.default = Realtime;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var connectionmanager_1 = tslib_1.__importDefault(__webpack_require__(35));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var connectionstatechange_1 = tslib_1.__importDefault(__webpack_require__(37));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
function noop() { }
var Connection = /** @class */ (function (_super) {
    tslib_1.__extends(Connection, _super);
    function Connection(ably, options) {
        var _this = _super.call(this) || this;
        _this.whenState = (function (state, listener) {
            return eventemitter_1.default.prototype.whenState.call(_this, state, _this.state, listener, new connectionstatechange_1.default(undefined, state));
        });
        _this.ably = ably;
        _this.connectionManager = new connectionmanager_1.default(ably, options);
        _this.state = _this.connectionManager.state.state;
        _this.key = undefined;
        _this.id = undefined;
        _this.errorReason = null;
        _this.connectionManager.on('connectionstate', function (stateChange) {
            var state = (_this.state = stateChange.current);
            platform_1.default.Config.nextTick(function () {
                _this.emit(state, stateChange);
            });
        });
        _this.connectionManager.on('update', function (stateChange) {
            platform_1.default.Config.nextTick(function () {
                _this.emit('update', stateChange);
            });
        });
        return _this;
    }
    Connection.prototype.connect = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Connection.connect()', '');
        this.connectionManager.requestState({ state: 'connecting' });
    };
    Connection.prototype.ping = function (callback) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Connection.ping()', '');
        if (!callback) {
            if (this.ably.options.promises) {
                return Utils.promisify(this, 'ping', arguments);
            }
            callback = noop;
        }
        this.connectionManager.ping(null, callback);
    };
    Connection.prototype.close = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'Connection.close()', 'connectionKey = ' + this.key);
        this.connectionManager.requestState({ state: 'closing' });
    };
    Object.defineProperty(Connection.prototype, "recoveryKey", {
        get: function () {
            return this.createRecoveryKey();
        },
        enumerable: false,
        configurable: true
    });
    Connection.prototype.createRecoveryKey = function () {
        return this.connectionManager.createRecoveryKey();
    };
    return Connection;
}(eventemitter_1.default));
exports.default = Connection;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PendingMessage = void 0;
var tslib_1 = __webpack_require__(0);
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var messagequeue_1 = tslib_1.__importDefault(__webpack_require__(36));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var actions = protocolmessage_1.default.Action;
var PendingMessage = /** @class */ (function () {
    function PendingMessage(message, callback) {
        this.message = message;
        this.callback = callback;
        this.merged = false;
        var action = message.action;
        this.sendAttempted = false;
        this.ackRequired = action == actions.MESSAGE || action == actions.PRESENCE;
    }
    return PendingMessage;
}());
exports.PendingMessage = PendingMessage;
var Protocol = /** @class */ (function (_super) {
    tslib_1.__extends(Protocol, _super);
    function Protocol(transport) {
        var _this = _super.call(this) || this;
        _this.transport = transport;
        _this.messageQueue = new messagequeue_1.default();
        transport.on('ack', function (serial, count) {
            _this.onAck(serial, count);
        });
        transport.on('nack', function (serial, count, err) {
            _this.onNack(serial, count, err);
        });
        return _this;
    }
    Protocol.prototype.onAck = function (serial, count) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Protocol.onAck()', 'serial = ' + serial + '; count = ' + count);
        this.messageQueue.completeMessages(serial, count);
    };
    Protocol.prototype.onNack = function (serial, count, err) {
        logger_1.default.logAction(logger_1.default.LOG_ERROR, 'Protocol.onNack()', 'serial = ' + serial + '; count = ' + count + '; err = ' + Utils.inspectError(err));
        if (!err) {
            err = new errorinfo_1.default('Unable to send message; channel not responding', 50001, 500);
        }
        this.messageQueue.completeMessages(serial, count, err);
    };
    Protocol.prototype.onceIdle = function (listener) {
        var messageQueue = this.messageQueue;
        if (messageQueue.count() === 0) {
            listener();
            return;
        }
        messageQueue.once('idle', listener);
    };
    Protocol.prototype.send = function (pendingMessage) {
        if (pendingMessage.ackRequired) {
            this.messageQueue.push(pendingMessage);
        }
        if (logger_1.default.shouldLog(logger_1.default.LOG_MICRO)) {
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'Protocol.send()', 'sending msg; ' + protocolmessage_1.default.stringify(pendingMessage.message));
        }
        pendingMessage.sendAttempted = true;
        this.transport.send(pendingMessage.message);
    };
    Protocol.prototype.getTransport = function () {
        return this.transport;
    };
    Protocol.prototype.getPendingMessages = function () {
        return this.messageQueue.copyAll();
    };
    Protocol.prototype.clearPendingMessages = function () {
        return this.messageQueue.clear();
    };
    Protocol.prototype.finish = function () {
        var transport = this.transport;
        this.onceIdle(function () {
            transport.disconnect();
        });
    };
    return Protocol;
}(eventemitter_1.default));
exports.default = Protocol;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var transport_1 = tslib_1.__importDefault(__webpack_require__(26));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var protocolmessage_1 = tslib_1.__importDefault(__webpack_require__(10));
var errorinfo_1 = tslib_1.__importDefault(__webpack_require__(4));
var shortName = 'web_socket';
function isNodeWebSocket(ws) {
    return !!ws.on;
}
var WebSocketTransport = /** @class */ (function (_super) {
    tslib_1.__extends(WebSocketTransport, _super);
    function WebSocketTransport(connectionManager, auth, params) {
        var _this = _super.call(this, connectionManager, auth, params) || this;
        _this.shortName = shortName;
        /* If is a browser, can't detect pings, so request protocol heartbeats */
        params.heartbeats = platform_1.default.Config.useProtocolHeartbeats;
        _this.wsHost = defaults_1.default.getHost(params.options, params.host, true);
        return _this;
    }
    WebSocketTransport.isAvailable = function () {
        return !!platform_1.default.Config.WebSocket;
    };
    WebSocketTransport.prototype.createWebSocket = function (uri, connectParams) {
        this.uri = uri + Utils.toQueryString(connectParams);
        return new platform_1.default.Config.WebSocket(this.uri);
    };
    WebSocketTransport.prototype.toString = function () {
        return 'WebSocketTransport; uri=' + this.uri;
    };
    WebSocketTransport.prototype.connect = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.connect()', 'starting');
        transport_1.default.prototype.connect.call(this);
        var self = this, params = this.params, options = params.options;
        var wsScheme = options.tls ? 'wss://' : 'ws://';
        var wsUri = wsScheme + this.wsHost + ':' + defaults_1.default.getPort(options) + '/';
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.connect()', 'uri: ' + wsUri);
        this.auth.getAuthParams(function (err, authParams) {
            if (self.isDisposed) {
                return;
            }
            var paramStr = '';
            for (var param in authParams)
                paramStr += ' ' + param + ': ' + authParams[param] + ';';
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.connect()', 'authParams:' + paramStr + ' err: ' + err);
            if (err) {
                self.disconnect(err);
                return;
            }
            var connectParams = params.getConnectParams(authParams);
            try {
                var wsConnection = (self.wsConnection = self.createWebSocket(wsUri, connectParams));
                wsConnection.binaryType = platform_1.default.Config.binaryType;
                wsConnection.onopen = function () {
                    self.onWsOpen();
                };
                wsConnection.onclose = function (ev) {
                    self.onWsClose(ev);
                };
                wsConnection.onmessage = function (ev) {
                    self.onWsData(ev.data);
                };
                wsConnection.onerror = function (ev) {
                    self.onWsError(ev);
                };
                if (isNodeWebSocket(wsConnection)) {
                    /* node; browsers currently don't have a general eventemitter and can't detect
                     * pings. Also, no need to reply with a pong explicitly, ws lib handles that */
                    wsConnection.on('ping', function () {
                        self.onActivity();
                    });
                }
            }
            catch (e) {
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'WebSocketTransport.connect()', 'Unexpected exception creating websocket: err = ' + (e.stack || e.message));
                self.disconnect(e);
            }
        });
    };
    WebSocketTransport.prototype.send = function (message) {
        var wsConnection = this.wsConnection;
        if (!wsConnection) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'WebSocketTransport.send()', 'No socket connection');
            return;
        }
        try {
            wsConnection.send(protocolmessage_1.default.serialize(message, this.params.format));
        }
        catch (e) {
            var msg = 'Exception from ws connection when trying to send: ' + Utils.inspectError(e);
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'WebSocketTransport.send()', msg);
            /* Don't try to request a disconnect, that'll just involve sending data
             * down the websocket again. Just finish the transport. */
            this.finish('disconnected', new errorinfo_1.default(msg, 50000, 500));
        }
    };
    WebSocketTransport.prototype.onWsData = function (data) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'WebSocketTransport.onWsData()', 'data received; length = ' + data.length + '; type = ' + typeof data);
        try {
            this.onProtocolMessage(protocolmessage_1.default.deserialize(data, this.format));
        }
        catch (e) {
            logger_1.default.logAction(logger_1.default.LOG_ERROR, 'WebSocketTransport.onWsData()', 'Unexpected exception handing channel message: ' + e.stack);
        }
    };
    WebSocketTransport.prototype.onWsOpen = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.onWsOpen()', 'opened WebSocket');
        this.emit('preconnect');
    };
    WebSocketTransport.prototype.onWsClose = function (ev) {
        var wasClean, code;
        if (typeof ev == 'object') {
            /* W3C spec-compatible */
            code = ev.code;
            // ev.wasClean is undefined in reactnative
            wasClean = ev.wasClean || code === 1000;
        } /*if(typeof(ev) == 'number')*/
        else {
            /* ws in node */
            code = ev;
            wasClean = code == 1000;
        }
        delete this.wsConnection;
        if (wasClean) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.onWsClose()', 'Cleanly closed WebSocket');
            var err = new errorinfo_1.default('Websocket closed', 80003, 400);
            this.finish('disconnected', err);
        }
        else {
            var msg = 'Unclean disconnection of WebSocket ; code = ' + code, err = new errorinfo_1.default(msg, 80003, 400);
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.onWsClose()', msg);
            this.finish('disconnected', err);
        }
        this.emit('disposed');
    };
    WebSocketTransport.prototype.onWsError = function (err) {
        var _this = this;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.onError()', 'Error from WebSocket: ' + err.message);
        /* Wait a tick before aborting: if the websocket was connected, this event
         * will be immediately followed by an onclose event with a close code. Allow
         * that to close it (so we see the close code) rather than anticipating it */
        platform_1.default.Config.nextTick(function () {
            _this.disconnect(Error(err.message));
        });
    };
    WebSocketTransport.prototype.dispose = function () {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'WebSocketTransport.dispose()', '');
        this.isDisposed = true;
        var wsConnection = this.wsConnection;
        if (wsConnection) {
            /* Ignore any messages that come through after dispose() is called but before
             * websocket is actually closed. (mostly would be harmless, but if it's a
             * CONNECTED, it'll re-tick isConnected and cause all sorts of havoc) */
            wsConnection.onmessage = function () { };
            delete this.wsConnection;
            /* defer until the next event loop cycle before closing the socket,
             * giving some implementations the opportunity to send any outstanding close message */
            platform_1.default.Config.nextTick(function () {
                logger_1.default.logAction(logger_1.default.LOG_MICRO, 'WebSocketTransport.dispose()', 'closing websocket');
                if (!wsConnection) {
                    throw new Error('WebSocketTransport.dispose(): wsConnection is not defined');
                }
                wsConnection.close();
            });
        }
    };
    return WebSocketTransport;
}(transport_1.default));
function initialiseTransport(connectionManager) {
    if (WebSocketTransport.isAvailable())
        connectionManager.supportedTransports[shortName] = WebSocketTransport;
    return WebSocketTransport;
}
exports.default = initialiseTransport;


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var presence_1 = tslib_1.__importDefault(__webpack_require__(34));
var eventemitter_1 = tslib_1.__importDefault(__webpack_require__(7));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var presencemessage_1 = tslib_1.__importDefault(__webpack_require__(15));
var errorinfo_1 = tslib_1.__importStar(__webpack_require__(4));
var realtimechannel_1 = tslib_1.__importDefault(__webpack_require__(38));
var multicaster_1 = tslib_1.__importDefault(__webpack_require__(23));
var channelstatechange_1 = tslib_1.__importDefault(__webpack_require__(39));
var noop = function () { };
function getClientId(realtimePresence) {
    return realtimePresence.channel.realtime.auth.clientId;
}
function isAnonymousOrWildcard(realtimePresence) {
    var realtime = realtimePresence.channel.realtime;
    /* If not currently connected, we can't assume that we're an anonymous
     * client, as realtime may inform us of our clientId in the CONNECTED
     * message. So assume we're not anonymous and leave it to realtime to
     * return an error if we are */
    var clientId = realtime.auth.clientId;
    return (!clientId || clientId === '*') && realtime.connection.state === 'connected';
}
/* Callback is called only in the event of an error */
function waitAttached(channel, callback, action) {
    switch (channel.state) {
        case 'attached':
        case 'suspended':
            action();
            break;
        case 'initialized':
        case 'detached':
        case 'detaching':
        case 'attaching':
            channel.attach(function (err) {
                if (err)
                    callback(err);
                else
                    action();
            });
            break;
        default:
            callback(errorinfo_1.default.fromValues(channel.invalidStateError()));
    }
}
function newerThan(item, existing) {
    /* RTP2b1: if either is synthesised, compare by timestamp */
    if (item.isSynthesized() || existing.isSynthesized()) {
        // RTP2b1a: if equal, prefer the newly-arrived one
        return item.timestamp >= existing.timestamp;
    }
    /* RTP2b2 */
    var itemOrderings = item.parseId(), existingOrderings = existing.parseId();
    if (itemOrderings.msgSerial === existingOrderings.msgSerial) {
        return itemOrderings.index > existingOrderings.index;
    }
    else {
        return itemOrderings.msgSerial > existingOrderings.msgSerial;
    }
}
var RealtimePresence = /** @class */ (function (_super) {
    tslib_1.__extends(RealtimePresence, _super);
    function RealtimePresence(channel) {
        var _this = _super.call(this, channel) || this;
        _this.channel = channel;
        _this.syncComplete = false;
        _this.members = new PresenceMap(_this, function (item) { return item.clientId + ':' + item.connectionId; });
        // RTP17h: Store own members by clientId only.
        _this._myMembers = new PresenceMap(_this, function (item) { return item.clientId; });
        _this.subscriptions = new eventemitter_1.default();
        _this.pendingPresence = [];
        return _this;
    }
    RealtimePresence.prototype.enter = function (data, callback) {
        if (isAnonymousOrWildcard(this)) {
            throw new errorinfo_1.default('clientId must be specified to enter a presence channel', 40012, 400);
        }
        return this._enterOrUpdateClient(undefined, undefined, data, 'enter', callback);
    };
    RealtimePresence.prototype.update = function (data, callback) {
        if (isAnonymousOrWildcard(this)) {
            throw new errorinfo_1.default('clientId must be specified to update presence data', 40012, 400);
        }
        return this._enterOrUpdateClient(undefined, undefined, data, 'update', callback);
    };
    RealtimePresence.prototype.enterClient = function (clientId, data, callback) {
        return this._enterOrUpdateClient(undefined, clientId, data, 'enter', callback);
    };
    RealtimePresence.prototype.updateClient = function (clientId, data, callback) {
        return this._enterOrUpdateClient(undefined, clientId, data, 'update', callback);
    };
    RealtimePresence.prototype._enterOrUpdateClient = function (id, clientId, data, action, callback) {
        var _this = this;
        if (!callback) {
            if (typeof data === 'function') {
                callback = data;
                data = null;
            }
            else {
                if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, '_enterOrUpdateClient', [id, clientId, data, action]);
                }
                callback = noop;
            }
        }
        var channel = this.channel;
        if (!channel.connectionManager.activeState()) {
            callback(channel.connectionManager.getError());
            return;
        }
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence.' + action + 'Client()', 'channel = ' + channel.name + ', id = ' + id + ', client = ' + (clientId || '(implicit) ' + getClientId(this)));
        var presence = presencemessage_1.default.fromData(data);
        presence.action = action;
        if (id) {
            presence.id = id;
        }
        if (clientId) {
            presence.clientId = clientId;
        }
        presencemessage_1.default.encode(presence, channel.channelOptions, function (err) {
            if (err) {
                callback(err);
                return;
            }
            switch (channel.state) {
                case 'attached':
                    channel.sendPresence(presence, callback);
                    break;
                case 'initialized':
                case 'detached':
                    channel.attach();
                // eslint-disable-next-line no-fallthrough
                case 'attaching':
                    _this.pendingPresence.push({
                        presence: presence,
                        callback: callback,
                    });
                    break;
                default:
                    err = new errorinfo_1.PartialErrorInfo('Unable to ' + action + ' presence channel while in ' + channel.state + ' state', 90001);
                    err.code = 90001;
                    callback(err);
            }
        });
    };
    RealtimePresence.prototype.leave = function (data, callback) {
        if (isAnonymousOrWildcard(this)) {
            throw new errorinfo_1.default('clientId must have been specified to enter or leave a presence channel', 40012, 400);
        }
        return this.leaveClient(undefined, data, callback);
    };
    RealtimePresence.prototype.leaveClient = function (clientId, data, callback) {
        if (!callback) {
            if (typeof data === 'function') {
                callback = data;
                data = null;
            }
            else {
                if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, 'leaveClient', [clientId, data]);
                }
                callback = noop;
            }
        }
        var channel = this.channel;
        if (!channel.connectionManager.activeState()) {
            callback === null || callback === void 0 ? void 0 : callback(channel.connectionManager.getError());
            return;
        }
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence.leaveClient()', 'leaving; channel = ' + this.channel.name + ', client = ' + clientId);
        var presence = presencemessage_1.default.fromData(data);
        presence.action = 'leave';
        if (clientId) {
            presence.clientId = clientId;
        }
        switch (channel.state) {
            case 'attached':
                channel.sendPresence(presence, callback);
                break;
            case 'attaching':
                this.pendingPresence.push({
                    presence: presence,
                    callback: callback,
                });
                break;
            case 'initialized':
            case 'failed': {
                /* we're not attached; therefore we let any entered status
                 * timeout by itself instead of attaching just in order to leave */
                var err = new errorinfo_1.PartialErrorInfo('Unable to leave presence channel (incompatible state)', 90001);
                callback === null || callback === void 0 ? void 0 : callback(err);
                break;
            }
            default:
                callback === null || callback === void 0 ? void 0 : callback(channel.invalidStateError());
        }
    };
    // Return type is any to avoid conflict with base Presence class
    RealtimePresence.prototype.get = function (params, callback) {
        var _this = this;
        var args = Array.prototype.slice.call(arguments);
        if (args.length == 1 && typeof args[0] == 'function')
            args.unshift(null);
        params = args[0];
        callback = args[1];
        var waitForSync = !params || ('waitForSync' in params ? params.waitForSync : true);
        if (!callback) {
            if (this.channel.realtime.options.promises) {
                return Utils.promisify(this, 'get', args);
            }
            callback = noop;
        }
        function returnMembers(members) {
            callback(null, params ? members.list(params) : members.values());
        }
        /* Special-case the suspended state: can still get (stale) presence set if waitForSync is false */
        if (this.channel.state === 'suspended') {
            if (waitForSync) {
                callback(errorinfo_1.default.fromValues({
                    statusCode: 400,
                    code: 91005,
                    message: 'Presence state is out of sync due to channel being in the SUSPENDED state',
                }));
            }
            else {
                returnMembers(this.members);
            }
            return;
        }
        waitAttached(this.channel, callback, function () {
            var members = _this.members;
            if (waitForSync) {
                members.waitSync(function () {
                    returnMembers(members);
                });
            }
            else {
                returnMembers(members);
            }
        });
    };
    RealtimePresence.prototype.history = function (params, callback) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence.history()', 'channel = ' + this.name);
        /* params and callback are optional; see if params contains the callback */
        if (callback === undefined) {
            if (typeof params == 'function') {
                callback = params;
                params = null;
            }
            else {
                if (this.channel.realtime.options.promises) {
                    return Utils.promisify(this, 'history', arguments);
                }
                callback = noop;
            }
        }
        if (params && params.untilAttach) {
            if (this.channel.state === 'attached') {
                delete params.untilAttach;
                params.from_serial = this.channel.properties.attachSerial;
            }
            else {
                callback(new errorinfo_1.default('option untilAttach requires the channel to be attached, was: ' + this.channel.state, 40000, 400));
            }
        }
        presence_1.default.prototype._history.call(this, params, callback);
    };
    RealtimePresence.prototype.setPresence = function (presenceSet, isSync, syncChannelSerial) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence.setPresence()', 'received presence for ' + presenceSet.length + ' participants; syncChannelSerial = ' + syncChannelSerial);
        var syncCursor, match;
        var members = this.members, myMembers = this._myMembers, broadcastMessages = [], connId = this.channel.connectionManager.connectionId;
        if (isSync) {
            this.members.startSync();
            if (syncChannelSerial && (match = syncChannelSerial.match(/^[\w-]+:(.*)$/))) {
                syncCursor = match[1];
            }
        }
        for (var i = 0; i < presenceSet.length; i++) {
            var presence = presencemessage_1.default.fromValues(presenceSet[i]);
            switch (presence.action) {
                case 'leave':
                    if (members.remove(presence)) {
                        broadcastMessages.push(presence);
                    }
                    if (presence.connectionId === connId && !presence.isSynthesized()) {
                        myMembers.remove(presence);
                    }
                    break;
                case 'enter':
                case 'present':
                case 'update':
                    if (members.put(presence)) {
                        broadcastMessages.push(presence);
                    }
                    if (presence.connectionId === connId) {
                        myMembers.put(presence);
                    }
                    break;
            }
        }
        /* if this is the last (or only) message in a sequence of sync updates, end the sync */
        if (isSync && !syncCursor) {
            members.endSync();
            this.channel.syncChannelSerial = null;
        }
        /* broadcast to listeners */
        for (var i = 0; i < broadcastMessages.length; i++) {
            var presence = broadcastMessages[i];
            this.subscriptions.emit(presence.action, presence);
        }
    };
    RealtimePresence.prototype.onAttached = function (hasPresence) {
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimePresence.onAttached()', 'channel = ' + this.channel.name + ', hasPresence = ' + hasPresence);
        if (hasPresence) {
            this.members.startSync();
        }
        else {
            this._synthesizeLeaves(this.members.values());
            this.members.clear();
        }
        // RTP17f: Re-enter own members when moving into the attached state.
        this._ensureMyMembersPresent();
        /* NB this must be after the _ensureMyMembersPresent call, which may add items to pendingPresence */
        var pendingPresence = this.pendingPresence, pendingPresCount = pendingPresence.length;
        if (pendingPresCount) {
            this.pendingPresence = [];
            var presenceArray = [];
            var multicaster = multicaster_1.default.create();
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence.onAttached', 'sending ' + pendingPresCount + ' queued presence messages');
            for (var i = 0; i < pendingPresCount; i++) {
                var event_1 = pendingPresence[i];
                presenceArray.push(event_1.presence);
                multicaster.push(event_1.callback);
            }
            this.channel.sendPresence(presenceArray, multicaster);
        }
    };
    RealtimePresence.prototype.actOnChannelState = function (state, hasPresence, err) {
        switch (state) {
            case 'attached':
                this.onAttached(hasPresence);
                break;
            case 'detached':
            case 'failed':
                this._clearMyMembers();
                this.members.clear();
            /* falls through */
            case 'suspended':
                this.failPendingPresence(err);
                break;
        }
    };
    RealtimePresence.prototype.failPendingPresence = function (err) {
        if (this.pendingPresence.length) {
            logger_1.default.logAction(logger_1.default.LOG_MINOR, 'RealtimeChannel.failPendingPresence', 'channel; name = ' + this.channel.name + ', err = ' + Utils.inspectError(err));
            for (var i = 0; i < this.pendingPresence.length; i++)
                try {
                    this.pendingPresence[i].callback(err);
                    // eslint-disable-next-line no-empty
                }
                catch (e) { }
            this.pendingPresence = [];
        }
    };
    RealtimePresence.prototype._clearMyMembers = function () {
        this._myMembers.clear();
    };
    RealtimePresence.prototype._ensureMyMembersPresent = function () {
        var _this = this;
        var myMembers = this._myMembers, reenterCb = function (err) {
            if (err) {
                var msg = 'Presence auto-re-enter failed: ' + err.toString();
                var wrappedErr = new errorinfo_1.default(msg, 91004, 400);
                logger_1.default.logAction(logger_1.default.LOG_ERROR, 'RealtimePresence._ensureMyMembersPresent()', msg);
                var change = new channelstatechange_1.default(_this.channel.state, _this.channel.state, true, false, wrappedErr);
                _this.channel.emit('update', change);
            }
        };
        for (var memberKey in myMembers.map) {
            var entry = myMembers.map[memberKey];
            logger_1.default.logAction(logger_1.default.LOG_MICRO, 'RealtimePresence._ensureMyMembersPresent()', 'Auto-reentering clientId "' + entry.clientId + '" into the presence set');
            // RTP17g: Send ENTER containing the member id, clientId and data
            // attributes.
            this._enterOrUpdateClient(entry.id, entry.clientId, entry.data, 'enter', reenterCb);
        }
    };
    RealtimePresence.prototype._synthesizeLeaves = function (items) {
        var subscriptions = this.subscriptions;
        Utils.arrForEach(items, function (item) {
            var presence = presencemessage_1.default.fromValues({
                action: 'leave',
                connectionId: item.connectionId,
                clientId: item.clientId,
                data: item.data,
                encoding: item.encoding,
                timestamp: Utils.now(),
            });
            subscriptions.emit('leave', presence);
        });
    };
    /* Deprecated */
    RealtimePresence.prototype.on = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        logger_1.default.deprecated('presence.on', 'presence.subscribe');
        this.subscribe.apply(this, args);
    };
    /* Deprecated */
    RealtimePresence.prototype.off = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        logger_1.default.deprecated('presence.off', 'presence.unsubscribe');
        this.unsubscribe.apply(this, args);
    };
    RealtimePresence.prototype.subscribe = function () {
        var _args = []; /* [event], listener, [callback] */
        for (var _i = 0 /* [event], listener, [callback] */; _i < arguments.length /* [event], listener, [callback] */; _i++ /* [event], listener, [callback] */) {
            _args[_i] = arguments[_i]; /* [event], listener, [callback] */
        }
        var args = realtimechannel_1.default.processListenerArgs(_args);
        var event = args[0];
        var listener = args[1];
        var callback = args[2];
        var channel = this.channel;
        if (!callback) {
            if (this.channel.realtime.options.promises) {
                return Utils.promisify(this, 'subscribe', [event, listener]);
            }
            callback = noop;
        }
        if (channel.state === 'failed') {
            callback(errorinfo_1.default.fromValues(channel.invalidStateError()));
            return;
        }
        this.subscriptions.on(event, listener);
        channel.attach(callback);
    };
    RealtimePresence.prototype.unsubscribe = function () {
        var _args = []; /* [event], listener */
        for (var _i = 0 /* [event], listener */; _i < arguments.length /* [event], listener */; _i++ /* [event], listener */) {
            _args[_i] = arguments[_i]; /* [event], listener */
        }
        var args = realtimechannel_1.default.processListenerArgs(_args);
        var event = args[0];
        var listener = args[1];
        this.subscriptions.off(event, listener);
    };
    return RealtimePresence;
}(presence_1.default));
var PresenceMap = /** @class */ (function (_super) {
    tslib_1.__extends(PresenceMap, _super);
    function PresenceMap(presence, memberKey) {
        var _this = _super.call(this) || this;
        _this.presence = presence;
        _this.map = Object.create(null);
        _this.syncInProgress = false;
        _this.residualMembers = null;
        _this.memberKey = memberKey;
        return _this;
    }
    PresenceMap.prototype.get = function (key) {
        return this.map[key];
    };
    PresenceMap.prototype.getClient = function (clientId) {
        var map = this.map, result = [];
        for (var key in map) {
            var item = map[key];
            if (item.clientId == clientId && item.action != 'absent')
                result.push(item);
        }
        return result;
    };
    PresenceMap.prototype.list = function (params) {
        var map = this.map, clientId = params && params.clientId, connectionId = params && params.connectionId, result = [];
        for (var key in map) {
            var item = map[key];
            if (item.action === 'absent')
                continue;
            if (clientId && clientId != item.clientId)
                continue;
            if (connectionId && connectionId != item.connectionId)
                continue;
            result.push(item);
        }
        return result;
    };
    PresenceMap.prototype.put = function (item) {
        if (item.action === 'enter' || item.action === 'update') {
            item = presencemessage_1.default.fromValues(item);
            item.action = 'present';
        }
        var map = this.map, key = this.memberKey(item);
        /* we've seen this member, so do not remove it at the end of sync */
        if (this.residualMembers)
            delete this.residualMembers[key];
        /* compare the timestamp of the new item with any existing member (or ABSENT witness) */
        var existingItem = map[key];
        if (existingItem && !newerThan(item, existingItem)) {
            return false;
        }
        map[key] = item;
        return true;
    };
    PresenceMap.prototype.values = function () {
        var map = this.map, result = [];
        for (var key in map) {
            var item = map[key];
            if (item.action != 'absent')
                result.push(item);
        }
        return result;
    };
    PresenceMap.prototype.remove = function (item) {
        var map = this.map, key = this.memberKey(item);
        var existingItem = map[key];
        if (existingItem && !newerThan(item, existingItem)) {
            return false;
        }
        /* RTP2f */
        if (this.syncInProgress) {
            item = presencemessage_1.default.fromValues(item);
            item.action = 'absent';
            map[key] = item;
        }
        else {
            delete map[key];
        }
        return true;
    };
    PresenceMap.prototype.startSync = function () {
        var map = this.map, syncInProgress = this.syncInProgress;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'PresenceMap.startSync()', 'channel = ' + this.presence.channel.name + '; syncInProgress = ' + syncInProgress);
        /* we might be called multiple times while a sync is in progress */
        if (!this.syncInProgress) {
            this.residualMembers = Utils.copy(map);
            this.setInProgress(true);
        }
    };
    PresenceMap.prototype.endSync = function () {
        var map = this.map, syncInProgress = this.syncInProgress;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'PresenceMap.endSync()', 'channel = ' + this.presence.channel.name + '; syncInProgress = ' + syncInProgress);
        if (syncInProgress) {
            /* we can now strip out the ABSENT members, as we have
             * received all of the out-of-order sync messages */
            for (var memberKey in map) {
                var entry = map[memberKey];
                if (entry.action === 'absent') {
                    delete map[memberKey];
                }
            }
            /* any members that were present at the start of the sync,
             * and have not been seen in sync, can be removed, and leave events emitted */
            this.presence._synthesizeLeaves(Utils.valuesArray(this.residualMembers));
            for (var memberKey in this.residualMembers) {
                delete map[memberKey];
            }
            this.residualMembers = null;
            /* finish, notifying any waiters */
            this.setInProgress(false);
        }
        this.emit('sync');
    };
    PresenceMap.prototype.waitSync = function (callback) {
        var syncInProgress = this.syncInProgress;
        logger_1.default.logAction(logger_1.default.LOG_MINOR, 'PresenceMap.waitSync()', 'channel = ' + this.presence.channel.name + '; syncInProgress = ' + syncInProgress);
        if (!syncInProgress) {
            callback();
            return;
        }
        this.once('sync', callback);
    };
    PresenceMap.prototype.clear = function () {
        this.map = {};
        this.setInProgress(false);
        this.residualMembers = null;
    };
    PresenceMap.prototype.setInProgress = function (inProgress) {
        logger_1.default.logAction(logger_1.default.LOG_MICRO, 'PresenceMap.setInProgress()', 'inProgress = ' + inProgress);
        this.syncInProgress = inProgress;
        this.presence.syncComplete = !inProgress;
    };
    return PresenceMap;
}(eventemitter_1.default));
exports.default = RealtimePresence;


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var enc_hex_1 = __webpack_require__(56);
var enc_utf8_1 = __webpack_require__(31);
var enc_base64_1 = __webpack_require__(11);
var lib_typedarrays_1 = tslib_1.__importDefault(__webpack_require__(5));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var BufferUtils = /** @class */ (function () {
    function BufferUtils() {
        this.base64CharSet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        this.hexCharSet = '0123456789abcdef';
    }
    BufferUtils.prototype.isWordArray = function (ob) {
        return ob !== null && ob !== undefined && ob.sigBytes !== undefined;
    };
    BufferUtils.prototype.isArrayBuffer = function (ob) {
        return ob !== null && ob !== undefined && ob.constructor === ArrayBuffer;
    };
    BufferUtils.prototype.isTypedArray = function (ob) {
        return !!ArrayBuffer && ArrayBuffer.isView && ArrayBuffer.isView(ob);
    };
    // // https://gist.githubusercontent.com/jonleighton/958841/raw/f200e30dfe95212c0165ccf1ae000ca51e9de803/gistfile1.js
    BufferUtils.prototype.uint8ViewToBase64 = function (bytes) {
        var base64 = '';
        var encodings = this.base64CharSet;
        var byteLength = bytes.byteLength;
        var byteRemainder = byteLength % 3;
        var mainLength = byteLength - byteRemainder;
        var a, b, c, d;
        var chunk;
        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
            // Combine the three bytes into a single integer
            chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
            // Use bitmasks to extract 6-bit segments from the triplet
            a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
            b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
            c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
            d = chunk & 63; // 63       = 2^6 - 1
            // Convert the raw binary segments to the appropriate ASCII encoding
            base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
        }
        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
            chunk = bytes[mainLength];
            a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
            // Set the 4 least significant bits to zero
            b = (chunk & 3) << 4; // 3   = 2^2 - 1
            base64 += encodings[a] + encodings[b] + '==';
        }
        else if (byteRemainder == 2) {
            chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
            a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
            b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
            // Set the 2 least significant bits to zero
            c = (chunk & 15) << 2; // 15    = 2^4 - 1
            base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        return base64;
    };
    BufferUtils.prototype.base64ToArrayBuffer = function (base64) {
        var binary_string = atob === null || atob === void 0 ? void 0 : atob(base64); // this will always be defined in browser so it's safe to cast
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
            var ascii = binary_string.charCodeAt(i);
            bytes[i] = ascii;
        }
        return bytes.buffer;
    };
    BufferUtils.prototype.isBuffer = function (buffer) {
        return this.isArrayBuffer(buffer) || this.isWordArray(buffer) || this.isTypedArray(buffer);
    };
    /* In browsers, returns a Uint8Array */
    BufferUtils.prototype.toBuffer = function (buffer) {
        if (!ArrayBuffer) {
            throw new Error("Can't convert to Buffer: browser does not support the necessary types");
        }
        if (this.isArrayBuffer(buffer)) {
            return new Uint8Array(buffer);
        }
        if (this.isTypedArray(buffer)) {
            return new Uint8Array(buffer.buffer);
        }
        if (this.isWordArray(buffer)) {
            /* Backported from unreleased CryptoJS
             * https://code.google.com/p/crypto-js/source/browse/branches/3.x/src/lib-typedarrays.js?r=661 */
            var arrayBuffer = new ArrayBuffer(buffer.sigBytes);
            var uint8View = new Uint8Array(arrayBuffer);
            for (var i = 0; i < buffer.sigBytes; i++) {
                uint8View[i] = (buffer.words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
            }
            return uint8View;
        }
        throw new Error('BufferUtils.toBuffer expected an arraybuffer, typed array, or CryptoJS wordarray');
    };
    BufferUtils.prototype.toArrayBuffer = function (buffer) {
        if (this.isArrayBuffer(buffer)) {
            return buffer;
        }
        return this.toBuffer(buffer).buffer;
    };
    BufferUtils.prototype.toWordArray = function (buffer) {
        if (this.isTypedArray(buffer)) {
            buffer = buffer.buffer;
        }
        return this.isWordArray(buffer) ? buffer : lib_typedarrays_1.default.create(buffer);
    };
    BufferUtils.prototype.base64Encode = function (buffer) {
        if (this.isWordArray(buffer)) {
            return (0, enc_base64_1.stringify)(buffer);
        }
        return this.uint8ViewToBase64(this.toBuffer(buffer));
    };
    BufferUtils.prototype.base64Decode = function (str) {
        if (ArrayBuffer && platform_1.default.Config.atob) {
            return this.base64ToArrayBuffer(str);
        }
        return (0, enc_base64_1.parse)(str);
    };
    BufferUtils.prototype.hexEncode = function (buffer) {
        return (0, enc_hex_1.stringify)(this.toWordArray(buffer));
    };
    BufferUtils.prototype.hexDecode = function (string) {
        var wordArray = (0, enc_hex_1.parse)(string);
        return ArrayBuffer ? this.toArrayBuffer(wordArray) : wordArray;
    };
    BufferUtils.prototype.utf8Encode = function (string) {
        if (platform_1.default.Config.TextEncoder) {
            return new platform_1.default.Config.TextEncoder().encode(string).buffer;
        }
        return (0, enc_utf8_1.parse)(string);
    };
    /* For utf8 decoding we apply slightly stricter input validation than to
     * hexEncode/base64Encode/etc: in those we accept anything that Buffer.from
     * can take (in particular allowing strings, which are just interpreted as
     * binary); here we ensure that the input is actually a buffer since trying
     * to utf8-decode a string to another string is almost certainly a mistake */
    BufferUtils.prototype.utf8Decode = function (buffer) {
        if (!this.isBuffer(buffer)) {
            throw new Error('Expected input of utf8decode to be an arraybuffer, typed array, or CryptoJS wordarray');
        }
        if (TextDecoder && !this.isWordArray(buffer)) {
            return new TextDecoder().decode(buffer);
        }
        buffer = this.toWordArray(buffer);
        return (0, enc_utf8_1.stringify)(buffer);
    };
    BufferUtils.prototype.bufferCompare = function (buffer1, buffer2) {
        if (!buffer1)
            return -1;
        if (!buffer2)
            return 1;
        var wordArray1 = this.toWordArray(buffer1);
        var wordArray2 = this.toWordArray(buffer2);
        wordArray1.clamp();
        wordArray2.clamp();
        var cmp = wordArray1.sigBytes - wordArray2.sigBytes;
        if (cmp != 0)
            return cmp;
        var words1 = wordArray1.words;
        var words2 = wordArray2.words;
        for (var i = 0; i < words1.length; i++) {
            cmp = words1[i] - words2[i];
            if (cmp != 0)
                return cmp;
        }
        return 0;
    };
    BufferUtils.prototype.byteLength = function (buffer) {
        if (this.isArrayBuffer(buffer) || this.isTypedArray(buffer)) {
            return buffer.byteLength;
        }
        else if (this.isWordArray(buffer)) {
            return buffer.sigBytes;
        }
        return -1;
    };
    /* Returns ArrayBuffer on browser and Buffer on Node.js */
    BufferUtils.prototype.typedArrayToBuffer = function (typedArray) {
        return typedArray.buffer;
    };
    return BufferUtils;
}());
exports.default = new BufferUtils();


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS.enc.Hex;

}));

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var crypto_js_build__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22);
/* harmony import */ var crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js_build__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4);
/* harmony import */ var common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_4__);






var CryptoFactory = function (config, bufferUtils) {
  var DEFAULT_ALGORITHM = 'aes';
  var DEFAULT_KEYLENGTH = 256; // bits
  var DEFAULT_MODE = 'cbc';
  var DEFAULT_BLOCKLENGTH = 16; // bytes
  var DEFAULT_BLOCKLENGTH_WORDS = 4; // 32-bit words
  var UINT32_SUP = 0x100000000;
  var INT32_SUP = 0x80000000;

  /**
   * Internal: generate an array of secure random words corresponding to the given length of bytes
   * @param bytes
   * @param callback
   */
  var generateRandom;
  if (config.getRandomWordArray) {
    generateRandom = config.getRandomWordArray;
  } else if (typeof Uint32Array !== 'undefined' && config.getRandomValues) {
    var blockRandomArray = new Uint32Array(DEFAULT_BLOCKLENGTH_WORDS);
    generateRandom = function (bytes, callback) {
      var words = bytes / 4,
        nativeArray = words == DEFAULT_BLOCKLENGTH_WORDS ? blockRandomArray : new Uint32Array(words);
      config.getRandomValues(nativeArray, function (err) {
        if (typeof callback !== 'undefined') {
          callback(err, bufferUtils.toWordArray(nativeArray));
        }
      });
    };
  } else {
    generateRandom = function (bytes, callback) {
      _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.logAction(
        _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.LOG_MAJOR,
        'Ably.Crypto.generateRandom()',
        'Warning: the browser you are using does not support secure cryptographically secure randomness generation; falling back to insecure Math.random()'
      );
      var words = bytes / 4,
        array = new Array(words);
      for (var i = 0; i < words; i++) {
        /* cryptojs wordarrays use signed ints. When WordArray.create is fed a
         * Uint32Array unsigned are converted to signed automatically, but when
         * fed a normal array they aren't, so need to do so ourselves by
         * subtracting INT32_SUP */
        array[i] = Math.floor(Math.random() * UINT32_SUP) - INT32_SUP;
      }

      callback(null, crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(array));
    };
  }

  /**
   * Internal: calculate the padded length of a given plaintext
   * using PKCS5.
   * @param plaintextLength
   * @return
   */
  function getPaddedLength(plaintextLength) {
    return (plaintextLength + DEFAULT_BLOCKLENGTH) & -DEFAULT_BLOCKLENGTH;
  }

  /**
   * Internal: checks that the cipherParams are a valid combination. Currently
   * just checks that the calculated keyLength is a valid one for aes-cbc
   */
  function validateCipherParams(params) {
    if (params.algorithm === 'aes' && params.mode === 'cbc') {
      if (params.keyLength === 128 || params.keyLength === 256) {
        return;
      }
      throw new Error(
        'Unsupported key length ' +
          params.keyLength +
          ' for aes-cbc encryption. Encryption key must be 128 or 256 bits (16 or 32 ASCII characters)'
      );
    }
  }

  function normaliseBase64(string) {
    /* url-safe base64 strings use _ and - instread of / and + */
    return string.replace('_', '/').replace('-', '+');
  }

  /**
   * Internal: obtain the pkcs5 padding string for a given padded length;
   */
  var pkcs5Padding = [
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x10101010, 0x10101010, 0x10101010, 0x10101010], 16),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x01000000], 1),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x02020000], 2),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x03030300], 3),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x04040404], 4),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x05050505, 0x05000000], 5),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x06060606, 0x06060000], 6),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x07070707, 0x07070700], 7),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x08080808, 0x08080808], 8),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x09090909, 0x09090909, 0x09000000], 9),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0a0a0a0a, 0x0a0a0a0a, 0x0a0a0000], 10),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0b0b0b0b, 0x0b0b0b0b, 0x0b0b0b00], 11),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0c0c0c0c, 0x0c0c0c0c, 0x0c0c0c0c], 12),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0d0d0d0d, 0x0d0d0d0d, 0x0d0d0d0d, 0x0d000000], 13),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0e0e0e0e, 0x0e0e0e0e, 0x0e0e0e0e, 0x0e0e0000], 14),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x0f0f0f0f, 0x0f0f0f0f, 0x0f0f0f0f, 0x0f0f0f0f], 15),
    crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create([0x10101010, 0x10101010, 0x10101010, 0x10101010], 16),
  ];

  /**
   * Utility classes and interfaces for message payload encryption.
   *
   * This class supports AES/CBC/PKCS5 with a default keylength of 128 bits
   * but supporting other keylengths. Other algorithms and chaining modes are
   * not supported directly, but supportable by extending/implementing the base
   * classes and interfaces here.
   *-
   * Secure random data for creation of Initialization Vectors (IVs) and keys
   * is obtained from window.crypto.getRandomValues if available, or from
   * Math.random() if not. Clients who do not want to depend on Math.random()
   * should polyfill window.crypto.getRandomValues with a library that seeds
   * a PRNG with real entropy.
   *
   * Each message payload is encrypted with an IV in CBC mode, and the IV is
   * concatenated with the resulting raw ciphertext to construct the "ciphertext"
   * data passed to the recipient.
   */
  function Crypto() {}

  /**
   * A class encapsulating the client-specifiable parameters for
   * the cipher.
   *
   * algorithm is the name of the algorithm in the default system provider,
   * or the lower-cased version of it; eg "aes" or "AES".
   *
   * Clients are recommended to not call this directly, but instead to use the
   * Crypto.getDefaultParams helper, which will fill in any fields not supplied
   * with default values and validation the result.
   */
  function CipherParams() {
    this.algorithm = null;
    this.keyLength = null;
    this.mode = null;
    this.key = null;
  }
  Crypto.CipherParams = CipherParams;

  /**
   * Obtain a complete CipherParams instance from the provided params, filling
   * in any not provided with default values, calculating a keyLength from
   * the supplied key, and validating the result.
   * @param params an object containing at a minimum a `key` key with value the
   * key, as either a binary (ArrayBuffer, Array, WordArray) or a
   * base64-encoded string. May optionally also contain: algorithm (defaults to
   * AES), mode (defaults to 'cbc')
   */
  Crypto.getDefaultParams = function (params) {
    var key;
    /* Backward compatibility */
    if (typeof params === 'function' || typeof params === 'string') {
      _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.deprecated('Crypto.getDefaultParams(key, callback)', 'Crypto.getDefaultParams({key: key})');
      if (typeof params === 'function') {
        Crypto.generateRandomKey(function (key) {
          params(null, Crypto.getDefaultParams({ key: key }));
        });
      } else if (typeof arguments[1] === 'function') {
        arguments[1](null, Crypto.getDefaultParams({ key: params }));
      } else {
        throw new Error('Invalid arguments for Crypto.getDefaultParams');
      }
      return;
    }

    if (!params.key) {
      throw new Error('Crypto.getDefaultParams: a key is required');
    }

    if (typeof params.key === 'string') {
      key = Object(crypto_js_build_enc_base64__WEBPACK_IMPORTED_MODULE_1__["parse"])(normaliseBase64(params.key));
    } else {
      key = bufferUtils.toWordArray(params.key); // Expect key to be an Array, ArrayBuffer, or WordArray at this point
    }

    var cipherParams = new CipherParams();
    cipherParams.key = key;
    cipherParams.algorithm = params.algorithm || DEFAULT_ALGORITHM;
    cipherParams.keyLength = key.words.length * (4 * 8);
    cipherParams.mode = params.mode || DEFAULT_MODE;

    if (params.keyLength && params.keyLength !== cipherParams.keyLength) {
      throw new Error(
        'Crypto.getDefaultParams: a keyLength of ' +
          params.keyLength +
          ' was specified, but the key actually has length ' +
          cipherParams.keyLength
      );
    }

    validateCipherParams(cipherParams);
    return cipherParams;
  };

  /**
   * Generate a random encryption key from the supplied keylength (or the
   * default keyLength if none supplied) as a CryptoJS WordArray
   * @param keyLength (optional) the required keyLength in bits
   * @param callback (optional) (err, key)
   */
  Crypto.generateRandomKey = function (keyLength, callback) {
    if (arguments.length == 1 && typeof keyLength == 'function') {
      callback = keyLength;
      keyLength = undefined;
    }

    generateRandom((keyLength || DEFAULT_KEYLENGTH) / 8, function (err, buf) {
      if (callback !== undefined) {
        callback(err ? common_lib_types_errorinfo__WEBPACK_IMPORTED_MODULE_4___default.a.fromValues(err) : null, buf);
      }
    });
  };

  /**
   * Internal; get a ChannelCipher instance based on the given cipherParams
   * @param params either a CipherParams instance or some subset of its
   * fields that includes a key
   */
  Crypto.getCipher = function (params) {
    var cipherParams = params instanceof CipherParams ? params : Crypto.getDefaultParams(params);

    return { cipherParams: cipherParams, cipher: new CBCCipher(cipherParams, DEFAULT_BLOCKLENGTH_WORDS, params.iv) };
  };

  function CBCCipher(params, blockLengthWords, iv) {
    this.algorithm = params.algorithm + '-' + String(params.keyLength) + '-' + params.mode;
    this.cjsAlgorithm = params.algorithm.toUpperCase().replace(/-\d+$/, '');
    this.key = bufferUtils.toWordArray(params.key);
    if (iv) {
      this.iv = bufferUtils.toWordArray(iv).clone();
    }
    this.blockLengthWords = blockLengthWords;
  }

  CBCCipher.prototype.encrypt = function (plaintext, callback) {
    _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.LOG_MICRO, 'CBCCipher.encrypt()', '');
    plaintext = bufferUtils.toWordArray(plaintext);
    var plaintextLength = plaintext.sigBytes,
      paddedLength = getPaddedLength(plaintextLength),
      self = this;

    var then = function () {
      self.getIv(function (err, iv) {
        if (err) {
          callback(err);
          return;
        }
        var cipherOut = self.encryptCipher.process(plaintext.concat(pkcs5Padding[paddedLength - plaintextLength]));
        var ciphertext = iv.concat(cipherOut);
        callback(null, ciphertext);
      });
    };

    if (!this.encryptCipher) {
      if (this.iv) {
        this.encryptCipher = crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[this.cjsAlgorithm].createEncryptor(this.key, { iv: this.iv });
        then();
      } else {
        generateRandom(DEFAULT_BLOCKLENGTH, function (err, iv) {
          if (err) {
            callback(err);
            return;
          }
          self.encryptCipher = crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[self.cjsAlgorithm].createEncryptor(self.key, { iv: iv });
          self.iv = iv;
          then();
        });
      }
    } else {
      then();
    }
  };

  CBCCipher.prototype.decrypt = function (ciphertext) {
    _common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.logAction(_common_lib_util_logger__WEBPACK_IMPORTED_MODULE_3___default.a.LOG_MICRO, 'CBCCipher.decrypt()', '');
    ciphertext = bufferUtils.toWordArray(ciphertext);
    var blockLengthWords = this.blockLengthWords,
      ciphertextWords = ciphertext.words,
      iv = crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(ciphertextWords.slice(0, blockLengthWords)),
      ciphertextBody = crypto_js_build_lib_typedarrays__WEBPACK_IMPORTED_MODULE_0___default.a.create(ciphertextWords.slice(blockLengthWords));

    var decryptCipher = crypto_js_build__WEBPACK_IMPORTED_MODULE_2___default.a.algo[this.cjsAlgorithm].createDecryptor(this.key, { iv: iv });
    var plaintext = decryptCipher.process(ciphertextBody);
    var epilogue = decryptCipher.finalize();
    decryptCipher.reset();
    if (epilogue && epilogue.sigBytes) plaintext.concat(epilogue);
    return plaintext;
  };

  CBCCipher.prototype.getIv = function (callback) {
    if (this.iv) {
      var iv = this.iv;
      this.iv = null;
      callback(null, iv);
      return;
    }

    /* Since the iv for a new block is the ciphertext of the last, this
     * sets a new iv (= aes(randomBlock XOR lastCipherText)) as well as
     * returning it */
    var self = this;
    generateRandom(DEFAULT_BLOCKLENGTH, function (err, randomBlock) {
      if (err) {
        callback(err);
        return;
      }
      callback(null, self.encryptCipher.process(randomBlock));
    });
  };

  return Crypto;
};

/* harmony default export */ __webpack_exports__["default"] = (CryptoFactory);


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(28));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6), __webpack_require__(11), __webpack_require__(61), __webpack_require__(27), __webpack_require__(28));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            var t;

	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(6));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var errorinfo_1 = __webpack_require__(4);
var HttpMethods_1 = tslib_1.__importDefault(__webpack_require__(18));
var xhrrequest_1 = tslib_1.__importDefault(__webpack_require__(16));
var XHRStates_1 = tslib_1.__importDefault(__webpack_require__(21));
var logger_1 = tslib_1.__importDefault(__webpack_require__(2));
var jsonptransport_1 = __webpack_require__(29);
var fetchrequest_1 = tslib_1.__importDefault(__webpack_require__(63));
var HttpStatusCodes_1 = __webpack_require__(25);
function shouldFallback(errorInfo) {
    var statusCode = errorInfo.statusCode;
    /* 400 + no code = a generic xhr onerror. Browser doesn't give us enough
     * detail to know whether it's fallback-fixable, but it may be (eg if a
     * network issue), so try just in case */
    return ((statusCode === 408 && !errorInfo.code) ||
        (statusCode === 400 && !errorInfo.code) ||
        (statusCode >= 500 && statusCode <= 504));
}
function getHosts(client) {
    /* If we're a connected realtime client, try the endpoint we're connected
     * to first -- but still have fallbacks, being connected is not an absolute
     * guarantee that a datacenter has free capacity to service REST requests. */
    var connection = client.connection, connectionHost = connection && connection.connectionManager.host;
    if (connectionHost) {
        return [connectionHost].concat(defaults_1.default.getFallbackHosts(client.options));
    }
    return defaults_1.default.getHosts(client.options);
}
var Http = (_a = /** @class */ (function () {
        function class_1(options) {
            this.checksInProgress = null;
            this.checkConnectivity = undefined;
            this.supportsAuthHeaders = false;
            this.supportsLinkHeaders = false;
            this._getHosts = getHosts;
            this.options = options || {};
            var connectivityCheckUrl = this.options.connectivityCheckUrl || defaults_1.default.connectivityCheckUrl;
            var connectivityCheckParams = this.options.connectivityCheckParams;
            var connectivityUrlIsDefault = !this.options.connectivityCheckUrl;
            if (platform_1.default.Config.xhrSupported) {
                this.supportsAuthHeaders = true;
                this.Request = function (method, rest, uri, headers, params, body, callback) {
                    var req = xhrrequest_1.default.createRequest(uri, headers, params, body, XHRStates_1.default.REQ_SEND, rest && rest.options.timeouts, method);
                    req.once('complete', callback);
                    req.exec();
                    return req;
                };
                if (this.options.disableConnectivityCheck) {
                    this.checkConnectivity = function (callback) {
                        callback(null, true);
                    };
                }
                else {
                    this.checkConnectivity = function (callback) {
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, '(XHRRequest)Http.checkConnectivity()', 'Sending; ' + connectivityCheckUrl);
                        this.doUri(HttpMethods_1.default.Get, null, connectivityCheckUrl, null, null, connectivityCheckParams, function (err, responseText, headers, unpacked, statusCode) {
                            var result = false;
                            if (!connectivityUrlIsDefault) {
                                result = !err && (0, HttpStatusCodes_1.isSuccessCode)(statusCode);
                            }
                            else {
                                result = !err && (responseText === null || responseText === void 0 ? void 0 : responseText.replace(/\n/, '')) == 'yes';
                            }
                            logger_1.default.logAction(logger_1.default.LOG_MICRO, '(XHRRequest)Http.checkConnectivity()', 'Result: ' + result);
                            callback(null, result);
                        });
                    };
                }
            }
            else if (platform_1.default.Config.jsonpSupported) {
                this.Request = function (method, rest, uri, headers, params, body, callback) {
                    var req = (0, jsonptransport_1.createRequest)(uri, headers, params, body, XHRStates_1.default.REQ_SEND, rest && rest.options.timeouts, method);
                    req.once('complete', callback);
                    platform_1.default.Config.nextTick(function () {
                        req.exec();
                    });
                    return req;
                };
                if (this.options.disableConnectivityCheck) {
                    this.checkConnectivity = function (callback) {
                        callback(null, true);
                    };
                }
                else {
                    this.checkConnectivity = function (callback) {
                        var _this = this;
                        var upUrl = defaults_1.default.jsonpInternetUpUrl;
                        if (this.checksInProgress) {
                            this.checksInProgress.push(callback);
                            return;
                        }
                        this.checksInProgress = [callback];
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, '(JSONP)Http.checkConnectivity()', 'Sending; ' + upUrl);
                        var req = new jsonptransport_1.Request('isTheInternetUp', upUrl, null, null, null, XHRStates_1.default.REQ_SEND, defaults_1.default.TIMEOUTS);
                        req.once('complete', function (err, response) {
                            var result = !err && response;
                            logger_1.default.logAction(logger_1.default.LOG_MICRO, '(JSONP)Http.checkConnectivity()', 'Result: ' + result);
                            for (var i = 0; i < _this.checksInProgress.length; i++)
                                _this.checksInProgress[i](null, result);
                            _this.checksInProgress = null;
                        });
                        platform_1.default.Config.nextTick(function () {
                            req.exec();
                        });
                    };
                }
            }
            else if (platform_1.default.Config.fetchSupported) {
                this.supportsAuthHeaders = true;
                this.Request = fetchrequest_1.default;
                this.checkConnectivity = function (callback) {
                    logger_1.default.logAction(logger_1.default.LOG_MICRO, '(Fetch)Http.checkConnectivity()', 'Sending; ' + connectivityCheckUrl);
                    this.doUri(HttpMethods_1.default.Get, null, connectivityCheckUrl, null, null, null, function (err, responseText) {
                        var result = !err && (responseText === null || responseText === void 0 ? void 0 : responseText.replace(/\n/, '')) == 'yes';
                        logger_1.default.logAction(logger_1.default.LOG_MICRO, '(Fetch)Http.checkConnectivity()', 'Result: ' + result);
                        callback(null, result);
                    });
                };
            }
            else {
                this.Request = function (method, rest, uri, headers, params, body, callback) {
                    callback(new errorinfo_1.PartialErrorInfo('no supported HTTP transports available', null, 400), null);
                };
            }
        }
        /* Unlike for doUri, the 'rest' param here is mandatory, as it's used to generate the hosts */
        class_1.prototype.do = function (method, rest, path, headers, body, params, callback) {
            var _this = this;
            var uriFromHost = typeof path == 'function'
                ? path
                : function (host) {
                    return rest.baseUri(host) + path;
                };
            var currentFallback = rest._currentFallback;
            if (currentFallback) {
                if (currentFallback.validUntil > Utils.now()) {
                    /* Use stored fallback */
                    if (!this.Request) {
                        callback === null || callback === void 0 ? void 0 : callback(new errorinfo_1.PartialErrorInfo('Request invoked before assigned to', null, 500));
                        return;
                    }
                    this.Request(method, rest, uriFromHost(currentFallback.host), headers, params, body, function (err) {
                        var args = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            args[_i - 1] = arguments[_i];
                        }
                        // This typecast is safe because ErrnoExceptions are only thrown in NodeJS
                        if (err && shouldFallback(err)) {
                            /* unstore the fallback and start from the top with the default sequence */
                            rest._currentFallback = null;
                            _this.do(method, rest, path, headers, body, params, callback);
                            return;
                        }
                        callback === null || callback === void 0 ? void 0 : callback.apply(void 0, tslib_1.__spreadArray([err], args, false));
                    });
                    return;
                }
                else {
                    /* Fallback expired; remove it and fallthrough to normal sequence */
                    rest._currentFallback = null;
                }
            }
            var hosts = getHosts(rest);
            /* if there is only one host do it */
            if (hosts.length === 1) {
                this.doUri(method, rest, uriFromHost(hosts[0]), headers, body, params, callback);
                return;
            }
            /* hosts is an array with preferred host plus at least one fallback */
            var tryAHost = function (candidateHosts, persistOnSuccess) {
                var host = candidateHosts.shift();
                _this.doUri(method, rest, uriFromHost(host), headers, body, params, function (err) {
                    var args = [];
                    for (var _i = 1; _i < arguments.length; _i++) {
                        args[_i - 1] = arguments[_i];
                    }
                    // This typecast is safe because ErrnoExceptions are only thrown in NodeJS
                    if (err && shouldFallback(err) && candidateHosts.length) {
                        tryAHost(candidateHosts, true);
                        return;
                    }
                    if (persistOnSuccess) {
                        /* RSC15f */
                        rest._currentFallback = {
                            host: host,
                            validUntil: Utils.now() + rest.options.timeouts.fallbackRetryTimeout,
                        };
                    }
                    callback === null || callback === void 0 ? void 0 : callback.apply(void 0, tslib_1.__spreadArray([err], args, false));
                });
            };
            tryAHost(hosts);
        };
        class_1.prototype.doUri = function (method, rest, uri, headers, body, params, callback) {
            if (!this.Request) {
                callback(new errorinfo_1.PartialErrorInfo('Request invoked before assigned to', null, 500));
                return;
            }
            this.Request(method, rest, uri, headers, params, body, callback);
        };
        return class_1;
    }()),
    _a.methods = [HttpMethods_1.default.Get, HttpMethods_1.default.Delete, HttpMethods_1.default.Post, HttpMethods_1.default.Put, HttpMethods_1.default.Patch],
    _a.methodsWithoutBody = [HttpMethods_1.default.Get, HttpMethods_1.default.Delete],
    _a.methodsWithBody = [HttpMethods_1.default.Post, HttpMethods_1.default.Put, HttpMethods_1.default.Patch],
    _a);
exports.default = Http;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var errorinfo_1 = tslib_1.__importStar(__webpack_require__(4));
var platform_1 = tslib_1.__importDefault(__webpack_require__(3));
var defaults_1 = tslib_1.__importDefault(__webpack_require__(8));
var Utils = tslib_1.__importStar(__webpack_require__(1));
var utils_1 = __webpack_require__(1);
function isAblyError(responseBody, headers) {
    return !!headers.get('x-ably-errorcode');
}
function getAblyError(responseBody, headers) {
    if (isAblyError(responseBody, headers)) {
        return responseBody.error && errorinfo_1.default.fromValues(responseBody.error);
    }
}
function fetchRequest(method, rest, uri, headers, params, body, callback) {
    var fetchHeaders = new Headers(headers || {});
    var _method = method ? method.toUpperCase() : Utils.isEmptyArg(body) ? 'GET' : 'POST';
    var controller = new AbortController();
    var timeout = setTimeout(function () {
        controller.abort();
        callback(new errorinfo_1.PartialErrorInfo('Request timed out', null, 408));
    }, rest ? rest.options.timeouts.httpRequestTimeout : defaults_1.default.TIMEOUTS.httpRequestTimeout);
    var requestInit = {
        method: _method,
        headers: fetchHeaders,
        body: body,
    };
    if (!platform_1.default.Config.isWebworker) {
        requestInit.credentials = fetchHeaders.has('authorization') ? 'include' : 'same-origin';
    }
    (0, utils_1.getGlobalObject)()
        .fetch(uri + '?' + new URLSearchParams(params || {}), requestInit)
        .then(function (res) {
        clearTimeout(timeout);
        var contentType = res.headers.get('Content-Type');
        var prom;
        if (contentType && contentType.indexOf('application/x-msgpack') > -1) {
            prom = res.arrayBuffer();
        }
        else if (contentType && contentType.indexOf('application/json') > -1) {
            prom = res.json();
        }
        else {
            prom = res.text();
        }
        prom.then(function (body) {
            var unpacked = !!contentType && contentType.indexOf('application/x-msgpack') === -1;
            if (!res.ok) {
                var err = getAblyError(body, res.headers) ||
                    new errorinfo_1.PartialErrorInfo('Error response received from server: ' + res.status + ' body was: ' + platform_1.default.Config.inspect(body), null, res.status);
                callback(err, body, res.headers, unpacked, res.status);
            }
            else {
                callback(null, body, res.headers, unpacked, res.status);
            }
        });
    })
        .catch(function (err) {
        clearTimeout(timeout);
        callback(err);
    });
}
exports.default = fetchRequest;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var msgpack_1 = tslib_1.__importDefault(__webpack_require__(41));
var Utils = tslib_1.__importStar(__webpack_require__(1));
// Workaround for salesforce lightning locker compat
var globalObject = Utils.getGlobalObject();
if (typeof Window === 'undefined' && typeof WorkerGlobalScope === 'undefined') {
    console.log("Warning: this distribution of Ably is intended for browsers. On nodejs, please use the 'ably' package on npm");
}
function allowComet() {
    /* xhr requests from local files are unreliable in some browsers, such as Chrome 65 and higher -- see eg
     * https://stackoverflow.com/questions/49256429/chrome-65-unable-to-make-post-requests-from-local-files-to-flask
     * So if websockets are supported, then just forget about comet transports and use that */
    var loc = globalObject.location;
    return !globalObject.WebSocket || !loc || !loc.origin || loc.origin.indexOf('http') > -1;
}
var userAgent = globalObject.navigator && globalObject.navigator.userAgent.toString();
var currentUrl = globalObject.location && globalObject.location.href;
var Config = {
    agent: 'browser',
    logTimestamps: true,
    userAgent: userAgent,
    currentUrl: currentUrl,
    noUpgrade: userAgent && !!userAgent.match(/MSIE\s8\.0/),
    binaryType: 'arraybuffer',
    WebSocket: globalObject.WebSocket,
    fetchSupported: !!globalObject.fetch,
    xhrSupported: globalObject.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
    jsonpSupported: typeof document !== 'undefined',
    allowComet: allowComet(),
    streamingSupported: true,
    useProtocolHeartbeats: true,
    createHmac: null,
    msgpack: msgpack_1.default,
    supportsBinary: !!globalObject.TextDecoder,
    preferBinary: false,
    ArrayBuffer: globalObject.ArrayBuffer,
    atob: globalObject.atob,
    nextTick: typeof globalObject.setImmediate !== 'undefined'
        ? globalObject.setImmediate.bind(globalObject)
        : function (f) {
            setTimeout(f, 0);
        },
    addEventListener: globalObject.addEventListener,
    inspect: JSON.stringify,
    stringByteSize: function (str) {
        /* str.length will be an underestimate for non-ascii strings. But if we're
         * in a browser too old to support TextDecoder, not much we can do. Better
         * to underestimate, so if we do go over-size, the server will reject the
         * message */
        return (globalObject.TextDecoder && new globalObject.TextEncoder().encode(str).length) || str.length;
    },
    TextEncoder: globalObject.TextEncoder,
    TextDecoder: globalObject.TextDecoder,
    Promise: globalObject.Promise,
    getRandomValues: (function (crypto) {
        if (crypto === undefined) {
            return undefined;
        }
        return function (arr, callback) {
            crypto.getRandomValues(arr);
            if (callback) {
                callback(null);
            }
        };
    })(globalObject.crypto || msCrypto),
};
exports.default = Config;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var Utils = tslib_1.__importStar(__webpack_require__(1));
var test = 'ablyjs-storage-test';
var Webstorage = /** @class */ (function () {
    function Webstorage() {
        /* Even just accessing the session/localStorage object can throw a
         * security exception in some circumstances with some browsers. In
         * others, calling setItem will throw. So have to check in this
         * somewhat roundabout way. (If unsupported or no global object,
         * will throw on accessing a property of undefined) */
        try {
            global.sessionStorage.setItem(test, test);
            global.sessionStorage.removeItem(test);
            this.sessionSupported = true;
        }
        catch (e) {
            this.sessionSupported = false;
        }
        try {
            global.localStorage.setItem(test, test);
            global.localStorage.removeItem(test);
            this.localSupported = true;
        }
        catch (e) {
            this.localSupported = false;
        }
    }
    Webstorage.prototype.get = function (name) {
        return this._get(name, false);
    };
    Webstorage.prototype.getSession = function (name) {
        return this._get(name, true);
    };
    Webstorage.prototype.remove = function (name) {
        return this._remove(name, false);
    };
    Webstorage.prototype.removeSession = function (name) {
        return this._remove(name, true);
    };
    Webstorage.prototype.set = function (name, value, ttl) {
        return this._set(name, value, ttl, false);
    };
    Webstorage.prototype.setSession = function (name, value, ttl) {
        return this._set(name, value, ttl, true);
    };
    Webstorage.prototype._set = function (name, value, ttl, session) {
        var wrappedValue = { value: value };
        if (ttl) {
            wrappedValue.expires = Utils.now() + ttl;
        }
        return this.storageInterface(session).setItem(name, JSON.stringify(wrappedValue));
    };
    Webstorage.prototype._get = function (name, session) {
        if (session && !this.sessionSupported)
            throw new Error('Session Storage not supported');
        if (!session && !this.localSupported)
            throw new Error('Local Storage not supported');
        var rawItem = this.storageInterface(session).getItem(name);
        if (!rawItem)
            return null;
        var wrappedValue = JSON.parse(rawItem);
        if (wrappedValue.expires && wrappedValue.expires < Utils.now()) {
            this.storageInterface(session).removeItem(name);
            return null;
        }
        return wrappedValue.value;
    };
    Webstorage.prototype._remove = function (name, session) {
        return this.storageInterface(session).removeItem(name);
    };
    Webstorage.prototype.storageInterface = function (session) {
        return session ? global.sessionStorage : global.localStorage;
    };
    return Webstorage;
}());
exports.default = new Webstorage();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(13)))

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(0);
var TransportNames_1 = tslib_1.__importDefault(__webpack_require__(67));
var Defaults = {
    connectivityCheckUrl: 'https://internet-up.ably-realtime.com/is-the-internet-up.txt',
    jsonpInternetUpUrl: 'https://internet-up.ably-realtime.com/is-the-internet-up-0-9.js',
    /* Order matters here: the base transport is the leftmost one in the
     * intersection of baseTransportOrder and the transports clientOption that's
     * supported.  This is not quite the same as the preference order -- e.g.
     * xhr_polling is preferred to jsonp, but for browsers that support it we want
     * the base transport to be xhr_polling, not jsonp */
    defaultTransports: [
        TransportNames_1.default.XhrPolling,
        TransportNames_1.default.XhrStreaming,
        TransportNames_1.default.JsonP,
        TransportNames_1.default.WebSocket,
    ],
    baseTransportOrder: [
        TransportNames_1.default.XhrPolling,
        TransportNames_1.default.XhrStreaming,
        TransportNames_1.default.JsonP,
        TransportNames_1.default.WebSocket,
    ],
    transportPreferenceOrder: [
        TransportNames_1.default.JsonP,
        TransportNames_1.default.XhrPolling,
        TransportNames_1.default.XhrStreaming,
        TransportNames_1.default.WebSocket,
    ],
    upgradeTransports: [TransportNames_1.default.XhrStreaming, TransportNames_1.default.WebSocket],
};
exports.default = Defaults;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TransportNames;
(function (TransportNames) {
    TransportNames["WebSocket"] = "web_socket";
    TransportNames["Comet"] = "comet";
    TransportNames["XhrStreaming"] = "xhr_streaming";
    TransportNames["XhrPolling"] = "xhr_polling";
    TransportNames["JsonP"] = "jsonp";
})(TransportNames || (TransportNames = {}));
exports.default = TransportNames;


/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./src/platform/web/lib/transport/jsonptransport.ts
var jsonptransport = __webpack_require__(29);
var jsonptransport_default = /*#__PURE__*/__webpack_require__.n(jsonptransport);

// EXTERNAL MODULE: ./src/common/lib/util/utils.ts
var utils = __webpack_require__(1);

// EXTERNAL MODULE: ./src/common/platform.ts
var platform = __webpack_require__(3);
var platform_default = /*#__PURE__*/__webpack_require__.n(platform);

// EXTERNAL MODULE: ./src/common/lib/transport/comettransport.ts
var comettransport = __webpack_require__(12);
var comettransport_default = /*#__PURE__*/__webpack_require__.n(comettransport);

// EXTERNAL MODULE: ./src/platform/web/lib/transport/xhrrequest.ts
var xhrrequest = __webpack_require__(16);
var xhrrequest_default = /*#__PURE__*/__webpack_require__.n(xhrrequest);

// CONCATENATED MODULE: ./src/platform/web/lib/transport/xhrpollingtransport.js





var xhrpollingtransport_XHRPollingTransport = function (connectionManager) {
  var shortName = 'xhr_polling';

  function XHRPollingTransport(connectionManager, auth, params) {
    params.stream = false;
    comettransport_default.a.call(this, connectionManager, auth, params);
    this.shortName = shortName;
  }
  utils["inherits"](XHRPollingTransport, comettransport_default.a);

  XHRPollingTransport.isAvailable = function () {
    return platform_default.a.Config.xhrSupported && platform_default.a.Config.allowComet;
  };

  XHRPollingTransport.prototype.toString = function () {
    return 'XHRPollingTransport; uri=' + this.baseUri + '; isConnected=' + this.isConnected;
  };

  XHRPollingTransport.prototype.createRequest = function (uri, headers, params, body, requestMode) {
    return xhrrequest_default.a.createRequest(uri, headers, params, body, requestMode, this.timeouts);
  };

  if (typeof connectionManager !== 'undefined' && XHRPollingTransport.isAvailable()) {
    connectionManager.supportedTransports[shortName] = XHRPollingTransport;
  }

  return XHRPollingTransport;
};

/* harmony default export */ var xhrpollingtransport = (xhrpollingtransport_XHRPollingTransport);

// CONCATENATED MODULE: ./src/platform/web/lib/transport/xhrstreamingtransport.js





var xhrstreamingtransport_XHRStreamingTransport = function (connectionManager) {
  var shortName = 'xhr_streaming';

  /* public constructor */
  function XHRStreamingTransport(connectionManager, auth, params) {
    comettransport_default.a.call(this, connectionManager, auth, params);
    this.shortName = shortName;
  }
  utils["inherits"](XHRStreamingTransport, comettransport_default.a);

  XHRStreamingTransport.isAvailable = function () {
    return platform_default.a.Config.xhrSupported && platform_default.a.Config.streamingSupported && platform_default.a.Config.allowComet;
  };

  XHRStreamingTransport.prototype.toString = function () {
    return 'XHRStreamingTransport; uri=' + this.baseUri + '; isConnected=' + this.isConnected;
  };

  XHRStreamingTransport.prototype.createRequest = function (uri, headers, params, body, requestMode) {
    return xhrrequest_default.a.createRequest(uri, headers, params, body, requestMode, this.timeouts);
  };

  if (typeof connectionManager !== 'undefined' && XHRStreamingTransport.isAvailable()) {
    connectionManager.supportedTransports[shortName] = XHRStreamingTransport;
  }

  return XHRStreamingTransport;
};

/* harmony default export */ var xhrstreamingtransport = (xhrstreamingtransport_XHRStreamingTransport);

// CONCATENATED MODULE: ./src/platform/web/lib/transport/index.js




/* harmony default export */ var transport = __webpack_exports__["default"] = ([jsonptransport_default.a, xhrpollingtransport, xhrstreamingtransport]);


/***/ })
/******/ ])["default"];
});