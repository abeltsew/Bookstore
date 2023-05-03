import { useSelector } from 'react-redux';

import './books.css';
import Book from './Book';
import AddBook from './AddBook';
import Author from './Author';

const Books = () => {
  const { books } = useSelector((state) => state.book);

  return (
    <div>
      {books.length > 0 ? (
        books.map((book) => <Book key={book.id} book={book} books={books} />)
      ) : (
        <p>Loading</p>
      )}
      <div className="book-add">
        <AddBook />
        <Author />
      </div>
    </div>
  );
};

export default Books;
