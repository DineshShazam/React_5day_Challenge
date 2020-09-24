import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAwEjlXb7lGOTnkueGnkEjizAHNVaW0gI0",
    authDomain: "clone-6f00f.firebaseapp.com",
    databaseURL: "https://clone-6f00f.firebaseio.com",
    projectId: "clone-6f00f",
    storageBucket: "clone-6f00f.appspot.com",
    messagingSenderId: "193804418813",
    appId: "1:193804418813:web:a4efe866ea31854b068894"
  };

  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  // create signIn with google
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  googleProvider.setCustomParameters({prompt:'select_account'})
  // export const signInWithGoogle = (e) => {
  //   e.preventDefault();
  //   auth.signInWithPopup(provider);
  // };

  export {db,auth,googleProvider}