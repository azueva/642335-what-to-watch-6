import React, {useEffect} from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../store/action";
import PropTypes from "prop-types";
import MovieProp from "../../props/movie.prop";
import GenresList from "../../blocks/genres-list/genres-list";
import MoviesList from "../../blocks/movies-list/movies-list";
import Promo from "../../blocks/promo/promo";
import Footer from "../../blocks/footer/footer";
import {MOVIES_LIST_SIZE} from "../../../const";
import {getFilmsByGenre} from "../../../store/selectors";

const Main = (props) => {
  const {films = [], promo, resetPage} = props;

  useEffect(() => {
    resetPage();
  }, []);

  return (
    <React.Fragment>

      <Promo promo={promo} />

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
  activeGenre: state.GENRE.genre,
  films: getFilmsByGenre(state),
  promo: state.DATA.promo,
});

const mapDispatchToProps = (dispatch) => ({
  resetPage() {
    dispatch(ActionCreator.resetGenre());
  },
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
