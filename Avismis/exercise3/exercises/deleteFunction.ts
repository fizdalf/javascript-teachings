export function cleanString(s: string) {
    let toReturn = "";
    for (let index = 0; s.length > index; index++) {
        if (s[index] !== "#") {
            toReturn += s[index]
        } else {
            toReturn = toReturn.slice(0, -1)
        }
    }
    return toReturn;

}
