// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// import firebase from "firebase";

// const firebaseConfig = {
// apiKey: "AIzaSyD7aMOywg05AMwHw2XQ71KU2rQHG9xbybA",
// authDomain: "clone-a2cb9.firebaseapp.com",
// projectId: "clone-a2cb9",
// storageBucket: "clone-a2cb9.appspot.com",
// messagingSenderId: "163776007665",
// appId: "1:163776007665:web:20b30d5ff24413f53b8850",
// measurementId: "G-Q5FZJVP5CE",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyD7aMOywg05AMwHw2XQ71KU2rQHG9xbybA",
  authDomain: "clone-a2cb9.firebaseapp.com",
  projectId: "clone-a2cb9",
  storageBucket: "clone-a2cb9.appspot.com",
  messagingSenderId: "163776007665",
  appId: "1:163776007665:web:20b30d5ff24413f53b8850",
  measurementId: "G-Q5FZJVP5CE",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const storage = getStorage(app);
//const provider=new GoogleAuthProvider()

export { db, auth, storage };
