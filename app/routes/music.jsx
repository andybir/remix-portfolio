import React from 'react'

function Music() {
  return (
    <div className='container'>
      <h1>Music</h1>
      <div className='container'>
        <iframe
          title='The Moth'
          width='100%'
          height='166'
          scrolling='no'
          frameborder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1117774501&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
        ></iframe>
      </div>
      <div className='container'>
        <iframe
          title='Ida'
          width='100%'
          height='166'
          scrolling='no'
          frameborder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1117773868&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
        ></iframe>
      </div>
      <div className='container'>
        <iframe
          title='Black & Purple'
          width='100%'
          height='166'
          scrolling='no'
          frameborder='no'
          allow='autoplay'
          src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/986909095&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true'
        ></iframe>
      </div>
    </div>
  )
}

export default Music
