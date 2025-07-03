// firebaseConfig.js
import Constants from "expo-constants";
import { initializeApp } from "firebase/app";
import { getAuth }        from "firebase/auth";
import { getFirestore }   from "firebase/firestore";

// Depending on your SDK version, extra lives under manifest or expoConfig:
const manifest = Constants.manifest ?? Constants.expoConfig;
const extra    = manifest.extra;

const firebaseConfig = {
  apiKey:            extra.firebaseApiKey,
  authDomain:        extra.firebaseAuthDomain,
  projectId:         extra.firebaseProjectId,
  storageBucket:     extra.firebaseStorageBucket,
  messagingSenderId: extra.firebaseMessagingSenderId,
  appId:             extra.firebaseAppId,
  measurementId:     extra.firebaseMeasurementId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db   = getFirestore(app);
