import React, { useState, useEffect, useRef } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import Button from "./Button";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { get } from "lodash-es";

import {
  setBookmarked,
  removeUnbookmarked,
} from "../../../redux-state/bookmark/reducer";
import { getCharacter } from "../../../redux-state/characters/action";

const CardImage = styled.div.attrs((props) => ({
  style: {
    backgroundImage: `url(${props.image})`,
  },
}))`
  height: 80%;
  width: 100%;
  border-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardControls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

const CharacterCard = ({ image, name, characterId, setShowModal }) => {
  const listOfBookamrked = useSelector((state) =>
    get(state, "bookmarkedCharacterIds.bookmarkedCharacterIds")
  );
  const isInitiallyBookmarked = listOfBookamrked.includes(
    characterId.toString()
  );
  const listOfFetchedCharacters = useSelector((state) =>
    Object.keys(get(state, "characters.characters"))
  );
  const shouldFetch = !listOfFetchedCharacters.includes(characterId);
  
  const [isBookmarked, setIsBookmarked] = useState(isInitiallyBookmarked);

  const dispatch = useDispatch();
  const didMount = useRef(false);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  const detailsHandler = () => {
    setShowModal(true);
  };

  useEffect(() => {
    if (didMount.current) {
      if (isBookmarked) {
        dispatch(setBookmarked(characterId));
      } else {
        dispatch(removeUnbookmarked(characterId));
      }
    } else {
      didMount.current = true;
    }
  }, [isBookmarked]);



  return (
    <>
      <CardImage image={image} />
      <div className="characterName">{name}</div>
      <CardControls>
        <div onClick={handleBookmark}>
          {isBookmarked ? <IoHeart size={20} /> : <IoHeartOutline size={20} />}
        </div>
        <Button onClick={detailsHandler}>Details</Button>
      </CardControls>
    </>
  );
};

export default CharacterCard;
