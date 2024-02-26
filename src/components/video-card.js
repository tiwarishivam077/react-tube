import React, { useState } from 'react'
import { bg_img_url, profile_img_url, video_url } from '../utils/constants'
import ReactPlayer from 'react-player'
import ShimmerVideoCard from './shimmerUi';

const VideoCard = ({videoNumber}) => {

  const divStyle = {
    
  };

  const [playing, setPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [played, setPlayed] = useState(0);
  const [muted, setMuted] = useState(false);
  const [seeking, setSeeking] = useState(false);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [fullscreen, setFullscreen] = useState(false);

  // const handlePlayPause = () => setPlaying(!playing);

  // const handleVolumeChange = (e) => setVolume(parseFloat(e.target.value));

  // const handleSeekMouseDown = () => setSeeking(true);

  // const handleSeekChange = (e) => setPlayed(parseFloat(e.target.value));

  // const handleSeekMouseUp = (e) => {
  //   setSeeking(false);
  //   const newTime = parseFloat(e.target.value);
  //   setPlayed(newTime);
  //   playerRef.current.seekTo(newTime);
  // };

setTimeout(()=>{
  setPlaying(true)
}, 3000)

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.played);
    }
  };

  const handleDuration = (duration) => setDuration(duration);

  // const handleMute = () => setMuted(!muted);

  // const handlePlaybackRateChange = (rate) => setPlaybackRate(rate);

  // const handleFullScreen = () => setFullscreen(!fullscreen);

  const playerRef = React.createRef();

  return (
   
    <div className="flex flex-col w-[400px] h-[320px] ml-5 my-2   rounded-full">

      <div className='w-[400px] h-[223px] rounded-2xl  relative'>
     {
       !playing ? <ShimmerVideoCard className='absolute'/> :
      <ReactPlayer
      className=''
      url={video_url}
      width='100%'
      height='100%'
      playing={playing}
      volume={volume}
      muted={muted}
      playbackRate={playbackRate}
      controls={true}
      style={divStyle}
      onPlay={() => console.log('onPlay')}
      onPause={() => console.log('onPause')}
      onEnded={() => console.log('onEnded')}
      onError={(e) => console.log('onError', e)}
      onProgress={handleProgress}
      onDuration={handleDuration}
       />
     }
      </div>


      <div className='flex justify-center  px-4 pt-8 pb-2 -mt-2 rounded-2xl  w-[400px] h-[100px]' > 

        <div className='w-20 -mt-2 -ml-12 mr-4'>
        <img src={profile_img_url} alt='profile-pic' className='rounded-full'/>
        </div>

        <div className='mb-2 '> 
          <p className='text-white text-wrap font-bold text-2xl '>This is the Video Despcription </p>
        </div>

      </div>


    </div>

   
  )
}

export default VideoCard