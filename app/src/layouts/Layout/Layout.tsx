import { Navbar } from "../../components/organisms/Navbar/Navbar"
import { Container } from "../../components/atoms/Container/Container"
import { Props } from "./Layout.types"
import { InfoBar } from "../../components/molecules/InfoBar/InfoBar"
import { useAppState } from "../../hooks/useAppState/useAppState"

export function Layout({ children }: Props) {
  const notificationMessage = useAppState((state) => state.notifications.message)
  const notificationType = useAppState((state) => state.notifications.type)

  return (
    <>
      <InfoBar message={notificationMessage} type={notificationType} />
      <Navbar />
      <Container>{children}</Container>
    </>
  )
}
