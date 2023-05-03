import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../features/book/bookSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div key={book.item_id} className="book">
      <p>{book.title}</p>
      <button
        type="button"
        className="book-remove"
        onClick={() => handleDelete(book.item_id)}
      >
        Remove
      </button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string,
  }).isRequired,
};

export default Book;
