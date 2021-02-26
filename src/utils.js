import React from "react";
import {RatingNames, RatingLimits} from "./const";

export const getRandomInteger = (min, max) => {
  return min + Math.floor((max - min + 1) * Math.random());
};

export const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length - 1);
  return array[randomIndex];
};

export const getFilmById = (filmId, films) => {
  if (isNaN(parseInt(filmId, 10))) {
    return undefined;
  }
  return films.find((film) => film.id === parseInt(filmId, 10));
};

export const getFilmsByGenre = (genre, films) => {
  if (genre) {
    return films.filter((film) => film.genre === genre);
  }
  return films;
};

export const formatMinToTimeString = (mins) => {
  const hours = Math.trunc(mins / 60);
  const minutes = mins % 60;
  return `${hours.toString().padStart(2, `0`)}:${minutes.toString().padStart(2, `0`)}:00`;
};

export const formatMinToHours = (mins) => {
  return `${Math.trunc(mins / 60)}h ${mins % 60}m`;
};

export const formatDateToString = (dateTime) => {
  const [year, month, day] = dateTime.split(`-`);
  const date = new Date(...[year, month - 1, day]);
  return date.toLocaleDateString(`en-US`, {month: `long`, year: `numeric`, day: `numeric`});
};

export const joinComponents = (array, dividerString, dividerJsx) => {
  return array.reduce((acc, item) => (
    <React.Fragment>{acc}{dividerString}{dividerJsx}{item}</React.Fragment>
  ));
};

export const ratingToName = (rating) => {
  switch (true) {
    case (rating > RatingLimits.AWESOME):
      return ``;
    case (rating === RatingLimits.AWESOME):
      return RatingNames.AWESOME;
    case (rating >= RatingLimits.VERY_GOOD):
      return RatingNames.VERY_GOOD;
    case (rating >= RatingLimits.GOOD):
      return RatingNames.GOOD;
    case (rating >= RatingLimits.NORMAL):
      return RatingNames.NORMAL;
    case (rating >= RatingLimits.BAD):
      return RatingNames.BAD;
    default: return ``;
  }
};
