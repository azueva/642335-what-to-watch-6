import {ALL_GENRES} from "../const";

export const ActionType = {
  GET_ALL_MOVIES: `GET_ALL_MOVIES`,
  CHANGE_GENRE: `CHANGE_GENRE`,
};

export const ActionCreator = {
  getAllMovies: () => ({
    type: ActionType.GET_ALL_MOVIES,
  }),

  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.CHANGE_GENRE,
    payload: ALL_GENRES,
  })
};
