import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import MainPage from '../main-page/main-page';
import SignIn from '../sign-in/sign-in';
import MyList from '../my-list/my-list';
import Film from '../film/film';
import AddReview from '../add-review/add-review';
import Player from '../player/player';
import NotFound from '../not-found/not-found';

const App = (props) => {
  const {movieTitle, movieGenre, releaseYear} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <MainPage
            movieTitle={movieTitle}
            movieGenre={movieGenre}
            releaseYear={releaseYear}
          />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList />
        </Route>

        <Route exact path="/films/:id"
          render={({match}) => (
            <Film
              movieId={match.params.id}
            />
          )}
        />

        <Route exact path="/films/:id/review"
          render={({match}) => (
            <AddReview
              movieId={match.params.id}
            />
          )}
        />

        <Route exact path="/player/:id"
          render={({match}) => (
            <Player
              movieId={match.params.id}
            />
          )}
        />

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  movieTitle: PropTypes.string.isRequired,
  movieGenre: PropTypes.string.isRequired,
  releaseYear: PropTypes.string.isRequired,
};

export default App;
