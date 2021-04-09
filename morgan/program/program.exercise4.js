// Model a Burger Restaurant, you have to keep track of the stock of ingredients,
// at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough
// ingredients to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

const StockOfIngredients = {
    bread: "bread",
    meat: "meat",
    tomato: "tomato",
    lettuce: "lettuce",
    cheese: "cheese",
    bacon: "bacon",
    chicken: "chicken",

}
let array = []
array.push(StockOfIngredients)

let burgerRecipe1 = function (burger) {
 const price = 5
    if (burger === "chicken") {
        return "chickenBurger" + " is " + price + "€"

    } else {
        return "this is a chicken recipe!!"
    }
}
let burgerRecipe2 = function (burger) {
    const price = 6
    if (burger === "meat") {
        return "meatBurger" + "is" + " " + price + "€"
    } else {
        return "this is a meat recipe!!"
    }
}
let setOfExtra = function (extraIngredient) {
    const price = 1
    if(extraIngredient === "cheese" || "bacon"){
        return "add extra"
    }

}

let menu = function (menu, price){

}
