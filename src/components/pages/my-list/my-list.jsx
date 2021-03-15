import React, {useEffect} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {fetchFavorites} from "../../../store/api-action";
import MoviesList from "../../blocks/movies-list/movies-list";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";
import LoadingScreen from "../../pages/loading-screen/loading-screen";
import MovieProp from "../../props/movie.prop";
import {MOVIES_LIST_SIZE} from "../../../const";

const MyList = (props) => {
  const {favorites} = props;
  const {loadFavorites, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded.favorites) {
      loadFavorites();
    }
    return () => {
      isDataLoaded.favorites = false;
    };
  }, [isDataLoaded]);

  if (!isDataLoaded.favorites) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          films={favorites}
          listSize={MOVIES_LIST_SIZE}
        />
      </section>

      <Footer />
    </div>
  );
};


MyList.propTypes = {
  favorites: PropTypes.arrayOf(MovieProp),
  loadFavorites: PropTypes.func,
  isDataLoaded: PropTypes.object,
};

const mapStateToProps = (state) => ({
  favorites: state.favorites,
  isDataLoaded: state.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadFavorites() {
    dispatch(fetchFavorites());
  },
});

export {MyList};
export default connect(mapStateToProps, mapDispatchToProps)(MyList);
