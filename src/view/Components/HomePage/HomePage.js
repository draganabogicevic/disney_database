import React, { useEffect, useState, memo, useContext } from "react";
import { fetchAllCharacters } from "../../../service/api";
import {
  IoChevronUpCircleOutline,
  IoChevronBackCircleOutline,
  IoChevronForwardCircleOutline,
} from "react-icons/io5";

import Character from "../../../entities/Character";
import CharacterCard from "../elements/CharacterCard";
import styled from "styled-components";

const CardWrapper = styled.div`
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  padding: 50px 0;
  @media (max-width: 370px) {
    width: 180px;
    margin: auto;
  }
`;

const ControlPrev = styled.div`
  position: fixed;
  top: 50%;
  left: 10px;
  z-index: 10;
  transform: translate(0%, -50%);
  padding-right: 10px;
  @media (min-width: 1000px) {
    left: 50px;
  }
`;
const ControlNext = styled.div`
  position: fixed;
  top: 50%;
  right: 10px;
  z-index: 10;
  transform: translate(0%, -50%);
  padding-left: 10px;
  @media (min-width: 1000px) {
    right: 50px;
  }
`;

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const pageToDisplay = page.toString();
    fetchAllCharacters(pageToDisplay).then((data) => {
      const dataToSave = data.map((c) => new Character(c));
      setCharacters(dataToSave);
    });
  }, [page]);

  const buttonPrevHandler = () => {
    setPage((prev) => prev - 1);
    if (page <= 1) {
      setPage(1);
    }
  };
  const buttonNextHandler = () => {
    setPage((prev) => prev + 1);
    if (page >= 149) {
      setPage(149);
    }
    return page;
  };

  const arrowHandler = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <>
      <ControlPrev>
        <IoChevronBackCircleOutline
          onClick={buttonPrevHandler}
          className="arrowBack"
        />
      </ControlPrev>
      <ControlNext>
        <IoChevronForwardCircleOutline
          onClick={buttonNextHandler}
          className="arrowForward"
        />
      </ControlNext>
      <CardWrapper>
        {characters.map((c) => (
          <CharacterCard character={c} key={c.id} />
        ))}
      </CardWrapper>
      <div className="arrowUp">
        <IoChevronUpCircleOutline onClick={arrowHandler} size={40} />
      </div>
    </>
  );
};

export default memo(HomePage);
