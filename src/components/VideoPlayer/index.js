import React from 'react'
import styled from 'styled-components'

const VideoPlayer = ({ id, title }) => {
  return (
    <div>
      <Iframe
        width='100%'
        height='480'
        src={`https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=0`}
        frameborder='0'
        allow='autoplay; encrypted-media'
        allowfullscreen
      />

      <Title>{title}</Title>
    </div>
  )
}

const Iframe = styled.iframe`
  border: none;
  background-color: #000;
`

const Title = styled.div`
  padding: 8px;
  font-size: 28px;
`

export default VideoPlayer
