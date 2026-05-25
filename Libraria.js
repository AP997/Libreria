const books = [
    { title: "Il Grande Gatsby", author: "F. Scott Fitzgerald", year: 1925, category: "fiction" },
    { title: "1984", author: "George Orwell", year: 1949, category: "fiction" },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960, category: "fiction" },
    { title: "Pride and Prejudice", author: "Jane Austen", year: 1813, category: "fiction" },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", year: 1951, category: "fiction" },
    { title: "A Brief History of Time", author: "Stephen Hawking", year: 1988, category: "science" },
    { title: "Sapiens", author: "Yuval Noah Harari", year: 2011, category: "non-fiction" },
    { title: "Harry Potter e la Pietra Filosofale", author: "J.K. Rowling", year: 1997, category: "fantasy" },
    { title: "Il Signore degli Anelli", author: "J.R.R. Tolkien", year: 1954, category: "fantasy" }
];

const booklist = document.getElementById("bookList");
const categoryFilter = document.getElementById("categoryFilter");
const searchInput = document.getElementById("searchInput");

function displayBooks(filteredBooks) {
    if (!booklist) return;
    booklist.innerHTML = "";
    filteredBooks.forEach((book, index) => {
        const bookDiv = document.createElement("div");
        bookDiv.className = "book";
        bookDiv.style.animationDelay = `${index * 0.1}s`;
        bookDiv.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Autore:</strong> ${book.author} (${book.year})</p>
            <p><strong>Categoria:</strong> ${book.category || 'N/A'}</p>
        `;
        booklist.appendChild(bookDiv);
    });
}

function filterBooks() {
    const selectedCategory = categoryFilter.value;
    const searchTerm = searchInput.value.toLowerCase();
    let filteredBooks = books;

    if (selectedCategory !== "all") {
        filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
    }

    if (searchTerm) {
        filteredBooks = filteredBooks.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }

    displayBooks(filteredBooks);
}

categoryFilter.addEventListener("change", filterBooks);
searchInput.addEventListener("input", filterBooks);

//mostra tutti i libri all'avvio
displayBooks(books);
