// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD0TAxFoMgtLDDHK3Ht9mtai5FUbt40m90',
  authDomain: 'prepwizard-be8e9.firebaseapp.com',
  projectId: 'prepwizard-be8e9',
  storageBucket: 'prepwizard-be8e9.firebasestorage.app',
  messagingSenderId: '54621404564',
  appId: '1:54621404564:web:62cc8f68ba5c9b4ddc2381',
  measurementId: 'G-H38XN1LS2R',
};

// Initialize Firebase
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
