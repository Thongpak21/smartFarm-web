import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// your firebase config
const config = {
  apiKey: 'AIzaSyCZVlH_1_7bOM44UY3vaolW5osuDEguSas',
  authDomain: 'smartfarm-50309.firebaseapp.com',
  databaseURL: 'https://smartfarm-50309.firebaseio.com',
  projectId: 'smartfarm-50309',
  storageBucket: 'smartfarm-50309.appspot.com',
  messagingSenderId: '305357996266'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export const isUser = auth.onAuthStateChanged(async user => {
  if (user) {
    return await user
  } else {
    return await user
  }
})
export { db, auth }
