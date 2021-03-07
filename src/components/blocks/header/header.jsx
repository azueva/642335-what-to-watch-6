import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {ActionCreator} from '../../../store/action';
import Logo from "../logo/logo";
import {AuthorizationStatus, ApiPaths} from "../../../const";


const Header = (props) => {
  const {modificator = ``, isShowUserBlock = true, authorizationStatus} = props;
  const {onAvatarClick} = props;

  return (
    <header className={`page-header ${modificator}`}>
      <Logo />
      {props.children}

      {isShowUserBlock && (
        <div className="user-block">

          {authorizationStatus === AuthorizationStatus.AUTH ? (
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"
                onClick={onAvatarClick}
              />
            </div>
          ) : <Link to={ApiPaths.LOGIN} className="user-block__link">Sign in</Link>
          }

        </div>
      )}
    </header>
  );
};

Header.propTypes = {
  modificator: PropTypes.string,
  isShowUserBlock: PropTypes.bool,
  children: PropTypes.node,
  authorizationStatus: PropTypes.string.isRequired,
  onAvatarClick: PropTypes.func,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


const mapDispatchToProps = (dispatch) => ({
  onAvatarClick() {
    dispatch(ActionCreator.redirectToRoute(`/mylist`));
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
