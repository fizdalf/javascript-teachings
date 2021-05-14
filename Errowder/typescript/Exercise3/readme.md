Text printing like Portal 2 end credits
Now you have finished this brilliant game and want to create some similar that you saw after.

Task:
Create a function, that takes a song text and then return symbols step by step out like it computer console printing. You have song as an array:
```javascript
//lyrics.length >= 0 && lyrics[any].length >= 0
const lyrics = [
  [
    'Well here we are again',
    ...
    'Ive been shockingly nice'
  ],
  [
    'You want your freedom?',
    ...
    'Thats what Im counting on'
  ]
]
```
You need print it symbol by symbol into current paragraph array of strings(outer array - it's resulting array), each emerging paragraph part added into resulting array:
```javascript
[['W_']] //1 step
[['We_']] //2 step
[['Wel_']] //3 step
```
When string end, you need keep it and start create new string into this paragraph:
```javascript

[['Well here we are again', 'I_']] //1 step
[['Well here we are again', 'It_']] //2 step
[['Well here we are again', 'Its_']] //3 step
```
Attention, after any print you need show "_" symbol(exepted full strings). When paragraph end, you start new paragraph:
```javascript

//you can mind about it like new print page
[
  [ 'Well here we are again',
    'Its always such a pleasure',
    'Remember when you tried',
    'To kill me twice?',
    'Oh how we laughed and laughed',
    'Except I wasnt laughing',
    'Under the circumstances',
    'Ive been shockingly nice_' ], //1 step
  [ 'Y_' ], //2 step
  [ 'Yo_' ], //3 step
  [ 'You_' ] //4 step etc.
]
```
Test example:
```javascript
const result = lyricsPrint(['Hey','you'],['Good','luck']);
console.log(result);
// [
//   [ 'H_' ],
//   [ 'He_' ],
//   [ 'Hey_' ],
//   [ 'Hey', 'y_' ],
//   [ 'Hey', 'yo_' ],
//   [ 'Hey', 'you_' ],
//   [ 'G_' ],
//   [ 'Go_' ],
//   [ 'Goo_' ],
//   [ 'Good_' ],
//   [ 'Good', 'l_' ],
//   [ 'Good', 'lu_' ],
//   [ 'Good', 'luc_' ],
//   [ 'Good', 'luck_' ]
// ]
```

Make sure you do it TDD style, create your own file with tests!!
Inspired by https://www.youtube.com/watch?v=dVVZaZ8yO6o
