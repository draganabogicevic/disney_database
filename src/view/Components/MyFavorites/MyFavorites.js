import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { get } from "lodash-es";

import CardWrapper from "../elements/CardWrapper";
import Cards from "../elements/Cards";
import { saveBookmarkedToLs } from "../../../redux-state/bookmark/reducer";

const MyFavorites = () => {
  const listOfBookmarked = useSelector((state) =>
    get(state, "bookmarkedCharacterIds.bookmarkedCharacterIds")
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(saveBookmarkedToLs());
  }, [listOfBookmarked]);

  return (
    <CardWrapper>
      {listOfBookmarked.map((id) => (
        <Cards characterId={id} key={id} />
      ))}
    </CardWrapper>
  );
};

export default MyFavorites;
