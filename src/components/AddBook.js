import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './addbooks.css';
import { useDispatch } from 'react-redux';
import { addBook, postBook } from '../features/book/bookSlice';

const AddBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    dispatch(
      postBook({
        item_id: uuidv4(),
        title,
        author,
        category: 'Unknown',
      }),
    );
    dispatch(
      addBook({
        item_id: uuidv4(),
        title,
        author,
        category: 'Unknown',
      }),
    );
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-form">
      <p className="add-book-title">Add A New Book</p>
      <form className="form-el">
        <input
          className="book-input"
          type="text"
          placeholder="Book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          className="book-input"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option>Authors</option>
          <option>John Grasham</option>
          <option>Alex maclides</option>
        </select>
        <button
          className="add-book-btn"
          type="submit"
          onClick={(e) => {
            handleAdd(e);
          }}
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
