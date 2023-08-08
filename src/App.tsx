import "./main.scss";
import booksData from "./data/books.json";
import { Book } from "./types/Book";
import BookmarkBtn from "./components/BookmarkBtn/BookmarkBtn";
import CloseBtn from "./components/CloseBtn/CloseBtn";
import { useEffect, useState } from "react";

function App() {
  const books: Book[] = booksData.library.map((data) => data.book);

  const renderBooks = books.map((book) => (
    <article className="book-item" key={book.ISBN}>
      <img src={book.cover} alt={book.title} />
      <h4>{book.title}</h4>
    </article>
  ));

  const renderListBooks = books.map((book) => (
    <article className="book-item" key={book.ISBN}>
      <img src={book.cover} alt={book.title} />
      <div className="text-content">
        <h3>{book.title}</h3>
        <p>{book.synopsis}</p>
        <p>{book.pages} pages</p>
      </div>
    </article>
  ));

  const [openList, setOpenList] = useState(false);

  const toggleOpenList = () => setOpenList(!openList);

  useEffect(() => {
    if (openList) {
      document.body.classList.add("hide-scroll");
    } else {
      document.body.classList.remove("hide-scroll");
    }
  });

  return (
    <>
      <header>
        <h1>Book List</h1>
        <BookmarkBtn onClick={toggleOpenList} />
      </header>

      <main>
        <section className={`list-container ${openList ? "" : "hidden"}`}>
          <header className="list-header">
            <h2>My Book List</h2>
            <CloseBtn onClick={toggleOpenList} />
          </header>
          <div className="list-books-container">
            {renderListBooks}
          </div>
        </section>

        <section className="books-container">{renderBooks}</section>
      </main>
    </>
  );
}

export default App;
