import React, { useState } from 'react';
import './addbooks.css';

const AddBook = () => {
  const [title, setTitle] = useState('');

  const handleAdd = () => {};
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
