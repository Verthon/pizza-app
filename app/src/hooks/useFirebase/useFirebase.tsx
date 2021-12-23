import * as React from "react"
import { useDispatch, useSelector } from "react-redux"
import { onAuthStateChanged, updateCurrentUser, User, signOut, signInWithEmailAndPassword } from "firebase/auth"

import { FirebaseContext } from "../../providers/FirebaseProvider/FirebaseProvider"
import { login, logout as logoutAction, selectCurrentUser, setAuthLoading } from "../../reducers/auth"

export const useFirebase = () => {
  const firebaseApp = React.useContext(FirebaseContext)

  if (firebaseApp === undefined) {
    throw new Error("Missing firebase")
  }

  const { auth } = firebaseApp

  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  React.useEffect(() => {
    const setUser = (user: User | null) => {
      dispatch(setAuthLoading({ loading: true }))
      if (user) {
        dispatch(
          login({
            uid: user.uid,
            email: user.email,
            name: user.displayName,
            avatar: user.photoURL,
          })
        )
      } else {
        dispatch(logoutAction())
      }
    }
    const unsubscribe = onAuthStateChanged(auth, setUser)

    return unsubscribe
  }, [dispatch])

  const getUser = () => {
    return auth.currentUser
  }

  const updateUser = (user: User | null) => {
    return updateCurrentUser(auth, user)
  }

  const logout = () => {
    return signOut(auth)
  }

  const loginWithEmail = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  return {
    getUser: () => getUser,
    updateUser: () => updateUser,
    logout: () => logout(),
    login: (email: string, password: string) => loginWithEmail(email, password),
    currentUser,
  }
}
