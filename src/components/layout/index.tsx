import { Aside } from "../aside";
import { Content } from "../content";
import { MainHeader } from "../main-header";
import { Container } from "./styles";

export function Layout() {
  return (
    <Container>
      <MainHeader />
      <Aside />
      <Content />
    </Container>
  );
}
