import React, {useState} from "react";
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import MovieCard from "../movie-card/movie-card";
import ShowMore from "../show-more/show-more";

const MoviesList = (props) => {
  const {films, listSize = films.length} = props;
  const [activeMovieCardId, setActiveMovieCardId] = useState(null);
  const [shownItems, setShownItems] = useState(listSize);
  const {redirectToPath} = props;

  const handleMovieCardHover = (id) => {
    setActiveMovieCardId(id);
    return activeMovieCardId;
  };

  const handleShowMoreClick = () => setShownItems((prevShownItem) =>
    prevShownItem + listSize
  );

  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {
          films.slice(0, shownItems).map((film) =>
            (
              <MovieCard
                key={film.id}
                film={film}
                onHover={handleMovieCardHover}
                redirectToPath={redirectToPath}
              />
            )
          )
        }
      </div>

      {shownItems < films.length && <ShowMore onClick={handleShowMoreClick} />}
    </React.Fragment>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  listSize: PropTypes.number,
  redirectToPath: PropTypes.func,
};

export default MoviesList;
