import {TreasureFinder} from "./TreasureFinder";

const solvable5x5Map = [
    ["X", "W3", "E2", "S3", "S4"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N2", "S1", "N3"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "W4"]
];
const solvable3x3Map = [
    ["E1", "E1", "S1",],
    ["N1", "W1", "S1",],
    ["X", "W1", "W1",],
]


const wrongDirectionsMap = [
    ["X", "W3", "E2", "S3", "S4"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N4", "S1", "N3"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "W4"]
];
const loopingMap = [
    ["X", "W3", "E2", "S3", "S2"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N2", "S1", "W2"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "E4"]
];
describe('TreasureFinder Class', function () {
    describe('findTreasurePosition', function () {

        it.each`
                map             |      result
            ${solvable5x5Map}  | ${[4, 0]}
            ${solvable3x3Map}  | ${[3, 0]}
        `(
            'findTreasurePosition should return a tuple of the treasure\'s position given a valid map ',
            ({map, result}) => {
                const treasureFinder = new TreasureFinder(map);
                expect(treasureFinder.findTreasurePosition()).toBe(result);
            }
        )

        test('findTreasurePosition should return null when there is a wrong direction indicated in the map ', () => {
            const treasureFinder = new TreasureFinder(wrongDirectionsMap);
            expect(treasureFinder.findTreasurePosition()).toBe(null);
        })

        test('findTreasurePosition should return null when there is an infinite loop following the directions indicated in the map ', () => {
            const treasureFinder = new TreasureFinder(loopingMap);
            expect(treasureFinder.findTreasurePosition()).toBe(null);
        })
    })
})

