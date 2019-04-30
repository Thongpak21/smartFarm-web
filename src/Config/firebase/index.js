import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
//import 'firebase/storage'

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

export { db }
