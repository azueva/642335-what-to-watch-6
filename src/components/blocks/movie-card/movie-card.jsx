import React from "react";
import {Link, useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';

const MovieCard = ({film, onHover}) => {
  const {id, name, previewImage} = film;
  const history = useHistory();

  const handleMouseEnter = () => {
    onHover(id);
  };

  const handleMouseLeave = () => {
    onHover(null);
  };

  const handleCardClick = () => {
    history.push(`/films/${id}`);
  };

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image"
        onClick={handleCardClick}
      >
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
