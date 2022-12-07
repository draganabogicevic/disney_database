import { useState, useEffect } from "react";
import BookmarkContext from "./bookmarkContext";

const getDataFromLs = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("favoriteCharacters"));

  return dataFromLs;
};

getDataFromLs();
const BookmarkContextProvider = (props) => {
  const prevBookmarkedCharacters = getDataFromLs();
  console.log("prev", prevBookmarkedCharacters);
  const [bookmarkedCharacters, setBookmarkedCharacters] = useState([
    ...prevBookmarkedCharacters,
  ]);

  const onSelectHandler = (character) => {
    setBookmarkedCharacters(() => {
      console.log(character.bookmarked);
      return character.bookmarked
        ? [character, ...bookmarkedCharacters]
        : bookmarkedCharacters.filter((item) => item.id !== character.id);
    });
  };

  console.log(bookmarkedCharacters);

  const saveToLocalStorage = (selectedCharacters) => {
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(selectedCharacters)
    );
  };

  useEffect(() => {
    saveToLocalStorage(bookmarkedCharacters);
  }, [bookmarkedCharacters]);

  const contextValue = {
    bookmarkedCharacters,
    onSelectHandler,
  };

  return (
    <BookmarkContext.Provider value={contextValue}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
