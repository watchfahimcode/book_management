window.addEventListener("load", function() {
  displayBookList();
});

document.getElementById("searchInput").addEventListener("input", function(event) {
  var searchValue = event.target.value.toLowerCase();
  displayBookList(searchValue);
});

function displayBookList(searchValue = "") {
  var books = JSON.parse(localStorage.getItem("books")) || [];
  var tableBody = document.getElementById("bookTableBody");
  tableBody.innerHTML = "";

  books.forEach(function(book) {
    if (book.bookTitle.toLowerCase().includes(searchValue) || book.authorName.toLowerCase().includes(searchValue)) {
      var row = document.createElement("tr");
      row.innerHTML = `
        <td>${book.bookTitle}</td>
        <td>${book.authorName}</td>
        <td>${book.genre}</td>
        <td>${book.publicationYear}</td>
        <td>${book.bookPages}</td>
        <td>${book.readingStatus}</td>
        <td>${book.rating}</td>
        <td>
          <button class="btn-update" data-title="${book.bookTitle}">Update</button>
          <button class="btn-delete" data-title="${book.bookTitle}">Delete</button>
        </td>
      `;
      tableBody.appendChild(row);
    }
  });

  attachEventListeners();
}

function attachEventListeners() {
  var updateButtons = document.querySelectorAll(".btn-update");
  updateButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      var bookTitle = event.target.dataset.title;
      window.location.href = "update.html?title=" + encodeURIComponent(bookTitle);
    });
  });

  var deleteButtons = document.querySelectorAll(".btn-delete");
  deleteButtons.forEach(function(button) {
    button.addEventListener("click", function(event) {
      var bookTitle = event.target.dataset.title;
      deleteBook(bookTitle);
      displayBookList();
    });
  });
}

function deleteBook(bookTitle) {
  var books = JSON.parse(localStorage.getItem("books")) || [];
  var updatedBooks = books.filter(function(book) {
    return book.bookTitle !== bookTitle;
  });
  localStorage.setItem("books", JSON.stringify(updatedBooks));
}
