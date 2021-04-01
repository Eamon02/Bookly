document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded! 🚀");

  // const nameInput = document.getElementById('author-name');
  // const authorList = document.querySelector('tbody');

  // Create an author
  const insertBook = (bookData) => {
    // console.log(bookData);
    // fetch("/api/books", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: bookData,
    // })
    //   .then(getBooks => {
    //     console.log(getBooks);
    //   })
    //   .catch((err) => console.error(err));
    $.ajax({
      url: "/api/books",
      method: "POST",
      data: bookData,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.error(err));
  };
  $("#addBtn").on("click", async (e) => {
    e.preventDefault();
    const bookData = {
      title: $("#booktitle").val(),
      author: $("#author").val(),
      user_rating: $("#rating").val(),
      reading_status: $("#status").val(),
      category: $("#category").val(),
    };
    await insertBook(bookData);
    window.location.reload();
  });
});

// A function for deleting a note from the db
const deleteBook = (event) => {
  const id = event.target.id;
  return $.ajax({
    url: "api/books/" + id,
    method: "DELETE",
  });
};
