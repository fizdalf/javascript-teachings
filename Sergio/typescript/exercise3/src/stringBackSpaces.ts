export function cleanString(string: string) {
    let toReturn = '';
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== '#') {
            toReturn += string[i];
        } else {
            toReturn = toReturn.slice(0, -1);
        }
    }
    return toReturn;
}

