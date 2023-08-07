import "./main.scss";
import booksData from "./data/books.json";
import { Book } from "./types/Book";
import BookmarkBtn from "./components/BookmarkBtn/BookmarkBtn";

function App() {
  const books: Book[] = booksData.library.map((data) => data.book);

  const renderBooks = books.map((book) => (
    <article className="book-item" key={book.ISBN}>
      <img src={book.cover} alt={book.title} />
      <h4>{book.title}</h4>
    </article>
  ));

  return (
    <>
      <main>
        <header>
          <h1>Book List Challenge</h1>
          <BookmarkBtn />
        </header>
        <section className="books-container">{renderBooks}</section>
      </main>
    </>
  );
}

export default App;
