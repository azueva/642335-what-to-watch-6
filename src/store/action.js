import {ALL_GENRES} from "../const";

export const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  LOAD_MOVIES: `LOAD_MOVIES`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
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

  loadPromo: (payload) => ({
    type: ActionType.LOAD_PROMO,
    payload,
  }),

  loadComments: (payload) => ({
    type: ActionType.LOAD_COMMENTS,
    payload,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
};
