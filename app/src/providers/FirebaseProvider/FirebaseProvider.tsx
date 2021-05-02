import * as React from "react"
import firebase from "firebase"

import { Props } from "./FirebaseProvider.types";

export const FirebaseContext = React.createContext<unknown | undefined>(undefined)

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIRESTORE_API_KEY,
  authDomain: process.env.GATSBY_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIRESTORE_APP_ID,
  measurementId: process.env.GATSBY_FIRESTORE_MESURMENT_ID
};

console.log({ firebaseConfig })
const firebaseApp = firebase.initializeApp(firebaseConfig)

export const FirebaseProvider = ({ children }: Props) => (
  <FirebaseContext.Provider value={{ firebase: firebaseApp }}>
    {children}
  </FirebaseContext.Provider>
)
