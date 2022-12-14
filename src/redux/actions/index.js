export const appendBook = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "APPEND_BOOK",
      payload: {
        data,
        message: `Book was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addToAllBook = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "ADD_TO_ALL_BOOK",
      payload: {
        data,
        message: `Book was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
export const addMyBook = (data) => (dispatch, getState) => {
  try {
    // console.log(data);
    dispatch({
      type: "ADD_MY_BOOK",
      payload: {
        data,
        message: `Book was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateName = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "UPDATE_NAME",
      payload: {
        data,
        message: `Book changes name to ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const updateAvgRating = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "UPDATE_AVG_RATING",
      payload: {
        data,
        message: `Avg rating updated ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addReview = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "ADD_REVIEW",
      payload: {
        data,
        message: `Review was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const addRate = (data) => (dispatch, getState) => {
  try {
    console.log(data);
    dispatch({
      type: "ADD_RATE",
      payload: {
        data,
        message: `Rate was added ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};

export const deleteMyBook = (data) => (dispatch, getState) => {
  try {
    dispatch({
      type: "DELETE_MY_BOOK",
      payload: {
        data,
        message: `Book was deleted ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
export const deleteBook = (data) => (dispatch, getState) => {
  try {
    dispatch({
      type: "DELETE_BOOK",
      payload: {
        data,
        message: `Book was deleted ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
export const deleteFriendBook = (data) => (dispatch, getState) => {
  console.log(data);

  try {
    dispatch({
      type: "DELETE_FRIEND_BOOK",
      payload: {
        data,
        message: `Book was deleted ${data.name}`,
      },
    });
  } catch (error) {
    console.log("error ", error);
  }
};
