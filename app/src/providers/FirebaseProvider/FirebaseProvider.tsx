import * as React from "react"
import { initializeApp } from "firebase/app"
import { initializeAuth } from "firebase/auth"

import type { FirebaseModules, Props } from "./FirebaseProvider.types"

export const FirebaseContext = React.createContext<FirebaseModules | undefined>(undefined)

const firebaseConfig = {
  apiKey: process.env.GATSBY_FIRESTORE_API_KEY,
  authDomain: process.env.GATSBY_FIRESTORE_AUTH_DOMAIN,
  projectId: process.env.GATSBY_FIRESTORE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIRESTORE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIRESTORE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIRESTORE_APP_ID,
  measurementId: process.env.GATSBY_FIRESTORE_MESURMENT_ID,
}

const firebaseApp = initializeApp(firebaseConfig)
const auth = initializeAuth(firebaseApp)

export const FirebaseProvider = ({ children }: Props) => {
  return <FirebaseContext.Provider value={{ app: firebaseApp, auth }}>{children}</FirebaseContext.Provider>
}
