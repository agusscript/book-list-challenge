import "./main.scss";
import booksData from "./data/books.json";
import { Book } from "./types/Book";
import BookmarkBtn from "./components/BookmarkBtn/BookmarkBtn";
import CloseBtn from "./components/CloseBtn/CloseBtn";
import { useState } from "react";
import Footer from "./components/Footer/Footer";

function App() {
  const books: Book[] = booksData.library.map((data) => data.book);
  const [openList, setOpenList] = useState<boolean>(false);
  const [genre, setGenre] = useState<string>("");
  const [bookList, setBookList] = useState<Book[]>([]);

  function addToList(newBook: Book) {
    setBookList((bookList) =>
      bookList.includes(newBook)
        ? bookList.filter((repeatedBook) => repeatedBook != newBook)
        : [...bookList, newBook]
    );
  }

  const filteredBooks = genre
    ? books.filter((book) => {
        if (book.genre != genre) return false;

        return true;
      })
    : books;

  return (
    <>
      <header>
        <h1>Book List Challenge 📚</h1>
        <BookmarkBtn onClick={() => setOpenList(!openList)} />
      </header>

      <main>
        <section className={`bookmark-list-container ${openList ? "show" : "hidden"}`}>
          <header className="list-header">
            <h2>My Book List</h2>
            <CloseBtn onClick={() => setOpenList(!openList)} />
          </header>

          <div className="list-books-container">
            <h3 className="book-list-available">
              {bookList.length == 1
                ? `${bookList.length} Available Book`
                : `${bookList.length} Available Books`}
            </h3>
            {bookList.map((book) => (
              <article className="book-item" key={book.ISBN}>
                <img src={book.cover} alt={book.title} />
                <div className="text-content">
                  <h3>{book.title}</h3>
                  <p>{book.author.name}</p>
                  <p>{book.synopsis}</p>
                  <p>{book.pages} páginas</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <div className="grid-books-header">
          <h2>{books.length} Available Books</h2>
          <div className="select-dropdown">
            <select
              name="genres"
              id="genres-select"
              value={genre}
              onChange={(event) => setGenre(event.target.value)}
            >
              <option value="">All genres</option>
              <option value="Ciencia ficción">Science fiction</option>
              <option value="Fantasía">Fantasy</option>
              <option value="Terror">Terror</option>
            </select>
          </div>
        </div>

        <section className="grid-books-container">
          {filteredBooks.map((book) => (
            <article
              className="book-item"
              key={book.ISBN}
              onClick={() => addToList(book)}
            >
              <div className="img-container">
                <img src={book.cover} alt={book.title} />
                <p className={`bookmark ${bookList.includes(book) ? "" : "hidden"}`}>
                  Bookmarked
                </p>
              </div>
              <h4>{book.title}</h4>
            </article>
          ))}
        </section>
      </main>
      <Footer/>
    </>
  );
}

export default App;
