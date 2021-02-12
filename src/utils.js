import films from "./mocks/films";

export const getRandomInteger = (min, max) => {
  return min + Math.floor((max - min + 1) * Math.random());
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

export const getFilmById = (filmId) => {
  if (isNaN(parseInt(filmId, 10))) {
    return undefined;
  }
  return films.find((film) => film.id === parseInt(filmId, 10));
};
