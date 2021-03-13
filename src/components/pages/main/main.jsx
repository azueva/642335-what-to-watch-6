import React, {useEffect} from "react";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import {fetchMovies, fetchPromo} from "../../../store/api-action";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import GenresList from '../../blocks/genres-list/genres-list';
import MoviesList from '../../blocks/movies-list/movies-list';
import Promo from '../../blocks/promo/promo';
import MovieBannerButtonList from '../../blocks/movie-banner-button-list/movie-banner-button-list';
import Footer from '../../blocks/footer/footer';
import LoadingScreen from '../loading-screen/loading-screen';
import {MOVIES_LIST_SIZE} from "../../../const";
import {getFilmsByGenre} from "../../../store/selectors";

const Main = (props) => {
  const {films = [], promo, loadMovies, loadPromo, resetPage, isDataLoaded} = props;

  useEffect(() => {
    /* componentDidMount */
    resetPage();
  }, []);

  useEffect(() => {
    if (!isDataLoaded.promo) {
      loadPromo();
    }
    if (!isDataLoaded.films) {
      loadMovies();
    }
  }, [isDataLoaded]);

  if (!isDataLoaded.films) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <React.Fragment>
      <Promo
        promo={promo}
      >
        <MovieBannerButtonList
          id={promo.id}
        />

      </Promo>

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
  loadMovies: PropTypes.func,
  loadPromo: PropTypes.func,
  isDataLoaded: PropTypes.object,
};

const mapStateToProps = (state) => ({
  activeGenre: state.genre,
  isDataLoaded: state.isDataLoaded,
  films: getFilmsByGenre(state.genre, state.films),
  promo: state.promo,
});

const mapDispatchToProps = (dispatch) => ({
  resetPage() {
    dispatch(ActionCreator.resetGenre());
  },
  loadMovies() {
    dispatch(fetchMovies());
  },
  loadPromo() {
    dispatch(fetchPromo());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
