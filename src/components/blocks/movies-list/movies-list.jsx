import React, {useState} from "react";
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import MovieCard from "../../blocks/movie-card/movie-card";

const MoviesList = (props) => {
  const {films, listSize, checkShowedAll = () => {}} = props;
  const [activeMovieCardId, setActiveMovieCardId] = useState(null);

  const handleMovieCardHover = (id) => {
    setActiveMovieCardId(id);
    return activeMovieCardId;
  };

  checkShowedAll(films.length <= listSize);

  return (
    <div className="catalog__movies-list">
      {
        films.slice(0, listSize).map((film) =>
          (
            <MovieCard
              key={film.id}
              film={film}
              onHover={handleMovieCardHover}
            />
          )
        )
      }
    </div>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  listSize: PropTypes.number,
  checkShowedAll: PropTypes.func,
};

export default MoviesList;
