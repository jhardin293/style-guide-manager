import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDEKtI7iPX3ZGnvsBa8eWSaUF0_IONDR18",
  authDomain: "style-guide-manager.firebaseapp.com",
  databaseURL: "https://style-guide-manager.firebaseio.com",
  storageBucket: "style-guide-manager.appspot.com",
  messagingSenderId: "31752218909"
}

firebase.initializeApp(config)
const database = firebase.database()

export default database 