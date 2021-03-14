export const ALL_GENRES = `All genres`;
export const GENRES_LIST_SIZE = 9;

export const MOVIES_LIST_SIZE = 8;
export const EXTRA_MOVIES_LIST_SIZE = 4;

export const TabNames = [`Overview`, `Details`, `Reviews`];

export const VIDEO_TIMEOUT = 1000;

export const VideoStatus = {
  ENDED: `ended`,
  ERROR: `error`,
};

export const MAX_RATING = 10;

export const CommentLength = {
  MIN: 50,
  MAX: 400,
};


export const CommentFieldsName = {
  rating: `rating`,
  [`review-text`]: `comment`,
};

export const RatingName = {
  BAD: `Bad`,
  NORMAL: `Normal`,
  GOOD: `Good`,
  VERY_GOOD: `Very good`,
  AWESOME: `Awesome`
};

export const RatingLimit = {
  BAD: 0,
  NORMAL: 3,
  GOOD: 5,
  VERY_GOOD: 8,
  AWESOME: 10,
};

export const AppRoute = {
  ROOT: `/`,
  LOGIN: `/login`,
  FAVORITES: `/mylist`,
  FILM: `/films`,
  ADD_COMMENT: `/review`,
  PLAYER: `/player`,
  NOT_FOUND: `/404`,
};

export const APIRoute = {
  FILMS: `/films`,
  PROMO: `/films/promo`,
  COMMENTS: `/comments`,
  LOGIN: `/login`,
  LOGOUT: `/logout`,
  FAVORITE: `/favorite`,
};

export const BACKEND_URL = `https://6.react.pages.academy/wtw`;
export const REQUEST_TIMEOUT = 5000;

export const HttpCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
};

export const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

export const FavoriteStatus = {
  ON: 1,
  OFF: 0,
};
