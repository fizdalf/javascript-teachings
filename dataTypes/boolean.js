// BOOLEAN
// console.log(true);
// console.log(false);

// OR
// true  || true  = true
// true  || false = true
// false || true  = true
// false || false = false
// AND
// true  && true   -> true
// true  && false  -> false
// false && true   -> false
// false && false  -> false
// console.log(false || (true && false && true) || true);
// NOT
// !true  -> false
// !false -> true


console.log(Boolean(""), "");
console.log(Boolean("a"), "a");
console.log(Boolean(0), 0);
console.log(Boolean(1), 1);
console.log(Boolean(-1), -1);
console.log(Boolean(undefined), undefined);
console.log(Boolean([]), []);
console.log(Boolean([1]), [1]);
console.log(Boolean(NaN)); // NAN ES FALSO


console.log(false || "");
console.log(false || "a");
console.log(false || 0);
console.log(false || 1);
console.log(false || -1);
console.log(false || undefined);
console.log(false || []);
console.log(false || [1]);

