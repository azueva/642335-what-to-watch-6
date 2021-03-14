import React, {useState, useEffect, useRef} from "react";
import PropTypes from "prop-types";
import {VideoStatus} from "../../const";

const VideoPlayer = (props) => {
  const {id, src, poster, onPlayerStatusChange} = props;
  const {isMuted = false, isAutoPlay = false} = props;
  const {width = `100%`, height = `100%`, style = {}} = props;
  const [playerStatus, setPlayerStatus] = useState(false);

  const playerRef = useRef();

  const handlePlayerEnded = () => setPlayerStatus(VideoStatus.ENDED);

  const handlePlayerError = () => setPlayerStatus(VideoStatus.ERROR);

  useEffect(() => {
    onPlayerStatusChange(playerStatus);
  }, [playerStatus]);


  useEffect(() => {
    return () => {
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
