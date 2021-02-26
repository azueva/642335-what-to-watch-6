import React, {useState} from "react";
import {connect} from 'react-redux';
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import MovieCard from "../../blocks/movie-card/movie-card";
import ShowMore from "../../blocks/show-more/show-more";

const MoviesList = (props) => {
  const {films, listSize} = props;
  const [activeMovieCardId, setActiveMovieCardId] = useState(null);

  const handleMovieCardHover = (id) => {
    setActiveMovieCardId(id);
    return activeMovieCardId;
  };

  return (
    <React.Fragment>
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

      {(films.length > listSize) && <ShowMore />}

    </React.Fragment>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  listSize: PropTypes.number.isRequired,
};


const mapStateToProps = (state) => ({
  films: state.films,
});

export {MoviesList};
export default connect(mapStateToProps, null)(MoviesList);
