let myLibrary = [];

function Book(title, author, pages, genre, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.genre = genre;
    this.read = read;
}

//Form Diplay Block
function show() {
    const formShow = document.getElementById('form');
    formShow.style.display = 'block';
}

//Adding Books To New Object
function addBooks() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let genre = document.getElementById('genreList').value;
    let isRead = document.getElementById('read').checked;

    let bookNew = new Book(title, author, pages, genre, isRead);
    return bookNew;
}

//Adding Books to Array
function addToArray() {
    const addToArray = document.getElementById('submit-form');
    myLibrary.push(addBooks());
    event.preventDefault();

    display();
}

//Reset The Form
function reset() {
    document.getElementById('form').reset;
    event.preventDefault();
}

//Displaying The Books
function display() {
    let bookCard = document.getElementById('bookCard');
    bookCard.innerHTML = "";
    for(let i = 0; i < myLibrary.length; i++) {
        let bookList = myLibrary[i];
        let bookDisplay = document.createElement('div');
        bookDisplay.innerHTML = `
        <div class="eachBook">
            <h1>${bookList.title}</h1>
            <h2>${bookList.author}</h3>
            <h4>${bookList.pages} Pages</h4>
            <h4>${bookList.genre}</h4>
            <h5>${bookList.read ? "Read" : "Not Read"}</h5>
            <button onCLick="removeEntry(${i})">Clear Entry</button>
            <button onCLick="readStatus(${i})">Read Toggle</button>
        </div>
        `
        bookCard.appendChild(bookDisplay);
    }
}

//Removing Book Entry
function removeEntry(index) {
    myLibrary.splice(index, 1)
    display();
}

//Changing Read Status
Book.prototype.readStatus = function() {
    this.read = !this.read;
}

function readStatus(index) {
    myLibrary[index].readStatus();
    display();
}


//Hiding Form
function done() {
    var done = document.getElementById('form');
    done.style.display = "none";
    event.preventDefault();
}
