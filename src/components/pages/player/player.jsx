/* eslint-disable no-console */
import React, {useState, useEffect} from "react";
import {useHistory} from "react-router-dom";
import VideoPlayer from "../../video-player/video-player-fs";
import PropTypes from 'prop-types';
import {formatMinToTimeString} from '../../../utils';

const POSTER = `img/player-poster.jpg`;
const VIDEO_LINK = `media/sintel_trailer-480p.mp4`;


const PlayerStatusName = {
  false: `STOP`,
  true: `PLAY`,
  undefined: `???`,
};

const PlayButtonState = {
  PLAY: true,
  PAUSE: false,
};

const Player = (props) => {
  const {id, name, /* videoLink, */ runTime} = props;
  const [playerStatus, setPlayerStatus] = useState(null);
  const [playButtonState, setPlayButtonState] = useState(PlayButtonState.PLAY);
  const [fullScreenButtonClick, setFullScreenButtonClick] = useState(null);
  const history = useHistory();

  /* componentDidMount */
  useEffect(() => {
    console.log(`Play${id} ... ${name} componentDidMount`);
  }, []);


  const handleExitBtnClick = () => {
    history.goBack();
  };

  const handlePlayerStatusChange = (status) => {
    setPlayerStatus(PlayerStatusName[status]);
    console.log(`Play${id}. ${playerStatus} => ${PlayerStatusName[status]}`);
    setPlayButtonState(!status);
    console.log(`Play${id}. handlePlayerStatusChange setPlayButtonState => ${!status ? `PLAY` : `PAUSE`}}`);
  };


  // ⛔❔❕ Передаю событие клика в дочерний компонент (VideoPlayer) через пропс
  //  ...  как-то страшно выглядит
  const handleFullScreenButtonClick = () => {
    console.log(`Play${id}. handleFullScreenButtonClick`);
    setFullScreenButtonClick((prev) => !prev);
  };

  const handlePlayButtonClick = () => {
    console.log(`Play${id}. handlePlayButtonClick ${setPlayButtonState} => PAUSE}`);
    setPlayButtonState(PlayButtonState.PAUSE);
  };

  const handlePauseButtonClick = () => {
    console.log(`Play${id}. handlePauseButtonClick ${setPlayButtonState} => PLAY}`);
    setPlayButtonState(PlayButtonState.PLAY);
  };

  return (
    <div className="player"
      style={{
        backgroundColor: `darkgrey`
      }}
    >
      <VideoPlayer
        id={id}
        src={VIDEO_LINK}
        poster={POSTER}
        onPlayerStatus={handlePlayerStatusChange}
        playButtonState={!playButtonState}
        fullScreenButtonClick={fullScreenButtonClick}
        style={{
          objectFit: `contain`,
        }}
      />

      <button type="button" className="player__exit"
        onClick={handleExitBtnClick}
      >Exit
      </button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{formatMinToTimeString(runTime)}</div>
        </div>

        <div className="player__controls-row">
          { playButtonState ?
            <button type="button" className="player__play"
              onClick={handlePlayButtonClick}
            >
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            :
            <button type="button" className="player__play"
              onClick={handlePauseButtonClick}
            >
              <svg viewBox="0 0 14 21" width="14" height="21">
                <use xlinkHref="#pause"></use>
              </svg>
              <span>Pause</span>
            </button>
          }

          <div className="player__name">
            {name}
          </div>

          <button type="button" className="player__full-screen"
            onClick={handleFullScreenButtonClick}
          >
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string.isRequired,
  // videoLink: PropTypes.string.isRequired,
  runTime: PropTypes.number.isRequired,
};

export default Player;
