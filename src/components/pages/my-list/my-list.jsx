import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import MoviesList from '../../blocks/movies-list/movies-list';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';
import MovieProp from '../../props/movie.prop';
import {MOVIES_LIST_SIZE} from "../../../const";

const MyList = ({films}) => {

  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <MoviesList
          films={films.filter((film) => film.isFavorite)}
          listSize={MOVIES_LIST_SIZE}
        />
      </section>

      <Footer />
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
};

const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(MyList);
