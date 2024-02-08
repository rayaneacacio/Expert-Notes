import logoSvg from "../../assets/logo.svg";
import arrowUpRightSvg from "../../assets/arrow-up-right.svg";

import { NoteCard } from "../../components/NoteCard";
import { Dialog } from "../../components/Dialog";

import { Container } from "./style";

export function Home() {
  return (
    <Container>
      <img src={ logoSvg } alt="logo expert notes" />

      <h1>Busque em suas notas...</h1>

      <div className="border"></div>

      <main>
        <div className="newNote">
          <button className="buttonIcon"> <img src={ arrowUpRightSvg } alt="" /> </button>
          <h2>Adicionar nota</h2>
          <p>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </div>

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />
      </main>

      <Dialog note={{
        date: new Date(),
        content: "rg3qtgqeth"
      }} />
    </Container>
  )
}