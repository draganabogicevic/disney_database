import { useContext } from "react";
import BookmarkContext from "../../../context/bookmarkContext";
import CardWrapper from "../elements/CardWrapper";
import CharacterCard from "../elements/CharacterCard";

const MyFavorites = () => {
  const { bookmarkedCharacters } = useContext(BookmarkContext);
  return (
    <CardWrapper>
      {bookmarkedCharacters.map((c) => (
        <CharacterCard character={c} key={c.id} />
      ))}
    </CardWrapper>
  );
};

export default MyFavorites;
