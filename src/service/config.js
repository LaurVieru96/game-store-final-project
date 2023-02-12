

import firebase from "firebase/compat/app";
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCxzcSQdAMOKw4geOM2gc-iYSj3nvvargE",
    authDomain: "simplex-85e28.firebaseapp.com",
    projectId: "simplex-85e28",
    storageBucket: "simplex-85e28.appspot.com",
    messagingSenderId: "758039624394",
    appId: "1:758039624394:web:f22afe342dd54a1202d233",
    measurementId: "G-8975Z2VHE2",
};



const app = firebase.initializeApp(firebaseConfig);
console.log(app)
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;