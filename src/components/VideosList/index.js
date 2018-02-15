import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import Play from './Play'
import { selectVideo } from 'reducers/videoPlayer/action-creators'

const VideosList = ({ videos, handleClick }) => {
  return (
    <Container>
      {Object.keys(videos).map(id => (
        <Video key={id}>
          <VideoLink href='#' onClick={handleClick(id, videos[id].title)}>
            <VideoThumb>
              <VideoPlay />
            </VideoThumb>
            <VideoTitle>{videos[id].title}</VideoTitle>
          </VideoLink>
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

const VideoPlay = styled(Play)`
  width: 50px;
  height: 50px;
  fill: #999;
  transition: transform 150ms ease-in-out
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

const VideoLink = styled.a`
  color: inherit
`

const Video = styled.section`
  &:hover ${VideoPlay} {
    transform: scale(1.3);
  }
`

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 8px;

  & ${Video} {
    flex: 1 1 300px;
    margin: 0 8px 8px 0;
  }
`

const mapStateToProps = state => ({
  videos: state.videos
})

const mapDispatchToProps = dispatch => ({
  handleClick: (id, title) => e => {
    e.preventDefault()
    dispatch(selectVideo(id, title))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(VideosList)
