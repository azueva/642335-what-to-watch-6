import {ActionType} from "../action";

const initialState = {
  isReviewUploading: false,
};

const processReducer = (state = initialState, action) => {
  switch (action.type) {
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
  }
  return state;
};

export {processReducer};
