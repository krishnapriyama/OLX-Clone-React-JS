import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

  const firebaseConfig = {
    apiKey: "AIzaSyDTmLSmRmKShi_0e-265gfJOnit1V004vc",
    authDomain: "olx-clone-23416.firebaseapp.com",
    projectId: "olx-clone-23416",
    storageBucket: "olx-clone-23416.appspot.com",
    messagingSenderId: "427650120001",
    appId: "1:427650120001:web:1d607d354b580e8f4d09c0",
    measurementId: "G-XN19G93M3X"
  };

export default firebase.initializeApp(firebaseConfig)