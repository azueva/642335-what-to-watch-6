import React from "react";
import PropTypes from 'prop-types';
import ReviewProp from '../../../props/review.prop';
import {formatDateToString} from "../../../../utils";

const getReviewMarkup = (review) => {
  const {id, user, rating, comment, date} = review;

  return (
    <div className="review"
      key={`${id} ${user.id} ${date}`}
      style={{
        borderColor: `rgba(255, 255, 255, 0.1)`
      }}
    >
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>

        <footer className="review__details">
          <cite className="review__author">{user.name}</cite>
          <time className="review__date" dateTime={date}>{formatDateToString(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
};

const MovieReviews = ({reviews}) => {
  const columnLength = Math.ceil(reviews.length / 2);

  return (
    <div className="movie-card__reviews movie-card__row">

      <div className="movie-card__reviews-col">
        {reviews.slice(0, columnLength).map(getReviewMarkup)}
      </div>

      <div className="movie-card__reviews-col">
        {reviews.slice(columnLength).map(getReviewMarkup)}
      </div>
    </div>
  );
};

MovieReviews.propTypes = {
  reviews: PropTypes.arrayOf(ReviewProp).isRequired,
};

export default MovieReviews;
