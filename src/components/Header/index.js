import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { headerHeight } from 'utils/constants'
import { openRegisterVideo } from 'reducers/ui/action-creators'

const MainHeader = ({ onOpenRegisterVideo }) => (
  <Header>
    <HeaderTitle>Reactflix</HeaderTitle>
    <RegisterButton onClick={onOpenRegisterVideo}>Cadastrar vídeo</RegisterButton>
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

const mapDispatchToProps = dispatch => ({
  onOpenRegisterVideo: () => dispatch(openRegisterVideo())
})

export default connect(null, mapDispatchToProps)(MainHeader)
