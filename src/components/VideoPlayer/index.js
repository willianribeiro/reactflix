import React from 'react'
import styled from 'styled-components'

const VideoPlayer = () => {
  return (
    <div>
      <Iframe
        width="100%"
        height="480"
        src="https://www.youtube.com/embed/TWdSi0Xw4u0?rel=0&amp;showinfo=0"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen
      />

      <Title>Título do vídeo</Title>
    </div>
  )
}

const Iframe = styled.iframe`
  border: none;
  background-color: #000;
`

const Title = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  font-size: 28px;
`

export default VideoPlayer
