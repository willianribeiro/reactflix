import React from 'react'
import styled from 'styled-components'
import Play from './Play'

const VideosList = () => {
  return (
    <Container>
        {Array.from({ length: 10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <VideoPlay />
            </VideoThumb>
            <VideoTitle>Título do Vídeo</VideoTitle>
          </Video>
        ))}
      </Container>
  )
}

const VideoThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;
  border: 1px solid #999;
`

const VideoPlay = styled(Play) `
  width: 50px;
  height: 50px;
  fill: #999;
  transition: transform 150ms ease-in-out
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const Video = styled.div`
  cursor: pointer;

  &:hover ${VideoPlay} {
    transform: scale(1.5);
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 8px 8px 8px;
  }
`

export default VideosList
