import React from 'react'
import styled from 'styled-components'
import { headerHeight } from 'utils/constants'

const MainHeader = () => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton>Cadastrar vídeo</RegisterButton>
  </Header>
)

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${headerHeight};
  padding: 0 8px;
  color: #fff;
  background-color: #333
`

const HeaderTitle = styled.h1`
  margin-bottom: 0;
`

const RegisterButton = styled.button`
  margin-bottom: 0;
`

export default MainHeader
