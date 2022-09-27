// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
import { getEnvironments } from '../helpers';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//console.log(import.meta.env.MODE);
//console.log(import.meta.env);
//console.log(process.env);
const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,
} = getEnvironments();
//console.log(env);

// Your web app's Firebase configuration
// Dev / Prod
/*const firebaseConfig = {
  apiKey: 'AIzaSyCnOJQlAuM-1WBntKgsIEqblc8SYIXZKhE',
  authDomain: 'react-cursos-4f0ad.firebaseapp.com',
  projectId: 'react-cursos-4f0ad',
  storageBucket: 'react-cursos-4f0ad.appspot.com',
  messagingSenderId: '523232131667',
  appId: '1:523232131667:web:97b76299130bd34bc724a6',
};*/

//Testing
// const firebaseConfig = {
//  apiKey: "AIzaSyBQpgof6kkz2DMaudaLt6u7_zDsMygFikI",
//   authDomain: "testing-6cf0c.firebaseapp.com",
//   projectId: "testing-6cf0c",
//   storageBucket: "testing-6cf0c.appspot.com",
//   messagingSenderId: "593779320478",
//   appId: "1:593779320478:web:4fba065e58c11f38823d8f",
//   measurementId: "G-3LZX9G8408"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
  measurementId: VITE_MEASUREMENTID,
};

//console.log(firebaseConfig); ***

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
