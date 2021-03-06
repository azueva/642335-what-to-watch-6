import React from "react";
import {Link} from "react-router-dom";
import MovieProp from '../../props/movie.prop';
import Header from '../../blocks/header/header';
import CommentForm from '../../blocks/comment-form/comment-form';

const AddReview = (props) => {
  const {film} = props;
  const {id, name, posterImage, backgroundImage, backgroundColor, rating} = film;
  const {redirectToPath, redirectToPrevPage} = props;

  return (
    <section className="movie-card movie-card--full"
      style={({backgroundColor})}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header
          onAvatarClick={redirectToPath}
        >
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/films/${id}`} className="breadcrumbs__link">{name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to="#" className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={posterImage} alt={`${name} poster`} width="218" height="327" />
        </div>
      </div>

      <div className="add-review">
        <CommentForm
          rating={rating}
          redirectToPrevPage={redirectToPrevPage}
        />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: MovieProp.isRequired,
  redirectToPath: MovieProp.func,
  redirectToPrevPage: MovieProp.func,
};

export default AddReview;
