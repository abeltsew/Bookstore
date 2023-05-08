import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './books.css';
import Book from './Book';
import AddBook from './AddBook';

import { getBooks } from '../features/book/bookSlice';

const Books = () => {
  const { books, isLoading, error } = useSelector((state) => state.book);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (error) {
    return <p>Error on Page</p>;
  }
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} books={books} />
      ))}
      <div className="book-add">
        <AddBook />
      </div>
    </div>
  );
};

export default Books;
