
# BOOKHUB
BookHub is a web application where users can search for books and save their favorite ones to their personal bookshelf using local storage.


## Getting Started

### 1) Clone the Repository

```bash
  git clone git@github.com:Kaithwar/BookHub.git
```
### 1) Install

```bash
  npm install
  npm run start
```

### 2) Requirements

```bash
  npm install react-router-dom
  npm install react-toastify

```
We use react-router-dom for routing between pages and react-toastify for displaying notifications.

After installing of all the libraries you can run the application.
    
## Project Overview

BookHub consists of several key sections: a search form, a book list, book details, and a personal bookshelf. Users can search for books, view book details, add books to their bookshelf, and remove books from their bookshelf.

## Features:

- **Search Books:** Users can search for books by title or author. The results are limited to the first 10 books for better performance.
- **Book Details:** View detailed information about a selected book.
- **Add and Remove options:** Users can add and remove books from the search results to their personal bookshelf.
- **Persistent Storage:** The bookshelf is stored in local storage, so it persists across sessions.


## Technologies Used:

- **React Router:** For client-side routing.
- **API Integration:** Utilized an API to fetch and populate event data.
- **React Toastify:** For displaying toast notifications.
- **Local Storage API:** For persisting the user's bookshelf.

## Conclusion:
BookHub provides a user-friendly interface for searching books and managing a personal bookshelf. With its persistent storage and toast notifications, it offers a seamless experience for book lovers.