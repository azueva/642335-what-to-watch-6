import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {AuthorizationStatus, AppRoute} from "../../../../const";

const AddReviewButton = ({id, authorizationStatus}) => {
  const link = `${AppRoute.FILM}/${id}${AppRoute.ADD_COMMENT}`;

  return (
    authorizationStatus === AuthorizationStatus.AUTH &&
      <Link className="btn movie-card__button"
        to={link}>
        Add review
      </Link>
  );
};

AddReviewButton.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {AddReviewButton};
export default connect(mapStateToProps)(AddReviewButton);
