import React from "react";
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

export const formatMinToTimeString = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:00`;
};

export const formatMinToHours = (mins) => {
  return `${Math.trunc(mins / 60)}h ${mins % 60}m`;
};

export const joinComponents = (array, dividerString, dividerJsx) => {
  return array.reduce((acc, item) => (
    <React.Fragment>{acc}{dividerString}{dividerJsx}{item}</React.Fragment>
  ));
};
