//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
const firebaseConfig = {
    apiKey: "AIzaSyBySWFd3G54OyC3BUPjsPkGKJ-Swzyp2b0",
    authDomain: "fir-96f09.firebaseapp.com",
    projectId: "fir-96f09",
    storageBucket: "fir-96f09.appspot.com",
    messagingSenderId: "1030126064016",
    appId: "1:1030126064016:web:9f40c6ccfeb8d364a4e315"
  };

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const storage = firebase.storage();
