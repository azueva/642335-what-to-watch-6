import React, {useState} from 'react';
import PropTypes from "prop-types";
// import MovieProp from '../components/props/movie.prop';
import ShowMore from "../components/blocks/show-more/show-more";

export const withShowMore = (Component) => (props) => {
  const {films, listSize} = props;
  const [shownItems, setShownItems] = useState(listSize);

  const handleShowMoreClick = () => setShownItems((prevShownItem) =>
    prevShownItem + listSize
  );

  return (
    <React.Fragment>

      <Component
        {...props}
        films={films.slice(0, shownItems)}
        listSize={shownItems}
      >
      </ Component>

      {shownItems < films.length && <ShowMore onClick={handleShowMoreClick} />}

    </React.Fragment>
  );
};

// withShowMore.propTypes = {
//   films: PropTypes.arrayOf(MovieProp),
//   listSize: PropTypes.number.isRequired,
// };

export default withShowMore;
