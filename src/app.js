'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/VideosList'
import VideoPlayer from 'components/VideoPlayer'
import RegisterVideo from 'components/RegisterVideo'
import Header from 'components/Header'
import Footer from 'components/Footer'
import { headerHeight, footerHeight } from 'utils/constants'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header />

    <Main>
      <RegisterVideo />
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

export default App
