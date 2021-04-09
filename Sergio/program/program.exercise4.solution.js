// Model a Burger Restaurant, you have to keep track of the stock of INGREDIENTS, at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough INGREDIENTS to fill
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
const burgerRestaurant = function (ingredients, numberOfBurgers, menus, extras) {

    return {
        ingredients,
        numberOfBurgers,
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
        getBurgerByID: function (burgerId) {
            let price = 2
            if (burgerId < 1 || burgerId > id) {
                throw Error("Invalid ID");
            }
            if (ingredients > stockOfIngredients) {
                throw Error("There are not enough INGREDIENTS")
            }
            let precioPorExtraDeCarne = 0;
            if (numberOfBurgers >= 2) {
                precioPorExtraDeCarne = numberOfBurgers * price;
            }

            return Burger(
                ingredients,
                price + precioPorExtraDeCarne,
                id,
            );
        },
        getExtras() {
            let price = 0
            if (extras !== "ketchup" && extras !== "fries" && extras !== "Drink") {
                throw Error("We have not that extra")
            }
            price = 1


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
