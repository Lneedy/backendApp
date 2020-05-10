(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@malagu/core/lib/common/annotation/autowired.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/autowired.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
var AutowiredOption;
(function (AutowiredOption) {
    function is(options) {
        return options && (options.id !== undefined || options.detached !== undefined);
    }
    AutowiredOption.is = is;
})(AutowiredOption = exports.AutowiredOption || (exports.AutowiredOption = {}));
exports.Autowired = function (target, targetKey, index) {
    var option = getAutowiredOption(target, targetKey, index);
    if (targetKey === undefined && index === undefined) {
        return function (t, tk, i) {
            applyAutowiredDecorator(option, t, tk, i);
        };
    }
    else {
        applyAutowiredDecorator(option, target, targetKey, index);
    }
};
function getAutowiredOption(target, targetKey, index) {
    var option = {};
    if (targetKey === undefined) {
        if (AutowiredOption.is(target)) {
            option = __assign({}, target);
        }
        else if (target) {
            option = { id: target };
        }
    }
    return option;
}
exports.getAutowiredOption = getAutowiredOption;
function applyAutowiredDecorator(option, target, targetKey, index, doInject, doGetValue) {
    if (doInject === void 0) { doInject = function (id, isMulti, t, k, i) {
        if (isMulti) {
            inversify_1.multiInject(id)(t, k, i);
        }
        else {
            inversify_1.inject(id)(target, targetKey, index);
        }
    }; }
    if (doGetValue === void 0) { doGetValue = function (id, isMulti, container, t, property) {
        if (isMulti) {
            return container.getAll(id);
        }
        else {
            return container.get(id);
        }
    }; }
    var type;
    if (index !== undefined) {
        type = Reflect.getMetadata('design:paramtypes', target, targetKey)[index];
    }
    else {
        type = Reflect.getMetadata('design:type', target, targetKey);
    }
    var isMlt = type === Array;
    var defaultAutowiredOption = {
        id: type,
        detached: false
    };
    var opt = __assign(__assign({}, defaultAutowiredOption), option);
    if (opt.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
        }
        createAutowiredProperty(opt, isMlt, doGetValue, target, targetKey);
        return;
    }
    else {
        doInject(opt.id, isMlt, target, targetKey, index);
    }
}
exports.applyAutowiredDecorator = applyAutowiredDecorator;
function createAutowiredProperty(option, isMulti, doGetValue, target, property) {
    var value;
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            if (value !== undefined) {
                return value;
            }
            var container = container_1.ContainerProvider.provide();
            var id = option.id;
            value = doGetValue(id, isMulti, container, target, property);
            return value;
        }
    });
}
exports.createAutowiredProperty = createAutowiredProperty;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/component.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/component.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_binding_decorators_1 = __webpack_require__(/*! inversify-binding-decorators */ "inversify-binding-decorators");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var aop_protocol_1 = __webpack_require__(/*! ../aop/aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var Scope;
(function (Scope) {
    Scope[Scope["Request"] = 0] = "Request";
    Scope[Scope["Singleton"] = 1] = "Singleton";
    Scope[Scope["Transient"] = 2] = "Transient";
})(Scope = exports.Scope || (exports.Scope = {}));
var ComponentOption;
(function (ComponentOption) {
    function is(options) {
        return options && (options.id !== undefined || options.scope !== undefined ||
            options.rebind !== undefined || options.proxy !== undefined);
    }
    ComponentOption.is = is;
})(ComponentOption = exports.ComponentOption || (exports.ComponentOption = {}));
exports.Component = function (idOrOption) {
    var option = getComponentOption(idOrOption);
    return function (t) {
        applyComponentDecorator(option, t);
    };
};
function getComponentOption(idOrOption) {
    var option = {};
    if (ComponentOption.is(idOrOption)) {
        option = __assign({}, idOrOption);
    }
    else if (idOrOption) {
        option = { id: idOrOption };
    }
    return option;
}
exports.getComponentOption = getComponentOption;
function doProxy(context, t) {
    var _this = this;
    var proxy = new Proxy(t, {
        get: function (target, method, receiver) {
            var func = target[method];
            if (typeof func === 'function') {
                return function () {
                    var args = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        args[_i] = arguments[_i];
                    }
                    return __awaiter(_this, void 0, void 0, function () {
                        var beforeAdvices, beforeAdvices_1, beforeAdvices_1_1, advice, e_1_1, returnValue, afterReturningAdvices, afterReturningAdvices_1, afterReturningAdvices_1_1, advice, e_2_1, error_1, afterThrowsAdvices, afterThrowsAdvices_1, afterThrowsAdvices_1_1, advice, e_3_1;
                        var e_1, _a, e_2, _b, e_3, _c;
                        return __generator(this, function (_d) {
                            switch (_d.label) {
                                case 0:
                                    _d.trys.push([0, 18, , 27]);
                                    beforeAdvices = context.container.getAll(aop_protocol_1.MethodBeforeAdvice) || [];
                                    _d.label = 1;
                                case 1:
                                    _d.trys.push([1, 6, 7, 8]);
                                    beforeAdvices_1 = __values(beforeAdvices), beforeAdvices_1_1 = beforeAdvices_1.next();
                                    _d.label = 2;
                                case 2:
                                    if (!!beforeAdvices_1_1.done) return [3 /*break*/, 5];
                                    advice = beforeAdvices_1_1.value;
                                    return [4 /*yield*/, advice.before(method, args, t)];
                                case 3:
                                    _d.sent();
                                    _d.label = 4;
                                case 4:
                                    beforeAdvices_1_1 = beforeAdvices_1.next();
                                    return [3 /*break*/, 2];
                                case 5: return [3 /*break*/, 8];
                                case 6:
                                    e_1_1 = _d.sent();
                                    e_1 = { error: e_1_1 };
                                    return [3 /*break*/, 8];
                                case 7:
                                    try {
                                        if (beforeAdvices_1_1 && !beforeAdvices_1_1.done && (_a = beforeAdvices_1.return)) _a.call(beforeAdvices_1);
                                    }
                                    finally { if (e_1) throw e_1.error; }
                                    return [7 /*endfinally*/];
                                case 8: return [4 /*yield*/, func.apply(target, args)];
                                case 9:
                                    returnValue = _d.sent();
                                    afterReturningAdvices = context.container.getAll(aop_protocol_1.AfterReturningAdvice) || [];
                                    _d.label = 10;
                                case 10:
                                    _d.trys.push([10, 15, 16, 17]);
                                    afterReturningAdvices_1 = __values(afterReturningAdvices), afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                    _d.label = 11;
                                case 11:
                                    if (!!afterReturningAdvices_1_1.done) return [3 /*break*/, 14];
                                    advice = afterReturningAdvices_1_1.value;
                                    return [4 /*yield*/, advice.afterReturning(returnValue, method, args, t)];
                                case 12:
                                    _d.sent();
                                    _d.label = 13;
                                case 13:
                                    afterReturningAdvices_1_1 = afterReturningAdvices_1.next();
                                    return [3 /*break*/, 11];
                                case 14: return [3 /*break*/, 17];
                                case 15:
                                    e_2_1 = _d.sent();
                                    e_2 = { error: e_2_1 };
                                    return [3 /*break*/, 17];
                                case 16:
                                    try {
                                        if (afterReturningAdvices_1_1 && !afterReturningAdvices_1_1.done && (_b = afterReturningAdvices_1.return)) _b.call(afterReturningAdvices_1);
                                    }
                                    finally { if (e_2) throw e_2.error; }
                                    return [7 /*endfinally*/];
                                case 17: return [2 /*return*/, returnValue];
                                case 18:
                                    error_1 = _d.sent();
                                    afterThrowsAdvices = context.container.getAll(aop_protocol_1.AfterThrowsAdvice) || [];
                                    _d.label = 19;
                                case 19:
                                    _d.trys.push([19, 24, 25, 26]);
                                    afterThrowsAdvices_1 = __values(afterThrowsAdvices), afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                    _d.label = 20;
                                case 20:
                                    if (!!afterThrowsAdvices_1_1.done) return [3 /*break*/, 23];
                                    advice = afterThrowsAdvices_1_1.value;
                                    return [4 /*yield*/, advice.afterThrows(error_1, method, args, t)];
                                case 21:
                                    _d.sent();
                                    _d.label = 22;
                                case 22:
                                    afterThrowsAdvices_1_1 = afterThrowsAdvices_1.next();
                                    return [3 /*break*/, 20];
                                case 23: return [3 /*break*/, 26];
                                case 24:
                                    e_3_1 = _d.sent();
                                    e_3 = { error: e_3_1 };
                                    return [3 /*break*/, 26];
                                case 25:
                                    try {
                                        if (afterThrowsAdvices_1_1 && !afterThrowsAdvices_1_1.done && (_c = afterThrowsAdvices_1.return)) _c.call(afterThrowsAdvices_1);
                                    }
                                    finally { if (e_3) throw e_3.error; }
                                    return [7 /*endfinally*/];
                                case 26: throw error_1;
                                case 27: return [2 /*return*/];
                            }
                        });
                    });
                };
            }
            return func;
        }
    });
    proxy.target = t;
    t.proxyTarget = proxy;
    return proxy;
}
function applyComponentDecorator(option, target) {
    var e_4, _a;
    var defaultComponentOption = {
        id: target,
        scope: Scope.Singleton,
        rebind: false,
        proxy: false
    };
    var opt = __assign(__assign({}, defaultComponentOption), option);
    var ids = Array.isArray(opt.id) ? opt.id : opt.id !== target ? [opt.id, target] : [opt.id];
    var id = ids[0];
    var p = inversify_binding_decorators_1.fluentProvide(id);
    var whenOn;
    if (opt.scope === Scope.Singleton) {
        whenOn = p.inSingletonScope();
    }
    else if (opt.scope === Scope.Transient) {
        whenOn = p.inTransientScope();
    }
    if (opt.proxy) {
        whenOn.onActivation(doProxy).done(true)(target);
    }
    else {
        whenOn.done(true)(target);
    }
    ids.shift();
    if (ids.length > 0) {
        Reflect.defineMetadata(constants_1.METADATA_KEY.toService, id, target);
    }
    try {
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var sevice = ids_1_1.value;
            inversify_binding_decorators_1.fluentProvide(sevice).done(true)(target);
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    if (opt.rebind) {
        var metadata = true;
        Reflect.defineMetadata(constants_1.METADATA_KEY.rebind, metadata, target);
    }
}
exports.applyComponentDecorator = applyComponentDecorator;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/constant.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/constant.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
exports.Constant = function (id, constantValue, rebind) {
    if (rebind === void 0) { rebind = false; }
    return function (t) {
        applyConstantDecorator({ id: id, constantValue: constantValue, rebind: rebind }, t);
    };
};
function applyConstantDecorator(option, target) {
    var previousMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
    var newMetadata = [option].concat(previousMetadata);
    Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, newMetadata, Reflect);
}
exports.applyConstantDecorator = applyConstantDecorator;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./autowired */ "./node_modules/@malagu/core/lib/common/annotation/autowired.js"));
__export(__webpack_require__(/*! ./component */ "./node_modules/@malagu/core/lib/common/annotation/component.js"));
__export(__webpack_require__(/*! ./value */ "./node_modules/@malagu/core/lib/common/annotation/value.js"));
__export(__webpack_require__(/*! ./optional */ "./node_modules/@malagu/core/lib/common/annotation/optional.js"));
__export(__webpack_require__(/*! ./constant */ "./node_modules/@malagu/core/lib/common/annotation/constant.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/optional.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/optional.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
exports.Optional = function (target, targetKey, index) {
    if (target === undefined) {
        return inversify_1.optional();
    }
    else {
        inversify_1.optional()(target, targetKey, index);
    }
};


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/annotation/value.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/annotation/value.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var container_1 = __webpack_require__(/*! ../container */ "./node_modules/@malagu/core/lib/common/container/index.js");
exports.VALUE = Symbol('Value');
var ValueOption;
(function (ValueOption) {
    function is(option) {
        return option && (option.el !== undefined || option.detached !== undefined);
    }
    ValueOption.is = is;
})(ValueOption = exports.ValueOption || (exports.ValueOption = {}));
exports.Value = function (target, targetKey, index) {
    var option = getValueOption(target, targetKey, index);
    if (targetKey === undefined && index === undefined) {
        return function (t, tk, i) {
            applyValueDecorator(option, t, tk, i);
        };
    }
    else {
        applyValueDecorator(option, target, targetKey, index);
    }
};
function getValueOption(target, targetKey, index) {
    var option = {};
    if (targetKey === undefined) {
        if (ValueOption.is(target)) {
            option = __assign({}, target);
        }
        else if (target) {
            option = { el: target };
        }
    }
    return option;
}
exports.getValueOption = getValueOption;
function applyValueDecorator(option, target, targetKey, index) {
    var defaultAutowiredOption = {
        el: targetKey,
        detached: false
    };
    var opt = __assign(__assign({}, defaultAutowiredOption), option);
    if (opt.detached) {
        if (index !== undefined) {
            throw new Error("The " + target.constructor.name + " itself is not injected into the container, so the parameter injection of the constructor is not supported.");
        }
        createValueProperty(opt, target, targetKey);
        return;
    }
    var el = opt.el;
    inversify_1.inject(exports.VALUE)(target, targetKey, index);
    inversify_1.named(el)(target, targetKey, index);
}
exports.applyValueDecorator = applyValueDecorator;
function createValueProperty(option, target, property) {
    Object.defineProperty(target, property, {
        enumerable: true,
        get: function () {
            var container = container_1.ContainerProvider.provide();
            var el = option.el;
            return container.getNamed(exports.VALUE, el);
        }
    });
}
exports.createValueProperty = createValueProperty;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/aop-protocol.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodBeforeAdvice = Symbol('MethodBeforeAdvice');
exports.AfterReturningAdvice = Symbol('AfterReturningAdvice');
exports.AfterThrowsAdvice = Symbol('AfterThrowsAdvice');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js"));
__export(__webpack_require__(/*! ./method-advice */ "./node_modules/@malagu/core/lib/common/aop/method-advice.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/aop/method-advice.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/aop/method-advice.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var aop_protocol_1 = __webpack_require__(/*! ./aop-protocol */ "./node_modules/@malagu/core/lib/common/aop/aop-protocol.js");
var NoOpMethodBeforeAdivice = /** @class */ (function () {
    function NoOpMethodBeforeAdivice() {
    }
    NoOpMethodBeforeAdivice.prototype.before = function (method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    NoOpMethodBeforeAdivice = __decorate([
        annotation_1.Component(aop_protocol_1.MethodBeforeAdvice)
    ], NoOpMethodBeforeAdivice);
    return NoOpMethodBeforeAdivice;
}());
exports.NoOpMethodBeforeAdivice = NoOpMethodBeforeAdivice;
var NoOpAfterReturningAdvice = /** @class */ (function () {
    function NoOpAfterReturningAdvice() {
    }
    NoOpAfterReturningAdvice.prototype.afterReturning = function (returnValue, method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    NoOpAfterReturningAdvice = __decorate([
        annotation_1.Component(aop_protocol_1.AfterReturningAdvice)
    ], NoOpAfterReturningAdvice);
    return NoOpAfterReturningAdvice;
}());
exports.NoOpAfterReturningAdvice = NoOpAfterReturningAdvice;
var NoOpAfterThrowsAdvice = /** @class */ (function () {
    function NoOpAfterThrowsAdvice() {
    }
    NoOpAfterThrowsAdvice.prototype.afterThrows = function (error, method, args, target) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    NoOpAfterThrowsAdvice = __decorate([
        annotation_1.Component(aop_protocol_1.AfterThrowsAdvice)
    ], NoOpAfterThrowsAdvice);
    return NoOpAfterThrowsAdvice;
}());
exports.NoOpAfterThrowsAdvice = NoOpAfterThrowsAdvice;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/application-error.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-error.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ApplicationError;
(function (ApplicationError) {
    var codes = [];
    function declare(code, factory) {
        if (codes.indexOf(code) !== -1) {
            throw new Error("An application error for '" + code + "' code is already declared");
        }
        var constructorOpt = Object.assign(function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return new Impl(code, factory.apply(void 0, __spread(args)), constructorOpt);
        }, {
            code: code,
            is: function (arg) {
                return arg instanceof Impl && arg.code === code;
            }
        });
        return constructorOpt;
    }
    ApplicationError.declare = declare;
    function is(arg) {
        return arg instanceof Impl;
    }
    ApplicationError.is = is;
    function fromJson(code, raw) {
        return new Impl(code, raw);
    }
    ApplicationError.fromJson = fromJson;
    var Impl = /** @class */ (function (_super) {
        __extends(Impl, _super);
        function Impl(code, raw, constructorOpt) {
            var _this = _super.call(this, raw.message) || this;
            _this.code = code;
            _this.data = raw.data;
            Object.setPrototypeOf(_this, Impl.prototype);
            if (raw.stack) {
                _this.stack = raw.stack;
            }
            else if (Error.captureStackTrace && constructorOpt) {
                Error.captureStackTrace(_this, constructorOpt);
            }
            return _this;
        }
        Impl.prototype.toJson = function () {
            var _a = this, message = _a.message, data = _a.data, stack = _a.stack;
            return { message: message, data: data, stack: stack };
        };
        return Impl;
    }(Error));
})(ApplicationError = exports.ApplicationError || (exports.ApplicationError = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/application-protocol.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/application-protocol.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var promise_util_1 = __webpack_require__(/*! ../utils/promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var logger_1 = __webpack_require__(/*! ../logger */ "./node_modules/@malagu/core/lib/common/logger/index.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var vscode_jsonrpc_1 = __webpack_require__(/*! vscode-jsonrpc */ "vscode-jsonrpc");
exports.ApplicationLifecycle = Symbol('ApplicationLifecycle');
exports.Application = Symbol('Application');
exports.ApplicationStateService = Symbol('ApplicationStateService');
var EmptyApplicationLifecycle = /** @class */ (function () {
    function EmptyApplicationLifecycle() {
    }
    EmptyApplicationLifecycle.prototype.initialize = function () {
        // NOOP
    };
    EmptyApplicationLifecycle = __decorate([
        annotation_1.Component(exports.ApplicationLifecycle)
    ], EmptyApplicationLifecycle);
    return EmptyApplicationLifecycle;
}());
exports.EmptyApplicationLifecycle = EmptyApplicationLifecycle;
var AbstractApplication = /** @class */ (function () {
    function AbstractApplication() {
    }
    /**
     * Initialize and start the frontend application.
     */
    AbstractApplication.prototype.doStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, lifecycle, _c, _d, lifecycle, error_1, e_1_1;
            var e_2, _e, e_1, _f;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        try {
                            for (_a = __values(this.lifecycles), _b = _a.next(); !_b.done; _b = _a.next()) {
                                lifecycle = _b.value;
                                if (lifecycle.initialize) {
                                    try {
                                        lifecycle.initialize();
                                    }
                                    catch (error) {
                                        this.logger.error('Could not initialize lifecycle', error);
                                    }
                                }
                            }
                        }
                        catch (e_2_1) { e_2 = { error: e_2_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_e = _a.return)) _e.call(_a);
                            }
                            finally { if (e_2) throw e_2.error; }
                        }
                        _g.label = 1;
                    case 1:
                        _g.trys.push([1, 8, 9, 10]);
                        _c = __values(this.lifecycles), _d = _c.next();
                        _g.label = 2;
                    case 2:
                        if (!!_d.done) return [3 /*break*/, 7];
                        lifecycle = _d.value;
                        if (!lifecycle.onStart) return [3 /*break*/, 6];
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, lifecycle.onStart(this)];
                    case 4:
                        _g.sent();
                        return [3 /*break*/, 6];
                    case 5:
                        error_1 = _g.sent();
                        this.logger.error('Could not start lifecycle', error_1);
                        return [3 /*break*/, 6];
                    case 6:
                        _d = _c.next();
                        return [3 /*break*/, 2];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _g.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_d && !_d.done && (_f = _c.return)) _f.call(_c);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Stop the frontend application lifecycle.
     */
    AbstractApplication.prototype.doStop = function () {
        var e_3, _a;
        try {
            for (var _b = __values(this.lifecycles), _c = _b.next(); !_c.done; _c = _b.next()) {
                var lifecycle = _c.value;
                if (lifecycle.onStop) {
                    try {
                        lifecycle.onStop(this);
                    }
                    catch (error) {
                        this.logger.error('Could not stop lifecycle', error);
                    }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
    };
    __decorate([
        annotation_1.Autowired(exports.ApplicationLifecycle),
        __metadata("design:type", Array)
    ], AbstractApplication.prototype, "lifecycles", void 0);
    __decorate([
        annotation_1.Autowired(logger_1.Logger),
        __metadata("design:type", Object)
    ], AbstractApplication.prototype, "logger", void 0);
    AbstractApplication = __decorate([
        inversify_1.injectable()
    ], AbstractApplication);
    return AbstractApplication;
}());
exports.AbstractApplication = AbstractApplication;
var AbstractApplicationStateService = /** @class */ (function () {
    function AbstractApplicationStateService() {
        this._state = 'init';
        this.deferred = {};
        this.stateChanged = new vscode_jsonrpc_1.Emitter();
    }
    Object.defineProperty(AbstractApplicationStateService.prototype, "state", {
        get: function () {
            return this._state;
        },
        set: function (state) {
            if (state !== this._state) {
                this.deferred[this._state] = new promise_util_1.Deferred();
                this._state = state;
                if (this.deferred[state] === undefined) {
                    this.deferred[state] = new promise_util_1.Deferred();
                }
                this.deferred[state].resolve();
                this.stateChanged.fire(state);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AbstractApplicationStateService.prototype, "onStateChanged", {
        get: function () {
            return this.stateChanged.event;
        },
        enumerable: true,
        configurable: true
    });
    AbstractApplicationStateService.prototype.reachedState = function (state) {
        if (this.deferred[state] === undefined) {
            this.deferred[state] = new promise_util_1.Deferred();
        }
        return this.deferred[state].promise;
    };
    AbstractApplicationStateService.prototype.reachedAnyState = function () {
        var _this = this;
        var states = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            states[_i] = arguments[_i];
        }
        return Promise.race(states.map(function (s) { return _this.reachedState(s); }));
    };
    AbstractApplicationStateService = __decorate([
        inversify_1.injectable()
    ], AbstractApplicationStateService);
    return AbstractApplicationStateService;
}());
exports.AbstractApplicationStateService = AbstractApplicationStateService;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/application/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/application/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./application-protocol */ "./node_modules/@malagu/core/lib/common/application/application-protocol.js"));
__export(__webpack_require__(/*! ./application-error */ "./node_modules/@malagu/core/lib/common/application/application-error.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/config-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigProvider = Symbol('ConfigProvider');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/config-provider.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/config-provider.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_protocol_1 = __webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var jexl = __webpack_require__(/*! jexl */ "jexl");
var ConfigProviderImpl = /** @class */ (function () {
    function ConfigProviderImpl() {
    }
    ConfigProviderImpl.prototype.get = function (key, defaultValue) {
        return jexl.evalSync(key, {"malagu":{"logger":{"level":"info"},"session":{"autoCommit":true,"maxAge":86400000,"sessionIdKey":"malagu:sessionId","sessionKey":"malagu:session"},"server":{"path":"/","port":3000},"trace":{"responseField":"X-Malagu-Trace-ID"},"mvc":{"path":"/*","defaultViewName":"json"},"mustache":{"cache":false,"baseViewDir":"assets/views"},"web":{"serveHooks":false},"core":{"validationPipeOptions":{"detailedOutputDisabled":false,"transformEnabled":true}},"cookies":{"keys":["abcdef"]}},"webpackHooks":[],"initHooks":[],"buildHooks":[],"deployHooks":[],"serveHooks":[],"deployConfig":{"type":"http"},"targets":["backend"],"entry":{"http":"@malagu/fc-adapter/lib/node/http-application-entry","api-gateway":"@malagu/fc-adapter/lib/node/api-gateway-application-entry"},"devEntry":{"http":"@malagu/fc-adapter/lib/node/http-application-entry","api-gateway":"@malagu/fc-adapter/lib/node/api-gateway-application-entry"},"modules":["src\\module"],"assets":[],"mode":["local"]}) || defaultValue;
    };
    ConfigProviderImpl = __decorate([
        annotation_1.Component(config_protocol_1.ConfigProvider)
    ], ConfigProviderImpl);
    return ConfigProviderImpl;
}());
exports.ConfigProviderImpl = ConfigProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/config/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/config/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./config-protocol */ "./node_modules/@malagu/core/lib/common/config/config-protocol.js"));
__export(__webpack_require__(/*! ./config-provider */ "./node_modules/@malagu/core/lib/common/config/config-provider.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/constants.js":
/*!***********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/constants.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.METADATA_KEY = {
    rebind: 'malagu:rebind',
    constantValue: 'malagu:constant-value',
    toService: 'malagu:to-service',
    provide: 'inversify-binding-decorators:provide'
};


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/auto-bind.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/auto-bind.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/core/lib/common/constants.js");
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "ts-custom-error");
var NoOpError = /** @class */ (function (_super) {
    __extends(NoOpError, _super);
    function NoOpError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NoOpError;
}(ts_custom_error_1.CustomError));
function autoBind(registry) {
    return new inversify_1.ContainerModule(function (bind, unbind, isBound, rebind) {
        var provideMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.provide, Reflect) || [];
        provideMetadata.map(function (metadata) { return resolve(metadata, bind, rebind); });
        Reflect.defineMetadata(constants_1.METADATA_KEY.provide, [], Reflect);
        var constantMetadata = Reflect.getMetadata(constants_1.METADATA_KEY.constantValue, Reflect) || [];
        constantMetadata.map(function (metadata) { return resolveConstant(metadata, bind, rebind); });
        Reflect.defineMetadata(constants_1.METADATA_KEY.constantValue, [], Reflect);
        if (registry) {
            registry(bind, unbind, isBound, rebind);
        }
    });
}
exports.autoBind = autoBind;
function resolve(metadata, bind, rebind) {
    var isRebind = Reflect.getOwnMetadata(constants_1.METADATA_KEY.rebind, metadata.implementationType);
    var id = Reflect.getOwnMetadata(constants_1.METADATA_KEY.toService, metadata.implementationType);
    var bindWrapper = function (serviceIdentifier) {
        if (id && id !== serviceIdentifier) {
            bind(serviceIdentifier).toService(id);
            throw new NoOpError();
        }
        if (isRebind) {
            return rebind(serviceIdentifier);
        }
        return bind(serviceIdentifier);
    };
    try {
        metadata.constraint(bindWrapper, metadata.implementationType);
    }
    catch (error) {
        if (error instanceof NoOpError) {
            return;
        }
        throw error;
    }
}
function resolveConstant(metadata, bind, rebind) {
    var e_1, _a;
    var ids = Array.isArray(metadata.id) ? metadata.id : [metadata.id];
    var id = ids.shift();
    if (metadata.rebind) {
        rebind(id).toConstantValue(metadata.constantValue);
    }
    else {
        bind(id).toConstantValue(metadata.constantValue);
    }
    try {
        for (var ids_1 = __values(ids), ids_1_1 = ids_1.next(); !ids_1_1.done; ids_1_1 = ids_1.next()) {
            var item = ids_1_1.value;
            bind(item).toService(id);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (ids_1_1 && !ids_1_1.done && (_a = ids_1.return)) _a.call(ids_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/container-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/container-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _container;
var ContainerProvider;
(function (ContainerProvider) {
    function set(container) {
        _container = container;
    }
    ContainerProvider.set = set;
    function provide() {
        if (!_container) {
            throw new Error('Container is not ready yet, the timing is incorrect.');
        }
        return _container;
    }
    ContainerProvider.provide = provide;
})(ContainerProvider = exports.ContainerProvider || (exports.ContainerProvider = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/dynamic-container.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

        
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
// dynamic loading component module at compile time
exports.container = Promise.resolve(new inversify_1.Container());

        
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const { Container } = __webpack_require__(/*! inversify */ "inversify");
const { CoreBackendModule } = __webpack_require__(/*! @malagu/core/lib/node/module */ "./node_modules/@malagu/core/lib/node/module.js");
__webpack_require__(/*! source-map-support */ "source-map-support").install();

const container = new Container();
container.load(CoreBackendModule);

function load(raw) {
  return Promise.resolve(raw.default).then(module => container.load(module));
}

module.exports.container = Promise.resolve()
  .then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/web/lib/node/module */ "./node_modules/@malagu/web/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/mvc/lib/node/module */ "./node_modules/@malagu/mvc/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! @malagu/fc-adapter/lib/node/module */ "./node_modules/@malagu/fc-adapter/lib/node/module.js")).then(load) }).
then(function () { return Promise.resolve(__webpack_require__(/*! ./src/module */ "./src/module.ts")).then(load) })
  .then(() => container).catch(reason => {
	  console.error('Failed to start the backend application.');
    if (reason) {
      console.error(reason);
    }
  });
        

/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/container/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/container/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./container-provider */ "./node_modules/@malagu/core/lib/common/container/container-provider.js"));
__export(__webpack_require__(/*! ./auto-bind */ "./node_modules/@malagu/core/lib/common/container/auto-bind.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/cutom-error.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/cutom-error.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ts_custom_error_1 = __webpack_require__(/*! ts-custom-error */ "ts-custom-error");
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CustomError;
}(ts_custom_error_1.CustomError));
exports.CustomError = CustomError;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js"));
__export(__webpack_require__(/*! ./validation-errors */ "./node_modules/@malagu/core/lib/common/error/validation-errors.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/error/validation-errors.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/error/validation-errors.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var cutom_error_1 = __webpack_require__(/*! ./cutom-error */ "./node_modules/@malagu/core/lib/common/error/cutom-error.js");
var ValidationErrors = /** @class */ (function (_super) {
    __extends(ValidationErrors, _super);
    function ValidationErrors(errors) {
        return _super.call(this, errors === undefined ? undefined : JSON.stringify(errors)) || this;
    }
    return ValidationErrors;
}(cutom_error_1.CustomError));
exports.ValidationErrors = ValidationErrors;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./utils */ "./node_modules/@malagu/core/lib/common/utils/index.js"));
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js"));
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/common/application/index.js"));
__export(__webpack_require__(/*! ./logger */ "./node_modules/@malagu/core/lib/common/logger/index.js"));
__export(__webpack_require__(/*! ./container */ "./node_modules/@malagu/core/lib/common/container/index.js"));
__export(__webpack_require__(/*! ./aop */ "./node_modules/@malagu/core/lib/common/aop/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/core/lib/common/constants.js"));
__export(__webpack_require__(/*! ./config */ "./node_modules/@malagu/core/lib/common/config/index.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/core/lib/common/error/index.js"));
__export(__webpack_require__(/*! ./pipe */ "./node_modules/@malagu/core/lib/common/pipe/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/console-logger.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/console-logger.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.error = function (message) {
        console.error(message);
    };
    ConsoleLogger.prototype.warn = function (message) {
        console.warn(message);
    };
    ConsoleLogger.prototype.info = function (message) {
        console.info(message);
    };
    ConsoleLogger.prototype.log = function (message) {
        console.log(message);
    };
    ConsoleLogger.prototype.debug = function (message) {
        console.debug(message);
    };
    return ConsoleLogger;
}());
exports.ConsoleLogger = ConsoleLogger;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/index.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./logger-protocol */ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js"));
__export(__webpack_require__(/*! ./console-logger */ "./node_modules/@malagu/core/lib/common/logger/console-logger.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/logger/logger-protocol.js":
/*!************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/logger/logger-protocol.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var log = __webpack_require__(/*! loglevel */ "loglevel");
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
exports.LOGGER_CONFIG = 'malagu.logger';
exports.Logger = Symbol('Logger');
var LoggerImpl = /** @class */ (function () {
    function LoggerImpl(config) {
        this.config = config;
        if (config.level) {
            log.setLevel(config.level);
        }
        else {
            log.setLevel('error');
        }
    }
    LoggerImpl.prototype.error = function (message, context) {
        if (context === void 0) { context = ''; }
        return log.error(message, context);
    };
    LoggerImpl.prototype.info = function (message, context) {
        if (context === void 0) { context = ''; }
        return log.info(message, context);
    };
    LoggerImpl.prototype.warn = function (message, context) {
        if (context === void 0) { context = ''; }
        return log.warn(message, context);
    };
    LoggerImpl.prototype.debug = function (message, context) {
        if (context === void 0) { context = ''; }
        return log.debug(message, context);
    };
    LoggerImpl = __decorate([
        annotation_1.Component(exports.Logger),
        __param(0, annotation_1.Value(exports.LOGGER_CONFIG)),
        __metadata("design:paramtypes", [Object])
    ], LoggerImpl);
    return LoggerImpl;
}());
exports.LoggerImpl = LoggerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./pipe-manager */ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js"));
__export(__webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js"));
__export(__webpack_require__(/*! ./pipe-provider */ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js"));
__export(__webpack_require__(/*! ./pipe-transtorm */ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-manager.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeManagerImpl = /** @class */ (function () {
    function PipeManagerImpl() {
    }
    PipeManagerImpl.prototype.apply = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var paramTypes, index, arg, _a, _b, pipe, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        paramTypes = Reflect.getMetadata('design:paramtypes', utils_1.getTarget(metadata.target), metadata.method);
                        if (!paramTypes) return [3 /*break*/, 11];
                        index = 0;
                        _d.label = 1;
                    case 1:
                        if (!(index < args.length)) return [3 /*break*/, 11];
                        arg = args[index];
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 9]);
                        _a = (e_1 = void 0, __values(this.pipeProvider.provide())), _b = _a.next();
                        _d.label = 3;
                    case 3:
                        if (!!_b.done) return [3 /*break*/, 6];
                        pipe = _b.value;
                        return [4 /*yield*/, pipe.transform(arg, { argType: index < paramTypes.length ? paramTypes[index] : undefined })];
                    case 4:
                        arg = _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 3];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9:
                        args[index] = arg;
                        _d.label = 10;
                    case 10:
                        index++;
                        return [3 /*break*/, 1];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        annotation_1.Autowired(pipe_protocol_1.PipeProvider),
        __metadata("design:type", Object)
    ], PipeManagerImpl.prototype, "pipeProvider", void 0);
    PipeManagerImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeManager)
    ], PipeManagerImpl);
    return PipeManagerImpl;
}());
exports.PipeManagerImpl = PipeManagerImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PipeTransform = Symbol('PipeTransform');
exports.PipeProvider = Symbol('PipeProvider');
exports.PipeManager = Symbol('PipeManager');


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-provider.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/@malagu/core/lib/common/utils/index.js");
var PipeProviderImpl = /** @class */ (function () {
    function PipeProviderImpl(pipes) {
        this.pipes = pipes;
    }
    PipeProviderImpl.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = utils_1.Prioritizeable.prioritizeAllSync(this.pipes).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    PipeProviderImpl = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeProvider),
        __param(0, annotation_1.Autowired(pipe_protocol_1.PipeTransform)),
        __metadata("design:paramtypes", [Array])
    ], PipeProviderImpl);
    return PipeProviderImpl;
}());
exports.PipeProviderImpl = PipeProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/pipe/pipe-transtorm.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var annotation_1 = __webpack_require__(/*! ../annotation */ "./node_modules/@malagu/core/lib/common/annotation/index.js");
var pipe_protocol_1 = __webpack_require__(/*! ./pipe-protocol */ "./node_modules/@malagu/core/lib/common/pipe/pipe-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/core/lib/common/error/index.js");
var util_1 = __webpack_require__(/*! util */ "util");
var class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
var class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
var ValidationPipe = /** @class */ (function () {
    function ValidationPipe() {
        this.priority = 1000;
    }
    ValidationPipe.prototype.transform = function (value, metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var opts, argType, originalValue, isNil, isPrimitive, entity, originalEntity, isCtorNotEqual, errors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        opts = this.options || {};
                        argType = metadata.argType;
                        if (!argType || !this.toValidate(metadata)) {
                            return [2 /*return*/, value];
                        }
                        originalValue = value;
                        value = this.toEmptyIfNil(value);
                        isNil = value !== originalValue;
                        isPrimitive = this.isPrimitive(value);
                        this.stripProtoKeys(value);
                        entity = class_transformer_1.plainToClass(argType, value, opts.transformOptions);
                        originalEntity = entity;
                        isCtorNotEqual = entity.constructor !== argType;
                        if (isCtorNotEqual && !isPrimitive) {
                            entity.constructor = argType;
                        }
                        else if (isCtorNotEqual) {
                            // when "entity" is a primitive value, we have to temporarily
                            // replace the entity to perform the validation against the original
                            // metatype defined inside the handler
                            entity = { constructor: argType };
                        }
                        return [4 /*yield*/, class_validator_1.validate(entity, opts.validatorOptions)];
                    case 1:
                        errors = _a.sent();
                        if (errors.length > 0) {
                            throw new error_1.ValidationErrors(opts.detailedOutputDisabled ? undefined : errors);
                        }
                        if (isPrimitive) {
                            // if the value is a primitive value and the validation process has been successfully completed
                            // we have to revert the original value passed through the pipe
                            entity = originalEntity;
                        }
                        if (opts.transformEnabled) {
                            return [2 /*return*/, entity];
                        }
                        if (isNil) {
                            // if the value was originally undefined or null, revert it back
                            return [2 /*return*/, originalValue];
                        }
                        return [2 /*return*/, Object.keys(opts.validatorOptions).length > 0
                                ? class_transformer_1.classToPlain(entity, opts.transformOptions)
                                : value];
                }
            });
        });
    };
    ValidationPipe.prototype.toValidate = function (metadata) {
        var argType = metadata.argType;
        var types = [String, Boolean, Number, Array, Object];
        return !types.some(function (t) { return argType === t; }) && !util_1.isNull(argType);
    };
    ValidationPipe.prototype.toEmptyIfNil = function (value) {
        return util_1.isNull(value) ? {} : value;
    };
    ValidationPipe.prototype.stripProtoKeys = function (value) {
        var _this = this;
        delete value.__proto__;
        var keys = Object.keys(value);
        keys
            .filter(function (key) { return typeof value[key] === 'object' && value[key]; })
            .forEach(function (key) { return _this.stripProtoKeys(value[key]); });
    };
    ValidationPipe.prototype.isPrimitive = function (value) {
        return ['number', 'boolean', 'string'].indexOf(typeof value) !== -1;
    };
    __decorate([
        annotation_1.Value('malagu.core.validationPipeOptions'),
        __metadata("design:type", Object)
    ], ValidationPipe.prototype, "options", void 0);
    ValidationPipe = __decorate([
        annotation_1.Component(pipe_protocol_1.PipeTransform)
    ], ValidationPipe);
    return ValidationPipe;
}());
exports.ValidationPipe = ValidationPipe;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/class-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/class-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSuperClasses(constructor) {
    var constructors = [];
    var current = constructor;
    while (Object.getPrototypeOf(current)) {
        current = Object.getPrototypeOf(current);
        constructors.push(current);
    }
    return constructors;
}
exports.getSuperClasses = getSuperClasses;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/disposable.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/disposable.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var events_1 = __webpack_require__(/*! vscode-jsonrpc/lib/events */ "vscode-jsonrpc/lib/events");
exports.Disposable = events_1.Disposable;
var DisposableCollection = /** @class */ (function () {
    function DisposableCollection() {
        var _this = this;
        var toDispose = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            toDispose[_i] = arguments[_i];
        }
        this.disposables = [];
        toDispose.forEach(function (d) { return _this.push(d); });
    }
    DisposableCollection.prototype.dispose = function () {
        while (this.disposables.length !== 0) {
            this.disposables.pop().dispose();
        }
    };
    Object.defineProperty(DisposableCollection.prototype, "disposed", {
        get: function () {
            return this.disposables.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    DisposableCollection.prototype.push = function (disposable) {
        var disposables = this.disposables;
        disposables.push(disposable);
        return {
            dispose: function () {
                var index = disposables.indexOf(disposable);
                if (index !== -1) {
                    disposables.splice(index, 1);
                }
            }
        };
    };
    return DisposableCollection;
}());
exports.DisposableCollection = DisposableCollection;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./prioritizeable */ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js"));
__export(__webpack_require__(/*! ./promise-util */ "./node_modules/@malagu/core/lib/common/utils/promise-util.js"));
__export(__webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js"));
__export(__webpack_require__(/*! ./metadata-util */ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js"));
__export(__webpack_require__(/*! ./disposable */ "./node_modules/@malagu/core/lib/common/utils/disposable.js"));
__export(__webpack_require__(/*! ./os */ "./node_modules/@malagu/core/lib/common/utils/os.js"));
__export(__webpack_require__(/*! ./proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/metadata-util.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/metadata-util.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var class_util_1 = __webpack_require__(/*! ./class-util */ "./node_modules/@malagu/core/lib/common/utils/class-util.js");
function getOwnMetadata(metadataKey, constructor, propertyKey) {
    var constructors = __spread([constructor], class_util_1.getSuperClasses(constructor));
    var result = [];
    for (var index = 0; index < constructors.length; index++) {
        var c = constructors[constructors.length - index - 1];
        var metadata = void 0;
        if (propertyKey) {
            metadata = Reflect.getOwnMetadata(metadataKey, c, propertyKey);
        }
        else {
            metadata = Reflect.getOwnMetadata(metadataKey, c);
        }
        if (metadata) {
            if (Array.isArray(metadata)) {
                result = __spread(result, metadata);
            }
            else {
                return metadata;
            }
        }
    }
    return result;
}
exports.getOwnMetadata = getOwnMetadata;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/os.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/os.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
function is(userAgent, platform) {
    if (typeof navigator !== 'undefined') {
        if (navigator.userAgent && navigator.userAgent.indexOf(userAgent) >= 0) {
            return true;
        }
    }
    if (typeof process !== 'undefined') {
        return (process.platform === platform);
    }
    return false;
}
exports.isWindows = is('Windows', 'win32');
exports.isOSX = is('Mac', 'darwin');
function cmd(command) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return [
        exports.isWindows ? 'cmd' : command,
        exports.isWindows ? __spread(['/c', command], args) : args
    ];
}
exports.cmd = cmd;
var OS;
(function (OS) {
    /**
     * Enumeration of the supported operating systems.
     */
    var Type;
    (function (Type) {
        Type["Windows"] = "Windows";
        Type["Linux"] = "Linux";
        Type["OSX"] = "OSX";
    })(Type = OS.Type || (OS.Type = {}));
    /**
     * Returns with the type of the operating system. If it is neither [Windows](isWindows) nor [OS X](isOSX), then
     * it always return with the `Linux` OS type.
     */
    function type() {
        if (exports.isWindows) {
            return Type.Windows;
        }
        if (exports.isOSX) {
            return Type.OSX;
        }
        return Type.Linux;
    }
    OS.type = type;
})(OS = exports.OS || (exports.OS = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/prioritizeable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/prioritizeable.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var Prioritizeable;
(function (Prioritizeable) {
    function toPrioritizeable(rawValue, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var value, priority;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (rawValue instanceof Array) {
                            return [2 /*return*/, Promise.all(rawValue.map(function (v) { return toPrioritizeable(v, getPriority); }))];
                        }
                        return [4 /*yield*/, rawValue];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, getPriority(value)];
                    case 2:
                        priority = _a.sent();
                        return [2 /*return*/, { priority: priority, value: value }];
                }
            });
        });
    }
    Prioritizeable.toPrioritizeable = toPrioritizeable;
    function toPrioritizeableSync(rawValue, getPriority) {
        if (getPriority === void 0) { getPriority = function (value) { return value.priority; }; }
        return rawValue.map(function (v) { return ({
            value: v,
            priority: getPriority(v)
        }); });
    }
    Prioritizeable.toPrioritizeableSync = toPrioritizeableSync;
    function prioritizeAllSync(values, getPriority) {
        var prioritizeable = toPrioritizeableSync(values, getPriority);
        return prioritizeable.filter(isValid).sort(compare);
    }
    Prioritizeable.prioritizeAllSync = prioritizeAllSync;
    function prioritizeAll(values, getPriority) {
        return __awaiter(this, void 0, void 0, function () {
            var prioritizeable;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, toPrioritizeable(values, getPriority)];
                    case 1:
                        prioritizeable = _a.sent();
                        return [2 /*return*/, prioritizeable.filter(isValid).sort(compare)];
                }
            });
        });
    }
    Prioritizeable.prioritizeAll = prioritizeAll;
    function isValid(p) {
        return p.priority > 0;
    }
    Prioritizeable.isValid = isValid;
    function compare(p, p2) {
        return p2.priority - p.priority;
    }
    Prioritizeable.compare = compare;
})(Prioritizeable = exports.Prioritizeable || (exports.Prioritizeable = {}));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/promise-util.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/promise-util.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Deferred = /** @class */ (function () {
    function Deferred() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return Deferred;
}());
exports.Deferred = Deferred;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js":
/*!******************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/common/utils/proxy-util.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getTargetClass(obj) {
    return obj.target ? obj.target.constructor : obj.constructor;
}
exports.getTargetClass = getTargetClass;
function getTarget(obj) {
    return obj.target || obj;
}
exports.getTarget = getTarget;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application-state.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var BackendApplicationStateService = /** @class */ (function (_super) {
    __extends(BackendApplicationStateService, _super);
    function BackendApplicationStateService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendApplicationStateService = __decorate([
        common_1.Component(common_1.ApplicationStateService)
    ], BackendApplicationStateService);
    return BackendApplicationStateService;
}(common_1.AbstractApplicationStateService));
exports.BackendApplicationStateService = BackendApplicationStateService;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/backend-application.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/backend-application.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/core/lib/common/index.js");
var backend_application_state_1 = __webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js");
var BackendApplication = /** @class */ (function (_super) {
    __extends(BackendApplication, _super);
    function BackendApplication() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackendApplication.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setupExitSignals();
                        return [4 /*yield*/, this.doStart()];
                    case 1:
                        _a.sent();
                        this.stateService.state = 'started';
                        this.stateService.state = 'ready';
                        return [2 /*return*/];
                }
            });
        });
    };
    BackendApplication.prototype.setupExitSignals = function () {
        process.removeListener('SIGINT', this.doExit);
        process.removeListener('SIGTERM', this.doExit);
        process.on('SIGINT', this.doExit.bind(this));
        process.on('SIGTERM', this.doExit.bind(this));
    };
    BackendApplication.prototype.doExit = function () {
        this.doStop();
        process.exit(0);
    };
    __decorate([
        common_1.Autowired(common_1.ApplicationStateService),
        __metadata("design:type", backend_application_state_1.BackendApplicationStateService)
    ], BackendApplication.prototype, "stateService", void 0);
    BackendApplication = __decorate([
        common_1.Component(common_1.Application)
    ], BackendApplication);
    return BackendApplication;
}(common_1.AbstractApplication));
exports.BackendApplication = BackendApplication;


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/application/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/application/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./backend-application */ "./node_modules/@malagu/core/lib/node/application/backend-application.js"));
__export(__webpack_require__(/*! ./backend-application-state */ "./node_modules/@malagu/core/lib/node/application/backend-application-state.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./application */ "./node_modules/@malagu/core/lib/node/application/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/core/lib/node/module.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/core/lib/node/module.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js"));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var common_1 = __webpack_require__(/*! ../common */ "./node_modules/@malagu/core/lib/common/index.js");
__export(__webpack_require__(/*! . */ "./node_modules/@malagu/core/lib/node/index.js"));
exports.CoreBackendModule = common_1.autoBind(function (bind) {
    bind(common_1.VALUE).toDynamicValue(function (ctx) {
        var namedMetadata = ctx.currentRequest.target.getNamedTag();
        var el = namedMetadata.value.toString();
        var configProvider = ctx.container.get(common_1.ConfigProvider);
        return configProvider.get(el);
    });
});


/***/ }),

/***/ "./node_modules/@malagu/fc-adapter/lib/node/context.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/fc-adapter/lib/node/context.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
function parseApiGatewayContext(event, context, callback) {
    var e = JSON.parse(event);
    var request = {
        method: e.method,
        path: e.path,
        url: e.path,
        connection: {},
        query: e.queryParameters || {},
        headers: e.headers,
        get body() {
            var body = e.isBase64Encoded ? Buffer.from(e.body, 'base64').toString('utf8') : e.body;
            if (e.headers['content-type'] === 'application/json') {
                return JSON.parse(body);
            }
        }
    };
    var res = {
        headers: {},
        isBase64Encoded: false
    };
    var response = {
        setHeader: function (name, value) {
            res.headers[name] = value;
        },
        getHeader: function (name) {
            return this.getHeaders()[name];
        },
        getHeaders: function () {
            return res.headers;
        },
        get statusCode() {
            return res.statusCode;
        },
        finished: false,
        set statusCode(statusCode) {
            res.statusCode = statusCode;
        },
        end: function (chunk, encoding, cb) {
            callback(undefined, __assign(__assign({}, res), { body: chunk }));
        }
    };
    var ctx = new node_1.HttpContext(request, response);
    ctx.event = event;
    ctx.context = context;
    ctx.callback = callback;
    return ctx;
}
exports.parseApiGatewayContext = parseApiGatewayContext;
function ParseHttpTriggerContext(req, res, context) {
    var request = req;
    if (req.queries) {
        request.query = req.queries;
        request.connection = {};
    }
    if (req.headers['content-type'] === 'application/json') {
        request.body = request.body ? JSON.parse(request.body) : request.body;
    }
    var response = {
        setHeader: function (name, value) {
            res.setHeader(name, value);
        },
        getHeader: function (name) {
            return res.getHeader ? res.getHeader(name) : (this.getHeaders()[name] ? this.getHeaders()[name] : res.headersMap[name]);
        },
        getHeaders: function () {
            return res.headers || res.getHeaders();
        },
        get statusCode() {
            return res.statusCode;
        },
        set statusCode(statusCode) {
            res.statusCode = statusCode;
        },
        finished: false,
        end: function (chunk, encoding, cb) {
            this.finished = true;
            // eslint-disable-next-line no-null/no-null
            res.send(chunk === undefined || chunk === null ? '' : chunk);
        }
    };
    var ctx = new node_1.HttpContext(request, response);
    ctx.context = context;
    return ctx;
}
exports.ParseHttpTriggerContext = ParseHttpTriggerContext;


/***/ }),

/***/ "./node_modules/@malagu/fc-adapter/lib/node/http-application-entry.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/fc-adapter/lib/node/http-application-entry.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var dynamic_container_1 = __webpack_require__(/*! @malagu/core/lib/common/container/dynamic-container */ "./node_modules/@malagu/core/lib/common/container/dynamic-container.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var context_1 = __webpack_require__(/*! ./context */ "./node_modules/@malagu/fc-adapter/lib/node/context.js");
var getRawBody = __webpack_require__(/*! raw-body */ "raw-body");
function init(context, callback) {
    return __awaiter(this, void 0, void 0, function () {
        var c, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, dynamic_container_1.container];
                case 1:
                    c = _a.sent();
                    core_1.ContainerProvider.set(c);
                    return [4 /*yield*/, c.get(core_1.Application).start()];
                case 2:
                    _a.sent();
                    callback(undefined, '');
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    callback(err_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.init = init;
function handler(request, response, context) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, httpContext_1, c, dispatcher_1, err_2;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    _a = request;
                    return [4 /*yield*/, getRawBody(request).then(function (body) { return body.toString(); })];
                case 1:
                    _a.body = _b.sent();
                    httpContext_1 = context_1.ParseHttpTriggerContext(request, response, context);
                    return [4 /*yield*/, dynamic_container_1.container];
                case 2:
                    c = _b.sent();
                    dispatcher_1 = c.get(node_1.Dispatcher);
                    node_1.Context.run(function () { return dispatcher_1.dispatch(httpContext_1); });
                    return [3 /*break*/, 4];
                case 3:
                    err_2 = _b.sent();
                    console.log(err_2);
                    response.statusCode = 500;
                    response.send(err_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
}
exports.handler = handler;


/***/ }),

/***/ "./node_modules/@malagu/fc-adapter/lib/node/module.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/fc-adapter/lib/node/module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MVC_PATH = 'malagu.mvc.path';


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/mvc/lib/common/constants.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/body.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/body.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Body = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyBodyDecorator(t, tk, i, target);
        };
    }
    else {
        applyBodyDecorator(target, targetKey, parameterIndex);
    }
};
function applyBodyDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerBody, metadatas, target.constructor, targetKey);
}
exports.applyBodyDecorator = applyBodyDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/catch.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Catch = function (errorTypes) {
    return function (t, k, d) {
        applyCatchDecorator(t, k, d, Array.isArray(errorTypes) ? errorTypes : [errorTypes]);
    };
};
function applyCatchDecorator(target, key, descriptor, errorTypes) {
    var metadata = { errorTypes: errorTypes, target: target, key: key, descriptor: descriptor };
    var metadataList = [];
    if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor)) {
        Reflect.defineMetadata(constants_1.METADATA_KEY.controllerCatch, metadataList, target.constructor);
    }
    else {
        metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, target.constructor);
    }
    metadataList.push(metadata);
}
exports.applyCatchDecorator = applyCatchDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/controller.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.CONTROLLER = Symbol('Controller');
function Controller(path) {
    if (path === void 0) { path = ''; }
    return function (target) {
        var metadata = { path: path, target: target };
        Reflect.defineMetadata(constants_1.METADATA_KEY.controller, metadata, target);
        core_1.Component({ id: exports.CONTROLLER, proxy: true })(target);
    };
}
exports.Controller = Controller;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/cookie.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Cookie = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestCookieDecorator(target, targetKey, parameterIndex);
    }
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseCookieDecorator(t, tk, d, target, targetKey);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestCookieDecorator(t, tk, i, target);
        };
    }
};
function applyRequestCookieDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestCookie, metadatas, target.constructor, targetKey);
}
exports.applyRequestCookieDecorator = applyRequestCookieDecorator;
function applyResponseCookieDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseCookie, metadatas, target.constructor, targetKey);
}
exports.applyResponseCookieDecorator = applyResponseCookieDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/header.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/header.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Header = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestHeaderDecorator(target, targetKey, parameterIndex);
    }
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseHeaderDecorator(t, tk, d, target, targetKey);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestHeaderDecorator(t, tk, i, target);
        };
    }
};
function applyRequestHeaderDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestHeader, metadatas, target.constructor, targetKey);
}
exports.applyRequestHeaderDecorator = applyRequestHeaderDecorator;
function applyResponseHeaderDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseHeader, metadatas, target.constructor, targetKey);
}
exports.applyResponseHeaderDecorator = applyResponseHeaderDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./body */ "./node_modules/@malagu/mvc/lib/node/annotation/body.js"));
__export(__webpack_require__(/*! ./controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js"));
__export(__webpack_require__(/*! ./header */ "./node_modules/@malagu/mvc/lib/node/annotation/header.js"));
__export(__webpack_require__(/*! ./method */ "./node_modules/@malagu/mvc/lib/node/annotation/method.js"));
__export(__webpack_require__(/*! ./param */ "./node_modules/@malagu/mvc/lib/node/annotation/param.js"));
__export(__webpack_require__(/*! ./query */ "./node_modules/@malagu/mvc/lib/node/annotation/query.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/annotation/view.js"));
__export(__webpack_require__(/*! ./cookie */ "./node_modules/@malagu/mvc/lib/node/annotation/cookie.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/mvc/lib/node/annotation/session.js"));
__export(__webpack_require__(/*! ./catch */ "./node_modules/@malagu/mvc/lib/node/annotation/catch.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/method.js":
/*!****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/method.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
function Get(options) {
    return exports.Method('get', options);
}
exports.Get = Get;
function Post(options) {
    return exports.Method('post', options);
}
exports.Post = Post;
function Put(options) {
    return exports.Method('put', options);
}
exports.Put = Put;
function Patch(options) {
    return exports.Method('patch', options);
}
exports.Patch = Patch;
function Head(options) {
    return exports.Method('head', options);
}
exports.Head = Head;
function Delete(options) {
    return exports.Method('delete', options);
}
exports.Delete = Delete;
function Options(options) {
    return exports.Method('options', options);
}
exports.Options = Options;
exports.Method = function (method, options) {
    if (options === void 0) { options = ''; }
    return function (target, key, descriptor) {
        var metadata = { options: options, method: method, target: target, key: key, descriptor: descriptor };
        var metadataList = [];
        if (!Reflect.hasOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor)) {
            Reflect.defineMetadata(constants_1.METADATA_KEY.controllerMethod, metadataList, target.constructor);
        }
        else {
            metadataList = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, target.constructor);
        }
        metadataList.push(metadata);
    };
};


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/param.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/param.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Param = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyParamDecorator(t, tk, i, target);
        };
    }
    else {
        applyParamDecorator(target, targetKey, parameterIndex);
    }
};
function applyParamDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerParam, metadatas, target.constructor, targetKey);
}
exports.applyParamDecorator = applyParamDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/query.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/query.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Query = function (target, targetKey, parameterIndex) {
    if (targetKey === undefined) {
        return function (t, tk, i) {
            applyQueryDecorator(t, tk, i, target);
        };
    }
    else {
        applyQueryDecorator(target, targetKey, parameterIndex);
    }
};
function applyQueryDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerQuery, metadatas, target.constructor, targetKey);
}
exports.applyQueryDecorator = applyQueryDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/session.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/session.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.Session = function (target, targetKey, parameterIndex) {
    if (parameterIndex !== undefined) {
        applyRequestSessionDecorator(target, targetKey, parameterIndex);
    }
    else if (target && targetKey) {
        return function (t, tk, d) {
            applyResponseSessionDecorator(t, tk, d, target, targetKey);
        };
    }
    else {
        return function (t, tk, i) {
            applyRequestSessionDecorator(t, tk, i, target);
        };
    }
};
function applyRequestSessionDecorator(target, targetKey, parameterIndex, name) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, parameterIndex: parameterIndex });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerRequestSession, metadatas, target.constructor, targetKey);
}
exports.applyRequestSessionDecorator = applyRequestSessionDecorator;
function applyResponseSessionDecorator(target, targetKey, descriptor, name, value) {
    var metadatas = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, target.constructor, targetKey) || [];
    metadatas.push({ name: name, value: value });
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerResponseSession, metadatas, target.constructor, targetKey);
}
exports.applyResponseSessionDecorator = applyResponseSessionDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/annotation/view.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/annotation/view.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
exports.View = function (viewName) {
    return function (t, k, d) {
        applyViewDecorator(t, k, d, viewName);
    };
};
function applyViewDecorator(target, targetKey, descriptor, viewName) {
    Reflect.defineMetadata(constants_1.METADATA_KEY.controllerView, { viewName: viewName }, target.constructor, targetKey);
}
exports.applyViewDecorator = applyViewDecorator;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/constants.js":
/*!********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/constants.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.METADATA_KEY = {
    controller: 'malagu:controller',
    controllerMethod: 'malagu:controller-method',
    controllerParam: 'malagu:controller-param',
    controllerRequestHeader: 'malagu:controller-request-header',
    controllerResponseHeader: 'malagu:controller-response-header',
    controllerRequestCookie: 'malagu:controller-request-cookie',
    controllerResponseCookie: 'malagu:controller-response-cookie',
    controllerRequestSession: 'malagu:controller-request-session',
    controllerResponseSession: 'malagu:controller-response-session',
    controllerQuery: 'malagu:controller-query',
    controllerBody: 'malagu:controller-body',
    controllerView: 'malagu:controller-view',
    controllerCatch: 'malagu:controller-catch'
};


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var resolver_1 = __webpack_require__(/*! ../resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/mvc/lib/common/index.js");
var core_2 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var node_2 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var MvcHandlerAdapter = /** @class */ (function () {
    function MvcHandlerAdapter() {
        this.priority = handler_protocol_1.MVC_HANDLER_ADAPTER_PRIORITY;
    }
    MvcHandlerAdapter.prototype.resolveMethodArgs = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var args, _a, _b, resolver, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        args = [];
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 6, 7, 8]);
                        _a = __values(this.methodArgsResolverProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 5];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata, args)];
                    case 3:
                        _d.sent();
                        _d.label = 4;
                    case 4:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 5: return [3 /*break*/, 8];
                    case 6:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 8];
                    case 7:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/, args];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.resolveResponse = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, resolver, e_2_1;
            var e_2, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 5, 6, 7]);
                        _a = __values(this.responseResolverProvider.provide()), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 4];
                        resolver = _b.value;
                        return [4 /*yield*/, resolver.resolve(metadata)];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 4: return [3 /*break*/, 7];
                    case 5:
                        e_2_1 = _d.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 7];
                    case 6:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var ctx, path, routeMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ctx = node_1.Context.getCurrent();
                        path = ctx.request.path;
                        return [4 /*yield*/, this.routeMetadataMatcher.match()];
                    case 1:
                        routeMetadata = _a.sent();
                        if (!routeMetadata) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.doHandle(routeMetadata)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3: throw new node_2.NotFoundAndContinueError("No mapping found: " + ctx.request.method + " " + path);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.doHandle = function (metadata, err) {
        return __awaiter(this, void 0, void 0, function () {
            var args, methodMetadata, target, model, error_1, errorMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.resolveMethodArgs(metadata)];
                    case 1:
                        args = _a.sent();
                        if (err) {
                            args = __spread([err], args);
                        }
                        methodMetadata = metadata.methodMetadata;
                        target = methodMetadata.target;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 5, , 10]);
                        return [4 /*yield*/, this.pipeManager.apply({ target: target, method: methodMetadata.key }, args)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, target[methodMetadata.key].apply(target, __spread(args))];
                    case 4:
                        model = _a.sent();
                        return [3 /*break*/, 10];
                    case 5:
                        error_1 = _a.sent();
                        if (!!err) return [3 /*break*/, 8];
                        return [4 /*yield*/, this.getErrorMetadata(error_1)];
                    case 6:
                        errorMetadata = _a.sent();
                        if (!errorMetadata.viewMetadata.viewName) {
                            errorMetadata.viewMetadata.viewName = metadata.viewMetadata.viewName;
                        }
                        return [4 /*yield*/, this.doHandle(errorMetadata, error_1)];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 8: throw error_1;
                    case 9: return [3 /*break*/, 10];
                    case 10:
                        if (!model) return [3 /*break*/, 12];
                        return [4 /*yield*/, this.viewResolver.resolve(metadata, model)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, this.resolveResponse(metadata)];
                    case 13:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.getErrorMetadata = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var routeMetadata;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.routeMetadataMatcher.match(error)];
                    case 1:
                        routeMetadata = _a.sent();
                        if (routeMetadata) {
                            return [2 /*return*/, routeMetadata];
                        }
                        throw error;
                }
            });
        });
    };
    MvcHandlerAdapter.prototype.canHandle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = this.requestMatcher).match;
                        return [4 /*yield*/, this.pathResolver.resolve(this.mvcPath)];
                    case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()])];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(resolver_1.MethodArgsResolverProvider),
        __metadata("design:type", resolver_1.MethodArgsResolverProvider)
    ], MvcHandlerAdapter.prototype, "methodArgsResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ResponseResolverProvider),
        __metadata("design:type", resolver_1.ResponseResolverProvider)
    ], MvcHandlerAdapter.prototype, "responseResolverProvider", void 0);
    __decorate([
        core_1.Autowired(resolver_1.ViewResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "viewResolver", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "requestMatcher", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pathResolver", void 0);
    __decorate([
        core_1.Autowired(core_2.PipeManager),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "pipeManager", void 0);
    __decorate([
        core_1.Value(common_1.MVC_PATH),
        __metadata("design:type", String)
    ], MvcHandlerAdapter.prototype, "mvcPath", void 0);
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteMetadataMatcher),
        __metadata("design:type", Object)
    ], MvcHandlerAdapter.prototype, "routeMetadataMatcher", void 0);
    MvcHandlerAdapter = __decorate([
        core_1.Component(node_1.HandlerAdapter)
    ], MvcHandlerAdapter);
    return MvcHandlerAdapter;
}());
exports.MvcHandlerAdapter = MvcHandlerAdapter;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MVC_HANDLER_ADAPTER_PRIORITY = 2000;
exports.RouteProvider = Symbol('RouteProvider');
exports.RouteMetadataMatcher = Symbol('RouteMetadataMatcher');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./handler-adapter */ "./node_modules/@malagu/mvc/lib/node/handler/handler-adapter.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js"));
__export(__webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js"));
__export(__webpack_require__(/*! ./route-provider */ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js"));
__export(__webpack_require__(/*! ./route-metadata-matcher */ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-builder.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var controller_1 = __webpack_require__(/*! ../annotation/controller */ "./node_modules/@malagu/mvc/lib/node/annotation/controller.js");
var constants_1 = __webpack_require__(/*! ../constants */ "./node_modules/@malagu/mvc/lib/node/constants.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var web_1 = __webpack_require__(/*! @malagu/web */ "./node_modules/@malagu/web/lib/common/index.js");
var proxy_util_1 = __webpack_require__(/*! @malagu/core/lib/common/utils/proxy-util */ "./node_modules/@malagu/core/lib/common/utils/proxy-util.js");
var RouteBuilder = /** @class */ (function () {
    function RouteBuilder() {
        this.controllers = [];
    }
    RouteBuilder.prototype.build = function () {
        return __awaiter(this, void 0, void 0, function () {
            var mapping, errorMapping, _a, _b, controller, targetConstructor, controllerMetadata, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        mapping = new Map();
                        errorMapping = new Map();
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.controllers), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        controller = _b.value;
                        targetConstructor = proxy_util_1.getTargetClass(controller);
                        controllerMetadata = Reflect.getOwnMetadata(constants_1.METADATA_KEY.controller, targetConstructor);
                        return [4 /*yield*/, this.doBuildRouteMap(mapping, targetConstructor, controller, controllerMetadata)];
                    case 3:
                        _d.sent();
                        return [4 /*yield*/, this.doBuildErrorRouteMap(errorMapping, targetConstructor, controller, controllerMetadata)];
                    case 4:
                        _d.sent();
                        _d.label = 5;
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, {
                            mapping: mapping,
                            errorMapping: errorMapping
                        }];
                }
            });
        });
    };
    RouteBuilder.prototype.doBuildRouteMap = function (mapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_1, methodMetadata_1_1, metadata, routeOptions, m, method, pathMap, path, _a, e_2_1;
            var e_2, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerMethod, targetConstructor);
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, 10, 11]);
                        methodMetadata_1 = __values(methodMetadata), methodMetadata_1_1 = methodMetadata_1.next();
                        _c.label = 2;
                    case 2:
                        if (!!methodMetadata_1_1.done) return [3 /*break*/, 8];
                        metadata = methodMetadata_1_1.value;
                        routeOptions = (typeof metadata.options === 'string' || metadata.options instanceof RegExp) ? { path: metadata.options } : metadata.options;
                        m = __assign({}, metadata);
                        method = m.method;
                        m.target = controller;
                        pathMap = mapping.get(method);
                        if (!pathMap) {
                            pathMap = new Map();
                            mapping.set(method, pathMap);
                        }
                        path = routeOptions.path;
                        if (!(typeof path === 'string')) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path)];
                    case 3:
                        path = _c.sent();
                        return [3 /*break*/, 6];
                    case 4:
                        if (!(path instanceof RegExp)) return [3 /*break*/, 6];
                        if (!controllerMetadata.path) return [3 /*break*/, 6];
                        _a = RegExp.bind;
                        return [4 /*yield*/, this.pathResolver.resolve(controllerMetadata.path, path.source)];
                    case 5:
                        path = new (_a.apply(RegExp, [void 0, _c.sent()]))();
                        _c.label = 6;
                    case 6:
                        pathMap.set(path, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m }, this.doRouteMetadata(targetConstructor, m.key)));
                        _c.label = 7;
                    case 7:
                        methodMetadata_1_1 = methodMetadata_1.next();
                        return [3 /*break*/, 2];
                    case 8: return [3 /*break*/, 11];
                    case 9:
                        e_2_1 = _c.sent();
                        e_2 = { error: e_2_1 };
                        return [3 /*break*/, 11];
                    case 10:
                        try {
                            if (methodMetadata_1_1 && !methodMetadata_1_1.done && (_b = methodMetadata_1.return)) _b.call(methodMetadata_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/];
                }
            });
        });
    };
    RouteBuilder.prototype.doBuildErrorRouteMap = function (errorMapping, targetConstructor, controller, controllerMetadata) {
        return __awaiter(this, void 0, void 0, function () {
            var methodMetadata, methodMetadata_2, methodMetadata_2_1, metadata, m, _a, _b, errorType;
            var e_3, _c, e_4, _d;
            return __generator(this, function (_e) {
                methodMetadata = core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerCatch, targetConstructor);
                try {
                    for (methodMetadata_2 = __values(methodMetadata), methodMetadata_2_1 = methodMetadata_2.next(); !methodMetadata_2_1.done; methodMetadata_2_1 = methodMetadata_2.next()) {
                        metadata = methodMetadata_2_1.value;
                        m = __assign({}, metadata);
                        m.target = controller;
                        try {
                            for (_a = (e_4 = void 0, __values(metadata.errorTypes)), _b = _a.next(); !_b.done; _b = _a.next()) {
                                errorType = _b.value;
                                errorMapping.set(errorType, __assign({ controllerMetadata: controllerMetadata, methodMetadata: m }, this.doRouteMetadata(targetConstructor, m.key)));
                            }
                        }
                        catch (e_4_1) { e_4 = { error: e_4_1 }; }
                        finally {
                            try {
                                if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                            }
                            finally { if (e_4) throw e_4.error; }
                        }
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (methodMetadata_2_1 && !methodMetadata_2_1.done && (_c = methodMetadata_2.return)) _c.call(methodMetadata_2);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    RouteBuilder.prototype.doRouteMetadata = function (targetConstructor, method) {
        return {
            paramMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerParam, targetConstructor, method),
            bodyMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerBody, targetConstructor, method),
            queryMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerQuery, targetConstructor, method),
            requestHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestHeader, targetConstructor, method),
            responseHeaderMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseHeader, targetConstructor, method),
            requestCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestCookie, targetConstructor, method),
            responseCookieMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseCookie, targetConstructor, method),
            requestSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerRequestSession, targetConstructor, method),
            responseSessionMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerResponseSession, targetConstructor, method),
            viewMetadata: core_1.getOwnMetadata(constants_1.METADATA_KEY.controllerView, targetConstructor, method) || {}
        };
    };
    __decorate([
        core_1.Autowired(controller_1.CONTROLLER), core_1.Optional,
        __metadata("design:type", Array)
    ], RouteBuilder.prototype, "controllers", void 0);
    __decorate([
        core_1.Autowired(web_1.PathResolver),
        __metadata("design:type", Object)
    ], RouteBuilder.prototype, "pathResolver", void 0);
    RouteBuilder = __decorate([
        core_1.Component()
    ], RouteBuilder);
    return RouteBuilder;
}());
exports.RouteBuilder = RouteBuilder;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-metadata-matcher.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
exports.PATH_PARMAS_ATTR = 'pathParams';
var RouteMetadataMatcherImpl = /** @class */ (function () {
    function RouteMetadataMatcherImpl() {
    }
    RouteMetadataMatcherImpl.prototype.match = function (error) {
        return __awaiter(this, void 0, void 0, function () {
            var route, metadata, _a, _b, entry, request, pathMap, pathMap_1, pathMap_1_1, entry, _c, p, metadata, pathParams, e_1_1;
            var e_2, _d, e_1, _e;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.routeProvider.provide()];
                    case 1:
                        route = _f.sent();
                        if (!error) return [3 /*break*/, 2];
                        metadata = route.errorMapping.get(error.constructor);
                        if (metadata) {
                            return [2 /*return*/, metadata];
                        }
                        else {
                            try {
                                for (_a = __values(route.errorMapping), _b = _a.next(); !_b.done; _b = _a.next()) {
                                    entry = _b.value;
                                    if (error instanceof entry[0]) {
                                        return [2 /*return*/, entry[1]];
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_b && !_b.done && (_d = _a.return)) _d.call(_a);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                        return [3 /*break*/, 10];
                    case 2:
                        request = node_1.Context.getRequest();
                        pathMap = route.mapping.get(request.method.toLowerCase());
                        if (!pathMap) return [3 /*break*/, 10];
                        _f.label = 3;
                    case 3:
                        _f.trys.push([3, 8, 9, 10]);
                        pathMap_1 = __values(pathMap), pathMap_1_1 = pathMap_1.next();
                        _f.label = 4;
                    case 4:
                        if (!!pathMap_1_1.done) return [3 /*break*/, 7];
                        entry = pathMap_1_1.value;
                        _c = __read(entry, 2), p = _c[0], metadata = _c[1];
                        return [4 /*yield*/, this.requestMatcher.match(p)];
                    case 5:
                        pathParams = _f.sent();
                        if (pathParams) {
                            node_1.Context.setAttr(exports.PATH_PARMAS_ATTR, pathParams);
                            return [2 /*return*/, metadata];
                        }
                        _f.label = 6;
                    case 6:
                        pathMap_1_1 = pathMap_1.next();
                        return [3 /*break*/, 4];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _f.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (pathMap_1_1 && !pathMap_1_1.done && (_e = pathMap_1.return)) _e.call(pathMap_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.RouteProvider),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "routeProvider", void 0);
    __decorate([
        core_1.Autowired(node_1.RequestMatcher),
        __metadata("design:type", Object)
    ], RouteMetadataMatcherImpl.prototype, "requestMatcher", void 0);
    RouteMetadataMatcherImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteMetadataMatcher)
    ], RouteMetadataMatcherImpl);
    return RouteMetadataMatcherImpl;
}());
exports.RouteMetadataMatcherImpl = RouteMetadataMatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/handler/route-provider.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/handler/route-provider.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/mvc/lib/node/handler/handler-protocol.js");
var route_builder_1 = __webpack_require__(/*! ./route-builder */ "./node_modules/@malagu/mvc/lib/node/handler/route-builder.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var RouteProviderImpl = /** @class */ (function () {
    function RouteProviderImpl() {
        this.routeDefered = new core_1.Deferred();
    }
    RouteProviderImpl.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.routeBuilder.build()];
                    case 1:
                        _a.route = _b.sent();
                        this.routeDefered.resolve(this.route);
                        return [2 /*return*/];
                }
            });
        });
    };
    RouteProviderImpl.prototype.provide = function () {
        return this.routeDefered.promise;
    };
    __decorate([
        core_1.Autowired(route_builder_1.RouteBuilder),
        __metadata("design:type", route_builder_1.RouteBuilder)
    ], RouteProviderImpl.prototype, "routeBuilder", void 0);
    __decorate([
        inversify_1.postConstruct(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], RouteProviderImpl.prototype, "init", null);
    RouteProviderImpl = __decorate([
        core_1.Component(handler_protocol_1.RouteProvider)
    ], RouteProviderImpl);
    return RouteProviderImpl;
}());
exports.RouteProviderImpl = RouteProviderImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./annotation */ "./node_modules/@malagu/mvc/lib/node/annotation/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/index.js"));
__export(__webpack_require__(/*! ./view */ "./node_modules/@malagu/mvc/lib/node/view/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/mvc/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./response-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js"));
__export(__webpack_require__(/*! ./method-args-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js"));
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./response-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js"));
__export(__webpack_require__(/*! ./view-resolver */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js"));
__export(__webpack_require__(/*! ./view-resolver-provider */ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver-provider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var MethodArgsResolverProvider = /** @class */ (function () {
    function MethodArgsResolverProvider(methodArgsResolvers) {
        this.methodArgsResolvers = methodArgsResolvers;
    }
    MethodArgsResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.methodArgsResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    MethodArgsResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.MethodArgsResolver)),
        __metadata("design:paramtypes", [Array])
    ], MethodArgsResolverProvider);
    return MethodArgsResolverProvider;
}());
exports.MethodArgsResolverProvider = MethodArgsResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/method-args-resolver.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_1 = __webpack_require__(/*! ../handler */ "./node_modules/@malagu/mvc/lib/node/handler/index.js");
var BodyMethodArgsResolver = /** @class */ (function () {
    function BodyMethodArgsResolver() {
        this.priority = 100;
    }
    BodyMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var body, bodyMetadatas, bodyMetadatas_1, bodyMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                body = node_1.Context.getCurrent().request.body;
                bodyMetadatas = metadata.bodyMetadata;
                if (bodyMetadatas && body !== undefined) {
                    try {
                        for (bodyMetadatas_1 = __values(bodyMetadatas), bodyMetadatas_1_1 = bodyMetadatas_1.next(); !bodyMetadatas_1_1.done; bodyMetadatas_1_1 = bodyMetadatas_1.next()) {
                            m = bodyMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? body[m.name] : body;
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (bodyMetadatas_1_1 && !bodyMetadatas_1_1.done && (_a = bodyMetadatas_1.return)) _a.call(bodyMetadatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    BodyMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], BodyMethodArgsResolver);
    return BodyMethodArgsResolver;
}());
exports.BodyMethodArgsResolver = BodyMethodArgsResolver;
var HeaderMethodArgsResolver = /** @class */ (function () {
    function HeaderMethodArgsResolver() {
        this.priority = 200;
    }
    HeaderMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var headers, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                headers = node_1.Context.getCurrent().request.headers;
                headerMetadatas = metadata.requestHeaderMetadata;
                if (headerMetadatas && headers !== undefined) {
                    try {
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? headers[m.name] : headers;
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HeaderMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], HeaderMethodArgsResolver);
    return HeaderMethodArgsResolver;
}());
exports.HeaderMethodArgsResolver = HeaderMethodArgsResolver;
var ParamMethodArgsResolver = /** @class */ (function () {
    function ParamMethodArgsResolver() {
        this.priority = 300;
    }
    ParamMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var params, paramMetadatas, paramMetadatas_1, paramMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                params = node_1.Context.getAttr(handler_1.PATH_PARMAS_ATTR);
                paramMetadatas = metadata.paramMetadata;
                if (paramMetadatas && params) {
                    try {
                        for (paramMetadatas_1 = __values(paramMetadatas), paramMetadatas_1_1 = paramMetadatas_1.next(); !paramMetadatas_1_1.done; paramMetadatas_1_1 = paramMetadatas_1.next()) {
                            m = paramMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? params[m.name] : params;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (paramMetadatas_1_1 && !paramMetadatas_1_1.done && (_a = paramMetadatas_1.return)) _a.call(paramMetadatas_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    ParamMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], ParamMethodArgsResolver);
    return ParamMethodArgsResolver;
}());
exports.ParamMethodArgsResolver = ParamMethodArgsResolver;
var QueryMethodArgsResolver = /** @class */ (function () {
    function QueryMethodArgsResolver() {
        this.priority = 400;
    }
    QueryMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var query, queryMetadatas, queryMetadatas_1, queryMetadatas_1_1, m;
            var e_4, _a;
            return __generator(this, function (_b) {
                query = node_1.Context.getCurrent().request.query;
                queryMetadatas = metadata.queryMetadata;
                if (queryMetadatas && query !== undefined) {
                    try {
                        for (queryMetadatas_1 = __values(queryMetadatas), queryMetadatas_1_1 = queryMetadatas_1.next(); !queryMetadatas_1_1.done; queryMetadatas_1_1 = queryMetadatas_1.next()) {
                            m = queryMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? query[m.name] : query;
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (queryMetadatas_1_1 && !queryMetadatas_1_1.done && (_a = queryMetadatas_1.return)) _a.call(queryMetadatas_1);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    QueryMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], QueryMethodArgsResolver);
    return QueryMethodArgsResolver;
}());
exports.QueryMethodArgsResolver = QueryMethodArgsResolver;
var CookieMethodArgsResolver = /** @class */ (function () {
    function CookieMethodArgsResolver() {
        this.priority = 500;
    }
    CookieMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_5, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.requestCookieMetadata;
                if (cookieMetadatas && cookies !== undefined) {
                    try {
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? cookies.get(m.name) : cookies;
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CookieMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], CookieMethodArgsResolver);
    return CookieMethodArgsResolver;
}());
exports.CookieMethodArgsResolver = CookieMethodArgsResolver;
var SessionMethodArgsResolver = /** @class */ (function () {
    function SessionMethodArgsResolver() {
        this.priority = 600;
    }
    SessionMethodArgsResolver.prototype.resolve = function (metadata, args) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_6, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.requestSessionMetadata;
                if (sessionMetadatas && session !== undefined) {
                    try {
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            args[m.parameterIndex] = m.name ? session[m.name] : session;
                        }
                    }
                    catch (e_6_1) { e_6 = { error: e_6_1 }; }
                    finally {
                        try {
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                        }
                        finally { if (e_6) throw e_6.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SessionMethodArgsResolver = __decorate([
        core_1.Component(resolver_protocol_1.MethodArgsResolver)
    ], SessionMethodArgsResolver);
    return SessionMethodArgsResolver;
}());
exports.SessionMethodArgsResolver = SessionMethodArgsResolver;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MethodArgsResolver = Symbol('MethodArgsResolver');
exports.ResponseResolver = Symbol('ResponseResolver');
exports.ViewResolver = Symbol('ViewResolver');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver-provider.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ResponseResolverProvider = /** @class */ (function () {
    function ResponseResolverProvider(responseResolvers) {
        this.responseResolvers = responseResolvers;
    }
    ResponseResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.responseResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ResponseResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ResponseResolver)),
        __metadata("design:paramtypes", [Array])
    ], ResponseResolverProvider);
    return ResponseResolverProvider;
}());
exports.ResponseResolverProvider = ResponseResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/response-resolver.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HeaderResponseResolver = /** @class */ (function () {
    function HeaderResponseResolver() {
        this.priority = 500;
    }
    HeaderResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var response, headerMetadatas, headerMetadatas_1, headerMetadatas_1_1, m;
            var e_1, _a;
            return __generator(this, function (_b) {
                response = node_1.Context.getCurrent().response;
                headerMetadatas = metadata.responseHeaderMetadata;
                if (headerMetadatas) {
                    try {
                        for (headerMetadatas_1 = __values(headerMetadatas), headerMetadatas_1_1 = headerMetadatas_1.next(); !headerMetadatas_1_1.done; headerMetadatas_1_1 = headerMetadatas_1.next()) {
                            m = headerMetadatas_1_1.value;
                            response.setHeader(m.name, m.value);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (headerMetadatas_1_1 && !headerMetadatas_1_1.done && (_a = headerMetadatas_1.return)) _a.call(headerMetadatas_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    HeaderResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], HeaderResponseResolver);
    return HeaderResponseResolver;
}());
exports.HeaderResponseResolver = HeaderResponseResolver;
var CookieResponseResolver = /** @class */ (function () {
    function CookieResponseResolver() {
        this.priority = 500;
    }
    CookieResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var cookies, cookieMetadatas, cookieMetadatas_1, cookieMetadatas_1_1, m;
            var e_2, _a;
            return __generator(this, function (_b) {
                cookies = node_1.Context.getCookies();
                cookieMetadatas = metadata.responseCookieMetadata;
                if (cookieMetadatas && cookies) {
                    try {
                        for (cookieMetadatas_1 = __values(cookieMetadatas), cookieMetadatas_1_1 = cookieMetadatas_1.next(); !cookieMetadatas_1_1.done; cookieMetadatas_1_1 = cookieMetadatas_1.next()) {
                            m = cookieMetadatas_1_1.value;
                            cookies.set(m.name, m.value);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (cookieMetadatas_1_1 && !cookieMetadatas_1_1.done && (_a = cookieMetadatas_1.return)) _a.call(cookieMetadatas_1);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    CookieResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], CookieResponseResolver);
    return CookieResponseResolver;
}());
exports.CookieResponseResolver = CookieResponseResolver;
var SessionResponseResolver = /** @class */ (function () {
    function SessionResponseResolver() {
        this.priority = 500;
    }
    SessionResponseResolver.prototype.resolve = function (metadata) {
        return __awaiter(this, void 0, void 0, function () {
            var session, sessionMetadatas, sessionMetadatas_1, sessionMetadatas_1_1, m;
            var e_3, _a;
            return __generator(this, function (_b) {
                session = node_1.Context.getSession();
                sessionMetadatas = metadata.responseSessionMetadata;
                if (sessionMetadatas && session) {
                    try {
                        for (sessionMetadatas_1 = __values(sessionMetadatas), sessionMetadatas_1_1 = sessionMetadatas_1.next(); !sessionMetadatas_1_1.done; sessionMetadatas_1_1 = sessionMetadatas_1.next()) {
                            m = sessionMetadatas_1_1.value;
                            session[m.name] = m.value;
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (sessionMetadatas_1_1 && !sessionMetadatas_1_1.done && (_a = sessionMetadatas_1.return)) _a.call(sessionMetadatas_1);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    SessionResponseResolver = __decorate([
        core_1.Component(resolver_protocol_1.ResponseResolver)
    ], SessionResponseResolver);
    return SessionResponseResolver;
}());
exports.SessionResponseResolver = SessionResponseResolver;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver-provider.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var ViewResolverProvider = /** @class */ (function () {
    function ViewResolverProvider(viewResolvers) {
        this.viewResolvers = viewResolvers;
    }
    ViewResolverProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.viewResolvers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ViewResolverProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(resolver_protocol_1.ViewResolver)),
        __metadata("design:paramtypes", [Array])
    ], ViewResolverProvider);
    return ViewResolverProvider;
}());
exports.ViewResolverProvider = ViewResolverProvider;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/resolver/view-resolver.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/mvc/lib/node/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_provider_1 = __webpack_require__(/*! ../view/view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var ViewResolverImpl = /** @class */ (function () {
    function ViewResolverImpl() {
    }
    ViewResolverImpl.prototype.resolve = function (metadata, model) {
        return __awaiter(this, void 0, void 0, function () {
            var viewMetadata, viewName, _a, _b, view, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        viewMetadata = metadata.viewMetadata;
                        viewName = viewMetadata.viewName || this.defaultViewName;
                        _d.label = 1;
                    case 1:
                        _d.trys.push([1, 7, 8, 9]);
                        _a = __values(this.viewProvider.provide()), _b = _a.next();
                        _d.label = 2;
                    case 2:
                        if (!!_b.done) return [3 /*break*/, 6];
                        view = _b.value;
                        return [4 /*yield*/, view.support(viewName)];
                    case 3:
                        if (!_d.sent()) return [3 /*break*/, 5];
                        node_1.Context.getResponse().setHeader('Content-type', view.contentType);
                        return [4 /*yield*/, view.render(model, viewName)];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        _b = _a.next();
                        return [3 /*break*/, 2];
                    case 6: return [3 /*break*/, 9];
                    case 7:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 9];
                    case 8:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 9: throw new Error('Not found a suitable view.');
                }
            });
        });
    };
    __decorate([
        core_1.Value('malagu.mvc.defaultViewName'),
        __metadata("design:type", String)
    ], ViewResolverImpl.prototype, "defaultViewName", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", view_provider_1.ViewProvider)
    ], ViewResolverImpl.prototype, "viewProvider", void 0);
    ViewResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.ViewResolver)
    ], ViewResolverImpl);
    return ViewResolverImpl;
}());
exports.ViewResolverImpl = ViewResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/html-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/html-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var mustache_1 = __webpack_require__(/*! mustache */ "mustache");
var path_1 = __webpack_require__(/*! path */ "path");
var fs_extra_1 = __webpack_require__(/*! fs-extra */ "fs-extra");
var HtmlView = /** @class */ (function () {
    function HtmlView() {
        this.contentType = 'text/html';
        this.priority = 500;
    }
    HtmlView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response, _a, baseViewDir, cache, template;
            return __generator(this, function (_b) {
                response = node_1.Context.getCurrent().response;
                _a = this.options, baseViewDir = _a.baseViewDir, cache = _a.cache;
                template = fs_extra_1.readFileSync(path_1.join(__dirname, baseViewDir, viewName), { encoding: 'utf8' });
                if (cache) {
                    mustache_1.parse(template);
                }
                response.body = mustache_1.render(template, model);
                return [2 /*return*/];
            });
        });
    };
    HtmlView.prototype.support = function (viewName) {
        return Promise.resolve(viewName.endsWith('.mustache'));
    };
    __decorate([
        core_1.Value('malagu.mustache'),
        __metadata("design:type", Object)
    ], HtmlView.prototype, "options", void 0);
    HtmlView = __decorate([
        core_1.Component(view_protocol_1.View)
    ], HtmlView);
    return HtmlView;
}());
exports.HtmlView = HtmlView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./json-view */ "./node_modules/@malagu/mvc/lib/node/view/json-view.js"));
__export(__webpack_require__(/*! ./text-view */ "./node_modules/@malagu/mvc/lib/node/view/text-view.js"));
__export(__webpack_require__(/*! ./view-provider */ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js"));
__export(__webpack_require__(/*! ./html-view */ "./node_modules/@malagu/mvc/lib/node/view/html-view.js"));


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/json-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/json-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var JsonView = /** @class */ (function () {
    function JsonView() {
        this.contentType = 'application/json';
        this.priority = 500;
    }
    JsonView_1 = JsonView;
    JsonView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = JSON.stringify(model);
                return [2 /*return*/];
            });
        });
    };
    JsonView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === JsonView_1.VIEW_NAME);
    };
    var JsonView_1;
    JsonView.VIEW_NAME = 'json';
    JsonView = JsonView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], JsonView);
    return JsonView;
}());
exports.JsonView = JsonView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/text-view.js":
/*!*************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/text-view.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var node_1 = __webpack_require__(/*! @malagu/web/lib/node */ "./node_modules/@malagu/web/lib/node/index.js");
var TextView = /** @class */ (function () {
    function TextView() {
        this.contentType = 'text/plain';
        this.priority = 600;
    }
    TextView_1 = TextView;
    TextView.prototype.render = function (model, viewName) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                response = node_1.Context.getCurrent().response;
                response.body = model;
                return [2 /*return*/];
            });
        });
    };
    TextView.prototype.support = function (viewName) {
        return Promise.resolve(viewName === TextView_1.VIEW_NAME);
    };
    var TextView_1;
    TextView.VIEW_NAME = 'text';
    TextView = TextView_1 = __decorate([
        core_1.Component(view_protocol_1.View)
    ], TextView);
    return TextView;
}());
exports.TextView = TextView;


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = Symbol('View');


/***/ }),

/***/ "./node_modules/@malagu/mvc/lib/node/view/view-provider.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/mvc/lib/node/view/view-provider.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var view_protocol_1 = __webpack_require__(/*! ./view-protocol */ "./node_modules/@malagu/mvc/lib/node/view/view-protocol.js");
var ViewProvider = /** @class */ (function () {
    function ViewProvider(views) {
        this.views = views;
    }
    ViewProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.views).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ViewProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(view_protocol_1.View)),
        __metadata("design:paramtypes", [Array])
    ], ViewProvider);
    return ViewProvider;
}());
exports.ViewProvider = ViewProvider;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/constants.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/constants.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ENDPOINT = 'malagu.server.endpoint';
exports.SERVER_PATH = 'malagu.server.path';
exports.CORS = 'malagu.web.cors';


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./resolver */ "./node_modules/@malagu/web/lib/common/resolver/index.js"));
__export(__webpack_require__(/*! ./constants */ "./node_modules/@malagu/web/lib/common/constants.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js"));
__export(__webpack_require__(/*! ./path-resolver */ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/path-resolver.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/path-resolver.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __read = (this && this.__read) || function (o, n) {
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
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var resolver_protocol_1 = __webpack_require__(/*! ./resolver-protocol */ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var urlJoin = __webpack_require__(/*! url-join */ "url-join");
var PathResolverImpl = /** @class */ (function () {
    function PathResolverImpl() {
    }
    PathResolverImpl.prototype.resolve = function () {
        var parts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            parts[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, urlJoin.apply(void 0, __spread([this.serverPath], parts))];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.server.path'),
        __metadata("design:type", String)
    ], PathResolverImpl.prototype, "serverPath", void 0);
    PathResolverImpl = __decorate([
        core_1.Component(resolver_protocol_1.PathResolver)
    ], PathResolverImpl);
    return PathResolverImpl;
}());
exports.PathResolverImpl = PathResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/common/resolver/resolver-protocol.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PathResolver = Symbol('PathResolver');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/context.js":
/*!******************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/context.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var requestContext = __webpack_require__(/*! express-http-context */ "express-http-context");
// eslint-disable-next-line no-shadow
var AttributeScope;
(function (AttributeScope) {
    AttributeScope[AttributeScope["App"] = 0] = "App";
    AttributeScope[AttributeScope["Request"] = 1] = "Request";
    AttributeScope[AttributeScope["Session"] = 2] = "Session";
})(AttributeScope = exports.AttributeScope || (exports.AttributeScope = {}));
exports.CURRENT_CONTEXT_REQUEST_KEY = 'CurrentContextRequest';
exports.CURRENT_COOKIES_REQUEST_KEY = 'CurrentCookiesRequest';
exports.CURRENT_SESSION_REQUEST_KEY = 'CurrentSessionRequest';
exports.CURRENT_TRACE_ID_REQUEST_KEY = 'CurrentTraceIdRequest';
var appAttrs = new Map();
var Context;
(function (Context) {
    function run(fn) {
        requestContext.ns.run(fn);
    }
    Context.run = run;
    function setCurrent(context) {
        requestContext.set(exports.CURRENT_CONTEXT_REQUEST_KEY, context);
    }
    Context.setCurrent = setCurrent;
    function getCurrent() {
        return requestContext.get(exports.CURRENT_CONTEXT_REQUEST_KEY);
    }
    Context.getCurrent = getCurrent;
    function getRequest() {
        return getCurrent().request;
    }
    Context.getRequest = getRequest;
    function getResponse() {
        return getCurrent().response;
    }
    Context.getResponse = getResponse;
    function getCookies() {
        return requestContext.get(exports.CURRENT_COOKIES_REQUEST_KEY);
    }
    Context.getCookies = getCookies;
    function setCookies(cookies) {
        requestContext.set(exports.CURRENT_COOKIES_REQUEST_KEY, cookies);
    }
    Context.setCookies = setCookies;
    function getSession() {
        return requestContext.get(exports.CURRENT_SESSION_REQUEST_KEY);
    }
    Context.getSession = getSession;
    function setSession(session) {
        requestContext.set(exports.CURRENT_SESSION_REQUEST_KEY, session);
    }
    Context.setSession = setSession;
    function setTraceId(traceId) {
        requestContext.set(exports.CURRENT_TRACE_ID_REQUEST_KEY, traceId);
    }
    Context.setTraceId = setTraceId;
    function getTraceId() {
        return requestContext.get(exports.CURRENT_TRACE_ID_REQUEST_KEY);
    }
    Context.getTraceId = getTraceId;
    function setAttr(key, value, scope) {
        if (scope === void 0) { scope = AttributeScope.Request; }
        if (scope === AttributeScope.Request) {
            requestContext.set(key, value);
        }
        else if (scope === AttributeScope.Session) {
            getSession()[key] = value;
        }
        else {
            appAttrs.set(key, value);
        }
    }
    Context.setAttr = setAttr;
    function getAttr(key, scope) {
        if (scope) {
            if (scope === AttributeScope.Request) {
                return requestContext.get(key);
            }
            else if (scope === AttributeScope.Session) {
                return getSession()[key];
            }
            else {
                return appAttrs.get(key);
            }
        }
        else {
            var value = requestContext.get(key);
            value = value ? value : getSession()[key];
            return value ? value : appAttrs.get(key);
        }
    }
    Context.getAttr = getAttr;
})(Context = exports.Context || (exports.Context = {}));
var HttpContext = /** @class */ (function () {
    function HttpContext(request, response) {
        this.request = request;
        this.response = response;
    }
    return HttpContext;
}());
exports.HttpContext = HttpContext;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var _Cookies = __webpack_require__(/*! cookies */ "cookies");
var CookiesFactory = /** @class */ (function () {
    function CookiesFactory() {
    }
    CookiesFactory.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = new _Cookies(context_1.Context.getRequest(), context_1.Context.getResponse(), {
                    keys: this.keys,
                    secure: this.secure
                });
                return [2 /*return*/, cookies];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.cookies.keys'),
        __metadata("design:type", Array)
    ], CookiesFactory.prototype, "keys", void 0);
    __decorate([
        core_1.Value('malagu.cookies.secure'),
        __metadata("design:type", Boolean)
    ], CookiesFactory.prototype, "secure", void 0);
    CookiesFactory = __decorate([
        core_1.Component()
    ], CookiesFactory);
    return CookiesFactory;
}());
exports.CookiesFactory = CookiesFactory;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cookies_factory_1 = __webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js");
var cookies_protocol_1 = __webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js");
var CookiesMiddleware = /** @class */ (function () {
    function CookiesMiddleware() {
        this.priority = cookies_protocol_1.COOKIES_MIDDLEWARE_PRIORITY;
    }
    CookiesMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!ctx.request) return [3 /*break*/, 2];
                        _b = (_a = context_1.Context).setCookies;
                        return [4 /*yield*/, this.cookiesFactory.create()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2: return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(cookies_factory_1.CookiesFactory),
        __metadata("design:type", cookies_factory_1.CookiesFactory)
    ], CookiesMiddleware.prototype, "cookiesFactory", void 0);
    CookiesMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], CookiesMiddleware);
    return CookiesMiddleware;
}());
exports.CookiesMiddleware = CookiesMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
exports.COOKIES_MIDDLEWARE_PRIORITY = http_1.HTTP_MIDDLEWARE_PRIORITY - 100;
exports.Cookies = Symbol('Cookies');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cookies/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cookies/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cookies-protocol */ "./node_modules/@malagu/web/lib/node/cookies/cookies-protocol.js"));
__export(__webpack_require__(/*! ./cookies-middleware */ "./node_modules/@malagu/web/lib/node/cookies/cookies-middleware.js"));
__export(__webpack_require__(/*! ./cookies-factory */ "./node_modules/@malagu/web/lib/node/cookies/cookies-factory.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var cors = __webpack_require__(/*! cors */ "cors");
var common_1 = __webpack_require__(/*! ../../common */ "./node_modules/@malagu/web/lib/common/index.js");
var cors_protocol_1 = __webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js");
var CorsMiddleware = /** @class */ (function () {
    function CorsMiddleware() {
        this.priority = cors_protocol_1.CORS_MIDDLEWARE_PRIORITY;
    }
    CorsMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) { return cors(_this.options)(ctx.request, ctx.response, function () { return next().then(resolve).catch(reject); }); })];
            });
        });
    };
    __decorate([
        core_1.Value(common_1.CORS),
        __metadata("design:type", Object)
    ], CorsMiddleware.prototype, "options", void 0);
    CorsMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], CorsMiddleware);
    return CorsMiddleware;
}());
exports.CorsMiddleware = CorsMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/cors-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var trace_1 = __webpack_require__(/*! ../trace */ "./node_modules/@malagu/web/lib/node/trace/index.js");
exports.CORS_MIDDLEWARE_PRIORITY = trace_1.TRACE_MIDDLEWARE_PRIORITY - 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/cors/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/cors/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./cors-protocol */ "./node_modules/@malagu/web/lib/node/cors/cors-protocol.js"));
__export(__webpack_require__(/*! ./cors-middleware */ "./node_modules/@malagu/web/lib/node/cors/cors-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dispatcher = Symbol('Dispatcher');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var error_hander_provider_1 = __webpack_require__(/*! ../error/error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js");
var dispatcher_protocol_1 = __webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ../handler/handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var DispatcherImpl = /** @class */ (function () {
    function DispatcherImpl() {
    }
    DispatcherImpl.prototype.dispatch = function (ctx) {
        return __awaiter(this, void 0, void 0, function () {
            var middlewares, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 4]);
                        context_1.Context.setCurrent(ctx);
                        middlewares = this.middlewareProvider.provide();
                        return [4 /*yield*/, this.handlerExecutionChain.execute(middlewares)];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        err_1 = _a.sent();
                        return [4 /*yield*/, this.handleError(ctx, err_1)];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DispatcherImpl.prototype.handleError = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            var errorHandlers, errorHandlers_1, errorHandlers_1_1, handler, error_1, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        errorHandlers = this.errorHandlerProvider.provide();
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 10, 11, 12]);
                        errorHandlers_1 = __values(errorHandlers), errorHandlers_1_1 = errorHandlers_1.next();
                        _b.label = 2;
                    case 2:
                        if (!!errorHandlers_1_1.done) return [3 /*break*/, 9];
                        handler = errorHandlers_1_1.value;
                        return [4 /*yield*/, handler.canHandle(ctx, err)];
                    case 3:
                        if (!_b.sent()) return [3 /*break*/, 8];
                        _b.label = 4;
                    case 4:
                        _b.trys.push([4, 6, , 7]);
                        return [4 /*yield*/, handler.handle(ctx, err)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _b.sent();
                        return [3 /*break*/, 8];
                    case 7: return [2 /*return*/];
                    case 8:
                        errorHandlers_1_1 = errorHandlers_1.next();
                        return [3 /*break*/, 2];
                    case 9: return [3 /*break*/, 12];
                    case 10:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 12];
                    case 11:
                        try {
                            if (errorHandlers_1_1 && !errorHandlers_1_1.done && (_a = errorHandlers_1.return)) _a.call(errorHandlers_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerExecutionChain),
        __metadata("design:type", Object)
    ], DispatcherImpl.prototype, "handlerExecutionChain", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", middleware_1.MiddlewareProvider)
    ], DispatcherImpl.prototype, "middlewareProvider", void 0);
    __decorate([
        core_1.Autowired,
        __metadata("design:type", error_hander_provider_1.ErrorHandlerProvider)
    ], DispatcherImpl.prototype, "errorHandlerProvider", void 0);
    DispatcherImpl = __decorate([
        core_1.Component(dispatcher_protocol_1.Dispatcher)
    ], DispatcherImpl);
    return DispatcherImpl;
}());
exports.DispatcherImpl = DispatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/dispatcher/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/dispatcher/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher.js"));
__export(__webpack_require__(/*! ./dispatcher-protocol */ "./node_modules/@malagu/web/lib/node/dispatcher/dispatcher-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-hander-provider.js ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var inversify_1 = __webpack_require__(/*! inversify */ "inversify");
var error_protocol_1 = __webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js");
var http_error_1 = __webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js");
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
var AbstractErrorHandler = /** @class */ (function () {
    function AbstractErrorHandler() {
        this.priority = error_protocol_1.DEFALUT_ERROR_HANDlER_PRIORITY;
    }
    AbstractErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(true);
    };
    AbstractErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.error(err);
                        ctx.response.statusCode = 500;
                        ctx.response.end(err.message);
                        return [4 /*yield*/, this.doHandle(ctx, err)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AbstractErrorHandler.prototype.doHandle = function (ctx, err) {
        return Promise.resolve();
    };
    AbstractErrorHandler = __decorate([
        inversify_1.injectable()
    ], AbstractErrorHandler);
    return AbstractErrorHandler;
}());
exports.AbstractErrorHandler = AbstractErrorHandler;
var DefaultErrorHandler = /** @class */ (function (_super) {
    __extends(DefaultErrorHandler, _super);
    function DefaultErrorHandler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefaultErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], DefaultErrorHandler);
    return DefaultErrorHandler;
}(AbstractErrorHandler));
exports.DefaultErrorHandler = DefaultErrorHandler;
var HttpErrorHandler = /** @class */ (function () {
    function HttpErrorHandler() {
        this.priority = error_protocol_1.HTTP_ERROR_HANDlER_PRIORITY;
    }
    HttpErrorHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof http_error_1.HttpError);
    };
    HttpErrorHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = err.statusCode;
                ctx.response.end(err.message);
                return [2 /*return*/];
            });
        });
    };
    HttpErrorHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], HttpErrorHandler);
    return HttpErrorHandler;
}());
exports.HttpErrorHandler = HttpErrorHandler;
var ValidationErrorsHandler = /** @class */ (function () {
    function ValidationErrorsHandler() {
        this.priority = error_protocol_1.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY;
    }
    ValidationErrorsHandler.prototype.canHandle = function (ctx, err) {
        return Promise.resolve(err instanceof core_1.ValidationErrors);
    };
    ValidationErrorsHandler.prototype.handle = function (ctx, err) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                ctx.response.statusCode = http_1.HttpStatus.BAD_REQUEST;
                ctx.response.end(err.message);
                return [2 /*return*/];
            });
        });
    };
    ValidationErrorsHandler = __decorate([
        core_1.Component(error_protocol_1.ErrorHandler)
    ], ValidationErrorsHandler);
    return ValidationErrorsHandler;
}());
exports.ValidationErrorsHandler = ValidationErrorsHandler;
var ErrorHandlerProvider = /** @class */ (function () {
    function ErrorHandlerProvider(handlers) {
        this.handlers = handlers;
    }
    ErrorHandlerProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlers).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    ErrorHandlerProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(error_protocol_1.ErrorHandler)),
        __metadata("design:paramtypes", [Array])
    ], ErrorHandlerProvider);
    return ErrorHandlerProvider;
}());
exports.ErrorHandlerProvider = ErrorHandlerProvider;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/error-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/error-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandler = Symbol('ErrorHandler');
exports.DEFALUT_ERROR_HANDlER_PRIORITY = 500;
exports.HTTP_ERROR_HANDlER_PRIORITY = exports.DEFALUT_ERROR_HANDlER_PRIORITY + 100;
exports.VALIDATION_ERRORS_ERROR_HANDlER_PRIORITY = exports.HTTP_ERROR_HANDlER_PRIORITY + 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/http-error.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/http-error.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var HttpError = /** @class */ (function (_super) {
    __extends(HttpError, _super);
    function HttpError(statusCode, message) {
        var _this = _super.call(this, message) || this;
        _this.statusCode = statusCode;
        return _this;
    }
    return HttpError;
}(core_1.CustomError));
exports.HttpError = HttpError;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js"));
__export(__webpack_require__(/*! ./error-hander-provider */ "./node_modules/@malagu/web/lib/node/error/error-hander-provider.js"));
__export(__webpack_require__(/*! ./error-protocol */ "./node_modules/@malagu/web/lib/node/error/error-protocol.js"));
__export(__webpack_require__(/*! ./not-found-error */ "./node_modules/@malagu/web/lib/node/error/not-found-error.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/error/not-found-error.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/error/not-found-error.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var http_error_1 = __webpack_require__(/*! ./http-error */ "./node_modules/@malagu/web/lib/node/error/http-error.js");
var http_1 = __webpack_require__(/*! ../http */ "./node_modules/@malagu/web/lib/node/http/index.js");
var NotFoundError = /** @class */ (function (_super) {
    __extends(NotFoundError, _super);
    function NotFoundError(message) {
        return _super.call(this, http_1.HttpStatus.NOT_FOUND, message) || this;
    }
    return NotFoundError;
}(http_error_1.HttpError));
exports.NotFoundError = NotFoundError;
var NotFoundAndContinueError = /** @class */ (function (_super) {
    __extends(NotFoundAndContinueError, _super);
    function NotFoundAndContinueError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotFoundAndContinueError;
}(NotFoundError));
exports.NotFoundAndContinueError = NotFoundAndContinueError;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var HandlerExecutionChainImpl = /** @class */ (function () {
    function HandlerExecutionChainImpl() {
    }
    HandlerExecutionChainImpl.prototype.execute = function (middlewares) {
        var _this = this;
        var middleware = middleware_1.compose(middlewares);
        return middleware(context_1.Context.getCurrent(), {
            handle: function (c, next) { return _this.handlerMapping.handle(); },
            priority: 0
        });
    };
    __decorate([
        core_1.Autowired(handler_protocol_1.HandlerMapping),
        __metadata("design:type", Object)
    ], HandlerExecutionChainImpl.prototype, "handlerMapping", void 0);
    HandlerExecutionChainImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerExecutionChain)
    ], HandlerExecutionChainImpl);
    return HandlerExecutionChainImpl;
}());
exports.HandlerExecutionChainImpl = HandlerExecutionChainImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-mapping.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var handler_protocol_1 = __webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js");
var error_1 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/web/lib/node/error/index.js");
var error_2 = __webpack_require__(/*! ../error */ "./node_modules/@malagu/web/lib/node/error/index.js");
var HandlerMappingImpl = /** @class */ (function () {
    function HandlerMappingImpl(handlerAdapters) {
        this.handlerAdapters = handlerAdapters;
        this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.handlerAdapters).map(function (c) { return c.value; });
    }
    HandlerMappingImpl.prototype.handle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var lastError, _a, _b, handler, error_3, e_1_1;
            var e_1, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 8, 9, 10]);
                        _a = __values(this.prioritized), _b = _a.next();
                        _d.label = 1;
                    case 1:
                        if (!!_b.done) return [3 /*break*/, 7];
                        handler = _b.value;
                        return [4 /*yield*/, handler.canHandle()];
                    case 2:
                        if (!_d.sent()) return [3 /*break*/, 6];
                        _d.label = 3;
                    case 3:
                        _d.trys.push([3, 5, , 6]);
                        return [4 /*yield*/, handler.handle()];
                    case 4:
                        _d.sent();
                        return [2 /*return*/];
                    case 5:
                        error_3 = _d.sent();
                        if (error_3 instanceof error_2.NotFoundAndContinueError) {
                            lastError = error_3;
                        }
                        else {
                            throw error_3;
                        }
                        return [3 /*break*/, 6];
                    case 6:
                        _b = _a.next();
                        return [3 /*break*/, 1];
                    case 7: return [3 /*break*/, 10];
                    case 8:
                        e_1_1 = _d.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 10];
                    case 9:
                        try {
                            if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 10:
                        if (lastError) {
                            throw lastError;
                        }
                        throw new error_1.NotFoundError('Not found a suitable handler adapter');
                }
            });
        });
    };
    HandlerMappingImpl = __decorate([
        core_1.Component(handler_protocol_1.HandlerMapping),
        __param(0, core_1.Autowired(handler_protocol_1.HandlerAdapter)),
        __metadata("design:paramtypes", [Array])
    ], HandlerMappingImpl);
    return HandlerMappingImpl;
}());
exports.HandlerMappingImpl = HandlerMappingImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/handler-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerExecutionChain = Symbol('HandlerExecutionChain');
exports.HandlerAdapter = Symbol('HandlerAdapter');
exports.HandlerMapping = Symbol('HandlerMapping');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/handler/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/handler/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./handler-execution-chain */ "./node_modules/@malagu/web/lib/node/handler/handler-execution-chain.js"));
__export(__webpack_require__(/*! ./handler-mapping */ "./node_modules/@malagu/web/lib/node/handler/handler-mapping.js"));
__export(__webpack_require__(/*! ./handler-protocol */ "./node_modules/@malagu/web/lib/node/handler/handler-protocol.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/http-middleware.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-middleware.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var http_protocol_1 = __webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js");
var HttpMiddleware = /** @class */ (function () {
    function HttpMiddleware() {
        this.priority = http_protocol_1.HTTP_MIDDLEWARE_PRIORITY;
    }
    HttpMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var response, body, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, next()];
                    case 1:
                        _c.sent();
                        response = ctx.response;
                        if (!!response.finished) return [3 /*break*/, 4];
                        body = response.body;
                        if (!(body instanceof core_1.Deferred)) return [3 /*break*/, 3];
                        _b = (_a = response).end;
                        return [4 /*yield*/, body.promise];
                    case 2:
                        _b.apply(_a, [_c.sent()]);
                        return [3 /*break*/, 4];
                    case 3:
                        response.end(response.body);
                        _c.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HttpMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], HttpMiddleware);
    return HttpMiddleware;
}());
exports.HttpMiddleware = HttpMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/http-protocol.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/http-protocol.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __webpack_require__(/*! ../cors */ "./node_modules/@malagu/web/lib/node/cors/index.js");
exports.HTTP_MIDDLEWARE_PRIORITY = cors_1.CORS_MIDDLEWARE_PRIORITY - 100;
exports.XML_HTTP_REQUEST = 'XMLHttpRequest';
exports.X_REQUESTED_WITH = 'X-Requested-With';
var HttpStatus;
(function (HttpStatus) {
    HttpStatus[HttpStatus["CONTINUE"] = 100] = "CONTINUE";
    HttpStatus[HttpStatus["SWITCHING_PROTOCOLS"] = 101] = "SWITCHING_PROTOCOLS";
    HttpStatus[HttpStatus["PROCESSING"] = 102] = "PROCESSING";
    HttpStatus[HttpStatus["OK"] = 200] = "OK";
    HttpStatus[HttpStatus["CREATED"] = 201] = "CREATED";
    HttpStatus[HttpStatus["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatus[HttpStatus["NON_AUTHORITATIVE_INFORMATION"] = 203] = "NON_AUTHORITATIVE_INFORMATION";
    HttpStatus[HttpStatus["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatus[HttpStatus["RESET_CONTENT"] = 205] = "RESET_CONTENT";
    HttpStatus[HttpStatus["PARTIAL_CONTENT"] = 206] = "PARTIAL_CONTENT";
    HttpStatus[HttpStatus["AMBIGUOUS"] = 300] = "AMBIGUOUS";
    HttpStatus[HttpStatus["MOVED_PERMANENTLY"] = 301] = "MOVED_PERMANENTLY";
    HttpStatus[HttpStatus["FOUND"] = 302] = "FOUND";
    HttpStatus[HttpStatus["SEE_OTHER"] = 303] = "SEE_OTHER";
    HttpStatus[HttpStatus["NOT_MODIFIED"] = 304] = "NOT_MODIFIED";
    HttpStatus[HttpStatus["TEMPORARY_REDIRECT"] = 307] = "TEMPORARY_REDIRECT";
    HttpStatus[HttpStatus["PERMANENT_REDIRECT"] = 308] = "PERMANENT_REDIRECT";
    HttpStatus[HttpStatus["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatus[HttpStatus["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatus[HttpStatus["PAYMENT_REQUIRED"] = 402] = "PAYMENT_REQUIRED";
    HttpStatus[HttpStatus["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatus[HttpStatus["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatus[HttpStatus["METHOD_NOT_ALLOWED"] = 405] = "METHOD_NOT_ALLOWED";
    HttpStatus[HttpStatus["NOT_ACCEPTABLE"] = 406] = "NOT_ACCEPTABLE";
    HttpStatus[HttpStatus["PROXY_AUTHENTICATION_REQUIRED"] = 407] = "PROXY_AUTHENTICATION_REQUIRED";
    HttpStatus[HttpStatus["REQUEST_TIMEOUT"] = 408] = "REQUEST_TIMEOUT";
    HttpStatus[HttpStatus["CONFLICT"] = 409] = "CONFLICT";
    HttpStatus[HttpStatus["GONE"] = 410] = "GONE";
    HttpStatus[HttpStatus["LENGTH_REQUIRED"] = 411] = "LENGTH_REQUIRED";
    HttpStatus[HttpStatus["PRECONDITION_FAILED"] = 412] = "PRECONDITION_FAILED";
    HttpStatus[HttpStatus["PAYLOAD_TOO_LARGE"] = 413] = "PAYLOAD_TOO_LARGE";
    HttpStatus[HttpStatus["URI_TOO_LONG"] = 414] = "URI_TOO_LONG";
    HttpStatus[HttpStatus["UNSUPPORTED_MEDIA_TYPE"] = 415] = "UNSUPPORTED_MEDIA_TYPE";
    HttpStatus[HttpStatus["REQUESTED_RANGE_NOT_SATISFIABLE"] = 416] = "REQUESTED_RANGE_NOT_SATISFIABLE";
    HttpStatus[HttpStatus["EXPECTATION_FAILED"] = 417] = "EXPECTATION_FAILED";
    HttpStatus[HttpStatus["I_AM_A_TEAPOT"] = 418] = "I_AM_A_TEAPOT";
    HttpStatus[HttpStatus["UNPROCESSABLE_ENTITY"] = 422] = "UNPROCESSABLE_ENTITY";
    HttpStatus[HttpStatus["FAILED_DEPENDENCY"] = 424] = "FAILED_DEPENDENCY";
    HttpStatus[HttpStatus["TOO_MANY_REQUESTS"] = 429] = "TOO_MANY_REQUESTS";
    HttpStatus[HttpStatus["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
    HttpStatus[HttpStatus["NOT_IMPLEMENTED"] = 501] = "NOT_IMPLEMENTED";
    HttpStatus[HttpStatus["BAD_GATEWAY"] = 502] = "BAD_GATEWAY";
    HttpStatus[HttpStatus["SERVICE_UNAVAILABLE"] = 503] = "SERVICE_UNAVAILABLE";
    HttpStatus[HttpStatus["GATEWAY_TIMEOUT"] = 504] = "GATEWAY_TIMEOUT";
    HttpStatus[HttpStatus["HTTP_VERSION_NOT_SUPPORTED"] = 505] = "HTTP_VERSION_NOT_SUPPORTED";
})(HttpStatus = exports.HttpStatus || (exports.HttpStatus = {}));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/http/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/http/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./http-protocol */ "./node_modules/@malagu/web/lib/node/http/http-protocol.js"));
__export(__webpack_require__(/*! ./http-middleware */ "./node_modules/@malagu/web/lib/node/http/http-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/index.js":
/*!****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js"));
__export(__webpack_require__(/*! ./dispatcher */ "./node_modules/@malagu/web/lib/node/dispatcher/index.js"));
__export(__webpack_require__(/*! ./context */ "./node_modules/@malagu/web/lib/node/context.js"));
__export(__webpack_require__(/*! ./error */ "./node_modules/@malagu/web/lib/node/error/index.js"));
__export(__webpack_require__(/*! ./handler */ "./node_modules/@malagu/web/lib/node/handler/index.js"));
__export(__webpack_require__(/*! ./cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/index.js"));
__export(__webpack_require__(/*! ./http */ "./node_modules/@malagu/web/lib/node/http/index.js"));
__export(__webpack_require__(/*! ./matcher */ "./node_modules/@malagu/web/lib/node/matcher/index.js"));
__export(__webpack_require__(/*! ./cors */ "./node_modules/@malagu/web/lib/node/cors/index.js"));
__export(__webpack_require__(/*! ./trace */ "./node_modules/@malagu/web/lib/node/trace/index.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js"));
__export(__webpack_require__(/*! ./request-matcher */ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestMatcher = Symbol('RequestMatcher');


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/matcher/request-matcher.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/matcher/request-matcher.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var matcher_protocol_1 = __webpack_require__(/*! ./matcher-protocol */ "./node_modules/@malagu/web/lib/node/matcher/matcher-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var UrlPattern = __webpack_require__(/*! url-pattern */ "url-pattern");
var RequestMatcherImpl = /** @class */ (function () {
    function RequestMatcherImpl() {
        this.caches = new Map();
    }
    RequestMatcherImpl.prototype.match = function (pattern, method) {
        return __awaiter(this, void 0, void 0, function () {
            var request, path, urlPathern;
            return __generator(this, function (_a) {
                request = context_1.Context.getRequest();
                path = request.path;
                if (method && request.method && method.toLowerCase() !== request.method.toLowerCase()) {
                    return [2 /*return*/, false];
                }
                pattern = pattern || '/';
                if (typeof pattern === 'string') {
                    urlPathern = this.caches.get(pattern);
                    if (!urlPathern) {
                        urlPathern = new UrlPattern(pattern);
                        this.caches.set(pattern, urlPathern);
                    }
                }
                else {
                    urlPathern = new UrlPattern(pattern);
                }
                return [2 /*return*/, urlPathern.match(path)];
            });
        });
    };
    RequestMatcherImpl = __decorate([
        core_1.Component(matcher_protocol_1.RequestMatcher)
    ], RequestMatcherImpl);
    return RequestMatcherImpl;
}());
exports.RequestMatcherImpl = RequestMatcherImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/compose.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/compose.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function compose(middlewares) {
    return function (ctx, next) {
        var index = -1;
        var dispatch = function (i) {
            if (i <= index) {
                return Promise.reject(new Error('next() called multiple times'));
            }
            index = i;
            var middleware = middlewares[i];
            if (i === middlewares.length) {
                middleware = next;
            }
            if (!middleware) {
                return Promise.resolve();
            }
            try {
                return middleware.handle(ctx, function () { return dispatch(i + 1); });
            }
            catch (err) {
                return Promise.reject(err);
            }
        };
        return dispatch(0);
    };
}
exports.compose = compose;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./middleware-provider */ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js"));
__export(__webpack_require__(/*! ./compose */ "./node_modules/@malagu/web/lib/node/middleware/compose.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/middleware/middleware-provider.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.Middleware = Symbol('Middleware');
var MiddlewareProvider = /** @class */ (function () {
    function MiddlewareProvider(middlewares) {
        this.middlewares = middlewares;
    }
    MiddlewareProvider.prototype.provide = function () {
        if (!this.prioritized) {
            this.prioritized = core_1.Prioritizeable.prioritizeAllSync(this.middlewares).map(function (c) { return c.value; });
        }
        return this.prioritized;
    };
    MiddlewareProvider = __decorate([
        core_1.Component(),
        __param(0, core_1.Autowired(exports.Middleware)), __param(0, core_1.Optional),
        __metadata("design:paramtypes", [Array])
    ], MiddlewareProvider);
    return MiddlewareProvider;
}());
exports.MiddlewareProvider = MiddlewareProvider;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/module.js":
/*!*****************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/module.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
__webpack_require__(/*! ../common */ "./node_modules/@malagu/web/lib/common/index.js");
__webpack_require__(/*! . */ "./node_modules/@malagu/web/lib/node/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/index.js":
/*!************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./session-manager */ "./node_modules/@malagu/web/lib/node/session/session-manager.js"));
__export(__webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js"));
__export(__webpack_require__(/*! ./session-store */ "./node_modules/@malagu/web/lib/node/session/session-store.js"));
__export(__webpack_require__(/*! ./session-strategy */ "./node_modules/@malagu/web/lib/node/session/session-strategy.js"));
__export(__webpack_require__(/*! ./session-middleware */ "./node_modules/@malagu/web/lib/node/session/session-middleware.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-manager.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-manager.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var SessionManagerImpl = /** @class */ (function () {
    function SessionManagerImpl() {
    }
    SessionManagerImpl.prototype.getSessionId = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cookies;
            return __generator(this, function (_a) {
                cookies = context_1.Context.getCookies();
                return [2 /*return*/, cookies.get(this.sessionIdKey)];
            });
        });
    };
    SessionManagerImpl.prototype.get = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sessionId, session, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (context_1.Context.getSession()) {
                            return [2 /*return*/, context_1.Context.getSession()];
                        }
                        return [4 /*yield*/, this.getSessionId()];
                    case 1:
                        sessionId = _b.sent();
                        if (!sessionId) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sessionStore.get(sessionId)];
                    case 2:
                        session = _b.sent();
                        _a = session;
                        if (!_a) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.sessionStrategy.valid(session)];
                    case 3:
                        _a = (_b.sent());
                        _b.label = 4;
                    case 4:
                        if (_a) {
                            return [2 /*return*/, session];
                        }
                        _b.label = 5;
                    case 5: return [2 /*return*/, this.sessionStrategy.create()];
                }
            });
        });
    };
    SessionManagerImpl.prototype.remove = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!context_1.Context.getSession()) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.sessionStore.remove(context_1.Context.getSession().id)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        context_1.Context.getCookies().set(this.sessionIdKey, '', {
                            expires: session_protocol_1.COOKIE_EXP_DATE,
                            maxAge: false,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionManagerImpl.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        session = context_1.Context.getSession();
                        if (!session) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.sessionStrategy.shouldSaveSession(session)];
                    case 1:
                        if (!_a.sent()) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.sessionStore.set(session)];
                    case 2:
                        _a.sent();
                        context_1.Context.getCookies().set(this.sessionIdKey, session.id);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session.sessionIdKey'),
        __metadata("design:type", String)
    ], SessionManagerImpl.prototype, "sessionIdKey", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStrategy", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStore),
        __metadata("design:type", Object)
    ], SessionManagerImpl.prototype, "sessionStore", void 0);
    SessionManagerImpl = __decorate([
        core_1.Component(session_protocol_1.SessionManager)
    ], SessionManagerImpl);
    return SessionManagerImpl;
}());
exports.SessionManagerImpl = SessionManagerImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-middleware.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-middleware.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var SessionMiddleware = /** @class */ (function () {
    function SessionMiddleware() {
        this.priority = session_protocol_1.SESSION_MIDDLEWARE_PRIORITY;
    }
    SessionMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _b = (_a = context_1.Context).setSession;
                        return [4 /*yield*/, this.sessionManager.get()];
                    case 1:
                        _b.apply(_a, [_c.sent()]);
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, , 4, 7]);
                        return [4 /*yield*/, next()];
                    case 3:
                        _c.sent();
                        return [3 /*break*/, 7];
                    case 4:
                        if (!this.sessionOptions.autoCommit) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.sessionManager.commit()];
                    case 5:
                        _c.sent();
                        _c.label = 6;
                    case 6: return [7 /*endfinally*/];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(session_protocol_1.SessionManager),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionManager", void 0);
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionMiddleware.prototype, "sessionOptions", void 0);
    SessionMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], SessionMiddleware);
    return SessionMiddleware;
}());
exports.SessionMiddleware = SessionMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-protocol.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-protocol.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cookies_1 = __webpack_require__(/*! ../cookies */ "./node_modules/@malagu/web/lib/node/cookies/index.js");
exports.Session = Symbol('Session');
exports.SessionStore = Symbol('SessionStore');
exports.SessionManager = Symbol('SessionManager');
exports.SessionStrategy = Symbol('SessionStrategy');
exports.COOKIE_EXP_DATE = new Date('Thu, 01 Jan 1970 00:00:00 GMT');
exports.SESSION_MIDDLEWARE_PRIORITY = cookies_1.COOKIES_MIDDLEWARE_PRIORITY - 100;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-store.js":
/*!********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-store.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var CookieSessionStore = /** @class */ (function () {
    function CookieSessionStore() {
    }
    CookieSessionStore.prototype.get = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var value;
            return __generator(this, function (_a) {
                value = context_1.Context.getCookies().get(this.sessionOptions.sessionKey, this.sessionOptions);
                if (value) {
                    return [2 /*return*/, this.sessionStrategy.create(JSON.parse(Buffer.from(value, 'base64').toString('utf8')))];
                }
                return [2 /*return*/];
            });
        });
    };
    CookieSessionStore.prototype.set = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.Context.getCookies().set(this.sessionOptions.sessionKey, Buffer.from(JSON.stringify(session.toJSON())).toString('base64'), this.sessionOptions);
                return [2 /*return*/];
            });
        });
    };
    CookieSessionStore.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                context_1.Context.getCookies().set(this.sessionOptions.sessionKey, '', {
                    expires: session_protocol_1.COOKIE_EXP_DATE,
                    maxAge: false,
                });
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionOptions", void 0);
    __decorate([
        core_1.Autowired(session_protocol_1.SessionStrategy),
        __metadata("design:type", Object)
    ], CookieSessionStore.prototype, "sessionStrategy", void 0);
    CookieSessionStore = __decorate([
        core_1.Component(session_protocol_1.SessionStore)
    ], CookieSessionStore);
    return CookieSessionStore;
}());
exports.CookieSessionStore = CookieSessionStore;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session-strategy.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session-strategy.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var session_protocol_1 = __webpack_require__(/*! ./session-protocol */ "./node_modules/@malagu/web/lib/node/session/session-protocol.js");
var session_1 = __webpack_require__(/*! ./session */ "./node_modules/@malagu/web/lib/node/session/session.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var SessionStrategyImpl = /** @class */ (function () {
    function SessionStrategyImpl() {
    }
    SessionStrategyImpl.prototype.valid = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (session.expire && session.expire < Date.now()) {
                    return [2 /*return*/, false];
                }
                return [2 /*return*/, true];
            });
        });
    };
    SessionStrategyImpl.prototype.create = function (obj) {
        return Promise.resolve(new session_1.SessionImpl(this.sessionOptions, obj));
    };
    SessionStrategyImpl.prototype.shouldSaveSession = function (session) {
        return __awaiter(this, void 0, void 0, function () {
            var expire, maxAge;
            return __generator(this, function (_a) {
                if (session.changed) {
                    return [2 /*return*/, true];
                }
                // save if opts.renew and session will expired
                if (this.sessionOptions.renew === true) {
                    expire = session.expire;
                    maxAge = session.maxAge;
                    // renew when session will expired in maxAge / 2
                    if (expire && maxAge && expire - Date.now() < maxAge / 2) {
                        return [2 /*return*/, true];
                    }
                }
                return [2 /*return*/, false];
            });
        });
    };
    __decorate([
        core_1.Value('malagu.session'),
        __metadata("design:type", Object)
    ], SessionStrategyImpl.prototype, "sessionOptions", void 0);
    SessionStrategyImpl = __decorate([
        core_1.Component(session_protocol_1.SessionStrategy)
    ], SessionStrategyImpl);
    return SessionStrategyImpl;
}());
exports.SessionStrategyImpl = SessionStrategyImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/session/session.js":
/*!**************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/session/session.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid = __webpack_require__(/*! uuid/v4 */ "uuid/v4");
var crc = __webpack_require__(/*! crc */ "crc").crc32;
var SessionImpl = /** @class */ (function () {
    function SessionImpl(sessionOptions, obj) {
        var e_1, _a;
        this.id = uuid();
        this.isNew = true;
        if (obj) {
            this.isNew = false;
            try {
                for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var key = _c.value;
                    this[key] = obj[key];
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else {
            this.expire = sessionOptions.maxAge + Date.now();
            this.maxAge = sessionOptions.maxAge;
        }
        this._preHash = this.hash();
    }
    SessionImpl.prototype.hash = function () {
        return crc(JSON.stringify(this.toJSON()));
    };
    SessionImpl.prototype.toJSON = function () {
        var e_2, _a;
        var obj = {};
        try {
            for (var _b = __values(Object.keys(this)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var key = _c.value;
                if (key !== 'isNew' && key[0] !== '_') {
                    obj[key] = this[key];
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return obj;
    };
    Object.defineProperty(SessionImpl.prototype, "changed", {
        get: function () {
            if (this._preHash !== this.hash()) {
                return true;
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    return SessionImpl;
}());
exports.SessionImpl = SessionImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__(/*! ./trace-middleware */ "./node_modules/@malagu/web/lib/node/trace/trace-middleware.js"));
__export(__webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js"));
__export(__webpack_require__(/*! ./trace-id-resolver */ "./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js"));


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-id-resolver.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = __webpack_require__(/*! uuid */ "uuid");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var trace_protocol_1 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var TraceIdResolverImpl = /** @class */ (function () {
    function TraceIdResolverImpl() {
    }
    TraceIdResolverImpl.prototype.resolve = function () {
        if (context_1.Context.getRequest() && this.traceField) {
            var traceId = context_1.Context.getRequest().headers[this.traceField];
            if (traceId) {
                return Promise.resolve(traceId);
            }
        }
        return Promise.resolve(uuid_1.v4());
    };
    __decorate([
        core_1.Value(trace_protocol_1.TRACE_ID_REQUEST_FIELD),
        __metadata("design:type", String)
    ], TraceIdResolverImpl.prototype, "traceField", void 0);
    TraceIdResolverImpl = __decorate([
        core_1.Component(trace_protocol_1.TraceIdResolver)
    ], TraceIdResolverImpl);
    return TraceIdResolverImpl;
}());
exports.TraceIdResolverImpl = TraceIdResolverImpl;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-middleware.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-middleware.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
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
};
Object.defineProperty(exports, "__esModule", { value: true });
var trace_protocol_1 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var middleware_1 = __webpack_require__(/*! ../middleware */ "./node_modules/@malagu/web/lib/node/middleware/index.js");
var context_1 = __webpack_require__(/*! ../context */ "./node_modules/@malagu/web/lib/node/context.js");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
var trace_protocol_2 = __webpack_require__(/*! ./trace-protocol */ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js");
var TraceMiddleware = /** @class */ (function () {
    function TraceMiddleware() {
        this.priority = trace_protocol_2.TRACE_MIDDLEWARE_PRIORITY;
    }
    TraceMiddleware.prototype.handle = function (ctx, next) {
        return __awaiter(this, void 0, void 0, function () {
            var method, path, traceId, now;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = ctx.request.method;
                        path = ctx.request.path;
                        return [4 /*yield*/, this.traceIdResolver.resolve()];
                    case 1:
                        traceId = _a.sent();
                        this.logger.info("starting " + method + " " + path + " with traceId[" + traceId + "]");
                        now = Date.now();
                        context_1.Context.setTraceId(traceId);
                        ctx.response.setHeader(trace_protocol_2.TRACE_ID_RESPONSE_FIELD, traceId);
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, next()];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        this.logger.info("ending " + method + " " + path + " with traceId[" + traceId + "], cost " + (Date.now() - now) + "ms");
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Autowired(trace_protocol_1.TraceIdResolver),
        __metadata("design:type", Object)
    ], TraceMiddleware.prototype, "traceIdResolver", void 0);
    __decorate([
        core_1.Autowired(core_1.Logger),
        __metadata("design:type", Object)
    ], TraceMiddleware.prototype, "logger", void 0);
    TraceMiddleware = __decorate([
        core_1.Component(middleware_1.Middleware)
    ], TraceMiddleware);
    return TraceMiddleware;
}());
exports.TraceMiddleware = TraceMiddleware;


/***/ }),

/***/ "./node_modules/@malagu/web/lib/node/trace/trace-protocol.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@malagu/web/lib/node/trace/trace-protocol.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// Be sure this middleware is always at first position
exports.TRACE_MIDDLEWARE_PRIORITY = 2200;
exports.TRACE_ID_REQUEST_FIELD = 'malagu.trace.requestField';
exports.TRACE_ID_RESPONSE_FIELD = 'malagu.trace.responseField';
exports.TraceIdResolver = Symbol('TraceIdResolver');


/***/ }),

/***/ "./src/home-controller.ts":
/*!********************************!*\
  !*** ./src/home-controller.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! @malagu/mvc/lib/node */ "./node_modules/@malagu/mvc/lib/node/index.js");
var HomeController = /** @class */ (function () {
    function HomeController() {
    }
    HomeController.prototype.home = function () {
        return 'Welcome to Malagu';
    };
    __decorate([
        node_1.Get(),
        node_1.View(node_1.TextView.VIEW_NAME),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", String)
    ], HomeController.prototype, "home", null);
    HomeController = __decorate([
        node_1.Controller()
    ], HomeController);
    return HomeController;
}());
exports.HomeController = HomeController;


/***/ }),

/***/ "./src/module.ts":
/*!***********************!*\
  !*** ./src/module.ts ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./user-controller */ "./src/user-controller.ts");
__webpack_require__(/*! ./home-controller */ "./src/home-controller.ts");
var core_1 = __webpack_require__(/*! @malagu/core */ "./node_modules/@malagu/core/lib/common/index.js");
exports.default = core_1.autoBind();


/***/ }),

/***/ "./src/user-controller.ts":
/*!********************************!*\
  !*** ./src/user-controller.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var node_1 = __webpack_require__(/*! @malagu/mvc/lib/node */ "./node_modules/@malagu/mvc/lib/node/index.js");
var users = [{ name: 'Tom', age: 20 }, { name: 'Alice', age: 23 }];
var UserController = /** @class */ (function () {
    function UserController() {
    }
    UserController.prototype.list = function () {
        return users;
    };
    UserController.prototype.get = function (name) {
        var e_1, _a;
        try {
            for (var users_1 = __values(users), users_1_1 = users_1.next(); !users_1_1.done; users_1_1 = users_1.next()) {
                var user = users_1_1.value;
                if (user.name === name) {
                    return user;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (users_1_1 && !users_1_1.done && (_a = users_1.return)) _a.call(users_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    UserController.prototype.reomve = function (name) {
        var index = users.findIndex(function (user) { return user.name === name; });
        if (index !== -1) {
            users.splice(index, 1);
        }
    };
    UserController.prototype.modify = function (user) {
        var target = users.find(function (u) { return u.name == user.name; });
        if (target) {
            target.age = user.age;
        }
    };
    UserController.prototype.create = function (user) {
        users.push(user);
    };
    __decorate([
        node_1.Get(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Array)
    ], UserController.prototype, "list", null);
    __decorate([
        node_1.Get(':name'),
        __param(0, node_1.Param('name')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Object)
    ], UserController.prototype, "get", null);
    __decorate([
        node_1.Delete(':name'),
        __param(0, node_1.Param('name')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "reomve", null);
    __decorate([
        node_1.Put(),
        __param(0, node_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "modify", null);
    __decorate([
        node_1.Post(),
        __param(0, node_1.Body()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], UserController.prototype, "create", null);
    UserController = __decorate([
        node_1.Controller('users')
    ], UserController);
    return UserController;
}());
exports.UserController = UserController;


/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/@malagu/fc-adapter/lib/node/http-application-entry.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\ProjectDemo\backend-app\node_modules\@malagu\fc-adapter\lib\node\http-application-entry.js */"./node_modules/@malagu/fc-adapter/lib/node/http-application-entry.js");


/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-validator");

/***/ }),

/***/ "cookies":
/*!**************************!*\
  !*** external "cookies" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookies");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),

/***/ "crc":
/*!**********************!*\
  !*** external "crc" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("crc");

/***/ }),

/***/ "express-http-context":
/*!***************************************!*\
  !*** external "express-http-context" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-http-context");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs-extra");

/***/ }),

/***/ "inversify":
/*!****************************!*\
  !*** external "inversify" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify");

/***/ }),

/***/ "inversify-binding-decorators":
/*!***********************************************!*\
  !*** external "inversify-binding-decorators" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("inversify-binding-decorators");

/***/ }),

/***/ "jexl":
/*!***********************!*\
  !*** external "jexl" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jexl");

/***/ }),

/***/ "loglevel":
/*!***************************!*\
  !*** external "loglevel" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("loglevel");

/***/ }),

/***/ "mustache":
/*!***************************!*\
  !*** external "mustache" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mustache");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "raw-body":
/*!***************************!*\
  !*** external "raw-body" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("raw-body");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "source-map-support":
/*!*************************************!*\
  !*** external "source-map-support" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("source-map-support");

/***/ }),

/***/ "ts-custom-error":
/*!**********************************!*\
  !*** external "ts-custom-error" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("ts-custom-error");

/***/ }),

/***/ "url-join":
/*!***************************!*\
  !*** external "url-join" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-join");

/***/ }),

/***/ "url-pattern":
/*!******************************!*\
  !*** external "url-pattern" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url-pattern");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),

/***/ "uuid/v4":
/*!**************************!*\
  !*** external "uuid/v4" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("uuid/v4");

/***/ }),

/***/ "vscode-jsonrpc":
/*!*********************************!*\
  !*** external "vscode-jsonrpc" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc");

/***/ }),

/***/ "vscode-jsonrpc/lib/events":
/*!********************************************!*\
  !*** external "vscode-jsonrpc/lib/events" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vscode-jsonrpc/lib/events");

/***/ })

/******/ });
});
//# sourceMappingURL=index.js.map