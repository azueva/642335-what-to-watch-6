import React from "react";
import {Link, useHistory} from "react-router-dom";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import ReviewProp from '../../props/review.prop';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Tabs from '../../blocks/tabs/tabs';
import {EXTRA_MOVIES_LIST_SIZE} from "../../../const";

const Film = ({film, films, reviews}) => {
  const {id, name, posterImage, backgroundImage, backgroundColor, genre, released} = film;
  const history = useHistory();

  const handlePlayBtnClick = () => {
    history.push(`/player/${id}`);
  };

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
                <button className="btn btn--play movie-card__button" type="button"
                  onClick={handlePlayBtnClick}
                >
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

            <Tabs
              film={film}
              reviews={reviews}
            />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={films.filter((el) => el.genre === genre)}
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
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};

export default Film;
