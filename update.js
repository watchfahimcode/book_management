var urlParams = new URLSearchParams(window.location.search);
var bookTitle = urlParams.get("title");

var updateForm = document.getElementById("updateForm");
var updateTitleInput = document.getElementById("updateTitle");
var updateAuthorInput = document.getElementById("updateAuthor");
var updateGenreInput = document.getElementById("updateGenre");
var updateYearInput = document.getElementById("updateYear");
var updatePagesInput = document.getElementById("updatePages");
var updateStatusSelect = document.getElementById("updateStatus");
var updateRatingSelect = document.getElementById("updateRating");

updateForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  var updatedBook = {
    bookTitle: updateTitleInput.value,
    authorName: updateAuthorInput.value,
    genre: updateGenreInput.value,
    publicationYear: updateYearInput.value,
    bookPages: updatePagesInput.value,
    readingStatus: updateStatusSelect.value,
    rating: updateRatingSelect.value
  };
  
  var books = JSON.parse(localStorage.getItem("books")) || [];
  var updatedBooks = books.map(function(book) {
    if (book.bookTitle === bookTitle) {
      return updatedBook;
    }
    return book;
  });
  localStorage.setItem("books", JSON.stringify(updatedBooks));
  
  window.location.href = "bookList.html";
});

updateForm.addEventListener("reset", function() {
  window.location.href = "bookList.html";
});

window.addEventListener("load", function() {
  loadBookDetails();
});

function loadBookDetails() {
  var books = JSON.parse(localStorage.getItem("books")) || [];
  var book = books.find(function(book) {
    return book.bookTitle === bookTitle;
  });

  if (book) {
    updateTitleInput.value = book.bookTitle;
    updateAuthorInput.value = book.authorName;
    updateGenreInput.value = book.genre;
    updateYearInput.value = book.publicationYear;
    updatePagesInput.value = book.bookPages;
    updateStatusSelect.value = book.readingStatus;
    updateRatingSelect.value = book.rating;
  }
}
