import React, {PureComponent} from "react";
import {Link} from "react-router-dom";
import {GENRES} from "../../../const";

class GenresList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeGenre: GENRES[0],
    };

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick(genre) {
    this.setState({activeGenre: genre});
  }

  render() {
    const {activeGenre} = this.state;

    return (
      <ul className="catalog__genres-list">
        {
          GENRES.map((genre) =>
            (
              <li
                className={`catalog__genres-item ${activeGenre === genre
                  ? `catalog__genres-item--active` : ``}`}
                key={genre}
                onClick={() => this.handleLinkClick(genre)}
              >
                <Link to="/" className="catalog__genres-link">{genre}</Link>
              </li>
            )
          )
        }
      </ul>
    );
  }
}

export default GenresList;
