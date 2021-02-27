export const ActionType = {
  GET_ALL_MOVIES: `getAllMovies`,
  CHANGE_GENRE: `changeGenre`,
  RESET_GENRE: `resetGenre`,
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
    payload: null,
  })
};
