import React, { useState, useContext, memo } from "react";
import { IoHeartOutline, IoHeart } from "react-icons/io5";

import Button from "./Button";

import styled from "styled-components";
import placeholder from "../../../assets/jpg/placeholder.jpg";
import BookmarkContext from "../../../context/bookmarkContext";

const Card = styled.div`
  height: 600px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  transition: all ease-in-out 1s;
`;
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

const SingleCharacterCard = (props) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const ctx = useContext(BookmarkContext);

  const image = props.character.image ? props.character.image : placeholder;

  const handleBookmark = () => {
    props.character.toggleBookmark();
    setIsBookmarked(!isBookmarked);
    ctx.onSelectHandler(props.character);
  };

  return (
    <Card className={`card`}>
      <CardImage image={image}></CardImage>
      <div className="characterName">{props.character.name}</div>
      <CardControls>
        <div onClick={handleBookmark}>
          {props.character.bookmarked ? (
            <IoHeart size={20} />
          ) : (
            <IoHeartOutline size={20} />
          )}
        </div>
        <Button>Details</Button>
      </CardControls>
    </Card>
  );
};

export default memo(SingleCharacterCard);
