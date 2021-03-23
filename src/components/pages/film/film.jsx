import React, {useEffect} from "react";
import {connect} from "react-redux";
import {fetchMovie, fetchComments, fetchMovies} from "../../../store/api-action";
import PropTypes from "prop-types";
import MovieProp from "../../props/movie.prop";
import MoviesList from "../../blocks/movies-list/movies-list";
import Footer from "../../blocks/footer/footer";
import MovieBanner from "../../blocks/movie-banner/movie-banner";
import Tabs from "../../blocks/tabs/tabs";
import LoadingScreen from "../loading-screen/loading-screen";
import {getSimilarFilms} from "../../../store/selectors";

const Film = (props) => {
  const {id} = props;
  const {films, loadMovie, isDataLoaded} = props;

  useEffect(() => {
    loadMovie(id);
    return () => {
      isDataLoaded.film = false;
    };
  }, [id]);


  if (!isDataLoaded.film) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>

      <MovieBanner >
        <Tabs />
      </MovieBanner>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList
            films={films}
          />
        </section>

        <Footer />
      </div>
    </React.Fragment>
  );
};

Film.propTypes = {
  id: PropTypes.number.isRequired,
  isDataLoaded: PropTypes.object,
  films: PropTypes.arrayOf(MovieProp).isRequired,
  loadMovie: PropTypes.func,
};

const mapStateToProps = (state) => ({
  films: getSimilarFilms(state),
  isDataLoaded: state.DATA.isDataLoaded,
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
