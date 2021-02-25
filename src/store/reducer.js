import {ActionType} from './action';
// import {FIRST_GAME_STEP} from '../const';

const initialState = {
  genre: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_MOVIES:
      return {
        ...state,
      };
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.RESET_FILTER:
      return {
        ...initialState,
      };
  }

  return state;
};


export {reducer};
