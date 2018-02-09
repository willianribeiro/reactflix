import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'

const RegisterVideo = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <label htmlFor='id'>Id:</label>
      <input type='text' id='id' name='id' />

      <label htmlFor='title'>Título:</label>
      <input type='text' id='title' name='title' />

      <button type='submit'>Cadastrar</button>
    </Form>
  )
}

const Form = styled.form`
  padding: 16px;
`

const mapDispatchToProps = dispatch => ({
  onSubmit: e => {
    e.preventDefault()
    const { id, title } = e.target
    dispatch(registerVideo({ id: id.value, title: title.value }))
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
