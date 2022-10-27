"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = void 0;
var codes = [
    [48, 57],
    [65, 90],
    [97, 122] // a - z
];
var randomRange = function (min, max) { return Math.floor(Math.random() * (max - min) + min); };
var generate = function (options) {
    var _a = options !== null && options !== void 0 ? options : {}, numberOnly = _a.numberOnly, _b = _a.length, length = _b === void 0 ? 3 : _b;
    var charCodes = [];
    if (numberOnly)
        charCodes = Array.from({ length: length }, function () { return randomRange(codes[0][0], codes[0][1]); });
    else {
        var chars_1 = codes.reduce(function (arr, _a) {
            var min = _a[0], max = _a[1];
            return arr.concat(Array.from({ length: (max - min) + 1 }, function (_, k) { return k + min; }));
        }, []).sort(function () { return Math.random() - .5; });
        charCodes = Array.from({ length: length }, function () { return chars_1[randomRange(0, chars_1.length)]; });
    }
    return String.fromCharCode.apply(String, charCodes);
};
exports.generate = generate;
