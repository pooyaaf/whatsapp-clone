import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyCtN4zyj57CcvuD2E5v6jvubAasLj6SvNY",
    authDomain: "whats-app-clone-7e9a5.firebaseapp.com",
    databaseURL: "https://whats-app-clone-7e9a5.firebaseio.com",
    projectId: "whats-app-clone-7e9a5",
    storageBucket: "whats-app-clone-7e9a5.appspot.com",
    messagingSenderId: "446386496525",
    appId: "1:446386496525:web:8a4f89f2c53f5899356144",
    measurementId: "G-KBBFWXJQBZ"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  export {auth,provider};
  export default db;