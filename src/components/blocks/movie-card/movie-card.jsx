import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';

const MovieCard = ({film, onHover}) => {
  const {id, name, previewImage} = film;
  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={() => {
        onHover(film.id);
      }}
      onMouseLeave={() => {
        onHover(null);
      }}
    >
      <div className="small-movie-card__image">
        <img
          src={previewImage}
          alt={name}
          width="280" height="175"
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: MovieProp.isRequired,
  onHover: PropTypes.func.isRequired,
};
export default MovieCard;
