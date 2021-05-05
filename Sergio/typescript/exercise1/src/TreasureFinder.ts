export class TreasureFinder {

    constructor(private map: string[][]) {

    }

    findTreasurePosition() {
        let row = Math.floor(this.map.length / 2);
        let column = Math.floor(this.map[row].length / 2);
        let currentLocation = this.map[row][column];
        if (currentLocation !== "X") {
            const __ret = this.movePositions(currentLocation, row, column);
            row = __ret.row;
            column = __ret.column;
            if (row < 0 || column < 0 || row > this.map.length || column > this.map.length) {
                return null
            }
        }
        return [row, column]
    }

    private movePositions(movement: string, row: number, column: number) {
        const movesNumber = parseInt(movement.substr(1))
        const directionModifiers: { [key: string]: [number, number] } = {
            "S": [movesNumber, 0],
            "N": [-movesNumber, 0],
            "E": [0, movesNumber],
            "W": [0, -movesNumber]
        }

        const direction = movement[0]
        const modifier = directionModifiers[direction]

        return {row: row + modifier[0], column: column + modifier[1]};
    }

}

// [
//     [ (0,0) , (0,1) , (0,2) ],
//     [ (1,0) , (1,1) , (1,2) ],
//     [ (2,0) , (2,1) , (2,2) ]
// ]

// [
//     [ (0,0) , (0,1) , (0,2) , (0,3) , (0,4)],
//     [ (1,0) , (1,1) , (1,2) , (1,3) , (1,4)],
//     [ (2,0) , (2,1) , (2,2) , (2,3) , (2,4)],
//     [ (3,0) , (3,1) , (3,2) , (3,3) , (3,4)],
//     [ (4,0) , (4,1) , (4,2) , (4,3) , (4,4)]
// ]