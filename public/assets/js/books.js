document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // const nameInput = document.getElementById('author-name');
  // const authorList = document.querySelector('tbody');

  // Create an author
  const insertBook = (bookData) => {
    fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookData),
    })
      .then(getBooks)
      .catch((err) => console.error(err));
  };
});
