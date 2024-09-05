const space = document.querySelector(".displayBooks");
let addbook = document.querySelector(".newbooks");
let form = document.querySelector(".form");
let cancel = document.querySelector(".cancel");
let wrapper = document.querySelector(".wrapper");
let add = document.querySelector(".add");

let booktitle = document.querySelector("#title");
let bookauthor = document.querySelector("#author");
let bookpages = document.querySelector("#pages");
let bookread = document.querySelector("#read");

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author} , ${pages} pages, ${read}`;
  };
}

addbook.addEventListener("click", () => {
  form.showModal();
});

cancel.addEventListener("click", () => {
  resetform();
  form.close();
});

form.addEventListener("click", (e) => {
  if (!wrapper.contains(e.target)) {
    resetform();
    form.close();
  }
});

add.addEventListener("click", (e) => {
  if (checkform()) {
      new book(
        booktitle.value,
        bookauthor.value,
        bookpages.value,
        bookread.checked
      )
    printbooks();
    resetform();
    form.close();
  }
});

function printbooks() {
  let cell = document.createElement("div");
  let name = document.createElement("h1");
  let auth = document.createElement("a");
  let nOfPages = document.createElement("a");
  let reader = document.createElement("button");
  let remove = document.createElement("button");
  reader.classList.add("readornot");
  cell.classList.add("cells");
  name.innerHTML = booktitle.value;
  auth.innerHTML = `author : ${bookauthor.value}`;
  nOfPages.innerHTML = `N. Of Pages : ${bookpages.value}`;
  if (bookread.checked) {
    reader.classList.add("readbutton");
    reader.innerHTML = "Read";
  } else {
    reader.classList.add("notreadbutton");
    reader.innerHTML = "Not Read";
  }
  cell.appendChild(name);
  cell.appendChild(auth);
  cell.appendChild(nOfPages);
  cell.appendChild(reader);
  reader.addEventListener("click", (e) => toggleread(e));
  remove.innerHTML = "Remove";
  cell.appendChild(remove);
  remove.addEventListener("click", (e) => {
    removebook(e);
    console.log(library);
  });
  space.append(cell);
}

function toggleread(e) {
  if (e.target.classList.contains("readbutton")) {
    e.target.classList.add("notreadbutton");
    e.target.classList.remove("readbutton");
    e.target.innerHTML = "Not Read";
  } else {
    e.target.classList.remove("notreadbutton");
    e.target.classList.add("readbutton");
    e.target.innerHTML = "Read";
  }
}

function removebook(e) {
  e.target.closest(".cells").remove();
}

function resetform() {
  booktitle.value = "";
  bookauthor.value = "";
  bookpages.value = "";
  bookread.checked = false;
}

function checkform() {
  if (booktitle.value !== "" && bookauthor.value !== "" && bookpages.value !== "") {
    return true;
  } else {
    return false;
  }
}
