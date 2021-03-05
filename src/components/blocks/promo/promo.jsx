import React from "react";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import Header from '../header/header';

const Promo = (props) => {
  const {promo} = props;
  const {name, posterImage, backgroundImage, genre, released} = promo;
  const headerButtonsList = props.children;

  return (
    <section className="movie-card"
    >
      <div className="movie-card__bg">
        <img src={backgroundImage} alt={name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <Header
        modificator="movie-card__head"
      />

      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <h2 className="movie-card__title">{name}</h2>
            <p className="movie-card__meta">
              <span className="movie-card__genre">{genre}</span>
              <span className="movie-card__year">{released}</span>
            </p>

            {headerButtonsList}

          </div>
        </div>
      </div>
    </section>
  );
};

Promo.propTypes = {
  promo: MovieProp,
  children: PropTypes.node,
};

export default Promo;
