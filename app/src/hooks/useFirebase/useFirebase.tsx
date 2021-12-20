import * as React from "react"
import { useDispatch, useSelector } from 'react-redux'

import { FirebaseContext } from "../../providers/FirebaseProvider/FirebaseProvider";
import { login, logout as logoutAction, selectCurrentUser, setAuthLoading } from "../../reducers/auth";

export const useFirebase = () => {
  const firebaseApp = React.useContext(FirebaseContext);

  if(firebaseApp === undefined){
    throw new Error('Missing firebase')
  }

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)
  React.useEffect(() => {
    const setUser = (user: { uid: string; email: any; displayName: any; photoURL: any; } | null) => {
      dispatch(setAuthLoading({ loading: true }));
      if (user) {
        dispatch(login({ uid: user.uid, email: user.email, name: user.displayName, avatar: user.photoURL}))
      } else {
        dispatch(logoutAction())
      }
    }
    const unsubscribe = firebaseApp.auth().onAuthStateChanged(setUser)

    return () => unsubscribe()
  }, [dispatch])

  const getUser = () => {
    return firebaseApp.auth().currentUser
  }

  const updateUser = async (user: any | null) => {
    return await firebaseApp.auth().updateCurrentUser(user)
  }

  const logout = () => {
    return firebaseApp.auth().signOut()
  }

  const loginWithEmail = (email: string, password: string) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password)
  }
 
  return {
    getUser: () => getUser,
    updateUser: ()=> updateUser,
    logout: () => logout(),
    login: (email: string, password: string) => loginWithEmail(email, password),
    currentUser
  }
}