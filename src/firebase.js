import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBo5SQHcKgPKQ1soFeI-VbH22ARmT0_ZZU",
  authDomain: "clone-2f57f.firebaseapp.com",
  projectId: "clone-2f57f",
  storageBucket: "clone-2f57f.appspot.com",
  messagingSenderId: "460958698413",
  appId: "1:460958698413:web:addf6a492a00bc0a78ef24",
  measurementId: "G-BC80JZ0V37",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();


export {db,auth} ;