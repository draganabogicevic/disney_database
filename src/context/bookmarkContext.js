import { createContext } from "react";

const BookmarkContext = createContext({
  bookmarkedCharacters: [],
  onSelectHandler: () => {},
});

export default BookmarkContext;
