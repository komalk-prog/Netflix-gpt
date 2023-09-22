import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='main-movie-container'>
    <h1 className='main-movie-title'>{title}</h1>
    <p className='main-movie-overview'  style={{width:"40rem"}}>{overview}</p>
    <div> 
      <button className='main-movie-play-btn'> ▶ Play </button>
      <button className='main-movie-info-btn'>More info <span>&#9432;</span></button>
    </div>
    </div>
  )
}

export default VideoTitle