import React from "react";
import MovieCard from '../../blocks/movie-card/movie-card';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';

const MOVIES_COUNT = 9;

const MyList = () => {

  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
      />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__movies-list">
          {new Array(MOVIES_COUNT).fill(``).map((el, i) => <MovieCard key={i} />)}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
