import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import MovieProp from "../../props/movie.prop";
import Header from "../header/header";
import MovieBannerButtonList from "../movie-banner-button-list/movie-banner-button-list";
import AddReviewButton from "../buttons/add-review-button/add-review-button";

const MovieBanner = (props) => {
  const {film} = props;
  const {id, name, posterImage, backgroundImage, backgroundColor, genre = ``, released, isFavorite} = film;
  const tabsList = props.children;

  return (
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

            <MovieBannerButtonList id={id} isFavorite={isFavorite}>

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

          {tabsList}

        </div>
      </div>
    </section>

  );
};

MovieBanner.propTypes = {
  film: MovieProp.isRequired,
  children: PropTypes.node,
};

const mapStateToProps = ({DATA}) => ({
  film: DATA.film,
});

export {MovieBanner};
export default connect(mapStateToProps)(MovieBanner);
