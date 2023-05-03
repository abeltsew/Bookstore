import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './addbooks.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../features/book/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addBook({
        item_id: uuidv4(),
        title,
        author,
        categoty: 'Unknown',
      }),
    );
  };

  return (
    <div className="add-form">
      <p>Add A New Book</p>
      <form className="form-el">
        <input
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Book title"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button
          type="button"
          onClick={() => {
            handleAdd();
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
