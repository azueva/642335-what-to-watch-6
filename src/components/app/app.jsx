import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';

const App = (props) => {
  const {movieTitle, movieGenre, releaseYear} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main
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
          render={({match}) =>
            !isNaN(parseInt(match.params.id, 10)) ?
              <Film
                movieId={match.params.id}
              /> :
              <NotFound />
          }
        />

        <Route exact path="/films/:id/review"
          render={({match}) =>
            !isNaN(parseInt(match.params.id, 10)) ?
              <AddReview
                movieId={match.params.id}
              /> :
              <NotFound />
          }
        />

        <Route exact path="/player/:id"
          render={({match}) =>
            !isNaN(parseInt(match.params.id, 10)) ?
              <Player
                movieId={match.params.id}
              /> :
              <NotFound />
          }
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
