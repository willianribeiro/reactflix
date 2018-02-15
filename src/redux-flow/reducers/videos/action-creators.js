import { ADD_VIDEO } from './actions'
import db from 'config/firebase'

// THUNKS (ASYNC)
export const registerVideo = ({ id, title }) => async dispatch => {
  await db.ref('videos').child(id).update({ id, title })
  dispatch(addVideo({ id, title }))
}

export const listVideos = () => dispatch => {
  db.ref('videos').on('value', snapshot => {
    const videos = snapshot.val()
    const videosOrderedByTitle = Object.keys(videos)
      .sort((a, b) => videos[a].title < videos[b].title ? -1 : 1)
      .map(id => ({
        id,
        title: videos[id].title
      }))

    videosOrderedByTitle.forEach(video => dispatch(addVideo(video)))
  })
}

// ACTIONS
export const addVideo = ({ id, title }) => ({
  type: ADD_VIDEO,
  payload: { id, title }
})
