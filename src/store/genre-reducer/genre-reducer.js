import {ActionType} from "../action";
import {ALL_GENRES} from "../../const";

const initialState = {
  genre: ALL_GENRES,
};

const genreReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }
  return state;
};

export {genreReducer};
