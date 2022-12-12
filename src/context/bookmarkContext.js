import { createContext } from "react";

const BookmarkContext = createContext({
  bookmarkedCharacters: [],
  onSelectHandler: () => {},
  saveToLocalStorage: () => {},
});

export default BookmarkContext;
