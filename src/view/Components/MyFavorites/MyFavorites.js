import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash-es";
import CardWrapper from "../elements/CardWrapper";
import Cards from "../elements/Cards";
import SingleCard from "../elements/SingleCard";
import { saveBookmarkedToLs } from "../../../redux-state/bookmark/reducer";
import NoBookmarked from "../elements/NoBookmarked";
// import { getCharacter } from "../../../redux-state/character/action";

const MyFavorites = () => {
  const listOfBookmarked = useSelector((state) =>
    get(state, "bookmarkedCharacterIds.bookmarkedCharacterIds")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveBookmarkedToLs());
  }, [listOfBookmarked]);

  return (
    <div className="favWrapper">
      <CardWrapper>
        {listOfBookmarked.length > 1 ? (
          listOfBookmarked.map((id) => <Cards characterId={id} key={id} />)
        ) : listOfBookmarked.length === 0 ? (
          <NoBookmarked />
        ) : (
          <SingleCard characterId={listOfBookmarked[0]} />
        )}
      </CardWrapper>
    </div>
  );
};

export default MyFavorites;
