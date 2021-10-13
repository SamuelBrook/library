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

    addButtons(bookCard);
}





const button = document.querySelector("#new-book-button");
button.addEventListener("click", () => {
    const newBookFormContainer = document.querySelector("#form-container");
    const newBookForm = document.createElement("form");
    newBookForm.setAttribute("id", "new-book-form");
    newBookFormContainer.appendChild(newBookForm);
    createLabelandInput(newBookForm);
})




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
    bookPages.textContent = `Pages: ${book.pages}`;
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

function addRemoveButton(element) {
    let bookRemoveButton = document.createElement("button");
    bookRemoveButton.classList.add("remove-button");
    element.appendChild(bookRemoveButton);
    bookRemoveButton.textContent = "REMOVE";
}

function addReadStatusButton(element) {
    let readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    element.appendChild(readStatusButton);
    readStatusButton.textContent = "READ STATUS";

}

function addButtons(bookCard) {
    let buttonBox = document.createElement("div");
    buttonBox.classList.add("button-box");
    bookCard.appendChild(buttonBox);
    addReadStatusButton(buttonBox);
    addRemoveButton(buttonBox);
}

function createLabelandInput(newBookForm) {
    const titleLabel = document.createElement("label");
    titleLabel.htmlFor = "title";
    newBookForm.appendChild(titleLabel);
    titleLabel.textContent = "Title:";

    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.setAttribute("id", "title");
    newBookForm.appendChild(titleInput);

    const authorLabel = document.createElement("label");
    authorLabel.htmlFor = "author";
    newBookForm.appendChild(authorLabel);
    authorLabel.textContent = "Author:";

    const authorInput = document.createElement("input");
    authorInput.type = "text";
    authorInput.setAttribute("id", "author");
    newBookForm.appendChild(authorInput);

    const pagesLabel = document.createElement("label");
    pagesLabel.htmlFor = "pages";
    newBookForm.appendChild(pagesLabel);
    pagesLabel.textContent = "Pages:";

    const pagesInput = document.createElement("input");
    pagesInput.type = "text";
    pagesInput.setAttribute("id", "pages");
    newBookForm.appendChild(pagesInput);

    const readLabel = document.createElement("label");
    readLabel.htmlFor = "read-status";
    readLabel.setAttribute("id", "read-label");
    newBookForm.appendChild(readLabel);
    readLabel.textContent = "Have you read the book?";

    const readInput = document.createElement("input");
    readInput.type = "checkbox";
    readInput.setAttribute("id", "read-status");
    newBookForm.appendChild(readInput);

    const submitInput = document.createElement("input");
    submitInput.setAttribute("id", "submit");
    submitInput.type = "submit";
    submitInput.value = "Submit";
    newBookForm.appendChild(submitInput);
}


