import React from "react";
import PropTypes from "prop-types";
import PlayButton from "../buttons/play-button/play-button";
import AddToFavoriteButton from "../buttons/add-to-favorite-button/add-to-favorite-button";

const MovieBannerButtonList = (props) => {
  const {id, isFavorite, isPromo = false} = props;

  return (
    <div className="movie-card__buttons">

      <PlayButton id={id} />

      <AddToFavoriteButton
        id={id}
        isFavorite={isFavorite}
        isPromo={isPromo}
      />

      {props.children}

    </div>
  );
};

MovieBannerButtonList.propTypes = {
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isPromo: PropTypes.bool,
  children: PropTypes.node,
};

export default MovieBannerButtonList;
