document.getElementById("bookEntryForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var bookTitle = document.getElementById("bookTitle").value;
  var authorName = document.getElementById("authorName").value;
  var genre = document.getElementById("genre").value;
  var publicationYear = document.getElementById("publicationYear").value;
  var bookPages = document.getElementById("bookPages").value;
  var readingStatus = document.getElementById("readingStatus").value;
  var rating = document.getElementById("rating").value;
  
  var book = {
    bookTitle: bookTitle,
    authorName: authorName,
    genre: genre,
    publicationYear: publicationYear,
    bookPages: bookPages,
    readingStatus: readingStatus,
    rating: rating
  };
  
  var books = JSON.parse(localStorage.getItem("books")) || [];
  books.push(book);
  localStorage.setItem("books", JSON.stringify(books));
  
  document.getElementById("bookEntryForm").reset();
  
  window.location.href = "bookList.html";
});
