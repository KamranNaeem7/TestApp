import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
import "@firebase/auth";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC3LpzJ-B9FOcMVsXA7U6ogxzQ-ay4URlA",
  authDomain: "testapp-a1af3.firebaseapp.com",
  databaseURL: "https://testapp-a1af3-default-rtdb.firebaseio.com",
  projectId: "testapp-a1af3",
  storageBucket: "testapp-a1af3.appspot.com",
  messagingSenderId: "252588640427",
  appId: "1:252588640427:web:ade43a6c4bea4690500fee",
  measurementId: "G-4G0WWG1GG8",
};
// if user has already opened app atleasonce connect with FIREBASE
if (firebase.apps.length > 0 === false) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
