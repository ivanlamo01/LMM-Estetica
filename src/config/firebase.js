import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "202283008769",
    appId: "1:202283008769:web:0431bcac3bc7f00f649100",
    measurementId: "G-3TXCLT66M0"
};
firebase.initializeApp(firebaseConfig);

export default firebase