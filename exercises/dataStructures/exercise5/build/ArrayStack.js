"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayStack = void 0;
var ArrayStack = /** @class */ (function () {
    function ArrayStack() {
        this._array = [];
    }
    ArrayStack.prototype.push = function (element) {
        this._array.push(element);
    };
    ArrayStack.prototype.pop = function () {
        return this._array.pop();
    };
    return ArrayStack;
}());
exports.ArrayStack = ArrayStack;
