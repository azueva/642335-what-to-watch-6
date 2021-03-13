import React from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import {ALL_GENRES, GENRES_LIST_SIZE, AppRoute} from "../../../const";

const createGenreList = (summaryItem, filmsList) => [summaryItem]
  .concat([...new Set(filmsList.map((film) => film.genre))].sort());

const GenresList = (props) => {
  const {activeGenre, films, onGenreItemClick} = props;
  const genres = createGenreList(ALL_GENRES, films)
    .slice(0, GENRES_LIST_SIZE);

  return (
    <ul className="catalog__genres-list">
      {
        genres.map((genre) =>
          (
            <li
              className={`catalog__genres-item ${activeGenre === genre
                ? `catalog__genres-item--active` : ``}`}
              key={genre}
              onClick={() => onGenreItemClick(genre)}
            >
              <Link to={AppRoute.ROOT} className="catalog__genres-link">{genre}</Link>
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
    dispatch(ActionCreator.changeGenre(genre));
  },
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
