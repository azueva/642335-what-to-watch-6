import React from 'react';
import {Link} from 'react-router-dom';
import Header from '../../blocks/header/header';
import Footer from '../../blocks/footer/footer';

const NotFound = () => {

  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
        isShowUser={false}
      >
        <h1 className="page-title user-page__title">404. Page not found</h1>
      </Header>

      <div className="page__content">
        <Link to="/">
          <p>Вернуться на главную</p>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default NotFound;
