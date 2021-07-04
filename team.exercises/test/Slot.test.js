"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slot_1 = require("../src/Slot");
describe('Slot', function () {
    describe('mark and unmark flag', function () {
        it('should mark a slot with the tagstate flag', function () {
            var slot = new Slot_1.Slot(false, 0);
            slot.markWithFlag();
            expect(slot.getContent()).toStrictEqual("f");
        });
        it('should unmark a slot with the tagstate none', function () {
            var slot = new Slot_1.Slot(false, 0);
            slot.unmarkFlag();
            expect(slot.getContent()).toStrictEqual("");
        });
    });
});
