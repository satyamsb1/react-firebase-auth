// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
    apiKey: "AIzaSyCXl4cAtRPWerBGNLmgKwnQ8wljy1c-Wds",
    authDomain: "react-auth-e8608.firebaseapp.com",
    projectId: "react-auth-e8608",
    storageBucket: "react-auth-e8608.appspot.com",
    messagingSenderId: "549867520446",
    appId: "1:549867520446:web:c75c07fd448aeea7d3f9ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);