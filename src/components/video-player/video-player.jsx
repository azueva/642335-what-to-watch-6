/* eslint-disable no-console */
import React, {useState, useEffect, useRef} from "react";
import PropTypes from 'prop-types';
// import MovieProp from '../../props/movie.prop';

const VideoPlayer = (props) => {
  const {id, src, poster, onPlayerStatus} = props;
  const {playButtonState = false, fullScreenButtonClick = null} = props;
  const {isMuted = false, isAutoPlay = false} = props;
  const {width = `100%`, height = `100%`, style = {}} = props;

  const [isReady, setIsReady] = useState(false);
  const [isCurrentlyPlaying, setIsCurrentlyPlaying] = useState(undefined);
  const [isCurrentlyFullScreen, setIsCurrentlyFullScreen] = useState(undefined);

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
      setIsCurrentlyPlaying(false);
    };
    console.groupEnd();
  }, []);

  /* componentDidUpdate */
  useEffect(() => {
    console.group(`${id}.componentDidUpdate - isReady`);
    console.log(`isReady ${isReady}`);
    console.log(playerRef.current.src);
    if (isReady & isAutoPlay) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    console.groupEnd();
  // ⚡❕ возможна ошибка, нужен ещё и isAutoPlay в массиве?
  }, [isReady]);

  useEffect(() => {
    //
    // ⛔❔❕ может быть, тут нужен useCallback?
    //
    console.log(`${id}.isCurrentlyPlaying ${isCurrentlyPlaying}`);
    onPlayerStatus(isCurrentlyPlaying);
  }, [isCurrentlyPlaying]);

  useEffect(() => {
    console.group(`${id}.componentDidUpdate - playButtonStatus`);
    console.log(`playButtonStatus ${playButtonState}`);
    if (playButtonState) {
      playerRef.current.play();
    } else {
      playerRef.current.pause();
    }
    console.groupEnd();
  }, [playButtonState]);


  useEffect(() => {
    //
    // ⛔❔❕ fullScreenButtonState === null как признак первой отрисовки
    //  ...  как-то плохо выглядит
    //
    console.log(`${id}.fullScreenButtonClick ${fullScreenButtonClick}`);
    if (!document.fullscreenElement && fullScreenButtonClick !== null) {
      setIsCurrentlyFullScreen(true);
    }
  }, [fullScreenButtonClick]);

  const handleFullScreenChange = () => {
    if (document.fullscreenElement) {
      console.log(`Entered full-screen mode.`);
    } else {
      console.log(`Leaving full-screen mode.`);
      document.removeEventListener(`fullscreenchange`, handleFullScreenChange);
      setIsCurrentlyFullScreen(false);
    }
  };

  useEffect(() => {
    console.log(`${id}.isCurrentlyFullScreen  => ${isCurrentlyFullScreen}`);
    if (isCurrentlyFullScreen && !document.fullscreenElement) {
      playerRef.current.requestFullscreen()
      .then(() => {
        console.log(`${id}. Toggle Player to full-screen mode on`);
        document.addEventListener(`fullscreenchange`, handleFullScreenChange);
      })
      .catch((err) => {
        console.warn(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
      });
    }
  }, [isCurrentlyFullScreen]);

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
        src={src}
        muted={isMuted}
        ref={playerRef}
        poster={poster}
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
  playButtonState: PropTypes.bool,
  fullScreenButtonClick: PropTypes.oneOf([true, false, null]),
  src: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  style: PropTypes.object,
  onPlayerStatus: PropTypes.func,
};

export default VideoPlayer;
