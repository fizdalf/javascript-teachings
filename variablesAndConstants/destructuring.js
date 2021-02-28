// The following syntax allows us to assign values from arrays directly

const [a, b, c] = [55, "test"];
// new variables will be created and will contain the associated values as follows:
// a -> 55         (as this is defined to be the first element in the array)
// b -> "test"     (as this is defined to be the second element in the array)
// c -> undefined  (as this is defined to be the third element in the array ...which doesn't exist!)

let [, element, element2] = ["first", "second", "third"];
// we can use both let/const to define  the new variables, but all the variables will have the same access level (all const or all let, there's no inbetween)
// We can also ignore elements just by not placing a description of the variable, in this case the first element is being ignored
// The new variables will be created and will contain the associated values as follows:
// element  -> "second"   (as this is defined to be the second element in the array...we are ignoring the first)
// element2 -> "third"    (as this is defined to be the third element in the array)

let [first, second, ...remainingElements] = [10, 20, 30, 40, 50];
// We can also use the "..." operator, called "rest operator", which allows us to assign the rest of the elements in a variable
// the rest operator must come LAST in a destructuring.
// The new variables will be created and will contain the associated values as follows:
// first                -> 10           (as this is defined to be the first element in the array)
// seconds              -> 20           (as this is defined to be the second element in the array)
// remainingElements    -> [30,40,50]   (as this is defined to be the "rest" of the elements, important to notice this is an array, not a specific element)

[first, second, ...remainingElements] = ["my", "tailor", "is", "rich"];
// We can also use array destructuring to ASSIGN values to variables as the above line shows
// The variables will contain the associated values as follows:
// first                -> "my"             (as this is asking to assign the value of the first element of the array)
// second               -> "tailor"         (as this is asking to assign the value of the second element of the array)
// remainingElements    -> ["is","rich"]    (as this is asking to assign the rest of the element of the array)
