export const ActionType = {
  GET_MOVIES: `getMovies`,
  CHANGE_GENRE: `changeGenre`,
  RESET_GENRE: `resetGenre`,
};

export const ActionCreator = {
  getMovies: () => ({
    type: ActionType.GET_MOVIES,
  }),

  changeGenre: (payload) => ({
    type: ActionType.CHANGE_GENRE,
    payload,
  }),

  resetGenre: () => ({
    type: ActionType.RESET_GENRE,
  })
};
