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
        <p className={`bookmark ${bookList.includes(book) ? "" : "hidden"}`}>
          Bookmarked
        </p>
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
        <p>{book.pages} páginas</p>
      </div>
    </article>
  ));

  return (
    <>
      <header>
        <h1>Book List Challenge 📚</h1>
        <BookmarkBtn onClick={toggleOpenList} />
      </header>

      <main>
        <section className={`list-container ${openList ? "show" : "hidden"}`}>
          <header className="list-header">
            <h2>My Book List</h2>
            <CloseBtn onClick={toggleOpenList} />
          </header>

          <div className="list-books-container">
            <h3 className="book-list-available">
              {bookList.length == 1
                ? `${bookList.length} Available Book`
                : `${bookList.length} Available Books`}
            </h3>
            {renderListBooks}
          </div>
        </section>

        <div className="books-section-header">
          <h2>{books.length} Available Books</h2>
          <div className="select-dropdown">
            <select name="genres" id="genres-select">
              <option value="all">All genres</option>
              <option value="fantasy">Fantasy</option>
              <option value="terror">Terror</option>
            </select>
          </div>
        </div>

        <section className="books-container">{renderBooks}</section>
      </main>
    </>
  );
}

export default App;
