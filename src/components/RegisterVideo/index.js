import React from 'react'
import styled from 'styled-components'

const RegisterVideo = () => {
  return (
    <Form>
      <label htmlFor="id">Id:</label>
      <input type="text" id="id" name="id" />

      <label htmlFor="title">Título:</label>
      <input type="text" id="title" name="title" />

      <button type="submit">Cadastrar</button>
    </Form>
  )
}

const Form = styled.form`
  padding: 16px;
`

export default RegisterVideo
