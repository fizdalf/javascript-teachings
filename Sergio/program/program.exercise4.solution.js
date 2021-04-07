// Model a Burger Restaurant, you have to keep track of the stock of ingredients, at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough ingredients to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

function ListOfIngredients(arrayOfIngredients){
    return {
        addIngredient(name, quantity){

        }
    }
}
function Ingredient(nameOfIngredient, quantity) {
    return {
        nameOfIngredient,
        quantity,
    }
}
const stockOfIngredients = [
    Ingredient( "meat", 80),
    Ingredient("fasdf", 50),
    Ingredient( "bread", 40),
    Ingredient( "lettuce", 50),
    Ingredient( "tomato", 60),
    Ingredient( "onion", 30),
    Ingredient( "tomato pocho", 200),
    Ingredient( "chicken", 80),
]
const Burger = function (ingredients, price, id) {
    return {
        ingredients,
        price,
        id,
    }
}
const burgerRestaurant = function(stockOfIngredients, burgers, menus, extras,){

    return{
        stockOfIngredients,
        burgers,
        menus,
        extras,
        getBurgerByID: function (id) {
            if (id < 1 || id > id) {
                throw Error("Invalid ID");
            }
            return Burger(
                burgers,
                id,
            );
        },
    }
}
