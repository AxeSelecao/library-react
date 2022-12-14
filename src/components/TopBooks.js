import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link, Navigate } from "react-router-dom";

import "../components/general.css";

export const TopBooks = () => {
  const booksReducer = useSelector((state) => state.books.booksArray);
  const [filteredBooks, setFilteredBooks] = useState(booksReducer);

  filteredBooks.sort((a, b) => b.avgRating - a.avgRating);

  const [categories, setCategories] = useState([
    "Classic",
    "Detective",
    "History",
    "Story",
    "Fantastic",
  ]);

  const [genre, setGenre] = useState(categories[0]);
  let count = 0;

  let authorsArr = [];

  booksReducer.map((book) => {
    authorsArr.push(book.author);
    book.name.toLowerCase();
    book.author.toLowerCase();
    book.genre.toLowerCase();
    book.text.toLowerCase();
  });

  const [authors, setAuthors] = useState(authorsArr);

  const [author, setAuthor] = useState(authors[0]);

  return (
    <div className="top-books">
      <div className="top-books-container">
        <h2>Top 10 books:</h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (index < 10) {
              return (
                <div className="book-card">
                  <h2 className="book-title display">{book.name}</h2>
                  <h2 className="display">{book.author}</h2>
                  <div className="book-card-det">
                    <Link className="book-card-link" to={`/${book.id}`}>
                      <h2 className="book-title">Details</h2>
                    </Link>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <h2>
          Top 10
          <select className="select" onChange={(e) => setGenre(e.target.value)}>
            {categories.map((category) => {
              return <option value={category}>{category}</option>;
            })}
          </select>
          books:
        </h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (book.genre == genre) {
              count++;
              if (count < 11) {
                return (
                  <div className="book-card">
                    <h2 className="book-title display">{book.name}</h2>
                    <h2 className="display">{book.author}</h2>
                    <div className="book-card-det">
                      <Link className="book-card-link" to={`/${book.id}`}>
                        <h2 className="book-title">Details</h2>
                      </Link>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
        <h2>
          Top 3
          <select
            className="select"
            onChange={(e) => setAuthor(e.target.value)}
          >
            {authors.map((author) => {
              return <option value={author}>{author}</option>;
            })}
          </select>
          books:
        </h2>
        <div className="books-container">
          {filteredBooks.map((book, index) => {
            if (book.author == author) {
              count++;
              if (count < 11) {
                return (
                  <div className="book-card">
                    <h2 className="book-title display">{book.name}</h2>
                    <h2 className="display">{book.author}</h2>
                    <div className="book-card-det">
                      <Link className="book-card-link" to={`/${book.id}`}>
                        <h2 className="book-title">Details</h2>
                      </Link>
                    </div>
                  </div>
                );
              }
            }
          })}
        </div>
      </div>
    </div>
  );
};
