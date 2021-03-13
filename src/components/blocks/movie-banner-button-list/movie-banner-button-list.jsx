import React from "react";
import PropTypes from 'prop-types';
import PlayButton from "../buttons/play-button/play-button";
import AddToFavoriteButton from "../buttons/add-to-favorite-button/add-to-favorite-button";

const MovieBannerButtonList = (props) => {
  const {id} = props;

  return (
    <div className="movie-card__buttons">

      <PlayButton id={id} />

      <AddToFavoriteButton id={id} />

      {props.children}

    </div>
  );
};

MovieBannerButtonList.propTypes = {
  id: PropTypes.number.isRequired,
  children: PropTypes.node,
};

export default MovieBannerButtonList;
