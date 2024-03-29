import type { FirebaseApp } from "firebase/app"
import type { Auth } from "firebase/auth"

export type FirebaseModules = {
  app: FirebaseApp
  auth: Auth
}

export type FirebaseProviderProps = React.PropsWithChildren<unknown>
