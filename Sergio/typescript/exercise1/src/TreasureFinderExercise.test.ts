import {TreasureFinder} from "./TreasureFinderBest";


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

const twoStepsSolvable3x3Map = [
    ["E1", "E1", "S1",],
    ["N1", "S1", "S1",],
    ["X", "W1", "W1",],
]

const xInTheMiddle3x3Map = [
    ["W1", "S1", "S1"],
    ["N1", "X", "S1"],
    ["N1", "E1", "E1"]
]
const xInTheMiddle5x5Map = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "N1", "X", "S2", "S2"],
    ["N1", "N1", "S2", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move1PositionSouthMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "N1", "S1", "S2", "S2"],
    ["N1", "N1", "X", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move2PositionsSouthMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "N1", "S2", "S2", "S2"],
    ["N1", "N1", "S1", "E1", "S1"],
    ["N2", "N3", "X", "W2", "W1"]
]
const move1PositionNorthMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "X", "W1", "W1"],
    ["N2", "N1", "N1", "S2", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move2PositionsNorthMap = [
    ["E1", "E1", "X", "S1", "S4"],
    ["N1", "E1", "N1", "W1", "W1"],
    ["N2", "N1", "N2", "S2", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move1PositionEastMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "N1", "E1", "X", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move2PositionsEastMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "N1", "E2", "E1", "X"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move1PositionWestMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["N2", "X", "W1", "W1", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const move2PositionsWestMap = [
    ["E1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "W1"],
    ["X", "S1", "W2", "W1", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
]
const getOutOfTheMap = [
    ["W1", "E1", "S2", "S1", "S4"],
    ["N1", "E1", "S1", "W1", "E1"],
    ["X", "S3", "W5", "W1", "S2"],
    ["N1", "N1", "N1", "E1", "S1"],
    ["N2", "N3", "W1", "W2", "W1"]
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
            ${solvable3x3Map}  | ${[2, 0]}
        `(
            'findTreasurePosition should return a tuple of the treasure\'s position given a valid map ',
            ({map, result}) => {
                const treasureFinder = new TreasureFinder(map);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual(result);
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

        // [
        //  ["X"]
        // ]
        // [
        //  ["S1", "S2", "S3"],
        //  ["S1", "X" , "S3"],
        //  ["S1", "S2", "S3"],
        // ]

        test('findTreasurePosition should return the tuple of the treasure\'s position if is in the default position (the middle of the map)',
            () => {
                const treasureFinder = new TreasureFinder(xInTheMiddle3x3Map);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([1, 1]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if is in the default position (the middle of the map)',
            () => {
                const treasureFinder = new TreasureFinder(xInTheMiddle5x5Map);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([2, 2]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 1 distance position of the middle (South)',
            () => {
                const treasureFinder = new TreasureFinder(move1PositionSouthMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([3, 2]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 1 distance position of the middle (North)',
            () => {
                const treasureFinder = new TreasureFinder(move1PositionNorthMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([1, 2]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 1 distance position of the middle (East)',
            () => {
                const treasureFinder = new TreasureFinder(move1PositionEastMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([2, 3]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 1 distance position of the middle (West)',
            () => {
                const treasureFinder = new TreasureFinder(move1PositionWestMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([2, 1]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 2 distance position of the middle (South)',
            () => {
                const treasureFinder = new TreasureFinder(move2PositionsSouthMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([4, 2]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 2 distance position of the middle (North)',
            () => {
                const treasureFinder = new TreasureFinder(move2PositionsNorthMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([0, 2]);
            }
        )
        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 2 distance position of the middle (East)',
            () => {
                const treasureFinder = new TreasureFinder(move2PositionsEastMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([2, 4]);
            }
        )

        test('findTreasurePosition should return the tuple of the treasure\'s position if it is in 2 distance position of the middle (West)',
            () => {
                const treasureFinder = new TreasureFinder(move2PositionsWestMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual([2, 0]);
            }
        )

        test('findTreasurePosition should return null if the movesNumber makes me go off the map',
            () => {
                const treasureFinder = new TreasureFinder(getOutOfTheMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual(null);
            }
        )


        const twoStepNW3x3Map = [
            ["X", "W1", "S2"],
            ["S2", "N1", "S2"],
            ["S2", "S2", "S2"],
        ]
        const twoStepNE3x3Map = [
            ["S2", "E1", "X"],
            ["S2", "N1", "S2"],
            ["S2", "S2", "S2"],
        ]
        const twoStepSW3x3Map = [
            ["S2", "S2", "S2"],
            ["S2", "S1", "S2"],
            ["X", "W1", "S2"],
        ]
        const twoStepSE3x3Map = [
            ["X", "W1", "S2"],
            ["S2", "S1", "S2"],
            ["S2", "E1", "X"],
        ];

        const twoStepWS3x3Map = [
            ["S2", "E1", "X"],
            ["S1", "W1", "S2"],
            ["X", "S2", "S2"],
        ];

        const twoStepWN3x3Map = [
            ["X", "S2", "S2"],
            ["N1", "W1", "S2"],
            ["S2", "S2", "S2"],
        ];

        const twoStepES3x3Map = [
            ["S2", "E1", "E2"],
            ["S1", "E1", "S1"],
            ["X", "S2", "X"],
        ];

        const twoStepEN3x3Map = [
            ["S2", "S2", "X"],
            ["S2", "E1", "N1"],
            ["S2", "S2", "S2"],
        ];

        it.each`
                map            |      result
            ${twoStepNW3x3Map}  | ${[0, 0]}
            ${twoStepNE3x3Map}  | ${[0, 2]}
            ${twoStepSW3x3Map}  | ${[2, 0]}
            ${twoStepSE3x3Map}  | ${[2, 2]}
            ${twoStepWS3x3Map}  | ${[2, 0]}
            ${twoStepWN3x3Map}  | ${[0, 0]}
            ${twoStepES3x3Map}  | ${[2, 2]}
            ${twoStepEN3x3Map}  | ${[0, 2]}
        `('should return the position of the treasure after two movements following the directions',
            ({map, result}) => {
                const treasureFinder = new TreasureFinder(map);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual(result);
            }
        )

        const smallLoopingMap = [
            ["S2", "S1", "X"],
            ["S2", "N1", "N1"],
            ["S2", "S2", "S2"],
        ]
        test('findTreasurePosition should return null if we enter in a loop',
            () => {
                const treasureFinder = new TreasureFinder(smallLoopingMap);
                expect(treasureFinder.findTreasurePosition()).toStrictEqual(null);
            }, 500
        )
    })
})

