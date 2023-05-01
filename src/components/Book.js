import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, setBooks, books }) => {
  const handleDelete = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div key={book.id} className="book">
      <p>{book.title}</p>
      <button
        type="button"
        className="book-remove"
        onClick={() => handleDelete(book.id)}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  books: PropTypes.arrayOf({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
  setBooks: PropTypes.func.isRequired,
  book: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
  }).isRequired,
};

export default Book;
