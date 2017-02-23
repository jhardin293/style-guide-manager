import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCMgPhbfc01LwngSaRPfL69bVPIOxh8Jkc",
  authDomain: "redux-todo-4ca5e.firebaseapp.com",
  databaseURL: "https://redux-todo-4ca5e.firebaseio.com",
  storageBucket: "redux-todo-4ca5e.appspot.com",
  messagingSenderId: "99712660951"
}

firebase.initializeApp(config)
const database = firebase.database()

export default database 