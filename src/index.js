import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Settings = {
  MOVIE_TITLE: `The Grand Budapest Hotel`,
  MOVIE_GENRE: `Drama`,
  RELEASE_YEAR: `2014`,
};

ReactDOM.render(
    <App
      movieTitle={Settings.MOVIE_TITLE}
      movieGenre={Settings.MOVIE_GENRE}
      releaseYear={Settings.RELEASE_YEAR}
    />,
    document.querySelector(`#root`)
);
