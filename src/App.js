import "./App.css";
import { Layout } from "./components/Layout";
import { AddBookForm } from "./components/AddBookForm";
import { BookPage } from "./components/BookPage";
import { MyBooksPage } from "./components/MyBooksPage";
import { FriendPage } from "./components/FriendPage";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
  NavLink,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const friendsReducer = useSelector((state) => state.books.friendsArray);
  const { id, name, age } = friendsReducer;
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/"
            >
              Library
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/add-book"
            >
              Add book
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "link")}
              to="/my-books"
            >
              My books
            </NavLink>
          </div>
        </header>
        <div className="friends-panel">
          <h2>Booklovers friends</h2>
          {friendsReducer.map((friend, index) => {
            return (
              <NavLink to={`/friend/${friend.id}`}>
                <div className="friend">
                  <img
                    src={require(`./assets/avatars/${friend.img}.jpg`)}
                  ></img>
                  <h3>{friend.name}</h3>
                </div>
              </NavLink>
            );
          })}
        </div>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="/add-book" element={<AddBookForm />} />
          <Route path="/my-books/" element={<MyBooksPage />} />
          <Route path="/:id" element={<BookPage />} />
          <Route path="/friend/:id" element={<FriendPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
