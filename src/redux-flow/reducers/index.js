'use strict'

import { combineReducers } from 'redux'
import ui from './ui'
import videoPlayer from './videoPlayer'
import videos from './videos'

export default combineReducers({
  ui,
  videoPlayer,
  videos
})
