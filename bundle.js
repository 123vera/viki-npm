'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dayjs = require('dayjs');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var dayjs__default = /*#__PURE__*/_interopDefaultLegacy(dayjs);

function clone(array) {
    return array.map(function (i) { return i + 3; });
}

var setCookie = function (key, value) { return localStorage.setItem(key, value); };
var getCookie = function (key) { return localStorage.getItem(key); };
var Cookie = { setCookie: setCookie, getCookie: getCookie };

/**
 *
 * @param time 时间戳
 * @param foramt 格式化
 * @returns
 */
function dateFormat(time, foramt) {
    return dayjs__default["default"](time).format(foramt);
}

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

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 *
 * @param url 携带参数的url
 * @returns  {key: value}
 */
function getUrlParams(url) {
    if (!url)
        return '';
    var paramsArr = url.split('?')[1].split('#')[0].split('&');
    var obj = {};
    paramsArr.map(function (i) {
        var _a;
        var _b = i.split('='), k = _b[0], v = _b[1];
        obj = __assign(__assign({}, obj), (_a = {}, _a[k] = v, _a));
    });
    return obj;
}

/**
 *
 * @param num 待处理的数字
 * @returns 千分位后的数字
 */
function numFormat(num) {
    if (!num)
        return 0;
    return num.toLocaleString();
}

/**
 *
 * @param array 待处理的数组
 * @returns  处理后 数组去重及排序
 */
function arrFormat(array) {
    var arr = [];
    if (array.length <= 0)
        return [];
    for (var i = 0; i < array.length; i++) {
        if (!arr.includes(array[i])) {
            arr.push(array[i]);
        }
    }
    return arr.sort(function (a, b) { return Number(a) - Number(b); });
}

exports.ArrFormat = arrFormat;
exports.Clone = clone;
exports.Cookie = Cookie;
exports.DateFormat = dateFormat;
exports.NumFormat = numFormat;
exports.SearchUrl = getUrlParams;
