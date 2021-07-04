"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Slot = void 0;
var TagStates;
(function (TagStates) {
    TagStates["WRONGFLAG"] = "WRONGFLAG";
    TagStates["FLAG"] = "FLAG";
    TagStates["NONE"] = "NONE";
})(TagStates || (TagStates = {}));
var Slot = /** @class */ (function () {
    function Slot(hasMine, minesAround) {
        if (minesAround === void 0) { minesAround = 0; }
        this.revealed = false;
        this.tagState = TagStates.NONE;
        this.hasMine = hasMine;
        this.value = minesAround;
    }
    Slot.prototype.isRevealed = function () {
        return this.revealed;
    };
    ;
    Slot.prototype.isMine = function () {
        return this.hasMine;
    };
    ;
    Slot.prototype.getContent = function () {
        if (!this.isRevealed()) {
            if (this.isFlag()) {
                return ' f ';
            }
            return '   ';
        }
        if (this.tagState === TagStates.WRONGFLAG) {
            return ' # ';
        }
        if (this.hasMine) {
            return " * ";
        }
        return ' ' + this.value + ' ';
    };
    Slot.prototype.isFlag = function () {
        return this.tagState === TagStates.FLAG;
    };
    ;
    Slot.prototype.reveal = function () {
        this.revealed = true;
        if (this.isFlag() && !this.hasMine) {
            this.tagState = TagStates.WRONGFLAG;
            return this.value;
        }
        this.tagState = TagStates.NONE;
        return this.value;
    };
    Slot.prototype.markWithFlag = function () {
        if (!this.isRevealed()) {
            this.tagState = TagStates.FLAG;
        }
    };
    Slot.prototype.unmarkFlag = function () {
        if (!this.isRevealed()) {
            this.tagState = TagStates.NONE;
        }
    };
    return Slot;
}());
exports.Slot = Slot;
