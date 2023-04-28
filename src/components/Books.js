import React, { useEffect, useState } from 'react';
import './books.css';
import Book from './Book';
import AddBook from './AddBook';
import Author from './Author';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    setBooks([
      { id: 1, title: 'Lord of the Rings' },
      { id: 2, title: 'Fifty Shades of Gray' },
      { id: 3, title: 'The silent patient' },
    ]);
  }, []);

  return (
    <div>
      <h1 className="books-title"> Books</h1>
      {books.length > 0 ? (
        books.map((book) => (
          <Book key={book.id} book={book} setBooks={setBooks} books={books} />
        ))
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
