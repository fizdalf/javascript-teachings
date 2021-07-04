"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PredeterminedMinesPositions = void 0;
var MinePositions_1 = require("./MinePositions");
var PredeterminedMinesPositions = /** @class */ (function () {
    function PredeterminedMinesPositions(positions) {
        var _this = this;
        this.minePositions = new MinePositions_1.MinePositionCollection();
        positions.forEach(function (x) { return _this.minePositions.addPosition(x); });
    }
    PredeterminedMinesPositions.prototype.getMinePositions = function (minesCount, gridSize) {
        return this.minePositions;
    };
    return PredeterminedMinesPositions;
}());
exports.PredeterminedMinesPositions = PredeterminedMinesPositions;
// '0,0' => MinePosition { column: 0, row: 0 },
// '4,1' => MinePosition { column: 1, row: 4 },
// '5,4' => MinePosition { column: 4, row: 5 },
// '2,3' => MinePosition { column: 3, row: 2 },
// '6,0' => MinePosition { column: 0, row: 6 },
// '2,7' => MinePosition { column: 7, row: 2 },
// '2,0' => MinePosition { column: 0, row: 2 },
// '5,0' => MinePosition { column: 0, row: 5 }
