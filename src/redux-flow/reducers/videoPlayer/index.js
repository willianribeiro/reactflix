'use strict'

import createReducer from 'reducers/create-reducer'
import { SELECT_VIDEO } from './actions'

const initialState = { id: '', title: '' }

const videoPlayer = createReducer(initialState, {
  [SELECT_VIDEO]: (state, action) => ({
    id: action.payload.id,
    title: action.payload.title
  })
})

export default videoPlayer
