import { AppProviders } from "../providers/AppProviders/AppProviders"
import { LoginContent } from "../templates/LoginContent/LoginContent"

function LoginPage() {
  return (
    <AppProviders>
      <LoginContent />
    </AppProviders>
  )
}

export default LoginPage
