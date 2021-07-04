"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var MinePositions_1 = require("../src/MinePositions");
describe('MinePositionCollection', function () {
    it.each(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n\n                Position                      | Expected\n          ", " | ", " \n          ", " | ", "  \n          ", " | ", "      \n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n\n    "], ["\n\n                Position                      | Expected\n          ", " | ", " \n          ", " | ", "  \n          ", " | ", "      \n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n          ", " | ", "\n\n    "])), new MinePositions_1.MinePosition(1, 0), 1, new MinePositions_1.MinePosition(0, 1), 1, new MinePositions_1.MinePosition(0, 2), 1, new MinePositions_1.MinePosition(2, 0), 1, new MinePositions_1.MinePosition(1, 2), 1, new MinePositions_1.MinePosition(2, 1), 1, new MinePositions_1.MinePosition(0, 0), 1, new MinePositions_1.MinePosition(2, 2), 1)('should return 1 if has 1 mine nearby', function (_a) {
        var Position = _a.Position, Expected = _a.Expected;
        var minesPositions = new MinePositions_1.MinePositionCollection();
        minesPositions.addPosition(Position);
        expect(minesPositions.nearbyMines(1, 1)).toStrictEqual(Expected);
    });
    it.each(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n\n                Positions                                               | Expected\n        ", "                                             | ", "\n        ", "                                     | ", "\n        ", "                             | ", "\n        ", "                     | ", "\n        ", "               | ", "\n        ", "         | ", "\n        ", "   | ", "\n\n    "], ["\n\n                Positions                                               | Expected\n        ", "                                             | ", "\n        ", "                                     | ", "\n        ", "                             | ", "\n        ", "                     | ", "\n        ", "               | ", "\n        ", "         | ", "\n        ", "   | ", "\n\n    "])), [[1, 0], [2, 0]], 2, [[1, 0], [2, 0], [0, 1]], 3, [[1, 0], [2, 0], [0, 1], [0, 2]], 4, [[1, 0], [2, 0], [0, 1], [0, 2], [1, 2]], 5, [[1, 0], [2, 0], [0, 1], [0, 2], [1, 2], [2, 1]], 6, [[1, 0], [2, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]], 7, [[1, 0], [2, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2], [0, 0]], 8)('should return the number of mines around', function (_a) {
        var Positions = _a.Positions, Expected = _a.Expected;
        var minesPositions = new MinePositions_1.MinePositionCollection();
        Positions.forEach(function (pos) {
            minesPositions.addPosition(new MinePositions_1.MinePosition(pos[1], pos[0]));
        });
        expect(minesPositions.nearbyMines(1, 1)).toStrictEqual(Expected);
    });
});
var templateObject_1, templateObject_2;
