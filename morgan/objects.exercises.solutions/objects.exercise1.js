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

let library ={
    adress: "Calle Chimidas, 20, 35509 Playa Honda, Las Palmas",
    openHours: 10,
    closeHours: 16,
    books: ["culpa mia", "culpa tuya, after"]

}
library.books.push("culpa nuestra")
library["books"] = ["culpa mia", "culpa tuya", "culpa nuestra"]
let hours = process.argv[2]
const openHours = 10
const closeHours = 16
library.isLibraryOpen = true
if(openHours > hours){
    library.isLibraryOpen = false


} else if(hours > closeHours){
    library.isLibraryOpen = false
}
console.log(library)



