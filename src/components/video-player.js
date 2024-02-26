import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { video_url } from '../utils/constants';

const VideoPlayer = () => {
  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const [muted, setMuted] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  const handlePlayPause = () => setPlaying(!playing);

  const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));

  const handleSeekMouseDown = () => setSeeking(true);

  const handleSeekChange = (e) => setPlayed(parseFloat(e.target.value));

  const handleSeekMouseUp = (e) => {
    setSeeking(false);
    const newTime = parseFloat(e.target.value);
    setPlayed(newTime);
    playerRef.current.seekTo(newTime);
  };

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration) => setDuration(duration);

  const handleMute = () => setMuted(!muted);

  const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);

  const handleFullScreen = () => setFullscreen(!fullscreen);

  const playerRef = React.createRef();

  return (
    <div className="player-wrapper">
      <ReactPlayer
        ref={playerRef}
        url={video_url}
        playing={playing}
        volume={volume}
        muted={muted}
        playbackRate={playbackRate}
        onPlay={() => console.log('onPlay')}
        onPause={() => console.log('onPause')}
        onEnded={() => console.log('onEnded')}
        onError={(e) => console.log('onError', e)}
        onProgress={handleProgress}
        onDuration={handleDuration}
        width="100%"
        height="100%"
      />
      <div className="controls">
        <button onClick={handlePlayPause}>{playing ? 'Pause' : 'Play'}</button>
        <input
          type="range"
          min={0}
          max={1}
          step="any"
          value={volume}
          onChange={handleVolumeChange}
        />
        <button onClick={handleMute}>{muted ? 'Unmute' : 'Mute'}</button>
        <input
          type="range"
          min={0}
          max={duration}
          step="any"
          value={played}
          onMouseDown={handleSeekMouseDown}
          onChange={handleSeekChange}
          onMouseUp={handleSeekMouseUp}
        />
        <span>{`${played.toFixed(2)} / ${duration.toFixed(2)}`}</span>
        <button onClick={handleFullScreen}>{fullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</button>
        <select onChange={(e) => handlePlaybackRateChange(parseFloat(e.target.value))}>
          <option value={1}>1x</option>
          <option value={1.5}>1.5x</option>
          <option value={2}>2x</option>
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
