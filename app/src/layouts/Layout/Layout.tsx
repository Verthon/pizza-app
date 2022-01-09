import { Navbar } from "../../components/organisms/Navbar/Navbar"
import { Container } from "../../components/atoms/Container/Container"
import { Props } from "./Layout.types"
import { InfoBar } from "../../components/molecules/InfoBar/InfoBar"
import { useAppState } from "../../hooks/useAppState/useAppState"
import { PageTransition } from "../../components/molecules/PageTransition/PageTransition"

export function Layout({ children }: Props) {
  const notificationMessage = useAppState((state) => state.notifications.message)
  const notificationType = useAppState((state) => state.notifications.type)

  return (
    <>
      <InfoBar message={notificationMessage} type={notificationType} />
      <Navbar />
      <PageTransition>
        <Container>{children}</Container>
      </PageTransition>
    </>
  )
}
