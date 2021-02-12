import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import MovieCard from "../../blocks/movie-card/movie-card";

const MOVIES_LIST_SIZE = 8;

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeMovieCardId: null,
    };
    this.handleMovieCardHover = this.handleMovieCardHover.bind(this);
  }

  handleMovieCardHover(id) {
    this.setState({activeMovieCardId: id});
  }

  render() {
    const {films} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {
            films.map((film) =>
              (
                <MovieCard
                  key={film.id}
                  film={film}
                  onHover={this.handleMovieCardHover}
                />
              )
            )
          }
        </div>

        {(films.length >= MOVIES_LIST_SIZE) &&
          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        }

      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  onHover: PropTypes.func,
};

export default MoviesList;
