// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: Bun.env.FIREBASE_API_KEY,
  authDomain: Bun.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: Bun.env.FIREBASE_DATABASE_URL,
  projectId: Bun.env.FIREBASE_PROJECT_ID,
  storageBucket: Bun.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: Bun.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: Bun.env.FIREBASE_APP_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
