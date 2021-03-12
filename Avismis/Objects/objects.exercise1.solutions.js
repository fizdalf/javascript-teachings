// Create an object that represents a library, it has the following properties and methods
// Library
//  - Properties
//      + address               This is a string that will hold the address of the library
//      + openHours             This is a number between 0 and 24 that represents the time the library opens
//      + closeHours            This is a number between 0 and 24 that represents the time the library closes
//      + books                 This is an array of strings that represent the titles of the books available
//  - Methods
//      + addBook(bookTitle)    This is a method that adds a bookTitle given as argument to the array of books
//      + borrowBook(bookTitle) This is a method that removes a book given the bookTitle as argument (create a new array without the book to remove)
//      + isLibraryOpen(hours)  This is a method that receives hours, a number between 0 and 24 as argument and returns true if the hours are within the
//      open/close hours, returns false otherwise


let pepito = {
    address: 'Antonio Machado st, number 23, Fuenteovejuna',
    openHours: 8,
    closeHours: 20,
    books: ['Harry Potter Saga', 'The Lord of the Rings Saga', 'The Lord of the Flies'],
    addBook: function (bookTitle) {
        this.books.push(bookTitle)
    },
    borrowBook: function (bookTitle) {
        let books = [];
        let index = 0
        while (index < this.books.length) {
            if (bookTitle !== this.books[index]) {
                books.push(this.books[index])
            }
            index++
        }
        this.books = books;
    },
    isLibraryOpen: function (hour) {
        return (hour > this.openHours && hour < this.closeHours);
    }
}


