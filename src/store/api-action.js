import {ActionCreator} from "./action";
import {ApiPaths, AuthorizationStatus} from "../const";
import {adapter} from "../utils";

export const fetchMovies = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.FILMS)
    .then(({data}) => dispatch(ActionCreator.loadMovies(data.map(adapter.rawToFilm))))
);

export const fetchPromo = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.PROMO)
    .then(({data}) => dispatch(ActionCreator.loadPromo(adapter.rawToFilm(data))))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`${ApiPaths.COMMENTS}/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data.map(adapter.rawToComment))))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(ApiPaths.LOGIN)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {})
);
