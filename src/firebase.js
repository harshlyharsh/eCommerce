import * as firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO-mmXq9bMjD_FBWjopLWP-O1yKvD-pxg",
  authDomain: "ecommerce-23d9b.firebaseapp.com",
  projectId: "ecommerce-23d9b",
  storageBucket: "ecommerce-23d9b.appspot.com",
  messagingSenderId: "391016754272",
  appId: "1:391016754272:web:17aef8886bbc39b548a705"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
