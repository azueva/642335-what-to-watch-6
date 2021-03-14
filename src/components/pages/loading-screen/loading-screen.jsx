import React from "react";
import Header from "../../blocks/header/header";
import Footer from "../../blocks/footer/footer";

const LoadingScreen = () => {

  return (
    <div className="user-page">
      <Header
        modificator="user-page__head"
        isShowUserBlock={false}
      >
        <h1 className="page-title user-page__title">Loading ...</h1>
      </Header>

      <Footer />
    </div>
  );
};

export default LoadingScreen;
