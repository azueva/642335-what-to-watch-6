import React from 'react';
import PropTypes from 'prop-types';
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

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
};

export default App;
