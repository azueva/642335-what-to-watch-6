import {ActionType} from './action';
import films from "../mocks/films";

const initialState = {
  genre: null,
  films,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_MOVIES:
      return {
        ...state,
        films: initialState.films
      };

    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }
  return state;
};

export {reducer};
