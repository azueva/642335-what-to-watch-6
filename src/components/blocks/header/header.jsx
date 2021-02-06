import React from "react";
import PropTypes from "prop-types";
import Logo from "../logo/logo";


const Header = (props) => {
  const {modificator = ``, isShowUser = true} = props;

  return (
    <header className={`page-header ${modificator}`}>
      <Logo />
      {props.children}

      {isShowUser && (
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
          </div>
        </div>
      )}
    </header>
  );
};


Header.propTypes = {
  modificator: PropTypes.string,
  isShowUser: PropTypes.bool,
  children: PropTypes.node,
};

export default Header;
