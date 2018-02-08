import firebase from 'firebase'

firebase.initializeApp({
  apiKey: 'AIzaSyAc-hex63VBlZ6ZALp___Nl9ZMMw1fgDeg',
  authDomain: 'reactflix-979d1.firebaseapp.com',
  databaseURL: 'https://reactflix-979d1.firebaseio.com',
  projectId: 'reactflix-979d1',
  storageBucket: '',
  messagingSenderId: '53043935418'
})

const db = firebase.database()

export default db
