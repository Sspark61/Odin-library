const library = [];
const space = document.querySelector(".displayBooks");

function book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author} , ${pages} pages, ${read}`;
  };
}

function addtolibrary(object) {
  library.push(object);
}

function printbooks() {
  for (let i = 0; i < library.length; i++) {
    let cell = document.createElement("div");
    cell.classList.add("cells");
    space.append(cell);
  }
}


printbooks();
