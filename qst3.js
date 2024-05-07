//Function to calculate the average number of pages across all books in an array of book objects:


function averagePages(books) {
    const totalPages = books.map(book => book.pages).reduce((acc, curr) => acc + curr, 0);
    return totalPages / books.length;
}
