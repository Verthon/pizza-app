import { AccountContent } from "../components/organisms/AccountContent/AccountContent"
import { Layout } from "../layouts/Layout/Layout"
import { AppProviders } from "../providers/AppProviders/AppProviders"

function AccountPage() {
  return (
    <AppProviders>
      <Layout>
        <AccountContent />
      </Layout>
    </AppProviders>
  )
}

export default AccountPage
