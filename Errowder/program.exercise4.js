// Model a Burger Restaurant, you have to keep track of the stock of ingredients, at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough ingredients to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

const BurgerMenu = function (ingredients, extra, price, id) {
    return {
        ingredients,
        extra,
        price,
        id,
    }
}

const Burger = function (ingredients, price, id) {
    return {
        ingredients,
        price,
        id,
    }
}

const Menu = [
    {
        menuId1: BurgerMenu("porkMeat,lettuce,tomato", "fries, ketchup", 7, 1)
    },
    {
        menuId2: BurgerMenu("porkMeat,lettuce,tomato", "fries, ketchup, mustard", 10, 2)
    },
    {
        menuId3: BurgerMenu("chickenMeat,lettuce,tomato", "fries, ketchup, mustard,onionsRing", 15, 3)
    },
    {
        burgerId1: Burger("chickenMeat,lettuce, tomato", 2, 1)
    },
    {
        burgerId2: Burger("porkMeat,lettuce, tomato", 2, 2)
    },
    {
        burgerId3: Burger("porkMeat,chickenMeat,lettuce, tomato", 5, 3)
    }
]

const BurgerRestaurant = function (restaurantName, id) {
    return {
        restaurantName,
        id,
        getBurgerMenu: function (menuId) {
            if (menuId < 1 || menuId > id) {
                throw Error("Invalid ID");
            }
            return BurgerMenu(
                restaurantName,
                menuId,
            );
        },
        getBurger: function (burgerId) {
            if (burgerId < 1 || burgerId > id) {
                throw Error("Invalid ID");
            }
            return Burger(
                restaurantName,
                burgerId,
            );
        },
    }
}

// const Extra = ["fries", "ketchup", "mustard", "onionsRing"]
// const Ingredients = ["porkMeat", "chickenMeat", "lettuce", "tomato"]

const king = BurgerRestaurant("king", 3)

const kidMenu = Menu.menuId1
const normalMenu = Menu.menuId2
const familyMenu = Menu.menuId3
const chickenBurger = Menu.burgerId1
const porkBurger = Menu.burgerId2
const mixBurger = Menu.burgerId3
