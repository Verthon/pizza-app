import {Layout} from "../layouts/Layout/Layout"
import {AppProviders} from "../providers/AppProviders/AppProviders"

function AboutPage() {
  return (
    <AppProviders>
      <Layout>
        <p>About page</p>
      </Layout>
    </AppProviders>
  )
}

export default AboutPage
