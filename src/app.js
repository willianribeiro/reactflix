'use strict'

import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import VideosList from 'components/VideosList'
import VideoPlayer from 'components/VideoPlayer'
import RegisterVideo from 'components/RegisterVideo'

import 'normalize.css'
import 'milligram'

const App = () => (
  <Container>
    <Header>
      <HeaderTitle>Reactflix</HeaderTitle>
      <RegisterButton>Cadastrar vídeo</RegisterButton>
    </Header>

    <Main>
      <RegisterVideo />
      <VideoPlayer />
      <VideosList />
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight};
  padding: 0 8px;
  color: #f1f1f1;
  background-color: #333
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
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

export default App
