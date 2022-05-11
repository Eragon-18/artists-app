import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAAShzypVQGlOV8zjV2WTmGJ8WgmBTbcnQ",
  authDomain: "artistsapp-1c0d2.firebaseapp.com",
  projectId: "artistsapp-1c0d2",
  databaseURL: "artistsapp-1c0d2.firebaseio.com",
  storageBucket: "artistsapp-1c0d2.appspot.com",
  messagingSenderId: "329054860430",
  appId: "1:329054860430:web:d55d776c6d4ce4d8cd05df",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase.firestore();
