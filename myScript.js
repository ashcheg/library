let myLibrary = [
    {title:'Anna Karenina', author:'Leo Tolstoy', pages:'864', readStatus:"haven't read yet"},
    {title:'Nineteen Eighty-Four', author:'George Orwell', pages:'328', readStatus:"have been read"},
    {title:'The Catcher in the Rye', author:'J. D. Salinger', pages:'234', readStatus:"have been read"}
];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus
}

Book.prototype.toggleStatus = function () {
    this.readStatus = !this.readStatus;
}

function addBookToLibrary() {
    // assign values to variables
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let checkBox = document.querySelector("#readStatus");
    let readStatus = "haven't read yet";
    // check if the book has been read
    if (checkBox.checked) {
        readStatus = "have been read";
    }
    // create book entry
    let newBook = new Book(title.value, author.value, pages.value, readStatus);
    // add book to the library
    myLibrary.push(newBook);
}

function displayBook(i) {
    let newCard = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.id = "deleteBook";

    let toggleBtn = document.createElement("button");
    toggleBtn.type = "checkbox";

    newCard.innerHTML = myLibrary[i].title + " by " + myLibrary[i].author +" " + myLibrary[i].pages + " pages"+ ". Status: " + myLibrary[i].readStatus;

    newCard.appendChild(toggleBtn);
    newCard.appendChild(deleteBtn);
    bookList.appendChild(newCard);

    //add data number for reference
    newCard.dataset.index = `${i}`;
    deleteBtn.dataset.index = `${i}`;

    

    toggleBtn.addEventListener
    deleteBtn.addEventListener("click", function () {
        newCard.remove();
    });
}

// Submitting new book to the library
document.querySelector('form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();
    //add book to library
    addBookToLibrary();
    // display new added book in the library
    displayBook((myLibrary.length-1));
    // reset text fields
    closeForm();
});

// pop up form commands
function openForm() {
    form.style.display = "block";
    clearInput();
}

function closeForm() {
    form.style.display = "none";
}

// clear text fields
function clearInput() {
    document.querySelector("#title").value = "";
    document.querySelector("#author").value = "";
    document.querySelector("#pages").value = "";
    document.querySelector("#readStatus").checked = false;
}

const form = document.querySelector("#form");
const bookList = document.querySelector(".books");

document.querySelector("#newBook").addEventListener("click", openForm);
document.querySelector("#closeForm").addEventListener("click", closeForm);

// Display alredy existing books in the Library
for (i=0; i<myLibrary.length; i++) {
    displayBook(i);
}




