export default function isPalindrome(string: string): boolean {
    string = string.toString();
    const array = string.split('');
    const reverse = array.slice().reverse();

    for (let i = 0, l = array.length; i < l; ++i) {
        if (array[i] !== reverse[i]) {
            return false;
        }
    }
    return true;
}
