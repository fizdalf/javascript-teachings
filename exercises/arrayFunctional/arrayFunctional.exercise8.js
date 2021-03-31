// Create a function


const returnedBooks = [
    {
        title: 'Lo que el viento se llevó y lo que no pudo lo dejó',
        author: 'Álvaro Stewart',
        category: 'self-help'
    },
    {
        title: 'Tu madre y mi perro se casaron de blanco',
        author: 'Joseph Morton',
        category: 'historical'
    },
    {
        title: 'El barco de vela que se apagó',
        author: 'Pepe Stewart',
        category: 'historical'
    },
    {
        title: 'La noche y el día',
        author: 'Álvaro Stewart',
        category: 'self-help'
    },
    {
        title: 'The lord of the rings',
        author: 'Álvaro Stewart',
        category: 'fantasy'
    },
];

const libraryxx = {
    categories: {},
    storeBook: function (book) {
        if (!(book.category in this.categories)) {
            this.categories[book.category] = [];
        }
        this.categories[book.category].push(book);
    },
    getBooksInCategoryByCriteria: function (category, criteria) {
        if (!(category in this.categories)) {
            return [];
        }
        const booksInCategory = this.categories[category];
        if (!criteria) {
            return booksInCategory;
        }
        return booksInCategory.filter(criteria);
    },
    getBookAuthorsInCategory: function (category) {
        if (!(category in this.categories)) {
            return [];
        }
        return this.categories[category].map(book => book.author);
    }
}

returnedBooks.forEach(book => library.storeBook(book));

const booksWithJosephMortonAsAuthorCriteria = (book) => book.author === "Joseph Morton";

const someBooks = library.getBooksInCategoryByCriteria('historical', booksWithJosephMortonAsAuthorCriteria);

if (!someBooks || someBooks.length === 0 || someBooks[0].title !== 'Tu madre y mi perro se casaron de blanco') {
    throw new Error('The book expected is not there!!!!');
}


