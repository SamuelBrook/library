let myLibrary = [];
myLibrary = findArrayInLocalStorage();
if (myLibrary === null) {
    myLibrary = [];
}

console.log(myLibrary);

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

if (myLibrary.length < 1) {
    let theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
    addBookToLibrary(theHobbit);
}


for (let i = 0; i < myLibrary.length; i++) {
    displayBookCard(myLibrary[i]);
}

let newBookEnabled = true;

const readStatusButtons = document.querySelectorAll(".read-status-button");
readStatusButtons.forEach((readStatusButton) => {
    readStatusButton.addEventListener("click", () => {
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title === readStatusButton.id) {
                if (myLibrary[i].read === true) {
                    myLibrary[i].read = false;
                }
                else {
                    myLibrary[i].read = true;
                }
                saveArrayToLocalStorage(myLibrary);
                let readStatuses = document.querySelectorAll(".book-read-status");
                readStatuses.forEach((readStatus) => {
                    if (readStatus.id === readStatusButton.id) {
                        if (myLibrary[i].read === false) {
                            readStatus.textContent = "Finished: No";
                        }
                        else {
                            readStatus.textContent = "Finished: Yes";
                        }
                    }
                })
            }
        }
    })
})

const removeButtons = document.querySelectorAll(".remove-button");
removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", () => {
        myLibrary = findArrayInLocalStorage();
        for (let i = 0; i < myLibrary.length; i++) {
            if (myLibrary[i].title === removeButton.id) {
                myLibrary.splice(i, 1);
                saveArrayToLocalStorage(myLibrary);
                console.log(myLibrary);
            }
        }
        let boxes = document.querySelectorAll(".book-card");
        boxes.forEach((box) => {
            if (removeButton.id === box.id) {
                box.remove();
            }
        })
    })
})

const newBookButton = document.querySelector("#new-book-button");
newBookButton.addEventListener("click", () => {
    if (newBookEnabled === true) {
        const newBookFormContainer = document.querySelector("#form-container");
        const newBookForm = document.createElement("form");
        newBookForm.setAttribute("id", "new-book-form");
        newBookFormContainer.appendChild(newBookForm);
        createLabelandInput(newBookForm);

        newBookEnabled = false;

        const formSubmit = document.querySelector("#submit");
        formSubmit.addEventListener("click", () => {
            newBookEnabled = true;
            let title = document.getElementById("title").value;
            let author = document.getElementById("author").value;
            let pages = document.getElementById("pages").value;
            let readStatus = document.getElementById("read-status");
            let newBook = new Book(title, author, pages, readStatus.checked);
            addBookToLibrary(newBook);
            newBookForm.remove();
            saveArrayToLocalStorage(myLibrary);
            location.reload();
        })
    }
})


function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBookCard(book) {
    const bookContainer = document.querySelector("#container");
    const bookCard = document.createElement("div");
    bookCard.setAttribute("id", book.title);
    bookCard.classList.add("book-card");
    bookContainer.appendChild(bookCard);
    createTitle(bookCard, book);
    addPages(bookCard, book);
    addReadStatus(bookCard, book);
    addAuthor(bookCard, book);
    addButtons(bookCard, book);
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
    bookPages.textContent = `Pages: ${book.pages}`;
}

function addReadStatus(bookCard, book) {
    let bookReadStatus = document.createElement("div");
    bookReadStatus.classList.add("book-read-status");
    bookReadStatus.setAttribute("id", book.title);
;    bookCard.appendChild(bookReadStatus);
    if (book.read === true) {
        bookReadStatus.textContent = "Finished: Yes";
    }
    else {
        bookReadStatus.textContent = "Finished: No";
    }
}

function addRemoveButton(element, book) {
    let bookRemoveButton = document.createElement("button");
    bookRemoveButton.classList.add("remove-button");
    bookRemoveButton.setAttribute("id", book.title);
    element.appendChild(bookRemoveButton);
    bookRemoveButton.textContent = "REMOVE";
}

function addReadStatusButton(element, book) {
    let readStatusButton = document.createElement("button");
    readStatusButton.classList.add("read-status-button");
    readStatusButton.setAttribute("id", book.title);
    element.appendChild(readStatusButton);
    readStatusButton.textContent = "READ STATUS";

}

function addButtons(bookCard, book) {
    let buttonBox = document.createElement("div");
    buttonBox.classList.add("button-box");
    bookCard.appendChild(buttonBox);
    addReadStatusButton(buttonBox, book);
    addRemoveButton(buttonBox, book);
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
    readLabel.textContent = "Have you finished reading the book?";

    const readInput = document.createElement("input");
    readInput.type = "checkbox";
    readInput.setAttribute("id", "read-status");
    newBookForm.appendChild(readInput);

    const submitInput = document.createElement("input");
    submitInput.setAttribute("id", "submit");
    submitInput.type = "button";
    submitInput.value = "Submit";
    newBookForm.appendChild(submitInput);
}

function saveArrayToLocalStorage(library) {
    window.localStorage.setItem("library", JSON.stringify(library));
}

function findArrayInLocalStorage() {
    return JSON.parse(window.localStorage.getItem("library"));
}