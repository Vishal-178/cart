import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import * as serviceWorker from 'serviceWorker';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBH4r65uRi1lUjm4Dc5EkVE5--wPeQMRJU",
  authDomain: "cart-b3ed6.firebaseapp.com",
  projectId: "cart-b3ed6",
  storageBucket: "cart-b3ed6.appspot.com",
  messagingSenderId: "294140013831",
  appId: "1:294140013831:web:a9d8b473079008a84669a2"
};
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

