import React, {useState} from 'react';
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import ShowMore from "../components/blocks/show-more/show-more";

export const withShowMore = (Component) => {

  const addShowMore = (propsParameters) => {
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

  addShowMore.propTypes = {
    films: PropTypes.arrayOf(MovieProp),
    listSize: PropTypes.number.isRequired,
  };

  return addShowMore;
};

export default withShowMore;
