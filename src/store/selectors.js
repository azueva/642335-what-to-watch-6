import {ALL_GENRES} from "../const";

export const getFilmsByGenre = (genre, films) => {
  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};
