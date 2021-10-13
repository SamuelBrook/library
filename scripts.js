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
    displayBookCard(myLibrary[i]);
}




function displayBookCard(book) {
    const bookContainer = document.querySelector("#container");
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookContainer.appendChild(bookCard);

    createTitle(bookCard, book);

    addPages(bookCard, book);
    addReadStatus(bookCard, book);

    addAuthor(bookCard, book);


    
    


}

function createTitle(bookCard, book) {
    let bookTitle = document.createElement("div");
    bookTitle.classList.add("book-title");
    bookCard.appendChild(bookTitle);
    bookTitle.textContent = book.title;
}

function addAuthor(bookCard, book) {
    let bookAuthor = document.createElement("div");
    bookAuthor.classList.add("book-author");
    bookCard.appendChild(bookAuthor);
    bookAuthor.textContent = `By ${book.author}`;
}

function addPages(bookCard, book) {
    let bookPages = document.createElement("div");
    bookPages.classList.add("book-pages");
    bookCard.appendChild(bookPages);
    bookPages.textContent = `Pages: ${book.page}`;
}

function addReadStatus(bookCard, book) {
    let bookReadStatus = document.createElement("div");
    bookReadStatus.classList.add("book-read-status");
    bookCard.appendChild(bookReadStatus);
    if (book.read === true) {
        bookReadStatus.textContent = "Read: Yes";
    }
    else {
        bookReadStatus.textContent = "Read: No";
    }
}

function openNewBookForm() {
    
}

const button = document.querySelector("#new-book-button");
button.addEventListener("click", () => {
    const newBookFormContainer = document.querySelector("#form-container");
    const newBookForm = document.createElement("form");
    newBookForm.setAttribute("id", "new-book-form");
    newBookFormContainer.appendChild(newBookForm);
    createLabelandInput(newBookForm);



})

function createLabelandInput(newBookForm) {
    const label = document.createElement("label");
    label.htmlFor = "title";
    newBookForm.appendChild(label);
    label.textContent = "Title";

    const input = document.createElement("input");
    input.type = "text";
    input.setAttribute("id", "title");
    newBookForm.appendChild(input);
}


