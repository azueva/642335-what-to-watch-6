import React, {useState} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import {ALL_GENRES} from "../../../const";

const GenresList = (props) => {
  const {activeGenre, films, onGenreItemClick} = props;

  const [genres] = useState([...new Set(films.map((film) => film.genre))].sort());

  return (
    <ul className="catalog__genres-list">
      <li
        className={`catalog__genres-item ${!activeGenre ? `catalog__genres-item--active` : ``}`}
        key={ALL_GENRES}
        onClick={() => onGenreItemClick(ALL_GENRES)}
      >
        <Link to="/" className="catalog__genres-link">{ALL_GENRES}</Link>
      </li>
      {
        genres.map((genre) =>
          (
            <li
              className={`catalog__genres-item ${activeGenre === genre
                ? `catalog__genres-item--active` : ``}`}
              key={genre}
              onClick={() => onGenreItemClick(genre)}
            >
              <Link to="/" className="catalog__genres-link">{genre}</Link>
            </li>
          )
        )
      }
    </ul>
  );
};

GenresList.propTypes = {
  activeGenre: PropTypes.string,
  films: PropTypes.arrayOf(MovieProp),
  onGenreItemClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  films: state.films,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    if (genre === ALL_GENRES) {
      dispatch(ActionCreator.resetGenre());
    } else {
      dispatch(ActionCreator.changeGenre(genre));
    }
    dispatch(ActionCreator.getMovies());
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
