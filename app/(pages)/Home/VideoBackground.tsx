import React from 'react'

export default function VideoBackground() {
  return (
    <>
        <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover  z-[-1]">
              <source src="/video-bg.mp4" type="video/mp4" />
        </video> 
        <div className="absolute inset-0 bg-black/60 z-[-1]" />
    </>
  )
}
