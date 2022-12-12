import { useState, useEffect } from "react";

import BookmarkContext from "./bookmarkContext";

import CharacterFromLs from "../entities/CharacterFromLs";

const getDataFromLs = () => {
  const dataFromLs = JSON.parse(localStorage.getItem("favoriteCharacters"));

  const prevBookmarkedCharacters = dataFromLs
    ? dataFromLs.map((item) => new CharacterFromLs(item))
    : [];

  // const prevBookmarkedCharacters = dataFromLs
  //   ? [dataFromLs.map((item) => new CharacterFromLs(item))]
  //   : [];
  return prevBookmarkedCharacters;
};

getDataFromLs();
const BookmarkContextProvider = (props) => {
  const prevBookmarkedCharacters = getDataFromLs();

  const [bookmarkedCharacters, setBookmarkedCharacters] = useState([
    ...prevBookmarkedCharacters,
  ]);

  const onSelectHandler = (character) => {
    if (character.bookmarked) {
      setBookmarkedCharacters((prevBookmarked) => [
        ...prevBookmarked,
        character,
      ]);
    } else {
      setBookmarkedCharacters((prevBookmarked) =>
        prevBookmarked.filter((item) => item.id !== character.id)
      );
    }
  };

  const saveToLocalStorage = (selectedCharacters) => {
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(selectedCharacters)
    );
  };

  const contextValue = {
    bookmarkedCharacters,
    setBookmarkedCharacters,
    onSelectHandler,
    saveToLocalStorage,
  };

  useEffect(() => {
    saveToLocalStorage(bookmarkedCharacters);
  }, [bookmarkedCharacters]);

  return (
    <BookmarkContext.Provider value={contextValue}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
