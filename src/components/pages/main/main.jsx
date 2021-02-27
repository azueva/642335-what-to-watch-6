import React, {useEffect} from "react";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import PropTypes from 'prop-types';
import GenresList from '../../blocks/genres-list/genres-list';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import MovieProp from '../../props/movie.prop';
import {MOVIES_LIST_SIZE} from "../../../const";
import {getFilmsByGenre} from "../../../store/selectors";


const Main = (props) => {
  const {films, promo} = props;
  const {id, name, posterImage, backgroundImage, genre, released} = promo;
  const history = useHistory();

  const handlePlayBtnClick = () => {
    history.push(`/player/${id}`);
  };

  return (
    <React.Fragment>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <MoviesList
            films={films}
            listSize={MOVIES_LIST_SIZE}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Main.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  promo: MovieProp,
  resetPage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  films: getFilmsByGenre(state.genre, state.films),
});

export {Main};
export default connect(mapStateToProps, null)(Main);
