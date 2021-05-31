function isAVowel(char: string) {
    return ["a", "e", "i", "o", "u"].indexOf(char) > -1;
}

function getLongestSubstringContiguousVowelsLength(s: string) {
    const arrayOfCharacters = Array.from(s);
    let longestSubstring = '';
    let maxSubstring = 0;
    arrayOfCharacters.forEach(char => {
        if (isAVowel(char)) {
            longestSubstring += char;
        } else {
            if (longestSubstring.length > maxSubstring) {
                maxSubstring = longestSubstring.length;// 4
            }
            longestSubstring = '';
        }
    })
    if (longestSubstring.length > maxSubstring) {
        maxSubstring = longestSubstring.length;// 4
    }
    return maxSubstring;
}

export default function (strings: string[]) {
    return strings.sort((a, b) => {
        const aSubstring = getLongestSubstringContiguousVowelsLength(a);
        const bSubstring = getLongestSubstringContiguousVowelsLength(b);
        return bSubstring - aSubstring;
    });
}
