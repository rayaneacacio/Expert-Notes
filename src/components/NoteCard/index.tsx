import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Container } from "./style"
import { NoteModal } from "../NoteModal";

interface NoteCardProps {
  id: string,
  date: Date,
  content: string,
  handleDeleteNote: (id: string) => void,
}

export function NoteCard(props: NoteCardProps) {
  function handleOpenNote(): void {
    (document.querySelector(".dialogNoteCard")! as HTMLElement).style.display = "block";
  }

  return (
    <Container>
      <button onClick={ handleOpenNote }>
        <h2>{ formatDistanceToNow(props.date, { locale: ptBR, addSuffix: true }) }</h2>
        <p>{ props.content }</p>
      </button>

      <NoteModal className="dialogNoteCard" handleDeleteNote={ props.handleDeleteNote } note={{
        id: props.id,
        date: props.date,
        content: props.content,
      }} />
    </Container>
  )
}