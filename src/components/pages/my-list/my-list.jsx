import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import MovieProp from '../../props/movie.prop';
import {MOVIES_LIST_SIZE} from "../../../const";

const MyList = (props) => {
  const {films} = props;
  const {redirectToPath} = props;
  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
        onAvatarClick={redirectToPath}
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          films={films.filter((film) => film.isFavorite)}
          listSize={MOVIES_LIST_SIZE}
          redirectToPath={redirectToPath}
        />
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  redirectToPath: PropTypes.func,
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
