import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

initializeApp(firebaseConfig);

// https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0
const auth = getAuth();
const provider = new GoogleAuthProvider();

export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

// https://firebase.google.com/docs/auth/web/google-signin?hl=en&authuser=0#next_steps
export function logout() {
  signOut(auth).catch(console.error);
}

// https://firebase.google.com/docs/auth/web/manage-users#get_the_currently_signed-in_user
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, (user) => {
    callback(user);
  });
}
