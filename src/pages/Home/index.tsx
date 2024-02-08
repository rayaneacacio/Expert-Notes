import logoSvg from "../../assets/logo.svg";
import arrowUpRightSvg from "../../assets/arrow-up-right.svg";

import { NoteCard } from "../../components/NoteCard";
import { Dialog } from "../../components/Dialog";

import { Container } from "./style";

export function Home() {
  function handleOpenModalNewNote(): void {
    (document.querySelector(".dialogNewNote")! as HTMLElement).style.display = "block";
  }

  return (
    <Container>
      <img src={ logoSvg } alt="logo expert notes" />

      <h1>Busque em suas notas...</h1>

      <div className="border"></div>

      <main>
        <button className="newNote" onClick={ handleOpenModalNewNote }>
          <div className="buttonIcon"> <img src={ arrowUpRightSvg } alt="" /> </div>
          <h2>Adicionar nota</h2>
          <p>Grave uma nota em áudio que será convertida para texto automaticamente.</p>
        </button>

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />

        <NoteCard date={ new Date() } content="O Drizzle possui um plugin do ESLint para evitar que realizemos updates ou deletes sem where... Para configurar o plugin, é preciso instalar como abaixo:" />
      </main>

      <Dialog className="dialogNewNote" newNote />
      <Dialog className="dialogAudioNote" audioNote />
    </Container>
  )
}