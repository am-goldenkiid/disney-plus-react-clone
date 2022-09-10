import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA-6Lhn7I6-h-_NeyEKhm3aany-RpgSGGM",
    authDomain: "disney-plus-clone-8ba8d.firebaseapp.com",
    projectId: "disney-plus-clone-8ba8d",
    storageBucket: "disney-plus-clone-8ba8d.appspot.com",
    messagingSenderId: "653942617398",
    appId: "1:653942617398:web:370a3536eca283baf9ef97",
    measurementId: "G-NE1BVZZRM1"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore(firebaseApp)
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  const storage = getStorage(firebaseApp)

  export {db, auth, provider, storage};
  export default db;
  