let myLibrary = [
    {title:'Anna Karenina', author:'Leo Tolstoy', pages:'864', readStatus:false},
    {title:'Nineteen Eighty-Four', author:'George Orwell', pages:'328', readStatus:true},
    {title:'The Catcher in the Rye', author:'J. D. Salinger', pages:'234', readStatus:true}
];

function Book(title, author, pages, readStatus) {
    this.title = title
    this.author = author
    this.pages = pages
    this.readStatus = readStatus;
}

/*Book.prototype.toggleStatus = function () {
    this.readStatus = !this.readStatus;
}*/

function addBookToLibrary() {
    // assign values to variables
    let title = document.querySelector("#title");
    let author = document.querySelector("#author");
    let pages = document.querySelector("#pages");
    let checkBox = document.querySelector("#readStatus");
    // check read status
    if (checkBox.checked) {
        readStatus = true;
    } else {
        readStatus = false;
    }
    // create book entry
    let newBook = new Book(title.value, author.value, pages.value, readStatus);
    // add book to the library
    myLibrary.push(newBook);
}

function displayBook(i) {
    // create new book card and its parts
    let newCard = document.createElement("li");

    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "Delete";
    deleteBtn.id = "deleteBook";

    let toggleBtn = document.createElement("input");
    toggleBtn.type = "checkbox";

    let statusDisplay = document.createElement("p");
    statusDisplay.id = "statusDisplay";

    let bookName = document.createElement("div");
    bookName.id = "bookName";

    bookName.innerHTML = myLibrary[i].title + " by " + myLibrary[i].author +" " + myLibrary[i].pages + " pages"+ ". Status: ";

    // add data number for reference
    newCard.dataset.index = `${i}`;
    deleteBtn.dataset.index = `${i}`;

    // check if the book has been read
    if (myLibrary[i].readStatus===true){
        toggleBtn.checked = true;
        statusDisplay.innerHTML = "have been read";
    } else {
        toggleBtn.checked = false;
        statusDisplay.innerHTML = "hasn't been read yet";
    }
    

    // display all parts on the book card
    newCard.appendChild(bookName);
    newCard.appendChild(toggleBtn);
    newCard.appendChild(statusDisplay);
    newCard.appendChild(deleteBtn);
    bookList.appendChild(newCard);

    // assign actions for new buttons
    toggleBtn.addEventListener("click", function () {
        myLibrary[i].readStatus = !myLibrary[i].readStatus;
        if (myLibrary[i].readStatus===true){
            statusDisplay.innerHTML = "have been read";
        } else {
            statusDisplay.innerHTML = "hasn't been read yet";
        }
    });
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





