import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieProp from '../../props/movie.prop';
import MovieCard from "../../blocks/movie-card/movie-card";
import ShowMore from "../../blocks/show-more/show-more";

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
    const {films, listSize} = this.props;

    return (
      <React.Fragment>
        <div className="catalog__movies-list">
          {
            films.slice(0, listSize).map((film) =>
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

        {(films.length >= listSize) && <ShowMore />}

      </React.Fragment>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(MovieProp),
  listSize: PropTypes.number.isRequired,
};

export default MoviesList;
