import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import { toast } from 'react-toastify';

const Book = (book) => {
  const addToBookshelf = () => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.find(item => item.id === book.id)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
      toast.success(`${book.title} was added to your bookshelf!`);
    } else {
      toast.info(`${book.title} is already in your bookshelf.`);
    }
  };
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src = {book.cover_img} alt = "cover" />
      </div>
      <div className='book-item-info text-center'>
        <Link to = {`/book/${book.id}`} {...book}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{book.title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          <span>{book.author.join(", ")}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{book.edition_count}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{book.first_publish_year}</span>
        </div>

        <button onClick={addToBookshelf} className='btn btn-primary'>
          Add to Bookshelf
        </button>
      </div>
    </div>
  )
}

export default Book