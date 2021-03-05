import {ActionType} from './action';
import {ALL_GENRES} from "../const";

const initialState = {
  genre: ALL_GENRES,
  films: [],
  promo: {},
  isDataLoaded: {films: false, promo: false},
  reviews: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };

    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: {...state.isDataLoaded, films: true}
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
        isDataLoaded: {...state.isDataLoaded, promo: true}
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
      };
  }
  return state;
};

export {reducer};
