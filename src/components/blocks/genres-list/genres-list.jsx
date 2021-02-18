import React, {useState} from "react";
import {Link} from "react-router-dom";
import {GENRES} from "../../../const";

const GenresList = () => {
  const initialGenre = GENRES[0];
  const [activeGenre, setActiveGenre] = useState(initialGenre);

  const handleLinkClick = (genre) => {
    setActiveGenre(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {
        GENRES.map((genre) =>
          (
            <li
              className={`catalog__genres-item ${activeGenre === genre
                ? `catalog__genres-item--active` : ``}`}
              key={genre}
              onClick={() => handleLinkClick(genre)}
            >
              <Link to="/" className="catalog__genres-link">{genre}</Link>
            </li>
          )
        )
      }
    </ul>
  );
};

export default GenresList;
