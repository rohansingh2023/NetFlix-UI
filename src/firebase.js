import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB4e7yD6IFQcgne5hha7Y31BUH5MTYE2w0",
  authDomain: "netflix-clone-69f27.firebaseapp.com",
  projectId: "netflix-clone-69f27",
  storageBucket: "netflix-clone-69f27.appspot.com",
  messagingSenderId: "620094160316",
  appId: "1:620094160316:web:4ea0b5d2e8c9ff2302bfb9",
});

const auth = firebase.auth();

export { auth };
