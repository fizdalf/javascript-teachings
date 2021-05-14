export default function (s: string) {
    return s.split('').reduce((acc, char) => {
        acc += char;
        if (char === '#') {
            acc = acc.slice(0, -2);
        }
        return acc;
    }, '');
}
