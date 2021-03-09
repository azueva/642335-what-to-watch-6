import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import {fetchMovie, uploadComment} from "../../../store/api-action";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import Header from '../../blocks/header/header';
import CommentForm from '../../blocks/comment-form/comment-form';
import LoadingScreen from '../loading-screen/loading-screen';
import {AppRoute} from "../../../const";

const AddReview = (props) => {
  const {filmId, film, loadMovie, writeComment, isDataLoaded} = props;

  const {redirectToPrevPage} = props;

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

  const {id, name, posterImage, backgroundImage, backgroundColor, rating} = film;

  const postComment = (commentPost) => {
    writeComment(filmId, commentPost);
  };

  return (
    <section className="movie-card movie-card--full"
      style={({backgroundColor})}
    >
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={backgroundImage} alt={name} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`${AppRoute.FILM}/${id}`} className="breadcrumbs__link">{name}</Link>
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
          postComment={postComment}
        />
      </div>
    </section>
  );
};

AddReview.propTypes = {
  film: MovieProp,
  isDataLoaded: PropTypes.object,
  filmId: PropTypes.number.isRequired,
  loadMovie: PropTypes.func,
  writeComment: PropTypes.func,
  redirectToPrevPage: PropTypes.func,
};

const mapStateToProps = (state) => ({
  film: state.film,
  isDataLoaded: state.isDataLoaded,
});


const mapDispatchToProps = (dispatch) => ({
  writeComment(movieId, commentPost) {
    dispatch(uploadComment(movieId, commentPost));
  },
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  },
  loadMovie(movieId) {
    dispatch(fetchMovie(movieId));
  },
});

export {AddReview};
export default connect(mapStateToProps, mapDispatchToProps)(AddReview);
