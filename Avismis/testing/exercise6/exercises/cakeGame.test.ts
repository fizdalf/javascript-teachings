describe("Tests", () => {
    it("test", () => {
// Example function, real one has much better AI ...
        function Game(n, debug){
            function sample(arr){
                return arr[Math.floor(arr.length*Math.random())];
            }
            function plural(x){
                if(x == 1) return x + " cake";
                else return x + " cakes";
            }
            var cakes = n|0;
            if(cakes <= 0) throw new RangeError("At least one cake required");
            var player = new Player(cakes);
            var first = player.firstmove(cakes);
            var last = 0;
            if(debug) console.log(plural(cakes) + " on the table. You decided to move " + (first ? "first": "last"));
            // now, let's game begin
            for(;;){
                // my move
                if(!first){
                    var allow = [];
                    for(var i = 1; i <= 3; i++)
                        if(cakes >= i && i !== last)
                            allow.push(i);
                    if(!allow.length) throw "Game over: stalemate";
                    last = sample(allow);
                    cakes -= last;
                    if(cakes == 0){
                        if(debug) console.log("Yum! I ate the last cake, you win!");
                        return true;
                    }
                    if(debug) console.log("I ate "+plural(last)+", "+plural(cakes)+" still left");
                } else first = false;
                // your move
                if (cakes == 1 && last == 1){
                    if(debug) console.log("I lead you to stalemate, so you are winner");
                    return true;
                }
                var move = player.move(cakes, last);
                if (move > 4) throw "Error: You are so greedy! Don't try to eat more than 3 cakes.";
                if ([1,2,3].indexOf(move) === -1) throw "Error: Illegal move (must be 1, 2 or 3, type Number)";
                if (move == last) throw "Error: You cannot eat the same quantity of cakes as you opponent on previous move";
                if (move > cakes) throw "Error: Don't try to eat more cakes that left on table";
                if (move == cakes) throw "Game over: You ate the last cake!";
                cakes -= move;
                last = move;
                if(debug) console.log("You ate "+plural(move)+", "+plural(cakes)+" still left");
            }
        }

        Test.expect(Game(5, true));
        Test.expect(Game(7, true));
        Test.expect(Game(12, true));
        Test.expect(Game(23, true));
    });
});
