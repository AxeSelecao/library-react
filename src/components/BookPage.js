import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "../redux/actions";
import { addReview } from "../redux/actions";
import { addRate } from "../redux/actions";
import { updateAvgRating } from "../redux/actions";
import { useForm } from "react-hook-form";
import ReactStars from "react-rating-stars-component";

export const BookPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const booksReducer = useSelector((state) => state.books.allBooksArray);
  console.log(booksReducer);
  console.log(booksReducer[id - 1]);
  const {
    name,
    author,
    genre,
    publishedYear,
    text,
    viewCount,
    avgRating,
    grades,
    reviews,
  } = booksReducer[id - 1];
  if (id != booksReducer[id - 1].id) {
    window.location.reload();
  }

  const [isEdit, setIsEdit] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onEdit = () => {
    setIsEdit(!isEdit);
  };

  const [categories, setCategories] = useState([
    "Classic",
    "Detective",
    "History",
    "Story",
    "Fantastic",
  ]);

  let rate = 0;

  const [isRated, setIsRated] = useState(false);

  const onChange = (rating) => {
    dispatch(addRate({ id: id - 1, rating: rating }));
    console.log(grades);
    setIsRated(true);
    if (grades.length != 0) {
      grades.map((grade) => {
        rate += grade;
      });
      rate /= grades.length;
      rate = Math.round(rate);
      console.log("avg rate ", rate);
      dispatch(updateAvgRating({ id: id - 1, avgRating: rate }));
    }
  };

  return (
    <div className="book-page">
      <div className="book-page-container">
        {avgRating != null ? (
          <div>
            <h2>★{avgRating}</h2>
          </div>
        ) : (
          ""
        )}

        <button className="edit" onClick={onEdit}>
          Edit
        </button>
        {isEdit ? (
          <form
            onSubmit={handleSubmit((data) => {
              console.log(data);
              data.id = id - 1;
              dispatch(updateName(data));
              setIsEdit(false);
            })}
          >
            <h1>{name}</h1>
            <input type="text" defaultValue={name} {...register("name")} />
            <h1>{author}</h1>
            <input type="text" defaultValue={author} {...register("author")} />
            <h2>Genre: {genre}</h2>
            <select defaultValue={genre} {...register("genre")}>
              {categories.map((category) => {
                return <option value={category}>{category}</option>;
              })}
            </select>
            <h3>Published year: {publishedYear}</h3>
            <input
              type="text"
              defaultValue={publishedYear}
              {...register("publishedYear")}
            />
            <h3>Text: </h3>
            <textarea type="text" defaultValue={text} {...register("text")} />
            <button>Save changes</button>
          </form>
        ) : (
          <div>
            <h1>{name}</h1>
            <h1>{author}</h1>
            <h2>Genre: {genre}</h2>
            <h3>Published year: {publishedYear}</h3>
          </div>
        )}
      </div>

      <div className="book-page-text">
        <p
          style={{
            textDecoration: "underline",
            color: "#cebb53",
          }}
        >
          {text}
        </p>
      </div>

      <div className="book-reviews">
        {!isRated ? (
          <div>
            <h1>Please, rate the book from 1 to 5</h1>
            <ReactStars className="react-stars" size={30} onChange={onChange} />
          </div>
        ) : (
          <h1 style={{ textDecoration: "underline" }}>Thanks for rating!</h1>
        )}
      </div>

      <div className="book-reviews">
        <form
          onSubmit={handleSubmit((data) => {
            data.id = id - 1;
            console.log(data);
            dispatch(addReview(data));
          })}
        >
          <h2>Name:</h2>
          <input
            type="text"
            {...register("author", { required: "Please enter your name" })}
          />
          <h2>Text</h2>
          <input
            type="text"
            {...register("text", { required: "Please enter a text" })}
          />
          <button>Add a review</button>
        </form>
        {reviews.map((review) => {
          return (
            <div className="review">
              <h3
                style={{
                  textDecoration: "underline",
                  textTransform: "capitalize",
                }}
              >
                {review.author}
              </h3>
              <p style={{ textAlign: "left" }}>{review.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
