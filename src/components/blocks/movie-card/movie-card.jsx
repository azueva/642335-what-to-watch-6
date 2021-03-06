import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import PropTypes from 'prop-types';
import MovieProp from '../../props/movie.prop';
import VideoPlayer from "../../video-player/video-player";
import {VIDEO_TIMEOUT, VideoStatus} from "../../../const";

const MovieCard = (props) => {
  const {film, onHover} = props;
  const {id, name, previewImage, previewVideoPoster, previewVideoLink} = film;
  const {redirectToPath} = props;
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    onHover(id);
    setTimer(setTimeout(() => setIsPlayerVisible(true), VIDEO_TIMEOUT));
  };

  const handleMouseLeave = () => {
    onHover(null);
    clearTimeout(timer);
    setTimer(null);
    setIsPlayerVisible(false);
  };

  // const handleCardClick = () => {
  //   history.push(`/films/${id}`);
  // };

  const handlePlayerStatusChange = (status) => {
    if (status === VideoStatus.ENDED || status === VideoStatus.ERROR) {
      setIsPlayerVisible(false);
    }
  };

  useEffect(() => {
    /* componentWillUnmount */
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image"
        onClick={() => redirectToPath(`/films/${id}`)}
      >
        {isPlayerVisible ?
          <VideoPlayer
            id={id}
            isMuted={true}
            isAutoPlay={true}
            src={previewVideoLink}
            poster={previewVideoPoster}
            style={{
              objectFit: `cover`
            }}
            onPlayerStatusChange={handlePlayerStatusChange}
          /> :
          <img
            src={previewImage}
            alt={name}
            width="280" height="175"
          />
        }
      </div>
      <h3 className="small-movie-card__title">
        <Link className="small-movie-card__link" to={`/films/${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  film: MovieProp.isRequired,
  onHover: PropTypes.func.isRequired,
  redirectToPath: PropTypes.func,
};
export default MovieCard;
