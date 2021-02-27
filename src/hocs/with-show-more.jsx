import React, {useState} from 'react';
// import MovieProp from '../components/props/movie.prop';
import ShowMore from "../components/blocks/show-more/show-more";

export const withShowMore = (Component) => {

  const addShowNore = (propsParameters) => {
    const {films, listSize} = propsParameters;
    const [shownItems, setShownItems] = useState(listSize);

    const handleShowMoreClick = () => setShownItems((prevShownItem) =>
      prevShownItem + listSize
    );

    return (
      <React.Fragment>

        <Component
          {...propsParameters}
          films={films.slice(0, shownItems)}
          listSize={shownItems}
        >
        </ Component>

        {shownItems < films.length && <ShowMore onClick={handleShowMoreClick} />}

      </React.Fragment>
    );
  };

  return addShowNore;
};

export default withShowMore;
