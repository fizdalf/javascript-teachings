// Model a Burger Restaurant, you have to keep track of the stock of INGREDIENTS, at least 2 burger recipes,
// each burger
// can have a set of extras the customer can pick from if they want.
// The burgers, the menus, the extras, everything will have a price associated.
// Customers can request full menu or only the burger there must be function that allows to place an order,
// the function returns the ID of the order and the amount that to be paid, when there's not enough INGREDIENTS to fill
// an order, you must return an error.
// Another function will take the ID of the order and the money, and will return the actual order
// (the burgers, fries..whatever) and any spare change.
// there must be a way of telling how much money has the Burger Restaurant made with their sales

// lechuga, tomate,  pan, pepinillos, hamburguesa de ternera, hamburguesa de pollo, mayonesa, ketchup, papas fritas, cocacola, fanta y clipper

const INGREDIENTS = {
    lechuga: "lechuga",
    tomate: "tomate",
    queso: "queso",
    hamburguesaDeTernera: "hamburguesa de ternera",
    hamburguesaDePollo: "hamburguesa de pollo",
    pan: "pan",
    pepinillo: "pepinillo",
    mayonesa: "mayonesa",
    ketchup: "ketchup",
    papasFritas: "papas fritas",
    cocacola: "cocacola",
    fanta: "fanta",
    clipper: "clipper",
    water: "water",
}

const ingredientStock = new Map(
    [
        [INGREDIENTS.lechuga, 0],
        [INGREDIENTS.tomate, 20],
        [INGREDIENTS.queso, 20],
        [INGREDIENTS.hamburguesaDeTernera, 20],
        [INGREDIENTS.hamburguesaDePollo, 20],
        [INGREDIENTS.pan, 20],
        [INGREDIENTS.pepinillo, 20],
        [INGREDIENTS.mayonesa, 20],
        [INGREDIENTS.ketchup, 20],
        [INGREDIENTS.papasFritas, 20],
        [INGREDIENTS.cocacola, 20],
        [INGREDIENTS.fanta, 20],
        [INGREDIENTS.clipper, 20],
        [INGREDIENTS.water, 20],
    ]
);

const burgerNames = {
    BOMBA_EXPLOSIVA: "Bomba explosiva Mortal",
    BOMBA_VEGANA: "Bomba Vegana"
}

const burgerRecipes = new Map(
    [
        [
            burgerNames.BOMBA_EXPLOSIVA,
            {
                name: burgerNames.BOMBA_EXPLOSIVA,
                ingredients: [
                    INGREDIENTS.lechuga,
                    INGREDIENTS.tomate,
                    INGREDIENTS.queso,
                    INGREDIENTS.hamburguesaDeTernera,
                    INGREDIENTS.hamburguesaDePollo,
                    INGREDIENTS.pan,
                    INGREDIENTS.pepinillo,
                ],
                extras: [
                    {extraIngredient: INGREDIENTS.mayonesa, price: 0.2}
                ],
                price: 8.50,
            }
        ],
        [
            burgerNames.BOMBA_VEGANA,
            {
                name: burgerNames.BOMBA_VEGANA,
                ingredients: [
                    INGREDIENTS.lechuga,
                    INGREDIENTS.tomate,
                ],
                extras: [
                    {extraIngredient: INGREDIENTS.pepinillo, price: 0.5}
                ],
                price: 10.50,
            }
        ]
    ]
);

const menus = [
    {
        burger: burgerNames.BOMBA_EXPLOSIVA,
        price: 12.50,
        drinkChoices: [
            INGREDIENTS.cocacola,
            INGREDIENTS.fanta,
            INGREDIENTS.clipper,
            INGREDIENTS.water,
        ],
    },
    {
        burger: burgerNames.BOMBA_VEGANA,
        price: 15.50,
        drinkChoices: [
            INGREDIENTS.water,
        ],
    },
]

const BurgerRestaurant = function (name, burgerRecipes, menu, ingredientStock) {


    function checkIngredientInStock(currentIngredient) {
        if (!ingredientStock.has(currentIngredient) || ingredientStock.get(currentIngredient) < 1) {
            throw Error('Lo siento, no tenemos posibilidad de hacerte la hamburguesa!');
        }
    }

    function updateStock(currentIngredient) {
        ingredientStock.set(ingredientStock.get(currentIngredient) - 1);
    }

    function confirmAllIngredintsExist(selectedBurgerRecipe) {
        selectedBurgerRecipe.ingredients.forEach(
            (currentIngredient) => {
                checkIngredientInStock(currentIngredient);
            }
        )
    }

    function updateStockWithAllIngredients(selectedBurgerRecipe) {
        selectedBurgerRecipe.ingredients.forEach(
            (currentIngredient) => {
                updateStock(currentIngredient);
            }
        )
    }

    function findExtra(selectedBurgerRecipe, extra) {
        let foundExtra = null;
        for (let i = 0; i < selectedBurgerRecipe.extras.length; i++) {
            let currentExtra = selectedBurgerRecipe.extras[i]; // {extraIngredient: INGREDIENTS.mayonesa, price: 0.2};
            if (extra === currentExtra.extraIngredient) {
                foundExtra = currentExtra;
            }
        }
        return foundExtra;
    }

    function checkBurgerExists(burgerName) {
        if (!burgerRecipes.has(burgerName)) {
            throw Error("no existe esa hamburguesa, cerdo");
        }
    }

    function findBurgerRecipe(burgerName) {
        checkBurgerExists(burgerName);
        const selectedBurgerRecipe = burgerRecipes.get(burgerName);
        return selectedBurgerRecipe;
    }

    function confirmExtraExists(selectedBurgerRecipe, foundExtra) {

    }

    function updateStockWithExtraRequested(foundExtra) {

    }

    function getNextOrderId() {

    }

    function getBurgerRecipePrice(burgerRecipe, extraRequested) {

    }

    return {
        name() {
            return name;
        },
        orderBurger(burgerName, extraRequested) {
            const selectedBurgerRecipe = findBurgerRecipe(burgerName);
            let foundExtra = findExtra(selectedBurgerRecipe, extraRequested);
            if (extraRequested && !foundExtra) {
                throw Error('No existe ese ingrediente, pig');
            }
            confirmAllIngredintsExist(selectedBurgerRecipe);
            confirmExtraExists(selectedBurgerRecipe, foundExtra);
            updateStockWithAllIngredients(selectedBurgerRecipe);
            updateStockWithExtraRequested(foundExtra);
            return {orderId: getNextOrderId(), price: getBurgerRecipePrice(selectedBurgerRecipe, foundExtra)};
        }
    }
}


const myMacDaniels = BurgerRestaurant('Mc` Daniels', burgerRecipes, menus);

console.log(myMacDaniels.name());
