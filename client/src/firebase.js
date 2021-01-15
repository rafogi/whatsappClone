import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDg6CYt6YOy57XeUw1S_hbLGaU0SoEEh4Q",
  authDomain: "whatsappclone-8bc4f.firebaseapp.com",
  projectId: "whatsappclone-8bc4f",
  storageBucket: "whatsappclone-8bc4f.appspot.com",
  messagingSenderId: "87343275396",
  appId: "1:87343275396:web:5766fdf30fbefd759511d1",
  measurementId: "G-NY0XMXKVF6"
};

const firebaseApp= firebase.initializeAPP
(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.
GoogleAuthProvider();

export {auth, provider};
export default db;