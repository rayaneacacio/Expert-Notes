import logo from "../../assets/logo.svg";
import arrowUpRight from "../../assets/arrow-up-right.svg";

import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <img src={ logo } alt="logo expert notes" />

      <h1>Busque em suas notas...</h1>

      <div className="border"></div>

      <div>
        <div className="newNote">
          <h2>Adicionar nota</h2>
          <p>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>


      </div>
    </Container>
  )
}