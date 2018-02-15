'use strict'

import React, { PureComponent } from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import VideosList from 'components/VideosList'
import VideoPlayer from 'components/VideoPlayer'
import RegisterVideo from 'components/RegisterVideo'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { headerHeight, footerHeight } from 'utils/constants'
import { listVideos } from 'reducers/videos/action-creators'

import 'normalize.css'
import 'milligram'

class App extends PureComponent {
  componentDidMount () {
    this.props.listVideos()
  }

  render () {
    const { isRegisterVideoFormOpened, videoPlayer } = this.props

    return (
      <Container>
        <Header />

        <Main>
          {isRegisterVideoFormOpened && <RegisterVideo />}
          {videoPlayer.id &&
            <VideoPlayer
              id={videoPlayer.id}
              title={videoPlayer.title}
            />
          }
          <VideosList />
        </Main>

        <Footer />
      </Container>
    )
  }
}

injectGlobal`
  html,
  body,
  div[data-js=app] {
    height: 100%;
  }
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight})
`

const Container = styled.div`
  height: 100%
`

const mapStateToProps = state => ({
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened,
  videoPlayer: state.videoPlayer
})

const mapDispatchToProps = dispatch => ({
  listVideos: () => dispatch(listVideos())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
