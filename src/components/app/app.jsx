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
import MovieProp from '../props/movie.prop';
import ReviewProp from '../props/review.prop';
import {getRandomArrayItem, getFilmById} from "../../utils";

const App = (props) => {
  const {films, reviews} = props;
  const promo = getRandomArrayItem(films);

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main
            films={films}
            reviews={reviews}
            promo={promo}
          />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList
            films={films}
          />
        </Route>

        <Route exact path="/films/:id"
          render={({match}) => {
            const film = getFilmById(match.params.id, films);
            return film ?
              <Film
                film={film}
                films={films}
                reviews={reviews}
              /> :
              <NotFound />;
          }}
        />

        <Route exact path="/films/:id/review"
          render={({match}) => {
            const film = getFilmById(match.params.id, films);
            return film ?
              <AddReview
                film={film}
              /> :
              <NotFound />;
          }}
        />

        <Route exact path="/player/:id"
          render={({match}) => {
            const film = getFilmById(match.params.id, films);
            return film ?
              <Player
                id={film.id}
                name={film.name}
                videoLink={film.videoLink}
                runTime={film.runTime}
              /> :
              <NotFound />;
          }}
        />

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  reviews: PropTypes.arrayOf(ReviewProp),
};

export default App;
