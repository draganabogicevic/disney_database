import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { get } from "lodash-es";

import Modal from "./Modal";
import SmallCard from "./SmallCard";
import placeholder from "../../../assets/jpg/placeholder.jpg";

const Cards = ({ characterId, isSearched = false }) => {
  const [showModal, setShowModal] = useState(false);
  const characterImage = useSelector((state) =>
    get(state, `characters.characters[${characterId}].image`)
  );
  const searchedCharacterImage = useSelector((state) =>
    get(state, `searchedCharacters.searchedCharacters[${characterId}].image`)
  );
  const characterName = useSelector((state) =>
    get(state, `characters.characters[${characterId}].name`)
  );
  const searchedCharacterName = useSelector((state) =>
    get(state, `searchedCharacters.searchedCharacters[${characterId}].name`)
  );

  // const shouldFetch = !characterImage && !characterName;

  // console.log(shouldFetch);

  const nameToDisplay = isSearched ? searchedCharacterName : characterName;
  const imgToDisplay = isSearched ? searchedCharacterImage : characterImage;

  const image = imgToDisplay ? imgToDisplay : placeholder;
  const body = document.querySelector("body");
  showModal
    ? (body.style.pointerEvents = "none")
    : (body.style.pointerEvents = "auto");

  const closeDetailsHandler = () => {
    setShowModal(false);
  };

  return (
    <>
      <SmallCard
        characterId={characterId}
        image={image}
        name={nameToDisplay}
        setShowModal={setShowModal}
      />
      {showModal && (
        <Modal
          closeModal={closeDetailsHandler}
          characterId={characterId}
          characterImage={image}
          characterName={characterName}
        />
      )}
    </>
  );
};

export default Cards;
