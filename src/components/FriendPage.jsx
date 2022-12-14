import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { addMyBook } from "../redux/actions";
import { deleteFriendBook } from "../redux/actions";

export const FriendPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const friendReducer = useSelector((state) => state.books.friendsArray);
  const { name, books, img, age } = friendReducer[id - 1];
  const addMyBookClick = (event, key) => {
    books[key].friendID = +id;
    dispatch(addMyBook(books[key]));
    dispatch(deleteFriendBook(books[key]));
  };
  return (
    <div className="friend-page">
      <div className="friend-card">
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={require(`../assets/avatars/${img}.jpg`)} alt="" />
          <div>
            <h1>{name}</h1>
            <h2>{age} years old</h2>
          </div>
        </div>
      </div>
      <div className="friends-books-block">
        <h1>{name}'s Books</h1>
        <div className="friends-books-list">
          {books.map((book, index) => {
            return (
              <div className="book-card">
                <h2 className="book-title display">{book.name}</h2>
                <h2 className="display">{book.author}</h2>
                <div className="book-card-det">
                  <Link className="book-card-link" to={`/${book.id}`}>
                    <h2 className="book-title">Details</h2>
                  </Link>
                  <h2
                    onClick={(event) => addMyBookClick(event, index)}
                    key={index}
                  >
                    Add to me
                  </h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
