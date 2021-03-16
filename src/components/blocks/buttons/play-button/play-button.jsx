import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../../../store/action";
import PropTypes from "prop-types";

const PlayButton = (props) => {
  const {id, redirectToRoute} = props;

  const handlePlayBtnClick = () => {
    redirectToRoute(`/player/${id}`);
  };

  return (
    <button className="btn btn--play movie-card__button" type="button"
      onClick={handlePlayBtnClick}
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
};

PlayButton.propTypes = {
  id: PropTypes.number.isRequired,
  redirectToRoute: PropTypes.func.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  redirectToRoute(path) {
    dispatch(ActionCreator.redirectToRoute(path));
  },
});

export {PlayButton};
export default connect(mapStateToProps, mapDispatchToProps)(PlayButton);
