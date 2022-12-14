import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteMyBook } from "../redux/actions";
import { appendBook } from "../redux/actions";

import "../components/general.css";

export const MyBooksPage = () => {
  const dispatch = useDispatch();
  const booksReducer = useSelector((state) => state.books.mybooksArray);
  const { id, name, author } = booksReducer;
  console.log(booksReducer);
  const deleteBookClick = (event, key) => {
    dispatch(deleteMyBook(booksReducer[key]));
    dispatch(appendBook(booksReducer[key]));
  };
  return (
    <div className="my-books-page">
      <h1 style={{ paddingTop: 130 }}>All Of My Books</h1>
      <div
        className="books-block"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap",
          minHeight: 300,
        }}
      >
        {booksReducer.map((book, index) => {
          return (
            <div className="book-card">
              <h2 className="book-title display">{book.name}</h2>
              <h2 className="display">{book.author}</h2>
              <div className="book-card-det">
                <Link className="book-card-link" to={`/${book.id}`}>
                  <h2 className="book-title">Details</h2>
                </Link>

                <h2
                  onClick={(event) => deleteBookClick(event, index)}
                  className="delete"
                >
                  Delete
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
