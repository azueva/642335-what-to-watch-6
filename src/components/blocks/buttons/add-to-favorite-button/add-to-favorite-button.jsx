import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../../store/action";
import {setFavoritePromo, setFavoriteFilm} from "../../../../store/api-action";
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from "../../../../const";

const AddToFavoriteButton = (props) => {
  const {id, isFavorite, authorizationStatus, setFavorite, redirectToRoute} = props;
  const {isPromo = false} = props;

  const handleAddToFavoriteBtnClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      redirectToRoute(AppRoute.FAVORITES);
    }
    setFavorite(id, !isFavorite, isPromo);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={handleAddToFavoriteBtnClick}
    >
      {isFavorite ?
        (
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
        ) :
        (
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>
        )}
      <span>My list</span>
    </button>
  );
};

AddToFavoriteButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
  isPromo: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  },

  setFavorite(id, status, isPromo) {
    if (isPromo) {
      dispatch(setFavoritePromo(id, status));
    } else {
      dispatch(setFavoriteFilm(id, status));
    }
  },
});

export {AddToFavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteButton);
