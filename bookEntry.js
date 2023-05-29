// Book entry form submission
document.getElementById("bookEntryForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Get form values
    var bookTitle = document.getElementById("bookTitle").value;
    var authorName = document.getElementById("authorName").value;
    var genre = document.getElementById("genre").value;
    var publicationYear = document.getElementById("publicationYear").value;
    var bookPages = document.getElementById("bookPages").value;
    var readingStatus = document.querySelector('input[name="readingStatus"]:checked').value;
    var rating = document.getElementById("rating").value;
  
    // Create book object
    var book = {
      bookTitle: bookTitle,
      authorName: authorName,
      genre: genre,
      publicationYear: publicationYear,
      bookPages: bookPages,
      readingStatus: readingStatus,
      rating: rating
    };
  
    // Save book data to local storage
    var books = JSON.parse(localStorage.getItem("books")) || [];
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  
    alert("Book information saved successfully.");
    // Clear form fields
    document.getElementById("bookEntryForm").reset();
  });
  