import React, {useEffect} from "react";
import {Switch, Route, Router as BrowserRouter} from "react-router-dom";
import browserHistory from "../../browser-history";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import PrivateRoute from "../private-route/private-route";
import {fetchMovies, fetchPromo} from "../../store/api-action";
import LoadingScreen from "../pages/loading-screen/loading-screen";
import Main from "../pages/main/main";
import SignIn from "../pages/sign-in/sign-in";
import MyList from "../pages/my-list/my-list";
import Film from "../pages/film/film";
import AddReview from "../pages/add-review/add-review";
import Player from "../pages/player/player";
import NotFound from "../pages/not-found/not-found";
import MovieProp from "../props/movie.prop";
import {AppRoute} from "../../const";

const App = (props) => {
  const {loadMovies, loadPromo, isDataLoaded} = props;

  useEffect(() => {
    if (!isDataLoaded.promo) {
      loadPromo();
    }
    if (!isDataLoaded.films) {
      loadMovies();
    }
  }, [isDataLoaded]);

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>

        <Route exact path={AppRoute.ROOT}
          render={() => {
            if (!isDataLoaded.films || !isDataLoaded.promo) {
              return <LoadingScreen />;
            }
            return <Main />;
          }}
        />

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
                id={parseInt(filmId, 10)}
              />);
          }}
        />

        <PrivateRoute exact path={`${AppRoute.FILM}/:id${AppRoute.ADD_COMMENT}`}
          render={({match}) => {
            const filmId = match.params.id;
            return (
              <AddReview
                filmId={parseInt(filmId, 10)}
              />);
          }}
        />

        <Route exact path={`${AppRoute.PLAYER}/:id`}
          render={({match, history}) => {
            // const film = getFilmById(match.params.id, films);
            const filmId = parseInt(match.params.id, 10);
            return filmId ?
              <Player
                id={filmId}
                // name={film.name}
                // videoLink={film.videoLink}
                // runTime={film.runTime}
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
  loadMovies: PropTypes.func,
  loadPromo: PropTypes.func,
  isDataLoaded: PropTypes.object,
};


const mapStateToProps = ({DATA}) => ({
  isDataLoaded: DATA.isDataLoaded,
});

const mapDispatchToProps = (dispatch) => ({
  loadMovies() {
    dispatch(fetchMovies());
  },
  loadPromo() {
    dispatch(fetchPromo());
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
