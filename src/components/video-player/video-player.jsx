/* eslint-disable no-console */
import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';

const VideoStatus = {
  PLAYING: `playing`,
  ENDED: `ended`,
  ERROR: `error`,
};

const VideoPlayer = (props) => {
  const {id, src, poster, onPlayerStatusChange} = props;
  const {isMuted = false, isAutoPlay = false} = props;
  const {width = `100%`, height = `100%`, style = {}} = props;

  const [playerStatus, setPlayerStatus] = useState({
    isReady: false,
    status: undefined,
  });

  const playerRef = useRef();


  const handlePlayerCanPlayThrough = () => {
    console.log(`${id}.CanPlay`);
    setPlayerStatus((prevPlayerStatus) => ({
      ...prevPlayerStatus,
      isReady: true,
    }));
  };

  const handlePlayerPlay = () => {
    console.log(`${id}.onplay`);
    setPlayerStatus((prevPlayerStatus) => ({
      ...prevPlayerStatus,
      status: VideoStatus.PLAYING,
    }));
  };

  const handlePlayerEnded = () => {
    console.log(`${id}.onended`);
    setPlayerStatus((prevPlayerStatus) => ({
      ...prevPlayerStatus,
      status: VideoStatus.ENDED,
    }));
  };

  const handlePlayerError = () => {
    console.log(`${id}.onerror`);
    setPlayerStatus((prevPlayerStatus) => ({
      ...prevPlayerStatus,
      status: VideoStatus.ERROR,
    }));
  };

  useEffect(() => {
    console.log(`${id}* ${playerStatus}`);
    onPlayerStatusChange(playerStatus.status);
  }, [playerStatus]);


  useEffect(() => {
    /* componentWillUnmount */
    return () => {
      console.log(`${id}.componentWillUnmount`);
      playerRef.current.oncanplaythrough = null;
      playerRef.current.onplay = null;
      playerRef.current.onended = null;
      playerRef.current.onerror = null;
      playerRef.current = null;
    };
  }, [src]);

  return (
    <React.Fragment>
      <video
        id={id}
        type="video/mp4"
        autoPlay={isAutoPlay}
        src={src}
        muted={isMuted}
        ref={playerRef}
        poster={poster}
        onCanPlayThrough={handlePlayerCanPlayThrough}
        onPlay={handlePlayerPlay}
        onEnded={handlePlayerEnded}
        onError={handlePlayerError}
        width={width}
        height={height}
        style={style}
      >
        Your browser doesn&apos;t support HTML5 videos,
      </video>
    </React.Fragment>
  );
};


VideoPlayer.propTypes = {
  id: PropTypes.number,
  isMuted: PropTypes.bool,
  isAutoPlay: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  onPlayerStatusChange: PropTypes.func,
};

export default VideoPlayer;
