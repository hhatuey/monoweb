// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics, isSupported } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDu7x75_hyQwmZh0JO5D2gViflNcG5HuWA',
  authDomain: 'remoffice-292f2.firebaseapp.com',
  projectId: 'remoffice-292f2',
  storageBucket: 'remoffice-292f2.appspot.com',
  messagingSenderId: '708176389200',
  appId: '1:708176389200:web:60b6855504e192d4d55d55',
  measurementId: 'G-582HRNYEKJ',
};

// Initialize Firebase
export function initMetrics() {
  const app = initializeApp(firebaseConfig);
}
