import React from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { registerVideo } from 'reducers/videos/action-creators'

const RegisterVideo = ({ onSubmit }) => {
  return (
    <Form onSubmit={onSubmit}>
      <h2>Cadastrar vídeo</h2>

      <label htmlFor='id'>Id:</label>
      <input type='text' id='id' name='id' />

      <label htmlFor='title'>Título:</label>
      <input type='text' id='title' name='title' />

      <button type='submit'>Cadastrar</button>

      <CloseButton>&times;</CloseButton>
    </Form>
  )
}

const Form = styled.form`
  position: relative;
  padding: 16px 8px;
`

const CloseButton = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 30px;
  height: 30px;
  line-height: 1;
  margin: 0;
  padding: 0;
  border-radius: 50%;
  font-size: 22px;
`

const mapDispatchToProps = dispatch => ({
  onSubmit: async e => {
    e.preventDefault()
    e.persist()

    const { id, title } = e.target
    await dispatch(registerVideo({ id: id.value, title: title.value }))
    e.target.reset()
    e.target.elements[0].focus()
  }
})

export default connect(null, mapDispatchToProps)(RegisterVideo)
