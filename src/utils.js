import React from "react";
import {RatingName, RatingLimit} from "./const";

export const getFilmById = (filmId, films) => {
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
    case (rating > RatingLimit.AWESOME):
      return ``;
    case (rating === RatingLimit.AWESOME):
      return RatingName.AWESOME;
    case (rating >= RatingLimit.VERY_GOOD):
      return RatingName.VERY_GOOD;
    case (rating >= RatingLimit.GOOD):
      return RatingName.GOOD;
    case (rating >= RatingLimit.NORMAL):
      return RatingName.NORMAL;
    case (rating >= RatingLimit.BAD):
      return RatingName.BAD;
    default: return ``;
  }
};

const rawToFilm = (raw) => {
  return ({
    id: raw.id,
    name: raw.name,
    posterImage: raw.poster_image,
    previewImage: raw.preview_image,
    previewVideoPoster: raw.poster_image,
    backgroundImage: raw.background_image,
    backgroundColor: raw.background_color,
    videoLink: raw.video_link,
    previewVideoLink: raw.preview_video_link,
    description: [raw.description],
    rating: raw.rating,
    scoresCount: raw.scores_count,
    director: raw.director,
    starring: raw.starring,
    runTime: raw.run_time,
    genre: raw.genre,
    released: raw.released,
    isFavorite: raw.is_favorite,
  });
};

const rawToComment = (raw) => Object.assign({}, raw, {date: raw.date.slice(0, 10)});

export const adapter = {
  rawToFilm,
  rawToComment,
};
