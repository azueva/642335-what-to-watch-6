import React from 'react';
import {Switch, Route, Router as BrowserRouter} from 'react-router-dom';
import browserHistory from "../../browser-history";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import MovieProp from '../props/movie.prop';
import {AppRoute} from "../../const";
import {getFilmById} from "../../utils";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>

        <Route exact path={AppRoute.LOGIN}>
          <SignIn />
        </Route>

        <PrivateRoute exact
          path={AppRoute.FAVORITES}
          render={() => <MyList />}
        />

        <Route exact path={`${AppRoute.FILM}/:id`}
          render={({match}) => {
            const filmId = match.params.id;
            return (
              <Film
                filmId={parseInt(filmId, 10)}
                films={films}
              />);
          }}
        />

        <PrivateRoute exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_COMMENT}`}
          render={({match, history}) => {
            const filmId = match.params.id;
            return (
              <AddReview
                filmId={parseInt(filmId, 10)}
                redirectToPrevPage={history.goBack}
              />);
          }}
        />

        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={({match, history}) => {
            const film = getFilmById(match.params.id, films);
            return film ?
              <Player
                id={film.id}
                name={film.name}
                videoLink={film.videoLink}
                runTime={film.runTime}
                redirectToPrevPage={history.goBack}
              /> :
              <NotFound />;
          }}
        />

        <Route exact path={AppRoute.NOT_FOUND}>
          <NotFound />
        </Route>

        <Route>
          <NotFound />
        </Route>

      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
};


const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps)(App);
