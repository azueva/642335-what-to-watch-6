/* eslint-disable no-console */
import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
// import MovieProp from '../../props/movie.prop';

const VideoPlayer = (props) => {
  const {id, src, poster, onPlayerStatus} = props;
  const {isMuted = true, isControls = false, isAutoPlay = false} = props;
  const {width = `100%`, height = `100%`, style = {}} = props;

  const [isReady, setIsReady] = useState(false);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(undefined);

  const playerRef = useRef();

  /* componentDidMount */
  useEffect(() => {
    console.group(`${id}.componentDidMount`);
    console.log(playerRef.current);

    playerRef.current.oncanplaythrough = () => {
      console.log(`${id}.CanPlay`);
      setIsReady(true);
    };

    playerRef.current.onplay = () => {
      console.log(`${id}.onplay`);
      setIsCurrentlyPlaying(true);
    };

    playerRef.current.onpause = () => {
      console.log(`${id}.onpause`);
      // debugger;
      setIsCurrentlyPlaying(false);
    };
    console.groupEnd();
  }, []);


  /* componentDidUpdate */
  useEffect(() => {
    console.group(`${id}.componentDidUpdate - isReady`);
    console.log(`isReady ${isReady}`);
    console.log(playerRef.current.src);
    // debugger;
    if (isReady & isAutoPlay) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    console.groupEnd();
  }, [isReady]);

  useEffect(() => {
    console.log(`${id}.isCurrentlyPlaying ${isCurrentlyPlaying}`);
    onPlayerStatus(isCurrentlyPlaying);
  }, [isCurrentlyPlaying]);

  useEffect(() => {
    /* componentWillUnmount */
    return () => {
      console.group(`${id}.componentWillUnmount`);
      console.log(`${id}.isCurrentlyPlaying ${isCurrentlyPlaying}`);
      console.groupEnd();
      playerRef.current.oncanplaythrough = null;
      playerRef.current.onplay = null;
      playerRef.current.onpause = null;
      playerRef.current = null;
    };
  }, [src]);

  return (
    <React.Fragment>
      <video
        id={id}
        type="video/mp4"
        autoPlay={isAutoPlay}
        controls={isControls}
        src={src}
        muted={isMuted}
        ref={playerRef}
        poster={poster}
        width={width}
        height={height}
        style={style}
      >
        Your browser doesn&apos;t support videos,
      </video>
    </React.Fragment>
  );
};


VideoPlayer.propTypes = {
  id: PropTypes.number,
  isMuted: PropTypes.bool,
  isControls: PropTypes.bool,
  isAutoPlay: PropTypes.bool,
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  onPlayerStatus: PropTypes.func,
};

export default VideoPlayer;
