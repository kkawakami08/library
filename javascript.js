let myLibrary = [];

function Book(title, author, pages) {
  //constructor
  this.title = title;
  this.author = author;
  this.pages = pages;
}

let inputContainer = document.getElementsByClassName("input")[0];
let bookTitle = document.getElementById("title");
let authorName = document.getElementById("author");
let pageNumber = document.getElementById("pages");
let saveBtn = document.getElementById("save");
let cancelBtn = document.getElementById("cancel");
saveBtn.addEventListener("click", addToLibrary);
cancelBtn.addEventListener("click", (event) => {
  inputContainer.style.visibility = "hidden";
});

function addToLibrary(e) {
  const newBook = new Book(bookTitle.value, authorName.value, pageNumber.value);
  myLibrary.push(newBook);
  displayBooks();
  inputContainer.style.visibility = "hidden";
  bookTitle.value = "";
  authorName.value = "";
  pageNumber.value = "";
}

let bookShelf = document.getElementsByClassName("shelf")[0];

function displayBooks() {
  bookShelf.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let bookCover = document.createElement("div");
    bookCover.classList.add("cover");
    let coverTitle = document.createElement("h2");
    let coverAuthor = document.createElement("h3");
    let coverPages = document.createElement("h4");
    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");

    bookCover.dataset.number = i;
    console.log(
      `After creating cover, dataset number = ${bookCover.dataset.number}`
    );

    deleteBtn.textContent = "Delete Book";
    coverTitle.textContent = myLibrary[i].title;
    coverAuthor.textContent = myLibrary[i].author;
    coverPages.textContent = myLibrary[i].pages;

    bookCover.appendChild(coverTitle);
    bookCover.appendChild(coverAuthor);
    bookCover.appendChild(coverPages);
    bookCover.appendChild(deleteBtn);

    bookShelf.appendChild(bookCover);

    deleteBtn.addEventListener("click", (event) => {
      console.log(`After deleting ${bookCover.dataset.number}`);
      console.log(coverTitle);

      bookShelf.removeChild(bookCover);
      myLibrary.splice(bookCover.dataset.number, 1);
      console.log(myLibrary);
      displayBooks();
    });
  }
}

let addBtn = document.getElementById("add");
addBtn.addEventListener("click", displayInput);

function displayInput() {
  inputContainer.style.visibility = "visible";
}
