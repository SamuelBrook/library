let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
let theLordOftheRings = new Book("The Lord of The Rings", "J.R.R. Tolkien", 1135, true);
let theSilmarillion = new Book("The Silmarillion", "J.R.R. Tolkien", 355, false);

addBookToLibrary(theHobbit);
addBookToLibrary(theLordOftheRings);
addBookToLibrary(theSilmarillion);
console.log(myLibrary);

for (let i = 0; i < myLibrary.length; i++) {
    
}