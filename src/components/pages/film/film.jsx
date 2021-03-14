import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovie, fetchComments, fetchMovies} from "../../../store/api-action";
import PropTypes from "prop-types";
import MovieProp from "../../props/movie.prop";
import ReviewProp from "../../props/review.prop";
import MoviesList from "../../blocks/movies-list/movies-list";
import Footer from "../../blocks/footer/footer";
import MovieBanner from "../../blocks/movie-banner/movie-banner";
import Tabs from "../../blocks/tabs/tabs";
import LoadingScreen from "../loading-screen/loading-screen";
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

  return (
    <React.Fragment>

      <MovieBanner film={film}>
        <Tabs
          film={film}
          reviews={reviews}
        />
      </MovieBanner>

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
