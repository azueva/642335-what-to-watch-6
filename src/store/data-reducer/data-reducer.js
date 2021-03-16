import {ActionType} from "../action";

const initialState = {
  films: [],
  promo: {},
  film: {},
  favorites: [],
  reviews: [],

  isDataLoaded: {
    films: false,
    promo: false,
    film: false,
    favorites: false
  },
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_MOVIES:
      return {
        ...state,
        films: action.payload,
        isDataLoaded: {...state.isDataLoaded, films: true}
      };

    case ActionType.LOAD_FAVORITES:
      return {
        ...state,
        favorites: action.payload,
        isDataLoaded: {...state.isDataLoaded, favorites: true}
      };

    case ActionType.LOAD_PROMO:
      return {
        ...state,
        promo: action.payload,
        isDataLoaded: {...state.isDataLoaded, promo: true}
      };

    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        film: action.payload,
        isDataLoaded: {...state.isDataLoaded, film: true}
      };
    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
      };
  }
  return state;
};

export {dataReducer};
