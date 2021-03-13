import React from "react";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../../store/action';
import {addToFavorite, removeToFavorite} from "../../../../store/api-action";
import PropTypes from 'prop-types';
import {AuthorizationStatus, AppRoute, FavoriteStatus} from "../../../../const";

const AddToFavoriteButton = (props) => {
  const {id, authorizationStatus, setFavorite, redirectToRoute} = props;
  const isInFavorite = false;

  const handleAddToFavoriteBtnClick = () => {
    if (authorizationStatus === AuthorizationStatus.NO_AUTH) {
      redirectToRoute(AppRoute.FAVORITES);
    }
    setFavorite(id, FavoriteStatus.ON);
  };

  return (
    <button className="btn btn--list movie-card__button" type="button"
      onClick={handleAddToFavoriteBtnClick}
    >
      {isInFavorite ?
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
  setFavorite: PropTypes.func.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  },

  setFavorite(id, status) {
    switch (status) {
      case FavoriteStatus.ON:
        dispatch(addToFavorite(id));
        break;
      case FavoriteStatus.OFF:
        dispatch(removeToFavorite(id));
    }
  },
});

export {AddToFavoriteButton};
export default connect(mapStateToProps, mapDispatchToProps)(AddToFavoriteButton);
