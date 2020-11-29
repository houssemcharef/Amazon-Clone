import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDg2iIgSl_QlnOEurlpgl2lR18bfmafpXI",
    authDomain: "clone-3b97e.firebaseapp.com",
    databaseURL: "https://clone-3b97e.firebaseio.com",
    projectId: "clone-3b97e",
    storageBucket: "clone-3b97e.appspot.com",
    messagingSenderId: "318445754078",
    appId: "1:318445754078:web:89290cff058ed5752e144f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };




  