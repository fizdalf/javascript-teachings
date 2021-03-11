// Create a function composeFunctions(value, a,b) which receives a value and two functions as arguments and returns the result of calling a on the return of calling b with the value
// Example: composeFunctions(4,(number) => number * 2, (number) => number + 2) -> 12
// Example: composeFunctions("test", string => "Prefix "+ string, string => string + " Postfix") -> "Prefix test Postfix"

function composeFunctions(value, a, b) {
    const resultOfCallingB = b(value);
    return a(resultOfCallingB);
}

