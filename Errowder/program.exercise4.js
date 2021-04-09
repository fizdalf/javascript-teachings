// Model a Burger Restaurant, you have to keep track of the stock of INGREDIENTS, at least 2 burger recipes, each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough INGREDIENTS to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

function burger(name, ingredients, burgerPrice, burgerId) {
    return {
        name,
        ingredients,
        burgerPrice,
        burgerId,
    }
}

function burgerMenu(name, ingredients, extra, burgerPrice, burgerId) {
    return {
        name,
        ingredients,
        extra,
        burgerPrice,
        burgerId,
    }
}

const foodMenu = [
    {
        product: burger("chikenBurger", "chicken, tomato, lettuce", 3, 1)
    },
    {
        product: burger("porkBurger", "pork,tomato,lettuce", 4, 2)
    },
    {
        product: burgerMenu("chickenMenu", "chicken, tomato,lettuce", "cola, fries", 8, 3)
    },
    {
        product: burgerMenu("porkMenu", "pork, tomato, lettuce", "cola, fries", 8, 4)
    },
]

const burgerRestaurant = function (listOfProducts) {
    const stockOfIngredients = new Map()
    const stockOfExtra = new Map()
    return {
        addIngredientsToStock: function (ingredient, ingredientPrice) {
            if (stockOfIngredients.has(ingredient)) {
                throw Error("This is already added")
            }
            stockOfIngredients.set(ingredient, ingredientPrice)
        },
        addExtraToStock: function (extra, extraPrice) {
            if (stockOfIngredients.has(extra)) {
                throw Error("This is already added")
            }
            stockOfExtra.set(extra, extraPrice)
        },
        selectWhatYouWant:function(burgerOrMenu) {
            for (let i = 0; i < listOfProducts.length; i++) {
                const stockItem = listOfProducts[i];
                if(burgerOrMenu === stockItem){
                    return [stockItem.product.burgerId,stockItem.product.burgerPrice]
                }
            }
            // throw Error("This product does not exist in my restaurant")
        },
        pickYourBurgerById: function (id,ingredient,extra) {
            for (let i = 0; i < listOfProducts.length; i++) {
                const stockItem = listOfProducts[i];
                if (id === stockItem.product.burgerId) {
                    return stockItem.product.burgerPrice + stockOfIngredients.has(ingredient.ingredientPrice) + stockOfExtra.has(extra.extraPrice)
                }
            }
        }
    }
}

const kingBurger = burgerRestaurant(foodMenu)
kingBurger.addIngredientsToStock("lettuce", 1)
// kingBurger.addIngredientsToStock("lettuce", 1)
kingBurger.addExtraToStock("cola",1)
// kingBurger.addExtraToStock("cola",1)
// console.log(kingBurger.selectWhatYouWant("porkBurger"))
console.log(kingBurger.pickYourBurgerById(4,"lettuce","cola"))
