import React from 'react';
import './app.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './ components/navbar';
import BookList from './ components/books/bookList';
import FavoriteList from './ components/favorites/favoriteList';
import AddBook from './ components/addBook/addBook';

const App = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <div className="main__content">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/favorites" element={<FavoriteList />} />
            <Route path="/add-book" element={<AddBook />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
