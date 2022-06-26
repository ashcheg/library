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

function displayBooks() {
    for (let i=0; i<myLibrary.length; i++){
        let newCard = document.createElement("li");
        newCard.innerHTML = myLibrary[i].title + " by " + myLibrary[i].author +" " + myLibrary[i].pages + " pages"+ ". Status: " + myLibrary[i].readStatus;
        bookList.appendChild(newCard);
    }
}

document.querySelector('#form').addEventListener('submit', (e) => {
    // prevent actual submit
    e.preventDefault();
    //add book to library
    addBookToLibrary();
    console.log("Library: ", myLibrary);
});

const bookList = document.querySelector(".books");

displayBooks();

const newBookButton = document.querySelector("#newBook")
