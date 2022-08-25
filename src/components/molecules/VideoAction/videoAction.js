import React from 'react'
import video from '../../../images/video.png'
import '../VideoAction/videoAction.css'



export default function VideoAction() {
  return (
    <div className="video__action">
       <div className="video__description">
        <div className="bar"></div>
        <h1>Video Live In Action</h1>
        <p>Problems trying to resolve the conflict between <br /> the two major realms of Classical physics: <br /> Newtonian mechanics </p>
        <button>Learn More
        <span class="material-symbols-outlined">
           chevron_right
        </span>
        </button>
       </div>
       <div className="video">
        <div className="play__button">
          <span class="material-symbols-outlined">
           play_arrow
          </span></div>
       <img src={video} alt="video" />
       </div>
    </div>
  )
}
