import {NameSpace} from './root-reducer';
import {ALL_GENRES, EXTRA_MOVIES_LIST_SIZE} from "../const";

export const getFilmsByGenre = (state) => {
  const genre = state[NameSpace.GENRE].genre;
  const films = state[NameSpace.DATA].films.slice(0);

  if (genre === ALL_GENRES) {
    return films;
  }
  return films.filter((film) => film.genre === genre);
};

export const getSimilarFilms = (state) => {
  const genre = state[NameSpace.DATA].film.genre;
  const id = state[NameSpace.DATA].film.id;
  const films = state[NameSpace.DATA].films.slice(0);

  return films.filter((film) => (film.id !== +id && film.genre === genre))
    .slice(0, EXTRA_MOVIES_LIST_SIZE);
};
