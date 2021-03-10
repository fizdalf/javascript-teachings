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
//      + isLibraryOpen(hours)  This is a method that receives hours, a number between 0 and 24 as argument and returns true if the hours are within the open/close hours, returns false otherwise

let library = {
    address: "calle Fajardo",
    openHours: "10",
    closeHours: "14",
    books: ["learning with Xavi", "learning programming", "functions will be your nightmare"],
}

library.books = ["learning with Xavi", "learning programming", "functions will be your nightmare", "other book about functions"]
library.books = ["learning with Xavi", "functions will be your nightmare", "other book about functions"]
library.isLibraryOpen = true,
    if (hour < openHours){
        library.isLibraryOpen = false
    } else if (hour > openHours){
        library.isLibraryOpen = false
    }


