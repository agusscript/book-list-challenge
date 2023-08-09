import "./main.scss";
import booksData from "./data/books.json";
import { Book } from "./types/Book";
import BookmarkBtn from "./components/BookmarkBtn/BookmarkBtn";
import CloseBtn from "./components/CloseBtn/CloseBtn";
import { useState } from "react";

function App() {
  const books: Book[] = booksData.library.map((data) => data.book);
  const [openList, setOpenList] = useState(false);
  const [bookList, setBookList] = useState<Book[]>([]);

  const toggleOpenList = () => setOpenList(!openList);

  function addToList(newBook: Book) {
    setBookList((bookList) =>
      bookList.includes(newBook)
        ? bookList.filter((repeatedBook) => repeatedBook != newBook)
        : [...bookList, newBook]
    );
  }

  const renderBooks = books.map((book) => (
    <article className="book-item" key={book.ISBN} onClick={() => addToList(book)}>
      <div className="img-container">
        <img src={book.cover} alt={book.title} />
      </div>
      <h4>{book.title}</h4>
    </article>
  ));

  const renderListBooks = bookList.map((book) => (
    <article className="book-item" key={book.ISBN}>
      <img src={book.cover} alt={book.title} />
      <div className="text-content">
        <h3>{book.title}</h3>
        <p>{book.author.name}</p>
        <p>{book.synopsis}</p>
        <p>{book.pages} pages</p>
      </div>
    </article>
  ));

  return (
    <>
      <header>
        <h1>Book List</h1>
        <BookmarkBtn onClick={toggleOpenList} />
      </header>

      <main>
        <section className={`list-container ${openList ? "show" : "hidden"}`}>
          <header className="list-header">
            <h2>My Book List</h2>
            <CloseBtn onClick={toggleOpenList} />
          </header>

          <div className="list-books-container">{renderListBooks}</div>
        </section>

        <section className="books-container">{renderBooks}</section>
      </main>
    </>
  );
}

export default App;
