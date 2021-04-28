// Create a function that receives an array of strings and returns an array of the strings reversed (the strings are in the same order, each string is reversed)
// Example: reverseStringArray(["something", "computer", "remainder", "monitor"]) -> ["gnihtemos", "retupmoc", "redniamer", "rotinom"]


    function reverseStringArray(arrayOfStrings) {
        let lastIndex = arrayOfStrings.length - 1;
        let array = []
        let index = 0;
        while (index <= lastIndex) {
            array.push(reverseString(arrayOfStrings[index]))
            index++
        }
        return array;
    }


    function reverseString(string) {
        return string.split('').reverse().join('');
    }
