import { Main } from "./Main";
import { TopBooks } from "./TopBooks";
import { BooksGallery } from "./BooksGallery";

export const Layout = () => {
  return (
    <div>
      <Main />
      <TopBooks />
      <BooksGallery />
    </div>
  );
};
