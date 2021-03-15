import {ActionCreator} from "./action";
import {AppRoute, APIRoute, AuthorizationStatus, FavoriteStatus} from "../const";
import {adapter} from "../utils";

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data.map(adapter.rawToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(APIRoute.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(adapter.rawToFilm(data))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data.map(adapter.rawToComment))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(APIRoute.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then((response) => dispatch(ActionCreator.getUserInfo(response.data)))
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)))
);

export const fetchMovie = (id) => (dispatch, _getState, api) => (
  api.get(`${APIRoute.FILMS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadMovie(adapter.rawToFilm(data))))
    .then((data) => {
      const currentFilm = data.payload;
      return dispatch(ActionCreator.changeGenre(currentFilm.genre));
    })
    .then(() => dispatch(fetchComments(id)))
    .catch(() => dispatch(ActionCreator.redirectToRoute(AppRoute.NOT_FOUND)))
);

export const uploadComment = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.COMMENTS}/${id}`, {rating, comment})
    .then((response) => {
      const comments = response.data;
      return dispatch(ActionCreator.loadComments(comments.map(adapter.rawToComment)));
    })
    .then(() => dispatch(ActionCreator.redirectToRoute(`${AppRoute.FILM}/${id}`)))
    .finally(dispatch(ActionCreator.endCommentUpload()))
);

export const setFavoriteFilm = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status ? FavoriteStatus.ON : FavoriteStatus.OFF}`)
  .then(({data}) => dispatch(ActionCreator.loadMovie(adapter.rawToFilm(data))))
);

export const setFavoritePromo = (id, status) => (dispatch, _getState, api) => (
  api.post(`${APIRoute.FAVORITE}/${id}/${status ? FavoriteStatus.ON : FavoriteStatus.OFF}`)
  .then(({data}) => dispatch(ActionCreator.loadPromo(adapter.rawToFilm(data))))
);

export const fetchFavorites = () => (dispatch, _getState, api) => (
  api.get(APIRoute.FAVORITE)
    .then(({data}) => dispatch(ActionCreator.loadFavorites(data.map(adapter.rawToFilm))))
);
