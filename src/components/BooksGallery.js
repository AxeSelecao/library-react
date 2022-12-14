import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addMyBook } from "../redux/actions";
import { deleteBook } from "../redux/actions";
import "../components/general.css";

export const BooksGallery = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [search, setSearch] = useState(false);
  const [searchByAuthor, setSearchByAuthor] = useState(false);
  const [searchByGenre, setSearchByGenre] = useState(false);
  const [showAll, setShowAll] = useState(true);

  const [searchObject, setSearchObject] = useState({});

  const onSearch = () => {
    setSearch(true);
    setSearchByAuthor(false);
    setSearchByGenre(false);
    setShowAll(false);
    console.log(searchObject);
  };
  const onSearchByAuthor = () => {
    setSearch(false);
    setSearchByAuthor(true);
    setSearchByGenre(false);
    setShowAll(false);
  };
  const onSearchByGenre = () => {
    setSearch(false);
    setSearchByAuthor(false);
    setSearchByGenre(true);
    setShowAll(false);
  };
  const onShowAll = () => {
    setSearch(false);
    setSearchByAuthor(false);
    setSearchByGenre(false);
    setShowAll(true);
  };

  const dispatch = useDispatch();
  const booksReducer = useSelector((state) => state.books.booksArray);
  const { id, name, author } = booksReducer;

  let authorsArr = [];

  booksReducer.map((book) => {
    authorsArr.push(book.author);
    book.name.toLowerCase();
    book.author.toLowerCase();
    book.genre.toLowerCase();
    book.text.toLowerCase();
  });

  const addMyBookClick = (event, key) => {
    dispatch(addMyBook(booksReducer[key]));
    dispatch(deleteBook(booksReducer[key]));
  };

  //  const deleteBookClick = (event, key) => {
  //    dispatch(deleteBook(booksReducer[key]));
  //  };
  const [filteredBooks, setFilteredBooks] = useState(booksReducer);

  const [authors, setAuthors] = useState(authorsArr);

  const [categories, setCategories] = useState([
    "Classic",
    "Detective",
    "History",
    "Story",
    "Fantastic",
  ]);
  return (
    <div className="books-gallery">
      <div className="books-block">
        <h1>All library's books</h1>
        <form
          onSubmit={handleSubmit((data) => {
            console.log("data ", data);
            data.searchInput.toLowerCase();
            setSearchObject(data);
            console.log("searchObject ", searchObject);
          })}
        >
          <h2>Search:</h2>
          <div className="form-block">
            <input type="text" {...register("searchInput")} />
            <button onClick={onSearch}>Search</button>
          </div>
          <div className="form-block">
            <select {...register("author")}>
              {authors.map((author) => {
                return <option value={author}>{author}</option>;
              })}
            </select>
            <button onClick={onSearchByAuthor}>Search by author</button>
          </div>
          <div className="form-block">
            <select {...register("genre")}>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            <button onClick={onSearchByGenre}>Search by genre</button>
          </div>
          <button type="button" onClick={onShowAll}>
            Show all
          </button>
        </form>

        <div className="books-container">
          {search
            ? filteredBooks.map((book, index) => {
                if (
                  book.name.includes(searchObject.searchInput) ||
                  book.author.includes(searchObject.searchInput) ||
                  book.genre.includes(searchObject.searchInput) ||
                  book.publishedYear.includes(searchObject.searchInput)
                ) {
                  return (
                    <Link to={`${book.id}`}>
                      <div className="book-card">
                        <h2 className="book-title">{book.name}</h2>
                        <h2>{book.author}</h2>
                      </div>
                    </Link>
                  );
                }
              })
            : ""}
          {showAll
            ? booksReducer.map((book, index) => {
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
              })
            : ""}
          {searchByAuthor
            ? filteredBooks.map((book, index) => {
                if (searchObject.author == book.author) {
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
                }
              })
            : ""}
          {searchByGenre
            ? filteredBooks.map((book, index) => {
                if (searchObject.genre == book.genre) {
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
                }
              })
            : ""}
        </div>
      </div>
    </div>
  );
};
