import React from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import TabsList from '../../blocks/tabs-list/tabs-list';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import {joinComponents, formatMinToHours} from "../../../utils";
import {EXTRA_MOVIES_LIST_SIZE} from "../../../const";

const Film = ({film, films}) => {
  const {id, name, posterImage, backgroundImage, backgroundColor, director,
    starring, runTime, genre, released} = film;

  return (
    <React.Fragment>
      <section className="movie-card movie-card--full"
        style={({backgroundColor})}
      >
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={backgroundImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header
            modificator="movie-card__head"
          />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>

                <Link className="btn movie-card__button" to={`/films/${id}/review`}>
                  Add review
                </Link>

              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={posterImage} alt={`${name} poster`} swidth="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <TabsList />

              <div className="movie-card__text movie-card__row">
                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Director</strong>
                    <span className="movie-card__details-value">{director}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Starring</strong>
                    <span className="movie-card__details-value">
                      {joinComponents(starring, `,`, <br/>)}
                    </span>
                  </p>
                </div>

                <div className="movie-card__text-col">
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Run Time</strong>
                    <span className="movie-card__details-value">{formatMinToHours(runTime)}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Genre</strong>
                    <span className="movie-card__details-value">{genre}</span>
                  </p>
                  <p className="movie-card__details-item">
                    <strong className="movie-card__details-name">Released</strong>
                    <span className="movie-card__details-value">{released}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={films.filter((el) => el.genre === genre).slice(0, EXTRA_MOVIES_LIST_SIZE)}
            listSize={EXTRA_MOVIES_LIST_SIZE}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  films: PropTypes.arrayOf(MovieProp).isRequired,
  film: MovieProp.isRequired,
};

export default Film;
