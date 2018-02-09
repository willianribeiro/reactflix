import React from 'react'
import styled from 'styled-components'
import { footerHeight } from 'utils/constants'

const MainFooter = () => (
  <Footer>&copy; 2018</Footer>
)

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${footerHeight};
  background-color: #333;
  color: #fff;
`

export default MainFooter
