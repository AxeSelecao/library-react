import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { appendBook } from "../redux/actions";
import { addToAllBook } from "../redux/actions";

export const AddBookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const booksReducer = useSelector((state) => state.books.allBooksArray);
  const { id, name, author } = booksReducer;

  let book = {};

  const dispatch = useDispatch();

  const [categories, setCategories] = useState([
    "Classic",
    "Detective",
    "History",
    "Story",
    "Fantastic",
  ]);

  return (
    <div className="add-book-container">
      <form
        onSubmit={handleSubmit((data) => {
          data.grades = [];
          data.viewCount = 0;
          data.id = booksReducer.length + 1;
          data.reviews = [];
          book = data;
          console.log(book);
          dispatch(appendBook(book));
          dispatch(addToAllBook(book));
        })}
      >
        <p>Name:</p>
        <input
          type="text"
          {...register("name", {
            required: "Please enter name of book",
          })}
        />
        <p>Author:</p>
        <input
          type="text"
          {...register("author", {
            required: "Please enter name of book",
          })}
        />
        <p>Select a genre:</p>
        <select
          {...register("genre", {
            required: "Please select a genre of book",
          })}
        >
          {categories.map((category) => {
            return <option value={category}>{category}</option>;
          })}
        </select>
        <p>Enter a published year:</p>
        <input
          type="text"
          {...register("publishedYear", {
            required: "Please enter published year of book",
          })}
          maxLength={4}
          onKeyPress={(event) => {
            if (!/[0-9]/.test(event.key)) {
              event.preventDefault();
            }
          }}
        />
        <p>Text of book:</p>
        <input
          type="text"
          {...register("text", {
            required: "Please enter published year of book",
          })}
        />
        <br />
        <button type="submit">Add book</button>
      </form>
    </div>
  );
};
