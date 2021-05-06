class Position {
    constructor(public rowPosition: number, public columnPosition: number) {
    }

    toArray() {
        return [this.rowPosition, this.columnPosition];
    }
}

export class TreasureFinder {


    constructor(private map: string[][]) {

    }

    findTreasurePosition() {
        const rows = this.map.length;
        const columns = this.map[0].length;
        let currentPosition = new Position(this.getCenter(rows), this.getCenter(columns));
        let element = this.getMapElement(currentPosition);
        const visitedPositionsImproved: Position[] = [];
        while (element !== "X") {
            visitedPositionsImproved.push(currentPosition);
            let direction = element[0];
            let movement = parseInt(element[1], 10);
            currentPosition = this.getNextPosition(currentPosition, direction, movement)
            if (this.isPositionOutsideTheMap(currentPosition, rows, columns)) {
                return null;
            }
            element = this.getMapElement(currentPosition);
            if (this.isPositionAlreadyVisitedImproved(visitedPositionsImproved, currentPosition)) {
                return null;
            }
        }
        return currentPosition.toArray();
    }

    private getMapElement(currentPosition: Position) {
        return this.map[currentPosition.rowPosition][currentPosition.columnPosition];
    }

    private isPositionAlreadyVisitedImproved(visitedPositions: Position[], currentPosition: Position) {
        return visitedPositions.some((position) => {
            return currentPosition.rowPosition === position.rowPosition && currentPosition.columnPosition === position.columnPosition;
        });
    }

    private isPositionOutsideTheMap(currentPosition: Position, rows: number, columns: number) {
        return currentPosition.rowPosition < 0 || currentPosition.rowPosition >= rows || currentPosition.columnPosition < 0 || currentPosition.columnPosition >= columns;
    }

    private getCenter(value: number) {
        return Math.floor(value / 2);
    }

    private getNextPosition(currentPosition: Position, direction: string, movement: number) {
        const directionModifiers: { [key: string]: [number, number] } = {
            "E": [0, movement],
            "W": [0, -movement],
            "S": [movement, 0],
            "N": [-movement, 0]
        }
        const modifier = directionModifiers[direction];
        return new Position(currentPosition.rowPosition + modifier[0], currentPosition.columnPosition + modifier[1]);
    }
}

