import React from 'react'

function VideoPlayer({videoUrl,poster}) {
  return (
    
        <video
        width={1000}
        height={250}
        controlsList="nodownload"
        controls
        key={videoUrl}
        className='rounded-2xl'
        poster={poster}
        >
        <source src={videoUrl} type='video/mp4' />
        </video>
    
  )
}

export default VideoPlayer