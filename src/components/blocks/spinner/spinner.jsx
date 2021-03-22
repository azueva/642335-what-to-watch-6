import React from "react";
import PropTypes from "prop-types";
import {joinComponents} from "../../../utils";
import "./spinner.css";

const SPINNER_SECTIONS = 12;
const SPINNER_INNER = Array(SPINNER_SECTIONS)
.fill(``).map((item, index) => (<div key={index}></div>));

const Spinner = (props) => {
  const {fontSize = `1em`} = props;

  return (
    <div className = "spinner"
      style={{fontSize}}
    >
      {joinComponents(SPINNER_INNER)}
    </div>

  );
};

Spinner.propTypes = {
  fontSize: PropTypes.string,
};

export default Spinner;
