export const getFilmsByGenre = (genre, films) => {
  if (genre) {
    return films.filter((film) => film.genre === genre);
  }
  return films;
};
