
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBSIalSESDUz8S2J_WGOPew2I-o9fa0O4A",
  authDomain: "fcm-login-fd4f1.firebaseapp.com",
  projectId: "fcm-login-fd4f1",
  storageBucket: "fcm-login-fd4f1.appspot.com",
  messagingSenderId: "713404780248",
  appId: "1:713404780248:web:7fb5df5844f0d69562d1ad"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export {auth}