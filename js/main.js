/**
 * [
 *    {
 *      id: <int>
 *      title: <string>
 *      author: <string>
 *      year: <number>
 *      isCompleted: <boolean>
 *    }
 * ]
 */
const books = [];
const RENDER_EVENT = "render-book";

function generateId() {
  return +new Date();
}

function generateBookObject(id, title, author, year, isCompleted) {
  return {
    id,
    title,
    author,
    year,
    isCompleted,
  };
}

function addBook() {
  const title = document.getElementById("inputBookTitle").value;
  const author = document.getElementById("inputBookAuthor").value;
  const year = document.getElementById("inputBookYear").value;
  const isComplete = document.getElementById("inputBookIsComplete").checked;
  console.log(isComplete)

  const generatedID = generateId();
  const bookObject = generateBookObject(generatedID, title, author, year, isComplete);
  books.push(bookObject);
  showBooks();
  document.dispatchEvent(new Event(RENDER_EVENT));
}

document.addEventListener("DOMContentLoaded", function () {
  const submitForm = document.getElementById("inputBook");
  submitForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });
});

document.addEventListener(RENDER_EVENT, function () { });


function showBooks() {
  books.forEach((book) => {
    if (!book.isCompleted) {
      template = `
          <article class="book_item">
          <h3>${book.title}</h3>
          <p>Penulis: ${book.author}</p>
          <p>Tahun: ${book.year}</p>

          <div class="action">
            <button class="green">Selesai dibaca</button>
            <button class="red">Hapus buku</button>
          </div>
        </article>
      `

      template = $.parseHTML(template);
      $("#incompleteBookshelfList").append(template);
    } else if (book.isCompleted) {
      template = `
          <article class="book_item">
          <h3>${book.title}</h3>
          <p>Penulis: ${book.author}</p>
          <p>Tahun: ${book.year}</p>

          <div class="action">
            <button class="green">Selesai dibaca</button>
            <button class="red">Hapus buku</button>
          </div>
        </article>
      `

      template = $.parseHTML(template);
      $("#completeBookshelfList").append(template);

    }
  });
}

