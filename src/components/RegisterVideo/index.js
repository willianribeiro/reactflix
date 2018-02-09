import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

const RegisterVideo = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
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

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    e.preventDefault()

    dispatch({
      type: 'videos:ADD_VIDEO',
      payload: {
        id: 'TWdSi0Xw4u0',
        title: 'Illumination - Peaceful Gregorian Chants - Dan Gibsons Solitude [Full Album]'
      }
    })
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
