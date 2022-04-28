// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBowuWNtmBA-54xmiFTu7ca8v9SqG1qv5Q",
  authDomain: "moovcoder.firebaseapp.com",
  projectId: "moovcoder",
  storageBucket: "moovcoder.appspot.com",
  messagingSenderId: "756861050860",
  appId: "1:756861050860:web:2e860b6f0a0260a0feaac9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;