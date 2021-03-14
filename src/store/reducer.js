import {ActionType} from "./action";
import {ALL_GENRES, AuthorizationStatus} from "../const";

const initialState = {
  genre: ALL_GENRES,
  films: [],
  promo: {},
  film: {},
  isDataLoaded: {films: false, promo: false, film: false},
  isReviewUploading: false,
  reviews: [],
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  user: null,
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

    case ActionType.LOAD_MOVIE:
      return {
        ...state,
        film: action.payload,
        isDataLoaded: {...state.isDataLoaded, film: true}
      };

    case ActionType.START_COMMENT_UPLOAD:
      return {
        ...state,
        isReviewUploading: true,
      };

    case ActionType.END_COMMENT_UPLOAD:
      return {
        ...state,
        isReviewUploading: false,
      };

    case ActionType.LOAD_COMMENTS:
      return {
        ...state,
        reviews: action.payload,
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.GET_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
  }
  return state;
};

export {reducer};
