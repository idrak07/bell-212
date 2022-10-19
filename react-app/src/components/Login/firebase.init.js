import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDuFbhOp659gOFo4wf4L_zZWdrCdNrb9_s",
  authDomain: "cbt-bell212.firebaseapp.com",
  projectId: "cbt-bell212",
  storageBucket: "cbt-bell212.appspot.com",
  messagingSenderId: "687230744264",
  appId: "1:687230744264:web:8b92ec3cbd876d3765d7fd"
};
 const fire =  firebase.initializeApp(firebaseConfig);

 export default fire;

