Copy the folder to your own folder, run 
```
npm install
```
There is a test that will help you confirm you've finished the exercise correctly. You are encouraged to have your 
own tests though.

To run the tests continuously (tests will run every time you save)
```
npx jest --watch
```
Make sure you commit your changes as soon as you arrive to a stable position (some test is green for example)

You find a treasure map that record the location of the hidden treasure:

```javascript
[
    ["X", "W3", "E2", "S3", "S4"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N2", "S1", "N3"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "W4"]
]
```

"X" is the place where the treasure is likely to be buried. But there are more than one "X", Which is the right place?
We need to know the correct way to read the map:

We always start from the center of the map(You can assume that the width and height of the map are odd). N,S,E,W means
North, South, East and West. Like most maps:

```
      North
        |
West  --+--  East
        |
      South
```

The number behind the letters N,S,W,E is how many step we should move. In the map above, the center of map is "N2", so we
need to move 2 steps North, and then we have got a code "E2", so we move 2 steps to the East, and so on..

"N2"-->"E2"-->"S4"-->"W4"-->"X"
Ok, after some moves, we got the "X", we need to return the array index of this "X"

``` javascript
[4,0]
```

Sometimes, the treasure map is fake. It does not record the correct information of the treasure, and we should return
null/None. For example:

```javascript
[
    ["X", "W3", "E2", "S3", "S4"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N4", "S1", "N3"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "W4"]
]
```

The code at center("N4") is invalid. Or like this:

```javascript
[
    ["X", "W3", "E2", "S3", "S2"],
    ["S1", "E1", "N1", "S2", "W1"],
    ["S2", "E1", "N2", "S1", "W2"],
    ["N1", "X", "S2", "E1", "W4"],
    ["X", "E3", "X", "N2", "E4"]
]
```

Path "N2"-->"E2"-->"S2"-->"W2" into an infinite loop Task Complete function findX that accepts an argument m. Returns
the result in accordance with the rules above.