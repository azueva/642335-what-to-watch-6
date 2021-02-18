import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";
import Logo from "../logo/logo";


const Header = (props) => {
  const {modificator = ``, isShowUser = true} = props;
  const history = useHistory();

  const handleAvatarClick = () => {
    history.push(`/mylist`);
  };

  return (
    <header className={`page-header ${modificator}`}>
      <Logo />
      {props.children}

      {isShowUser && (
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"
              onClick={handleAvatarClick}
            />
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
