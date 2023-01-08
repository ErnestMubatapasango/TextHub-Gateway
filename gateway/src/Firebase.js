// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn0cPfU59OyswPJ6YDk71OTiW_uJB1FkY",
  authDomain: "texthub-gateway.firebaseapp.com",
  projectId: "texthub-gateway",
  storageBucket: "texthub-gateway.appspot.com",
  messagingSenderId: "664398570501",
  appId: "1:664398570501:web:9687d9a5f58cfe30eee86c",
  measurementId: "G-QHJ1T7L0BQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);