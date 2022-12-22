import { useState, useEffect, useMemo, useCallback } from "react";

import BookmarkContext from "./bookmarkContext";

const getDataFromLs = () => {
  try {
    const dataFromLs = JSON.parse(localStorage.getItem("favoriteCharacters"));
    console.log(dataFromLs);
    const prevBookmarkedCharacterIds = dataFromLs ? dataFromLs : [];
    return prevBookmarkedCharacterIds;
  } catch (err) {
    console.log(err);
  }
};

const BookmarkContextProvider = (props) => {
  const prevBookmarkedCharacterIds = getDataFromLs();
  const [bookmarkedCharactersIds, setBookmarkedCharactersIds] = useState([
    ...prevBookmarkedCharacterIds,
  ]);

  const onSelectHandler = useCallback((character) => {
    if (character.bookmarked) {
      setBookmarkedCharactersIds((prevBookmarked) => [
        ...prevBookmarked,
        character.id,
      ]);
    } else {
      setBookmarkedCharactersIds((prevBookmarked) =>
        prevBookmarked.filter((item) => item.id !== character)
      );
    }
  }, []);

  const saveToLocalStorage = useCallback((selectedCharacters) => {
    localStorage.setItem(
      "favoriteCharacters",
      JSON.stringify(selectedCharacters)
    );
  }, []);

  const contextValue = useMemo(
    () => ({
      bookmarkedCharactersIds,
      setBookmarkedCharactersIds,
      onSelectHandler,
      saveToLocalStorage,
    }),
    [bookmarkedCharactersIds, onSelectHandler, saveToLocalStorage]
  );

  useEffect(() => {
    saveToLocalStorage(bookmarkedCharactersIds);
  }, [bookmarkedCharactersIds]);

  return (
    <BookmarkContext.Provider value={contextValue}>
      {props.children}
    </BookmarkContext.Provider>
  );
};

export default BookmarkContextProvider;
