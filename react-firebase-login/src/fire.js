import firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyDrN3vZb45siKNdz-eFw9WWoSEiePgFzGs",
  authDomain: "login-494e8.firebaseapp.com",
  databaseURL: "https://login-494e8.firebaseio.com",
  projectId: "login-494e8",
  storageBucket: "login-494e8.appspot.com",
  messagingSenderId: "806099117029",
  appId: "1:806099117029:web:d42840054975d60de4450c"
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;