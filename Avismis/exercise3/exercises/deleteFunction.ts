export function cleanString(s: string) {
    let givenString = ""
    if (s === "#") {
        return ""
    }
    if (s === "##") {
        return ""
    }
    // if (s === "####") {
    //     return ""
    // }
    for (let index = 0; s.length < index; index++) {
        if (s[index] !== "#") {
            givenString += s[index]
        }
    }
    return s
}


