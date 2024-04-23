import React, { useRef } from 'react'
import './PlayVideo.css'
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4'

function PlayVideo({playvideo,setplay}) {
    const player = useRef(null);

    function closeplayer(e){
        if(e.target === player.current){
            setplay(false)
        }
    }
  return (
    <div className={`video-player ${playvideo ? '':'hide'}`}
    ref={player} onClick={closeplayer} >
        <video src={video} autoPlay muted ccontrols ></video>
    </div>
  )
}

export default PlayVideo