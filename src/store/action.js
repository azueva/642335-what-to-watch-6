import {ALL_GENRES} from "../const";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_MOVIE: `LOAD_MOVIE`,
  START_COMMENT_UPLOAD: `START_COMMENT_UPLOAD`,
  END_COMMENT_UPLOAD: `END_COMMENT_UPLOAD`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  GET_USER_INFO: `GET_USER_INFO`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};

export const ActionCreator = {
  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: ALL_GENRES,
  }),

  loadMovies: (payload) => ({
    type: ActionType.LOAD_MOVIES,
    payload,
  }),

  loadMovie: (payload) => ({
    type: ActionType.LOAD_MOVIE,
    payload,
  }),

  loadPromo: (payload) => ({
    type: ActionType.LOAD_PROMO,
    payload,
  }),

  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),

  startCommentUpload: () => ({
    type: ActionType.START_COMMENT_UPLOAD,
  }),

  endCommentUpload: () => ({
    type: ActionType.END_COMMENT_UPLOAD,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),

  getUserInfo: (userInfo) => ({
    type: ActionType.GET_USER_INFO,
    payload: userInfo,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: url,
  }),
};
