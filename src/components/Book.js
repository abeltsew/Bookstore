import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../features/book/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const random = Math.floor(Math.random() * (100 - 1 + 1) + 1);
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div key={book.item_id} className="book">
      <div>
        <p className="book-category">{book.category}</p>
        <p className="book-title">{book.title}</p>
        <p className="book-author">{book.author}</p>
        <button
          type="button"
          className="book-remove"
          onClick={() => handleDelete(book.item_id)}
        >
          Remove
        </button>
      </div>
      <div className="percentage-completed">
        <div
          className="progress"
          style={{
            transform: `rotate(${random}deg`,
          }}
        >
          .
        </div>
        <p className="percentage">{`${random}%`}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
