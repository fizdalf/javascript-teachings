function Product(description, brand, price, barCode, category, expirationDate = null, labelContent = '') {
    return {
        brand,
        price,
        category,
        expirationDate,
        description,
        labelContent,
        barCode
    }
}


const stock = [
    {
        quantity: 10,
        product: Product('Mantequilla sin sal, 500g', 'Castillo', 3.5, 8879545, 'Productos Lácteos', '2021-04-05', 'Contiene leche de vaca')
    },
    {
        quantity: 20,
        product: Product('Leche semi-desnatada, 1L', 'Hacendado', 0.58, 9898872, 'Productos Lácteos', '2023-01-10', 'Calidad nutricional B')
    },
    {
        quantity: 50,
        product: Product("Agua", "FuenteLiviana", 1.5, 52369854, "Bebida", "2021-07-11", "Agua para tu body")
    },
    {
        quantity: 20,
        product: Product('Tofu con sabor a gloria, 1kg', 'La vaca que vive', 0.50, 110010101, 'Vegan-Bio', '10-10-10', 'agua, soja pasteurizada, mucha gloria')
    },
];


function SuperMarket(initialStock) {
    return {
        cash: 0,
        getQuantityOfProductByCode: function (code) {
            for (let i = 0; i < initialStock.length; i++) {
                const stockItem = initialStock[i];
                if (code === stockItem.product.barCode) {
                    return stockItem.quantity
                }
            }
            return 0;
        },
        buyProduct: function (code, quantity) {
            for (let i = 0; i < initialStock.length; i++) {
                const stockItem = initialStock[i];
                if (code === stockItem.product.barCode) {
                    // hemos encontrado el producto
                    if (stockItem.quantity < quantity) {
                        throw Error("not enough quantity");
                    }
                    // hemos encontrado el producto y hay suficientes unidades
                    stockItem.quantity -= quantity
                    const totalPrice = stockItem.product.price * quantity
                    this.cash += totalPrice;
                    return totalPrice;
                }
            }
            throw Error("does not exist")
        }
    }
}


const lidial = SuperMarket(stock);

console.log(lidial.getQuantityOfProductByCode(52369854));
console.log(lidial.buyProduct(52369854, 10));
console.log(lidial.getQuantityOfProductByCode(52369854), " expect to be ", 40);
