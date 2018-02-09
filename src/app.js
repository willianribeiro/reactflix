'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import { connect } from 'react-redux'
import VideosList from 'components/VideosList'
import VideoPlayer from 'components/VideoPlayer'
import RegisterVideo from 'components/RegisterVideo'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'

const App = ({ isRegisterVideoFormOpened }) => (
  <Container>
    <Header />

    <Main>
      {isRegisterVideoFormOpened && <RegisterVideo />}
      <VideoPlayer />
      <VideosList />
    </Main>

    <Footer />
  </Container>
)

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
  isRegisterVideoFormOpened: state.ui.isRegisterVideoFormOpened
})

export default connect(mapStateToProps)(App)
