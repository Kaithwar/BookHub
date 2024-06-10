// Bookshelf.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Bookshelf = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const savedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(savedBookshelf);
  }, []);
  const removeFromBookshelf = (id) => {
    const updatedBookshelf = bookshelf.filter(book => book.id !== id);
    setBookshelf(updatedBookshelf);
    localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    toast.success(`The book was removed from your bookshelf!`);
  };

  return (
    <section className='bookshelf'>
      <div className='container'>
        <div className='section-title'>
          <h2>My Bookshelf</h2>
        </div>
        <div className='booklist-content grid'>
          {bookshelf.map((book, index) => (
            <div key={index} className='book-item flex flex-column flex-sb'>
              <div className='book-item-img'>
                <img src={book.cover_img} alt='cover' />
              </div>
              <div className='book-item-info text-center'>
                <Link to={`/book/${book.id}`} {...book}>
                  <div className='book-item-info-item title fw-7 fs-18'>
                    <span>{book.title}</span>
                  </div>
                </Link>

                <div className='book-item-info-item author fs-15'>
                  <span className='text-capitalize fw-7'>Author: </span>
                  <span>{book.author.join(', ')}</span>
                </div>

                <div className='book-item-info-item edition-count fs-15'>
                  <span className='text-capitalize fw-7'>Total Editions: </span>
                  <span>{book.edition_count}</span>
                </div>

                <div className='book-item-info-item publish-year fs-15'>
                  <span className='text-capitalize fw-7'>First Publish Year: </span>
                  <span>{book.first_publish_year}</span>
                </div>
                <button onClick={() => removeFromBookshelf(book.id)} className='btn btn-primary'>
                  Remove from Bookshelf
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bookshelf;
