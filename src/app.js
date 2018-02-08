'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Play from 'components/Play'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <h1>Reactflix</h1>
    </Header>

    <Main>
      <VideoList>
        {Array.from({ length: 10 }).map((item, index) => (
          <Video key={index}>
            <VideoThumb>
              <VideoPlay />
            </VideoThumb>
            <VideoTitle>Título do Vídeo</VideoTitle>
          </Video>
        ))}
      </VideoList>
    </Main>

    <Footer>
      &copy; 2018
    </Footer>
  </Container>
)

injectGlobal`
  html,
  body,
  div[data-js=app] {
    height: 100%;
  }
`
const headerHeight = '60px'
const footerHeight = '30px'

const Header = styled.header`
  height: ${headerHeight};
  background-color: #333
`

const Footer = styled.footer`
  height: ${footerHeight};
  background-color: #333
`

const Main = styled.main`
  min-height: calc(100% - ${headerHeight} - ${footerHeight})
`

const Container = styled.div`
  height: 100%
`

const VideoList = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Video = styled.div`
  flex: 1 1 300px;
  margin: 0 8px 8px 8px;
`

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
`

const VideoTitle = styled.h2`
  font-size: 18px;
`

export default App
