import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import {AppRoute} from "../../../const";


const Logo = (props) => {
  const {modificator = ``} = props;

  return (
    <div className="logo">
      <Link to={AppRoute.ROOT} className={`logo__link ${modificator}`} >
        <span className="logo__letter logo__letter--1">W</span>
        <span className="logo__letter logo__letter--2">T</span>
        <span className="logo__letter logo__letter--3">W</span>
      </Link>
    </div>
  );
};


Logo.propTypes = {
  modificator: PropTypes.string,
};

export default Logo;
