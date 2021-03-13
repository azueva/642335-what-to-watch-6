import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {fetchMovie, fetchComments, fetchMovies} from "../../../store/api-action";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import ReviewProp from '../../props/review.prop';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import Tabs from '../../blocks/tabs/tabs';
import MovieBannerButtonList from '../../blocks/movie-banner-button-list/movie-banner-button-list';
import AddReviewButton from '../../blocks/add-review-button/add-review-button';
import LoadingScreen from '../loading-screen/loading-screen';
import {EXTRA_MOVIES_LIST_SIZE} from "../../../const";
import {getFilmsByGenre} from "../../../store/selectors";

const Film = (props) => {
  const {filmId, films, reviews, film, loadMovie, isDataLoaded} = props;

  useEffect(() => {
    loadMovie(filmId);
    return () => {
      isDataLoaded.film = false;
    };
  }, [filmId]);

  if (!isDataLoaded.film) {
    return (
      <LoadingScreen />
    );
  }

  const {id, name, posterImage, backgroundImage, backgroundColor, genre = ``, released} = film;

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

              <MovieBannerButtonList id={id}>

                <AddReviewButton id={id} />

              </MovieBannerButtonList>


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
            films={films.filter((el) => el.id !== +filmId)
            .slice(0, EXTRA_MOVIES_LIST_SIZE)}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  filmId: PropTypes.number,
  isDataLoaded: PropTypes.object,
  films: PropTypes.arrayOf(MovieProp).isRequired,
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
  film: MovieProp.isRequired,
  loadMovie: PropTypes.func,
};

const mapStateToProps = (state) => ({
  film: state.film,
  reviews: state.reviews,
  films: getFilmsByGenre(state.genre, state.films),
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(movieId) {
    dispatch(fetchComments(movieId));
  },
  loadMovie(movieId) {
    dispatch(fetchMovie(movieId));
  },
  loadMovies() {
    dispatch(fetchMovies());
  },
});

export {Film};
export default connect(mapStateToProps, mapDispatchToProps)(Film);
