'use strict'

import { SELECT_VIDEO } from './actions'

export const selectVideo = (id, title) => ({
  type: SELECT_VIDEO,
  payload: { id, title }
})
