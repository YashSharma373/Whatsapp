import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCjAEeWYNuB30feKN-SuYpCP_3RNTzBJzM",
    authDomain: "whatsapp-clone-9acd9.firebaseapp.com",
    projectId: "whatsapp-clone-9acd9",
    storageBucket: "whatsapp-clone-9acd9.appspot.com",
    messagingSenderId: "672841194685",
    appId: "1:672841194685:web:689db4ca5581b65cfcebd4"
  };

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export {db,auth,provider};