// Constructor (your Captain Obivious)
class Player{

}
// Decide who move first - player or opponent (true if player)
Player.firstmove = function(cakes){
    // I wish to move first
    return true;
}
// Decide your next move
Player.move = function(cakes, last){
    // I'm not greedy
    return last == 1 ? 2 : 1;
}