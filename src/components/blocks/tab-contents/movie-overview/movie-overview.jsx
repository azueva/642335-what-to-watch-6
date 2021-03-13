import React from "react";
import MovieProp from '../../../props/movie.prop';
import {ratingToName} from "../../../../utils";

const MAX_STARRING = 4;

const MovieOverview = ({film}) => {
  const {description, rating, scoresCount, director, starring} = film;

  return (
    <React.Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{ratingToName(rating)}</span>
          <span className="movie-rating__count">
            {scoresCount} rating{scoresCount > 1 ? `s` : ``}
          </span>
        </p>
      </div>

      <div className="movie-card__text">
        {description.map((text, index) => (<p key={index}>{text}</p>))}

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring">
          <strong>
            Starring: {starring.slice(0, MAX_STARRING).join(`, `)}{starring.length > MAX_STARRING ? ` and other` : ``}
          </strong>
        </p>
      </div>
    </React.Fragment>
  );
};

MovieOverview.propTypes = {
  film: MovieProp.isRequired,
};

export default MovieOverview;
