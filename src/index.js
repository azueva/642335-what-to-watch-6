import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import films from "./mocks/films";
import reviews from "./mocks/reviews";

ReactDOM.render(
    <App
      films={films}
      reviews={reviews}
    />,
    document.querySelector(`#root`)
);
