const myLibrary = [];

function Book(title, author, pageCount) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.id = crypto.randomUUID();
};

function addBookToLibrary() {

};