// Model a Burger Restaurant, you have to keep track of the stock of ingredients, at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough ingredients to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

function ListOfIngredients(arrayOfIngredients) {
    return {
        addIngredient(name, quantity) {

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
    Ingredient("meat", 80),
    Ingredient("bread", 40),
    Ingredient("lettuce", 50),
    Ingredient("tomato", 60),
    Ingredient("onion", 30),
    Ingredient("tomato pocho", 200),
    Ingredient("chicken", 80),
]
const Burger = function (ingredients, price, id) {
    return {
        ingredients,
        price,
        id,
    }
}
const Extras = function (nameOfExtra, price, id) {
    return {
        nameOfExtra,
        price,
        id
    }
}
const burgerRestaurant = function (ingredients, numberOfBurgers, menus, extras, id) {

    return {
        ingredients,
        numberOfBurgers,
        id,
        getMenu: function (idMenu) {
            if (idMenu < 1 || idMenu > id) {
                throw Error("Invalid ID");
            }
            return {
                menus,
                idMenu,
                Burger,

            }
        },
        getBurgerByID: function () {
            let price = 2
            if (id < 1 || id > id) {
                throw Error("Invalid ID");
            }
            if (ingredients > stockOfIngredients) {
                throw Error("There are not enough ingredients")
            }
            if (numberOfBurgers === 2) {
                price += price
                if (numberOfBurgers === 3) {
                    price += price
                    if (numberOfBurgers === 4) {
                        price += price
                    }
                }
            }

            return Burger(
                ingredients,
                price,
                id,
            );
        },
        getExtras() {
            let price = 0
            if (extras === "ketchup" || extras === "fries" || extras === "Drink") {
                price = 1
            } else if (extras !== "ketchup" || extras !== "fries" || extras !== "Drink") {
                throw Error("We have not that extra")
            }

            return {
                Burger() {
                    return {
                        ingredients,
                        price,
                        id,
                    }
                },
                Extras() {
                    return {
                        ingredients,
                        price,
                        id,
                    }
                },
            };
        },
    }
}
console.log(burgerRestaurant(5, 2, 4, "fries", 2983).getBurgerByID())
console.log(burgerRestaurant(5, 4, 4, "ketchup", 2983).getExtras().Extras())