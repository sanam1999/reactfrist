
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBikUioQQWqMepO5T-N4voQTQoImWQUv1s",
  authDomain: "login-base-ab247.firebaseapp.com",
  projectId: "login-base-ab247",
  storageBucket: "login-base-ab247.firebasestorage.app",
  messagingSenderId: "757575272827",
  appId: "1:757575272827:web:ea01e36786baa90be955de",
  measurementId: "G-J80C1F85R0"
};


const app = initializeApp(firebaseConfig);

export const authantication = getAuth(app);
export const GoogleAuthProvide = new GoogleAuthProvider();
export const db = getFirestore(app); 