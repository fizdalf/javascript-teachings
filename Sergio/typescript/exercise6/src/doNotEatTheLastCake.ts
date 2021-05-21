export class Player {
    firstmove(cakes: number) {
        return cakes > 2
    }

    move(cakes: number, last: number) {
        if (cakes % 4 < 2) {
            return 3
        }
        return 1
    }
}