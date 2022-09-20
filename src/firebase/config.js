// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCnOJQlAuM-1WBntKgsIEqblc8SYIXZKhE',
  authDomain: 'react-cursos-4f0ad.firebaseapp.com',
  projectId: 'react-cursos-4f0ad',
  storageBucket: 'react-cursos-4f0ad.appspot.com',
  messagingSenderId: '523232131667',
  appId: '1:523232131667:web:97b76299130bd34bc724a6',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
