import React from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Main from '../pages/main/main';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import MovieProp from '../props/movie.prop';
import {getFilmById} from "../../utils";

const App = (props) => {
  const {films} = props;

  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/mylist">
          <MyList />
        </Route>

        <Route exact path="/films/:id"
          render={({match}) => {
            const film = getFilmById(match.params.id, films);
            return film ?
              <Film
                film={film}
                films={films}
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
};


const mapStateToProps = (state) => ({
  films: state.films,
});

export {MyList};
export default connect(mapStateToProps, null)(App);
