/* eslint-disable react/prop-types */
import React from 'react';
import MainPage from '../main-page/main-page';

const App = (props) => {
  const {movieTitle, movieGenre, releaseYear} = props;
  return (
    <MainPage
      movieTitle={movieTitle}
      movieGenre={movieGenre}
      releaseYear={releaseYear}
    />
  );
};

export default App;
