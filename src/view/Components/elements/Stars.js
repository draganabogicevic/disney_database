import { get } from "lodash-es";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeRate,
  saveRatedToLs,
  setRate,
} from "../../../redux-state/rate/reducer";
import Button from "./Button";

const Stars = ({ characterId, characterName }) => {
  const prevRate = useSelector((state) =>
    get(state, `ratedCharacters.rateCharacters[${characterId}].rating`)
  );

  const [rating, setRating] = useState(prevRate);
  const [hover, setHover] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setRate({ id: characterId, rating: rating }));
    dispatch(saveRatedToLs());
  }, [rating]);

  return (
    <div className="star-rating">
      <p className="rateText">Rate the {characterName}:</p>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            id="buttonForRate"
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span
              className="star"
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
            >
              &#9733;
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Stars;
